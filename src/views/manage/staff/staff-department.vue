<template>
  <div class="column" style="padding:30px;">
    <!-- 搜索 -->
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <!-- <el-form-item
          label="部门:"
          prop="keyword"
        >
          <el-input
            v-model="queryParams.keyword"
            placeholder="请输入关键字"
            clearable
            size="small"
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="创建时间:" prop="createDate">
          <el-date-picker
            v-model="queryParams.createDate"
            type="daterange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="handleDateChange"
          />
        </el-form-item> -->
      <el-form-item>
        <!-- <el-button v-points = "1500" type="info" @click="initcondition" size="mini">重置</el-button>
        <el-button v-points = "1500" type="primary" @click="handleQuery" size="mini">搜索</el-button> -->
        <el-button v-points = "1500" type="primary" @click="adddata" size="mini">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 搜索 -->

    <!-- 表格列表 -->
    <el-table
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border
      v-loading="loading"
      :data="dataList"
      row-key="id"
      :tree-props="{children: 'children'}">
      <el-table-column label="部门名称" align="left" prop="name" />
      <el-table-column label="部门ID" align="center" prop="id" :show-overflow-tooltip="true" />
      <el-table-column v-if="!isMobile" label="创建时间" align="center" prop="updated_at" :show-overflow-tooltip="true" />
      <el-table-column label="操作" align="center" width="360px">
        <template slot-scope="scope">
          <!-- <Iconbutton icontype="xz" label="新增" @fatherMethod="adddata(scope.row)"></Iconbutton> -->
          <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
          <!-- <Iconbutton v-if="scope.row.b_sort!='begin'" icontype="sy" label="上移" @fatherMethod="move(scope.$index, scope.row, 'up')"></Iconbutton>
          <Iconbutton v-if="scope.row.e_sort!='end'" icontype="xy" label="下移" @fatherMethod="move(scope.$index, scope.row, 'down')"></Iconbutton> -->
          <Iconbutton  icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格列表 -->
    <!-- 新增/修改栏目弹窗 -->
    <el-dialog
      width="600px"
      :close-on-click-modal="false"
      :title="dialogTitle"
      top="10vh"
      :visible.sync="dialogFormVisible">
      <el-form
        :model="form"
        :rules="rules"
        ref="dataForm"
       >
        <!-- 左 -->
          <el-form-item class="placeholderdiv" label-width="150px" label="上级部门:" prop="father">
            <el-cascader
            :show-all-levels = false
            :placeholder="form.placeholder"
            v-model="form.father"
            style="width: 350px"
            :options="dataList"
            :props="{ emitPath:false,checkStrictly: true ,value:'id',label:'name'}"
            clearable></el-cascader>
          </el-form-item>
          <el-form-item label-width="150px" label="部门:" prop="name">
            <el-input
              style="width: 350px"
              placeholder="请输入部门名称"
              v-model="form.name"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="描述:" prop="">
            <el-input
              style="width: 350px"
              placeholder="请输入部门描述"
              v-model="form.description"
              :autosize="{ minRows: 4}"
              type="textarea"
            ></el-input>
          </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button v-points = "1500" @click="closeDialog">取 消</el-button>
        <el-button v-points = "1500" @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 新增/修改栏目弹窗 -->

  </div>
</template>

<script>
import Cropper from '@/components/Cropper'
import {
  getDepartmentList,
  addDepartment,
  getDepartmentinfo,
  changeDepartment,
  deleteDepartment,
  } from '@/api/manage'


  export default {
    name: 'column',
    components: {
      Cropper
    },
    data() {
      var mytoken = sessionStorage.getItem("token");
      return {
        //子组件
        forceRefresh:false,
        userdata:[],

        importHeaders: { Authorization: mytoken }, //传图片时的token
        // 查询参数
        queryParams: {
          keyword: '',
          product_id: "",
          createDate: '',
          start_date: '',
          endd_ate: '',
        },
        catalogid:'',//栏目id git clone / git branch/ 
        productList:{},
        sourceId:'',
        statusoptions: [{
          value: 1,
          label: '启用'
        },{
          value: 0,
          label: '禁用'
        }],
        catalogoptions:[],
        styleoptions:[],
        checkedmedias:[],
        loading:true,
        dataList:[],
        dialogFormVisible: false,
        form:{},
        rules: {
          // father: [{ required: true, message: "请选择上级栏目", trigger: "blur" }],
          name: [{ required: true, message: "请输入部门名称", trigger: "blur" }],
        },
        dialogType: "add",
        dialogTitle:''
      }
    },
    created() {
      this.initForm();
      this.getList();
    },
    methods:{
      /* 修改时间 */
        handleDateChange (val) {
          const arr = val || ['', ''];
          this.queryParams.start_date = arr[0];
          this.queryParams.endd_ate = arr[1];
        },
      // 初始化表单
      initForm() {
        if (this.$refs.dataForm) {
          this.$refs.dataForm.resetFields();
        }
        this.form = {
          father:'',
          name:'', 
          description: '',
        };
      },
      // 获取表格列表
      getList(){
        console.log(this.queryParams)
        this.loading = true;
        getDepartmentList(this.removePropertyOfNullFor0(this.queryParams)).then(res => {
          this.loading = false;
          this.dataList = res;
        })
      },
      // 增加栏目
      adddata(data) {
        this.initForm();
        this.form.father = [data.id]||[];
        this.form.placeholder = data.name||'';
        this.dialogTitle = "新增部门";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 编辑栏目
      editdata(row) {
        this.initForm();
        this.catalogid = '';
        this.dialogTitle = "编辑部门";
        this.dialogType = "edit";
         getDepartmentinfo(row.id).then(res => {
          this.form = JSON.parse(JSON.stringify(res)) ;
          this.dialogFormVisible = true;
          this.form.placeholder = res.father ? res.name : ''
        })
      },
      //删除部门
      handleDelete(row){
        this.$confirm('此操作将永久删除id为'+row.id+'的部门, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteDepartment(row.id).then(response => {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.getList();
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
        this.$refs["dataForm"].validate((valid) => {
          if (!valid) return;
          var data = JSON.parse(JSON.stringify(this.form))
          data.father = Number(data.father)
          // return
          if (this.dialogType=='edit') {
            //修改
            changeDepartment(data.id,data).then(response => {
                  this.$message({
                    message: '修改成功',
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
                  this.getList();
            })
          }else{
            //新增
            addDepartment(data).then(response => {
                  this.$message({
                    message: '新增成功',
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
                  this.getList();
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
 .el-cascader-menu__wrap {
    height: 504px!important;
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

.placeholderdiv input::-webkit-input-placeholder {
  color:#717171 !important;
}
.placeholderdiv input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color:#717171 !important;
}
.placeholderdiv input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color:#717171 !important;
}
.placeholderdiv input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color:#717171 !important;
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
