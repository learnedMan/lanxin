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
          prop="portrait"
        >
          <el-select
            v-model="queryParams.portrait"
            size="small"
            placeholder="请选择类型"
            clearable
          >
            <el-option
              v-for="item in portraitOptions"
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
        prop="portraitLabel"
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
        width="200"
      >
        <template slot-scope="scope">
          <div class="verify-table-action">
            <!-- 编辑 -->
            <el-button
              type="text"
              icon="el-icon-edit"
              size="small"
              @click="handleEdit(scope.row)"
            >
              编辑
            </el-button>
            <!-- 删除 -->
            <el-button
              type="text"
              icon="el-icon-delete"
              size="small"
              @click="handleDelete(scope.row)"
            >
              删除
            </el-button>
            <!-- 发布 -->
            <el-button
              type="text"
              icon="el-icon-document-copy"
              size="small"
              @click="handlePublish(scope.row)"
            >
              发布
            </el-button>
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
    <!-- 修改编辑 -->
    <el-dialog
      width="800px"
      top="20px"
      :title="dialog.title"
      :visible.sync="dialog.show"
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
          label-width="120px"
          label="直播封面:"
          prop="extra.cover"
        >
          <upload-single v-model="dialog.form.extra.cover"></upload-single>
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="直播类型:"
          prop="extra.portrait"
        >
          <el-radio-group v-model="dialog.form.extra.portrait">
            <el-radio v-for="type of portraitOptions.filter(n => n.value !== '')" :key="type.value" :label="type.value">{{ type.label }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="纯图文直播间:"
          prop="extra.only_statement"
        >
          <el-radio-group v-model="dialog.form.extra.only_statement" @change="statementChange">
            <el-radio label="1" style="margin-top: 10px">是</el-radio>
            <el-radio label="0" style="margin-top: 10px">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="图文直播:"
          prop="extra.statement"
        >
          <el-radio-group v-model="dialog.form.extra.statement" :disabled="dialog.form.extra.only_statement === '1'">
            <el-radio v-for="type of statementOptions" :key="type.value" :label="type.value" style="margin-top: 10px">{{ type.label }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="直播时间:"
          prop="extra.start_time"
        >
          <el-date-picker
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
                  :max="dialog.form.extra.robot_settings.view.max || 100"
                  placeholder="请输入"
                  clearable
                ></el-input-number>
              </el-form-item>
              ~
              <el-form-item prop="extra.robot_settings.view.max" style="display: inline-block;margin-bottom: 0">
                <el-input-number
                  v-model="dialog.form.extra.robot_settings.view.max"
                  :controls="false"
                  :min="dialog.form.extra.robot_settings.view.min || 0"
                  :max="100"
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
  </div>
</template>

<script>
  import { getStudioList, addStudio, getStudio, editStudio, deleteStudio } from '@/api/operamanage'
  import { getChannels } from '@/api/manage'
  import uploadSingle from '@/components/Upload/uploadSingle.vue'

  export default {
    name: 'studioList',
    components: {
      uploadSingle
    },
    data() {
      return {
        loading: false,
        queryParams: {
          keyword: '',
          live: '',
          portrait: '',
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
        portraitOptions: [
          {
            label: '全部',
            value: ''
          },
          {
            label: '横版',
            value: 0
          },
          {
            label: '竖版',
            value: 1
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
        dialog: {
          title: '新增',
          id: '',
          show: false,
          form: {
            channels: '', // 栏目
            extra: {
              type: 'broadcast',
              title: '', // 直播间名
              cover: '', // 直播间封面
              portrait: '', // 直播类型
              only_statement: '0', // 是否为纯图文直播间
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
            channels: [
              { required: true, message: '请选择栏目', trigger: 'change' }
            ],
            'extra.title': [
              { required: true, message: '请输入直播间名称', trigger: 'blur' }
            ],
            'extra.cover': [
              { required: true, message: '请上传直播封面', trigger: 'change' }
            ],
            'extra.portrait': [
              { required: true, message: '请选择直播类型', trigger: 'change' }
            ],
            'extra.start_time': [
              { required: true, message: '请选择直播时间', trigger: 'change' }
            ],
            'extra.intro': [
              { required: true, message: '请输入直播间简介', trigger: 'blur' }
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
        this.getList();
      },
      /* 新增 */
      handleAdd () {
        Object.assign(this.dialog, {
          title: '新增',
          id: '',
          show: true
        })
        this.$refs.dialogForm?.resetFields();
      },
      /* 编辑 */
      handleEdit (row) {
        const { id } = row;
        this.liveTime = '';
        getStudio(id).then(res => {
          const data = res.data;
          this.liveTime = [data.extra.start_time, data.extra.end_time];
          this.$refs.dialogForm?.resetFields();
          this.$nextTick(() => {
            Object.assign(this.dialog, {
              title: '编辑',
              show: true,
              id,
              form: {
                channels: data.channel.map(n => n.id),
                extra: {
                  ...data.extra,
                  only_statement: data.extra.only_statement || '0',
                  portrait: Number(data.extra.portrait),
                  cover: data.extra.cover?.[0]?.path
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
        if(val === '1') {
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
            cover: [
              {
                path: this.dialog.form.extra.cover,
                intro: ''
              }
            ]
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
            portraitLabel: this.portraitOptions.find(item => item.value === n.portrait)?.label ?? '',
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
        getChannels().then(res => {
          this.channelsList = res;
        })
      }
    },
    created() {
      this.getChannels();
      this.getList();
    }
  }
</script>
