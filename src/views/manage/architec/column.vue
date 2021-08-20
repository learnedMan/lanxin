<template>
  <div class="column" style="padding:30px;">
    <!-- 搜索 -->
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <el-form-item label="产品：">
        <el-select v-model="queryParams.product_id" placeholder="请选择">
          <el-option
            v-for="item in productList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="info" @click="initcondition" size="mini">重置</el-button> -->
        <!-- <el-button type="primary" @click="handleQuery" size="mini">搜索</el-button> -->
        <el-button type="primary" @click="adddata" size="mini">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 搜索 -->

    <!-- 表格列表 -->
    <el-table
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border
      v-loading="loading"
      :data="dataList"
      row-key="id"
      :tree-props="{children: 'children'}">
      <el-table-column label="栏目名称" align="left" prop="name" />
      <el-table-column label="栏目ID" align="center" prop="id" :show-overflow-tooltip="true" />
      <el-table-column
        label="(模板化)栏目分类"
        align="center"
        prop="template_style"
        :show-overflow-tooltip="true" >
        <template slot-scope="scope">
          <!-- 如果是产品，那么没有样式分类，只有栏目有 -->
          <div v-if="scope.row.type=='product'">无</div>
          <div v-else>{{getstyle(scope.row.template_style)}}</div>
        </template>
      </el-table-column>
      <el-table-column v-if="!isMobile" label="排序" align="center" prop="sort" :show-overflow-tooltip="true" />
      <el-table-column
        label="状态"
        align="center"
        prop="status"
        :show-overflow-tooltip="true" >
        <template slot-scope="scope">
          <el-select :disabled="scope.row.type=='product'" @change="statuschange(scope.row)" v-model="scope.row.status" placeholder="请选择">
            <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column v-if="!isMobile" label="更新时间" align="center" prop="updated_at" :show-overflow-tooltip="true" />
      <el-table-column label="操作" align="left" width="360px">
        <template slot-scope="scope">
          <Iconbutton icontype="xz" label="新增" @fatherMethod="adddata(scope.row)"></Iconbutton>
          <Iconbutton v-if="scope.row.type!='product'" icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
          <Iconbutton v-if="scope.row.b_sort!='begin'" icontype="sy" label="上移" @fatherMethod="move(scope.$index, scope.row, 'up')"></Iconbutton>
          <Iconbutton v-if="scope.row.e_sort!='end'" icontype="xy" label="下移" @fatherMethod="move(scope.$index, scope.row, 'down')"></Iconbutton>
          <Iconbutton v-if="scope.row.type!='product'" icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>
          <!-- <el-button
            size="mini"
            type="text"
            style="color:#E6A23C;"
            icon="el-icon-edit"
            @click="editdata(scope.row)"
            v-if="scope.row.type!='product'"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            style="color:#F56C6C;"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-if="scope.row.type!='product'"
          >删除</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-document-add"
            @click="adddata(scope.row)"
          >新增</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-top"
            :disabled="scope.row.b_sort=='begin'"
            @click="move(scope.$index, scope.row, 'up')"
          >上移</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-bottom"
            :disabled="scope.row.e_sort=='end'"
            @click="move(scope.$index, scope.row, 'down')"
          >下移</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格列表 -->

    <!-- 新增/修改栏目弹窗 -->
    <el-dialog
      width="1200px"
      :close-on-click-modal="false"
      :title="dialogTitle"
      @close="dialogclose"
      top="10vh"
      :visible.sync="dialogFormVisible">
      <el-form
        :model="form"
        :rules="rules"
        ref="dataForm"
        style="display: flex">
        <!-- 左 -->
        <div class="fl" style="width: 50%">
          <el-form-item class="placeholderdiv" label-width="150px" label="上级栏目:" prop="father">
            <el-cascader
            :show-all-levels = false
            :placeholder="form.placeholder"
            v-model="form.father"
            style="width: 350px"
            :options="dataList"
            :props="{ emitPath:false,checkStrictly: true ,value:'id',label:'name'}"
            clearable></el-cascader>
          </el-form-item>
          <el-form-item label-width="150px" label="栏目名称:" prop="name">
            <el-input
              style="width: 350px"
              placeholder="请输入栏目名称"
              v-model="form.name"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="栏目简介:" prop="extra.intro">
            <el-input
              style="width: 350px"
              placeholder="请输入栏目简介"
              v-model="form.extra.intro"
              :autosize="{ minRows: 4}"
              type="textarea"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="栏目封面:" prop="extra.cover">
            <el-upload
              class="avatar-uploader"
              :action="VUE_APP_BASE_API + '/api/upload/image'"
              :headers="importHeaders"
              name="image"
              :show-file-list="false"
              :on-success="handleAvatarSuccess.bind(this,'cover')"
              :before-upload="beforeAvatarUpload">
              <img v-if="form.extra.cover" :src="form.extra.cover" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <div v-show="form.extra.cover" style="line-height: 30px;height: 30px">
                <span
                class="xl-cropper-icon"
                @click.stop="handleRemove('cover')"
              >
                <i class="el-icon-delete" />
              </span>
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item label-width="150px" label="栏目Logo:" prop="extra.logo">
            <el-upload
              class="avatar-uploader"
              :action="VUE_APP_BASE_API + '/api/upload/image'"
              :headers="importHeaders"
              name="image"
              :show-file-list="false"
              :on-success="handleAvatarSuccess.bind(this,'logo')"
              :before-upload="beforeAvatarUpload">
              <img v-if="form.extra.logo" :src="form.extra.logo" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <div v-show="form.extra.logo" style="line-height: 30px;height: 30px">
                <span
                class="xl-cropper-icon"
                @click.stop="handleRemove('logo')"
              >
                <i class="el-icon-delete" />
              </span>
              </div>
            </el-upload>
          </el-form-item>

          <!-- <el-form-item label-width="150px" label="允许发布的内容:" prop="extra.allow_news_types">
            <el-checkbox-group
                v-model="form.extra.allow_news_types">
                <el-checkbox v-for="media in medias" :label="media.label" :key="media.label">{{media.value}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item> -->

          <el-form-item el-form-item  label-width="150px" label="加载子栏目:" prop="extra.load_child">
            <el-switch
              :active-value="'1'"
              :inactive-value="'0'"
              v-model="form.extra.load_child">
            </el-switch>
          </el-form-item>
          <el-form-item el-form-item  label-width="150px" label="加载新闻:" prop="extra.load_news">
            <el-switch
              :active-value="'1'"
              :inactive-value="'0'"
              v-model="form.extra.load_news">
            </el-switch>
          </el-form-item>
          <el-form-item label-width="150px" label="关联栏目:" prop="extra.linked_channel_id">
            <el-cascader
            v-model="form.extra.linked_channel_id"
            style="width: 350px"
            :options="dataList"
            :props="{ checkStrictly: true ,value:'id',label:'name', emitPath:false}"
            clearable></el-cascader>
          </el-form-item>
          <el-form-item el-form-item  label-width="150px" label="(模板化)栏目:">
            <el-select clearable="" @change="catalogchange" v-model="form.extra.template_style" prop="extra.template_style" placeholder="请选择">
              <el-option v-for="item in catalogoptions" :key="item.id" :label="item.catalogName" :value="''+item.catalogCode">
              </el-option>
            </el-select>
            <!-- <el-popover
              style="margin-left:10px;"
              placement="right"
              trigger="hover">
              <div>
                <img :src="mbhimg[form.extra.template_style]?mbhimg[form.extra.template_style]:mbhimg.zanwu" alt="">
              </div>
              <el-button slot="reference">预览</el-button>
            </el-popover> -->
          </el-form-item>

          <el-form-item el-form-item label-width="150px" label="(模板化)样式:" prop="extra.template_json_id">
            <el-select clearable="" v-model="form.extra.template_json_id" placeholder="请选择">
              <el-option v-for="item in styleoptions" :key="item.id" :label="item.styleName" :value="item.id">
              </el-option>
            </el-select>
            <!-- <el-popover

              placement="right"
              trigger="hover">
              <div>
                <img :src="mbhimg[form.extra.template_style]?mbhimg[form.extra.template_style]:mbhimg.zanwu" alt="">
              </div> -->
              <el-button v-if="form.extra.template_json_id" @click="yulanfn" style="margin-left:10px;">预览</el-button>
            <!-- </el-popover> -->
          </el-form-item>

          <el-form-item label-width="150px" label="排序(权重):" prop="sort">
            <el-input
              style="width: 350px"
              placeholder="请输入排序(权重)"
              v-model="form.sort"
            ></el-input>
          </el-form-item>
          <el-form-item el-form-item  label-width="150px" label="菜单分组:" prop="extra.group">
            <el-select v-model="form.extra.group" placeholder="请选择">
              <el-option v-for="item in groupoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label-width="150px" label="展示条数:" prop="extra.show_num">
            <el-input
              style="width: 350px"
              placeholder="请输入展示条数"
              v-model="form.extra.show_num"
              ></el-input>
          </el-form-item>
          <el-form-item el-form-item  label-width="150px" label="是否启用:" prop="status">
            <el-select v-model="form.status" placeholder="请选择">
              <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>

        <!-- 右 -->
        <div class="fr" style="width: 50%">
            <el-form-item el-form-item label-width="150px" label="栏目类型:" prop="type">
              <el-select @change="changetype" v-model="form.type" placeholder="请选择">
                <el-option v-for="item in columntypeoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

            <!-- 默认 -->
            <child-page1 v-if="forceRefresh" v-show="form.type=='default'||form.type=='video_waterfall'||form.type=='video_landscape'||form.type=='subscription'||form.type=='topic'||form.type=='matrix'" ref="c_page1" :userdata="userdata"  :form="form" v-model="form" />
            <!-- 服务 -->
            <el-form-item v-show="form.type=='service'" label-width="150px" label="服务背景图:" prop="extra.background">
              <el-upload
                class="avatar-uploader"
                :action="VUE_APP_BASE_API + '/api/upload/image'"
                :headers="importHeaders"
                name="image"
                :show-file-list="false"
                :on-success="handleAvatarSuccess.bind(this,'background')"
                :before-upload="beforeAvatarUpload">
                <img v-if="form.extra.background" :src="form.extra.background" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>

            <el-form-item v-show="form.type=='service'"
              label-width="150px" label="模块类型:" prop="extra.template">
              <el-select clearable="" v-model="form.extra.template" placeholder="请选择">
                <el-option v-for="item in moduleoption" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item v-show="form.type=='service'"
              label-width="150px" label="链接类型:" prop="extra.link.type">
              <el-select clearable="" v-model="form.extra.link.type" placeholder="请选择">
                <el-option v-for="item in linktypeoption" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <!-- 专题 -->
            <el-form-item v-show="form.type=='topic'"
              label-width="150px" label="专题类型:" prop="extra.topic_type">
              <el-select v-model="form.extra.topic_type" placeholder="请选择">
                <el-option v-for="item in topicoption" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <!-- 外链 -->
            <div v-if="form.type=='service'&&form.extra.link.type=='app_redirect'">
              <el-form-item v-if="form.type=='outer_link'||form.type=='auth_link'||form.type=='service'"
                label-width="150px" label="链接地址:" prop="extra.link.url">
                <el-input
                  style="width: 350px"
                  placeholder="请输入栏目名称"
                  v-model="form.extra.link.id"
                ></el-input>
              </el-form-item>
              <div v-else></div>
            </div>
            <div v-else>
              <el-form-item v-if="form.type=='outer_link'||form.type=='auth_link'||form.type=='service'"
                label-width="150px" label="链接地址:" prop="extra.link.url">
                <el-input
                  style="width: 350px"
                  placeholder="请输入栏目名称"
                  v-model="form.extra.link.url"
                ></el-input>
              </el-form-item>
            </div>


        </div>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button @click="enterDialog" type="primary">确 定</el-button>
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

import p1001 from '@/assets/mbh_images/1001.png'
import p1002 from '@/assets/mbh_images/1002.png'
import p1101 from '@/assets/mbh_images/1101.png'
import p1102 from '@/assets/mbh_images/1102.png'
import p1103 from '@/assets/mbh_images/1103.png'
import p1104 from '@/assets/mbh_images/1104.png'
import p1105 from '@/assets/mbh_images/1105.png'
import p1201 from '@/assets/mbh_images/1201.png'
import p1202 from '@/assets/mbh_images/1202.png'
import p1203 from '@/assets/mbh_images/1203.png'
import p1204 from '@/assets/mbh_images/1204.png'
import p1301 from '@/assets/mbh_images/1301.png'
import p1302 from '@/assets/mbh_images/1302.png'
import p1303 from '@/assets/mbh_images/1303.png'
import p1304 from '@/assets/mbh_images/1304.png'
import p1305 from '@/assets/mbh_images/1305.png'
import p1306 from '@/assets/mbh_images/1306.png'
import p1307 from '@/assets/mbh_images/1307.png'
import p1308 from '@/assets/mbh_images/1308.png'
import p1401 from '@/assets/mbh_images/1401.png'
import p1402 from '@/assets/mbh_images/1402.png'
import p1403 from '@/assets/mbh_images/1403.png'
import p1501 from '@/assets/mbh_images/1501.png'
import p1601 from '@/assets/mbh_images/1601.png'
import p1602 from '@/assets/mbh_images/1602.png'
import p1603 from '@/assets/mbh_images/1603.png'
import tab栏 from '@/assets/mbh_images/tab栏.png'
import zanwu from '@/assets/mbh_images/zanwu.png'

import ChildPage1 from './pages/c_page1'

  export default {
    name: 'column',
    components: {
      ChildPage1,
      Cropper
    },
    data() {
      var mytoken = sessionStorage.getItem("token");
      return {
        mbhimg:{
          1001:p1001,
          1002:p1002,
          1101:p1101,
          1102:p1102,
          1103:p1103,
          1104:p1104,
          1105:p1105,
          1201:p1201,
          1202:p1202,
          1203:p1203,
          1204:p1204,
          1301:p1301,
          1302:p1302,
          1303:p1303,
          1304:p1304,
          1305:p1305,
          1306:p1306,
          1307:p1307,
          1308:p1308,
          1401:p1401,
          1402:p1402,
          1403:p1403,
          1501:p1501,
          1601:p1601,
          1602:p1602,
          1603:p1603,
          tab栏:tab栏,
          zanwu:zanwu
        },
        //子组件
        forceRefresh:false,
        userdata:[],

        importHeaders: { Authorization: mytoken }, //传图片时的token
        // 查询参数
        queryParams: {
          product_id: "",
        },
        catalogid:'',//栏目id

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
        linktypeoption:[
          {
            value: 'outer_link',
            label: '外链'
          },
          {
            value: 'auth_link',
            label: '授权外链'
          },
          {
            value: 'app_redirect',
            label: 'app跳转'
          },
          {
            value: 'third_party_app_redirect',
            label: '三方app跳转'
          },
          {
            value: 'hyg_auth',
            label: '好易购授权'
          },
          {
            value: 'hyg_force_auth',
            label: '好易购强制授权'
          },
        ],
        groupoptions: [{
          value: 'home',
          label: '首页'
        },{
          value: 'video',
          label: '视频'
        },{
          value: 'v_channel',
          label: '视听'
        },{
          value: 'service',
          label: '服务'
        },{
          value: 'interact',
          label: '互动'
        }],
        catalogoptions:[],
        styleoptions:[],
        columntypeoptions:[
          {
            value: 'default',
            label: '默认'
          },{
            value: 'topic',
            label: '专题'
          },{
            value: 'matrix',
            label: '矩阵'
          },{
            value: 'matrix_intro',
            label: '矩阵简介'
          },{
            value: 'video_waterfall',
            label: '视频瀑布流'
          },{
            value: 'video_landscape',
            label: '横版视频'
          },{
            value: 'subscription',
            label: '订阅类型'
          },{
            value: 'service',
            label: '服务'
          },
          {
            value: 'outer_link',
            label: '外链'
          },{
            value: 'auth_link',
            label: '授权外链'
          },{
            value: 'tv',
            label: '电视'
          },{
            value: 'radio',
            label: '广播'
          },{
            value: 'two_col',
            label: '二列列表'
          },{
            value: 'multi_layer',
            label: '多层级'
          },{
            value: 'map_matrix',
            label: '地图矩阵'
          }
        ],
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
      yulanfn(){
        window.open(this.viewurl+this.form.extra.template_json_id)
      },
      // getinfo(val){
      //   return new Promise((resolve, reject)=>{
      //     styleinfo(val).then(response=>{
      //        resolve(response.data.styleName)
      //     })
      //   })
      // },
      // async gettemplate_styletxt(val){
      //   if(val){
      //     var a = await this.getinfo(val);
      //     console.log(a)
      //     return a;
      //   }else{
      //     return '无'
      //   }
      // },

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
            linked_channel_id:'',
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
      // 弹窗消失的回调函数
      dialogclose(){
        this.$refs.c_page1.listshowarr = [];
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

        this.dialogTitle = "新增栏目";
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
          this.form.extra.linked_channel_id = this.form.extra.linked_channel_id?parseInt(this.form.extra.linked_channel_id):'';
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
