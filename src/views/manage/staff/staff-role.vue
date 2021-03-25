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
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="id" align="center" prop="id" />
      <el-table-column label="名称" align="center" prop="name" :show-overflow-tooltip="true" />
      <el-table-column label="显示名称" align="center" prop="remarks" :show-overflow-tooltip="true" />
      <el-table-column label="site-id" align="center" prop="site_id" :show-overflow-tooltip="true" />
      <el-table-column label="创建时间" align="center" prop="created_at" :show-overflow-tooltip="true" />
      <el-table-column label="更新时间" align="center" prop="updated_at" :show-overflow-tooltip="true" />
      <el-table-column label="操作" align="center" width="200px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            style="color:#E6A23C;"
            icon="el-icon-edit"
            v-if="scope.row.remarks!='超级管理员'&&scope.row.remarks!='站长'&&scope.row.remarks!='编辑'"
            @click="editdata(scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="text"
            style="color:#67C23A;"
            icon="el-icon-edit"
            @click="editjurisdiction(scope.row)"
          >权限</el-button>
          <el-button
            size="mini"
            type="text"
            style="color:#F56C6C;"
            icon="el-icon-delete"
            v-if="scope.row.remarks!='超级管理员'&&scope.row.remarks!='站长'&&scope.row.remarks!='编辑'"
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
    <!-- 新增/修改角色弹窗 -->
    <el-dialog width="600px" :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="dataFrom">
        <el-form-item label-width="100px" label="角色名称" prop="name">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入角色名称" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label-width="100px" label="显示名称" prop="remarks">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入显示名称" v-model="form.remarks"></el-input>
        </el-form-item>
        <el-form-item label-width="100px" v-if="dialogType=='add'" label="site-id" prop="site_id">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入当前角色的site-id" v-model="form.site_id"></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 权限抽屉 -->
    <el-drawer
      :visible.sync="drawer" :with-header="false" size="40%" title="角色配置" v-if="drawer"
    >
      <el-tabs class="role-box" type="border-card">
        <el-tab-pane label="角色菜单">
          <div class="clearflex">
            <el-button class="fl-right" size="small" type="primary">确 定</el-button>
          </div>
          <el-tree
            :data="treedata"
            :default-checked-keys="treechoosedata"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps">
          </el-tree>
        </el-tab-pane>
      </el-tabs>
    </el-drawer>
  </div>
</template>

<script>
import { 
  getRole,
  addroles,
  editroles,
  delroles,
  deletearrRoles,
  getrolepermission
  } from '@/api/manage'

  export default {
    name: 'staff-role',
    data() {
      return {
        // 查询参数
        queryParams: {
          page: 1,
          pageSize: 10,
        },
        loading:true,
        dataList:[],
        dialogFormVisible: false,
        form: {
          name: "",
          remarks:"",
          site_id:""
        },
        rules: {
          name: [
            { required: true, message: "请输入角色名称", trigger: "blur" },
          ],
          remarks: [
            { required: true, message: "请输入显示名称", trigger: "blur" },
          ]
        },
        dialogType: "add",
        dialogTitle:'',
        multipleSelection:[],//选中数组
        total:0,
        drawer: true,

        treedata: [],
        treechoosedata: [],
        defaultProps: {
          children: 'children',
          label: 'remarks'
        }
      }
    },
    created() {
      this.getList();
      this.getownrolelist();
    },
    methods:{
      getList(){
        var data={};
        data.model = 'Role';
        getRole(Object.assign(data,this.queryParams)).then(response => {
          this.loading = false;
          this.dataList = response.data;
          this.total = response.total;
        })
      },
      // 表格选中变化
      handleSelectionChange(val){
        this.multipleSelection = val;
      },
      getownrolelist(){
        getrolepermission().then(response => {
          this.treedata = response.data;
          var _treedata = JSON.parse(JSON.stringify(this.treedata));
          console.log(_treedata)
          var c_arr= [];
          function getdata(arr){
            for(var i=0;i<arr.length;i++){
              if(arr[i].children){
                console.log(1)
                c_arr.concat(arr[i])
              }
            }
          }
          getdata(_treedata)
          console.log(c_arr)
        })
      },
      // 权限修改
      editjurisdiction(){
        this.drawer = true
      },
      // 初始化表单
      initForm() {
        if (this.$refs.dataFrom) {
          this.$refs.dataFrom.resetFields();
        }
        this.form = {
          name: "",
          remarks:"",
          site_id:""
        };
      },
      // 增加角色
      adddata() {
        this.initForm();
        this.dialogTitle = "新增角色";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 编辑角色
      editdata(row) {
        var row = this.multipleSelection[0]||row;
        this.initForm();
        this.form = JSON.parse(JSON.stringify(row));
        this.dialogTitle = "编辑角色";
        this.dialogType = "edit";
        this.dialogFormVisible = true;
      },
      //删除角色
      handleDelete(row){
        this.$confirm('此操作将永久删除id为'+row.id+'的角色, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delroles(row.id).then(response => {
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
        this.$confirm('此操作将永久删除id为'+data+'的角色, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deletearrRoles(data).then(response => {
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
          if (this.dialogType=='edit') {
            //修改
            editroles(this.form.id,this.form).then(response => {
              if (response.status_code >= 200 && response.status_code < 300) {
                  this.$message({
                    message: response.message,
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
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
            addroles(this.form).then(response => {
              if (response.status_code >= 200 && response.status_code < 300) {
                  this.$message({
                    message: response.message,
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
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
<style lang="scss">
.role-box {
  .el-tabs__content {
    height: calc(100vh - 150px);
    overflow: auto;
  }
}

</style>