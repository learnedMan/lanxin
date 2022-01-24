<style type="text/scss" lang="scss" scoped>

</style>
<template>
  <div class="xl-integral-value">
    <el-form
      ref="queryForm"
      :model="queryParams"
      :inline="true"
      size="small"
    >
      <el-form-item label="变动时间:">
        <el-date-picker
          v-model="queryParams.time"
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
            @click="exportExcel"
          >
            导出
          </el-button>
        <el-button v-points = "1500"
            type="primary"
            size="mini"
            @click="integralAdjust"
          >
            积分调整
          </el-button>
        <el-button v-points = "1500"
          type="success"
          size="mini"
          @click="handleReturn"
        >
          返回上一级
        </el-button>
      </el-form-item>
    </el-form>
    <el-table
      ref="multipleTable"
       id="exportTab"
      v-loading="loading"
      :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column
        label="用户名"
        align="center"
        prop="nickName"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="变动积分值"
        align="center"
        prop="integration"
      />
      <el-table-column
        label="变动类型"
        align="center"
        prop="ruleName"
      />
      <el-table-column
        label="变动时间"
        align="center"
        prop="createdTime"
      />
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.page"
      :limit.sync="queryParams.limit"
      @pagination="getList"
    />
     <!-- 积分调整 -->
      <el-dialog
        width="600px"
        title="积分调整"
        :visible.sync="integralDialog.show"
      >
        <el-form
          ref="integralForm"
          :model="integralForm"
          :rules="integralRules"
          size="small"
          label-width="100px"
        > 
        <el-form-item prop="type" label="调整类型">
          <el-radio-group
            size="small"
            v-model="integralForm.type"
          >
            <el-radio  :label="0">增加</el-radio>
            <el-radio  :label="1">扣减</el-radio>
          </el-radio-group>
        </el-form-item>
          <el-form-item
            label="积分"
            prop="points"
          >
            <el-input
              clearable
              style="width: 300px"
              v-model.number="integralForm.points"
              placeholder="请输入调整积分值(请输入大于0的整数)"
            />
          </el-form-item>
           <el-form-item
              label="备注"
              prop="remark"
            >
              <el-input
                v-model.trim="integralForm.remark"
                type="textarea"
                :rows="6"
                clearable
                size="small"
                style="width: 300px"
              />
            </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button v-points = "1500" @click="integralDialog.show = false">
            取 消
          </el-button>
          <el-button v-points = "1500"
            type="primary"
            @click="enterIntegralDialog"
          >
            确 定
          </el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
  import { getUserDetail, getInvited,getIntegral,manualIntegral } from '@/api/manage'
  import FileSaver from 'file-saver'
  import XLSX from 'xlsx'
  export default {
    props: {
      id: {
        type: [ Number, String ],
        required: true
      }
    },
    data() {
       const validateintegralNum = (rule, value, callback) => {
        if(!value){
          callback('请输入调整积分值非零数')
        }else if (!(/^[1-9]\d*$/.test(value))) {
          callback(new Error(`请输入正整数`))
        } else {
          callback()
        }
      }
      return {
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
        queryParams: {
          userId: '',
          sourceId: '',
          startTime: '',
          endTime: '',
          time: '',
          page: 1,
          limit: 10
        },
        total: 0,
        loading: false,
        tableData: [],
        integralDialog: {
          show: false
        },
        integralForm: {
          action: 8801,
          remark: '', //备注
          type: 0, //调整类型
          points: '', //添加积分
          sourceId: '', //产品id
          dataId: '', //媒资id
          userId: '',//用户id
          operateUserId: '', //操作用户id
          operateUserName: '', //操作用户名
        },
        integralRules: {
            remark: [
               { required: true, message: '请输入备注', trigger: 'blur' }
            ],
            type: [
               { required: true, message: '请选择调整类型', trigger: 'blur' }
            ],
            points: [
              { required: true, validator: validateintegralNum, trigger: 'blur' }
            ]
          },
      }
    },
    methods: {
      /* 获取用户详情 */
      getUserDetail () {
        const { id } = this;
        return getUserDetail({ id }).then(res => {
          if(res.code == 200) {
            const data = res.data;
            Object.assign(this.queryParams, {
              userId: data.userId,
              sourceId: data.sourceId,
            })
          }
        })
      },
       /* 确认调整积分 */
        enterIntegralDialog () {
          this.$refs.integralForm?.validate(val => {
            if(val) {
              console.log('integralForm',this.integralForm)
              let data = {...this.integralForm}
              // return
              manualIntegral(data).then(res => {
                if(res.code == 200) {
                  this.$message.success(res.msg);
                  this.getList()
                  this.integralDialog.show = false;
                  this.integralForm.type = 0
                  this.integralForm.remark = ''
                  this.integralForm.points = ''
                }
              })
            }
          })
        },
       integralAdjust() {
          // const { sourceId,id,userId} = row
          const user_info =  this.$store.state.user.u_info
          // this.integralForm.dataId = id + ''
          // this.integralForm.sourceId = sourceId
          // this.integralForm.userId = userId
          this.integralForm.operateUserId = user_info.id
          this.integralForm.operateUserName = user_info.name
          this.integralDialog.show = true
          console.log('integralForm',this.integralForm)
        },
       /*表格导出*/ 
     exportExcel () {
      var xlsxParam = { raw: true } // 导出的内容只做解析，不进行格式转换
      var wb = XLSX.utils.table_to_book(document.querySelector('#exportTab'), xlsxParam)

      /* get binary string as output */
      var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
      try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '表格.xlsx')
      } catch (e) {
        if (typeof console !== 'undefined') {
          console.log(e, wbout)
        }
      }
      return wbout
     },
      /* 重置 */
      handleReset () {
        Object.assign(this.queryParams, {
          startTime: '',
          endTime: '',
          page: 1
        })
        this.resetForm('queryForm');
      },
      /* 查询 */
      handleQuery () {
        this.queryParams.page = 1;
        this.getList();
      },
      /* 返回上一级 */
      handleReturn () {
        this.$emit('handleReturn');
      },
      /* 修改注册时间 */
      handleDateChange (val) {
        const arr = val || ['', ''];
        this.queryParams.startTime = arr[0];
        this.queryParams.endTime = arr[1];
      },
      /* 获取列表数据 */
      getList () {
        const params = { ...this.queryParams };
        delete params.time;
        this.loading = true;
        getIntegral(this.removePropertyOfNullFor0(params)).then(res => {
          if(res.code == 200) {
            const data = res.data || {};
            this.tableData = data.list || [];
            this.total = data.totalCount || 0;
          }
        }).finally(() => {
          this.loading = false;
        })
      }
    },
    async created() {
      await this.getUserDetail();
      this.getList();
    }
  }
</script>
