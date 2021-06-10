<template>
  <div class="classmanage">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <el-form-item label="分类名称：">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入关键字"
          clearable
          size="small"
          style="width: 200px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
          <el-button type="info" @click="initcondition" size="mini" >重置</el-button>
          <el-button type="primary" @click="handleQuery" size="mini">搜索</el-button>
          <el-button type="primary" @click="adddata" size="mini" >添加</el-button>
      </el-form-item>
    </el-form>

    <el-table 
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border v-loading="loading" :data="dataList">
      <el-table-column label="ID" align="center" prop="id" />
      <el-table-column label="分类名称" align="center" prop="name" :show-overflow-tooltip="true" />
      <el-table-column label="分类描述" align="center" prop="description" :show-overflow-tooltip="true" />
      <el-table-column label="创建时间" align="center" prop="created_at" :show-overflow-tooltip="true" />
      <el-table-column width="180px" label="操作" align="center">
        <template slot-scope="scope">
          <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
          <Iconbutton icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>
          <!-- <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            style="color:#E6A23C;"
            @click="editdata(scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            style="color:#F56C6C;"
            @click="handleDelete(scope.row)"
          >删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.page"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
    <!-- 新增/修改分类弹窗 -->
    <el-dialog width="500px" 
    :close-on-click-modal = false
    :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="dataForm">
        <el-form-item  label-width="80px" label="分类名称" prop="name">
          <el-input style="width: 350px" autocomplete="off" placeholder="请输入分类名称" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item  label-width="80px" label="简介" prop="description">
          <el-input 
            type="textarea" 
            style="width: 350px" 
            autocomplete="off" 
            placeholder="请输入简介" 
            :autosize="{ minRows: 4}"
            v-model="form.description"></el-input>
        </el-form-item>
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
  getgories,
  addgories,
  editgories,
  delgories
  } from '@/api/manage'
  export default {
    name: 'classmanage',
    data() {
      return {
        // 查询参数
        queryParams: {
          page: 1,
          pageSize: 10,
          name:"",
        },
        loading:true,
        dataList:[],
        // 总条数
        total: 0,
        dialogFormVisible: false,
        form: {},
        rules: {
          name: [
            { required: true, message: "请输入分类姓名", trigger: "blur" }
          ],
        },
        dialogType: "add",
        dialogTitle:'',
      }
    },
    created() {
      this.getList();
      this.initForm();
    },
    methods:{
      initcondition(){
        this.queryParams.name="";
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.loading = true;
        this.queryParams.page = 1;
        this.getList();
      },
      getList(){
        getgories(this.queryParams).then(response => {
          // console.log(response)
          this.loading = false;
          this.dataList = response.data;
          this.total = response.total;
        })
      },
      adddata(){
        this.initForm();
        this.dialogTitle = "新增分类";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 初始化表单
      initForm() {
          this.form={
            name: "",
            description: "",
          }
          if (this.$refs.dataForm) {
            this.$refs.dataForm.resetFields();
          }
      },
      // 编辑分类
      editdata(row) {
        this.initForm();
        this.dialogTitle = "编辑分类";
        this.dialogType = "edit";
        this.$nextTick(() => { 
          this.form = JSON.parse(JSON.stringify(row))
        })
        this.dialogFormVisible = true;
      },
      // 关闭窗口
      closeDialog() {
        this.initForm();
        this.dialogFormVisible = false;
      },
      //删除分类
      handleDelete(row){
        this.$confirm('此操作将永久删除id为'+row.id+'的分类, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delgories(row.id,row).then(response => {
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
      // 确定弹窗
      enterDialog() {
        this.$refs["dataForm"].validate((valid) => {
          if (!valid) return;
          if (this.dialogType=='edit') {
            //修改
            // console.log(this.form)
            var data = this.form;
            editgories(data.id,data).then(response => {
                  this.$message({
                    message: '修改成功',
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
                  this.getList();
            })
          }else{
            // 新增
            addgories(this.form).then(response => {
                  this.$message({
                    message: '新建成功',
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
                  this.getList();
            })
          }
        })
      },
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



<style scoped>
.clearflex {
    *zoom: 1;
}

.clearflex:after {
    content: '';
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}

.fl-right{
  float: right;
}


</style>