<template>
  <div class="classmanage">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <el-form-item label="分类名称：">
        <el-input
          v-model="queryParams.keyword"
          placeholder="请输入关键字"
          clearable
          size="small"
          style="width: 200px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
          <el-button v-points = "1500" type="primary" @click="initcondition" size="mini" >重置</el-button>
          <el-button v-points = "1500" type="primary" @click="handleQuery" size="mini">搜索</el-button>
          <el-button v-points = "1500" type="primary" @click="adddata" size="mini" >新增</el-button>
      </el-form-item>
    </el-form>

    <el-table 
       :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border
      v-loading="loading"
      :data="dataList"
      row-key="id"
      :tree-props="{children: 'children'}">
      <el-table-column label="ID" align="center" prop="id" />
      <el-table-column label="分类名称" align="center" prop="name" :show-overflow-tooltip="true" />
      <el-table-column label="代码名称" align="center" prop="code" :show-overflow-tooltip="true" />
      <el-table-column label="创建时间" align="center" prop="created_at" :show-overflow-tooltip="true" />
      <el-table-column width="180px" label="操作" align="center">
        <template slot-scope="scope">
          <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
          <!-- <Iconbutton icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton> -->
          <!-- <el-button v-points = "1500"
            size="mini"
            type="text"
            icon="el-icon-edit"
            style="color:#E6A23C;"
            @click="editdata(scope.row)"
          >修改</el-button>
          <el-button v-points = "1500"
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
         <el-form-item class="placeholderdiv" label-width="90px" label="上级栏目:" prop="father">
            <el-cascader
            :show-all-levels = false
            v-model="form.father"
            style="width: 350px"
            :options="dataList"
            :props="{ emitPath:false,checkStrictly: true ,value:'id',label:'name'}"
            clearable></el-cascader>
          </el-form-item>
        <el-form-item  label-width="90px" label="分类名称" prop="name">
          <el-input style="width: 350px" autocomplete="off" placeholder="请输入分类名称" v-model="form.name"></el-input>
        </el-form-item>
        <!-- <el-form-item  label-width="90px" label="代码" prop="code">
          <el-input style="width: 350px" autocomplete="off" placeholder="请输入代码" v-model="form.code"></el-input>
        </el-form-item> -->
      </el-form>
      
      <div class="dialog-footer" slot="footer">
        <el-button v-points = "1500" @click="closeDialog">取 消</el-button>
        <el-button v-points = "1500" @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { 
  getVideoClassify,
  addVideoClassify,
  editVideoClassify,
  } from '@/api/manage'
  export default {
    name: 'classmanage',
    data() {
      return {
        // 查询参数
        queryParams: {
          page: 1,
          pageSize: 10,
          keyword:"",
        },
        loading:true,
        dataList:[],
        columnList: [],
        // 总条数
        total: 0,
        dialogFormVisible: false,
        form: {},
        rules: {
          name: [
            { required: true, message: "请输入分类名称", trigger: "blur" }
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
        this.queryParams.keyword="";
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.loading = true;
        this.queryParams.page = 1;
        this.getList();
      },
      getList(){
        getVideoClassify(this.queryParams).then(res => {
          this.loading = false;
          this.dataList = res.data || [];
          // this.total = res.data.total;
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
            father: '',
            name: "",
            // code: '',
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
          this.form.father = Number(row.father)
        })
        this.dialogFormVisible = true;
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
          this.form.father = this.form.father || '0'
          if (this.dialogType=='edit') {
            //修改
            // console.log(this.form)
            var data = this.form;
            editVideoClassify(data.id,data).then(response => {
                  this.$message({
                    message: '修改成功',
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
                  this.getList();
            })
          }else{
            // 新增
            addVideoClassify(this.form).then(response => {
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