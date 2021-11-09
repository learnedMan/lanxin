<style type="text/scss" lang="scss" scoped>
  .xl-label-manage {

  }
</style>
<template>
  <div class="xl-label-manage">
    <div class="search">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
      >
        <el-form-item
          label="配置类型:"
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
         <el-form-item label="创建时间:" prop="createDate">
          <el-date-picker
            v-model="queryParams.createDate"
            type="daterange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="handleDateChange"
          />
        </el-form-item>
        <el-form-item>
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
          <el-button v-points = "1500"
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
        label="配置类型"
        align="center"
      >
        <template slot-scope="scope">
         <span>{{getTypeName(scope.row.type)}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="创建时间"
        align="center"
        prop="created_at"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="操作"
        align="center"
        width="160"
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
              @fatherMethod="handleListDelete(scope.row)"
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
          label-width="150px"
          label="配置类型"
          prop="type"
        >
          <el-select
            v-model="dialog.form.type"
            size="small"
            placeholder="请选择配置类型"
            @change="changeSettings"
            style="width: 250px"
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
         <el-form-item label-width="150px" v-for="item in settings" :key="item.key" :label="item.name" :prop="item.key">
            <el-input
              style="width: 250px"
              autocomplete="off"
              placeholder="请输入"
              v-model="item.value"
            ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button v-points = "1500" @click="closeDialog">取 消</el-button>
        <el-button v-points = "1500" type="primary" @click="enterDialog">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getLabels, deleteLabels, editLabels, addLabels } from '@/api/content'
import { getSyncSettings,getSettingsInfo,addSettings,delSettings } from '@/api/manage'
export default {
  name: 'labelManage',
  data() {
    return {
      queryParams: {
        name: '',
        type: '',
        createDate: '',
        startdate: '',
        enddate: '',
        pageSize: 10,
        page: 1
      },
      total: 0, // 总数
      loading: false,
      typeOptions: [
        {
          label: '高亮',
          value: 'hightlight'
        },
        {
          label: '普通',
          value: 'dafault'
        }
      ], // 样式集合
      dateValue: '', // 时间区间
      tableData: [], // 列表数据
      settings: [],
      dialog: {
        title: '新增',
        show: false,
        form: {
          name: '',
          type: '',
          introduction: ''
        },
        rules: {
          name: { required: true, message: '请输入标签名称', trigger: 'blur' },
          type: { required: true, message: '请选择样式', trigger: 'change' }
        }
      }
    }
  },
  created() {
    this.getList()
    this.getSettingsType()
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
     /* 修改时间 */
        handleDateChange (val) {
          const arr = val || ['', ''];
          this.queryParams.startdate = arr[0];
          this.queryParams.enddate = arr[1];
        },
    /*
          * 搜索
          * */
    handleQuery() {
      this.queryParams.page = 1;
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
          type: '',
          introduction: ''
        }
      })
      this.dialog.form.type = this.typeOptions[0].value
      this.$nextTick(() => {
          this.$refs.dialogForm?.clearValidate()
      })
    },
    /*
          * 获取列表数据
          * */
    getList() {
      // this.loading = true
      // getLabels(this.removePropertyOfNull(this.queryParams)).then(res => {
      //   const { data, total } = res
      //   const typeObj = this.typeOptions.reduce((obj, n) => ({
      //     ...obj,
      //     [n.value]: n.label
      //   }), {})
      //   this.tableData = data.map(n => ({
      //     ...n,
      //     typeLabel: typeObj[n.type]
      //   }))
      //   this.total = total
      // }).finally(() => {
      //   this.loading = false
      // })
      getSyncSettings(this.removePropertyOfNull(this.queryParams)).then( res =>{
        this.tableData = res.data || []
        console.log('res----',res)
      })
    },
    // 获取配置类型
    getSettingsType() {
      getSettingsInfo().then(res => {
        console.log('type---',res)
        this.typeOptions = res.map(v => {
          v.label = v.name
          v.value = v.key
          if (v.data.length > 0) {
            v.data.map( n =>{
              n.value = ''
            })
          }
          return { ...v }
        })
        this.dialog.form.type = this.typeOptions[0].value
        this.settings = this.typeOptions[0].data
        console.log('this.typeOptions',this.typeOptions)
        console.log('settings',this.settings)
      })
    },
    changeSettings (value) {
      let obj = this.typeOptions.find( v => v.key == value)
      this.settings = obj.data
    },
    getTypeName (value) {
      let obj = this.typeOptions.find(v => v.key == value)
      return obj.name || ''
    },
    /*
          * 删除
          * */
    handleListDelete(row) {
      const { id } = row
      this.$confirm(`此操作将永久删除这条id为${id}的配置类型, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delSettings(id).then(() => {
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
          type: row.type,
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
      this.settings = this.typeOptions[0].data
    },
    /* 弹框确认 */
    enterDialog() {
      const id = this.dialog.form.id
      this.$refs.dialogForm.validate(val => {
        let promise
        if (val) {
           console.log('form', this.dialog.form)
           console.log('setings', this.settings)
           let arr = this.settings.map(v => {
             delete v.type
             return {...v}
           })
           let obj = {
             type: this.dialog.form.type,
             data: arr
           }
           console.log('arr',arr)
           console.log('obj',obj)
          // 编辑
          // return
          if (id) {
            delete this.dialog.form.id
            promise = editLabels(id, this.removePropertyOfNull(this.dialog.form))
          } else {
            // 新增
            promise = addSettings(obj)
          }
          promise.then(() => {
            this.$message({
              message: id ? '修改成功' : '新增成功',
              type: 'success'
            })
            this.dialog.show = false
            this.settings.map(v => { v.value = ''})
            this.settings = this.typeOptions[0].data
            this.getList()
          })
        }
      })
    }
  }
}
</script>
