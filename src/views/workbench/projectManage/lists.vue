<style type="text/scss" lang="scss" scoped>
.xl-project-lists {
  padding: 30px;
}
</style>
<template>
    <div class="xl-project-lists">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
      >
        <el-form-item
          label="所属产品:"
        >
          <el-select
            v-model="queryParams.product_id"
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
          label="标题:"
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
          label="启用状态:"
          prop="status"
        >
          <el-select
            v-model="queryParams.status"
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
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
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
          label="专题ID"
          align="center"
          prop="id"
        />
        <el-table-column
          label="标题"
          align="center"
          prop="name"
          showOverflowTooltip
        >
        </el-table-column>
        <el-table-column
          label="专题类型"
          align="center"
          prop="topic_type_label"
        />
        <el-table-column
          label="状态"
          align="center"
        >
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.status"
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
            <Iconbutton
              icontype="ckxq"
              label="详情"
              @fatherMethod="watchList(scope.row)"
            ></Iconbutton>
            <!-- 发布 -->
            <Iconbutton
              icontype="fb"
              label="栏目"
              @fatherMethod="handlePublish(scope.row)"
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
          <el-button @click="publishDialog.show = false">
            取 消
          </el-button>
          <el-button
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
          <el-form-item
            label="标题:"
            prop="name"
          >
            <el-input
              v-model="dialog.form.name"
              placeholder="请输入标题"
              clearable
              size="small"
              style="width: 200px"
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
          <!-- 封面样式 -->
          <el-form-item
            label="封面样式:"
            prop="extra.template_style"
          >
            <el-radio-group
              size="small"
              v-model="dialog.form.extra.template_style"
              @change="handleCoverChange"
            >
              <el-radio
                v-for="list of template_styleLists"
                :key="list.value"
                :label="list.value"
                style="line-height: 32px"
              >
                <el-popover
                  placement="top"
                  trigger="hover"
                >
                  <span slot="reference">{{ list.label }}</span>
                  <img :src="require(`@/assets/media/${list.img}`)" alt="" width="300px" />
                </el-popover>
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 封面图片 -->
          <el-form-item
            prop="extra.cover"
          >
            <cropper
              v-model="dialog.form.extra.cover"
              :count="imgCount"
            />
          </el-form-item>
          <el-form-item
            label="背景图:"
            prop="extra.background"
          >
            <upload-single v-model="dialog.form.extra.background"></upload-single>
          </el-form-item>
          <el-form-item
            label="多级专题:"
            prop="extra.topic_type"
          >
            <el-switch v-model="dialog.form.extra.topic_type" active-value="2" inactive-value="1"></el-switch>
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button @click="dialog.show = false">取 消</el-button>
          <el-button type="primary" @click="enterChangeDialog">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import { getproduct, getChannels } from '@/api/manage'
  import Cropper from '@/components/Cropper'
  import uploadSingle from '@/components/Upload/uploadSingle.vue'
  import { getTopicList, addTopic, changeTopic, changeTopicStatus, deleteTopic, publishTopic, getScriptDetail } from '@/api/content'

    export default {
      name: 'ProjectLists',
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
            product_id: '', // 所属产品
            type: 'topic',
            status: '',
            keyword: '',
            createDate: '',
            startdate: '',
            enddate: '',
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
            multiple: true // 多选
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
          template_styleLists: [
            {
              label: '纯文本',
              value: '240',
              count: 1,
              img: '1402-240.png'
            },
            {
              label: '三图下文本',
              value: '230',
              count: 3,
              img: '1402-230.png'
            },
            {
              label: '三图上文本',
              value: '231',
              count: 3,
              img: '1402-231.png'
            },
            {
              label: '左图+标题1',
              value: '220',
              count: 1,
              img: '1402-220.png'
            },
            {
              label: '左图+标题2',
              value: '222',
              count: 1,
              img: '1402-222.png'
            },
            {
              label: '右图+标题',
              value: '221',
              count: 1,
              img: '1402-221.png'
            },
            {
              label: '播放器2',
              value: '211',
              count: 1,
              img: '1402-211.png'
            },
            {
              label: '播放器3',
              value: '212',
              count: 1,
              img: '1402-212.png'
            },
            {
              label: '大图1',
              value: '200',
              count: 1,
              img: '1402-200.png'
            },
            {
              label: '大图2',
              value: '201',
              count: 1,
              img: '1402-201.png'
            },
            {
              label: '大图3',
              value: '202',
              count: 1,
              img: '1402-202.png'
            },
            {
              label: '大图4',
              value: '203',
              count: 1,
              img: '1402-203.png'
            },
            {
              label: '大图7',
              value: '206',
              count: 1,
              img: '1402-206.png'
            }
          ],
          imgCount: 1,
          dialog: {
            show: false,
            title: '新增专题',
            form: {
              name: '',
              status: 1,
              extra: {
                template_style: '240',
                cover: [],
                topic_type: 1, // 1简单聚合2多模块聚合
                introduction: '',
                background: ''
              }
            },
            rules: {
              name: [
                { required: true, message: '请输入标题', trigger: 'blur' }
              ],
              'extra.template_style': [
                { required: true, message: '请选择封面样式', trigger: 'change' }
              ],
              'extra.cover': [
                { validator: coverValidator, trigger: 'change' }
              ],
              'extra.background': [
                { required: true, message: '请选择背景图片', trigger: 'change' }
              ]
            }
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
        /* 修改时间 */
        handleDateChange (val) {
          const arr = val || ['', ''];
          this.queryParams.startdate = arr[0];
          this.queryParams.enddate = arr[1];
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
            title: '新增专题',
            show: true,
            id: ''
          })
        },
        /* 修改状态 */
        changeStatus (row) {
          const { status, id } = row;
          changeTopicStatus({
            status,
            ids: `${id}`
          }).then(() => {
            this.$message.success('修改状态成功')
            this.getList();
          })
        },
        /* 编辑 */
        handleEdit (row) {
          this.resetForm('dialogForm');
          Object.assign(this.dialog, {
            title: '编辑专题',
            show: true,
            id: row.id,
            form: {
              name: row.name,
              status: row.status,
              extra: {
                template_style: row.extra.template_style,
                cover: row.extra.cover,
                topic_type: row.extra.topic_type,
                introduction: row.extra.introduction,
                background: row.extra.background
              }
            }
          })
        },
        /* 封面图片数量变化 */
        handleCoverChange (val) {
          this.imgCount = this.template_styleLists.find(n => n.value === val)?.count || 1;
        },
        /* 确认新增或编辑专题 */
        enterChangeDialog () {
          this.$refs.dialogForm?.validate(val => {
            if(val) {
              const id = this.dialog.id;
              const params = {
                name: this.dialog.form.name,
                status: this.dialog.form.status,
                product_id: this.queryParams.product_id,
                type: 'topic',
                extra: {
                  ...this.dialog.form.extra,
                  cover: this.dialog.form.extra.cover.slice(0, this.imgCount)
                }
              }
              let promise = id? changeTopic(id, params) : addTopic(params);
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
          this.$confirm(`此操作将永久删除这条ID为${id}的专题, 是否继续?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            deleteTopic(id).then(() => {
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
          const { id, extra: { topic_script_id } } = row;
          let channel = [];
          if(topic_script_id) {
            await getScriptDetail(topic_script_id).then(res => {
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
          const params = { ...this.queryParams };
          delete params.createDate;
          this.loading = true;
          getTopicList(this.removePropertyOfNullFor0(params)).then(res => {
            this.tableData = (res.data || []).map(n => ({
              ...n,
              topic_type_label: n.extra.topic_type == 2? '多模块聚合' : '简单聚合'
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
        }
      },
      async created() {
        await this.getProductList();
        this.getList();
        this.getChannels();
      }
    }
</script>
