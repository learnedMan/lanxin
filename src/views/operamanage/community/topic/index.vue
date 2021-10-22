<template>
  <div class="topic">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <el-form-item label="所属产品：">
        <el-select v-model="product_id" placeholder="请选择">
          <el-option v-for="item in productList" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="对外展示：">
        <el-select v-model="queryParams.isShow" placeholder="请选择">
          <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否启用：">
        <el-select v-model="queryParams.status" placeholder="请选择">
          <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
          <el-button v-points = "1500" type="primary" @click="handleQuery" size="mini">搜索</el-button>
          <el-button v-points = "1500" type="primary" @click="initcondition" size="mini" >重置</el-button>
          <el-button v-points = "1500" type="primary" @click="adddata" size="mini" >新增</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border v-loading="loading" :data="dataList">
      <el-table-column label="话题id" align="center" prop="id" />
      <el-table-column label="话题背景图" align="center" prop="name" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <img :src="scope.row.logo" alt="" style="width: 50px;height: 50px;">
        </template>
      </el-table-column>
      <el-table-column label="话题名称" align="center" prop="name" :show-overflow-tooltip="true" />
      <el-table-column label="话题简介" align="center" prop="intro" :show-overflow-tooltip="true" />
      <el-table-column label="排序" align="center" prop="sort" :show-overflow-tooltip="true" />
      <el-table-column
        label="对外展示"
        align="center"
        prop="isShow"
        :show-overflow-tooltip="true" >
        <template slot-scope="scope">
          <el-select @change="statuschange(scope.row)" v-model="scope.row.isShow" placeholder="请选择">
            <el-option v-if="item.value!=''" v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        label="是否启用"
        align="center"
        prop="status"
        :show-overflow-tooltip="true" >
        <template slot-scope="scope">
          <el-select @change="statuschange(scope.row)" v-model="scope.row.status" placeholder="请选择">
            <el-option v-if="item.value!=''" v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center" prop="createdTime" :show-overflow-tooltip="true" />
      <el-table-column width="200px" label="操作" align="center">
        <template slot-scope="scope">
          <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
          <Iconbutton icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.page"
      :limit.sync="queryParams.limit"
      @pagination="getList"
    />
    <!-- 新增/修改话题弹窗 -->
    <el-dialog
    width="500px"
    :close-on-click-modal = false
    :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="dataForm">
        <el-form-item  label-width="120px" label="话题名称" prop="name">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item  label-width="120px" label="背景图"  prop="logo">
            <el-upload
              class="avatar-uploader"
              :action="VUE_APP_BASE_API+'/api/upload/image'"
              :headers="importHeaders"
              name="image"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="form.logo" :src="form.logo" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        <el-form-item  label-width="120px" label="话题简介" prop="intro">
            <el-input type="textarea" style="width: 300px" autocomplete="off" placeholder="请输入简介" v-model="form.intro"></el-input>
          </el-form-item>
        <el-form-item  label-width="120px" label="话题排序" prop="sort">
          <el-input-number :controls="false" autocomplete="off" v-model="form.sort"></el-input-number>
        </el-form-item>
        <el-form-item el-form-item  label-width="120px" label="是否启用" prop="status">
            <el-select v-model="form.status" placeholder="请选择">
              <el-option v-if="item.value!=''" v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item el-form-item  label-width="120px" label="是否对外展示" prop="isShow">
            <el-select v-model="form.isShow" placeholder="请选择">
              <el-option v-if="item.value!=''" v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
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
  getproduct,
  } from '@/api/manage'
  import {
  getTopicList,
  addTopic,
  editTopic,
  delTopic
  } from '@/api/operamanage'
  export default {
    name: 'topic',
    data() {
      var mytoken = sessionStorage.getItem('token');
      return {
        importHeaders: {Authorization: mytoken},//传图片时的token
        // 查询参数
        queryParams: {
          page: 1,
          limit: 10,
          sourceId:0,
          isShow:'',
          status:''
        },
        product_id:0,
        productList:[],
        loading:true,
        dataList:[],
        // 总条数
        total: 0,
        statusoptions: [{
          value: '',
          label: '全部'
        },{
          value: 1,
          label: '是'
        },{
          value: 2,
          label: '否'
        }],
        dialogFormVisible: false,
        form: {},
        rules: {
          name: [
            { required: true, message: "请输入话题姓名", trigger: "blur" }
          ],
          logo: [
            { required: true, message: "请选择背景图", trigger: "blur" }
          ],
          intro: [
            { required: true, message: "请输入简介", trigger: "blur" }
          ],
          sort: [
            { required: true, message: "请输入排序", trigger: "blur" }
          ]
        },
        dialogType: "add",
        dialogTitle:'',
        multipleSelection:[]//选中数组
      }
    },
    computed: {
      VUE_APP_BASE_API(){
          return this.imgurl2
      }
    },
    watch:{
      product_id(val){
        this.queryParams.sourceId = this.productList.filter(item=>item.id==val)[0].source_id||0;
        this.getList();
      },
    },
    created() {
      this.getproductList()
      this.initForm()
    },
    methods:{
      // 产品列表
      getproductList(){
        getproduct({}).then((response) => {
            this.productList = response.data;
            this.product_id = this.productList[0].id;
        });
      },
      forceUpdate(){
        this.$forceUpdate();
      },
      handleAvatarSuccess(response, file, fileList) {
        this.form.logo = response.path;
        this.$forceUpdate();
      },
      beforeAvatarUpload(file) {
        const isLt = file.size / 1024 / 1024 < 20;
        if (!isLt) {
          this.$message.error('上传头像图片大小不能超过 20MB!');
        }
        return isLt;
      },
      initcondition(){
        this.queryParams.page=1;
        this.queryParams.limit=10;
        this.queryParams.isShow='';
        this.queryParams.status='';
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.loading = true;
        this.queryParams.page = 1;
        this.getList();
      },
      getList(){
        var data = JSON.parse(JSON.stringify(this.queryParams));
        getTopicList(data).then(response => {
          this.loading = false;
          this.dataList = response.data.list;
          this.total = response.data.totalCount;
        })
      },
      statuschange(data){
        editTopic(data).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success'
          });
          this.getList();
        })
      },
      adddata(){
        this.initForm();
        // console.log(this.form)
        this.dialogTitle = "新增话题";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 初始化表单
      initForm() {
          if (this.$refs.dataForm) {
            this.$refs.dataForm.resetFields();
          }
          this.form = {
            logo:"",
            name:"",
            intro:"",
            sort:0,
            isShow:1,
            status:1,
            sourceId:this.queryParams.sourceId
          }
      },
      // 编辑话题
      editdata(row) {
        this.initForm();
        this.dialogTitle = "编辑话题";
        this.dialogType = "edit";
        this.form = JSON.parse(JSON.stringify(row))
        // console.log(this.form)
        this.dialogFormVisible = true;
      },
      //删除话题
      handleDelete(row){
        let data = {}
        data.id = row.id
        data.sourceId = this.queryParams.sourceId;
        this.$confirm('此操作将永久删除ID为'+row.id+'的话题, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delTopic(data).then(response => {
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
          if (this.dialogType=='edit') {
            //修改
            var data = this.form;
            editTopic(data).then(response => {
                this.$message({
                  message: '修改成功',
                  type: 'success'
                });
                this.dialogFormVisible = false;
                this.getList();
            })
          }else{
            // 新增
            var data = JSON.parse(JSON.stringify(this.form));
            addTopic(data).then(response => {
                this.$message({
                  message: '新建成功',
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
</style>
