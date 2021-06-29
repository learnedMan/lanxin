<style type="text/scss" lang="scss" scoped>
  .xl-studio-list {

  }
</style>
<template>
  <div class="xl-studio-list">
    <div class="search">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
      >
        <el-form-item
          label="直播间名称:"
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
          label="类型:"
          prop="broadcast_type"
        >
          <el-select
            v-model="queryParams.broadcast_type"
            size="small"
            placeholder="请选择类型"
            clearable
          >
            <el-option
              v-for="item in broadcast_typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="直播状态:"
          prop="live"
        >
          <el-select
            v-model="queryParams.live"
            size="small"
            placeholder="请选择类型"
            clearable
          >
            <el-option
              v-for="item in liveOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="审核状态:"
          prop="status"
        >
          <el-select
            v-model="queryParams.status"
            size="small"
            placeholder="请选择状态"
            clearable
          >
            <el-option
              v-for="item in publishOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间:">
          <el-date-picker
            v-model="createDate"
            type="daterange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            @change="handleDateChange($event, 'createDate')"
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
            新增
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      ref="multipleTable"
      v-loading="loading"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column
        label="ID"
        align="center"
        prop="id"
      />
      <el-table-column
        label="直播间名称"
        align="center"
        prop="title"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="直播间类型"
        align="center"
        prop="broadcast_typeLabel"
      />
      <el-table-column
        label="直播状态"
        align="center"
        prop="liveLabel"
      />
      <el-table-column
        label="审核状态"
        align="center"
      >
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.status"
            @change="publishChange(scope.row)"
            size="small"
          >
            <el-option
              v-for="item in publishOptions.filter(n => n.value !== '')"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        label="开播时间"
        align="center"
        prop="start_time"
      />
      <el-table-column
        label="结束时间"
        align="center"
        prop="end_time"
      />
      <el-table-column
        label="运营"
        align="center"
        width="100"
      >
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="watchConsole(scope.row)"
          >
            控制台
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="创建时间"
        align="center"
        prop="created_at"
      />
      <el-table-column
        label="操作"
        align="center"
        width="220"
      >
        <template slot-scope="scope">
          <div class="verify-table-action">
            <!-- 编辑 -->
            <Iconbutton
              icontype="xg"
              label="修改"
              @fatherMethod="handleEdit(scope.row)"
            ></Iconbutton>
            <!-- 删除 -->
            <Iconbutton
              icontype="sc"
              label="删除"
              @fatherMethod="handleDelete(scope.row)"
            ></Iconbutton>
            <!-- 发布 -->
            <Iconbutton
              icontype="fb"
              label="栏目"
              @fatherMethod="handlePublish(scope.row)"
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
    <!-- 发布栏目 -->
    <el-dialog
      width="600px"
      :title="publishDialog.title"
      :visible.sync="publishDialog.show"
    >
      <el-form
        ref="publishForm"
        :model="publishDialog.form"
        :rules="publishDialog.rules"
      >
        <el-form-item
          label-width="120px"
          label="栏目"
          prop="channel_id"
        >
          <el-cascader
            filterable
            v-model="publishDialog.form.channel_id"
            style="width: 350px"
            :options="channelsList"
            :props="cascaderOption"
            clearable
          />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="publishDialog.show = false">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="enterPublishDialog"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
    <!-- 修改编辑 -->
    <el-dialog
      width="800px"
      top="20px"
      :title="dialog.title"
      :visible.sync="dialog.show"
      v-if="dialog.show"
    >
      <el-form
        ref="dialogForm"
        :model="dialog.form"
        :rules="dialog.rules"
        label-width="120px"
        size="small"
      >
        <el-form-item
          label-width="120px"
          label="发布栏目:"
          prop="channels"
        >
          <el-cascader
            v-model="dialog.form.channels"
            style="width: 200px"
            :options="channelsList"
            :props="cascaderOption"
            clearable
          />
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="直播间名称:"
          prop="extra.title"
        >
          <el-input
            v-model="dialog.form.extra.title"
            placeholder="请输入标签名称"
            clearable
            size="small"
            style="width: 200px"
          />
        </el-form-item>
        <el-form-item
          label="直播封面:"
          prop="extra.template_style"
        >
          <el-radio-group
            size="small"
            v-model="dialog.form.extra.template_style"
          >
            <el-radio
              v-for="list of templateStyleLists"
              :key="list.value"
              :label="list.value"
              style="line-height: 32px"
            >
              <el-popover
                placement="top"
                trigger="hover"
              >
                <span slot="reference">{{ list.label }}</span>
                <img :src="require(`@/assets/media/${list.img}`)" alt="" width="300px" />
              </el-popover>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          prop="extra.cover"
        >
          <cropper
            :count="imgCount"
            v-model="dialog.form.extra.cover"
          />
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="直播类型:"
          prop="extra.broadcast_type"
        >
          <el-radio-group v-model="dialog.form.extra.broadcast_type" @change="statementChange">
            <el-radio v-for="type of broadcast_typeOptions.filter(n => n.value !== '')" :key="type.value" :label="type.value">{{ type.label }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="顶部图片:"
          prop="extra.banner"
          v-if="dialog.form.extra.broadcast_type === '3'"
        >
          <upload-single v-model="dialog.form.extra.banner"></upload-single>
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="图文直播:"
          prop="extra.statement"
        >
          <el-radio-group v-model="dialog.form.extra.statement" :disabled="dialog.form.extra.broadcast_type === '3'">
            <el-radio v-for="type of statementOptions" :key="type.value" :label="type.value" style="margin-top: 10px">{{ type.label }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="直播时间:"
          prop="extra.start_time"
        >
          <el-date-picker
            :disabled="dialog.id !== ''"
            v-model="liveTime"
            type="datetimerange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="handleDateChange($event, 'liveTime')"
          />
        </el-form-item>
        <el-form-item prop="extra.end_time" style="margin-bottom: 0;">
        </el-form-item>
        <el-form-item prop="extra.allow_comment" label="评论控制">
          <el-radio-group
            size="small"
            v-model="dialog.form.extra.allow_comment"
          >
            <el-radio key="0" label="0">先审后发</el-radio>
            <el-radio key="1" label="1">先发后审</el-radio>
            <el-radio key="2" label="2">禁止评论</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="直播间简介:"
          prop="extra.intro"
        >
          <el-input
            v-model="dialog.form.extra.intro"
            placeholder="请输入简介"
            clearable
            type="textarea"
            style="width: 300px"
            rows="5"
          />
        </el-form-item>
        <el-form-item label="机器人数据" prop="extra.robot_settings.enable">
          <el-switch v-model="dialog.form.extra.robot_settings.enable" :active-value="1"></el-switch>
        </el-form-item>
        <el-form-item label="基础观看人数:">
          <el-row>
            <el-col :span="24">
              <el-form-item prop="extra.view_base_num" style="margin-bottom: 0;">
                <el-input-number
                  v-model="dialog.form.extra.view_base_num"
                  :controls="false"
                  :precision="0"
                  placeholder="请输入"
                  clearable
                ></el-input-number> 人
              </el-form-item>
            </el-col>
          </el-row>
          <el-row style="margin-top: 10px" v-show="dialog.form.extra.robot_settings.enable">
            <el-col :span="24">
              每分钟额外显示
              <el-form-item prop="extra.robot_settings.view.min" style="display: inline-block;margin-bottom: 0;">
                <el-input-number
                  v-model="dialog.form.extra.robot_settings.view.min"
                  :controls="false"
                  :precision="0"
                  :max="dialog.form.extra.robot_settings.view.max || 0"
                  placeholder="请输入"
                  clearable
                ></el-input-number>
              </el-form-item>
              ~
              <el-form-item prop="extra.robot_settings.view.max" style="display: inline-block;margin-bottom: 0">
                <el-input-number
                  v-model="dialog.form.extra.robot_settings.view.max"
                  :controls="false"
                  :precision="0"
                  :min="dialog.form.extra.robot_settings.view.min || 0"
                  placeholder="请输入"
                  clearable
                ></el-input-number>
              </el-form-item>
              内的随机整数（最大值建议≤100）
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="基础点赞数量:">
          <el-row>
            <el-col :span="24">
              <el-form-item prop="extra.praise_base_num" style="margin-bottom: 0;">
                <el-input-number
                  v-model="dialog.form.extra.praise_base_num"
                  :controls="false"
                  :precision="0"
                  placeholder="请输入"
                  clearable
                ></el-input-number> 个
              </el-form-item>
            </el-col>
          </el-row>
          <el-row style="margin-top: 10px" v-show="dialog.form.extra.robot_settings.enable">
            <el-col :span="24">
              每分钟增加
              <el-form-item prop="extra.robot_settings.praise.min" style="display: inline-block;margin-bottom: 0;">
                <el-input-number
                  v-model="dialog.form.extra.robot_settings.praise.min"
                  :controls="false"
                  :max="dialog.form.extra.robot_settings.praise.max || Infinity"
                  placeholder="请输入"
                  clearable
                ></el-input-number>
              </el-form-item>
              ~
              <el-form-item prop="extra.robot_settings.praise.max" style="display: inline-block;margin-bottom: 0;">
                <el-input-number
                  v-model="dialog.form.extra.robot_settings.praise.max"
                  :controls="false"
                  :min="dialog.form.extra.robot_settings.praise.min || 0"
                  placeholder="请输入"
                  clearable
                ></el-input-number>
              </el-form-item>
              内的随机整数
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialog.show = false">取 消</el-button>
        <el-button type="primary" @click="enterChangeDialog">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { getStudioList, addStudio, getStudio, editStudio, deleteStudio } from '@/api/operamanage'
  import { getChannels } from '@/api/manage'
  import uploadSingle from '@/components/Upload/uploadSingle.vue'
  import Cropper from '@/components/Cropper'

  export default {
    name: 'studioList',
    components: {
      uploadSingle,
      Cropper
    },
    data() {
      const coverValidator = (rule, value, callback) => {
        const count = this.imgCount;
        if (!Array.isArray(value) || value.length === 0) {
          callback(new Error('请上传图片'))
        } else if (!value.slice(0, count).every(n => n.path)) {
          callback(new Error(`请上传${count}张图片`))
        } else {
          callback()
        }
      }
      return {
        loading: false,
        queryParams: {
          keyword: '',
          live: '',
          broadcast_type: '',
          status: '',
          startdate: '',
          enddate: '',
          page: 1,
          pageSize: 10
        },
        tableData: [],
        total: 0,
        cascaderOption: {
          checkStrictly: true, // 是否强制父子不关联
          emitPath: false, // 返回值是否为数组
          value: 'id', // 选项值
          label: 'name', // 显示值
          multiple: true // 多选
        }, // 级联选择器配置
        channelsList: [], // 栏目列表
        broadcast_typeOptions: [
          {
            label: '全部',
            value: ''
          },
          {
            label: '横版',
            value: '1'
          },
          {
            label: '竖版',
            value: '2'
          },
          {
            label: '纯图文',
            value: '3'
          }
        ], // 直播类型
        liveOptions: [
          {
            label: '全部',
            value: ''
          },
          {
            label: '未开始',
            value: 0
          },
          {
            label: '进行中',
            value: 1
          },
          {
            label: '已结束',
            value: 2
          }
        ], // 直播状态
        publishOptions: [
          {
            label: '全部',
            value: ''
          },
          {
            label: '待审核',
            value: 0
          },
          {
            label: '已发布',
            value: 1
          },
          {
            label: '已下线',
            value: 2
          }
        ], // 发布状态
        statementOptions: [
          {
            label: '关闭（关闭后客户端不展示图文直播间）',
            value: 'none'
          },
          {
            label: '关联直播间（该直播间中，多个机位共用同一图文直播）',
            value: 'broadcast'
          },
          {
            label: '关联机位（该直播间中，不同机位对应各自图文直播）',
            value: 'stream'
          }
        ], // 图文直播
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        liveTime: '', // 直播时间
        createDate: '', // 创建时间
        templateStyleLists: [
          {
            label: '纯文本',
            value: '240',
            count: 1,
            img: '1402-240.png'
          },
          {
            label: '三图下文本',
            value: '230',
            count: 3,
            img: '1402-230.png'
          },
          {
            label: '三图上文本',
            value: '231',
            count: 3,
            img: '1402-231.png'
          },
          {
            label: '左图+标题1',
            value: '220',
            count: 1,
            img: '1402-220.png'
          },
          {
            label: '左图+标题2',
            value: '222',
            count: 1,
            img: '1402-222.png'
          },
          {
            label: '右图+标题',
            value: '221',
            count: 1,
            img: '1402-221.png'
          },
          {
            label: '播放器2',
            value: '211',
            count: 1,
            img: '1402-211.png'
          },
          {
            label: '播放器3',
            value: '212',
            count: 1,
            img: '1402-212.png'
          },
          {
            label: '大图1',
            value: '200',
            count: 1,
            img: '1402-200.png'
          },
          {
            label: '大图2',
            value: '201',
            count: 1,
            img: '1402-201.png'
          },
          {
            label: '大图3',
            value: '202',
            count: 1,
            img: '1402-202.png'
          },
          {
            label: '大图4',
            value: '203',
            count: 1,
            img: '1402-203.png'
          },
          {
            label: '大图5',
            value: '204',
            count: 1,
            img: '1402-204.png'
          },
          {
            label: '大图6',
            value: '205',
            count: 1,
            img: '1402-205.png'
          },
          {
            label: '大图7',
            value: '206',
            count: 1,
            img: '1402-206.png'
          }
        ],
        dialog: {
          title: '新增',
          id: '',
          show: false,
          form: {
            channels: '', // 栏目
            extra: {
              type: 'broadcast',
              title: '', // 直播间名
              banner: '',
              template_style: '240',
              cover: [], // 直播间封面
              allow_comment: '0',
              broadcast_type: '1', // 直播类型
              statement: 'none', // 图文直播
              start_time: '', // 直播开始时间
              end_time: '', // 直播结束时间
              intro: '', // 直播间简介
              view_base_num: '', // 观看基础人数
              praise_base_num: '', // 点赞人数
              robot_settings: {
                enable: 0, // 机器人数据
                view: {
                  min: '',
                  max: ''
                },
                praise: {
                  min: '',
                  max: ''
                }
              }, // 设置机器人数量
            }
          },
          rules: {
            // channels: [
            //   { required: true, message: '请选择栏目', trigger: 'change' }
            // ],
            'extra.title': [
              { required: true, message: '请输入直播间名称', trigger: 'blur' }
            ],
            'extra.template_style': [
              { required: true, message: '请选择直播封面样式', trigger: 'change' }
            ],
            'extra.cover': [
              { validator: coverValidator, trigger: 'change' }
            ],
            'extra.broadcast_type': [
              { required: true, message: '请选择直播类型', trigger: 'change' }
            ],
            'extra.start_time': [
              { required: true, message: '请选择直播时间', trigger: 'change' }
            ],
            'extra.intro': [
              { required: true, message: '请输入直播间简介', trigger: 'blur' }
            ],
            'extra.banner': [
              { required: true, message: '请上传顶部图片', trigger: 'change' }
            ],
            'extra.allow_comment': [
              { required: true, message: '请选择评论控制', trigger: 'change' }
            ],
          }
        },
        publishDialog: {
          show: false,
          title: '发布栏目',
          form: {
            channel_id: '',
            broadcast_ids: ''
          },
          rules: {
            channel_id: [{ required: true, message: '请选择栏目', trigger: 'change' }]
          }
        }
      }
    },
    computed: {
      imgCount ({ dialog, templateStyleLists }) {
        return templateStyleLists.find(n => n.value === dialog.form.extra.template_style)?.count ?? 1
      },
    },
    methods: {
      /* 重置 */
      handleReset () {
        this.createDate = '';
        Object.assign(this.queryParams, {
          startdate: '',
          enddate: '',
          page: 1
        })
        this.resetForm('queryForm')
      },
      /* 搜索 */
      handleQuery () {
        this.queryParams.page = 1;
        this.getList();
      },
      /* 新增 */
      handleAdd () {
        this.liveTime = ''
        Object.assign(this.dialog, {
          title: '新增',
          id: '',
          show: true,
          form: {
            channels: '', // 栏目
            extra: {
              type: 'broadcast',
              title: '', // 直播间名
              banner: '',
              allow_comment: '0',
              template_style: '240',
              cover: [], // 直播间封面
              broadcast_type: '1', // 直播类型
              statement: 'none', // 图文直播
              start_time: '', // 直播开始时间
              end_time: '', // 直播结束时间
              intro: '', // 直播间简介
              view_base_num: '', // 观看基础人数
              praise_base_num: '', // 点赞人数
              robot_settings: {
                enable: 0, // 机器人数据
                view: {
                  min: '',
                  max: ''
                },
                praise: {
                  min: '',
                  max: ''
                }
              }, // 设置机器人数量
            }
          }
        })
      },
      /* 编辑 */
      handleEdit (row) {
        const { id } = row;
        this.liveTime = '';
        getStudio(id).then(res => {
          const data = res.data;
          this.liveTime = [data.extra.start_time, data.extra.end_time];
          this.$nextTick(() => {
            Object.assign(this.dialog, {
              title: '编辑',
              show: true,
              id,
              form: {
                channels: data.channel.map(n => n.id),
                extra: {
                  ...data.extra,
                  template_style: data.extra.template_style || '240',
                  broadcast_type: data.extra.broadcast_type
                }
              }
            });
          })
        })
      },
      /* 删除 */
      handleDelete (row) {
        const { id } = row;
        this.$confirm(`此操作将永久删除这条ID为${id}的直播间, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteStudio(id).then(() => {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.getList();
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      /* 修改发布状态 */
      publishChange (row) {
        const { id, status } = row;
        editStudio(id, {
          status
        }).then(() => {
          this.$message.success('修改成功');
          this.getList();
        })
      },
      /* 修改图文直播类型 */
      statementChange (val) {
        if(val === '3') {
          this.dialog.form.extra.statement = 'broadcast';
        }
      },
      /* 发布 */
      handlePublish (row) {
        const { id, channel } = row;
        Object.assign(this.publishDialog, {
          show: true,
          form: {
            channel_id: channel.map(n => n.id),
            broadcast_ids: id
          }
        })
        this.$refs.publishForm?.clearValidate();
      },
      /* 查看控制台 */
      watchConsole (row) {
        const id = row.id;
        this.$emit('watchConsole', id);
      },
      /* 直播时间变化 */
      handleDateChange (val, key) {
        const arr = val || ['', ''];
        if (key === 'liveTime') {
          this.dialog.form.extra.start_time = arr[0];
          this.dialog.form.extra.end_time = arr[1];
        }else if(key === 'createDate') {
          this.queryParams.startdate = arr[0];
          this.queryParams.enddate = arr[1];
        }
      },
      /* 确认新增或编辑 */
      enterChangeDialog () {
        const id = this.dialog.id;
        const params = {
          channels: this.dialog.form.channels.join(),
          extra: {
            ...this.dialog.form.extra,
            cover: this.dialog.form.extra.cover.slice(0, this.imgCount)
          }
        };
        let promise;
        this.$refs.dialogForm?.validate(val => {
          if(val) {
            promise = id? editStudio(id, params) : addStudio(params);
            promise.then(() => {
              this.$message.success(`${this.dialog.title}成功!`);
              this.dialog.show = false;
              this.getList();
            })
          }
        })
      },
      /* 确认发布 */
      enterPublishDialog () {
        this.$refs.publishForm?.validate(val => {
          if(val) {
            editStudio(this.publishDialog.form.broadcast_ids,{
              channels: this.publishDialog.form.channel_id.join()
            }).then(() => {
              this.$message.success('发布成功');
              this.publishDialog.show = false
              this.getList();
            })
          }
        })
      },
      /* 获取列表数据 */
      getList () {
        this.loading = true;
        const params = { ...this.queryParams };
        getStudioList(this.removePropertyOfNullFor0(params)).then(res => {
          this.tableData = (res.data || []).map(n => ({
            ...n,
            broadcast_typeLabel: this.broadcast_typeOptions.find(item => item.value === n.broadcast_type)?.label ?? '',
            liveLabel: this.liveOptions.find(item => item.value === n.live)?.label ?? ''
          }));
          this.total = res.total;
        }).finally(() => {
          this.loading = false;
        })
      },
      /*
      * 获取栏目列表
      * */
      getChannels() {
        getChannels({ status: 1 }).then(res => {
          this.channelsList = res.map(n => ({
            ...n,
            disabled: true
          }));
        })
      }
    },
    created() {
      this.getChannels();
      this.getList();
    },
    activated() {
      this.getList();
    }
  }
</script>
