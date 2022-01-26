<style type="text/scss" lang="scss" scoped>

</style>
<template>
    <div>
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
        <el-form-item label="所属产品：">
        <el-select v-model="product_id" placeholder="请选择所属产品">
          <el-option v-for="item in productList" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
        <el-form-item
          label="用户名:"
          prop="nickName"
        >
          <el-input
            v-model="queryParams.nickName"
            placeholder="请输入用户名"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item
          label="用户ID:"
          prop="userId"
        >
          <el-input
            v-model="queryParams.userId"
            placeholder="请输入用户id"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item
          label="手机号:"
          prop="mobile"
        >
          <el-input
            v-model="queryParams.mobile"
            placeholder="请输入手机号"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item
          label="邀请码:"
          prop="invitationCode"
        >
          <el-input
            v-model.number="queryParams.invitationCode"
            placeholder="请输入邀请码"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="注册时间:">
          <el-date-picker
            v-model="queryParams.registerTime"
            type="daterange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            :default-time="['00:00:00', '23:59:59']"
            @change="handleDateChange"
          />
        </el-form-item>
        <el-form-item>
          <el-button v-points = "1500"
            type="primary"
            size="mini"
            @click="goQuery"
          >
            邀请量查询
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
          <el-button v-points = "1500"
            type="primary"
            size="mini"
            @click="exportExcel"
          >
            导出
          </el-button>
        </el-form-item>
      </el-form>
      <el-table
        ref="multipleTable"
        v-loading="loading"
        :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
        :data="tableData"
        border
        tooltip-effect="dark"
        style="width: 100%"
      >
        <el-table-column
          label="用户ID"
          align="center"
          prop="userId"
        />
        <el-table-column
          label="用户名"
          align="center"
          prop="nickName"
          :show-overflow-tooltip="true"
        />
        <el-table-column
          label="手机号"
          align="center"
          prop="mobile"
        />
        <el-table-column
          label="邀请码"
          align="center"
          width="200"
        >
          <template slot-scope="scope">
            <span style="margin-right: 10px">{{ scope.row.invitationCode }}</span>
            <el-button v-points = "1500"
              type="primary"
              size="small"
              @click="invitedRecord(scope.row)"
            >
              邀请记录({{scope.row.invitationCount}})
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="积分值"
          align="center"
        >
          <template slot-scope="scope">
            <el-button v-points = "1500"
              type="text"
              size="small"
              @click="integralValue(scope.row)"
              style="text-decoration: underline"
            >
              {{ scope.row.points }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="登录记录"
          align="center"
        >
          <template slot-scope="scope">
            <el-button v-points = "1500"
              type="primary"
              size="small"
              @click="loginRecord(scope.row)"
            >
              登录记录
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="注册时间"
          align="center"
          prop="createdTime"
        />
        <el-table-column
          label="操作"
          align="center"
          width="250"
        >
          <template slot-scope="scope">
            <!-- 编辑 -->
            <Iconbutton
              icontype="xg"
              label="修改"
              @fatherMethod="handleEdit(scope.row)"
            ></Iconbutton>
            <!-- 拉黑 -->
            <Iconbutton
              icontype="jy"
              label="禁言"
              @fatherMethod="handleDelete(scope.row)"
            ></Iconbutton>
            <!-- 积分 -->
            <Iconbutton
              icontype="jf"
              label="积分调整"
              @fatherMethod="integralAdjust(scope.row)"
            ></Iconbutton>
          </template>
        </el-table-column>
      </el-table>
      <!-- 导出表格 -->
      <el-table
        ref="multipleTable"
        v-loading="loading"
        :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
        :data="tableData"
        border
        id="exportTab"
        tooltip-effect="dark"
        style="width: 100%;display: none"
      >
        <el-table-column
          label="用户ID"
          align="center"
          prop="userId"
        />
        <el-table-column
          label="用户名"
          align="center"
          prop="nickName"
          :show-overflow-tooltip="true"
        />
        <el-table-column
          label="手机号"
          align="center"
          prop="mobile"
        />
        <el-table-column
          label="邀请码"
          align="center"
          width="200"
          prop="invitationCode"
        />
         <el-table-column
          label="邀请人数"
          align="center"
          prop="invitationCount"
        />
        <el-table-column
          label="积分值"
          align="center"
        >
          <template slot-scope="scope">
            <el-button v-points = "1500"
              type="text"
              size="small"
              @click="integralValue(scope.row)"
              style="text-decoration: underline"
            >
              {{ scope.row.points }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="注册时间"
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
      <!-- 编辑用户信息 -->
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
          label-width="100px"
        >
          <el-form-item
            label="姓名"
            prop="nickName"
          >
            <el-input
              clearable
              style="width: 200px"
              v-model="dialogForm.nickName"
            />
          </el-form-item>
          <el-form-item
            label="头像"
            prop="avatar"
          >
            <upload-single v-model="dialogForm.avatar"></upload-single>
          </el-form-item>
          <el-form-item
            label="手机号"
            prop="mobile"
          >
            <el-input
              clearable
              style="width: 200px"
              v-model="dialogForm.mobile"
              disabled
            />
          </el-form-item>
          <el-form-item
            label="邀请码"
            prop="invitationCode"
          >
            <el-input
              clearable
              style="width: 200px"
              v-model="dialogForm.invitationCode"
              disabled
            />
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
  import { getproduct, getUserLists, getUserDetail, editDetail,manualIntegral } from '@/api/manage'
  import { disableSendMsg, releaseShutup /* 拉黑用户 */} from '@/api/workbench'
  import uploadSingle from '@/components/Upload/uploadSingle.vue'
  import FileSaver from 'file-saver'
  import XLSX from 'xlsx'
    export default {
      components: {
        uploadSingle
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
          productList: [], // 产品集合
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
            sourceId: '',
            page: 1,
            limit: 10,
            nickName: '',
            userId: '',
            mobile: '',
            invitationCode: '',
            registerBeginTime: '',
            registerEndTime: '',
            registerTime: ''
          },
          product_id:0,
          total: 0,
          loading: false,
          tableData: [],
          dialog: {
            title: '编辑用户',
            show: false
          },
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
          actionLists: [], //行为集合
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
          dialogForm: {
            id: '',
            avatar: '',
            nickName: '',
            mobile: '',
            invitationCode: ''
          }, // 编辑用户信息
          dialogRules: {
            nickName: [
              { required: true, message: '请输入用户昵称', trigger: 'blur' }
            ]
          }
        }
      },
       watch:{
        product_id(val){
          this.queryParams.sourceId = this.productList.filter(item=>item.id==val)[0].source_id||0;
          let userId = this.$route.query?.userId || ''
          this.queryParams.userId = userId
          this.getList();
        },
      },
      methods: {
        /* 获取产品列表 */
        getProductList () {
          // return getproduct({}).then(res => {
          //   const data = res.data || []
          //   this.productLists = data.map(n => ({
          //     label: n.name,
          //     value: n.source_id
          //   }));
          //   this.queryParams.sourceId = data?.[0]?.source_id;
          // });
           getproduct({}).then((response) => {
            this.productList = response.data;
            this.product_id = this.productList[0].id;
          });
        },
        /* 重置 */
        handleReset () {
          Object.assign(this.queryParams, {
            registerBeginTime: '',
            registerEndTime: '',
            page: 1
          })
          this.resetForm('queryForm');
        },
        /* 查询 */
        handleQuery () {
          this.queryParams.page = 1;
          this.getList();
        },
        /* 修改注册时间 */
        handleDateChange (val) {
          const arr = val || ['', ''];
          this.queryParams.registerBeginTime = arr[0];
          this.queryParams.registerEndTime = arr[1];
        },
        /* 查看邀请记录 */
        invitedRecord (row) {
          const { id } = row;
          this.$emit('invitedRecord', id);
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
         /*邀请量查询*/
        goQuery () {
          //  this.$emit('queryList');
           this.$router.push({ name: 'Query-list'})
        },
        /* 查看积分值 */
        integralValue (row) {
          const { id,userId,sourceId } = row;
          this.$emit('integralValue', id,userId,sourceId);
        },
        /* 查看登录记录 */
        loginRecord (row) {
          const { id } = row;
          this.$emit('loginRecord', id);
        },
        /* 编辑 */
        handleEdit (row) {
          const { id } = row;
          getUserDetail({ id }).then(res => {
            if(res.code == 200) {
              const data = res.data;
              Object.assign(this.dialogForm, {
                id,
                nickName: data.nickName,
                mobile: data.mobile,
                invitationCode: data.invitationCode,
                avatar: data.avatar
              })
              this.dialog.show = true;
              this.$nextTick(() => {
                this.$refs.dialogForm?.clearValidate();
              })
            }
          })
        },
        /* 确认修改用户信息 */
        enterDialog () {
          this.$refs.dialogForm?.validate(val => {
            if(val) {
              editDetail(this.dialogForm).then(res => {
                if(res.code == 200) {
                  this.$message.success(res.msg);
                  this.dialog.show = false;
                }
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
        /*积分调整*/
        integralAdjust(row) {
          const { sourceId,id,userId} = row
          const user_info =  this.$store.state.user.u_info
          this.integralForm.dataId = id + ''
          this.integralForm.sourceId = sourceId
          this.integralForm.userId = userId
          this.integralForm.operateUserId = user_info.id
          this.integralForm.operateUserName = user_info.name
          this.integralDialog.show = true
          console.log('integralForm',this.integralForm)
        },
        /* 拉黑 */
        handleDelete (row) {
          const { userId, sourceId } = row;
          disableSendMsg({
            sourceId: sourceId,
            userId: userId,
            expiresIn: 7 * 24 * 60 * 60
          }).then(({ code, msg }) => {
            this.$message.success(code == 200? '禁言成功' : msg);
            if(code == 200) {
              this.getList();
            }
          })
        },
        /* 获取列表数据 */
        getList () {
          this.loading = true;
          const params = { ...this.queryParams };
          delete params.registerTime;
          params.userId = Number(params.userId)
          // console.log('params',params)
          getUserLists(this.removePropertyOfNullFor0(params)).then(res => {
            if(res.code == 200) {
              const data = res.data;
              this.total = data.totalCount;
              this.tableData = data.list || [];
            }
          }).finally(() => {
            this.loading = false;
          })
        }
      },
      async created() {
        await this.getProductList();
        // this.getList();
      }
    }
</script>
