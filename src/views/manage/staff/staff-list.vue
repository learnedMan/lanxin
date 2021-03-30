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
            <el-button type="danger" :disabled="multipleSelection.length==0" size="mini" >批量冻结</el-button>
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
  </div>
</template>

<script>
import { 
  getUser,
  getChannels,
  addusers
  } from '@/api/manage'

  export default {
    name: 'staff-list',
    data() {
      var mytoken = sessionStorage.getItem('token');
      return {
        useravatar: require('@/assets/c_images/useravatar.jpg'),
        importHeaders: {Authorization: mytoken},
        imageUrl: '',
        innerVisible:false,
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        channeltree:[],
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
          label: '禁用'
        },{
          value: '0',
          label: '冻结'
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
            { required: true, message: "请输入员工姓名", trigger: "blur" }
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
        this.$refs.tree.setCheckedKeys(keys) // 将所有keys数组的节点全选中
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
      getChannelsList(){
        getChannels().then(response => {
          // console.log(response)
          this.channeltree = response;
          this.channeltreechoose = this.$refs.tree.getCheckedKeys();
          this.recordtree = JSON.parse(JSON.stringify(this.channeltreechoose));//记录一下一开始选中的节点
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
      innercloseDialog(){
        this.channeltreechoose = this.recordtree;
        this.$refs.tree.setCheckedKeys(this.channeltreechoose)
        this.innerVisible = false;
      },
      innerenterDialog() {
        this.channeltreechoose = this.$refs.tree.getCheckedKeys() ;
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
        // for (var [a, b] of formData.entries()) {
        //   console.log(a, b);
        // }
      },
      // 确定弹窗
      enterDialog() {
        // this.dialogFormVisible = false;
        this.$refs["dataForm"].validate((valid) => {
          if (!valid) return;
          if (this.dialogType=='edit') {
            //修改
            // editroles(this.form.id,this.form).then(response => {
            //   if (response.status_code >= 200 && response.status_code < 300) {
            //       this.$message({
            //         message: response.message,
            //         type: 'success'
            //       });
            //       this.dialogFormVisible = false;
            //       this.getList();
            //   }else {
            //       this.$message({
            //         message: response.message,
            //         type: 'warning'
            //       });
            //   }
            // })
          }else{
            // 新增
            // console.log(this.channeltreechoose)
            var choosestr = this.channeltreechoose.map((obj)=>{return obj}).join(",");
            var data = this.form;
            data.extra = {}
            data.extra.channel_limit = choosestr;
            console.log(data)
            var _data = this.toFormData(data)
            // var data = new FormData();
            // data.append(this.form);
            // data.append(this.form);

            addusers(_data).then(response => {
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
      // 初始化表单
      initForm() {
        if (this.$refs.dataForm) {
          this.$refs.dataForm.resetFields();
        }
        this.recordtree = [];
        this.channeltreechoose = [];
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