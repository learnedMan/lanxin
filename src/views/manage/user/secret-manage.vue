<style type="text/scss" lang="scss" scoped>

</style>
<template>
    <div class="xl-secret-manage">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
        size="small"
      >
        <el-form-item
          label="所属产品:"
        >
          <el-select
            v-model="queryParams.sourceId"
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
        <el-form-item>
          <el-button
            type="primary"
            size="mini"
            @click="handleAdd"
          >
            新增
          </el-button>
          <el-button
            type="primary"
            size="mini"
            @click="handleQuery"
          >
            搜索
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
          label="sourceId"
          align="center"
          prop="sourceId"
        />
        <el-table-column
          label="产品名称"
          align="center"
          prop="appName"
        />
        <el-table-column label="操作" align="center" width="160">
          <template slot-scope="scope">
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
          </template>
        </el-table-column>
      </el-table>
      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="queryParams.page"
        :limit.sync="queryParams.limit"
        @pagination="getList"
      />
      <!-- 编辑和新增 -->
      <el-dialog
        width="600px"
        :title="dialog.title"
        :visible.sync="dialog.show"
      >
        <el-form
          ref="dialogForm"
          :model="dialogForm"
          :rules="dialogRules"
          size="small"
          label-width="120px"
        >
          <el-form-item
            label="所属产品"
            prop="sourceId"
          >
            <el-select
              style="width: 200px"
              v-model="dialogForm.sourceId"
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
            label="SourceId"
            prop="sourceId"
          >
            <el-input
              disabled
              clearable
              style="width: 200px"
              v-model="dialogForm.sourceId"
            />
          </el-form-item>
          <el-form-item
            label="秘钥"
            prop="appSrcret"
          >
            <el-input
              clearable
              style="width: 200px"
              v-model="dialogForm.appSrcret"
            />
          </el-form-item>
          <el-form-item
            label="App ID"
            prop="appId"
          >
            <el-input
              clearable
              style="width: 200px"
              v-model="dialogForm.appId"
            />
          </el-form-item>
          <el-form-item label="重保期选项">
            <el-col :span="8">
              <el-form-item prop="registerDisableTag">
                <el-checkbox v-model="dialogForm.registerDisableTag" true-label="1" false-label="0">禁止注册</el-checkbox>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="userInfoDisableTag">
                <el-checkbox v-model="dialogForm.userInfoDisableTag" true-label="1" false-label="0">禁止修改用户信息</el-checkbox>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="loginDisableTag">
                <el-checkbox v-model="dialogForm.loginDisableTag" true-label="1" false-label="0">禁止第三方登录</el-checkbox>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item
            label="H5 Srcret"
            prop="h5Srcret"
          >
            <el-input
              clearable
              style="width: 200px"
              v-model="dialogForm.h5Srcret"
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
      </el-dialog>
    </div>
</template>

<script>
  import { getproduct, getSecretLists } from '@/api/manage.js'
    export default {
      name: 'Secret-manage',
      data() {
        return {
          queryParams: {
            sourceId: '',
            page: 1,
            limit: 10
          },
          productLists: [],
          loading: false,
          tableData: [],
          total: 0,
          dialog: {
            title: '新增秘钥',
            show: false
          },
          dialogForm: {
            sourceId: '', // 产品id
            appSrcret: '', // app秘钥
            appId: '', // appid
            registerDisableTag: '', // 禁止注册
            userInfoDisableTag: '', // 禁止用户修改信息
            loginDisableTag: '', // 禁止第三方登录
            h5Srcret: '', // h5秘钥
            thirdKeyForQQ: '', // 第三方QQ的key
          },
          dialogRules: {
            sourceId: [
              { required: true, message: '请选择所属产品', trigger: 'change' }
            ],
            appSrcret: [
              { required: true, message: '请输入秘钥', trigger: 'blur' }
            ],
            appId: [
              { required: true, message: '请输入appId', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        /* 获取产品列表 */
        getProductList () {
          return getproduct().then(res => {
            const data = res.data || []
            this.productLists = data.filter(n => n.source_id).map(n => ({
              label: n.name,
              value: n.source_id
            }));
            this.queryParams.sourceId = data?.[0]?.source_id;
          });
        },
        /* 搜索 */
        handleQuery () {
          this.queryParams.page = 1;
          this.getList();
        },
        /* 新增 */
        handleAdd () {

        },
        /* 修改 */
        handleEdit (row) {

        },
        /* 删除 */
        handleDelete (row) {

        },
        /* 确认编辑或新增 */
        enterDialog () {

        },
        /* 获取列表数据 */
        getList () {
          const params = { ...this.queryParams };
          this.loading = true;
          getSecretLists(this.removePropertyOfNullFor0(params)).then(res => {
            const data = res.data;
            if(res.code == 200) {
              this.tableData = data.list;
              this.total = data.totalCount;
            }
          }).finally(() => {
            this.loading = false;
          })
        }
      },
      async created() {
        await this.getProductList();
        this.getList()
      }
    }
</script>
