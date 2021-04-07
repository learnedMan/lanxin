<template>
  <div class="column">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <el-form-item label="产品：">
        <el-select v-model="queryParams.product_id" placeholder="请选择">
          <el-option
            v-for="item in productList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="info" @click="initcondition" size="mini">重置</el-button>
        <el-button type="primary" @click="handleQuery" size="mini">搜索</el-button>
        <el-button type="primary" @click="adddata" size="mini">添加</el-button>
      </el-form-item>
    </el-form>

    <el-table 
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border 
      v-loading="loading" 
      :data="dataList" 
      row-key="id"
      :tree-props="{children: 'children'}">
      <el-table-column label="栏目名称" align="center" prop="name" />
      <el-table-column label="栏目ID" align="center" prop="id" :show-overflow-tooltip="true" />
      <el-table-column label="(模板化)样式分类" align="center" prop="template_style" :show-overflow-tooltip="true" />
      <el-table-column label="排序" align="center" prop="sort" :show-overflow-tooltip="true" />
      <el-table-column 
        label="状态" 
        align="center" 
        prop="status" 
        :show-overflow-tooltip="true" >
        <template slot-scope="scope">
          <el-select @change="statuschange(scope.row)" v-model="scope.row.status" placeholder="请选择">
            <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="更新时间" align="center" prop="updated_at" :show-overflow-tooltip="true" />
      <el-table-column label="操作" align="left" width="500px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            style="color:#E6A23C;"
            icon="el-icon-edit"
            @click="editdata(scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            style="color:#F56C6C;"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
          >删除</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-document-add"
            @click="adddata(scope.row.id)"
          >新增</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-menu"
          >样式调整</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-bottom"
          >下移</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-top"
          >上移</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增/修改产品弹窗 -->
    <el-dialog
      width="1200px"
      :close-on-click-modal="false"
      :title="dialogTitle"
      top="10vh"
      :visible.sync="dialogFormVisible">
      <el-form
        :model="form"
        :rules="rules"
        ref="dataForm"
        style="display: flex">
        <div class="fl" style="width: 50%">
          <el-form-item label-width="150px" label="上级栏目:" prop="id">
            <el-cascader
            style="width: 350px"
            :options="dataList"
            :props="{ checkStrictly: true ,value:'id',label:'name'}"
            clearable></el-cascader>
          </el-form-item>
          <el-form-item label-width="150px" label="栏目名称:" prop="id">
            <el-input
              style="width: 350px"
              placeholder="请输入栏目名称"
              v-model="form.id"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="栏目简介:" prop="id">
            <el-input
              style="width: 350px"
              placeholder="请输入栏目简介"
              v-model="form.id"
              :autosize="{ minRows: 4}"
              type="textarea"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="栏目封面:" prop="id">
            <el-upload
              class="avatar-uploader"
              :action="VUE_APP_BASE_API + '/api/upload/image'"
              :headers="importHeaders"
              name="image"
              :show-file-list="false"
              :on-success="handleAvatarSuccess.bind(this,'logo')"
              :before-upload="beforeAvatarUpload">
              <img v-if="form.id" :src="form.id" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label-width="150px" label="栏目Logo:" prop="id">
            <el-upload
              class="avatar-uploader"
              :action="VUE_APP_BASE_API + '/api/upload/image'"
              :headers="importHeaders"
              name="image"
              :show-file-list="false"
              :on-success="handleAvatarSuccess.bind(this,'logo')"
              :before-upload="beforeAvatarUpload">
              <img v-if="form.id" :src="form.id" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label-width="150px" label="允许发布的内容:" prop="id">
            <el-checkbox-group 
                @change="checkboxchange"
                v-model="checkedmedias">
                <el-checkbox v-for="media in medias" :label="media.label" :key="media.label">{{media.value}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item el-form-item  label-width="150px" label="加载子栏目:" prop="id">
            <el-switch
              v-model="form.id">
            </el-switch>
          </el-form-item>
          <el-form-item el-form-item  label-width="150px" label="加载新闻:" prop="id">
            <el-switch
              v-model="form.id">
            </el-switch>
          </el-form-item>
          <el-form-item label-width="150px" label="关联栏目:" prop="id">
            <el-cascader
            style="width: 350px"
            :options="dataList"
            :props="{ checkStrictly: true ,value:'id',label:'name'}"
            clearable></el-cascader>
          </el-form-item>
          <el-form-item el-form-item  label-width="150px" label="(模板化)样式:" prop="id">
            <el-select v-model="form.id" placeholder="请选择">
              <el-option v-for="item in columntypeoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label-width="150px" label="排序(权重):" prop="id">
            <el-input
              style="width: 350px"
              placeholder="请输入栏目名称"
              v-model="form.id"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="展示条数:" prop="id">
            <el-input
              style="width: 350px"
              placeholder="请输入栏目名称"
              v-model="form.id"
            ></el-input>
          </el-form-item>
          <el-form-item el-form-item  label-width="150px" label="是否启用:" prop="id">
            <el-select v-model="form.id" placeholder="请选择">
              <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>


        <div class="fr" style="width: 50%">
            <el-form-item el-form-item  label-width="150px" label="栏目类型:" prop="id">
              <el-select v-model="form.id" placeholder="请选择">
                <el-option v-for="item in columntypeoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <child-page1 :form="form" v-model="form"></child-page1>  
        </div>
      </el-form>

      <div class="dialog-footer" slot="footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { 
  addpermissions , 
  editpermissions , 
  delpermissions,
  deletearrPermissions,
  getChannels,
  getproduct} from '@/api/manage'

