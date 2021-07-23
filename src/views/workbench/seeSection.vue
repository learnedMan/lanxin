<style type="text/scss" lang="scss">
  .xl-see-section {
    display: flex;
    padding: 0 20px;
    .el-tree-node__label{
      width: 100%;
          white-space: normal;
          align-items: start;
      }
      .xl-see-section--tree .el-tree-node__content{
        height: auto;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
      }
    &--tree {
      display: inline-block;
      // min-width: 240px;
      border-right: 1px solid #f3f3f3;
      padding: 20px 0 0 30px;
      background-color: #fff;
      .el-tree-node__content {
        padding-right: 20px;
        position: relative;
        height: 40px;
        .el-tree-node__expand-icon {
          position: absolute;
          right: 0;
        }
        &:hover {
          background-color: #ecf5ff;
        }
      }
      .el-tree-node:focus > .el-tree-node__content {
        background-color: #fff;
      }
      .el-tree-node.is-current:focus > .el-tree-node__content {
        background-color: #ecf5ff;
      }
      .is-current > .el-tree-node__content{
        color: rgb(64, 158, 255);
        background-color: #ecf5ff;
        &::before {
          content: '';
          position: absolute;
          height: 40px;
          width: 2px;
          background-color: #1c90ff;
          right: 0;
        }
      }
    }
    &--content {
      background-color: #fff;
      flex: 1;
      padding: 20px 0 0 30px;
    }
    .el-tree > .el-tree-node > .el-tree-node__content {
      padding-left: 10px!important;
    }
  }
