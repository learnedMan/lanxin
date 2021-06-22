<style type="text/scss" lang="scss" scoped>
  .xl-push {

  }
</style>
<template>
    <div class="xl-push">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
      >
        <el-form-item
          label="所属产品:"
        >
          <el-select
            v-model="queryParams.product_id"
            placeholder="请选择所属产品"
            @change="handleQuery"
          >
            <el-option
              v-for="item in productLists"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="媒资标题:"
          prop="title"
        >
          <el-input
            v-model="queryParams.title"
            placeholder="请输入关键字"
            clearable
            size="small"
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item
          label="状态:"
          prop="status"
        >
          <el-select
            v-model="queryParams.status"
            size="small"
            placeholder="请选择类型"
            clearable
          >
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
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
      <el-table
        ref="multipleTable"
        :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
        :data="tableData"
        border
        tooltip-effect="dark"
        style="width: 100%"
        v-loading="loading"
      >
        <el-table-column
          label="消息内容"
          align="center"
          prop="extra.title"
          showOverflowTooltip
        />
        <el-table-column
          label="媒资标题"
          align="center"
          prop="extra.linked_to.title"
          showOverflowTooltip
        />
        <el-table-column
          label="推送状态"
          align="center"
          prop="statusLabel"
        >
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="watchDetail(scope.row)"
            >
              {{ scope.row.statusLabel }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="创建时间"
          align="center"
          prop="created_at"
        />
        <el-table-column
          label="更新时间"
          align="center"
          prop="push_time"
        />
        <el-table-column
          label="推送个人"
          align="center"
          prop="isSingle"
        />
        <el-table-column
          label="启用状态"
          align="center"
          prop="openStatus"
        >
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.openStatus"
              @change="openStatusChange(scope.row)"
            >
              <el-option label="禁用" :value="0"/>
              <el-option label="启用" :value="1"/>
              <el-option label="失败" :value="2"/>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="160">
          <template slot-scope="scope">
            <!-- 编辑 -->
            <Iconbutton
              icontype="xg"
              label="编辑"
              @fatherMethod="handleEdit(scope.row)"
            ></Iconbutton>
            <!-- 删除 -->
            <Iconbutton
              icontype="sc"
              label="删除"
              @fatherMethod="handleListDelete(scope.row)"
            ></Iconbutton>
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
      <el-dialog
        width="600px"
        :title="dialog.title"
        :visible.sync="dialog.show"
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
            label="推送类型:"
            prop="linked_to.route_type"
          >
            <el-radio-group v-model="dialogForm.linked_to.route_type">
              <el-radio v-for="list of typeOption" :label="list.value" :key="list.value">{{ list.label }}</el-radio>
            </el-radio-group>
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
            <el-button type="primary" size="small" @click="handleChoose" style="margin-left: 10px">选择</el-button>
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
            <el-switch
              size="small"
              v-model="switchVal"
              @change="switchChange"
              active-text="自定义时间"
              inactive-text="立即推送">
            </el-switch>
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
            label="用户手机号:"
            prop="push_to.cid"
          >
            <el-input
              v-model="dialogForm.push_to.cid"
              placeholder="请输入用户手机号"
              clearable
              style="width: 194px"
            />
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button @click="dialog.show = false">
            取 消
          </el-button>
          <el-button
            type="primary"
            @click="enterDialog"
          >
            确 定
          </el-button>
        </div>
        <el-dialog
          top="20px"
          :width="innerDialog.width"
          :title="innerDialog.title"
          :visible.sync="innerDialog.show"
          v-if="innerDialog.show"
          append-to-body
        >
          <new-list @confirm="confirmChoose" v-if="dialogForm.linked_to.route_type === 'news'"></new-list>
          <channel :id="dialogForm.linked_to.id" @confirm="confirmChoose" v-if="dialogForm.linked_to.route_type === 'channel'"></channel>
        </el-dialog>
      </el-dialog>
    </div>
</template>

<script>
  import { getproduct } from '@/api/manage'
  import { getPushList, addPushDetail, changePushDetail, deletePushDetail } from '@/api/operamanage'
  import newList from './component/newList'
  import channel from './component/channel'
  import { dateFormat } from "@/utils/costum";

    export default {
      components: {
        newList,
        channel
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
          pickerOptions:{
            selectableRange: selectableRange(),
            disabledDate(time) {
              return time.getTime() < (new Date().getTime() - 24 * 60 * 60 * 1000);
            },
          },
          updateSelectableRange: selectableRange,
          productLists: [],
          statusOptions: [
            {
              label: '全部',
              value: ''
            },
            {
              label: '禁用',
              value: 0
            },
            {
              label: '启用',
              value: 1
            },
            {
              label: '失败',
              value: 2
            },
          ],
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
          queryParams: {
            status: '',
            title: '',
            product_id: '',
            page: 1,
            pageSize: 10
          },
          total: 0,
          loading: false,
          tableData: [],
          typeOption: [
            {
              label: '新闻',
              value: 'news'
            },
            /*{
              label: '活动(待定)',
              value: 'active'
            },
            {
              label: '早播报',
              value: 'channel'
            }*/
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
              { required: true, message: '请输入用户手机号', trigger: 'blur' }
            ],
            'linked_to.id': [
              { required: true, message: '请选择链接到的内容', trigger: 'change' }
            ],
            'push_to.terminal': [
              { required: true, message: '请选择推送终端', trigger: 'change' }
            ]
          },
          dialog: {
            title: '',
            show: false
          },
          innerDialog: {
            title: '链接到',
            width: '1000px',
            show: false
          },
          switchVal: false
        }
      },
      watch: {
        'innerDialog.show' () {
          this.$router.push({ query: {} })
        },
      },
      methods: {
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
        /* 获取产品列表 */
        getProductList () {
          return getproduct({}).then(res => {
            const data = res.data || []
            this.productLists = data.map(n => ({
              label: n.name,
              value: n.id
            }));
            this.queryParams.product_id = data?.[0]?.id;
          });
        },
        /* 重置 */
        handleReset () {
          this.resetForm('queryForm');
          Object.assign(this.queryParams, {
            page: 1
          })
        },
        /* 搜索 */
        handleQuery () {
          this.queryParams.page = 1;
          this.getList();
        },
        /* 显示选择链接到内容的弹框 */
        handleChoose () {
          const type = this.dialogForm.linked_to.route_type;
          if(type === 'news') {
            this.innerDialog = {
              title: '链接到新闻',
              width: '1000px',
              show: true
            }
          }else if(type === 'channel') {
            this.innerDialog = {
              title: '链接到早播报',
              width: '600px',
              show: true
            }
          }
        },
        /* 确认选择的新闻 */
        confirmChoose (data) {
          console.log(data)
          if(Object.keys(data).length !== 0) {
            const params = {
              route_type: this.dialogForm.linked_to.route_type,
              type: data.type,
              id: data.id,
              title: data.title
            }
            if(data.link) params.link = data.link;
            Object.assign(this.dialogForm, {
              linked_to: params
            })
          }
          this.innerDialog.show = false;
        },
        /* 新增 */
        handleAdd () {
          this.switchVal = false;
          this.dialogForm = {
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
          }
          this.dialog = {
            title: '新增推送',
            show: true
          }
          this.$nextTick(() => {
            this.$refs.dialogForm.clearValidate()
          })
        },
        /* 编辑 */
        handleEdit (row) {
          const { id, extra } = row;
          this.switchVal = true;
          this.resetForm('dialogForm');
          this.dialogForm = {
            title: extra.title,
            content: extra.content,
            cover: extra.cover,
            linked_to: {
              route_type: extra.linked_to.route_type,
              type: extra.linked_to.type,
              id: extra.linked_to.id,
              title: extra.linked_to.title,
              ...(extra.linked_to.link? { link: extra.linked_to.link } : {})
            },
            push_to: {
              type: extra.push_to.type,
              terminal: extra.push_to.terminal,
              cid: extra.push_to.cid.join()
            },
            push_time: extra.push_time
          };
          this.dialog = {
            title: '编辑推送',
            show: true,
            id
          }
        },
        /* 确认新增或编辑 */
        enterDialog () {
          if(!this.switchVal) this.dialogForm.push_time = dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss');
          this.$refs.dialogForm?.validate(val => {
            if(val) {
              const id = this.dialog.id;
              const cid = this.dialogForm.push_to.cid
              const params = {
                product_id: this.queryParams.product_id,
                extra: {
                  ...this.dialogForm,
                  push_to: {
                    ...this.dialogForm.push_to,
                    cid: cid? [cid] : []
                  }
                }
              }
              let promise;
              if(id) {
                promise = changePushDetail(id, params)
              }else {
                promise = addPushDetail(params);
              }
              promise.then(() => {
                this.$message.success(id? '修改成功' : '新增成功');
                this.dialog.show = false;
                this.getList();
              })
            }
          })
        },
        /* 删除 */
        handleListDelete (row) {
          const { id, title } = row;
          this.$confirm(`此操作将永久删除这条消息内容为${title}的推送信息, 是否继续?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            deletePushDetail(id).then(() => {
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
        /* 修改状态 */
        openStatusChange (row) {
          const { id, extra, openStatus } = row;
          const params = {
            product_id: this.queryParams.product_id,
            status: openStatus,
            extra: {
              title: extra.title,
              content: extra.content,
              cover: extra.cover,
              linked_to: {
                route_type: extra.linked_to.route_type,
                type: extra.linked_to.type,
                id: extra.linked_to.id,
                title: extra.linked_to.title
              },
              push_to: {
                type: extra.push_to.type,
                terminal: extra.push_to.terminal,
                cid: extra.push_to.cid?.join()
              },
              push_time: extra.push_time
            }
          };
          changePushDetail(id, params).then(() => {
            this.$message.success('修改成功');
            this.getList();
          })
        },
        /* 查看失败或成功详情 */
        watchDetail (row) {
          this.$alert(JSON.stringify(row.extra.pushResult), '详情', {
            confirmButtonText: '确定',
          });
        },
        /* 获取列表数据 */
        getList () {
          let params = { ...this.queryParams };
          this.loading = true;
          getPushList(this.removePropertyOfNullFor0(params)).then(res => {
            this.tableData = (res.data || []).map(n => ({
              ...n,
              openStatus: n.status,
              statusLabel: !n.processed_at? '待执行' : n.extra.pushResult?.pushSeq? '成功' : '失败',
              isSingle: n.extra.push_to.type === 'single'? '是' : '否'
            }));
            this.total = res.total;
          }).finally(() => {
            this.loading = false;
          })
        }
      },
      async created() {
        await this.getProductList();
        this.getList();
      }
    }
</script>