import ChildPage1 from './pages/c_page1'

  export default {
    name: 'column',
    components: {
      ChildPage1
    },
    data() {
      var mytoken = sessionStorage.getItem("token");
      return {
        importHeaders: { Authorization: mytoken }, //传图片时的token
        // 查询参数
        queryParams: {
          product_id: "",
        },
        productList:{},
        statusoptions: [{
          value: 1,
          label: '启用'
        },{
          value: 2,
          label: '禁用'
        }],
        columntypeoptions:[
          {
            value: 'link',
            label: '链接'
          },{
            value: 'outer_link',
            label: '外链'
          },{
            value: 'auth_link',
            label: '授权外链'
          },{
            value: 'service',
            label: '服务'
          },{
            value: 'default',
            label: '默认'
          }
        ],
        medias:[{
            value: '新闻',
            label: 'news'
          },{
            value: '视频',
            label: 'video'
          },{
            value: '图集',
            label: 'album'
        }],
        checkedmedias:[],
        loading:true,
        dataList:[],
        dialogFormVisible: true,
        form: {
          id:''
        },
        rules: {
          id: [{ required: true, message: "请输入栏目id", trigger: "blur" }],
        },
        dialogType: "add",
        dialogTitle:''
      }
    },
    computed: {
      VUE_APP_BASE_API() {
        return process.env.VUE_APP_BASE_API;
      },
    },
    created() {
      this.initForm();
      this.getList();
      this.getproductList();
    },
    methods:{
      checkboxchange(val){
        console.log(val)
      },
      handleAvatarSuccess(name,res) {
        this.form.extra[name] = res.path;
      },
      beforeAvatarUpload(file) {
        const isLt = file.size / 1024 / 1024 < 20;
        if (!isLt) {
          this.$message.error("上传头像图片大小不能超过 20MB!");
        }
        return isLt;
      },
      initcondition() {//重置
        this.queryParams.product_id = "";
      },
      statuschange(data){
        editsites(data.id,data).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success'
          });
          this.getList();
        })
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.loading = true;
        this.getList();
      },
      getproductList(){
        getproduct({}).then((response) => {
          this.productList = response.data;
        });
      },
      getList(){
        // console.log(this.queryParams)
        getChannels(this.queryParams).then(response => {
          this.loading = false;
          this.dataList = response;
          // console.log(response)
        })
      },
      // 初始化表单
      initForm() {
        if (this.$refs.dataFrom) {
          this.$refs.dataFrom.resetFields();
        }
        this.form = {
        };
      },
      // 增加栏目
      adddata(data) {
        this.initForm();
        this.form.father = data||'';
        this.dialogTitle = "新增栏目";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 编辑栏目
      editdata(row) {
        var row = row;
        this.initForm();
        this.form = JSON.parse(JSON.stringify(row));
        this.dialogTitle = "编辑栏目";
        this.dialogType = "edit";
        this.dialogFormVisible = true;
      },
      //删除栏目
      handleDelete(row){
        this.$confirm('此操作将永久删除id为'+row.id+'的栏目, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delpermissions(row.id).then(response => {
            if (response.status_code >= 200 && response.status_code < 300) {
                this.$message({
                  message: response.message,
                  type: 'success'
                });
                this.getList();
            }else {
                this.$message({
                  message: response.message,
                  type: 'warning'
                });
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      // 关闭窗口
      closeDialog() {
        this.initForm();
        this.dialogFormVisible = false;
      },
      // 确定弹窗
      enterDialog() {
        this.$refs["dataFrom"].validate((valid) => {
          if (!valid) return;
          this.dialogFormVisible = false;
          if (this.dialogType=='edit') {
            //修改
            editpermissions(this.form.id,this.form).then(response => {
              if (response.status_code >= 200 && response.status_code < 300) {
                  this.$message({
                    message: response.message,
                    type: 'success'
                  });
                  this.getList();
              }else {
                  this.$message({
                    message: response.message,
                    type: 'warning'
                  });
              }
            })
          }else{
            //新增
            addpermissions(this.form).then(response => {
              if (response.status_code >= 200 && response.status_code < 300) {
                  this.$message({
                    message: response.message,
                    type: 'success'
                  });
                  this.getList();
              }else {
                  this.$message({
                    message: response.message,
                    type: 'warning'
                  });
              }
            })
          }
        })
      }
    }
  }

</script>
<style lang="scss">
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