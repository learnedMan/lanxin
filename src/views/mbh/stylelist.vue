<template>
        <div style="padding:30px;" class="stylelist-container">
            <el-row :gutter="10" class="mb8">
                <el-col :span="1.5" style="margin-right:30px;">
                  <el-button
                    type="primary"
                    icon="el-icon-plus"
                    size="small"
                    @click="handleAdd"
                  >增加样式</el-button>
                </el-col>
                <el-col :span="15" style="margin-right:30px;">
                  <el-form>
                    <el-form-item label="筛选布局">
                      <el-select v-model="layout2" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                      <el-button style="margin-left:30px;" type="primary" icon="el-icon-search" size="small" @click="handleQuery">搜索</el-button>
                      <el-button style="margin-left:30px;" type="info" icon="el-icon-back" size="small" @click="handleBack">返回</el-button>
                    </el-form-item>
                  </el-form>
                </el-col>
            </el-row>

            <el-table
              :data="tableData"
              style="width: 100%;"
              row-key="id"
              border
              :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
              <el-table-column
                prop="id"
                width="120"
                label="序号">
              </el-table-column>
              <el-table-column
                prop="styleName"
                label="样式名称">
              </el-table-column>
              <el-table-column
                prop="catalogCode"
                label="样式代码">
              </el-table-column>
              <el-table-column 
                align="center" 
                label="JSON" 
                prop="path" 
                width="80">
                <template slot-scope="scope">
                  <div>
                    <el-popover placement="right-start" trigger="hover" v-if="scope.row.styleJson">
                      <div class="popover-box">
                        <pre>{{fmtBody(scope.row.styleJson)}}</pre>
                      </div>
                      <i class="el-icon-view" slot="reference"></i>
                    </el-popover>

                    <span v-else>无</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="layoutName"
                align="center"
                width="120"
                label="布局">
              </el-table-column>
              <el-table-column
                prop="catalogName"
                width="180"
                align="center"
                label="栏目类型">
              </el-table-column>
              <el-table-column
                prop="styleDefault"
                align="center"
                width="100px"
                label="是否默认">
                <template slot-scope="scope">
                  <el-switch
                    @change="changedefoult(scope.row)"
                    v-model="scope.row.styleDefault">
                  </el-switch>
                </template>
              </el-table-column>
              <!-- <el-table-column
                prop="status"
                label="是否启用">
                <template slot-scope="scope">
                  <el-switch
                    @change="changestatus(scope.row)"
                    v-model="scope.row.status">
                  </el-switch>
                </template>
              </el-table-column> -->
              <el-table-column label="样式预览" align="center" class-name="small-padding fixed-width" width="120px">
                <template slot-scope="scope">
                  <Iconbutton icontype="yl" label="预览" @fatherMethod="handleView(scope.row)"></Iconbutton>
                  <!-- <el-button
                    size="mini"
                    type="text"
                    icon="el-icon-view"
                    @click="handleView(scope.row)"
                  >预览</el-button> -->
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center" class-name="small-padding fixed-width" width="200px">
                <template slot-scope="scope">
                  <Iconbutton icontype="xg" label="修改" @fatherMethod="handleEdit(scope.row)"></Iconbutton>
                  <Iconbutton icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>


                  <!-- <el-button
                    size="mini"
                    type="text"
                    icon="el-icon-edit"
                    @click="handleEdit(scope.row)"
                  >修改</el-button>
                  <el-button
                    size="mini"
                    type="text"
                    icon="el-icon-delete"
                    @click="handleDelete(scope.row)"
                  >删除</el-button> -->
                </template>
              </el-table-column>
            </el-table>

            <!-- 修改，新增样式 -->
            <el-dialog :title="pagetitle" @close="closeDialog('elForm')" :visible.sync="openDataScope" width="1000px">
              
              <el-row :gutter="15" style="padding-left:120px;">
                <el-form
                  ref="elForm"
                  :model="formData"
                  :rules="rules"
                  size="medium"
                  label-width="100px"
                >
                  
                  <el-col :span="24">
                    <el-form-item label="布局">
                        <el-select @change="layoutchange" v-model="layout" placeholder="请选择">
                          <el-option
                            v-for="item in layoutoptions"
                            :key="item.id"
                            :label="item.layoutName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                      </el-form-item>
                  </el-col>

                  <el-col :span="24">
                    <el-form-item label="栏目类型" prop="catalogId">
                      <el-select @change="getliststyle" :disabled="layout?false:true" v-model="formData.catalogId" placeholder="请选择">
                        <el-option
                          v-for="item in catalogoptions"
                          :key="item.id"
                          :label="item.catalogName"
                          :value="item.id">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <!-- <el-col :span="11">
                    <el-form-item label="上级样式" prop="parentId">
                      <el-cascader
                        clearable=""
                        :disabled="formData.catalogId?false:true"
                        v-model="formData.parentId"
                        :placeholder="formData.parentId==0?'根目录':'请选择'"
                        :options="styleoptions"
                        :checkStrictly="true"
                        :show-all-levels="false"
                        ref="myCascader"
                        :props="{ checkStrictly: true }"
                        @visible-change="optiondisable($event)"
                        @change="stylehandleChange">
                        <template slot-scope="{ node, data }">
                          <span>{{ data.styleName }}</span>
                        </template>
                        </el-cascader>
                    </el-form-item>
                  </el-col> -->
                  <el-col :span="24">
                    <el-form-item label="样式名称" prop="styleSimpleName">
                      <span v-if="formData.parentId==0&&layout?true:false">{{layout_}} - </span>
                      <span v-if="formData.parentId==0&&formData.catalogId?true:false">{{catalogId_}} - </span>
                      <span  v-if="formData.parentId!=0">{{parentId_}} - </span>
                      <el-input
                        v-model="formData.styleSimpleName"
                        placeholder="请输入样式名称"
                        clearable
                        :style="{width: '40%'}"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item label="样式预览" prop="styleImg">
                      <el-upload
                        ref="upload"
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :auto-upload="false"
                        :on-change="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="formData.styleImg" :src="formData.styleImg" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        <div slot="tip" class="el-upload__tip">请上传不超过 50MB 的一张图片</div>
                      </el-upload>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item label="Json" prop="styleJson">
                      <el-input
                        v-model.trim="formData.styleJson"
                        type="textarea"
                        placeholder="请输入Json"
                        :autosize="{minRows: 4, maxRows: 4}"
                        :style="{width: '48%'}"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="11" v-if="isedit">
                    <el-form-item label="设为默认样式" prop="styleDefault">
                      <el-switch v-model="formData.styleDefault"></el-switch>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24" v-if="isedit">
                    <el-form-item label="是否启用" prop="status">
                      <el-switch v-model="formData.status"></el-switch>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item size="large">
                      <el-button type="primary" @click="submitForm">确定</el-button>
                      <!-- <el-button type="primary" v-show="false" @click="resetForm">重置</el-button> -->
                      <el-button @click="back">返回</el-button>
                    </el-form-item>
                  </el-col>
                </el-form>
              </el-row>
            </el-dialog>

        </div>
