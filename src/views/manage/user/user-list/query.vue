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
          <el-form-item label="被邀请人注册时间:">
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
        <el-form-item
          prop="mobile"
        >
          <el-input
            v-model="queryParams.textareaValue"
            type="textarea"
            :rows="4"
            placeholder="请输入手机号或者邀请码进行搜索,多个以逗号隔开"
            clearable
            style="width: 900px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item>
           <el-button
            type="primary"
            size="mini"
						v-if="!importFlag"
            @click="handleImport"
          >
            导出
          </el-button>
					<el-button
            type="primary"
            size="mini"
            v-else
          >
						<a :href="importUrl">导出</a>
          </el-button>
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
          label="会员ID"
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
            <el-button
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
            <el-button
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
            <el-button
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
              label="拉黑"
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
  import { getproduct, getUserLists, getUserDetail, editDetail } from '@/api/manage'
  import { disableSendMsg, releaseShutup /* 拉黑用户 */} from '@/api/workbench'
	import {  fileImport } from '@/api/statistics'
  import uploadSingle from '@/components/Upload/uploadSingle.vue'

    export default {
      components: {
        uploadSingle
      },
      data() {
        return {
          productLists: [], // 产品集合
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
            mobile: '',
            textareaValue: '',
            invitationCode: '',
            registerBeginTime: '',
            registerEndTime: '',
            registerTime: ''
          },
          total: 0,
          loading: false,
          tableData: [],
          dialog: {
            title: '编辑用户',
            show: false
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
			computed: {
        importFlag () {
					const { textareaValue,registerTime } = this.queryParams
         return textareaValue || registerTime ? true : false
        },
				importUrl () {
					const { sourceId } = this.queryParams
					let mobile = this.getStr(this.tableData)
					let str = `http://10.30.10.158/adm/fusion/internal/uc/excelUserData?sourceId=${sourceId}&mobile=${mobile}`
					return str
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
        /* 重置 */
        handleReset () {
          this.queryParams.textareaValue = ''
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
				/*字符串拼接*/
				getStr (arr) {
					let str = ''
					arr && arr.map(v=>{
						str += v.mobile + ','
					})
					return str.slice(0,-1)
				},
         /* 导出 */
        handleImport () {
					this.$alert('请搜索你所需要导出的数据', '', {
								confirmButtonText: '确定',
								callback: action => {
									// this.$message({
									// 	type: 'info',
									// 	message: `action: ${ action }`
									// });
								}
							});
        },
        /*提取手机号或者邀请号*/
        getPhone () {
          let  val = this.queryParams.textareaValue,arr = [];
          let phoneCodeVerification = /^[1][3,4,5,7,8][0-9]{9}$/;
          let phone = '',code = ''
          arr = val.split(/,|，|\s+/)
          arr.map(v=>{
              if(phoneCodeVerification.test(v)) {
                phone += v + ','
              }else{
                code += v + ','
              }
          })
          this.queryParams.mobile = phone.slice(0,-1) || ''
          this.queryParams.invitationCode = code.slice(0,-1) || ''
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
        /* 查看积分值 */
        integralValue (row) {
          const { id } = row;
          this.$emit('integralValue', id);
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
        /* 拉黑 */
        handleDelete (row) {
          const { userId, sourceId } = row;
          disableSendMsg({
            sourceId: sourceId,
            userId: userId,
            expiresIn: 7 * 24 * 60 * 60
          }).then(({ code, msg }) => {
            this.$message.success(code == 200? '拉黑成功' : msg);
            if(code == 200) {
              this.getList();
            }
          })
        },
        /* 获取列表数据 */
        getList () {
          this.loading = true;
          this.getPhone()
          const params = { ...this.queryParams };
          delete params.registerTime;
          delete params.textareaValue;
					console.log('params',params)
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
        this.getList();
      }
    }
</script>
