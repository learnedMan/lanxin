<template>
        <div style="padding:30px;" class="stylelist-container">
            <h2 style="font-size:24px;">{{productname}}</h2>
            <el-row :gutter="10" class="mb8">
                <el-col :span="1.5" style="margin-right:30px;">
                  <el-button
                    type="primary"
                    icon="el-icon-plus"
                    size="small"
                    @click="handleAddnormal"
                  >增加样式</el-button>
                  <el-button
                    type="primary"
                    icon="el-icon-plus"
                    size="small"
                    @click="handleAppend"
                  >导入样式</el-button>
                  <el-button
                    type="primary"
                    icon="el-icon-plus"
                    size="small"
                    @click="handleAdd"
                  >增加个性化样式</el-button>
                </el-col>
                <el-col :span="15" style="margin-right:30px;">
                  <el-form>
                    <el-form-item label="筛选布局">
                      <el-select v-model="layout" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                      <el-button style="margin-left:30px;" type="primary" icon="el-icon-search" size="small" @click="handleQuery">搜索</el-button>
                      <el-button style="margin-left:30px;" type="info" icon="el-icon-back" size="small" @click="handleBack">返回</el-button>
                    </el-form-item>
                  </el-form>
                </el-col>
            </el-row>

            <el-table
              :data="tableData"
              style="width: 100%;"
              row-key="id"
              border
              :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
              <el-table-column
                prop="id"
                width="120"
                label="序号">
              </el-table-column>
              <el-table-column
                prop="styleName"
                label="样式名称">
              </el-table-column>
              <el-table-column
                prop="catalogCode"
                label="样式代码">
              </el-table-column>
              <el-table-column 
                align="center" 
                label="JSON" 
                prop="path" 
                width="80">
                <template slot-scope="scope">
                  <div>
                    <el-popover placement="right-start" trigger="hover" v-if="scope.row.styleJson">
                      <div class="popover-box">
                        <pre>{{fmtBody(scope.row.styleJson)}}</pre>
                      </div>
                      <i class="el-icon-view" slot="reference"></i>
                    </el-popover>

                    <span v-else>无</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="layoutName"
                align="center"
                width="120"
                label="布局">
              </el-table-column>
              <el-table-column
                prop="catalogName"
                width="180"
                label="栏目类型">
              </el-table-column>
              <el-table-column
                prop="styleDefault"
                align="center"
                width="100px"
                label="是否默认">
                <template slot-scope="scope">
                  <el-switch
                    @change="changedefoult(scope.row)"
                    v-model="scope.row.styleDefault">
                  </el-switch>
                </template>
              </el-table-column>
              <el-table-column
                prop="status"
                align="center"
                width="100px"
                label="是否启用">
                <template slot-scope="scope">
                  <el-switch
                    @change="changestatus(scope.row)"
                    v-model="scope.row.status">
                  </el-switch>
                </template>
              </el-table-column>
              <el-table-column label="样式预览" align="center" class-name="small-padding fixed-width" width="120px">
                <template slot-scope="scope">
                  <Iconbutton icontype="yl" label="预览" @fatherMethod="handleView(scope.row)"></Iconbutton>
                  <!-- <el-button
                    size="mini"
                    type="text"
                    icon="el-icon-view"
                    @click="handleView(scope.row)"
                  >预览</el-button> -->
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center" class-name="small-padding fixed-width" width="200px">
                <template slot-scope="scope">
                  <Iconbutton icontype="xg" label="修改" @fatherMethod="handleEdit(scope.row)"></Iconbutton>
                  <Iconbutton icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>

                  <!-- <el-button
                    size="mini"
                    type="text"
                    icon="el-icon-edit"
                    @click="handleEdit(scope.row)"
                  >修改</el-button>
                  <el-button
                    size="mini"
                    type="text"
                    icon="el-icon-delete"
                    @click="handleDelete(scope.row)"
                  >删除</el-button> -->
                </template>
              </el-table-column>
            </el-table>

            <el-dialog title="样式库" :visible.sync="styleopen" width="1000px">
                <el-tree
                  :data="styledata"
                  :props="defaultProps"
                  node-key="id"
                  show-checkbox
                  ref="styletree"
                  :default-expand-all="true"
                  @check-change="handleCheckChange">
                </el-tree>
                 <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="stylesubmitdialog">确 定</el-button>
                    <el-button @click="stylecancel">取 消</el-button>
                  </div>
            </el-dialog>

            <el-dialog title="产品样式" class="productdialog" :visible.sync="productopen" width="1000px">
                <el-tabs type="border-card" @tab-click="handleproductClick">
                  <el-tab-pane v-for="(item,index) in productlist" :label="item.templateName">
                    <span slot="label" :sourceId="item.sourceId" @click="productchange(item)">{{item.templateName}}</span>
                    <el-tree
                      :data="productstyledata"
                      :props="defaultProps"
                      node-key="id"
                      show-checkbox
                      ref="producttree"
                      :default-expand-all="true"
                      @check-change="handleproductCheckChange">
                    </el-tree>
                  </el-tab-pane>
                </el-tabs>
                <div slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="productsubmitdialog">确 定</el-button>
                  <el-button @click="productcancel">取 消</el-button>
                </div>
            </el-dialog>

             <!-- 修改，新增样式 -->
            <el-dialog :title="pagetitle" @close="closeDialog('elForm')" :visible.sync="openDataScope" width="1000px">
              <el-row :gutter="15" style="padding-left:120px;">
                <el-form
                  ref="elForm"
                  :model="formData"
                  :rules="rules"
                  size="medium"
                  label-width="100px"
                >
                  
                  <el-col :span="24">
                    <el-form-item label="布局">
                        <el-select @change="layoutchange" v-model="dialayout" placeholder="请选择">
                          <el-option
                            v-for="item in layoutoptions"
                            :key="item.id"
                            :label="item.layoutName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                      </el-form-item>
                  </el-col>

                  <el-col :span="24">
                    <el-form-item label="栏目类型" prop="catalogId">
                      <el-select @change="getliststyle" :disabled="dialayout?false:true" v-model="formData.catalogId" placeholder="请选择">
                        <el-option
                          v-for="item in catalogoptions"
                          :key="item.id"
                          :label="item.catalogName"
                          :value="item.id">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="11">
                    <el-form-item label="上级样式" prop="parentId">
                      <el-cascader
                        clearable=""
                        :disabled="formData.catalogId?false:true"
                        v-model="formData.parentId"
                        :placeholder="formData.parentId==0?'根目录':'请选择'"
                        :options="styleoptions"
                        :checkStrictly="true"
                        :show-all-levels="false"
                        ref="myCascader"
                        :props="{ checkStrictly: true }"
                        @visible-change="optiondisable($event)"
                        @expand-change = "expandChange"
                        @change="stylehandleChange">
                        <template slot-scope="{ node, data }">
                          <span>{{ data.styleName }}</span>
                        </template>
                        </el-cascader>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    
                    <el-form-item label="样式名称" prop="styleSimpleName">
                      <span v-if="formData.parentId==0&&dialayout?true:false">{{layout_}} - </span>
                    <span v-if="formData.parentId==0&&formData.catalogId?true:false">{{catalogId_}} - </span>
                    <span  v-if="formData.parentId!=0">{{parentId_}} - </span>
                      <el-input
                        v-model="formData.styleSimpleName"
                        placeholder="请输入样式名称"
                        clearable
                        :style="{width: '40%'}"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item label="样式预览" prop="styleImg">
                      <el-upload
                        ref="upload"
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :auto-upload="false"
                        :on-change="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="formData.styleImg" :src="formData.styleImg" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        <div slot="tip" class="el-upload__tip">请上传不超过 50MB 的一张图片</div>
                      </el-upload>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item label="Json" prop="styleJson">
                      <el-input
                        v-model.trim="formData.styleJson"
                        type="textarea"
                        placeholder="请输入Json"
                        :autosize="{minRows: 4, maxRows: 4}"
                        :style="{width: '48%'}"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="11" v-if="isedit">
                    <el-form-item label="设为默认样式" prop="styleDefault">
                      <el-switch v-model="formData.styleDefault"></el-switch>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24" v-if="isedit">
                    <el-form-item label="是否启用" prop="status">
                      <el-switch v-model="formData.status"></el-switch>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item size="large">
                      <el-button type="primary" @click="submitForm">确定</el-button>
                      <!-- <el-button type="primary" v-show="false" @click="resetForm">重置</el-button> -->
                      <el-button @click="back">返回</el-button>
                    </el-form-item>
                  </el-col>
                </el-form>
              </el-row>
            </el-dialog>



        </div>
