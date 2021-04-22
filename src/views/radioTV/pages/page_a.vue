<template>
  <div class="page_a">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <el-form-item label="所属产品：">
        <el-select v-model="queryParams.product_id" placeholder="请选择">
          <el-option v-for="item in productList" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="handleQuery" size="mini">搜索</el-button>
          <el-button type="primary" @click="adddata" size="mini" >添加</el-button>
      </el-form-item>
    </el-form>

    <el-table 
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border v-loading="loading" :data="dataList">
      <el-table-column label="ID" align="center" prop="id" />
      <el-table-column label="频道logo" align="center" >
        <template slot-scope="scope">
            <img :src="scope.row.extra.logo" style="max-height: 50px;max-width: 50px">
        </template>
      </el-table-column>
      <el-table-column label="频道名称" align="center" prop="name" :show-overflow-tooltip="true" />
      <el-table-column label="权重" align="center" prop="sort" :show-overflow-tooltip="true" />
      <el-table-column 
        label="频道状态" 
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
      <el-table-column label="模板状态" align="center" prop="extra.template.type||'未启用'" :show-overflow-tooltip="true">
          <template slot-scope="scope">
              <span>{{scope.row.extra.template | formattemplate}}</span>
          </template>
      </el-table-column>
      <el-table-column label="节目模板" align="center" prop="en_name" :show-overflow-tooltip="true" >
          <template slot-scope="scope">
              <el-button @click="program(scope.row)" size="mini" type="primary">模板管理</el-button>
          </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center" prop="created_at" :show-overflow-tooltip="true" />
      <el-table-column width="150px" label="操作" align="center">
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
            icon="el-icon-delete"
            style="color: #f56c6c"
            @click="deldata(scope.row)"
            >删除</el-button
          >
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
    <!-- 新增/修改频道弹窗 -->
    <el-dialog width="700px" 
    :close-on-click-modal = false
    :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="dataForm">
        <el-form-item  label-width="120px" label="频道名称" prop="name">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入频道名称" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item  label-width="120px" label="权重" prop="sort">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入权重(排序)" v-model="form.sort"></el-input>
        </el-form-item>
        <el-form-item  label-width="120px" label="所属产品" prop="product_id">
            <el-select :disabled="dialogType=='edit'" v-model="form.product_id" placeholder="请选择">
              <el-option v-for="item in productList" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item  label-width="120px" label="频道LOGO："  prop="extra.logo">
          <el-upload
            class="avatar-uploader"
            :action="VUE_APP_BASE_API+'/api/upload/image'"
            :headers="importHeaders"
            name="image"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="form.extra.logo" :src="form.extra.logo" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label-width="120px" label="适用于" prop="forway">
            <el-checkbox-group @change="$forceUpdate()" v-model="form.forway">
                <el-checkbox label="电视直播"></el-checkbox>
                <el-checkbox label="电视点播"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item v-if="form.forway.indexOf('电视直播')>-1" label-width="120px" label="流地址">
            <el-input style="width: 400px" placeholder="请输入内容" v-model="form.extra.stream_urls.hd">
                <template slot="prepend">超清</template>
            </el-input>
            <el-input style="width: 400px;margin:15px 0;" placeholder="请输入内容" v-model="form.extra.stream_urls.fhd">
                <template slot="prepend">高清</template>
            </el-input>
            <el-input style="width: 400px" placeholder="请输入内容" v-model="form.extra.stream_urls.sd">
                <template slot="prepend">标清</template>
            </el-input>
        </el-form-item>
        <el-form-item  label-width="120px" label="简介" prop="extra.intro">
          <el-input 
            :autosize="{ minRows: 4}" 
            type="textarea" 
            style="width: 400px" 
            autocomplete="off" 
            placeholder="请输入简介" 
            v-model="form.extra.intro"></el-input>
        </el-form-item>
        <el-form-item label-width="120px" label="是否启用" prop="status">
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
    <Pagedialog ref="Pagedialog"></Pagedialog>
  </div>
</template>

