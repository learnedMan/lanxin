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
            <el-button type="success" @click="changearrstatus(1)" :disabled="multipleSelection.length==0" size="mini" >批量启用</el-button>
            <el-button type="warning" @click="changearrstatus(2)" :disabled="multipleSelection.length==0" size="mini" >批量禁用</el-button>
            <el-button type="danger" @click="changearrstatus(0)" :disabled="multipleSelection.length==0" size="mini" >批量冻结</el-button>
            <el-button type="danger" @click="delarrdata" :disabled="multipleSelection.length==0" size="mini" >批量删除</el-button>
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
      <el-table-column width="280px" label="操作" align="center">
        <template slot-scope="scope">
          <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
          <Iconbutton icontype="qx" label="权限" @fatherMethod="editjurisdiction(scope.row)"></Iconbutton>
          <Iconbutton icontype="js" label="角色" @fatherMethod="editroledata(scope.row)"></Iconbutton>
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
            icon="el-icon-thumb"
            style="color:#67C23A;"
            @click="editjurisdiction(scope.row)"
          >权限</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-s-custom"
            @click="editroledata(scope.row)"
          >角色</el-button>
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
    <!-- 新增/修改用户弹窗 -->
    <el-dialog width="700px" :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-dialog
        width="600px"
        title="栏目权限"
        :visible.sync="innerVisible"
        :show-close = false
        :close-on-click-modal = false
        :close-on-press-escape = false
        append-to-body>
        <el-tree
            :data="channeltree"
            :default-checked-keys="channeltreechoose"
            show-checkbox
            :check-strictly="true"
            @check-change = "checkChange"
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps">
          </el-tree>
          <div class="dialog-footer" slot="footer">
            <el-button @click="innercloseDialog">取 消</el-button>
            <el-button @click="innerenterDialog" type="primary">确 定</el-button>
          </div>
      </el-dialog>
      <el-form :model="form" :rules="rules" ref="dataForm">
        <el-form-item  label-width="120px" label="用户姓名" prop="name">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item  label-width="120px" label="头像："  prop="avatar">
          <el-upload
            class="avatar-uploader"
            :action="VUE_APP_BASE_API+'/api/upload/image'"
            :headers="importHeaders"
            name="image"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="form.avatar" :src="form.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item  label-width="120px" label="手机号" prop="phone">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入手机号" v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item  label-width="120px" label="邮箱" prop="email">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入邮箱" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item el-form-item  label-width="120px" label="设置栏目权限">
           <el-button size="mini" @click="showchannel" type="success">权限</el-button>
        </el-form-item>
        <el-form-item v-if="dialogType=='edit'" el-form-item  label-width="120px" label="是否启用" prop="status">
          <el-select v-model="form.status" placeholder="请选择">
            <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      
      <div class="dialog-footer" slot="footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 权限抽屉 -->
    <el-drawer
      :visible.sync="drawer" :with-header="false" size="40%" title="用户直接权限配置" v-if="drawer"
    >
      <el-tabs class="role-box" type="border-card">
        <el-tab-pane label="用户直接权限菜单">
          <el-tree
            :data="treedata"
            :default-checked-keys="treechoosedata"
            show-checkbox
            :check-strictly="true"
            @check = "nodeclick"
            @check-change = "rolecheckChange"
            default-expand-all
            node-key="id"
            ref="roletree"
            highlight-current
            :props="roledefaultProps">
          </el-tree>
        </el-tab-pane>
      </el-tabs>
      <div class="clearflex" style="margin-right:20px;margin-top:20px;">
          <el-button class="fl-right" @click="cancelrole" size="small" type="info">取消</el-button>
          <el-button class="fl-right" style="margin-right:15px;" @click="surerole" size="small" type="primary">确 定</el-button>
        </div>
    </el-drawer>

    <el-drawer
      :visible.sync="userroledrawer" :with-header="false" size="40%" title="角色配置" v-if="userroledrawer"
    >
      <el-tabs class="userrole-box" type="border-card">
        <el-tab-pane label="用户角色菜单">
          
          <el-tree
            :data="userroletreedata"
            :default-checked-keys="userroletreechoosedata"
            show-checkbox
            :check-strictly="true"
            @check-change = "userrolecheckChange"
            default-expand-all
            node-key="id"
            ref="userroletree"
            highlight-current
            :props="roledefaultProps">
          </el-tree>
        </el-tab-pane>
      </el-tabs>
      <div class="clearflex" style="margin-right:20px;margin-top:20px;">
        <el-button class="fl-right" @click="userrolecancelrole" size="small" type="info">取消</el-button>
        <el-button class="fl-right" style="margin-right:15px;" @click="userrolesurerole" size="small" type="primary">确 定</el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { 
  getUser,
  getChannels,
  addusers,
  editusers,
  changearrusersstatus,
  delusers,
  deletearrusers,
  getuserPermission,
  assignuserPermission,
  getuserroles,
  assignuserroles
  } from '@/api/manage'
