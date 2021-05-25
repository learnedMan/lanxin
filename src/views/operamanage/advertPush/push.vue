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
          prop="sourceId"
        >
          <el-select
            v-model="queryParams.product_id"
            placeholder="请选择所属产品"
            clearable
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
          prop="keyword"
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
          prop="status"
        />
        <el-table-column
          label="创建时间"
          align="center"
          prop="status"
        />
        <el-table-column
          label="更新时间"
          align="center"
          prop="status"
        />
        <el-table-column
          label="推送个人"
          align="center"
          prop="extra.push_to.type"
        >

        </el-table-column>
        <el-table-column label="操作" align="center" width="240">
          <template slot-scope="scope">
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
              @click="handleListDelete(scope.row)"
            >
              删除
            </el-button>
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
            <el-button type="primary" size="mini" @click="handleChoose">选择</el-button>
          </el-form-item>
          <el-form-item
            label="推送时间:"
            prop="pushTime"
          >
            <el-date-picker
              v-model="dialogForm.pushTime"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
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
          width="auto"
          :title="innerDialog.title"
          :visible.sync="innerDialog.show"
          append-to-body
        >
          <new-list @confirm="confirmNew"></new-list>
        </el-dialog>
      </el-dialog>
    </div>
</template>

<script>
  import { getproduct } from '@/api/manage'
  import { getPushList, addPushDetail } from '@/api/operamanage'
  import newList from './component/newList'

    export default {
      components: {
        newList
      },
      data() {
        return {
          productLists: [],
          statusOptions: [
            {
              label: '全部',
              value: ''
            },
            {
              label: '未发布',
              value: 0
            },
            {
              label: '发布',
              value: 1
            }
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
            {
              label: '活动(待定)',
              value: 'active'
            },
            {
              label: '早播报',
              value: 'channel'
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
            pushTime: '',
          },
          dialogRules: {
            title: [
              { required: true, message: '请输入消息内容', trigger: 'blur' }
            ],
            pushTime: [
              { required: true, message: '请选择推送时间', trigger: 'change' }
            ],
            'push_to.cid': [
              { required: true, message: '请输入用户手机号', trigger: 'blur' }
            ],
            'linked_to.id': [
              { required: true, message: '请选择链接到的内容', trigger: 'change' }
            ]
          },
          dialog: {
            title: '',
            show: false
          },
          innerDialog: {
            title: '链接到',
            show: false
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
              value: n.id
            }));
            this.queryParams.product_id = data?.[0]?.id;
          });
        },
        /* 重置 */
        handleReset () {
          this.resetForm('queryForm');
          Object.assign(this.queryParams, {
            page: 1,
            product_id: this.productLists?.[0]?.id
          })
        },
        /* 搜索 */
        handleQuery () {
          this.getList();
        },
        /* 显示选择链接到内容的弹框 */
        handleChoose () {
          this.innerDialog.show = true;
        },
        /* 确认选择的新闻 */
        confirmNew (data) {
          Object.assign(this.dialogForm, {
            linked_to: {
              route_type: this.dialogForm.linked_to.route_type,
              type: data.type,
              id: data.id,
              title: data.title
            }
          })
        },
        /* 新增 */
        handleAdd () {
          this.resetForm('dialogForm');
          Object.assign(this.dialogForm, {
            linked_to: {
              route_type: 'news',
              type: '',
              id: '',
              title: ''
            }
          })
        },
        /* 编辑 */
        handleEdit (row) {
          const { id } = row
          this.resetForm('dialogForm');
          this.dialogForm = {

          }
        },
        /* 确认新增或编辑 */
        enterDialog () {
          this.$refs.dialogForm?.validate(val => {
            if(val) {
              const id = this.dialog.id;
              const params = {
                product_id: this.queryParams.product_id,
                extra: this.dialogForm
              }
              let promise;
              if(id) {

              }else {
                promise = addPushDetail(id, params);
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
        handleListDelete () {

        },
        /* 获取列表数据 */
        getList () {
          let params = { ...this.queryParams };
          this.loading = true;
          getPushList(this.removePropertyOfNullFor0(params)).then(res => {
            this.tableData = res.data || [];
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
