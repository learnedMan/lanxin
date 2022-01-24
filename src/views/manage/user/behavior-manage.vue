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
        <!-- <el-form-item
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
        </el-form-item> -->
        <el-form-item
          label="规则名称:"
          prop="actionName"
        >
          <el-input
            v-model="queryParams.actionName"
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
          label="行为Id"
          align="center"
          prop="actionCode"
          showOverflowTooltip
        />
        <el-table-column
          label="规则名称"
          align="center"
          prop="actionName"
        />
        <el-table-column
          label="所属模块"
          align="center"
          prop="modeName"
          showOverflowTooltip
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
        <el-table-column
          label="创建时间"
          align="center"
          prop="createdAt"
        />
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
            label="所属模块"
            prop="modeCode"
          >
            <el-select
              style="width: 200px"
              v-model="dialogForm.modeCode"
              @change="typeAction"
              placeholder="请选择所属模块"
              clearable
            >
              <el-option
                v-for="item in typeLists"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
           <el-form-item
            label="行为名称"
            prop="actionName"
          >
            <el-input
              clearable
              style="width: 200px"
              placeholder="请输入行为名称"
              v-model="dialogForm.actionName"
            />
          </el-form-item>
          <el-form-item
            label="行为Id"
            prop="actionCode"
          >
            <el-input
              clearable
              style="width: 200px"
              :placeholder="actionPlaceholder"
              v-model.number="dialogForm.actionCode"
            />
          </el-form-item>
          <el-form-item
            label="状态"
            prop="status"
          >
            <el-switch v-model="dialogForm.status" :active-value="1" :inactive-value="2">
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
  import {  getActionList, editRule, delBehavior,getBehaviorList,addBehavior,editBehavior } from '@/api/manage.js'

    export default {
      name: 'Convention',
      data() {
        const checkActionCode = (rule, value, callback) => {
         let min = this.modeCode,max = Number(this.modeCode)+99
          if (value == null || value === '') {
            return callback(new Error('行为ID不能为空'));
          }
          if (!Number.isInteger(value) ||(value < min || value > max)) {
            callback(new Error(`请输入${min}-${max}整数`));
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
              label: '禁用',
              value: 2
            }
          ],
          typeLists: [
            {
              name: '新闻媒资',
              value: 8000
            },
            {
              name: '广电',
              value: 8100
            },
            {
              name: '社区',
              value: 8200
            },
            {
              name: '爆料',
              value: 8300
            },
            {
              name: '互动',
              value: 8400
            },
            {
              name: '个人信息/邀请注册',
              value: 8500
            },
            {
              name: '举报反馈',
              value: 8600
            },
            {
              name: '行为',
              value: 8700
            },
            {
              name: '积分调整',
              value: 8800
            },
          ],
          actionLists: [

          ],
          queryParams: {
            actionName: '',
            status: '',
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
          actionPlaceholder: '请输入行为ID',
          modeCode: '',
          dialogForm: {
            modeCode: '', // 所属模块
            actionCode: '', // 行为ID
            actionName: '', //行为名称
            status: 1, // 开启关闭
          },
          dialogRules: {
            actionName: [
              { required: true, message: '请输入行为名称', trigger: 'blur' },
            ],
            modeCode: [
              { required: true, message: '请选择所属模块', trigger: 'change' }
            ],
            actionCode: [
              { required: true,  message: '请填写行为Id', trigger: 'blur' }
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
        typeAction(value) {
          this.dialogForm.actionName = ''
          this.dialogForm.actionCode = ''
          this.dialogForm.status = 1
          this.modeCode = value
          let num = Number(value)
          this.actionPlaceholder = '请输入行为ID' +`(${num}-${num+99})`
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
          this.modeCode = row.modeCode
          this.dialogForm = {
            modeCode: row.modeCode,
            actionCode: row.actionCode,
            actionName: row.actionName,
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
            const getmodeName = code =>{
              let obj = this.typeLists.find(v => v.value == code)
              return obj.name
            }
            if(val) {
              let modeName = getmodeName(this.modeCode)
              const params = {
                ...this.dialogForm,
                modeName
              }
              console.log('params',params)
              // return
              let promise = this.dialog.id? editBehavior({ ...params, id: this.dialog.id}) : addBehavior(params)
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
          this.$confirm(`此操作将永久删除这条行为id为${id}的明细, 是否继续?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            delBehavior({
                id
              }).then(res => {
                if(res.code == 200) {
                  this.$message.success(res.msg);
                  this.getList();
                }
              })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
        },
        /* 修改状态 */
        handleChangeStatus (row) {
          const { actionCode, id, status, modeName, actionName,modeCode } = row;
          const params = {
            actionCode,id,status,modeName,actionName,modeCode
          }
          editBehavior(params).then(res => {
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
          getBehaviorList(this.removePropertyOfNullFor0(params)).then(res => {
            if(res.code == 200) {
              let data = res.data
              this.tableData = data.list
              this.total = data.totalCount;
            }
          }).finally(() => {
            this.loading = false;
          })
        }
      },
       created() {
        this.getList();
      }
    }
</script>
