<template>
  <div class="allResources">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <el-form-item label="图片名称：">
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
          <el-button type="info" @click="initcondition" size="mini" >重置</el-button>
          <el-button type="primary" @click="handleQuery" size="mini">搜索</el-button>
          <el-button type="primary" @click="adddata" size="mini" >新增</el-button>
      </el-form-item>
    </el-form>

    <el-table 
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border v-loading="loading" :data="dataList">
      <el-table-column label="ID" align="center" prop="id" />
      <el-table-column label="图片" align="center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <el-popover
              title=""
              placement="right"
              popper-class="imgpopover"
              trigger="hover">
              <img :src="scope.row.url||noimg">
              <img slot="reference" :src="scope.row.url||noimg" :alt="scope.row.url||noimg" style="max-height: 50px;max-width: 50px">
            </el-popover>
          </template>
      </el-table-column>
      <el-table-column label="图片名称" align="center" prop="title" :show-overflow-tooltip="true" />
      <el-table-column label="分类" align="center" :show-overflow-tooltip="true">
          <template slot-scope="scope">
                <span>{{scope.row.category | formatcategory}}</span>
            </template>
      </el-table-column>  
      <el-table-column label="作者" align="center" :show-overflow-tooltip="true">
            <template slot-scope="scope">
                <span>{{scope.row.author.name || '无'}}</span>
            </template>
      </el-table-column>
      <el-table-column label="大小" align="center" prop="size" :show-overflow-tooltip="true" />
      <el-table-column label="拍摄时间" align="center" prop="time" :show-overflow-tooltip="true" />
      <el-table-column label="上传时间" align="center" prop="created_at" :show-overflow-tooltip="true" />
      <el-table-column width="220px" label="操作" align="center">
        <template slot-scope="scope">
          <!-- <el-button
            size="mini"
            type="text"
            icon="el-icon-download"
            style="color:#67C23A;"
            @click="download(scope.row)"
          >下载</el-button> -->
          <Iconbutton icontype="xiazai" label="下载" @fatherMethod="download(scope.row)"></Iconbutton>
          <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
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
    <!-- 新增/修改图片弹窗 -->
    <el-dialog width="600px" 
        :close-on-click-modal = false 
        :title="dialogTitle" 
        top="10vh"
        :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="dataForm">
        <el-form-item label-width="100px" label="图片:" prop="url">
            <el-upload
                class="avatar-uploader"
                :action="VUE_APP_BASE_API + '/api/upload/image'"
                :headers="importHeaders"
                name="image"
                :show-file-list="false"
                :http-request="uploadFile"
                :on-success="handleAvatarSuccess.bind(this,'url')"
                :before-upload="beforeAvatarUpload">
                <img v-if="form.url" :src="form.url" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item label-width="100px" label="图片名称" prop="title">
          <el-input style="width: 350px" autocomplete="off" placeholder="请输入图片名称" v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item el-form-item  label-width="100px" label="分类:" prop="_category">
            <el-select @change="$forceUpdate()" v-model="form._category" multiple placeholder="请选择">
              <el-option v-for="item in classoptions" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label-width="100px" label="拍摄时间" prop="time">
            <el-date-picker
                v-model="form.time"
                type="datetime"
                placeholder="选择日期时间"
                value-format="yyyy-MM-dd HH:mm:ss"
                align="right">
            </el-date-picker>
        </el-form-item>
        <!-- <el-form-item  label-width="100px" label="作者" prop="author">
          <el-input style="width: 350px" autocomplete="off" placeholder="请输入作者" v-model="form.author"></el-input>
        </el-form-item> -->
        <el-form-item  label-width="100px" label="描述" prop="description">
          <el-input 
            type="textarea" 
            style="width: 350px" 
            autocomplete="off" 
            placeholder="请输入描述" 
            :autosize="{ minRows: 4}"
            v-model="form.description"></el-input>
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
  getresources,
  getgories,
  addresources,
  editresources,
  delresources
  } from '@/api/manage'
  export default {
    name: 'allResources',
    data() {
      var mytoken = sessionStorage.getItem("token");
      return {
        importHeaders: { Authorization: mytoken }, //传图片时的token
        noimg: require('@/assets/c_images/noimg.png'),//默认图片
        // 查询参数
        queryParams: {
          page: 1,
          pageSize: 10,
          keyword:''
        },
        loading:true,
        dataList:[],
        // 总条数
        total: 0,
        dialogFormVisible: false,
        form: {},
        rules: {
          url: [
            { required: true, message: "请选择图片", trigger: "blur" }
          ],
          title: [
            { required: true, message: "请输入图片名称", trigger: "blur" }
          ],
          _category: [
            { required: true, message: "请选择分类", trigger: "blur" }
          ],
        },
        dialogType: "add",
        dialogTitle:'',
        classoptions:[]//分类数组
      }
    },
    filters: {
        formatcategory(val){
            var newarr = [];
            for(var i=0;i<val.length;i++){
                newarr.push(val[i].name)
            }
            return newarr.join()

        },
    },
    computed: {
      VUE_APP_BASE_API() {
        return process.env.VUE_APP_BASE_API;
      },
    },
    created() {
      this.getList();
      this.getclassList();
      this.initForm();
    },
    methods:{
      download(data){
          let link = document.createElement('a');
          link.target = '_blank'
          link.href = this.VUE_APP_BASE_API+'/api/resources/downloadResource?file_url='+data.url;
          link.download = data.title; 
          link.click();  
      },
      handleAvatarSuccess(name,res) {
        this.form[name] = res.path;
        this.$forceUpdate();
      },
      beforeAvatarUpload(file) {
        const isLt = file.size / 1024 / 1024 < 20;
        if (!isLt) {
          this.$message.error("上传头像图片大小不能超过 20MB!");
        }
        return isLt;
      },
      uploadFile(data){
          this.form.url = URL.createObjectURL(data.file);
          this.form.file = data.file;
      },
      initcondition(){
        this.queryParams.keyword="";
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.loading = true;
        this.queryParams.page = 1;
        this.getList();
      },
      getclassList(){
          var data = {}
          data.page = 1;
          data.pageSize = 999;
        getgories(data).then(response => {
            // console.log(response.data)
          this.classoptions = response.data;
        })
      },
      getList(){
        getresources(this.queryParams).then(response => {
          console.log(response)
          this.loading = false;
          this.dataList = response.data;
          this.total = response.total;
        })
      },
      adddata(){
        this.initForm();
        this.dialogTitle = "新增图片";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 初始化表单
      initForm() {
          this.form={
            url: "",
            file:'',
            type:'image',
            title: "",
            _category:[],
            category:[],
            author:'',
            time:'',
            description: "",
          }
          if (this.$refs.dataForm) {
            this.$refs.dataForm.resetFields();
          }
      },
      // 编辑图片
      editdata(row) {
        //   console.log(row)
        this.initForm();
        this.dialogTitle = "编辑图片";
        this.dialogType = "edit";
        this.$nextTick(() => { 
          this.form = JSON.parse(JSON.stringify(row))
          var newarr = [];
            for(var i=0;i<this.form.category.length;i++){
                newarr.push(this.form.category[i].id)
            }
          this.form._category = newarr;
        //   console.log(this.form)
          this.$forceUpdate()
        })
        this.dialogFormVisible = true;
      },
      // 关闭窗口
      closeDialog() {
        this.initForm();
        this.dialogFormVisible = false;
      },
      //删除图片
      handleDelete(row){
        this.$confirm('此操作将永久删除id为'+row.id+'的图片, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delresources(row.id,row).then(response => {
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
        var data = this.form;
        data.category = data._category.join();
        // console.log(data)
        data = this.toFormData(data);
        this.$refs["dataForm"].validate((valid) => {
          if (!valid) return;
          if (this.dialogType=='edit') {
            //修改
            // console.log(this.form)
            editresources(this.form.id,data).then(response => {
                  this.$message({
                    message: '修改成功',
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
                  this.getList();
            })
          }else{
            // 新增
            addresources(data).then(response => {
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

.placeholderdiv input::-webkit-input-placeholder {
  color:#717171 !important;
}
.placeholderdiv input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color:#717171 !important;
}
.placeholderdiv input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color:#717171 !important;
}
.placeholderdiv input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color:#717171 !important;
}
</style>



<style scoped lang="scss">
.imgpopover{
  img{
    max-width: 600px !important;
  }
}
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