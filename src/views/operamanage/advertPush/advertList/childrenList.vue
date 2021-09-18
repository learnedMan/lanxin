<style type="text/scss" lang="scss">
  .custom-picker {
    .el-time-spinner {
      .el-time-spinner__wrapper:nth-child(2) {
        display: none;
      }
    }
  }
</style>
<template>
    <div class="xl-children-list">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
      >
        <el-form-item
          label="广告标题:"
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
          <el-button
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
        :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
        :data="tableData"
        border
        tooltip-effect="dark"
        style="width: 100%"
        v-loading="loading"
      >
        <el-table-column
          label="广告标题"
          align="center"
          prop="title"
          showOverflowTooltip
        />
        <el-table-column
          label="广告类型"
          align="center"
          showOverflowTooltip
        >
          <template slot-scope="scope">{{ getLabel(scope.row.type) }}</template>
        </el-table-column>
        <el-table-column
          label="所属广告位"
          align="center"
        >
          <template slot-scope="scope">{{ params.name }}</template>
        </el-table-column>
        <el-table-column
          label="状态"
          align="center"
        >
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.status"
              @change="changeStatus(scope.row)"
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
              @fatherMethod="handleListDelete(scope.row)"
            ></Iconbutton>
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
        :close-on-click-modal="false"
        :visible.sync="dialog.show"
        v-if="dialog.show"
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
            required
          >
            <el-select
              v-model="dialogForm.product_id"
              placeholder="请选择所属产品"
              disabled
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
            label="广告标题:"
            prop="title"
          >
            <el-input
              v-model="dialogForm.title"
              placeholder="请输入广告标题"
              clearable
              style="width: 194px"
            />
          </el-form-item>
          <el-form-item
            label="广告类型:"
            prop="type"
          >
            <el-select
              v-model="dialogForm.type"
              @chnage="dialogForm.extra.url = ''"
              placeholder="请选择广告类型"
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
            label="开始时间:"
            prop="start_time"
          >
            <el-date-picker
              popper-class="custom-picker"
              v-model="dialogForm.start_time"
              type="datetime"
              placeholder="选择开始日期时间"
              align="right"
              format="yyyy-MM-dd HH"
              value-format="yyyy-MM-dd HH:00:00"
              :picker-options="pickerOptionsStart">
            </el-date-picker>
          </el-form-item>
          <el-form-item
            label="结束时间:"
            prop="end_time"
          >
            <el-date-picker
              popper-class="custom-picker"
              ref="endTime"
              v-model="dialogForm.end_time"
              type="datetime"
              placeholder="选择结束日期时间"
              align="right"
              format="yyyy-MM-dd HH"
              value-format="yyyy-MM-dd HH:00:00"
              :picker-options="pickerOptionsEnd">
            </el-date-picker>
            <el-checkbox v-model="dialogForm.unlimited" @change="endAction" style="margin-left: 10px">不限制</el-checkbox>
          </el-form-item>
          <el-form-item
            label="是否允许跳过:"
            prop="extra.allow_skip"
          >
            <el-radio-group v-model="dialogForm.extra.allow_skip">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="广告时长:"
            prop="extra.duration"
          >
            <el-input-number
              v-model="dialogForm.extra.duration"
              :controls="false"
              :precision="0"
              placeholder="请输入时长(单位: 秒)"
              style="width: 194px"
              clearable
            ></el-input-number>
          </el-form-item>
          <el-form-item
            label="广告角标:"
            prop="extra.corner_mark"
          >
            <el-checkbox v-model="dialogForm.extra.corner_mark" true-label="1" false-label="0">显示广告角标,客户端开机广告倒计时或顶部图片是否展示</el-checkbox>
          </el-form-item>
          <el-form-item
            :label="`广告${dialogForm.type === 1? '图片' : '视频'}:`"
            prop="extra.url"
          >
            <upload-single v-model="dialogForm.extra.url" v-if="dialogForm.type === 1"></upload-single>
            <upload-video v-else v-model="dialogForm.extra.url"></upload-video>
          </el-form-item>
          <el-form-item
            label="广告跳转:"
            prop="extra.link.type"
          >
            <el-radio-group v-model="dialogForm.extra.link.type">
              <el-radio v-for="list of linkOptions" :label="list.value" :key="list.value">{{ list.label }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            v-if="dialogForm.extra.link.type === 'outer_link'"
            label="链接地址:"
            prop="extra.link.url"
          >
            <el-input
              v-model="dialogForm.extra.link.url"
              placeholder="请输入链接地址，如：https://www.baidu.com"
              clearable
              style="width: 350px"
            />
          </el-form-item>
          <el-form-item
            v-if="dialogForm.extra.link.type === 'text'"
            label="文字提示:"
            prop="extra.link.text"
          >
            <el-input
              v-model="dialogForm.extra.link.text"
              placeholder="请输入文字提示"
              clearable
              style="width: 194px"
            />
          </el-form-item>
          <el-form-item
            v-if="dialogForm.extra.link.type === 'news'"
            label="新闻ID:"
            prop="extra.link.id"
          >
            <el-input
              v-model="dialogForm.extra.link.id"
              placeholder="请输入新闻ID"
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
      </el-dialog>
    </div>
</template>

<script>
  import { getproduct } from '@/api/manage'
  import { getAdvertChild, addAdvertChild, changeAdvertChild, deleteAdvertChild } from '@/api/operamanage'
  import uploadSingle from '@/components/Upload/uploadSingle.vue'
  import uploadVideo from '@/components/Upload/uploadVideo.vue'

    export default {
      props: {
        params: Object
      },
      components: {
        uploadSingle,
        uploadVideo
      },
      data() {
        const disabledDateStart = time => {
          if(this.dialogForm.end_time) return time.getTime() > new Date(this.dialogForm.end_time).getTime();
          return false
        }
        const disabledDateEnd = time => {
          if(this.dialogForm.start_time) return time.getTime() <= new Date(this.dialogForm.start_time).getTime() - 24 * 60 * 60 * 1000;
          return false
        }
        const startDateValidate = (rule, value, callback) => {
          const end = this.dialogForm.end_time;
          if(!value) return callback(new Error('请选择开始日期!'));
          else if(end && new Date(end).getTime() < new Date(value).getTime()) {
            return  callback(new Error('开始时间不能大于结束时间!'))
          }
          callback()
        }
        const endDateValidate = (rule, value, callback) => {
          const start = this.dialogForm.start_time;
          if(this.dialogForm.unlimited) return callback();
          if(!value) return callback(new Error('请选择结束日期!'));
          else if(start && new Date(start).getTime() > new Date(value).getTime()) {
            return  callback(new Error('结束时间不能小于开始时间!'))
          }
          callback()
        }
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
              label: '图片',
              value: 1
            },
            {
              label: '视频',
              value: 2
            },
          ],
          queryParams: {
            title: '',
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
          pickerOptionsStart: {
            disabledDate: disabledDateStart
          },
          pickerOptionsEnd: {
            disabledDate: disabledDateEnd
          },
          linkOptions: [
            {
              label: '无跳转',
              value: 'none'
            },
            {
              label: '链接',
              value: 'outer_link'
            },
            {
              label: '新闻ID',
              value: 'news'
            }
          ],
          dialogForm: {
            product_id: '',
            title: '',
            type: 1,
            start_time: '',
            end_time: '',
            unlimited: false, // 没有限制
            extra: {
              allow_skip: '1',
              introduction: '',
              corner_mark: '1',
              url: '',
              duration: '',
              link: {
                type: 'none',
                url: '',
                text: '',
                id: ''
              }
            }
          },
          dialogRules: {
            title: [
              { required: true, message: '请输入广告位名称', trigger: 'blur' }
            ],
            type: [
              { required: true, message: '请选择广告类型', trigger: 'change' }
            ],
            start_time: [
              { required: true, validator: startDateValidate, trigger: 'blur' }
            ],
            end_time: [
              { required: true, validator: endDateValidate, trigger: 'blur' }
            ],
            'extra.url': [
              { required: true, message: '请输入广告图片/视频', trigger: 'blur' }
            ],
            'extra.duration': [
              { type: 'number', required: true, message: '请输入广告时长', trigger: 'blur' }
            ],
            'extra.link.url': [
              { required: true, message: '请输入链接地址', trigger: 'blur' }
            ],
            'extra.link.text': [
              { required: true, message: '请输入文字提示', trigger: 'blur' }
            ],
            'extra.link.id': [
              { required: true, message: '请输入新闻id', trigger: 'blur' }
            ],
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
          this.queryParams.page = 1;
          this.getList();
        },
        /* 返回上一级 */
        handleReturn () {
          this.$emit('handleReturn');
        },
        /* 新增广告 */
        handleAdd () {
          this.resetForm('dialogForm');
          this.dialog = {
            title: '新增广告位',
            show: true
          }
          this.dialogForm.product_id = this.params.product_id;
        },
        endAction() {
          this.dialogForm.end_time = ''
          if(this.dialogForm.unlimited) {
            this.$refs['dialogForm'].clearValidate(['end_time']);
          }
        },
        /* 编辑广告 */
        handleEdit (row) {
          this.resetForm('dialogForm');
          this.dialogForm = {
            product_id: this.params.product_id,
            title: row.title,
            type: row.type,
            start_time: row.start_time,
            end_time: row.end_time ?? '',
            unlimited: !row.end_time, // 没有限制
            extra: {
              allow_skip: row.extra.allow_skip,
              introduction: row.extra.introduction,
              corner_mark: row.extra.corner_mark,
              url: row.extra.url,
              duration: row.extra.duration,
              link: {
                type: row.extra.link.type,
                url: row.extra.link.url ?? '',
                text: row.extra.link.text ?? '',
                id: row.extra.link.id ?? ''
              }
            }
          }
          this.dialog = {
            title: '新增广告位',
            show: true,
            id: row.id
          }
        },
        /* 确认新增或编辑 */
        enterDialog () {
          this.$refs.dialogForm?.validate(val => {
            if(val) {
              let promise;
              const id = this.dialog.id;
              const params = { ad_place_id: this.params.ad_place_id, ...this.dialogForm };
              if(id) {
                promise = changeAdvertChild(id, params);
              }else {
                promise = addAdvertChild(params);
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
        handleListDelete (row) {
          const { id, title } = row;
          this.$confirm(`此操作将永久删除这条标题为${title}的广告, 是否继续?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            deleteAdvertChild(id).then(() => {
              this.$message({
                message: '删除成功',
                type: 'success'
              })
              this.getList();
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
        },
        /* 修改状态 */
        changeStatus (row) {
          const { id } = row;
          const params = {
            product_id: this.params.product_id,
            ad_place_id: this.params.ad_place_id,
            title: row.title,
            type: row.type,
            start_time: row.start_time,
            end_time: row.end_time ?? '',
            status: row.status,
            extra: {
              allow_skip: row.extra.allow_skip,
              introduction: row.extra.introduction,
              corner_mark: row.extra.corner_mark,
              url: row.extra.url,
              duration: row.extra.duration,
              link: {
                type: row.extra.link.type,
                url: row.extra.link.url ?? '',
                text: row.extra.link.text ?? '',
                id: row.extra.link.id ?? ''
              }
            }
          }
          changeAdvertChild(id, params).then(() => {
            this.$message.success('修改成功');
            this.getList();
          })
        },
        /* 根据字段显示相应文字 */
        getLabel (val) {
          return this.typeOptions.find(n => n.value === val)?.label ?? ''
        },
        /* 获取列表数据 */
        getList () {
          const { product_id, ad_place_id } = this.params;
          const params = { ...this.queryParams, product_id, ad_place_id };
          this.loading = true;
          getAdvertChild(this.removePropertyOfNullFor0(params)).then(res => {
            this.tableData = res.data || [];
            this.total = res.total;
          }).finally(() => {
            this.loading = false;
          })
        },
      },
      created() {
        this.getProductList();
        this.getList();
      }
    }
</script>
