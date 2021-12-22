<style type="text/scss" lang="scss" scoped>
  .xl-media-all {
    min-height: 600px;
    .onLineImg{
      img{
        transform: rotate(180deg);
      }
    }
  }
</style>
<template>
  <div class="xl-media-all" id="mediaAll">
    <div class="search">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
      >
        <el-form-item
          label="稿件名称:"
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
          label="稿件类型:"
          prop="type"
        >
          <el-select
            v-model="queryParams.type"
            size="small"
            placeholder="请选择类型"
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
          <el-button v-points = "1500"
            type="success"
            size="mini"
            :disabled="selection.length === 0"
            @click="handlePublish"
          >
            批量发布
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
    </div>
    <el-table
      ref="multipleTable"
      id="exportTab"
      v-loading="loading"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: 100%;overflow: auto;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        min-width="3%"
      />
      <el-table-column
      v-if="!isMobile"
        label="稿件ID"
        align="center"
        prop="id"
        min-width="5%"
      />
      <el-table-column
      v-if="!isMobile"
        label="稿件封面"
        align="center"
        prop="id"
        min-width="8%"
      >
        <template slot-scope="scope">
          <el-image
            lazy
            style="width: 70px; height: 45px"
            :src="scope.row.cover || useravatar"
            :preview-src-list="[scope.row.cover || useravatar]"
            fit="contain"
          >
            <img slot="error" :src="useravatar" alt="" style="width: 100%;height: 100%">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column
        label="稿件标题"
        align="center"
        min-width="30%"
        prop="title"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          <el-button v-points = "1500" type="text" @click="handleWatch(scope.row)" class="watch-detail-btn">{{ scope.row.title }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="稿件类型"
        align="center"
        min-width="7%"
        prop="type"
      />
      <el-table-column
      v-if="!isMobile"
        label="编辑"
        align="center"
        min-width="6%"
        prop="author_name"
        :show-overflow-tooltip="true"
      />
      <el-table-column
      v-if="!isMobile"
        label="作者"
        align="center"
        min-width="6%"
        prop="editor_name"
        :show-overflow-tooltip="true"
      />
      <el-table-column
      v-if="!isMobile"
        label="发布栏目"
        align="center"
        prop="id"
        min-width="9%"
      >
        <template slot-scope="scope">
          <el-button v-points = "1500"
            type="primary"
            size="mini"
            @click="handleListWatch(scope.row)"
          >
            查看
            <el-popover
            placement="top"
            trigger="hover"
          >
            <span slot="reference" style="display: inline-block;">{{scope.row.news | totalNum}}</span>
            <div v-for="(item,index) in formatText(scope.row.channel,scope.row.news)" 
            :style="{
              color: item.status == 1 ? '#1890ff' : '#606266',
              lineHeight: '25px'
            }"
            :key="index">{{item.name}}</div>
          </el-popover>
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
      v-if="!isMobile"
        label="更新时间"
        align="center"
        prop="updated_at"
        min-width="8%"
      />
      <el-table-column
        label="操作"
        align="center"
        min-width="25%"
      >
        <template slot-scope="scope">
          <div class="verify-table-action">
            <!-- 查看 -->
            <Iconbutton
              icontype="ckxq"
              label="查看详情"
              @fatherMethod="handleWatch(scope.row)"
            ></Iconbutton>
            <!-- 编辑 -->
            <Iconbutton
              icontype="xg"
              label="修改"
              @fatherMethod="handleEdit(scope.row)"
            ></Iconbutton>
             <!-- 一键上线 -->
            <Iconbutton
              v-if="onLineOrOffline(scope.row.news)"
              class="onLineImg"
              icontype="xx"
              label="上线"
              @fatherMethod="handleOnline(scope.row)"
            ></Iconbutton>
            <!-- 一键下线 -->
            <Iconbutton
              v-else
              icontype="xx"
              label="下线"
              @fatherMethod="handleOffline(scope.row)"
            ></Iconbutton>
            <!-- 删除 -->
            <Iconbutton
              icontype="sc"
              label="删除"
              @fatherMethod="handleListDelete(scope.row)"
            ></Iconbutton>
            <!-- 操作记录 -->
            <Iconbutton
              icontype="czjl"
              label="操作记录"
              @fatherMethod="handleHistory(scope.row)"
            ></Iconbutton>
            <!-- 复制 -->
            <Iconbutton
              icontype="fz"
              label="复制"
              @fatherMethod="handleListCopy(scope.row)"
            ></Iconbutton>
            <!-- 发布 -->
            <Iconbutton
              icontype="fb"
              label="栏目"
              @fatherMethod="handleDialogShow('publish', scope.row)"
            ></Iconbutton>
            <!-- 预览 -->
            <Iconbutton
              icontype="yl"
              label="预览"
              @fatherMethod="handlePreview(scope.row)"
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
    <!-- 批量或单个发布栏目 -->
    <el-dialog
      width="600px"
      :title="dialog.title"
      :visible.sync="dialog.show"
      v-if="dialog.show"
    >
      <el-form
        ref="dialogForm"
        :model="dialog.form"
        :rules="dialogRules"
      >
        <el-form-item
          label-width="120px"
          label="栏目"
          prop="channel_id"
        >
          <el-cascader
            filterable
            v-model="dialog.form.channel_id"
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
        <el-button v-points = "1500" @click="closeDialog">
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
    <!-- 查看历史版本 -->
    <el-dialog
      width="700px"
      title="操作记录"
      :visible.sync="history.show"
      v-if="history.show"
    >
      <version-history :id="history.id" type="script"></version-history>
    </el-dialog>
  </div>
