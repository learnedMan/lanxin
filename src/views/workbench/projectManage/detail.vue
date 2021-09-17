<style type="text/scss" lang="scss">
.xl-project-detail {
  padding: 30px;
  &--title {
    margin: 0;
    padding-right: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-tree-node__content {
    padding-right: 10px;
    position: relative;
    height: 40px;
    .el-tree-node__expand-icon {
      display: none;
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
  .custom-tree-node {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    &--name {
      max-width: 50%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
<template>
  <div class="xl-project-detail">
    <el-row>
      <el-col :span="6" style="border-right: 1px solid #f3f3f3;" v-if="hasChildTopic">
        <h3 class="xl-project-detail--title">
          <span>子专题</span>
          <span>
            <el-button
              style="margin-right: 6px"
              type="text"
              icon="el-icon-folder-add"
              @click="handleTopicAdd">
              </el-button>
            <!--<el-switch v-model="switchAction"></el-switch>-->
          </span>
        </h3>
        <el-tree
          ref="tree"
          :data="channelsList"
          :props="props"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          @node-click="treeChange"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span class="custom-tree-node--name">{{ data.name }}</span>
            <span @click.stop="">
              <!-- 上移 -->
              <el-button
                type="text"
                icon="el-icon-top"
                v-if="data.id !== (channelsList[0] && channelsList[0].id)"
                @click.stop="handleTopicSort('up', data)">
              </el-button>
              <!-- 下移 -->
              <el-button
                type="text"
                icon="el-icon-bottom"
                v-if="data.id !== (channelsList[channelsList.length - 1] && channelsList[channelsList.length - 1].id)"
                @click.stop="handleTopicSort('down', data)">
              </el-button>
              <!-- 编辑 -->
              <el-button
                type="text"
                icon="el-icon-edit"
                @click.stop="handleTopicEdit(data)">
              </el-button>
              <!-- 删除 -->
              <el-button
                type="text"
                icon="el-icon-delete"
                @click.stop="handleTopicRemove(node, data)">
              </el-button>
              <!-- 状态 -->
              <el-switch
                style="margin-left: 10px"
                :value="data.status"
                size="small"
                :active-value="1"
                :inactive-value="0"
                @input="changeStatus(data)"
              ></el-switch>
            </span>
          </span>
        </el-tree>
      </el-col>
      <el-col :span="hasChildTopic? 18 : 24" style="padding-left: 20px;">
        <div class="search">
          <el-form
            ref="queryForm"
            :model="queryParams"
            :inline="true"
          >
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
            <el-form-item label="创建日期:" prop="dateValue">
              <el-date-picker
                v-model="queryParams.dateValue"
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
              <el-button
                type="success"
                size="mini"
                @click="handleReturn"
              >
                返回上一级
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
            label="编辑"
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
      </el-col>
    </el-row>
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
    <!-- 编辑或查看新闻 -->
    <el-dialog
      width="1200px"
      title="查看"
      top="20px"
      :visible.sync="detailDialog.show"
      v-if="detailDialog.show"
    >
      <new-detail :id="detailDialog.id" :visible.sync="detailDialog.show" :disabled="detailDialog.disabled" @refresh="refresh" />
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
    <!-- 新增或修改子专题 -->
    <el-dialog
      width="500px"
      :title="topicDialog.title"
      :visible.sync="topicDialog.show"
    >
      <el-form
        ref="topicForm"
        :model="topicDialog.form"
        :rules="topicDialog.rules"
        label-width="120px"
        size="small"
      >
        <el-form-item
          label="标题:"
          prop="name"
        >
          <el-input
            v-model="topicDialog.form.name"
            placeholder="请输入专题名"
            clearable
            size="small"
            style="width: 200px"
          />
        </el-form-item>
        <el-form-item
          label="(模板化)栏目:"
          prop="extra.template_style"
        >
          <el-select clearable @change="catalogchange" v-model="topicDialog.form.extra.template_style" placeholder="请选择">
            <el-option v-for="item in catalogOptions" :key="item.id" :label="item.catalogName" :value="`${item.catalogCode}`">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="(模板化)样式:"
          prop="extra.template_json_id"
        >
          <el-select clearable v-model="topicDialog.form.extra.template_json_id" placeholder="请选择">
            <el-option v-for="item in styleOptions" :key="item.id" :label="item.styleName" :value="`${item.id}`">
            </el-option>
          </el-select>
          <el-button v-if="topicDialog.form.extra.template_json_id" @click="yulanfn" style="margin-left:10px;">预览</el-button>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="topicDialog.show = false">取 消</el-button>
        <el-button type="primary" @click="enterTopicChange">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {
    getTopicDetail,
    getChildTopic,
    addTopic,
    changeTopic,
    changeTopicStatus,
    deleteTopic,
    getNews,
    changeNewsSort,
    setTop,
    changeNewsStatus,
    deleteNews,
    getNewDetail,
  } from '@/api/content'
  import { addPushDetail } from '@/api/operamanage'
  import { setSortchannels, cateloglist, stylelist, getproduct } from '@/api/manage'
  import Sortable from 'sortablejs'
  import { dateFormat } from "@/utils/costum";
  import NewDetail from '@/views/workbench/reviewNews/detail.vue'
  import VersionHistory from '@/views/content/mediaAssets/components/versionHistory'

    export default {
      name: 'ProjectDetail',
      props: ['id'],
      components: {
        NewDetail,
        VersionHistory
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
          switchAction: false, // 修改开关
          channelsList: [], // 栏目
          props: Object.freeze({
            label: 'name',
            children: 'child'
          }),
          currentKey: '', // 简单聚合或多模块聚合的栏目id
          hasChildTopic: false,
          useravatar: require('@/assets/c_images/useravatar.jpg'), // 默认头像
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
            }
          ], // 状态集合
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
          queryParams: {
            startdate: '',
            enddate: '',
            status: '',
            type: '',
            keyword: '',
            dateValue: '',
            pageSize: 10,
            page: 1
          },
          total: 0,
          loading: false,
          tableData: [],
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
          }, // 排序弹框
          detailDialog: {
            show: false,
            id: '',
            disabled: false
          }, // 详情弹框
          pushDialog: {
            show: false,
            title: '新增推送'
          }, // 推送弹框
          pickerOptions: {
            selectableRange: selectableRange(),
            disabledDate(time) {
              return time.getTime() < (new Date().getTime() - 24 * 60 * 60 * 1000);
            },
          },
          switchVal: false,
          product_id: '', // 产品id
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
          ], // 终端类型
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
          }, // 推送信息
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
          }, // 推送校验
          history: {
            show: false,
            id: ''
          }, // 历史记录弹框
          catalogOptions: [], // 模板化栏目数据
          styleOptions: [], // 模板化样式
          productLists: [],
          topicDialog: {
            show: false,
            title: '新增',
            form: {
              name: '',
              extra: {
                template_style: '',
                template_json_id: '',
              }
            },
            rules: {
              name: [
                { required: true, message: '请输入标题', trigger: 'blur' }
              ]
            }
          }
        }
      },
      methods: {
        /* 获取产品列表 */
        getProductList () {
          return getproduct({}).then(res => {
            const data = res.data || []
            this.productLists = data.map(n => ({
              label: n.name,
              value: n.id,
              source_id: n.source_id
            }));
          });
        },
        /* 获取模板化栏目数据 */
        getCatelog () {
          cateloglist().then(res => {
            this.catalogOptions = res.data.list;
          })
        },
        /* 联动模板化样式 */
        catalogchange (val, isClear = true) {
          isClear && (this.topicDialog.form.extra.template_json_id = '');
          this.styleOptions = [];
          if(!val) return;
          const sourceId = this.productLists.find(n => n.value === this.product_id)?.source_id;
          let data = {
            "catalogCode": val,
            "sourceId": sourceId
          }
          stylelist(data).then(res => {
            this.styleOptions = res.data || [];
          })
        },
        yulanfn(){
          window.open(this.viewurl + this.dialog.form.extra.template_json_id)
        },
        /* 获取详情 */
        getTopicDetail () {
          return getTopicDetail(this.id).then(res => {
            const { extra: { topic_type }, product_id } = res;
            this.hasChildTopic = topic_type == 2;// 多模块聚合才有子专题
            this.product_id = product_id;
          })
        },
        /* 获取子专题 */
        getChildTopic () {
          return getChildTopic(this.id).then(res => {
            this.channelsList = res;
            const { id } = this.$route.query;
            this.currentKey = id || this.currentKey || res?.[0]?.id || '';
            this.$nextTick(() => {
              this.$refs.tree?.setCurrentKey(this.currentKey);
              this.getList();
            })
          })
        },
        /* 添加子专题 */
        handleTopicAdd () {
          this.resetForm('topicForm');
          Object.assign(this.topicDialog, {
            show: true,
            title: '新增专题',
            form: {
              name: '',
              extra: {
                template_style: '',
                template_json_id: '',
              }
            }
          })
        },
        /* 修改子专题 */
        handleTopicEdit (data) {
          this.resetForm('topicForm');
          const { name, id, extra: { template_style = '', template_json_id = '' } } = data;
          Object.assign(this.topicDialog, {
            show: true,
            title: '修改专题',
            id,
            form: {
              name,
              extra: {
                template_style,
                template_json_id,
              }
            }
          })
          this.catalogchange(template_style, false);
        },
        /* 确认专题新增或修改 */
        enterTopicChange () {
          this.$refs.topicForm?.validate(val => {
            if(val) {
              const { id } = this.topicDialog;
              const promise = id? changeTopic(id, {
                ...this.topicDialog.form,
                father: this.id
              }) : addTopic({
                father: this.id,
                status: 1,
                type: 'topic',
                ...this.topicDialog.form
              })
              promise.then(() => {
                this.$message.success(id? '修改成功' : '添加成功!');
                this.topicDialog.show = false;
                this.getChildTopic();
              })
            }
          })
        },
        /* 专题排序 */
        handleTopicSort (direction, data) {
          const { id } = data;
          const index = this.channelsList.findIndex(n => n.id === id);
          let params = {};
          if(direction === 'up') {
            params[this.channelsList[index].id] = this.channelsList[index - 1].sort;
            params[this.channelsList[index - 1].id] = this.channelsList[index].sort;
          }else {
            params[this.channelsList[index].id] = this.channelsList[index + 1].sort;
            params[this.channelsList[index + 1].id] = this.channelsList[index].sort;
          }
          setSortchannels(params).then(() => {
            this.$message.success('修改成功');
            this.getChildTopic();
          })
        },
        /* 修改专题状态 */
        changeStatus (data) {
          const { status, id } = data;
          changeTopicStatus({
            status: status === 1? 0 : 1,
            ids: `${id}`
          }).then(() => {
            this.$message.success('修改状态成功')
            this.getChildTopic();
          })
        },
        /* 删除子专题 */
        handleTopicRemove (node, data) {
          const { name, id } = data;
          this.$confirm(`此操作将永久删除该${name}目录, 是否继续?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            deleteTopic(id).then(() => {
              this.$message({
                message: '删除成功',
                type: 'success'
              });
              if(this.currentKey === id) this.currentKey = '';
              this.getChildTopic();
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
          this.currentKey = val.id;
          this.handleReset()
          this.getList()
          console.log(val)
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
        /* 新增新闻 */
        handleAdd () {
          this.$router.push({
            name: 'Add-media',
            query: {
              redirect: 'ProjectManage',
              channelId: this.currentKey,
              father: this.id
            }
          })
        },
        /* 返回上一级 */
        handleReturn () {
          this.$emit('handleReturn');
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
        /* 预览 */
        handlePreview (row) {
          const { id } = row;
          this.$router.push({ name: 'Preview', query: { id, type: 'news' }})
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
            this.dialogForm.content = res.extra.intro
            this.pushDialog.show = true;
          })
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
        /* 查看历史记录 */
        handleHistory (row) {
          const { id } = row;
          this.history = {
            show: true,
            id
          }
        },
        /* 获取列表数据 */
        getList () {
          if(this.hasChildTopic && this.channelsList.length === 0) return;
          this.loading = true;
          const params = { ...this.queryParams, channel_id: this.currentKey };
          getNews(this.removePropertyOfNullFor0(params)).then(res => {
            this.total = res.total
            this.tableData = (res.data || []).map(item => {
              const type = this.typeOptions.find(n => item.type === n.value)
              const cover = item.cover[0]
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
      },
      async created() {
        await this.getTopicDetail();
        // 多模块聚合
        if(this.hasChildTopic) {
          this.getChildTopic();
        }else {
          // 简单聚合
          this.currentKey = this.id;
          this.getList();
        }
        this.getProductList();
        this.getCatelog();
      }
    }
</script>
