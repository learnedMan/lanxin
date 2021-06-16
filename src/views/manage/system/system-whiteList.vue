<template>
  <div class="system-whiteList">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <!-- <el-form-item label="白名单：">
        <el-input
          v-model="queryParams.keyword"
          placeholder="请输入关键字"
          clearable
          size="small"
          style="width: 200px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <el-form-item>
          <!-- <el-button type="info" @click="initcondition" size="mini" >重置</el-button> -->
          <!-- <el-button type="primary" @click="handleQuery" size="mini">搜索</el-button> -->
          <el-button type="primary" @click="adddata" size="mini" >添加</el-button>
      </el-form-item>
    </el-form>

    <el-table 
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border v-loading="loading" :data="dataList">
      <el-table-column label="ID" align="center" prop="Id" />
      <el-table-column label="白名单" align="center" prop="Keywords" :show-overflow-tooltip="true" />
      <el-table-column width="160px" label="操作" align="center">
        <template slot-scope="scope">
          <!-- <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            style="color:#E6A23C;"
            @click="editdata(scope.row)"
          >修改</el-button> -->
          <Iconbutton icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>
          <!-- <el-button
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
      v-show="totalCount>0"
      :total="totalCount"
      :page.sync="queryParams.page"
      :limit.sync="queryParams.limit"
      @pagination="getList"
    />
    <!-- 新增/修改白名单弹窗 -->
    <el-dialog width="500px" 
    :close-on-click-modal = false
    :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="dataForm">
        <el-form-item  label-width="80px" label="白名单" prop="keyword">
          <el-input style="width: 350px" autocomplete="off" placeholder="请输入白名单词汇" v-model="form.keyword"></el-input>
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
  delgories,


  getWhitelist,
  addWhitelist,
  delWhitelist
  } from '@/api/manage'
  export default {
    name: 'system-whiteList',
    data() {
      return {
        // 查询参数
        queryParams: {
          page: 1,
          limit: 10,
          keyword:"",
        },
        loading:true,
        dataList:[],
        // 总条数
        totalCount: 0,
        dialogFormVisible: false,
        form: {},
        rules: {
          keyword: [
            { required: true, message: "请输入白名单词汇", trigger: "blur" }
          ],
        },
        dialogType: "add",
        dialogTitle:'',
      }
    },
    created() {
      this.getList();
      this.initForm();
      var a = 0;
      var b = a||2
      var c = a??2
      console.log(b)
      console.log(c)
    },
    methods:{
      initcondition(){
        this.queryParams.keyword="";
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.loading = true;
        this.queryParams.page = 1;
        this.getList();
      },
      getList(){
          this.loading = true;
        getWhitelist(this.queryParams).then(response => {
          // console.log(response)
          this.loading = false;
          this.dataList = response.page.list;
          this.totalCount = response.page.totalCount;
        })
      },
      adddata(){
        this.initForm();
        this.dialogTitle = "新增白名单";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 初始化表单
      initForm() {
          this.form={
            keyword: "",
          }
          if (this.$refs.dataForm) {
            this.$refs.dataForm.resetFields();
          }
      },
      // 编辑白名单
      editdata(row) {
        this.initForm();
        this.dialogTitle = "编辑白名单";
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
      //删除白名单
      handleDelete(row){
        this.$confirm('此操作将永久删除id为'+row.Id+'的白名单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(row.Id)
          var arr = []
          arr.push(row.Id)
          delWhitelist(arr).then(response => {
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
            addWhitelist(this.form).then(response => {
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