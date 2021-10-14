<template>
  <div class="column" style="padding:30px;">
    <!-- 搜索 -->
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <el-form-item
          label="部门:"
          prop="keyword"
        >
          <el-input
            v-model="queryParams.keyword"
            placeholder="请输入关键字"
            clearable
            size="small"
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="创建时间:" prop="createDate">
          <el-date-picker
            v-model="queryParams.createDate"
            type="daterange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="handleDateChange"
          />
        </el-form-item>
      <el-form-item>
        <!-- <el-button v-points = "1500" type="info" @click="initcondition" size="mini">重置</el-button> -->
        <!-- <el-button v-points = "1500" type="primary" @click="handleQuery" size="mini">搜索</el-button> -->
        <el-button v-points = "1500" type="primary" @click="adddata" size="mini">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 搜索 -->

    <!-- 表格列表 -->
    <el-table
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border
      v-loading="loading"
      :data="tableData"
      row-key="id"
      :tree-props="{children: 'children'}">
      <el-table-column label="部门名称" align="left" prop="name" />
      <el-table-column label="部门ID" align="center" prop="id" :show-overflow-tooltip="true" />
      <el-table-column v-if="!isMobile" label="创建时间" align="center" prop="date" :show-overflow-tooltip="true" />
      <el-table-column label="操作" align="left" width="360px">
        <template slot-scope="scope">
          <!-- <Iconbutton icontype="xz" label="新增" @fatherMethod="adddata(scope.row)"></Iconbutton> -->
          <Iconbutton v-if="scope.row.type!='product'" icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
          <!-- <Iconbutton v-if="scope.row.b_sort!='begin'" icontype="sy" label="上移" @fatherMethod="move(scope.$index, scope.row, 'up')"></Iconbutton>
          <Iconbutton v-if="scope.row.e_sort!='end'" icontype="xy" label="下移" @fatherMethod="move(scope.$index, scope.row, 'down')"></Iconbutton> -->
          <Iconbutton v-if="scope.row.type!='product'" icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格列表 -->

    <!-- 新增/修改栏目弹窗 -->
    <el-dialog
      width="600px"
      :close-on-click-modal="false"
      :title="dialogTitle"
      top="10vh"
      :visible.sync="dialogFormVisible">
      <el-form
        :model="form"
        :rules="rules"
        ref="dataForm"
       >
        <!-- 左 -->
          <el-form-item class="placeholderdiv" label-width="150px" label="上级部门:" prop="father">
            <el-cascader
            :show-all-levels = false
            :placeholder="form.placeholder"
            v-model="form.father"
            style="width: 350px"
            :options="dataList"
            :props="{ emitPath:false,checkStrictly: true ,value:'id',label:'name'}"
            clearable></el-cascader>
          </el-form-item>
          <el-form-item label-width="150px" label="部门:" prop="name">
            <el-input
              style="width: 350px"
              placeholder="请输入部门名称"
              v-model="form.name"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="描述:" prop="extra.intro">
            <el-input
              style="width: 350px"
              placeholder="请输入部门描述"
              v-model="form.extra.intro"
              :autosize="{ minRows: 4}"
              type="textarea"
            ></el-input>
          </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button v-points = "1500" @click="closeDialog">取 消</el-button>
        <el-button v-points = "1500" @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 新增/修改栏目弹窗 -->

  </div>
</template>

