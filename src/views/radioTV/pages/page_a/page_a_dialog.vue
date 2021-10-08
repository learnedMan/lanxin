<template>
  <div class="page_a_dialog">
    <!-- 新增/修改频道弹窗 -->
    <el-dialog width="1200px"
        :show-close= false
        :close-on-press-escape = false
        :close-on-click-modal = false
        v-if="dialogFormVisible"
        :visible.sync="dialogFormVisible"
        v-loading="importLoading"
        element-loading-text="模板导入中..."
    >
        <span slot="title" class="el-dialog__title">
          <span>编辑节目单模板</span>
          <el-button v-points = "1500" type="primary" size="small" style="margin-left: 20px" @click="downProgramme">下载节目单模板</el-button>
          <el-upload
            class="upload-demo"
            name="excel"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-exce"
            :action="actionUrl"
            :data="actionData"
            :headers="uploadHeader"
            :on-success="handleAvatarSuccess"
            :on-error="handleAvatarError"
            :before-upload="beforeAvatarUpload"
            :show-file-list="false"
          >
            <el-button v-points = "1500" size="small" type="primary">导入模板</el-button>
          </el-upload>
        </span>
          <el-dialog
            width="540px"
            :title="dialogTitle"
            :show-close= false
            :close-on-press-escape = false
            :close-on-click-modal = false
            :visible.sync="innerVisible"
            append-to-body>
            <el-form
              :model="form"
              :rules="rules"
              ref="dataForm">
                <el-form-item label-width="120px" label="节目名称:" prop="name">
                  <el-input
                    style="width: 350px"
                    placeholder="请输入节目名称"
                    v-model="form.name"
                  ></el-input>
                </el-form-item>
                <el-form-item label-width="120px" label="开始时间:" prop="time">
                  <el-time-picker
                    v-model="form.time"
                    value-format="HH:mm:ss"
                    placeholder="请选择时间">
                  </el-time-picker>
                </el-form-item>
                <el-form-item label-width="120px" label="是否允许回看:" prop="extra.allow_replay">
                  <el-select v-model="form.extra.allow_replay" placeholder="请选择">
                      <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                  </el-select>
                </el-form-item>
            </el-form>
            <div class="dialog-footer" slot="footer">
              <el-button v-points = "1500" @click="innercloseDialog">取 消</el-button>
              <el-button v-points = "1500" @click="innerenterDialog" type="primary">确 定</el-button>
            </div>
          </el-dialog>
            <span>直播节日模板：</span>
            <el-radio-group @change="chooseradio" v-model="data.extra.template.type">
                <el-radio :label="'daily'">每日重复(创建单日节目单模板，每日重复)</el-radio>
                <el-radio :label="'weekly'">每周重复(创建周一至周日节目单模板，每周循环)</el-radio>
                <el-radio :label="'none'">不启用模板</el-radio>
            </el-radio-group>
            <div style="min-height:500px;">
                <div v-show="data.extra.template.type=='daily'||data.extra.template.type=='weekly'" style="margin-top:30px;display:flex;">
                    <el-tabs @tab-click="changeweek" v-model="weekday" v-show="data.extra.template.type=='weekly'" class="left" tab-position="left" style="height:500px;margin-right:10px;width:100px;">
                        <el-tab-pane label="周一" name="1"></el-tab-pane>
                        <el-tab-pane label="周二" name="2"></el-tab-pane>
                        <el-tab-pane label="周三" name="3"></el-tab-pane>
                        <el-tab-pane label="周四" name="4"></el-tab-pane>
                        <el-tab-pane label="周五" name="5"></el-tab-pane>
                        <el-tab-pane label="周六" name="6"></el-tab-pane>
                        <el-tab-pane label="周日" name="7"></el-tab-pane>
                    </el-tabs>
                    <div class="right" style="flex-grow:1;">
                        <el-button v-points = "1500" @click="adddata" style="margin-bottom:20px;" type="primary" size="mini" >新增</el-button>
                        <el-table
                            v-if="tableflag"
                            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                            border
                            :data="dataList">
                            <el-table-column label="节目名称" align="center" prop="name" :show-overflow-tooltip="true" />
                            <el-table-column label="开始时间" align="center" prop="time" :show-overflow-tooltip="true" />
                            <el-table-column label="播放时长" align="center" prop="extra.duration" :show-overflow-tooltip="true" />
                            <el-table-column label="允许回看" align="center" :show-overflow-tooltip="true" >
                                <template slot-scope="scope">
                                  {{scope.row.extra.allow_replay|formatallow_replay}}
                                </template>
                            </el-table-column>
                            <el-table-column width="150px" label="操作" align="center">
                                <template slot-scope="scope">
                                  <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope)"></Iconbutton>
                                  <Iconbutton icontype="sc" label="删除" @fatherMethod="deldata(scope)"></Iconbutton>
                                <!-- <el-button v-points = "1500"
                                    size="mini"
                                    type="text"
                                    icon="el-icon-edit"
                                    style="color:#E6A23C;"
                                    @click="editdata(scope)">修改</el-button>
                                <el-button v-points = "1500"
                                    size="mini"
                                    type="text"
                                    icon="el-icon-delete"
                                    style="color: #f56c6c"
                                    @click="deldata(scope)"
                                    >删除</el-button> -->
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
      <div class="dialog-footer" slot="footer">
        <el-button v-points = "1500" @click="closeDialog">取 消</el-button>
        <el-button v-points = "1500" @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  edittv_channel,

  } from '@/api/manage'
