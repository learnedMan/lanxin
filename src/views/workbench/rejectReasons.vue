<!-- 审核拒绝原因 -->
<style type="text/scss" lang="scss" scoped>
  .xl-reject-reasons {
    padding: 30px;
  }
</style>

<template>
  <div class="xl-reject-reasons">
    <div class="search">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
      >
        <el-form-item
          label="原因名称:"
          prop="name"
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
          label="适用场景:"
          prop="apply_to"
        >
          <el-select
            v-model="queryParams.apply_to"
            size="small"
            placeholder="请选择类型"
            clearable
          >
            <el-option
              v-for="item in applyOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="创建日期:">
          <el-date-picker
            v-model="dateValue"
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
        label="原因名称"
        align="center"
        prop="name"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="原因描述"
        align="center"
        prop="introduction"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="适用于"
        align="center"
        prop="applyLabel"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="创建时间"
        align="center"
        prop="created_at"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="操作"
        align="center"
        width="280"
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
              @click="handleListDelete(scope.row)"
            >
              删除
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
      width="600px"
      :title="dialog.title"
      :visible.sync="dialog.show"
    >
      <el-form
        ref="dialogForm"
        :model="dialog.form"
        :rules="dialog.rules"
      >
        <el-form-item
          label-width="120px"
          label="拒绝原因:"
          prop="name"
        >
          <el-input
            v-model="dialog.form.name"
            placeholder="请输入拒绝原因"
            clearable
            size="small"
            style="width: 200px"
          />
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="描述:"
        >
          <el-input
            v-model="dialog.form.introduction"
            placeholder="请输入描述"
            clearable
            type="textarea"
            style="width: 300px"
            rows="4"
            resize="none"
          />
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="适用于:"
          prop="apply_to"
        >
          <el-checkbox-group v-model="dialog.form.apply_to">
            <el-checkbox v-for="type of applyOptions.slice(1)" :key="type.value" :label="type.value">{{ type.label }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="enterDialog">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getReasons, addReasons, editReasons, deleteReasons } from '@/api/workbench'

export default {
  name: 'RejectReasons',
  data() {
    return {
      queryParams: {
        name: '',
        apply_to: '',
        startdate: '',
        enddate: '',
        pageSize: 10,
        page: 1
      },
      applyOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '稿件审核',
          value: 1
        },
        {
          label: '评论审核',
          value: 2
        },
        {
          label: '爆料审核',
          value: 3
        },
        {
          label: '提现审核',
          value: 4
        }
      ], // 使用场景列表
      total: 0, // 总数
      loading: false,
      dateValue: '', // 时间区间
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
      tableData: [], // 列表数据
      dialog: {
        title: '新增',
        show: false,
        form: {
          name: '',
          apply_to: [],
          introduction: ''
        },
        rules: {
          name: { required: true, message: '请输入标签名称', trigger: 'blur' },
          apply_to: { type: 'array', required: true, message: '请选择使用场景', trigger: 'change' }
        }
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    /*
      * 重置
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
      this.getList()
    },
    /*
          * 新增
          * */
    handleAdd() {
      Object.assign(this.dialog, {
        show: true,
        title: '新增',
        form: {
          name: '',
          apply_to: [],
          introduction: ''
        }
      })
      this.$nextTick(() => {
          this.$refs.dialogForm?.clearValidate()
      })
    },
    /*
          * 时间区间变化
          * */
    handleDateChange(val) {
      const arr = val || ['', '']
      this.queryParams.startdate = arr[0]
      this.queryParams.enddate = arr[1]
    },
    /*
          * 获取列表数据
          * */
    getList() {
      this.loading = true
      const params = { ...this.queryParams }
      getReasons(this.removePropertyOfNull(params)).then(res => {
        const { data, total } = res
        const typeObj = this.applyOptions.reduce((obj, n) => ({
          ...obj,
          [n.value]: n.label
        }), {})
        this.tableData = data.map(n => ({
          ...n,
          applyLabel: n.apply_to.split(',').map(val => typeObj[val]).join()
        }))
        this.total = total
      }).finally(() => {
        this.loading = false
      })
    },
    /*
          * 删除
          * */
    handleListDelete(row) {
      const { id } = row
      this.$confirm(`此操作将永久删除这条id为${id}的拒绝原因, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteReasons(id).then(() => {
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
    /*
          * 编辑
          * */
    handleEdit(row) {
      Object.assign(this.dialog, {
        show: true,
        title: '编辑',
        form: {
          name: row.name,
          apply_to: row.apply_to.split(',').map(val => Number(val)),
          introduction: row.introduction,
          id: row.id
        }
      })
      this.$nextTick(() => {
          this.$refs.dialogForm?.clearValidate()
      })
    },
    /* 关闭弹框 */
    closeDialog() {
      this.dialog.show = false
    },
    /* 弹框确认 */
    enterDialog() {
      const id = this.dialog.form.id
      let form = { ...this.dialog.form }
      delete form.id
      form = this.removePropertyOfNull({
        ...form,
        apply_to: form.apply_to.join()
      })
      this.$refs.dialogForm.validate(val => {
        let promise
        if (val) {
          // 编辑
          if (id) {
            delete this.dialog.form.id
            promise = editReasons(id, form)
          } else {
            // 新增
            promise = addReasons(this.removePropertyOfNull(form))
          }
          promise.then(() => {
            this.$message({
              message: id ? '修改成功' : '新增成功',
              type: 'success'
            })
            this.dialog.show = false
            this.getList()
          })
        }
      })
    }
  }
}
</script>
