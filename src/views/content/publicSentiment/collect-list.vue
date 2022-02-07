<style type="text/scss" lang="scss" scoped>
.xl-collect-lists {
  padding: 30px;
}
</style>
<template>
    <div class="xl-collect-lists">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
      >
      <el-form-item
          label="订阅号/来源:"
          prop="keyword"
        >
          <el-input
            v-model="queryParams.keyword"
            placeholder="请输入关键字"
            clearable
            size="small"
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item
          label="状态:"
          prop="is_valid"
        >
          <el-select
            v-model="queryParams.is_valid"
            size="small"
            placeholder="请选择状态"
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
        <el-form-item label="创建时间:" prop="createDate">
          <el-date-picker
            v-model="queryParams.createDate"
            type="daterange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd"
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
          label="ID"
          align="center"
          prop="id"
        />
        <el-table-column
          label="订阅号"
          align="center"
          prop="account"
          showOverflowTooltip
        >
        </el-table-column>
        <el-table-column
          label="来源"
          align="center"
          prop="source"
        />
        <el-table-column
          label="状态"
          align="center"
        >
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.is_valid"
              @change="changeStatus(scope.row)"
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
        <el-table-column
          label="创建时间"
          align="center"
          prop="created_at"
        />
        <el-table-column label="操作" align="center" width="260">
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
            <!-- 查看 -->
            <!-- <Iconbutton
              icontype="ckxq"
              label="详情"
              @fatherMethod="watchList(scope.row)"
            ></Iconbutton> -->
            <!-- 发布 -->
            <!-- <Iconbutton
              icontype="fb"
              label="栏目"
              @fatherMethod="handlePublish(scope.row)"
            ></Iconbutton> -->
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
      <!-- 发布栏目 -->
      <el-dialog
        width="600px"
        :close-on-click-modal="false"
        :title="publishDialog.title"
        :visible.sync="publishDialog.show"
      >
        <el-form
          ref="publishForm"
          :model="publishDialog.form"
          :rules="publishDialog.rules"
        >
          <el-form-item
            label-width="120px"
            label="栏目"
            prop="channel_id"
          >
            <el-cascader
              filterable
              v-model="publishDialog.form.channels"
              style="width: 350px"
              :options="channelsList"
              :props="cascaderOption"
              clearable
            />
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button v-points = "1500" @click="publishDialog.show = false">
            取 消
          </el-button>
          <el-button v-points = "1500"
            type="primary"
            @click="enterPublishDialog"
          >
            确 定
          </el-button>
        </div>
      </el-dialog>
      <!-- 新增编辑 -->
      <el-dialog
        width="800px"
        top="10vh"
        :close-on-click-modal="false"
        :title="dialog.title"
        :visible.sync="dialog.show"
      >
        <el-form
          ref="dialogForm"
          :model="dialog.form"
          :rules="dialog.rules"
          label-width="120px"
          size="small"
        >
          <el-form-item  label="稿件来源" prop="extra.type">
            <el-radio-group v-model="dialog.form.extra.type">
                <el-radio :label="'wechat'">微信</el-radio>
                <el-radio :label="'weibo'">微博</el-radio>
                <el-radio :label="'media'">客户端/网站/报纸</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="采集名称:"
            prop="name"
          >
            <el-input
              v-model="dialog.form.name"
              placeholder="请输入采集名称"
              clearable
              size="small"
              style="width: 200px"
            />
          </el-form-item>
           <el-form-item
            label="来源名称:"
            prop="source"
          >
            <el-input
              v-model="dialog.form.source"
              placeholder="请输入来源名称"
              clearable
              size="small"
              style="width: 200px"
            />
          </el-form-item>
           <el-form-item
            label="来源logo:"
            prop="extra.logo"
          >
            <upload-single v-model="dialog.form.extra.logo"></upload-single>
          </el-form-item>
          <el-form-item
            label="来源账号:"
            prop="account"
          >
            <el-input
              v-model="dialog.form.account"
              placeholder="请输入来源名称"
              clearable
              size="small"
              style="width: 200px"
            />
          </el-form-item>
          <el-form-item
            label-width="120px"
            label="分发栏目"
            prop="channel_id"
          >
          <el-cascader
            filterable
            v-model="dialog.form.channel_id"
            style="width: 200px"
            :options="channelsList"
            :props="cascaderOption"
            clearable
          />
        </el-form-item>
          <el-form-item
            label="简介:"
            prop="extra.introduction"
          >
            <el-input
              v-model="dialog.form.extra.introduction"
              :rows="6"
              type="textarea"
              placeholder="请输入简介"
              clearable
              size="small"
              style="width: 400px"
            />
          </el-form-item>
          <el-form-item  label="默认发布" prop="extra.auto_publish">
            <el-radio-group v-model="dialog.form.extra.auto_publish">
                <el-radio :label="'1'">是</el-radio>
                <el-radio :label="'0'">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item  label="是否启用" prop="extra.is_valid">
            <el-radio-group v-model="dialog.form.extra.is_valid">
                <el-radio :label="'1'">是</el-radio>
                <el-radio :label="'0'">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button v-points = "1500" @click="dialog.show = false">取 消</el-button>
          <el-button v-points = "1500" type="primary" @click="enterChangeDialog">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import { getproduct, getChannels, cateloglist, stylelist } from '@/api/manage'
  import Cropper from '@/components/Cropper'
  import uploadSingle from '@/components/Upload/uploadSingle.vue'
  import { getCollectList,changeCollectStatus,deleteCollect, changeCollect, publishTopic, getScriptDetail,addCollect } from '@/api/content'
  import { mapGetters } from 'vuex'
    export default {
      name: 'collectList',
      components: {
        Cropper,
        uploadSingle
      },
      computed: {
        /* 当前已有的标签页 */
        visitedViews() {
          return this.$store.state.tagsView.visitedViews
        },
      },
      data() {
        const coverValidator = (rule, value, callback) => {
          const count = this.imgCount
          if (!Array.isArray(value) || value.length === 0) {
            callback(new Error('请上传封面图片'))
          } else if (!value.slice(0, count).every(n => n.path)) {
            callback(new Error(`请上传${count}张封面图片`))
          } else {
            callback()
          }
        }
        return {
          queryParams: {
            // product_id: '', // 所属产品
            // type: 'topic',
            is_valid: '',
            site_id: '',
            keyword: '',
            createDate: '',
            start_date: '',
            endd_ate: '',
            page: 1,
            pageSize: 10
          },
          productLists: [], // 产品列表
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
          loading: false,
          total: 0,
          tableData: [],
          cascaderOption: {
            checkStrictly: true, // 是否强制父子不关联
            emitPath: false, // 返回值是否为数组
            value: 'id', // 选项值
            label: 'name', // 显示值
            multiple: false // 多选
          }, // 级联选择器配置
          channelsList: [],
          publishDialog: {
            show: false,
            title: '发布栏目',
            form: {
              channels: '',
              special_channel_ids: ''
            },
            rules: {
              channels: [{ required: true, message: '请选择栏目', trigger: 'change' }]
            }
          },
          imgCount: 1,
          catalogOptions: [], // 模板化栏目数据
          styleOptions: [], // 模板化样式
          dialog: {
            show: false,
            title: '新增采集',
            form: {
              name: '', //采集名称
              source: '', //来源名称
              account: '',
              channel_id: '', //分发栏目id
              extra: {
                type: '', //稿件类型
                auto_publish: '', //默认发布
                is_valid: '', //是否启用
                introduction: '',
                logo: '', //来源logo
              }
            },
            rules: {
              name: [
                { required: true, message: '请输入采集名称', trigger: 'blur' }
              ],
              source: [
                { required: true, message: '请输入来源名称', trigger: 'blur' }
              ],
              account: [
                { required: true, message: '请输入来源账号', trigger: 'blur' }
              ],
              channel_id: { required: true, message: '请选择栏目', trigger: 'change' },
              'extra.is_valid': [
                { required: true, message: '请选择是否启用', trigger: 'change' }
              ],
              'extra.auto_publish': [
               { required: true, message: '请选择是否默认发布', trigger: 'blur' }
              ],
              'extra.logo': [
                { required: true, message: '请选择来源logo', trigger: 'change' }
              ]
            }
          }
        }
      },
      computed: {
      /* 站点id */
        site_id() {
         return this.$store.state.user.u_info.site_id
        },
        ...mapGetters([
        'u_info'
        ])
      },
      methods: {
        /* 修改时间 */
        handleDateChange (val) {
          const arr = val || ['', ''];
          this.queryParams.start_date = arr[0];
          this.queryParams.endd_ate = arr[1];
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
          Object.assign(this.dialog, {
            title: '新增采集',
            show: true,
            id: '',
            form: {
              name: '', //采集名称
              source: '', //来源名称
              account: '',
              channel_id: '', //分发栏目id
              extra: {
                type: 'wechat', //稿件类型
                auto_publish: '1', //默认发布
                is_valid: '1', //是否启用
                introduction: '',
                logo: '', //来源logo
              }
            },
          })
        },
        /* 修改状态 */
        changeStatus (row) {
          const { is_valid, id } = row;
          changeCollectStatus({
            status: is_valid,
            ids: `${id}`
          }).then(() => {
            this.$message.success('修改状态成功')
            this.getList();
          })
        },
        /* 编辑 */
        handleEdit (row) {
          this.resetForm('dialogForm');
          console.log('row',row)
          Object.assign(this.dialog, {
            title: '编辑采集',
            show: true,
            id: row.id,
            form: {
              name: row.name, //采集名称
              source: row.source, //来源名称
              account: row.account,
              channel_id: row.channel_id, //分发栏目id
              extra: {
                type: row.type, //稿件类型
                auto_publish: String(row.auto_publish), //默认发布
                is_valid: String(row.is_valid), //是否启用
                introduction: row.introduction,
                logo: row.logo, //来源logo
              }
            },
          })
          // this.catalogchange(row.extra.template_style, false)
        },
        /* 封面图片数量变化 */
        handleCoverChange (val) {
          this.imgCount = this.template_styleLists.find(n => n.value === val)?.count || 1;
        },
        /* 确认新增或编辑采集 */
        enterChangeDialog () {
          this.$refs.dialogForm?.validate(val => {
            if(val) {
              const id = this.dialog.id;
              const params = { ...this.dialog.form,...this.dialog.form.extra}
              params.zone_id = this.u_info.zone_id
              params.site_id = this.u_info.site_id
              delete params.extra
              console.log('this.dialog',this.dialog.form)
              console.log('params',params)
              let promise = id? changeCollect(id, params) : addCollect(params);
              promise.then(() => {
                this.$message.success(`${this.dialog.title}成功!`);
                this.dialog.show = false;
                this.getList();
              })
            }
          })
        },
        /* 删除专题 */
        handleDelete (row) {
          const { id } = row;
          this.$confirm(`此操作将永久删除这条ID为${id}的订阅号, 是否继续?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            deleteCollect(id).then(() => {
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
        /* 查看详情 */
        watchList (row) {
          const { id } = row;
          /*const fullPath = this.$route.fullPath
          const view = this.visitedViews.find(n => n.fullPath === fullPath)
          this.$router.push({ name: 'ProjectDetail', params: { id } })
          this.$store.dispatch('tagsView/updateVisitedView', {
            ...view,
            replacePath: view.path
          })*/
          this.$emit('watch-detail', id);
        },
        /* 发布栏目 */
        async handlePublish (row) {
          this.resetForm('publishForm');
          const { id, extra: { special_channel_script_id } } = row;
          let channel = [];
          if(special_channel_script_id) {
            await getScriptDetail(special_channel_script_id).then(res => {
              channel = (res.channel || []).map(n => n.id);
            })
          }
          Object.assign(this.publishDialog, {
            show: true,
            form: {
              channels: channel,
              special_channel_ids: id
            }
          })
        },
        /* 确认发布栏目 */
        enterPublishDialog () {
          this.$refs.publishForm?.validate(val => {
            if(val) {
              const form = this.publishDialog.form;
              publishTopic({
                channels: form.channels.join(),
                special_channel_ids: form.special_channel_ids,
                type: 'topic'
              }).then(() => {
                this.$message.success('发布成功');
                this.publishDialog.show = false
                this.getList();
              })
            }
          })
        },
        /* 获取列表数据 */
        getList () {
          this.queryParams.site_id = this.u_info.site_id
          const params = { ...this.queryParams };
          delete params.createDate;
          this.loading = true;
          console.log('params',params)
          getCollectList(this.removePropertyOfNullFor0(params)).then(res => {
            console.log('res',res.data)
            this.tableData = (res.data || []).map(n => ({
              ...n,
            }));
            this.total = res.total || 0;
          }).finally(() => {
            this.loading = false;
          })
        },
        /*
        * 获取栏目列表
        * */
        getChannels() {
          getChannels({
            with_special_channels: 'topic'
          }).then(res => {
            this.channelsList = res.map(n => ({
              ...n,
              disabled: true
            }));
            this.changeChannelName(this.channelsList)
          })
        },
        /* 获取模板化栏目数据 */
        getCatelog () {
          cateloglist().then(res => {
            this.catalogOptions = res.data.list;
          })
        },
        yulanfn(){
          window.open(this.viewurl + this.dialog.form.extra.template_json_id)
        },
      },
      async created() {
        this.getList();
        this.getChannels();
        this.getCatelog();
        console.log('u_info',this.u_info)
      }
    }
</script>
