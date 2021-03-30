<template>
  <div class="staff-staff">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
        <el-form-item label="关键字：">
          <el-input
            v-model="queryParams.keyword"
            placeholder="请输入关键字"
            clearable
            size="small"
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handleQuery" style="margin-right:50px;" size="mini">搜索</el-button>
            <el-button type="primary" @click="adddata" size="mini" >添加</el-button>
            <el-button type="success" :disabled="multipleSelection.length==0" size="mini" >批量启用</el-button>
            <el-button type="warning" :disabled="multipleSelection.length==0" size="mini" >批量禁用</el-button>
            <el-button type="danger" :disabled="multipleSelection.length==0" size="mini" >批量离职</el-button>
        </el-form-item>
    </el-form>

    <el-table 
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border v-loading="loading" :data="dataList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="id" align="center" prop="id" />
      <el-table-column label="头像" width="80px" align="center" prop="avatar" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <img :src="scope.row.avatar||useravatar" alt="" style="width: 50px;height: 50px;border-radius: 50%;">
        </template>
      </el-table-column>
      <el-table-column label="姓名" align="center" prop="name" :show-overflow-tooltip="true" />
      <el-table-column label="手机号" align="center" prop="phone" :show-overflow-tooltip="true" />
      <el-table-column label="邮箱" align="center" prop="email" :show-overflow-tooltip="true" />
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
      <el-table-column label="创建时间" align="center" prop="created_at" :show-overflow-tooltip="true" />
      <el-table-column label="上次登录时间" align="center" prop="updated_at" :show-overflow-tooltip="true" />
      <el-table-column width="240px" label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            style="color:#E6A23C;"
            @click="editdata(scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-thumb"
            style="color:#67C23A;"
            @click="editdata(scope.row)"
          >权限</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-s-custom"
            @click="editdata(scope.row)"
          >角色</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            style="color:#F56C6C;"
            @click="handleDelete(scope.row)"
          >删除</el-button>
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
    <!-- 新增/修改员工弹窗 -->
    <el-dialog width="600px" :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="dataForm">
        <el-form-item  label-width="100px" label="员工姓名" prop="dataName">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入姓名" v-model="form.dataName"></el-input>
        </el-form-item>
        <el-form-item  label-width="100px" label="头像：" prop="headImg">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item  label-width="100px" label="手机号" prop="dataName">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入姓名" v-model="form.dataName"></el-input>
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
  getRole,
  addroles,
  editroles,
  delroles,
  deletearrRoles,
  getrolepermission,
  assignrolepermission,
  getUser
  } from '@/api/manage'

  export default {
    name: 'staff-list',
    data() {
      return {
        useravatar: require('@/assets/c_images/useravatar.jpg'),
        imageUrl: '',
        // 查询参数
        queryParams: {
          page: 1,
          pageSize: 10,
          keyword:""
        },
        loading:true,
        dataList:[],
        // 总条数
        total: 0,
        statusoptions: [{
          value: '1',
          label: '启用'
        },{
          value: '2',
          label: '禁用'
        },{
          value: '0',
          label: '离职'
        }],
        dialogFormVisible: false,
        form: {
          dataName: "",
        },
        rules: {
          dataName: [
            { required: true, message: "请输入员工姓名", trigger: "blur" }
          ]
        },
        dialogType: "add",
        dialogTitle:'',
        multipleSelection:[]//选中数组
      }
    },
    created() {
      this.getList();
    },
    methods:{
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(this.imageUrl)
        console.log(file)

      },
      beforeAvatarUpload(file) {
        const isLt = file.size / 1024 / 1024 < 20;
        if (!isLt) {
          this.$message.error('上传头像图片大小不能超过 20MB!');
        }
        return isLt;
      },



      /** 搜索按钮操作 */
      handleQuery() {
        this.loading = true;
        this.queryParams.page = 1;
        this.getList();
      },
      getList(){
        var data={};
        data.model = 'User';
        getUser(Object.assign(data,this.queryParams)).then(response => {
          this.loading = false;
          this.dataList = response.data;
          this.total = response.total;
        })
      },
      statuschange(data){
        // console.log(data)
      },
      adddata(){
        this.initForm();
        this.dialogTitle = "新增用户";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      handleDelete(){

      },
      // 关闭窗口
      closeDialog() {
        // this.initForm();
        this.dialogFormVisible = false;
      },
      // 确定弹窗
      enterDialog() {
        this.dialogFormVisible = false;
      },
      // 初始化表单
      initForm() {
        if (this.$refs.dataForm) {
          this.$refs.dataForm.resetFields();
        }
        this.form = {
          dataName: ""
        };
      },
      // 编辑员工
      editdata(row) {
        this.dialogTitle = "编辑员工";
        this.dialogType = "edit";
        for (let key in this.form) {
          this.form[key] = row[key];
        }
        this.dialogFormVisible = true;
      },
      // 表格选中变化
      handleSelectionChange(val){
        this.multipleSelection = val;
      }
    }
  }

</script>
<style>
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
</style>