import { validUsername , validEmail } from '@/utils/validate'
  export default {
    name: 'staff-list',
    data() {
      var mytoken = sessionStorage.getItem('token');
      return {
        // 抽屉
          drawer: false,
          treedata: [],
          treechoosedata: [],
          roledefaultProps: {
            children: 'children',
            label: 'remarks'
          },
          chooseid:undefined,
          userroledrawer:false,
          userroletreedata:[],
          userroletreechoosedata:[],
        // 抽屉

        useravatar: require('@/assets/c_images/useravatar.jpg'),//默认头像
        importHeaders: {Authorization: mytoken},//传图片时的token
        innerVisible:false,
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        channeltree:[],//栏目树
        channeltreechoose:[],
        recordtree:[],
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
          label: '冻结'
        },{
          value: '0',
          label: '禁用'
        }],
        dialogFormVisible: false,
        form: {
          name: "",
          phone:"",
          avatar:"",
          email:"",
          status:""
        },
        rules: {
          name: [
            { required: true, message: "请输入用户姓名", trigger: "blur" }
          ],
          phone: [
            { required: true, message: "请输入手机号", trigger: "blur" }
          ]
        },
        dialogType: "add",
        dialogTitle:'',
        multipleSelection:[]//选中数组
      }
    },
    computed: {
        VUE_APP_BASE_API(){
            return process.env.VUE_APP_BASE_API
        }
    },
    created() {
      this.getList();
    },
    methods:{
      // 抽屉
      userrolecancelrole(){
        this.userroledrawer = false;
      },
      userrolesurerole(){
        var keys = this.$refs.userroletree.getCheckedKeys() // 获取已勾选节点的key值
        var data = keys.map((obj)=>{return obj}).join(",");
        assignuserroles(this.chooseid,data).then(response =>{
          if (response.status_code >= 200 && response.status_code < 300) {
                this.$message({
                  message: response.message,
                  type: 'success'
                });
                this.getList();
                this.userroledrawer = false;
            }else {
                this.$message({
                  message: response.message,
                  type: 'warning'
                });
            }
          // console.log(response)
        })
      },


      cancelrole(){
        this.drawer = false;
      },
      surerole(){
        var keys = this.$refs.roletree.getCheckedKeys() // 获取已勾选节点的key值
        var data = keys.map((obj)=>{return obj}).join(",");
        assignuserPermission(this.chooseid,data).then(response =>{
          if (response.status_code >= 200 && response.status_code < 300) {
                this.$message({
                  message: response.message,
                  type: 'success'
                });
                this.getList();
                this.drawer = false;
            }else {
                this.$message({
                  message: response.message,
                  type: 'warning'
                });
            }
          // console.log(response)
        })
      },
      // 角色修改、抽屉
      editroledata(row){
        this.userroletreechoosedata = [];
        this.userroletreedata = [];
        this.userroledrawer = true;
        this.chooseid = row.id;
        getuserroles(row.id).then(response => {
          console.log(response)
          this.userroletreedata = response.data;
          var _treedata = JSON.parse(JSON.stringify(this.userroletreedata));
          var c_arr= [];
          function getdata(arr){
            for(var i=0;i<arr.length;i++){
              c_arr=c_arr.concat(arr[i])
              if(!arr[i].children){
              }else{
                getdata(arr[i].children)
              }
            }
          }
          getdata(_treedata)
          for(var i=0;i<c_arr.length;i++){
            if(c_arr[i].own){
              this.userroletreechoosedata.push(c_arr[i].id)
            }
          }
          console.log(this.userroletreechoosedata)
        })
      },
      // 权限修改、抽屉
      editjurisdiction(row){
        this.treechoosedata = [];
        this.treedata = [];
        this.drawer = true;
        this.chooseid = row.id;
        getuserPermission(row.id).then(response => {
          // console.log(response)
          this.treedata = response.data;
          var _treedata = JSON.parse(JSON.stringify(this.treedata));
          var c_arr= [];
          function getdata(arr){
            for(var i=0;i<arr.length;i++){
              c_arr=c_arr.concat(arr[i])
              if(!arr[i].children){
              }else{
                getdata(arr[i].children)
              }
            }
          }
          getdata(_treedata)
          for(var i=0;i<c_arr.length;i++){
            if(c_arr[i].own){
              this.treechoosedata.push(c_arr[i].id)
            }
          }
        })
      },
      //权限切换选中
      userrolecheckChange(data,b,c){
        Array.prototype.remove = function(val) {
          var index = this.indexOf(val);
            if (index > -1) {
            this.splice(index, 1);
          }
        };
        let thisNode = this.$refs.userroletree.getNode(data.id) // 获取当前节点
        var keys = this.$refs.userroletree.getCheckedKeys() // 获取已勾选节点的key值
        if (b) { // 当前节点若被选中
          for (let i = thisNode.level; i > 1; i--) { // 判断是否有父级节点
            if (!thisNode.parent.checked) { // 父级节点未被选中，则将父节点替换成当前节点，往上继续查询，并将此节点key存入keys数组
              thisNode = thisNode.parent
              keys.push(thisNode.data.id)
            }
          }
          // if(thisNode.childNodes){
          //   for(var i=0;i<thisNode.childNodes.length;i++){
          //     keys.push(thisNode.childNodes[i].key)
          //   }
          // }
        }else{
          if(thisNode.childNodes){
            for(var i=0;i<thisNode.childNodes.length;i++){
              keys.remove(thisNode.childNodes[i].key)
            }
          }
        }
        this.$refs.userroletree.setCheckedKeys(keys) // 将所有keys数组的节点全选中
      },
      rolecheckChange(data,b,c){
        Array.prototype.remove = function(val) {
          var index = this.indexOf(val);
            if (index > -1) {
            this.splice(index, 1);
          }
        };
        let thisNode = this.$refs.roletree.getNode(data.id) // 获取当前节点
        var keys = this.$refs.roletree.getCheckedKeys() // 获取已勾选节点的key值
        if (b) { // 当前节点若被选中
          for (let i = thisNode.level; i > 1; i--) { // 判断是否有父级节点
            if (!thisNode.parent.checked) { // 父级节点未被选中，则将父节点替换成当前节点，往上继续查询，并将此节点key存入keys数组
              thisNode = thisNode.parent
              keys.push(thisNode.data.id)
            }
          }
        }else{
          if(thisNode.childNodes){
            for(var i=0;i<thisNode.childNodes.length;i++){
              keys.remove(thisNode.childNodes[i].key)
            }
          }
        }
        this.$refs.roletree.setCheckedKeys(keys) // 将所有keys数组的节点全选中
      },
      // 抽屉
      


      showchannel(){
        this.innerVisible = true;
        this.getChannelsList();
      },
      //权限切换选中
      checkChange(data,b,c){
        Array.prototype.remove = function(val) {
          var index = this.indexOf(val);
            if (index > -1) {
            this.splice(index, 1);
          }
        };
        let thisNode = this.$refs.tree.getNode(data.id) // 获取当前节点
        var keys = this.$refs.tree.getCheckedKeys() // 获取已勾选节点的key值
        if (b) { // 当前节点若被选中
          function delchild(data){
            if(data.childNodes!=[]){  
              for(var i=0;i<data.childNodes.length;i++){
                if(data.childNodes[i].checked){
                  keys.remove(data.childNodes[i].key)
                }
                delchild(data.childNodes[i])
              }
            }
          }
          delchild(thisNode)
          for (let i = thisNode.level; i > 1; i--) { // 判断是否有父级节点
            if (thisNode.parent.checked) { // 父级节点未被选中，则将父节点替换成当前节点，往上继续查询，并将此节点key存入keys数组
              keys.remove(thisNode.parent.key)
            }
            thisNode = thisNode.parent
          }
        }
        this.$refs.tree.setCheckedKeys(keys) // 将所有keys数组的节点全选中
      },
      nodeclick(a,b){
        // console.log(a)
        // console.log(b)
        var keys = this.$refs.roletree.getCheckedKeys()
        if(b.checkedKeys.indexOf(a.id)>-1){
          // console.log('选中')
          let thisNode = this.$refs.roletree.getNode(a.id) // 获取当前节点
          if(thisNode.childNodes){ //如果有子节点，那么把子节点选中
            for(var i=0;i<thisNode.childNodes.length;i++){
              keys.push(thisNode.childNodes[i].key)
            }
          }
        this.$refs.roletree.setCheckedKeys(keys) // 将所有keys数组的节点全选中
        }else{
          // console.log('不选中')
        }
      },
      handleAvatarSuccess(response, file, fileList) {
        this.form.avatar = response.path;
        this.$forceUpdate();
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
      changearrstatus(data){
        var idarr=this.multipleSelection.map((obj)=>{return obj.id}).join(",");
        changearrusersstatus(idarr,data).then(response => {
          // console.log(response)
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
      },
      getChannelsList(){
        getChannels().then(response => {
          // console.log(response)
          this.channeltree = response;
        })
      },
      getList(){
        var data={};
        data.model = 'User';
        getUser(Object.assign(data,this.queryParams)).then(response => {
          // console.log(response)
          this.loading = false;
          this.dataList = response.data;
          this.total = response.total;
        })
      },
      statuschange(data){
        editusers(data.id,data).then(response => {
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
      },
      adddata(){
        this.initForm();
        this.dialogTitle = "新增用户";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 初始化表单
      initForm() {
        if (this.$refs.dataForm) {
          this.$refs.dataForm.resetFields();
        }
        this.form={
          name: "",
          phone:"",
          avatar:"",
          email:"",
          status:""
        }
        this.recordtree = [];
        this.channeltreechoose = [];
      },
      // 编辑用户
      editdata(row) {
        this.initForm();
        this.dialogTitle = "编辑用户";
        this.dialogType = "edit";
        // for (let key in row) {
        //   this.form[key] = row[key];
        // }
        this.form = JSON.parse(JSON.stringify(row))
        this.getChannelsList()
        try {
          var arr = this.form.extra.channel_limit.split(',');
          this.recordtree = arr;
          this.channeltreechoose = arr;
        } catch (error) {
        }
        this.dialogFormVisible = true;
      },
      handleDelete(row){
        this.$confirm('此操作将永久删除id为'+row.id+'的权限, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delusers(row.id).then(response => {
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
      //批量删除
      delarrdata(){
        var data=this.multipleSelection.map((obj)=>{return obj.id}).join(",");
          // console.log(data)
        this.$confirm('此操作将永久删除id为'+data+'的权限, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deletearrusers(data).then(response => {
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
      innercloseDialog(){
        this.channeltreechoose = this.recordtree;
        this.$refs.tree.setCheckedKeys(this.channeltreechoose)
        this.innerVisible = false;
      },
      innerenterDialog() {
        this.channeltreechoose = this.$refs.tree.getCheckedKeys() ;
        this.recordtree = this.channeltreechoose;
        this.innerVisible = false;
      },
      closeDialog() {
        this.initForm();
        this.dialogFormVisible = false;
      },
      toFormData(val) {
        let formData = new FormData();
        for (let i in val) {
          isArray(val[i], i);
        }
        function isArray(array, key) {
          if (array == undefined || typeof array == "function") {
            return false;
          }
          if (typeof array != "object") {
            formData.append(key, array);
          } else if (array instanceof Array) {
            if (array.length == 0) {
              formData.append(`${key}`, "");
            } else {
              for (let i in array) {
                for (let j in array[i]) {
                  isArray(array[i][j], `${key}[${i}].${j}`);
                }
              }
            }
          } else {
            let arr = Object.keys(array);
            if (arr.indexOf("uid") == -1) {
              for (let j in array) {
                isArray(array[j], `${key}.${j}`);
              }
            } else {
              formData.append(`${key}`, array);
            }
          }
        }
        return formData;
      },
      // 确定弹窗
      enterDialog() {
        // this.dialogFormVisible = false;
        if(!validUsername(this.form.phone)){
            this.$message({
              message: '请输入正确的手机号',
              type: 'error'
            })
            return
        } 
        if(this.form.email){
          if(!validEmail(this.form.email)){
            this.$message({
              message: '请输入正确的邮箱',
              type: 'error'
            })
            return
          } 
        }
        this.$refs["dataForm"].validate((valid) => {
          if (!valid) return;
          if (this.dialogType=='edit') {
            //修改
            // console.log(this.form)
            var choosestr = this.channeltreechoose.map((obj)=>{return obj}).join(",");
            var data = this.form;
            data.extra = {}
            data.extra.channel_limit = choosestr;
            // console.log(data)
            // return
            editusers(data.id,data).then(response => {
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
            // 新增
            // console.log(this.channeltreechoose)
            var choosestr = this.channeltreechoose.map((obj)=>{return obj}).join(",");
            var data = this.form;
            data.extra = {}
            data.extra.channel_limit = choosestr;
            console.log(data)
            // var _data = this.toFormData(data)
            addusers(data).then(response => {
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
      },
      // 表格选中变化
      handleSelectionChange(val){
        this.multipleSelection = val;
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