</style>
<template>
  <div class="xl-see-section">
    <el-row>
      <el-col :span="4">
        <div class="xl-see-section--tree" style="width:100%;overflow:hidden;">
          <el-tree
            style="width:100%;"
            ref="tree"
            :data="channelsList"
            node-key="id"
            :props="props"
            :expand-on-click-node="false"
            :default-expanded-keys="defaultExpandedKeys"
            @current-change="treeChange"
          />
        </div>
      </el-col>
      <el-col :span="20">
        <div class="xl-see-section--content">
          <div class="search">
            <el-form
              ref="queryForm"
              :model="queryParams"
              :inline="true"
            >
              <el-form-item label="是否搜索所有栏目:" prop="isAllChannel">
                <el-checkbox v-model="queryParams.isAllChannel"></el-checkbox>
              </el-form-item>
              <el-form-item
                label="新闻名称:"
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
              <el-form-item
                label="新闻类型:"
                prop="type"
              >
                <el-select
                  v-model="queryParams.type"
                  size="small"
                  placeholder="请选择类型"
                  clearable
                >
                  <el-option
                    v-for="item in typeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item
                label="新闻状态:"
                prop="status"
              >
                <el-select
                  v-model="queryParams.status"
                  size="small"
                  placeholder="请选择状态"
                  clearable
                >
                  <el-option
                    v-for="item in [{ value: '', label: '全部' }].concat(statusOptions)"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="创建日期:">
                <el-date-picker
                  v-model="dateValue"
                  size="small"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="~"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  @change="handleDateChange"
                />
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  size="mini"
                  @click="handleReset"
                >
                  重置
                </el-button>
                <el-button
                  type="primary"
                  size="mini"
                  @click="handleQuery"
                >
                  搜索
                </el-button>
                <el-button
                  type="primary"
                  size="mini"
                  @click="handleAdd"
                >
                  新增新闻
                </el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-table
            ref="multipleTable"
            v-loading="loading"
            :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
            :data="tableData"
            border
            tooltip-effect="dark"
            style="width: 100%"
          >
            <el-table-column
            v-if="!isMobile"
              label="新闻ID"
              align="center"
              prop="id"
            />
            <el-table-column
            v-if="!isMobile"
              label="新闻封面"
              align="center"
              prop="id"
              width="120"
            >
              <template slot-scope="scope">
                <el-image
                  style="width: 80px; height: 45px"
                  lazy
                  :src="scope.row.cover || useravatar"
                  fit="contain"
                >
                  <img slot="error" :src="useravatar" alt="" style="width: 100%;height: 100%">
                </el-image>
              </template>
            </el-table-column>
            <el-table-column

              label="新闻标题"
              align="center"
              prop="title"
              :show-overflow-tooltip="true"
            >
              <template slot-scope="scope">
                <el-button type="text" @click="handleWatch(scope.row)" class="watch-detail-btn">{{ scope.row.title }}</el-button>
              </template>
            </el-table-column>
            <el-table-column
              label="新闻类型"
              align="center"
              prop="typeLabel"
            />
            <el-table-column
              label="状态"
              align="center"
            >
              <template slot-scope="scope">
                <el-select
                  v-model="scope.row.status"
                  @change="statusChange(scope.row)"
                  size="small"
                >
                  <el-option
                    v-for="item in statusOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </template>
            </el-table-column>
            <el-table-column
            v-if="!isMobile"
              label="作者"
              align="center"
              prop="author_name"
              :show-overflow-tooltip="true"
            />
            <el-table-column
            v-if="!isMobile"
              label="排序"
              align="center"
            >
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="small"
                  @click="handleSort(scope.row)"
                >
                  {{ scope.row.sort }}
                </el-button>
              </template>
            </el-table-column>
            <el-table-column
            v-if="!isMobile"
              label="发布时间"
              align="center"
              prop="created_at"
              :show-overflow-tooltip="true"
            />
            <el-table-column
              label="操作"
              align="center"
              width="250"
            >
              <template slot-scope="scope">
                <div class="verify-table-action">
                  <!-- 置顶和取消置顶 -->
                  <Iconbutton
                    :icontype="scope.row.top === 1? 'qxzd' : 'zd'"
                    :label="scope.row.top === 1? '取消置顶' : '置顶'"
                    @fatherMethod="handlePlaced(scope.row)"
                  ></Iconbutton>
                  <!-- 查看 -->
                  <Iconbutton
                    v-if="scope.row.status === 1"
                    icontype="ckxq"
                    label="详情"
                    @fatherMethod="handleWatch(scope.row)"
                  ></Iconbutton>
                  <!-- 编辑 -->
                  <Iconbutton
                    v-if="scope.row.status !== 1 && scope.row.type !== 'broadcast'"
                    icontype="xg"
                    label="修改"
                    @fatherMethod="handleEdit(scope.row)"
                  ></Iconbutton>
                  <!-- 删除 -->
                  <Iconbutton
                    icontype="sc"
                    label="删除"
                    @fatherMethod="handleListDelete(scope.row)"
                  ></Iconbutton>
                  <!-- 预览 -->
                  <Iconbutton
                    icontype="yl"
                    label="预览"
                    @fatherMethod="handlePreview(scope.row)"
                  ></Iconbutton>
                  <!-- 推送 -->
                  <Iconbutton
                    icontype="ts"
                    label="推送"
                    @fatherMethod="handlePush(scope.row)"
                  ></Iconbutton>
                  <!-- 操作记录 -->
                  <Iconbutton
                    icontype="czjl"
                    label="操作记录"
                    @fatherMethod="handleHistory(scope.row)"
                  ></Iconbutton>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <pagination
            v-show="total > 0"
            :total="total"
            :page.sync="queryParams.page"
            :limit.sync="queryParams.pageSize"
            @pagination="getList"
          />
        </div>
      </el-col>
    </el-row>
    <!-- 编辑新闻 -->
    <el-dialog
      width="1200px"
      title="查看"
      top="20px"
      :visible.sync="detailDialog.show"
      v-if="detailDialog.show"
    >
      <new-detail :id="detailDialog.id" :visible.sync="detailDialog.show" :disabled="detailDialog.disabled" @refresh="refresh" />
    </el-dialog>
    <!-- 修改排序 -->
    <el-dialog
      width="400px"
      title="调整排序"
      :visible.sync="sortDialog.show"
    >
      <el-form
        ref="sortForm"
        :model="sortDialog.form"
        :rules="sortDialog.rules"
        label-width="120px"
        size="small"
      >
        <el-form-item
          label="当前排序:"
          prop="old"
        >
          <el-input
            v-model="sortDialog.form.old"
            disabled
            style="width: 194px"
          />
        </el-form-item>
        <el-form-item
          label="目标排序:"
          prop="now"
        >
          <el-input
            v-model.number="sortDialog.form.now"
            @change="numberChange"
            placeholder="请输入目标排序"
            style="width: 194px"
          />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="sortDialog.show = false">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="enterSortDialog"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
    <!-- 推送 -->
    <el-dialog
      width="500px"
      :title="pushDialog.title"
      :visible.sync="pushDialog.show"
    >
      <el-form
        ref="dialogForm"
        :model="dialogForm"
        :rules="dialogRules"
        label-width="120px"
        size="small"
      >
        <el-form-item
          label="推送终端:"
          prop="push_to.terminal"
        >
          <el-select
            v-model="dialogForm.push_to.terminal"
            placeholder="请选择终端"
            clearable
          >
            <el-option
              v-for="item in terminal"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="消息内容:"
          prop="title"
        >
          <el-input
            v-model="dialogForm.title"
            placeholder="请输入消息内容"
            clearable
            style="width: 194px"
          />
        </el-form-item>
        <el-form-item
          label="消息详情:"
          prop="content"
        >
          <el-input
            v-model="dialogForm.content"
            placeholder="请输入消息详情"
            clearable
            type="textarea"
            :row="4"
            style="width: 194px"
          />
        </el-form-item>
        <el-form-item
          label="链接到:"
          prop="linked_to.id"
        >
          <el-input
            disabled
            v-model="dialogForm.linked_to.title"
            style="width: 194px"
          />
        </el-form-item>
        <el-form-item
          label="推送图片:"
          prop="cover"
        >
          <upload-single v-model="dialogForm.cover"></upload-single>
        </el-form-item>
        <el-form-item
          label="推送时间:"
          prop="push_time"
        >
          <el-date-picker
            style="width: 194px;margin-right: 10px"
            v-model="dialogForm.push_time"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
            placeholder="选择日期时间"
            :picker-options="pickerOptions"
            @focus="pickerFocus"
            v-show="switchVal"
          >
          </el-date-picker>
          <el-radio v-model="switchVal" :label="true">自定义时间</el-radio>
          <el-radio v-model="switchVal" :label="false">立即推送</el-radio>
        </el-form-item>
        <el-form-item
          label="是否推送给个人:"
          prop="push_to.type"
        >
          <el-radio-group v-model="dialogForm.push_to.type">
            <el-radio label="all">否</el-radio>
            <el-radio label="single">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          v-if="dialogForm.push_to.type === 'single'"
          label="客户端ID:"
          prop="push_to.cid"
        >
          <el-input
            v-model="dialogForm.push_to.cid"
            placeholder="请输入客户端ID"
            clearable
            style="width: 194px"
          />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="pushDialog.show = false">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="enterPushDialog"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
    <!-- 查看历史版本 -->
    <el-dialog
      width="700px"
      title="操作记录"
      :visible.sync="history.show"
      v-if="history.show"
    >
      <version-history :id="history.id" type="news"></version-history>
    </el-dialog>
  </div>
