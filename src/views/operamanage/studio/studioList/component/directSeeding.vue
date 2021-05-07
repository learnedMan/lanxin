
<template>
    <div class="xl-direct-seeding">
      <div v-if="statement!='none'">
        <el-tabs style="width:80%;" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="(item,index) in streamlist" :key="index" :label="statement=='stream'?item.extra.name:''" :name="item.extra.name">
              <div style="height:400px;margin-bottom:30px;">
                    <el-table
                      :data="dataList"
                      height="400"
                      ref="tableList"
                      style="width: 100%;">
                      <el-table-column
                        prop="created_at"
                        label="时间">
                      </el-table-column>
                      <el-table-column
                        prop="content"
                        label="内容">
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="图片">
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="视频">
                      </el-table-column>
                    </el-table>
              </div>
          </el-tab-pane>
        </el-tabs>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="文字" prop="content">
              <el-input :autosize="{ minRows:4 }" type="textarea" v-model="ruleForm.content"></el-input>
            </el-form-item>
            <el-form-item label="图片/视频" prop="file">
              <upload-file ref="cupload" v-model="ruleForm.file"></upload-file>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">发送</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
          </div>
    </div>
</template>

<script>
  import {parseTime} from '@/utils/costum'
  import { getbroadcasts , getbroadcastStatement , addbroadcastStatement } from '@/api/manage'
  import uploadFile from '../uploadFile/uploadFile.vue'
  export default {
        data() {
          var mytoken = sessionStorage.getItem("token");
            return {
              importHeaders: { Authorization: mytoken }, //传图片时的token
              activeName: '',
              statement:'',
              ruleForm: {
                broadcast_id: '',
                host_name: '',
                content: '',
                stream_id: '',
                time: '',
                file:'',
                image:''
              },
              rules: {
                content: [
                  { required: true, message: '请填写文字', trigger: 'blur' }
                ]
              },
              statementquery:{
                id:'',
                stream_id:''
              },
              dataList: [],
              streamlist:[]
            }
        },
        components: {
          uploadFile
        },
        props:{
          id:Number
        },
        created(){
          // console.log(this.id)
          this.statementquery.id = this.id;
          // this.getbroadcasts();
          this.getbroadcastStatement();
        },
        updated () {
          // 滚动条
          this.downscroll()
        },
        computed: {
          VUE_APP_BASE_API() {
            return process.env.VUE_APP_BASE_API;
          },
        },
        methods: {
          //图片
          handleAvatarSuccess(name,res) {
            this.ruleForm[name] = res.path;
          },
          beforeAvatarUpload(file) {
            const isLt = file.size / 1024 / 1024 < 20;
            if (!isLt) {
              this.$message.error("上传头像图片大小不能超过 20MB!");
            }
            return isLt;
          },
          // 滚动条
          downscroll(){
            try {
              this.$refs.tableList.forEach(element => {
                element.bodyWrapper.scrollTop = element.bodyWrapper.scrollHeight
              });
            } catch (error) {
              // console.log('滚动失败')
            }
          },  
          // 获取直播间发言列表
          async getbroadcastStatement(){
            var data = await this.getbroadcasts();
            // console.log(this.statementquery)
            this.getdatalist();
          },
          getdatalist(){
            this.dataList = [];
            getbroadcastStatement(this.statementquery.id,this.statementquery.stream_id).then(res => {
              this.dataList = res.data.reverse();
              console.log(this.dataList)
            })
          },
          // 获取直播详情
          getbroadcasts() {
            return new Promise((resolve,reject)=>{
              getbroadcasts(this.id).then(res => {
                // console.log(res)
                this.streamlist = res.data.extra.stream;
                if(this.streamlist&&this.streamlist.length>0){
                  this.activeName = this.streamlist[0].extra.name
                  this.statementquery.stream_id = this.streamlist[0].id
                  this.statement = res.data.extra.statement;
                  // console.log(this.statementquery)
                }
                // console.log(this.streamlist)
                resolve(this.streamlist)
              })
            })
            
          },
          //切换机位
          handleClick(tab, event) {
            var index = parseInt(tab.index);
            this.statementquery.stream_id = this.streamlist[index].id
            this.getdatalist();
          },
          //发送文字
          submitForm(formName) {
            this.ruleForm.broadcast_id = this.statementquery.id;
            this.ruleForm.stream_id = this.statementquery.stream_id;
            this.ruleForm.host_name = '测试';
            this.ruleForm.time = parseTime(new Date());
            this.$refs[formName].validate((valid) => {
              if (valid) {
                addbroadcastStatement(this.ruleForm).then(response => {
                    this.$message({
                      message: '发送成功',
                      type: 'success'
                    });
                    this.resetForm('ruleForm');
                    this.getdatalist();

                    this.downscroll()
                })
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          //重置表单
          resetForm(formName) {
            this.$refs[formName].resetFields();
            this.$refs.cupload.fileList = [];
          }
        }
    }
</script>
<style lang="scss">

.el-table::before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
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
<style type="text/scss" lang="scss" scoped>
  .xl-direct-seeding {
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
  }
</style>