<script>
import Pagedialog from './page_a/page_a_dialog'
import { 
  gettv_channel,
  getproduct,
  addtv_channel,
  deltv_channel,
  edittv_channel
  } from '@/api/manage'
  export default {
    components: {
      Pagedialog
    },
    name: 'page_a',
    data() {
      var mytoken = sessionStorage.getItem('token');
      return {
        importHeaders: {Authorization: mytoken},//传图片时的token
        // 查询参数
        queryParams: {
          page: 1,
          pageSize: 10,
          product_id:'',
          type:'tv_channel'
        },
        loading:true,
        dataList:[],
        productList:[],
        // 总条数
        total: 0,
        statusoptions: [{
          value: 1,
          label: '启用'
        },{
          value: 2,
          label: '禁用'
        }],
        dialogFormVisible: false,
        form: {
        },
        rules: {
          name: [
            { required: true, message: "请输入频道姓名", trigger: "blur" }
          ],
          sort: [
            { required: true, message: "请输入权重(排序)", trigger: "blur" }
          ],
          product_id: [
            { required: true, message: "请选择所属产品", trigger: "blur" }
          ],
          ['extra.logo']: [
            { required: true, message: "请选择频道logo", trigger: "blur" }
          ],
          forway: [
            { required: true, message: "请选择适用场景", trigger: "blur" }
          ],
          status: [
            { required: true, message: "请选择是否启用", trigger: "blur" }
          ]
        },
        dialogType: "add",
        dialogTitle:''
      }
    },
    filters: {
        formattemplate(val){
            if(!val)
            return '未启用'
            if(val.type=='daily'){
                return '每日循环'
            }else if(val.type=='weekly'){
                return '每周循环'
            }else{
                return '未启用'
            }
        }
    },
    computed: {
      VUE_APP_BASE_API(){
          return process.env.VUE_APP_BASE_API
      }
    },
    created() {
      this.getList();
      this.initForm();
    },
    methods:{
      program(data){
        this.$refs.Pagedialog.getdata(data);
        this.$refs.Pagedialog.dialogFormVisible = true
        this.$refs.Pagedialog.returndataList();
      },
      handleAvatarSuccess(response, file, fileList) {
        this.form.extra.logo = response.path;
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
      getproductList(){
          return new Promise((resolve, reject)=>{
            getproduct({}).then((response) => {
                this.productList = response.data;
                if(this.queryParams.product_id==''){
                    this.queryParams.product_id = this.productList[0].id;
                }
                resolve(this.productList)
            });
          })
      },
      async getList(){
        let productList= await this.getproductList();
        var data = JSON.parse(JSON.stringify(this.queryParams));
        gettv_channel(data).then(response => {
          this.loading = false;
          this.dataList = response.data;
          this.total = response.total;
        })
      },
      statuschange(data){
        // var data = JSON.parse(JSON.stringify(data));
            data.father = data.father.id
        edittv_channel(data.id,data).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success'
          });
          this.getList();
        })
      },
      adddata(){
        this.initForm();
        this.dialogTitle = "新增频道";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 初始化表单
      initForm() {
          if (this.$refs.dataForm) {
            this.$refs.dataForm.resetFields();
          }
          this.form = {
            type: "tv_channel",
            father: 0,
            name: "",
            sort:0,
            product_id:'',
            forway:[],
            extra:{
              has_live:'',
              has_replay:'',
              intro:"",
              logo:'',
              stream_urls:{
                hd:'',
                fhd:'',
                sd:''
              }
            },
            status:""
          }
      },
      // 编辑频道
      editdata(row) {
        this.initForm();
        this.dialogTitle = "编辑频道";
        this.dialogType = "edit";
        this.$nextTick(() => { 
          this.form = JSON.parse(JSON.stringify(row))
          this.form.forway = [];
          if(this.form.extra.has_replay){
            this.form.forway.push('电视点播')
          }
          if(this.form.extra.has_live){
            this.form.forway.push('电视直播')
          }
          console.log(this.form)
        })
        this.dialogFormVisible = true;
      },
      // 删除频道
      deldata(row){
        this.$confirm('此操作将永久删除id为'+row.id+'的频道, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            deltv_channel(row.id).then(response => {
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
        if(this.form.forway.indexOf('电视直播')>-1){
          this.form.extra.has_live = 1
        }else{
          this.form.extra.has_live = 0
        }

        if(this.form.forway.indexOf('电视点播')>-1){
          this.form.extra.has_replay = 1
        }else{
          this.form.extra.has_replay = 0
        }

        console.log(this.form);
        this.$refs["dataForm"].validate((valid) => {
          if (!valid) return;
          if (this.dialogType=='edit') {
            //修改
            var data = JSON.parse(JSON.stringify(this.form));
            data.father = data.father.id
            edittv_channel(data.id,data).then(response => {
                  this.$message({
                    message: '修改成功',
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
                  this.getList();
            })
          }else{
            // 新增
            addtv_channel(this.form).then(response => {
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



<style scoped lang="scss">

.clearflex {
  *zoom: 1;
}

.clearflex:after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}

.fl-right {
  float: right;
}

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

.role-box {
  .el-tabs__content {
    height: calc(100vh - 150px);
    overflow: auto;
  }
}
</style>