<style type="text/scss" lang="scss" scoped>
  .xl-convention {

  }
</style>
<template>
    <div class="xl-convention">
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
        <el-form-item
          label="规则名称:"
          prop="ruleName"
        >
          <el-input
            v-model="queryParams.ruleName"
            placeholder="请输入规则名称"
            clearable
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
            placeholder="请选择状态"
          >
            <el-option
              v-for="item in statusLists"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button v-points = "1500"
            type="primary"
            size="mini"
            @click="handleAdd"
          >
            新增
          </el-button>
          <el-button v-points = "1500"
            type="primary"
            size="mini"
            @click="handleReset"
          >
            重置
          </el-button>
          <el-button v-points = "1500"
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
          label="规则名称"
          align="center"
          prop="ruleName"
        />
        <el-table-column
          label="类型"
          align="center"
          prop="typeLabel"
          showOverflowTooltip
        />
        <el-table-column
          label="行为"
          align="center"
          prop="actionLabel"
          showOverflowTooltip
        />
        <el-table-column
          label="积分"
          align="center"
          prop="risePoints"
        />
        <el-table-column
          label="单日限制次数"
          align="center"
          prop="maxNumDayLabe"
        />
        <el-table-column
          label="最高限制次数"
          align="center"
          prop="maxNumLabe"
        />
        <el-table-column label="状态" align="center">
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.status"
              @change="handleChangeStatus(scope.row)"
            >
              <el-option
                v-for="item in statusLists"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
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
            label="积分规则名称"
            prop="ruleName"
          >
            <el-input
              clearable
              style="width: 200px"
              v-model="dialogForm.ruleName"
            />
          </el-form-item>
          <el-form-item
            label="规则说明"
            prop="ruleRemark"
          >
            <el-input
              clearable
              style="width: 200px"
              placeholder="请输入积分规则说明"
              type="textarea"
              :rows="6"
              v-model="dialogForm.ruleRemark"
            />
          </el-form-item>
          <el-form-item
            label="所属模块"
            prop="type"
          >
            <el-select
              style="width: 200px"
              v-model="dialogForm.type"
              @change="dialogForm.action = ''"
              placeholder="请选择规则类型"
              clearable
            >
              <el-option
                v-for="item in typeLists"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item
            label="行为"
            prop="action"
          >
            <el-select
              style="width: 200px"
              v-model="dialogForm.action"
              placeholder="请选择行为"
              clearable
            >
              <el-option
                v-for="item in actionOfType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
           <el-form-item
            label="(广电/直播)观看时长"
            prop="duration"
          >
            <el-input
              clearable
              style="width: 200px"
              placeholder="请输入时长"
              v-model.number="dialogForm.duration"
            />
          </el-form-item>
          <el-form-item
            label="每次赠送积分"
            prop="risePoints"
          >
            <el-input
              clearable
              style="width: 200px"
              placeholder="请输入赠送积分值"
              v-model.number="dialogForm.risePoints"
            />
          </el-form-item>
          <el-form-item
            label="单日限制次数"
            prop="maxNumDay"
          >
            <el-input
              clearable
              style="width: 200px"
              placeholder="请输入次数(0表示不限)"
              v-model.number="dialogForm.maxNumDay"
            />
          </el-form-item>
          <el-form-item
            label="最高限制次数"
            prop="maxNum"
          >
            <el-input
              clearable
              style="width: 200px"
              placeholder="请输入次数(0表示不限)"
              v-model.number="dialogForm.maxNum"
            />
          </el-form-item>
          <el-form-item
            label="状态"
            prop="status"
          >
            <el-switch v-model="dialogForm.status" :active-value="1" :inactive-value="0">
            </el-switch>
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button v-points = "1500" @click="dialog.show = false">
            取 消
          </el-button>
          <el-button v-points = "1500"
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
  import { getproduct, getRuleList, getTypeList, getActionList, addRule, editRule, deleteRule } from '@/api/manage.js'

    export default {
      name: 'Convention',
      data() {
        const checkUpperLineEveryday = (rule, value, callback) => {
          console.log(value)
          if (value == null || value === '') {
            return callback(new Error('每日次数限制不能为空'));
          }
          if (!Number.isInteger(value) || value < 0) {
            callback(new Error('请输入正整数'));
          } else {
            callback()
          }
        };
        const checkUpperLine = (rule, value, callback) => {
          if (value == null || value === '') {
            return callback(new Error('最高限制次数不能为空'));
          }
          if (!Number.isInteger(value) || value < 0) {
            callback(new Error('请输入正整数'));
          } else {
            callback()
          }
        };
        const checkPoints = (rule, value, callback) => {
          if (value == null || value === '') {
            return callback(new Error('赠送积分值不能为空'));
          }
          if (!Number.isInteger(value) || value < 0) {
            callback(new Error('请输入正整数'));
          } else {
            callback()
          }
        };
        return {
          productLists: [],
          statusLists: [
            {
              label: '启用',
              value: 1
            },
            {
              label: '不启用',
              value: 0
            }
          ],
          typeLists: [],
          actionLists: [

          ],
          queryParams: {
            sourceId: '',
            ruleName: '',
            status: 1,
            page: 1,
            limit: 10
          },
          total: 0,
          loading: false,
          tableData: [],
          dialog: {
            title: '新增',
            show: false
          },
          dialogForm: {
            ruleName: '', // 名称
            ruleRemark: '', // 说明
            type: '', // 规则类型
            risePoints: '', // 赠送积分值
            action: '', // 行为
            duration: '', //观看时长
            maxNumDay: '', // 每日限制次数
            maxNum: '', // 最高限制次数
            status: 1, // 开启关闭
          },
          dialogRules: {
            ruleName: [
              { required: true, message: '请输入规则名称', trigger: 'blur' },
            ],
            type: [
              { required: true, message: '请选择规则类型', trigger: 'change' }
            ],
            action: [
              { required: true, message: '请选择行为', trigger: 'change' }
            ],
            maxNumDay: [
              { required: true, validator: checkUpperLineEveryday, trigger: 'blur' }
            ],
            maxNum: [
              { required: true, validator: checkUpperLine, trigger: 'blur' }
            ],
            risePoints: [
              { required: true, validator: checkPoints, trigger: 'blur' }
            ]
          }
        }
      },
      computed: {
        actionOfType () {
          return this.actionLists.filter(n => n.parent === this.dialogForm.type)
        }
      },
      methods: {
        /* 获取产品列表 */
        getProductList () {
          return getproduct({}).then(res => {
            const data = res.data || []
            this.productLists = data.map(n => ({
              label: n.name,
              value: n.source_id
            }));
            this.queryParams.sourceId = data?.[0]?.source_id;
          });
        },
        /* 获取类型集合 */
        getTypeList () {
          return getTypeList().then(res => {
            if(res.code == 200) {
              this.typeLists = (res.data || []).map(n => ({
                label: n.remark,
                value: Number(n.dictValue)
              }))
            }
          })
        },
        /* 获取行为集合 */
        getActionList () {
          return getActionList().then(res => {
            if(res.code == 200) {
              this.actionLists = (res.data || []).map(n => ({
                label: n.remarkTwo,
                value: Number(n.dictValue),
                parent: Number(n.remark)
              }))
            }
          })
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
          this.queryParams.page = 1;
          this.getList();
        },
        /* 新增 */
        handleAdd () {
          this.resetForm('dialogForm');
          this.dialog = {
            show: true,
            title: '新增'
          }
        },
        /* 编辑 */
        handleEdit (row) {
          const { id } = row;
          this.resetForm('dialogForm');
          this.dialogForm = {
            ruleName: row.ruleName,
            ruleRemark: row.ruleRemark,
            risePoints: row.risePoints,
            type: row.type,
            action: row.action,
            duration: row.duration,
            maxNumDay: row.maxNumDay,
            maxNum: row.maxNum,
            status: row.status,
          }
          this.dialog = {
            show: true,
            title: '编辑',
            id
          }
        },
        /* 确认修改或新增 */
        enterDialog () {
          this.$refs.dialogForm.validate(val => {
            if(val) {
              const user = this.$store.state.user.u_info;
              const params = {
                ...this.dialogForm,
                operateUserId: user.id,
                operateUserName: user.name,
                sourceId: this.queryParams.sourceId
              }
              let promise = this.dialog.id? editRule({ ...params, id: this.dialog.id}) : addRule(params)
              promise.then(res => {
                if(res.code == 200) {
                  this.$message.success(res.msg);
                  this.dialog.show = false;
                  this.getList();
                }
              })
            }
          })
        },
        /* 删除 */
        handleDelete (row) {
          const { id } = row;
          const user = this.$store.state.user.u_info;
          deleteRule({
            id,
            operateUserId: user.id,
            operateUserName: user.name,
          }).then(res => {
            if(res.code == 200) {
              this.$message.success(res.msg);
              this.getList();
            }
          })
        },
        /* 修改状态 */
        handleChangeStatus (row) {
          const { sourceId, id, status, ruleName, ruleRemark, type, action, maxNumDay, maxNum, risePoints } = row;
          const user = this.$store.state.user.u_info;
          const params = {
            sourceId,
            id,
            operateUserId: user.id,
            operateUserName: user.name,
            ruleName, // 名称
            ruleRemark, // 说明
            type, // 规则类型
            risePoints,
            action, // 行为
            maxNumDay, // 每日限制次数
            maxNum, // 最高限制次数
            status, // 开启关闭
          }
          editRule(params).then(res => {
            if(res.code == 200) {
              this.$message.success(res.msg);
              this.getList();
            }
          })
        },
        /* 获取列表数据 */
        getList () {
          const params = { ...this.queryParams };
          this.loading = true;
          getRuleList(this.removePropertyOfNullFor0(params)).then(res => {
            if(res.code == 200) {
              const data = res.data;
              this.tableData = (data.list || []).map(n => ({
                ...n,
                typeLabel: this.typeLists.find(list => list.value === n.type)?.label,
                actionLabel: this.actionLists.find(list => list.value === n.action)?.label,
                maxNumDayLabe: n.maxNumDay || '不限制',
                maxNumLabe: n.maxNum || '不限制',
              }))
              this.total = data.totalCount;
            }
          }).finally(() => {
            this.loading = false;
          })
        }
      },
      async created() {
        await this.getProductList();
        await this.getTypeList();
        await this.getActionList();
        this.getList();
      }
    }
</script>
