<style type="text/scss" lang="scss" scoped>
  .xl-advert-list {

  }
</style>
<template>
    <div class="xl-advert-list">
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
          label="广告位:"
          prop="keyword"
        >
          <el-input
            v-model="queryParams.name"
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
          label="广告位名称"
          align="center"
          prop="name"
          showOverflowTooltip
        />
        <el-table-column
          label="广告位类型"
          align="center"
          prop="title"
          showOverflowTooltip
        >
          <template slot-scope="scope">{{ getLabel(scope.row.type) }}</template>
        </el-table-column>
        <el-table-column
          label="广告位描述"
          align="center"
          prop="intro"
        />
        <el-table-column
          label="状态"
          align="center"
        >
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.status"
              clearable
            >
              <el-option
                v-for="item in statusOptions.filter(n => n.value !== '')"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="180">
          <template slot-scope="scope">
            <!-- 查看 -->
            <el-button
              type="text"
              icon="el-icon-view"
              size="small"
              @click="watchList(scope.row)"
            >
              查看广告列表
            </el-button>
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
            label="所属产品:"
            prop="product_id"
          >
            <el-select
              v-model="dialogForm.product_id"
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
            label="广告位名称:"
            prop="name"
          >
            <el-input
              v-model="dialogForm.name"
              placeholder="请输入广告位名称"
              clearable
              style="width: 194px"
            />
          </el-form-item>
          <el-form-item
            label="广告位类型:"
            prop="type"
          >
            <el-select
              v-model="dialogForm.type"
              placeholder="请选择所属产品"
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
            label="广告位描述:"
            prop="intro"
          >
            <el-input
              v-model="dialogForm.intro"
              placeholder="请输入广告位描述"
              type="textarea"
              :row="6"
              clearable
              style="width: 200px"
            />
          </el-form-item>
          <el-form-item label="广告位布局:">
            <el-form-item label-width="100px" label="左边距:" prop="extra.layout.margin-left">
              <el-input
                v-model.number="dialogForm.extra.layout['margin-left']"
                placeholder="请输入左边距"
                clearable
                style="width: 100px"
              />
              px
            </el-form-item>
            <el-form-item label-width="100px" label="右边距:" prop="extra.layout.margin-right">
              <el-input
                v-model.number="dialogForm.extra.layout['margin-right']"
                placeholder="请输入右边距"
                clearable
                style="width: 100px"
              />
              px
            </el-form-item>
            <el-form-item label-width="100px" label="宽:" prop="extra.layout.width">
              <el-input
                v-model.number="dialogForm.extra.layout.width"
                placeholder="请输入宽"
                clearable
                style="width: 100px"
              />
              px
            </el-form-item>
            <el-form-item label-width="100px" label="高:" prop="extra.layout.height">
              <el-input
                v-model.number="dialogForm.extra.layout.height"
                placeholder="请输入高"
                clearable
                style="width: 100px"
              />
              px
            </el-form-item>
          </el-form-item>
          <el-form-item label="是否启用:" prop="status">
            <el-switch
              v-model="dialogForm.status"
              :active-value="1"
              :inactive-value="0"
            >
            </el-switch>
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
      </el-dialog>
    </div>
</template>

<script>
  import { getproduct } from '@/api/manage'

    export default {
      name: 'list',
      data() {
        return {
          productLists: [],
          statusOptions: [
            {
              label: '全部',
              value: ''
            },
            {
              label: '启用',
              value: 1
            },
            {
              label: '禁用',
              value: 0
            }
          ],
          typeOptions: [
            {
              label: '矩形横幅',
              value: 1
            },
            {
              label: '固定位置',
              value: 2
            },
            {
              label: '漂浮广告',
              value: 3
            },
            {
              label: '对联广告',
              value: 4
            },
            {
              label: '文字广告',
              value: 5
            },
            {
              label: '广告代码',
              value: 6
            },
            {
              label: 'APP开机广告',
              value: 7
            },
            {
              label: 'APP顶部广告',
              value: 8
            }
          ],
          queryParams: {
            name: '',
            product_id: '',
            status: '',
            page: 1,
            pageSize: 10
          },
          total: 0,
          loading: false,
          tableData: [],
          dialog: {
            show: false,
            title: '新增广告位'
          },
          dialogForm: {
            product_id: '',
            name: '',
            type: '',
            status: '',
            intro: '',
            extra: {
              layout: {
                'margin-left': '',
                'margin-right': '',
                height: '',
                width: ''
              }
            }
          },
          dialogRules: {
            product_id: [
              { required: true, message: '请选择所属产品', trigger: 'change' }
            ],
            name: [
              { required: true, message: '请输入广告位名称', trigger: 'blur' }
            ],
            type: [
              { required: true, message: '请选择所属产品', trigger: 'change' }
            ]
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
          Object.assign(this.queryParams, {
            page: 1
          })
          this.resetForm('queryForm');
        },
        /* 搜索 */
        handleQuery () {
          this.getList();
        },
        /* 新增 */
        handleAdd () {
          this.resetForm('dialogForm');
          this.dialog = {
            title: '新增广告位',
            show: true
          }
        },
        /* 编辑广告位 */
        handleEdit (row) {
          this.resetForm('dialogForm');
          this.dialog = {
            title: '新增广告位',
            show: true,
            isAdd: true
          };
          this.dialogForm = {

          }
        },
        /* 确认修改或添加 */
        enterDialog () {
          let promise;
          if(this.dialog.isAdd) {
            //promise =
          }else {

          }
        },
        /* 删除广告位列表 */
        handleListDelete (row) {

        },
        /* 查看广告列表 */
        watchList (row) {

        },
        /* 根据字段显示相应文字 */
        getLabel (val) {
          return this.typeOptions.find(n => n.value === val)?.label ?? ''
        },
        /* 获取列表信息 */
        getList () {

        }
      },
      async created() {
        await this.getProductList();
        this.getList();
      }
    }
</script>