</template>

<script>
import { 
  delstyle ,
  infostyle ,
  listcatalog ,
  liststyle ,
  updatestyle ,
  updatestyle2 ,
  addstyle ,
  styletree ,
  templateall ,
  productstyletree ,
  stylecopy ,
  stylecheck ,
  layouttocatalog} from '@/api/mbh'
export default {
  name: 'stylelist',
  data() {
    return {
      productname:'',
      layout:'',
      options: [{
          value: '',
          label: '全部'
        }, {
          value: 'header',
          label: '头部'
        }, {
          value: 'menu',
          label: '菜单栏'
        }, {
          value: 'middle',
          label: '中部'
        }, {
          value: 'groupHeader',
          label: '组头'
        }, {
          value: 'bottom',
          label: '底部'
      }],
      tableData: [],
      //弹窗
      id:undefined,
      sourceId:0,
      styleopen:false,
      styledata:[],
      defaultProps: {
          children: 'children',
          label: 'name'
      },
      productopen:false,
      productlist:[],//产品列表
      productstyledata:[],//产品样式树
      productsourceId:0,//正在展示的产品sourcid,
      firstflag:true,
      tabindex:0,
      // 个性化，修改新增
      pagetitle:'',
      openDataScope:false,
      layout:'',
      layout_:'',
      parentId_:'',
      catalogId_:'',
      formData: {
        styleSimpleName: undefined,
        parentId: 0,
        catalogId: undefined,
        styleImg: null,
        styleJson: undefined,
        styleDefault: false
      },
      rules: {
        styleSimpleName: [
          {
            required: true,
            message: "请输入样式名称",
            trigger: "blur",
          },
        ],
        parentId: [
          {
            required: false,
            message: "请选择上级样式",
            trigger: "blur",
          },
        ],
        catalogId: [
          {
            required: true,
            message: "请选择栏目类型",
            trigger: "blur",
          },
        ],
        styleJson: [
          {
            required: true,
            message: "请输入Json",
            trigger: "blur",
          },
        ],
        styleImg: [
          {
            required: true,
            message: "请选择一张图片",
            trigger: "blur",
          },
        ],
        styleDefault: [
          {
            required: false,
            message: "",
            trigger: "blur",
          },
        ]
      },
      styleImgAction: "https://jsonplaceholder.typicode.com/posts/",
      layoutoptions:[{
            "layoutName":"头部",
            "id":'header'
        },{
            "layoutName":"菜单",
            "id":'menu'
        },{
            "layoutName":"中部",
            "id":'middle'
        },{
            "layoutName":"组头",
            "id":'groupHeader'
        },{
            "layoutName":"底部",
            "id":'bottom'
      }],
      dialayout:'',
      diaid:'',
      catalogoptions:[],
      styleoptions: [],
      isedit:false
    }
  },
  created() {
    this.sourceId = this.$route.query.sourceId
    this.productname = this.$route.query.pname
    this.getList();

 // 个性化，修改新增
    // this.getliststyle();
    this.getlistcatalog();
  },
  methods: {
    fmtBody(value){
      try{
        return JSON.parse(value)
      }catch (err){
        return  value
      }
    },
    // 个性化，修改新增
    handleAdd(){
      this.diaid = undefined;
      this.dialayout = '';
      this.openDataScope = true;
      this.pagetitle = "新增样式";
      this.formData = {
        styleSimpleName: undefined,
        parentId: 0,
        catalogId: undefined,
        styleImg: null,
        styleJson: undefined,
        styleDefault: false
      }
      this.isedit = false;
    },
    closeDialog(type){
      if(type){
        this.$refs[type].resetFields();
        this.id = undefined;
      }
    },
    //获取栏目列表
    getlistcatalog(){
      listcatalog().then(response => {
        console.log(response)
        this.catalogoptions = response.data.list;
      })
    },
    layoutchange(data){
      for(var i=0;i<this.layoutoptions.length;i++){
        if(data==this.layoutoptions[i].id){
          this.layout_ = this.layoutoptions[i].layoutName;
          break;
        }
      }
        // console.log("布局修改")
        layouttocatalog(this.dialayout).then(
            response => {
                this.catalogoptions = response.data;
                this.formData.catalogId = '';
                this.formData.parentId = 0;
            }
        )
        
    },
    getMenuBtnList (menuTreeList) {
      for (let item of menuTreeList) {
        if (item.children.length == 0) {
           delete item.children;
        } else if (item.children.length > 0 ) {
          this.getMenuBtnList(item.children);
        }
      }
      return menuTreeList
    },
    //栏目类型修改
    getliststyle(data){
      console.log(data)
      console.log(this.catalogoptions)
      for(var i=0;i<this.catalogoptions.length;i++){
        if(data==this.catalogoptions[i].id){
          this.catalogId_ = this.catalogoptions[i].catalogName;
          break;
        }
      }
    },
        getBase64(file) {
        return new Promise(function(resolve, reject) {
            let reader = new FileReader();
            let imgResult = "";
            reader.readAsDataURL(file);
            reader.onload = function() {
                imgResult = reader.result;
            };
            reader.onerror = function(error) {
                reject(error);
            };
            reader.onloadend = function() {
                resolve(imgResult);
            };
        });
    },
    handleAvatarSuccess(res, file) {
      // console.log(file)
      this.formData.styleImg = URL.createObjectURL(file[0].raw);
      this.getBase64(file[0].raw).then(res => {
          this.formData.styleImg = res;
      });
      this.$refs.upload.clearFiles();
    },
    beforeAvatarUpload(file) {
      let isRightSize = file.size / 1024 / 1024 < 50;
      if (!isRightSize) {
        this.$message.error("文件大小超过 50MB");
      }
      return isRightSize;
    },
    back(){
      this.$refs["elForm"].resetFields();
      this.openDataScope = false;
      this.diaid = undefined;
      this.dialayout = '';
    },
    //级联菜单修改
    stylehandleChange(value) {
      console.log(value)
      if(value==0){
        // this.parentId_ = '根目录'
      }else{
      this.parentId_ = this.$refs.myCascader.getCheckedNodes()[this.$refs.myCascader.getCheckedNodes().length-1].label;
      }
      // console.log(value, this.$refs.myCascader.getCheckedNodes()[this.$refs.myCascader.getCheckedNodes().length-1].label);
      // var val = '';
      // if(value instanceof Array){
      //   val = Number(value[value.length-1]);
      // }
    },
    expandChange(){
      this.$nextTick(function(){
        $('.is-disabled').parents('.el-cascader-node').attr('C_color_change','C_color_change');
      })
    },
    C_disable(e,bool){
      this.$set(e, 'disabled', bool)
      if(e.children){
        for(var i=0;i<e.children.length;i++){
          this.C_disable(e.children[i],bool);
        }
      }
    },
    optiondisable(e){
      console.log(this.styleoptions)
            if(e){
                for(var i=0;i<this.styleoptions.length;i++){
                    if(this.styleoptions[i].layout == this.dialayout){
                      this.C_disable(this.styleoptions[i],false)
                        // this.$set(this.styleoptions[i], 'disabled', false)
                    }else{
                      this.C_disable(this.styleoptions[i],true)
                        // this.$set(this.styleoptions[i], 'disabled', true)
                    }
                }
            }
            this.$nextTick(function(){
              $('.is-disabled').parents('.el-cascader-node').attr('C_color_change','C_color_change');
            })
    },
    isJSON(str) {
        var str = ''+str;
        if (typeof str == 'string') {
            try {
                var obj=JSON.parse(str);
                if(typeof obj == 'object' && obj ){
                    return true;
                }else{
                    return false;
                }

            } catch(e) {
                console.log('error：'+str+'!!!'+e);
                return false;
            }
        }
    },
    //提交表单
    submitForm() {
      this.formData.sourceId = parseInt(this.sourceId) ;
      this.$refs["elForm"].validate((valid) => {
        if (!valid) return;
        if(!this.isJSON(this.formData.styleJson)){
          this.$message({
            message:'json格式有误',
            type:'warning'
          })
          return;
        }
        // if(this.formData.parentId instanceof Array){
        //   this.formData.parentId = Number(this.formData.parentId[this.formData.parentId.length-1]);
        // }
        var value ='-'+this.formData.styleSimpleName;
        if(this.formData.parentId instanceof Array){
          if(this.formData.parentId.length==0){
            this.formData.parentId=0;
          }else{
           this.formData.parentId = Number(this.formData.parentId[this.formData.parentId.length-1]);
          }
        }
        if(this.formData.parentId==0){
          this.formData.styleName = this.layout_+'-'+this.catalogId_+value
        }else{
          this.formData.styleName =this.parentId_+value
        }
        
        // return;
        // TODO 提交表单
        if (this.diaid) {
          // 修改
          updatestyle(this.formData).then(response => {
            // console.log(response)
            if (response.code === 200) {
              this.msgSuccess('修改成功')
              this.back();
              this.getList();
            } else {
              this.msgError(response.msg)
            }
          })
        }else{
          // 新增
          addstyle(this.formData).then(response => {
            // console.log(response)
            if (response.code === 200) {
              this.msgSuccess('新增成功')
              this.back();
              this.getList();
            } else {
              this.msgError(response.msg)
            }
          })
        }
      });
    },
    handleEdit(data){
      // console.log(data)
      
      this.openDataScope = true;
      this.diaid = data.id;
      this.pagetitle = "修改样式";
      this.dialayout = data.layout;
      this.isedit = true;
      this.editinit();

    },
    //修改初始化
    editinit(){
      infostyle(this.diaid).then(response => {
        // console.log(response)
        this.formData = response.data

        this.getlistcatalog();

        
        if(this.formData.parentId!=0){
          this.parentId_ =  response.data.styleName.split('-'+response.data.styleSimpleName)[0];
        }else{
          if(response.data.styleName.split('-')[0]=='基础'){
            this.layout_ = response.data.styleName.split('-')[0]+'-'+response.data.styleName.split('-')[1]
          }else{
            this.layout_ = response.data.styleName.split('-')[0]
          }

          for(var i=0;i<this.catalogoptions.length;i++){
            if(response.data.catalogId==this.catalogoptions[i].id){
              this.catalogId_ = this.catalogoptions[i].catalogName;
              break;
            }
          }
        }
      })
    },












    handleBack(){
      this.$router.go(-1);
    },
    // disablefn (menuTreeList) {
    //     for (let item of menuTreeList) {
    //         if (item.children.length == 0) {
    //         delete item.children;
    //         } else if (item.children.length > 0 ) {
    //         this.getMenuBtnList(item.children);
    //         }
    //     }
    //     return menuTreeList
    // },
    // 新增样式
    handleAddnormal(){
      this.styleopen = true;
      styletree(this.sourceId).then(response => {
        this.styledata = response.data.info;
        console.log(response)
      })
    },
    handleCheckChange(data, checked, indeterminate) {
      // console.log(data, checked, indeterminate);
    },
    stylecancel(){
      this.styleopen = false;
    },
    stylesubmitdialog(){
      // console.log(this.$refs.styletree.getCheckedKeys());
      // console.log( this.$refs.styletree.getCheckedNodes() );
      // this.stylecancel();
      var datas = this.$refs.styletree.getCheckedNodes();
      var newdatas = [];
      for(var i=0;i<datas.length;i++){
        if(datas[i].hasOwnProperty('parentId')){
          newdatas.push(datas[i]);
        }
      }
      for(var i=0;i<newdatas.length;i++){
          newdatas[i].children=[];
      }
      var data = {
        "datas":newdatas,
        "sourceId":parseInt(this.sourceId) 
      }
      var keyarr = this.$refs.styletree.getCheckedKeys();
      // console.log(keyarr)
      var keyarruse = [];
      for(var i=0;i<keyarr.length;i++){
        if(keyarr[i]){
          keyarruse.push(keyarr[i])
        }
      }
      // console.log(keyarruse)
      var checkdata={
        "fromIds":keyarruse,
        "sourceId":parseInt(this.sourceId) 
      }
      stylecheck(checkdata).then(response => {
        console.log(response)
        if(response.msg!='操作成功'){
          this.$confirm('有重复样式, 是否继续增加?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            // this.$message({
            //   type: 'success',
            //   message: '增加!'
            // });
              stylecopy(data).then(response => {
                console.log(response)
                if (response.code === 200) {
                    this.msgSuccess('复制成功')
                    this.stylecancel();
                    this.getList();
                } else {
                  this.msgError(response.msg)
                }
              })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });          
          });
        }else{
          stylecopy(data).then(response => {
            console.log(response)
            if (response.code === 200) {
                this.msgSuccess('复制成功')
                this.stylecancel();
                this.getList();
            } else {
              this.msgError(response.msg)
            }
          })
        }
      })

    },
    //导入样式
    producttreefn(sourceId){
      this.productstyledata=[];
      productstyletree(sourceId,this.sourceId).then(response => {
        this.productstyledata = response.data.info;
        // console.log(response)
      })
    },
    handleAppend(){
      this.productopen = true;
      templateall().then(response => {
        console.log(response)
        this.productlist = response.data.list;
        console.log(this.productlist);
        for(var i=0;i<this.productlist.length;i++){
          if(this.productlist[i].sourceId==this.sourceId){
            this.productlist.splice(i,1)
          }
        }

        if(this.firstflag){
          this.productsourceId = this.productlist[0].sourceId;
          this.producttreefn(this.productsourceId);
          this.firstflag = false;
        }
      })
    },
    productcancel(){
      this.productopen = false;
    },
    //确定导入
    productsubmitdialog(){
      console.log( this.$refs.producttree[this.tabindex].getCheckedNodes() );

      var datas = this.$refs.producttree[this.tabindex].getCheckedNodes();
      var newdatas = [];
      for(var i=0;i<datas.length;i++){
        if(datas[i].hasOwnProperty('parentId')){
          newdatas.push(datas[i]);
        }
      }
      for(var i=0;i<newdatas.length;i++){
          newdatas[i].children=[];
      }
      var data = {
        "datas":newdatas,
        "sourceId":parseInt(this.sourceId) 
      }
      console.log(data)

      var keyarr = this.$refs.producttree[this.tabindex].getCheckedKeys();
      // console.log(keyarr)
      var keyarruse = [];
      for(var i=0;i<keyarr.length;i++){
        if(keyarr[i]){
          keyarruse.push(keyarr[i])
        }
      }
      // console.log(keyarruse)
      var checkdata={
        "fromIds":keyarruse,
        "sourceId":parseInt(this.sourceId) 
      }
      stylecheck(checkdata).then(response => {
        console.log(response)
        if(response.msg!='操作成功'){
          this.$confirm('有重复样式, 是否继续增加?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            // this.$message({
            //   type: 'success',
            //   message: '增加!'
            // });
              stylecopy(data).then(response => {
                console.log(response)
                if (response.code === 200) {
                    this.msgSuccess('复制成功')
                    this.$refs.producttree[this.tabindex].setCheckedKeys([]);
                    this.productcancel();
                    this.getList();
                } else {
                  this.msgError(response.msg)
                }
              })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });          
          });
        }else{
          stylecopy(data).then(response => {
            console.log(response)
            if (response.code === 200) {
                this.msgSuccess('复制成功')
                this.$refs.producttree[this.tabindex].setCheckedKeys([]);
                this.productcancel();
                this.getList();
            } else {
              this.msgError(response.msg)
            }
          })
        }
      })

















      // stylecopy(data).then(response => {
      //   console.log(response)
      //   if (response.code === 200) {
      //       this.msgSuccess('复制成功')
      //       this.$refs.producttree[this.tabindex].setCheckedKeys([]);
      //       this.productcancel();
      //       this.getList();
      //   } else {
      //     this.msgError(response.msg)
      //   }
      // })

    },
    // 切换产品
    productchange(data){
      console.log(data)
      this.productsourceId = data.sourceId;
      this.producttreefn(this.productsourceId);
    },
    handleproductClick(tab,event){
       this.tabindex = parseInt(tab.index);
    },
    handleproductCheckChange(data, checked, indeterminate) {
      // console.log(data, checked, indeterminate);
    },
    /** 查询样式列表 */
    getList() {
      // this.loading = true
      var catalogdata = {
        "layout":this.layout,
        "sourceId":this.sourceId
      }
      liststyle(catalogdata).then(
        response => {
          console.log(response)
          this.tableData = response.data||[];
          this.styleoptions = response.data||[];
          this.getMenuBtnList(this.styleoptions);
          // this.loading = false
        }
      )
    },
    // 切换默认
    changedefoult(data){
      console.log(data)
      updatestyle2(data).then(response => {
        // console.log(response)
        if (response.code === 200) {
          this.msgSuccess('修改成功')
          this.getList();
        } else {
          this.msgError(response.msg)
        }
      })
    },
    // 切换启用状态
    changestatus(data){
      console.log(data)
      updatestyle2(data).then(response => {
        // console.log(response)
        if (response.code === 200) {
          this.msgSuccess('修改成功')
          this.getList();
        } else {
          this.msgError(response.msg)
        }
      })
    },
    /** 搜索 */
    handleQuery(){
      this.getList();
    },
    handleView(data){
      // console.log(process.env.VUE_APP_BASE_API)
      // return
      window.open('http://10.30.10.158/view/#/mt?id='+data.id);
    },
    handleDelete(data){
      this.$confirm('是否确认删除序号为"' + data.id + '"的数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function() {
        return delstyle(data.id)
      }).then(() => {
        this.getList()
        this.msgSuccess('删除成功')
      }).catch(function() {})
    }

  }
}
</script>
<style lang="scss">
.el-table td, .el-table th{
  text-align: left;
}
.el-upload__tip {
  line-height: 1.2;
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
.productdialog .el-tabs__nav>div{
  padding: 0 !important;
}
.productdialog .el-tabs__nav>div span{
  display: block;
  width: 100%;
  height: 100%;
  padding:0 20px;
}

.popover-box {
  background: #112435;
  color: #f08047;
  height: 600px;
  min-width:500px;
  max-width:800px;
  overflow: auto;
}
.popover-box::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>