<script>
import Cropper from '@/components/Cropper'
import {
  getChannels,
  getproduct,
  addchannels,
  delchannels,
  setSortchannels,
  getchannelinfo,
  editchannels,
  getUser,
  stylelist,
  cateloglist,
  styleinfo} from '@/api/manage'


  export default {
    name: 'column',
    components: {
      Cropper
    },
    data() {
      var mytoken = sessionStorage.getItem("token");
      return {
        //子组件
        forceRefresh:false,
        userdata:[],

        importHeaders: { Authorization: mytoken }, //传图片时的token
        // 查询参数
        queryParams: {
          keyword: '',
          product_id: "",
          createDate: '',
          start_date: '',
          endd_ate: '',
          with_special_channels: 'topic',
        },
        catalogid:'',//栏目id git clone / git branch/ 
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '部门名称1',
        }, {
          id: 2,
          date: '2016-05-04',
          name: '部门名称2',
        }, {
          id: 3,
          date: '2016-05-01',
          name: '部门名称3',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '部门名称31',
            }, {
              id: 32,
              date: '2016-05-01',
              name: '部门名称32',
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '部门名称4',
        }],
        productList:{},
        sourceId:'',
        statusoptions: [{
          value: 1,
          label: '启用'
        },{
          value: 0,
          label: '禁用'
        }],
        moduleoption:[
          {
            value: 'top',
            label: '顶部卡片'
          },
          {
            value: 'recommend',
            label: '推荐'
          },
          {
            value: 'category',
            label: '分类'
          },
        ],
        topicoption:[
          {
            value: '1',
            label: '简单聚合'
          },
          {
            value: '2',
            label: '多模块聚合'
          }
        ],
        catalogoptions:[],
        styleoptions:[],
        medias:[{
            value: '新闻',
            label: 'news'
          },{
            value: '视频',
            label: 'video'
          },{
            value: '图集',
            label: 'album'
        }],
        checkedmedias:[],
        loading:true,
        dataList:[],
        dialogFormVisible: false,
        form:{},
        rules: {
          father: [{ required: true, message: "请选择上级栏目", trigger: "blur" }],
          name: [{ required: true, message: "请输入栏目名称", trigger: "blur" }],
          // 'extra.cover': [{ required: true, message: "请选择栏目封面", trigger: "blur" }],
          'extra.show_num': [{ required: true, message: "请输入展示条数", trigger: "blur" }],
          type: [{ required: true, message: "请选择栏目类型", trigger: "blur" }],
          status: [{ required: true, message: "请选择是否启用", trigger: "blur" }],
        },
        dialogType: "add",
        dialogTitle:''
      }
    },
    computed: {
      VUE_APP_BASE_API() {
        return this.imgurl2
      },
      productId(){
        return this.queryParams.product_id
      },
      // stylefilter(){
      //   return (val)=>{
      //     for(var i=0;i<this.catalogoptions.length;i++){
      //       if(val==this.catalogoptions[i].id){
      //         return this.catalogoptions[i].catalogName
      //       }
      //     }
      //   }
      // }
    },
    created() {
      // if(!this.sourceId){
      //   this.$message({
      //     message: '请先填写sourceid,以免影响后续操作',
      //     type: 'warning'
      //   });
      //   return
      // }
      this.initForm();
      // this.getList();
      this.getproductList();
      this.getuserfn();

      cateloglist().then(response => {
          // console.log(response)
          this.catalogoptions = response.data.list
      })
    },
    watch:{
      productId(val){//普通的watch监听
        // this.initForm();
        this.productList.forEach((item)=>{
          if(val==item.id){
            this.sourceId = item.source_id
          }
        })
        this.getList();
      },
    },
    methods:{
      /* 解析路径返回值 */
      parseObj(item) {
        const arr = item.key.split('.')
        const val = arr.reduce((obj, key) => obj[key], this.from)
        return item.component === 'select' ? val && val.toString().split(',') : val
      },
      /* 修改时间 */
        handleDateChange (val) {
          const arr = val || ['', ''];
          this.queryParams.start_date = arr[0];
          this.queryParams.endd_ate = arr[1];
        },
      /* 值变化 */
      handleInput(val, item) {
        const arr = item.key.split('.')
        const type = item.type || 'string'
        if (type === 'number') val = parseInt(val) || ''
        arr.reduce((obj, key) => {
          if (key === arr[arr.length - 1]) obj[key] = item.component === 'select' ? val.join() : val
          else return obj[key]
        }, this.from)
      },
      handleRemove(keyval){
        this.form.extra[keyval] = '';
        this.$forceUpdate()
      },

      catalogchange(){
        if(!this.form.extra.template_style){
          return
        }
        this.styleoptions = [];
        this.form.extra.template_json_id = '';
          var data = {
              "catalogCode":this.form.extra.template_style,
              "sourceId":this.sourceId
          }
          stylelist(data).then(response => {
              console.log(response)
              this.styleoptions = response.data||[];
          })
      },
      getstyle(val){
        // console.log(this.catalogoptions)
        // console.log(val)
        if (!val){
          return '无'
        }
        for(var i=0;i<this.catalogoptions.length;i++){
          if(val==this.catalogoptions[i].catalogCode){
            return this.catalogoptions[i].catalogName
          }
        }
      },
      getuserfn(){//获取系统用户列表
        var data={};
        data.model = 'User';
        var queryParams = {
            page: 1,
            pageSize: 999
        }
        getUser(Object.assign(data,queryParams)).then(response => {
            // console.log(response)
            response.data.forEach((item, index) => {
                this.userdata.push({
                    label: item.name,
                    key: item.id,
                    pinyin: item.name
                });
            });
            // console.log(this.userdata)
            this.forceRefresh = true;
        })
      },
      // 初始化表单
      initForm() {
        if (this.$refs.dataForm) {
          this.$refs.dataForm.resetFields();
        }
        this.form = {
          type:'default',
          father:'',
          name:'',
          sort:0,
          status:1,
          extra:{
            // 公共
            intro:'',
            cover:'',
            logo:'',
            allow_news_types:[],
            load_child:'1',
            load_news:'1',
            linked_channel_id:[],
            template_style:'',
            template_json_id:'',
            template_json:{},
            show_num:20,
            group:'',
            // 默认
            multi_review:[],
            display_more:'',
            display_title:'',
            // 专题
            topic_type:'1',
            // 服务
            background:'',
            // 外链
            link:{
              type:'',
              url:'',
              id:''
            },
            template:''
          }
        };
      },
      changetype(){//修改栏目类型
        // console.log(this.form.type)
        if(this.form.type=='default'){
          this.$nextTick(()=>{
            this.$refs.c_page1.showtxt()
          })
        }
      },
      handleAvatarSuccess(name,res) {
        this.form.extra[name] = res.path;
        // console.log(this.form.extra[name])
        this.$forceUpdate();
      },
      beforeAvatarUpload(file) {
        const isLt = file.size / 1024 / 1024 < 20;
        if (!isLt) {
          this.$message.error("上传头像图片大小不能超过 20MB!");
        }
        return isLt;
      },
      // initcondition() {//重置搜索
      //   this.queryParams.product_id = "";
      // },
      // 修改状态
      statuschange(data){
        // console.log(data)
        editchannels(data.id,data).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success'
          });
          this.getList();
        })
      },
      /** 搜索按钮操作 */
      // handleQuery() {
      //   this.loading = true;
      //   this.getList();
      // },
      // 获取产品列表
      getproductList(){
        getproduct({}).then((response) => {
          this.productList = response.data;
          this.queryParams.product_id = this.productList[0].id;
        });
      },
      // 获取表格列表
      getList(){
        // console.log(this.queryParams)
        this.loading = true;
        getChannels(this.queryParams).then(response => {
          this.loading = false;
          this.dataList = response;

          function addstatus(arr){
            for(var i=0;i<arr.length;i++){
              if(i==0){
                arr[i].b_sort = 'begin'
              }
              if(i==arr.length-1){
                arr[i].e_sort = 'end'
              }
              if(arr[i].children&&arr[i].children.length!=0){
                addstatus(arr[i].children)
              }
            }
          }
          addstatus(this.dataList)
          // console.log(this.dataList)
        })
      },
      //上移下移
      move(index, e, type){
        var thisid = e.id;
        var thissort = e.sort;
        var getid='';
        var getsort='';
        function find(arr,id,type){
          for(var i=0;i<arr.length;i++){
            if(arr[i].id==id){
              if(type=='up'){
                getid = arr[i-1].id
                getsort = arr[i-1].sort
              }else{//down
                getid = arr[i+1].id
                getsort = arr[i+1].sort
              }
            }else{
              if(arr[i].children&&arr[i].children.length!=0){
                find(arr[i].children,id,type)
              }
            }
          }
        }
        find(this.dataList,thisid,type)
        // console.log('当前的id：'+thisid)
        // console.log('获取的id：'+getid)
        // console.log('获取的权重：'+getsort)
        var data = {
          [thisid]:getsort,
          [getid]:thissort
        }
        setSortchannels(data).then(response => {
            this.$message({
              message: '修改成功',
              type: 'success'
            });
            this.getList();
        })

      },
      // 增加栏目
      adddata(data) {
        this.initForm();
        this.forceRefresh = false;
        this.$nextTick(()=>{
          this.forceRefresh = true;
        })
        // console.log(data)
        this.form.father = [data.id]||[];
        this.form.placeholder = data.name||'';

        this.dialogTitle = "新增部门";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 编辑栏目
      editdata(row) {
        this.initForm();
        this.catalogid = '';
        this.dialogTitle = "编辑栏目";
        this.dialogType = "edit";
        getchannelinfo(row.id).then(response => {
          var extradata = this.form.extra;
          this.form = JSON.parse(JSON.stringify(response)) ;
          // this.form = Object.assign(this.form,response);
          this.form.extra = Object.assign(extradata,this.form.extra)
          // console.log(this.form)
          // 把拿到的多级审核的数据进行修改
          var new_multi_review = [];
          var multi_review = this.form.extra.multi_review||[];
          console.log(this.form)
          for(var i=0;i<multi_review.length;i++){
            new_multi_review[i] = [];
            new_multi_review[i] = multi_review[i].reviewer_ids.split(',');
            for(var k=0;k<new_multi_review[i].length;k++){
              new_multi_review[i][k] = parseInt(new_multi_review[i][k])
            }
          }
          // console.log(new_multi_review)
          this.form.extra.multi_review = new_multi_review;
          // this.form.extra.linked_channel_id = this.form.extra.linked_channel_id?parseInt(this.form.extra.linked_channel_id):'';
          this.form.extra.linked_channel_id = this.form.extra.linked_channel_id.length ? this.form.extra.linked_channel_id.split(',') : []
          this.form.extra.cover = this.form.extra.cover? this.form.extra.cover[0].path:'';
          // this.form.extra.template_style = Number(this.form.extra.template_style) ;
          this.dialogFormVisible = true;
          this.$nextTick(()=>{
            this.$refs.c_page1.showtxt()
            this.$refs.c_page1.listnum = new_multi_review.length;
          })

          // console.log(this.form)
          if(this.form.extra.template_style){
              var a =this.form.extra.template_json_id?Number(this.form.extra.template_json_id):''
              this.catalogchange()
              this.form.extra.template_json_id = a
          }
        })
      },
      //删除栏目
      handleDelete(row){
        this.$confirm('此操作将永久删除id为'+row.id+'的栏目, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delchannels(row.id).then(response => {
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
          var data = JSON.parse(JSON.stringify(this.form))
          data.father = Number(data.father)
          // if(!data.father){
            //   data.father = data.father[data.father.length-1];
          // }else{
            //   data.father = data.father.join('')
          // }
          if(data.extra.linked_channel_id.length) {
            let channels = data.extra.linked_channel_id || [],str=''
            channels.map(v=>{
              str+= v + ','
            })
            data.extra.linked_channel_id = str.slice(0,-1)
          }
          var multi_review = data.extra.multi_review;
          var new_multi_review = [];
          for(var i=0;i<multi_review.length;i++){
            new_multi_review[i] = {};
            new_multi_review[i].sort = (i+1)
            new_multi_review[i].status = 0
            new_multi_review[i].reviewer_ids = multi_review[i].join()
          }
          data.extra.multi_review = new_multi_review;

          data.extra.cover = [{'path':data.extra.cover,'intro':''}];

          // console.log(data)
          // console.log(data.extra.template_json_id)
          // console.log(this.styleoptions)
          if(data.extra.template_json_id){
            for(var i=0;i<this.styleoptions.length;i++){
              if(this.styleoptions[i].id==data.extra.template_json_id){
                data.extra.template_json = this.styleoptions[i].styleJson
              }
            }
          }
          console.log(data)
          // return
          if (this.dialogType=='edit') {
            //修改
            editchannels(data.id,data).then(response => {
                  this.$message({
                    message: '修改成功',
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
                  this.getList();
            })
          }else{
            //新增
            addchannels(data).then(response => {
                  this.$message({
                    message: '新增成功',
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