import { isArray } from '@/utils/validate';
  export default {
    name: 'page_a_dialog',
    data() {
      return {
          dialogFormVisible:false,
          //内部
          innerVisible: false,
          dialogTitle:'',
          form:{},
          rules: {
            time: [{ required: true, message: "请选择时间", trigger: "blur" }],
            "extra.allow_replay": [{ required: true, message: "请选择是否允许回看", trigger: "blur" }]
          },
          dialogType: "add",
          editIndex:'',

          dataList:[],
          dayList:[],
          weekList:{},
          tableflag:true,
          weekday:"1",
          statusoptions: [{
            value: 1,
            label: '是'
            },{
            value: 2,
            label: '否'
          }],
          data:'',
        importLoading: false
      }
    },
    filters: {
        formatallow_replay(val){
            if(val==1){
              return '是'
            }else{
              return '否'
            }
        },
    },
    created() {
      this.initForm();
    },
    computed: {
      /* 上传接口 */
      actionUrl() {
        return this.xlsxUrl
      },
      /* 上传的头部信息 */
      uploadHeader() {
        const Authorization = sessionStorage.getItem('token')
        const TempZone = sessionStorage.getItem('TempZone') || ''
        const TempSite = sessionStorage.getItem('TempSite') || ''
        return {
          Authorization,TempZone,TempSite
        }
      },
      actionData ({ data = {} }) {
        return {
          channel_id: data.id
        }
      }
    },
    methods:{
        getdata(data){
          this.data = JSON.parse(JSON.stringify(data));
        },
        changeweek(tab, event){
          this.returndataList();
        },
      // none:不启用,daily按日循环,weekly按周循环
        // 关闭窗口
        closeDialog() {
            // this.$confirm('此操作将不会保存已编辑的节目单, 是否继续?', '提示', {
            //   confirmButtonText: '确定',
            //   cancelButtonText: '取消',
            //   type: 'warning'
            // }).then(() => {
              this.dialogFormVisible = false;
            // }).catch(() => {
            // });
        },
        enterDialog(){
          // console.log(this.weekList)
            if(this.data.extra.template.type=='weekly'){
              if(this.weekList["1"]&&this.weekList["1"].length>0&&this.weekList["2"]&&this.weekList["2"].length>0&&this.weekList["3"]&&this.weekList["3"].length>0&&this.weekList["4"]&&this.weekList["4"].length>0&&this.weekList["5"]&&this.weekList["5"].length>0&&this.weekList["6"]&&this.weekList["6"].length>0&&this.weekList["7"]&&this.weekList["7"].length>0){

              }else{
                this.$message({
                  message: '选择每周重复，请保证每天至少有一个节目',
                  type: 'warning'
                });
                return;
              }
            }

            this.data.father = this.data.father.id;
            var template = {
              "list": {
                "daily": [],
                "weekly": {},
              },
              "type": ""
            }
            template.list.daily = this.dayList;
            template.list.weekly = this.weekList;
            template.type = this.data.extra.template.type;
            this.data.extra.template = template;
            edittv_channel(this.data.id,this.data).then(response => {
              this.$message({
                message: '修改成功',
                type: 'success'
              });
              this.dialogFormVisible = false;
              this.$parent.getList();
              this.weekday = '1';
            })
            // console.log(this.data)
        },
        //内部弹窗
        // 初始化表单
        initForm() {
          if (this.$refs.dataForm) {
            this.$refs.dataForm.resetFields();
          }
          this.form = {
              name: "",
              time: "",
              extra: {
                  duration: "",
                  allow_replay: 1
              }
          };
        },
        adddata(){
          this.initForm();
          this.innerVisible = true;
          this.dialogTitle = "新增节目";
          this.dialogType = "add";
        },
        editdata(data){
          // console.log(data)
          this.initForm();
          this.editIndex = data.$index;
          this.form = JSON.parse(JSON.stringify(data.row));
          this.innerVisible = true;
          this.dialogTitle = "修改节目";
          this.dialogType = "edit";
        },
        //删除栏目
        deldata(data){
          var row = data.row;
          this.editIndex = data.$index;
          this.$confirm('此操作将永久删除节目名称为'+row.name+'的节目, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
              if(this.data.extra.template.type=='daily'){

                this.dayList.splice(this.editIndex,1);

                // this.datalistformat(this.weekList[this.dayList])
                this.datalistformat(this.dayList)

                this.dataList = this.dayList;
                this.innerVisible = false;
                this.$message({
                  message: '删除成功',
                  type: 'success'
                });
              }else if(this.data.extra.template.type=='weekly'){
                this.weekList[this.weekday].splice(this.editIndex,1);
                this.datalistformat(this.weekList[this.weekday])
                this.dataList = this.weekList[this.weekday];
                this.innerVisible = false;
                this.$message({
                  message: '删除成功',
                  type: 'success'
                });
              }else{
              }
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        innercloseDialog(){
          this.innerVisible = false;
        },
        returntime(at,bt){
          function toDouble(i){
            return i=i<10?'0'+i:i;
          }
          var init = '1970/1/1 ';
          var at = at|| "09:01:22";
          var bt = bt|| "22:22:22";
          var s1 = new Date(init+at)
          var s2 = new Date(init+bt)
          var runTime = parseInt((s2.getTime() - s1.getTime()) / 1000);
            var year = Math.floor(runTime / 86400 / 365);
            runTime = runTime % (86400 * 365);
            var month = Math.floor(runTime / 86400 / 30);
            runTime = runTime % (86400 * 30);
            var day = Math.floor(runTime / 86400);
            runTime = runTime % 86400;
            var hour = Math.floor(runTime / 3600);
            runTime = runTime % 3600;
            var minute = Math.floor(runTime / 60);
            runTime = runTime % 60;
            var second = runTime;
            return toDouble(hour)+':'+toDouble(minute)+':'+toDouble(second);
        },
        datalistformat(list){
          list.sort(function(a, b) {
            return b.time < a.time ? 1 : -1
          })
          // console.log(list)
          for(var i=0;i<list.length;i++){
            if(i<list.length-1){
              list[i].extra.duration = this.returntime(list[i].time,list[i+1].time);
            }else{
              list[i].extra.duration =this.returntime(list[i].time,"24:00:00");
            }
          }
          return list
        },
        innerenterDialog(){//往里新增数据
          this.$refs["dataForm"].validate((valid) => {
            if (!valid) return;
            var data = JSON.parse(JSON.stringify(this.form))
            if (this.dialogType=='edit') {
              if(this.data.extra.template.type=='daily'){
                for(var i=0;i<this.dayList.length;i++){
                  if(data.time==this.dayList[i].time&&i!=this.editIndex){
                    this.$message({
                      message: '开始时间重复，请修改',
                      type: 'warning'
                    });
                    return
                  }
                }

                this.dayList.splice(this.editIndex,1,data);

                this.datalistformat(this.dayList)
                this.dataList = this.dayList;
                this.innerVisible = false;
              }else if(this.data.extra.template.type=='weekly'){
                for(var i=0;i<this.weekList[this.weekday].length;i++){
                  if(data.time==this.weekList[this.weekday][i].time&&i!=this.editIndex){
                    this.$message({
                      message: '开始时间重复，请修改',
                      type: 'warning'
                    });
                    return
                  }
                }
                this.weekList[this.weekday].splice(this.editIndex,1,data);
                this.datalistformat(this.weekList[this.weekday])
                this.dataList = this.weekList[this.weekday];
                this.innerVisible = false;
              }else{
              }
            }else{
                  if(this.data.extra.template.type=='daily'){
                    for(var i=0;i<this.dayList.length;i++){
                      if(data.time==this.dayList[i].time){
                        this.$message({
                          message: '开始时间重复，请修改',
                          type: 'warning'
                        });
                        return
                      }
                    }
                    this.dayList.push(data)
                    this.datalistformat(this.dayList)
                    this.dataList = this.dayList;
                    this.innerVisible = false;
                  }else if(this.data.extra.template.type=='weekly'){
                    // console.log(this.weekList[this.weekday])
                    // console.log(data)
                    // return
                    if( isArray(this.weekList[this.weekday])){
                      for(var i=0;i<this.weekList[this.weekday].length;i++){
                        if(data.time==this.weekList[this.weekday][i].time){
                          this.$message({
                            message: '开始时间重复，请修改',
                            type: 'warning'
                          });
                          return
                        }
                      }
                      this.weekList[this.weekday].push(data);
                    }else{
                      this.weekList[this.weekday] = [];
                      this.weekList[this.weekday].push(data);
                    }
                    this.datalistformat(this.weekList[this.weekday])
                    this.dataList = this.weekList[this.weekday];
                    this.innerVisible = false;
                  }else{
                    // this.dataList = [];
                  }
            }
          })
          // this.innerVisible = false;
        },
        chooseradio(){
            this.tableflag= false
            this.$nextTick(()=>{
                this.tableflag = true
            })
            this.returndataList();
            // console.log(this.dayList)
        },
        returndataList(){
          this.dataList = [];
          if(!this.data.extra.template){
            var template = {
              "list": {
                "daily": [],
                "weekly": {},
              },
              "type": "none"
            }
            this.data.extra.template = template;
          }

          if(this.data.extra.template.type=='daily'){
            this.dayList = this.data.extra.template.list.daily;
            this.dataList = this.dayList;
          }else if(this.data.extra.template.type=='weekly'){
            this.weekList = this.data.extra.template.list.weekly;
            if(!this.weekList){
              this.weekList = {}
              this.weekList[this.weekday] = [];
            }
            this.dataList = this.weekList[this.weekday];
          }else{
            this.dataList = [];
          }
          // console.log(this.dataList)
        },
      /* 下载节目单 */
      downProgramme () {
        const origin = location.origin;
        window.location.href = `${origin}/api/channels/downloadProgramTemplate`;
      },
      /* 上传前 */
      beforeAvatarUpload () {
        this.importLoading = true;
      },
      /* 导入模板成功 */
      handleAvatarSuccess (res) {
        if (res.status_code >= 200 && res.status_code < 300) {
          this.$message.success('导入成功!')
          this.$parent.getList();
          this.dialogFormVisible = false;
        } else {
          this.$message.error('导入失败!')
        }
        this.importLoading = false;
      },
      /* 导入失败 */
      handleAvatarError (res) {
        this.$message.error('导入失败, 服务故障!');
        this.importLoading = false;
      }
    }
  }

</script>
<style lang="scss">
  .upload-demo {
    display: inline-block;
    margin-left: 20px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

.role-box {
  .el-tabs__content {
    height: calc(100vh - 150px);
    overflow: auto;
  }
}
</style>



<style scoped lang="scss">

.clearflex {
  *zoom: 1;
}

.clearflex:after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}

.fl-right {
  float: right;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.role-box {
  .el-tabs__content {
    height: calc(100vh - 150px);
    overflow: auto;
  }
}
</style>