</template>

<script>
import { getChannels } from '@/api/manage'
import { addPushDetail} from '@/api/operamanage'
import { getNews, deleteNews, setTop, changeNewsStatus, changeNewsSort ,getNewDetail } from '@/api/content'
import NewDetail from './reviewNews/detail'
import VersionHistory from '@/views/content/mediaAssets/components/versionHistory'
import { dateFormat } from "@/utils/costum";
import uploadSingle from '@/components/Upload/uploadSingle.vue'
import Sortable from 'sortablejs'

export default {
  name: 'SeeSection',
  components: {
    NewDetail,
    VersionHistory,
    uploadSingle
  },
  data() {
    const selectableRange = () => {
      let data = new Date(new Date().getTime() + 1000);
      let hour = data.getHours();
      let minute = data.getMinutes();
      let second = data.getSeconds();
      return `${hour}:${minute}:${second} - 23:59:59`
    }
    return {
      channelsList: [], // 栏目
      typeOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '新闻',
          value: 'news'
        },
        {
          label: '图集',
          value: 'album'
        },
        {
          label: '视频',
          value: 'video'
        },
        {
          label: '外链',
          value: 'outer_link'
        },
        {
          label: '直播间',
          value: 'broadcast'
        },
        {
          label: '专题',
          value: 'topic'
        },
        {
          label: '服务',
          value: 'service'
        },
        {
          label: '电视直播',
          value: 'tv_live'
        },
        {
          label: '电视点播',
          value: 'tv_replay'
        },
        {
          label: '广播直播',
          value: 'radio_live'
        },
        {
          label: '广播点播',
          value: 'radio_replay'
        },
      ], // 新闻类型
      statusOptions: [
        {
          label: '已上线',
          value: 1
        },
        {
          label: '待审核',
          value: 0
        },
        {
          label: '已下线',
          value: 2
        },
        {
          label: '待定时发布',
          value: 5
        }
      ], // 状态集合
      props: Object.freeze({
        label: 'name'
      }),
      queryParams: {
        status: '',
        keyword: '',
        type: '',
        startdate: '',
        enddate: '',
        isAllChannel: false,
        pageSize: 10,
        page: 1
      },
      switchVal: false,
      pickerOptions: {
        selectableRange: selectableRange(),
        disabledDate(time) {
          return time.getTime() < (new Date().getTime() - 24 * 60 * 60 * 1000);
        },
      },
      useravatar: require('@/assets/c_images/useravatar.jpg'), // 默认头像
      dateValue: '',
      tableData: [],
      currentKey: '', // 树节点默认选中项
      defaultExpandedKeys: [], // 默认展开的节点
      total: 0,
      loading: false,
      detailDialog: {
        show: false,
        id: '',
        disabled: false
      },
      sortDialog: {
        show: false,
        id: '',
        form: {
          old: '',
          now: ''
        },
        rules: {
          now: [
            { required: true, message: '请输入目标排序', trigger: 'blur' }
          ]
        }
      },
      pushDialog: {
        show: false,
        title: '新增推送'
      },
      terminal: [
        {
          label: '全部',
          value: 3
        },
        {
          label: 'ios',
          value: 2
        },
        {
          label: '安卓',
          value: 1
        }
      ],
      dialogForm: {
        title: '',
        content: '',
        cover: '',
        linked_to: {
          route_type: 'news',
          type: '',
          id: '',
          title: ''
        },
        push_to: {
          type: 'all',
          terminal: '',
          cid: ''
        },
        push_time: ''
      },
      dialogRules: {
        title: [
          { required: true, message: '请输入消息内容', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入消息详情', trigger: 'blur' }
        ],
        push_time: [
          { required: true, message: '请选择推送时间', trigger: 'change' }
        ],
        'push_to.cid': [
          { required: true, message: '请输入客户端ID', trigger: 'blur' }
        ],
        'linked_to.id': [
          { required: true, message: '请选择链接到的内容', trigger: 'change' }
        ],
        'push_to.terminal': [
          { required: true, message: '请选择推送终端', trigger: 'change' }
        ]
      },
      product_id: '',
      history: {
        show: false,
        id: ''
      }
    }
  },
  async created() {
    await this.getChannels()
    this.$nextTick(() => {
      const id = this.$route.query.id || this.channelsList[0]?.id
      this.defaultExpandedKeys = [id]
      this.$refs.tree.setCurrentKey(id)
      this.product_id = this.$refs.tree.getCurrentNode()?.product_id || '';
      this.getList()
    })
  },
  methods: {
    /* 新增新闻 */
    handleAdd () {
      const { id } = this.$route.query;
      this.$router.push({ name: 'Add-media', query: { redirect: 'SeeSection', channelId: id } })
    },
    /* 推送时间问题 */
    switchChange () {
      this.$nextTick(() => {
        this.$refs.dialogForm?.clearValidate('push_time')
      })
    },
    /* 更新间距 */
    pickerFocus () {
      this.pickerOptions.selectableRange = this.updateSelectableRange();
    },
    /* 过滤禁用的产品 */
    filterNode (data) {
      let arr = [];
      data.map(n => {
        const { children = [] } = n;
        if(n.status === 1) {
          arr.push({
            ...n,
            children: this.filterNode(children)
          })
        }
      })
      return arr
    },
    /*
      * 获取栏目列表
      * */
    getChannels() {
      return getChannels().then(res => {
        this.channelsList = res;
        this.changeChannelName(this.channelsList)
      })
    },
    /*
      * 搜索时间变化
      * */
    handleDateChange(val) {
      const arr = val || ['', '']
      this.queryParams.startdate = arr[0]
      this.queryParams.enddate = arr[1]
    },
    /*
      * 重置搜索
      * */
    handleReset() {
      this.dateValue = ''
      Object.assign(this.queryParams, {
        startdate: '',
        enddate: '',
        page: 1
      })
      this.resetForm('queryForm')
    },
    /*
        * 搜索
        * */
    handleQuery() {
      this.queryParams.page = 1;
      this.getList()
    },
    /* 新增推送 */
    handlePush (row) {
      const { type, id, title, link, cover } = row;
      this.resetForm('dialogForm');
      this.switchVal = false;
      Object.assign(this.dialogForm, {
        cover,
        title,
        content: '',
        linked_to: {
          route_type: 'news',
          type,
          id,
          title,
          ...(link? { link } : {})
        }
      })
      getNewDetail(row.id).then(res => {
        console.log(res)
        this.dialogForm.content = res.extra.intro
        this.pushDialog.show = true;

      })
      // console.log(this.dialogForm)
    },
    /* 确认推送 */
    enterPushDialog () {
      if(!this.switchVal) this.dialogForm.push_time = dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss');
      this.$refs.dialogForm?.validate(val => {
        if(val) {
          const { product_id, dialogForm } = this;
          const cid = dialogForm.push_to.cid
          const params = {
            product_id,
            extra: {
              ...dialogForm,
              push_to: {
                ...dialogForm.push_to,
                cid: cid? [cid] : []
              }
            }
          }
          addPushDetail(params).then(res => {
            this.$message.success(res.message);
            this.pushDialog.show = false;
          })
        }
      })
    },
    /* 只能输入数字 */
    numberChange (val) {
      val = Number.parseInt(val)
      this.sortDialog.form.now = Number.isNaN(val)? '' : val;
    },
    /* 修改排序 */
    handleSort (row) {
      const { id, sort } = row;
      Object.assign(this.sortDialog, {
        show: true,
        id,
        form: {
          old: sort,
          now: ''
        }
      })
    },
    /* 确认修改排序 */
    enterSortDialog () {
      this.$refs.sortForm?.validate(val => {
        if(val) {
          const { id, form } = this.sortDialog;
          changeNewsSort({
            [id]: form.now
          }).then(() => {
            this.$message.success('修改成功');
            this.sortDialog.show = false;
            this.getList();
          })
        }
      })
    },
    /*
      * 置顶和取消置顶
      * */
    handlePlaced(row) {
      const { top, id } = row
      setTop({
        ids: id,
        top: top === 1 ? 0 : 1
      }).then(() => {
        this.$message.success(top === 1 ? '取消置顶' : '置顶')
        this.getList()
      })
    },
    /* 预览 */
    handlePreview (row) {
      const { id } = row;
      this.$router.push({ name: 'Preview', query: { id, type: 'news' }})
    },
    /* 查看历史记录 */
    handleHistory (row) {
      const { id } = row;
      this.history = {
        show: true,
        id
      }
    },
    /* 查看新闻 */
    handleWatch (row) {
      console.log(row)
      const { id, type ,script_id } = row;
      if(type === 'broadcast') {
        this.$router.push({ name: 'StudioList', query: { title:script_id } })
      }else {
        this.detailDialog = {
          id,
          show: true,
          disabled: true
        }
      }
    },
    /*
      * 编辑新闻
      * */
    handleEdit(row) {
      const { id } = row
      this.detailDialog = {
        id,
        show: true,
        disabled: false
      }
    },
    /* 审核状态修改 */
    statusChange (row) {
      const { id, status } = row;
      changeNewsStatus({
        ids: id,
        status
      }).then(() => {
        this.$message.success('修改状态成功')
        this.getList();
      })
    },
    /*
      * 删除新闻
      * */
    handleListDelete(row) {
      const { id } = row
      this.$confirm(`此操作将永久删除这条新闻, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteNews(id).then(() => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.getList()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    /* 节点数选中时 */
    treeChange(val) {
      this.product_id = val.product_id;
      this.handleReset()
      this.getList()
    },
    /* 获取列表数据 */
    getList() {
      const data = this.$refs.tree.getCurrentNode();
      const { isAllChannel } = this.queryParams;
      this.$router.push({ path: this.$route.path, query: { id: data.id }})
      this.loading = true
      const params = { ...this.queryParams, channel_id: isAllChannel? '' : data.id };
      delete params.isAllChannel;
      getNews(this.removePropertyOfNullFor0(params)).then(res => {
        this.total = res.total
        this.tableData = (res.data || []).map(item => {
          const type = this.typeOptions.find(n => item.type === n.value)
          const cover = item.cover[0]
          /* {
                title: '', // 新闻标题
                type: '', // 新闻类型
                id: '', // 新闻id
                cover: '', // 图片(Array)
                author_name: '', // 作者
                status: '', // 状态
                created_at: '', // 创建时间
              }*/
          return {
            ...item,
            typeLabel: type && type.label || '',
            cover: cover && cover.path || '' // 图片
          }
        })
        !this.isMobile && this.initSort();
      }).finally(() => {
        this.loading = false
      })
    },
    /* 初始化 */
    initSort () {
      const sortTable = this.$refs.multipleTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0];
      Sortable.create(sortTable, {
        ghostClass: 'sortable-ghost',
        onEnd: evt => {
          const { newIndex, oldIndex } = evt;
          const { id } = this.tableData[oldIndex];
          const { sort } = this.tableData[newIndex];
          this.tableData = [];
          changeNewsSort({
            [id]: sort
          }).then(() => {
            this.$message.success('修改成功');
            this.getList();
          })
        }
      })
    },
    /* 刷新视图 */
    refresh () {
      this.getList();
      this.detailDialog.id = '';
    },
  }
}
</script>