</template>

<script>
import { delstyle , infostyle , listcatalog ,
 liststyle , updatestyle , updatestyle2 , addstyle , layouttocatalog} from '@/api/mbh'
export default {
  name: 'stylelist',
  data() {
    return {
      layout2:'',
      options: [{
          value: '',
          label: '全部'
        }, {
          value: 'header',
          label: '头部'
        }, {
          value: 'menu',
          label: '菜单栏'
        }, {
          value: 'middle',
          label: '中部'
        }, {
          value: 'groupHeader',
          label: '组头'
        }, {
          value: 'bottom',
          label: '底部'
      }],
      tableData: [],
      //弹窗
      openDataScope:false,
      id:undefined,
      pagetitle:'',
      layoutoptions:[{
            "layoutName":"头部",
            "id":'header'
        },{
            "layoutName":"菜单",
            "id":'menu'
        },{
            "layoutName":"中部",
            "id":'middle'
        },{
            "layoutName":"组头",
            "id":'groupHeader'
        },{
            "layoutName":"底部",
            "id":'bottom'
      }],
      layout:'',
      layout_:'',
      parentId_:'',
      catalogId_:'',
      formData: {
        styleSimpleName: undefined,
        parentId: 0,
        catalogId: undefined,
        styleImg: null,
        styleJson: undefined,
        styleDefault: false
      },
      rules: {
        styleSimpleName: [
          {
            required: true,
            message: "请输入样式名称",
            trigger: "blur",
          },
        ],
        parentId: [
          {
            required: false,
            message: "请选择上级样式",
            trigger: "blur",
          },
        ],
        catalogId: [
          {
            required: true,
            message: "请选择栏目类型",
            trigger: "blur",
          },
        ],
        styleJson: [
          {
            required: true,
            message: "请输入Json",
            trigger: "blur",
          },
        ],
        styleImg: [
          {
            required: true,
            message: "请选择一张图片",
            trigger: "blur",
          },
        ],
        styleDefault: [
          {
            required: false,
            message: "",
            trigger: "blur",
          },
        ]
      },
      styleImgAction: "https://jsonplaceholder.typicode.com/posts/",
      catalogoptions:[],
      styleoptions: [],
      sourceId:10000,
      isedit:false
    }
  },
  created() {
    this.getList();
    this.getlistcatalog();
  },
  methods: {
    handleBack(){
      this.$router.go(-1);
    },
    fmtBody(value){
      try{
        return JSON.parse(value)
      }catch (err){
        return  value
      }
    },
    // formatter
    defaultformatter(row, column){
      if(row.styleDefault){
        return '是'
      }else{
        return '否'
      }
    },
    /** 查询样式列表 */
    getList() {
      this.loading = true
      var catalogdata = {
        "layout":this.layout2,
        "sourceId":this.sourceId
      }
      liststyle(catalogdata).then(
        response => {
          console.log(response)
          this.tableData = response.data;

          this.styleoptions = response.data;
          this.getMenuBtnList(this.styleoptions);
          
          this.loading = false
        }
      )
    },
    // 切换默认
    changedefoult(data){
      console.log(data)
      updatestyle2(data).then(response => {
        // console.log(response)
        if (response.code == 200) {
          this.msgSuccess('修改成功')
          this.getList();
        } else {
          this.msgError(response.msg)
        }
      })
    },
    // 切换启用状态
    changestatus(data){
      console.log(data)
      updatestyle(data).then(response => {
        // console.log(response)
        if (response.code == 200) {
          this.msgSuccess('修改成功')
          this.getList();
        } else {
          this.msgError(response.msg)
        }
      })
    },
    /** 搜索 */
    handleQuery(){
      this.getList();
    },
    handleAdd(){
      this.id = undefined;
      this.layout = '';
      this.openDataScope = true;
      this.pagetitle = "新增样式";
      // this.parentId_ = '根目录';
      this.formData = {
        styleSimpleName: undefined,
        parentId: 0,
        catalogId: undefined,
        styleImg: null,
        styleJson: undefined,
        styleDefault: false
      }
      this.isedit = false;
    },
    handleView(data){
      console.log(data)
      window.open(this.viewurl+data.id);
      // this.$message({
      //   message:'点击预览，暂未开发，敬请期待',
      //   type:'warning'
      // })
      // console.log("预览")
    },
    handleEdit(data){
      // console.log(data)
      
      this.openDataScope = true;
      this.id = data.id;
      this.pagetitle = "修改样式";
      this.layout = data.layout;
      this.editinit();
      this.isedit = true;

    },
    handleDelete(data){
      this.$confirm('是否确认删除序号为"' + data.id + '"的数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function() {
        return delstyle(data.id)
      }).then(() => {
        this.getList()
        this.msgSuccess('删除成功')
      }).catch(function() {})
    },

    // 弹窗
    //修改初始化
    editinit(){
      infostyle(this.id).then(response => {
        console.log(response)
        this.formData = response.data
        this.getlistcatalog();

        
        if(this.formData.parentId!=0){
          this.parentId_ =  response.data.styleName.split('-'+response.data.styleSimpleName)[0];
        }else{
          if(response.data.styleName.split('-')[0]=='基础'){
            this.layout_ = response.data.styleName.split('-')[0]+'-'+response.data.styleName.split('-')[1]
          }else{
            this.layout_ = response.data.styleName.split('-')[0]
          }

          for(var i=0;i<this.catalogoptions.length;i++){
            if(response.data.catalogId==this.catalogoptions[i].id){
              this.catalogId_ = this.catalogoptions[i].catalogName;
              break;
            }
          }
        }

      })
    },
    //获取栏目列表
    getlistcatalog(){
      listcatalog().then(response => {
        // console.log(response)
        this.catalogoptions = response.data.list;
      })
    },
    layoutchange(data){
      for(var i=0;i<this.layoutoptions.length;i++){
        if(data==this.layoutoptions[i].id){
          this.layout_ = this.layoutoptions[i].layoutName;
          break;
        }
      }
      console.log(data)
        // console.log("布局修改")
        layouttocatalog(this.layout).then(
            response => {
                this.catalogoptions = response.data;
                this.formData.catalogId = '';
                this.formData.parentId = 0;
                // this.parentId_ = '根目录'
            }
        )
        
    },
    getMenuBtnList (menuTreeList) {
      for (let item of menuTreeList) {
        if (item.children.length == 0) {
           delete item.children;
        } else if (item.children.length > 0 ) {
          this.getMenuBtnList(item.children);
        }
      }
      return menuTreeList
    },
    //栏目类型修改
    getliststyle(data){
      console.log(data)
      console.log(this.catalogoptions)
      for(var i=0;i<this.catalogoptions.length;i++){
        if(data==this.catalogoptions[i].id){
          this.catalogId_ = this.catalogoptions[i].catalogName;
          break;
        }
      }
    },
    //级联菜单修改
    stylehandleChange(value) {
      console.log(value)
      if(value==0){
        // this.parentId_ = '根目录'
      }else{
      this.parentId_ = this.$refs.myCascader.getCheckedNodes()[this.$refs.myCascader.getCheckedNodes().length-1].label;
      }
      // console.log(value, this.$refs.myCascader.getCheckedNodes()[this.$refs.myCascader.getCheckedNodes().length-1].label);
      // var val = '';
      // if(value instanceof Array){
      //   val = Number(value[value.length-1]);
      // }
    },
    C_disable(e,bool){
      this.$set(e, 'disabled', bool)
      if(e.children){
        for(var i=0;i<e.children.length;i++){
          this.C_disable(e.children[i],bool);
        }
      }
    },
    optiondisable(e){
      // #606266
      // #E4E7ED
      if(e){
          for(var i=0;i<this.styleoptions.length;i++){
              if(this.styleoptions[i].layout == this.layout){
                this.C_disable(this.styleoptions[i],false)
                  // this.$set(this.styleoptions[i], 'disabled', false)
              }else{
                this.C_disable(this.styleoptions[i],true)
                  // this.$set(this.styleoptions[i], 'disabled', true)
              }
          }
      }
      this.$nextTick(function(){
        $('.is-disabled').parents('.el-cascader-node').attr('C_color_change','C_color_change');
      })

    },
    // optiondisable(e){
    //   if(e){
    //       for(var i=0;i<this.styleoptions.length;i++){
    //           if(this.styleoptions[i].layout == this.layout){
    //               // this.styleoptions[i]["disabled"] = false;
    //               this.$set(this.styleoptions[i], 'disabled', false)
    //           }else{
    //               // this.styleoptions[i]["disabled"] = true;
    //               this.$set(this.styleoptions[i], 'disabled', true)
    //           }
    //       }
    //   }
    // },
    isJSON(str) {
        var str = ''+str;
        if (typeof str == 'string') {
            try {
                var obj=JSON.parse(str);
                if(typeof obj == 'object' && obj ){
                    return true;
                }else{
                    return false;
                }

            } catch(e) {
                console.log('error：'+str+'!!!'+e);
                return false;
            }
        }
    },


    //提交表单
    submitForm() {
      
      if(!this.formData.sourceId){
        this.formData.sourceId = 10000
      }
      this.$refs["elForm"].validate((valid) => {
        if (!valid) return;
        if(!this.isJSON(this.formData.styleJson)){
          this.$message({
            message:'json格式有误',
            type:'warning'
          })
          return;
        }
        var value ='-'+this.formData.styleSimpleName;
        if(this.formData.parentId instanceof Array){
          if(this.formData.parentId.length==0){
            this.formData.parentId=0;
          }else{
           this.formData.parentId = Number(this.formData.parentId[this.formData.parentId.length-1]);
          }
        }
        if(this.formData.parentId==0){
          this.formData.styleName = this.layout_+'-'+this.catalogId_+value
        }else{
          this.formData.styleName =this.parentId_+value
        }
        console.log(this.formData)

        // return;
        // TODO 提交表单
        if (this.id) {
          // 修改
          updatestyle(this.formData).then(response => {
            // console.log(response)
            if (response.code == 200) {
              this.msgSuccess('修改成功')
              this.back();
              this.getList();
            } else {
              this.msgError(response.msg)
            }
          })
        }else{
          // 新增
          addstyle(this.formData).then(response => {
            // console.log(response)
            if (response.code == 200) {
              this.msgSuccess('新增成功')
              this.back();
              this.getList();
            } else {
              this.msgError(response.msg)
            }
          })
        }
      });
    },
    closeDialog(type){
      if(type){
        this.$refs[type].resetFields();
        this.id = undefined;
      }
    },
    back(){
      this.$refs["elForm"].resetFields();
      this.openDataScope = false;
      this.id = undefined;
      this.layout = '';
    },
    getBase64(file) {
        return new Promise(function(resolve, reject) {
            let reader = new FileReader();
            let imgResult = "";
            reader.readAsDataURL(file);
            reader.onload = function() {
                imgResult = reader.result;
            };
            reader.onerror = function(error) {
                reject(error);
            };
            reader.onloadend = function() {
                resolve(imgResult);
            };
        });
    },
    handleAvatarSuccess(res, file) {
      // console.log(file)
      this.formData.styleImg = URL.createObjectURL(file[0].raw);
      this.getBase64(file[0].raw).then(res => {
          this.formData.styleImg = res;
      });
      this.$refs.upload.clearFiles();
    },
    beforeAvatarUpload(file) {
      let isRightSize = file.size / 1024 / 1024 < 50;
      if (!isRightSize) {
        this.$message.error("文件大小超过 50MB");
      }
      return isRightSize;
    },

  }
}
</script>
<style lang="scss">
.el-table td, .el-table th{
  text-align: left;
}
.el-upload__tip {
  line-height: 1.2;
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

.popover-box {
  background: #112435;
  color: #f08047;
  height: 600px;
  min-width:500px;
  max-width:800px;
  overflow: auto;
}
.popover-box::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>