</template>

<script>
import { getScripts, deleteScript, PatchScript, batchPublishScript, copyScript, offlineNews,changeNewsStatus } from '@/api/content'
import { getChannels } from '@/api/manage'
import VersionHistory from '@/views/content/mediaAssets/components/versionHistory'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  name: 'All-media',
  components: {
    VersionHistory
  },
  data() {
    return {
      queryParams: {
        keyword: '',
        type: '',
        startdate: '',
        enddate: '',
        pageSize: 50,
        page: 1
      },
      loading: false,
      total: 0, // 总数
      scrollTop: 0, // 滚动位置
      dateValue: '',
      typeOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '新闻',
          value: 'news'
        },
        {
          label: '图集',
          value: 'album'
        },
        {
          label: '视频',
          value: 'video'
        },
        {
          label: '外链',
          value: 'outer_link'
        }
      ], // 稿件类型
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
      useravatar: require('@/assets/c_images/useravatar.jpg'), // 默认头像
      dialog: {
        show: false,
        multiple: false, // 批量单选  单个多选
        title: '发布栏目',
        form: {
          channel_id: '',
          ids: ''
        }
      },
      dialogRules: {
        channel_id: { required: true, message: '请选择栏目', trigger: 'change' }
      },
      cascaderOption: {
        checkStrictly: true, // 是否强制父子不关联
        emitPath: false, // 返回值是否为数组
        value: 'id', // 选项值
        label: 'name', // 显示值
        multiple: true // 多选
      }, // 级联选择器配置
      channelsList: [], // 栏目列表
      selection: [], // 表格选中项
      history: {
        show: false,
        id: ''
      }
    }
  },
  activated() {
    let id = this.$route.query?.id || ''
    this.queryParams.keyword = id
    this.getList()
  },
  beforeRouteLeave(to, from, next) {
      // 离开组件时保存滚动位置
      // 注意, 此时需调用路由守卫`beforeRouterLeave`而非生命周期钩子`deactivated`
      // 因为, 此时利用`deactivated`获取的 DOM 信息已经是新页面得了
      this.scrollTop = document.documentElement.scrollTop;
      next();
  },
  created() {
    let id = this.$route.query?.id || ''
    this.queryParams.keyword = id
    this.getList()
    this.getChannels()
    this.defaultDate()
  },
  filters: {
    totalNum(news) {
      let l = news.filter(v => v.status == 1) || []
      let str = `(${l.length}/${news.length})`
      return news.length ? str : ''
    },
  },
  methods: {
    /*
      * 搜索时间变化
      * */
    handleDateChange(val) {
      const arr = val || ['', '']
      this.queryParams.startdate = arr[0]
      this.queryParams.enddate = arr[1]
    },
    //默认时间
    defaultDate() {
       var dt = new Date();
       dt.setMonth( dt.getMonth()-12 );
       let t1 = dt.toLocaleString()
       let arr = t1.trim().split(" ")
       let time = arr[0].replace(/\//g,"-")
       let str = time + ' 00:00:00'
       let time2 = this.formatDate()
       this.queryParams.startdate = str
       this.queryParams.enddate = time2
       this.dateValue = [str,time2]
		},
    onLineOrOffline(news) {
      let stuat = news.every(v => v.status == 0)
      return stuat
    },
    formatDate() {
			var date = new Date();
			var YY = date.getFullYear() + '-'; 
			var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'; 
			var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()); 
			var str = YY + MM + DD + ' 00:00:00'
      return str
		},
    formatText(channel,news) {
    //定时发布 5 已下线2  已上线1 待审核0
      let statusObj = {
        '0': '待审核',
        '1': '已上线',
        '2': '已下线',
        '5': '待定时发布'
      }
      let arr = (news || []).map((v,index) =>{
        let status = v.status
        let obj = (channel || []).find(k =>{
          if(v.channel_id == k.id) {
            return k.name
          }
        })
        let statusText = statusObj[status]
        let name = `${obj.name}(${statusText})`
        return { status,name}
      })
      return arr
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
    /*
      * 重置搜索
      * */
    handleReset() {
      this.dateValue = ''
      Object.assign(this.queryParams, {
        startdate: '',
        type: '',
        keyword: '',
        enddate: '',
        page: 1
      })
      // this.resetForm('queryForm')
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
      this.$router.push({ name: 'Add-media', query: { redirect: 'All-media' } })
    },
    /*
      * 批量发布
      * */
    handlePublish() {
      this.handleDialogShow()
    },
    /*
      * 获取表格数据
      * */
    getList() {
      this.loading = true
      this.selection = []
      this.tableData = []
      getScripts(this.removePropertyOfNull(this.queryParams)).then(res => {
        this.tableData = (res.data || []).map(item => {
          const type = this.typeOptions.find(n => item.type === n.value)
          const cover = item.cover[0]
          /* {
              title: '', // 稿件标题
              type: '', // 稿件类型
              id: '', // 稿件id
              cover: '', // 图片(Array)
              author_name: '', // 作者
              status: '', // 状态
              created_at: '', // 创建时间
            }*/
          return {
            ...item,
            type: type && type.label || '',
            cover: cover && cover.path || '' // 图片
          }
        })
        this.total = res.total
        this.$nextTick(() => {
		      setTimeout(() => {
		          document.documentElement.scrollTop = this.scrollTop
		      })
		})
      }).finally(() => {
        this.loading = false
      })
    },
    /*
      * 列表选择框变化
      * */
    handleSelectionChange(arr) {
      this.selection = arr.map(n => n.id)
    },
    /*
      * 查看栏目
      * */
    handleListWatch(row) {
      this.$router.push(`/content/mediaAssets/watch-column?id=${row.id}&redirect=All-media`)
    },
    /* 复制稿件 */
    handleListCopy (row) {
      const { id, title } = row;
      copyScript(id, {
        title: `[副本]${title}`
      }).then(({ id, message }) => {
        if(id) {
          this.getList();
          this.$router.push({ name: 'Add-media', query: { id, redirect: 'All-media' }})
          this.$message.success('复制成功')
        }else {
          this.$message.warning(message)
        }
      })
    },
    /*
    * 编辑
    * */
    handleEdit(row) {
      const { id, news } = row;
      //if(news.some(n => n.status === 1)) return this.$message.warning('该文稿下存在已发布的新闻，请点击“一键下线”按钮下线所有新闻后再进行编辑')
      this.$router.push({ name: 'Add-media', query: { id, redirect: 'All-media' }})
    },
    /* 预览 */
    handlePreview (row) {
      const { id } = row;
      this.$router.push({ name: 'Preview', query: { id, type: 'scripts' }})
    },
    /* 查看历史记录 */
    handleHistory (row) {
      const { id } = row;
      this.history = {
        show: true,
        id
      }
    },
    /* 一键下线 */
    handleOffline (row) {
      const { id } = row;
      this.$confirm(`此操作将下线该文稿下所有新闻, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        offlineNews(id).then(({ message, status_code }) => {
          this.$message({
            message: message,
            type: status_code === 200? 'success' : 'warning'
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
    /*一键上线*/
    handleOnline(row) {
      let list = row.news,str = ''
      list.map(v=>{
        str+= v.id + ','
      })
      let ids = str.slice(0,-1)
      let params = { ids,status: 1}
      this.$confirm(`此操作将上线该文稿下所有新闻, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        changeNewsStatus(params).then(() => {
          this.$message({
            message: '上线成功',
            type:'success'
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
    /* 查看详情 */
    handleWatch (row) {
      const { id } = row;
      this.$router.push({ name: 'Add-media', query: { id, disabled: '1' } })
    },
    /*
      * 列表删除
      * */
    handleListDelete(row) {
      const { id } = row
      this.$confirm(`此操作将永久删除这条稿件id为${id}的明细, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteScript(id).then(() => {
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
      * 弹框显示
      * */
    handleDialogShow(ident, row) {
      let id; let channel_id = []
      const isPublish = ident === 'publish' // 是否为列表发布
      if (isPublish) {
        channel_id = row.channel.map(n => n.id).sort((a, b) => b - a)
        id = row.id
      } else {
        id = this.selection
      }
      this.cascaderOption = {
        checkStrictly: true, // 是否强制父子不关联
        emitPath: false, // 返回值是否为数组
        value: 'id', // 选项值
        label: 'name', // 显示值
        multiple: isPublish // 多选
      }
      Object.assign(this.dialog, {
        show: true,
        title: isPublish ? '发布栏目' : '批量发布栏目',
        form: {
          channel_id,
          ids: id
        }
      })
    },
    /*
      * 关闭弹框
      * */
    closeDialog() {
      this.dialog.show = false
    },
    /*
      * 弹框确认
      * */
    enterDialog() {
      const ids = this.dialog.form.ids
      const isArray = Array.isArray(ids)
      const channels = this.dialog.form.channel_id
      this.$refs.dialogForm.validate(val => {
        if (val) {
          // 多个稿件关联到单个栏目
          if (isArray) {
            batchPublishScript({
              ids: ids.join(),
              channel_id: channels
            }).then(() => {
              this.$message.success('批量发布成功');
              this.dialog.show = false;
              this.getList()
            })
          } else {
            // 单个稿件关联到多个栏目
            PatchScript(ids, {
              channels: channels.join()
            }).then(() => {
              this.$message({
                message: '发布成功',
                type: 'success'
              })
              this.dialog.show = false
              this.getList()
            })
          }
        }
      })
    },
    /*
      * 获取栏目列表
      * */
    getChannels() {
      getChannels({
          with_special_channels: 'topic'
      }).then(res => {
        let arr = ['product','topic','broadcast','radio_replay','radio_channel','radio_live','tv_channel','tv_replay','tv_live']
        this.channelsList = res.map(n => ({
          ...n,
          disabled: arr.includes(n.type),
        }))
        this.changeChannelName(this.channelsList)
      })
    }
  }
}
</script>
