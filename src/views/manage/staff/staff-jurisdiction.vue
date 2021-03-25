<template>
  <div class="staff-jurisdiction">
    <el-form ref="queryForm" :inline="true">
        <el-form-item>
            <el-button type="primary" @click="adddata(0)" size="mini" >新增</el-button>
            <el-button :disabled="multipleSelection.length<1" @click="delarrdata" type="danger" size="mini" >批量删除</el-button>
            <el-button :disabled="multipleSelection.length!=1" @click="editdata" type="warning" size="mini" >修改</el-button>
        </el-form-item>
    </el-form>

    <el-table 
      border 
      v-loading="loading" 
      :data="dataList" 
      row-key="id"
      :tree-props="{children: 'children'}"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="id" align="center" prop="id" />
      <el-table-column label="权限名称" align="center" prop="name" :show-overflow-tooltip="true" />
      <el-table-column label="显示名称" align="center" prop="remarks" :show-overflow-tooltip="true" />
      <el-table-column label="路由" align="center" prop="id" :show-overflow-tooltip="true" >web</el-table-column>
      <el-table-column label="创建时间" align="center" prop="created_at" :show-overflow-tooltip="true" />
      <el-table-column label="更新时间" align="center" prop="updated_at" :show-overflow-tooltip="true" />
      <el-table-column label="操作" align="center" width="200px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-document-add"
            @click="adddata(scope.row.id)"
          >新增</el-button>
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
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增/修改权限弹窗 -->
    <el-dialog width="600px" :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="dataFrom">
        <el-form-item label-width="100px" label="权限名称" prop="name">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入权限名称" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label-width="100px" label="显示名称" prop="remarks">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入显示名称" v-model="form.remarks"></el-input>
        </el-form-item>
        <el-form-item label-width="100px" v-if="dialogType=='add'" label="父节点" prop="father">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入父节点" v-model="form.father"></el-input>
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
  getAllPermissions , 
  getPermissions ,
  addpermissions , 
  editpermissions , 
  delpermissions,
  deletearrPermissions} from '@/api/manage'

  export default {
    name: 'staff-jurisdiction',
    data() {
      return {
        loading:true,
        dataList:[],
        dialogFormVisible: false,
        form: {
          name: "",
          remarks:"",
          father:""
        },
        rules: {
          name: [
            { required: true, message: "请输入权限名称", trigger: "blur" },
          ],
          remarks: [
            { required: true, message: "请输入显示名称", trigger: "blur" },
          ],
          father: [
            { required: true, message: "请输入父节点", trigger: "blur" },
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
      getList(){
        getAllPermissions().then(response => {
          this.loading = false;
          this.dataList = response;
        })
      },
      // 表格选中变化
      handleSelectionChange(val){
        this.multipleSelection = val;
      },
      // 初始化表单
      initForm() {
        if (this.$refs.dataFrom) {
          this.$refs.dataFrom.resetFields();
        }
        this.form = {
          name: "",
          remarks:"",
          father:""
        };
      },
      // 增加权限
      adddata(data) {
        this.initForm();
        this.form.father = data;
        this.dialogTitle = "新增权限";
        this.dialogType = "add";
        this.dialogFormVisible = true;
        
      },
      // 编辑权限
      editdata(row) {
        // console.log(row)
        // console.log(this.multipleSelection)
        var row = this.multipleSelection[0]||row;
        this.initForm();
        this.form = JSON.parse(JSON.stringify(row));
        this.dialogTitle = "编辑权限";
        this.dialogType = "edit";
        this.dialogFormVisible = true;
      },
      //删除权限
      handleDelete(row){
        this.$confirm('此操作将永久删除id为'+row.id+'的权限, 是否继续?', '提示', {
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
      //批量删除
      delarrdata(){
        var data=this.multipleSelection.map((obj)=>{return obj.id}).join(",");
          // console.log(data)
        this.$confirm('此操作将永久删除id为'+data+'的权限, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deletearrPermissions(data).then(response => {
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
        // this.initForm();
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
