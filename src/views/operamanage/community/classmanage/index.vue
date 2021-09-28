<template>
  <div class="classmanage">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <el-form-item label="所属产品：">
        <el-select v-model="product_id" placeholder="请选择">
          <el-option v-for="item in productList" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类名称：">
          <el-input
            v-model="queryParams.keywords"
            placeholder="请输入关键字"
            clearable
            size="small"
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
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
          <el-button v-points = "1500" type="primary" @click="adddata('')" size="mini" >新增</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border v-loading="loading" :data="dataList"
      row-key="name"
      :tree-props="{children: 'list'}">
      <el-table-column label="分类id" align="center" prop="id" />
      <el-table-column label="分类名称" align="center" prop="name" :show-overflow-tooltip="true" />
      <el-table-column label="分类等级" align="center" prop="level" :show-overflow-tooltip="true" >
          <template slot-scope="scope">
              {{scope.row.level|levelfilter}}
          </template>
      </el-table-column>
      <el-table-column label="排序" align="center" prop="sort" :show-overflow-tooltip="true" />
      <el-table-column
        label="是否启用"
        align="center"
        prop="status"
        :show-overflow-tooltip="true" >
        <template slot-scope="scope">
          <el-select @change="statuschange(scope.row)" v-model="scope.row.status" placeholder="请选择">
            <el-option v-if="item.value!=2" v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center" prop="createdTime" :show-overflow-tooltip="true" />
      <el-table-column width="240px" label="操作" align="center">
        <template slot-scope="scope">
          <Iconbutton v-if="scope.row.is_end=='1'" icontype="xz" label="新增" @fatherMethod="adddata(scope.row.id)"></Iconbutton>
          <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
          <Iconbutton icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增/修改分类弹窗 -->
    <el-dialog
    width="500px"
    :close-on-click-modal = false
    :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="dataForm">
        <el-form-item  label-width="120px" label="分类名称" prop="name">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item  label-width="120px" label="分类图标"  prop="image">
            <el-upload
              class="avatar-uploader"
              :action="VUE_APP_BASE_API+'/api/upload/image'"
              :headers="importHeaders"
              name="image"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="form.image" :src="form.image" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        <el-form-item  label-width="120px" label="分类排序" prop="sort">
          <el-input-number :controls="false" autocomplete="off" v-model="form.sort"></el-input-number>
        </el-form-item>
        <el-form-item label-width="120px" label="是否末级" prop="is_end">
            <span style="color:red;">注意：选择后不可更改！</span>
            <el-radio-group :disabled="!editfalg" v-model="form.is_end">
              <el-radio style="margin-bottom:10px;" :label="0">是(该分类作为末级，不可在此基础上创建子级)</el-radio>
              <el-radio :label="1">不是(该分类可创建子级，用户发帖对应子级)</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item el-form-item  label-width="120px" label="是否启用" prop="status">
            <el-select v-model="form.status" placeholder="请选择">
              <el-option v-if="item.value!=2" v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
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
  getClassifyList,
  addClassify,
  editClassify,
  delClassify
  } from '@/api/operamanage'
  export default {
    name: 'classmanage',
    data() {
      var mytoken = sessionStorage.getItem('token');
      return {
        importHeaders: {Authorization: mytoken},//传图片时的token
        radio: 0,
        // 查询参数
        queryParams: {
          page: 1,
          limit: 9999,
          sourceId:0,
          keywords:'',
          status:2
        },
        editfalg:false,
        product_id:0,
        productList:[],
        loading:true,
        dataList:[],
        statusoptions: [{
          value: 2,
          label: '全部'
        },{
          value: 0,
          label: '启动'
        },{
          value: 1,
          label: '禁用'
        }],
        dialogFormVisible: false,
        form: {},
        rules: {
          name: [
            { required: true, message: "请输入分类姓名", trigger: "blur" }
          ],
          image: [
            { required: true, message: "请选择分类图标", trigger: "blur" }
          ],
          sort: [
            { required: true, message: "请输入排序", trigger: "blur" }
          ]
        },
        dialogType: "add",
        dialogTitle:'',
      }
    },
    computed: {
      VUE_APP_BASE_API(){
          return this.imgurl2
      }
    },
    filters:{
        levelfilter(data){
            let val = '';
            switch (data) {
                case 1:
                    val = '一级'
                    break;
                case 2:
                    val = '二级'
                    break;
                default:
                    val = '级数别乱填'
                    break;
            }
            return val
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
        this.form.image = response.path;
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
        this.queryParams.status=2;
        this.queryParams.keywords='';
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.loading = true;
        this.queryParams.page = 1;
        this.getList();
      },
      getList(){
        var data = JSON.parse(JSON.stringify(this.queryParams));
        getClassifyList(data).then(response => {
          this.loading = false;
          this.dataList = response.data.list;
        })
      },
      statuschange(data){
        editClassify(data).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success'
          });
          this.getList();
        })
      },
      adddata(id){
        this.initForm();
        this.dialogTitle =id?"新增二级分类（id:"+id+")":'新增一级分类';
        this.form.pid = id?id:0
        this.form.level = id?2:1
        this.editfalg = id?false:true
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 初始化表单
      initForm() {
          if (this.$refs.dataForm) {
            this.$refs.dataForm.resetFields();
          }
          this.editfalg = false; //是否末级的可编辑状态
          this.form = {
            pid:0,
            image:"",
            name:"",
            sort:0,
            status:0,
            is_end:0,
            level:2,
            sourceId:this.queryParams.sourceId
          }
      },
      // 编辑分类
      editdata(row) {
        this.initForm();
        this.dialogTitle = "编辑分类";
        this.dialogType = "edit";
        this.form = JSON.parse(JSON.stringify(row))
        //console.log('form',this.form)
        this.dialogFormVisible = true;
      },
      //删除分类
      handleDelete(row){
        let data = {}
        data.id = row.id
        data.sourceId = this.queryParams.sourceId;
        this.$confirm('此操作将永久删除ID为'+row.id+'的分类, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delClassify(data).then(response => {
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
            editClassify(data).then(response => {
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
            addClassify(data).then(response => {
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
