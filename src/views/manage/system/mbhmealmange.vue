<template>
  <div class="mbhmealmange">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <el-form-item label="所属产品：">
        <el-select @change="changesource_id" v-model="queryParams.sourceId" placeholder="请选择">
          <el-option v-for="item in productList" :key="item.source_id" :label="item.name" :value="item.source_id||0">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="套餐名：">
        <el-input
          v-model="queryParams.mealName"
          placeholder="请输入关键字"
          clearable
          size="small"
          style="width: 200px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="终端：">
        <el-select v-model="queryParams.appType" placeholder="请选择">
          <el-option v-for="item in appTypeList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="更新时间：">
          <el-date-picker
            @change="changedate"
            v-model="datevalue"
            type="daterange"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
            </el-date-picker>
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
      <el-table-column 
        align="center" 
        label="JSON" 
        prop="path" 
        width="80">
        <template slot-scope="scope">
          <div>
            <el-popover placement="right-start" trigger="hover" v-if="scope.row.publishJson">
              <div class="popover-box">
                <pre>{{fmtBody(scope.row.publishJson)}}</pre>
              </div>
              <i class="el-icon-view" slot="reference"></i>
            </el-popover>

            <span v-else>无</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="套餐ID" align="center" prop="mealId" />
      <el-table-column label="套餐名" align="center" prop="mealName" :show-overflow-tooltip="true" />
      <el-table-column label="终端" align="center" prop="appType" :show-overflow-tooltip="true" />
      <el-table-column label="版本" align="center" prop="version" :show-overflow-tooltip="true" />
      <el-table-column label="更新时间" align="center" prop="createdAt" :show-overflow-tooltip="true" />
      <el-table-column width="160px" label="操作" align="center">
        <template slot-scope="scope">
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
          <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
          <Iconbutton icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="totalCount>0"
      :total="totalCount"
      :page.sync="queryParams.pageIndex"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
    <!-- 新增/修改模板化套餐弹窗 -->
    <el-dialog width="550px" 
    :close-on-click-modal = false
    :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="dataForm">
        <el-form-item label-width="120px" label="套餐:" prop="mealId">
            <el-select v-model="form.mealId" placeholder="请选择">
                <el-option v-for="item in mealList" :key="item.id" :label="item.mealName" :value="item.id">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item  label-width="120px" label="终端:" prop="appType">
            <el-select @change="appTypechange" v-model="form.appType" placeholder="请选择">
                <el-option v-for="item in f_appTypeList" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label-width="120px" label="版本:" prop="version">
            <el-select v-model="form.version" placeholder="请选择">
                <el-option v-for="item in versionList" :key="item.id" :label="item.platform+'：'+item.version_code" :value="item.version_code">
                </el-option>
            </el-select>
        </el-form-item>
        <!-- <el-form-item label-width="80px" label="套餐" prop="keyword">
          <el-input style="width: 350px" autocomplete="off" placeholder="请输入模板化套餐词汇" v-model="form.keyword"></el-input>
        </el-form-item>
        <el-form-item label-width="80px" label="终端" prop="keyword">
          <el-input style="width: 350px" autocomplete="off" placeholder="请输入模板化套餐词汇" v-model="form.keyword"></el-input>
        </el-form-item>
        <el-form-item label-width="80px" label="版本" prop="keyword">
          <el-input style="width: 350px" autocomplete="off" placeholder="请输入模板化套餐词汇" v-model="form.keyword"></el-input>
        </el-form-item>  -->
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
  editgories,
  getWhitelist,
  addWhitelist,
  delWhitelist,

  getproduct,
  getPublishList,
  delPublishList,

  getproduct_versions,
  mealdefaultlist,
  addPublish,
  editPublish
  } from '@/api/manage'
  export default {
    name: 'mbhmealmange',
    data() {
      return {
        datevalue:'',

        // 查询参数
        product_id:'',

        queryParams: {
          pageIndex: 1,
          pageSize: 10,
          sourceId:0,
          mealName:"",
          appType:''
        },
        loading:true,
        dataList:[],
        // 总条数
        totalCount: 0,
        dialogFormVisible: false,
        form: {},
        rules: {
          appType: [
            { required: true, message: "请选择终端", trigger: "blur" }
          ],
          version: [
            { required: true, message: "请选择版本", trigger: "blur" }
          ]
        },
        dialogType: "add",
        dialogTitle:'',

        mealList:[],
        productList:[],
        versionList:[],
        _versionList:[],
        appTypeList:[{
          value: '',
          label: '全部'
        },{
          value: 'ANDROID',
          label: 'ANDROID'
        },{
          value: 'IOS',
          label: 'IOS'
        },{
          value: 'WEB',
          label: 'WEB'
        }],
      }
    },
    created() {
      this.getproductList()

    },
    computed:{
        f_appTypeList() {
            return this.appTypeList.filter(item=>item.value != '');
        }
    },
    methods:{
      fmtBody(value){
        try{
          return JSON.parse(value)
        }catch (err){
          return  value
        }
      },
      appTypechange(){
        this.form.version = '';
        this.versionList = JSON.parse(JSON.stringify(this._versionList)) ;
        this.versionList = this.versionList.filter(item=>item.platform.toLowerCase() == this.form.appType.toLowerCase());
      },
      getmealList(){
        var data = {
          sourceId:this.queryParams.sourceId
        }
        mealdefaultlist(data).then((response) => {
          this.mealList = response.data;
          // console.log(response)
        });
      },
      getproductList(){
        getproduct({}).then((response) => {
            this.productList = response.data;
            this.product_id = this.productList[0].id;
            this.queryParams.sourceId = this.productList[0].source_id;
            this.getversionsList()
             this.getmealList();
            this.initForm();
      this.getList();

        });
      },
      getversionsList(){
        var data = {
          page:1,
          pageSize:999,
          product_id:this.product_id
        }
        getproduct_versions(data).then(response => {
          this._versionList = JSON.parse(JSON.stringify(response.data)) ;
          // console.log(response)
          this.versionList = response.data;
          // this.dataList = response.data;
        })
      },
      changesource_id(id){
        for(var i=0;i<this.productList.length;i++){
            if(this.productList[i].source_id==id){
                this.product_id = this.productList[i].id;
            }
        }
        this.getmealList()
        this.getversionsList()
        this.handleQuery();
      this.initForm();
        // console.log(this.queryParams.source_id)
        // console.log(this.product_id)
      },

      initcondition(){
        this.queryParams.mealName="";
        this.queryParams.appType="";
        this.queryParams.beginTime="";
        this.queryParams.endTime="";
        this.datevalue="";
      },
      changedate(){
        try {
            this.queryParams.beginTime = this.datevalue[0]
            this.queryParams.endTime = this.datevalue[1]
        } catch (error) {
            this.queryParams.beginTime = ''
            this.queryParams.endTime = ''
        }
        // console.log(this.queryParams)
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.loading = true;
        this.queryParams.pageIndex = 1;
        this.getList();
      },
      getList(){
          this.loading = true;
        getPublishList(this.queryParams).then(response => {
          // console.log(response)
          this.loading = false;
          this.dataList = response.data.list;
          this.totalCount = response.data.totalCount;
        })
      },
      adddata(){
        this.initForm();
        this.dialogTitle = "新增发布";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 初始化表单
      initForm() {
          this.form = {
            mealId: "",
            sourceId:this.queryParams.sourceId,
            version:'',
            appType:''
          }
          if (this.$refs.dataForm) {
            this.$refs.dataForm.resetFields();
          }
      },
      // 编辑模板化套餐
      editdata(row) {
        this.initForm();
        this.dialogTitle = "编辑发布";
        this.dialogType = "edit";
        this.$nextTick(() => { 
          this.form = JSON.parse(JSON.stringify(row))
          this.versionList = JSON.parse(JSON.stringify(this._versionList)) ;
          this.versionList = this.versionList.filter(item=>item.platform.toLowerCase() == this.form.appType.toLowerCase());
        })
        this.dialogFormVisible = true;
      },
      // 关闭窗口
      closeDialog() {
        this.initForm();
        this.dialogFormVisible = false;
      },
      //删除模板化套餐
      handleDelete(row){
        this.$confirm('此操作将永久删除套餐ID为'+row.mealId+'的模板化套餐, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delPublishList(row.id).then(response => {
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
      // 确定弹窗
      enterDialog() {
        this.$refs["dataForm"].validate((valid) => {
          if (!valid) return;
          if (this.dialogType=='edit') {
            //修改
            for(var i=0;i<this.mealList.length;i++){
              if(this.mealList[i].id==this.form.mealId){
                this.form.mealName = this.mealList[i].mealName
              }
            }
            editPublish(this.form).then(response => {
                  this.$message({
                    message: '修改成功',
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
                  this.getList();
            })
          }else{
            // 新增
            addPublish(this.form).then(response => {
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
.popover-box {
  background: #112435;
  color: #f08047;
  height: 800px;
  min-width:500px;
  max-width:900px;
  overflow: auto;
}
.popover-box::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

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