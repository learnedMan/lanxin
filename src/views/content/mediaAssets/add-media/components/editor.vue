<style type="text/scss" lang="scss">
  .xl-editor {
    line-height: normal;
    &-images {
      margin-top: 20px;
      border-radius: 6px;
      border: 1px solid #eee;
      ul, li {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
      }
      li {
        display: inline-block;
        box-sizing: border-box;
        width: 25%;
        justify-content: center;
        border-radius: 6px;
        box-shadow: 2px 2px 10px 5px rgb(219 219 219 / 40%);
        margin: 10px;
        padding: 10px;
        text-align: center;
        position: relative;
      }
      &-checked {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 1;
        .el-checkbox {
          display: block;
          width: 100%;
          height: 100%;
          text-align: right;
          box-sizing: border-box;
          padding: 6px 6px 0 0;
          .el-checkbox__label {
            display: none;
          }
        }
      }
      &-style {
        width: 100%;
        height: 160px;
      }
      &-info {
        background-color: rgba(0, 0, 0, 0.45);
        line-height: 24px;
        color: #fff;
        width: 100%;
        margin: 0 auto;
        font-size: 14px;
      }
      &-name {
        width: 100%;
        margin: 0 auto;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
</style>
<template>
  <div class="xl-editor">
    <vue-ueditor-wrap
      :value="value"
      :config="config"
      :editor-dependencies="editorDependencies"
      @input="handleInput"
      @before-init="beforeInit"
      @ready="handleReady"
    />
    <el-dialog
      width="900px"
      :title="dialog.title"
      :visible.sync="dialog.show"
    >
      <div>
        <el-form
          ref="queryForm"
          :model="queryParams"
          :inline="true"
        >
          <el-form-item label="上传日期:">
            <el-date-picker
              v-model="dateValue"
              type="daterange"
              align="right"
              size="small"
              unlink-panels
              range-separator="~"
              value-format="yyyy-MM-dd"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
              @change="handleDateChange"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="queryParams.keyword"
              placeholder="请输入关键字"
              clearable
              size="small"
              style="width: 200px"
              @keyup.enter.native="getList"
            />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="isMy" size="small">只看我传的</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="mini"
              @click="getList"
            >
              搜索
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="xl-editor-images">
        <el-checkbox-group v-model="dialog.checked">
          <ul>
            <li v-for="(list, index) of imgLists" :key="index">
              <div class="xl-editor-images-checked">
                <el-checkbox :label="list.url">{{ '' }}</el-checkbox>
              </div>
              <el-image
                class="xl-editor-images-style"
                fit="contain"
                :src="list.url"
              />
              <div class="xl-editor-images-info">{{ list.width }}*{{ list.height }}</div>
              <div class="xl-editor-images-name">{{ list.description }}</div>
            </li>
          </ul>
        </el-checkbox-group>
      </div>
      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="queryParams.page"
        :limit.sync="queryParams.pageSize"
        @pagination="getList"
      />
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogControl('cancel')">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="dialogControl('confirm')"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
import { getEditImgLists } from '@/api/content'
let currentEditor
export default {
  components: {
    VueUeditorWrap
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      config: {
        UEDITOR_HOME_URL: '/UEditor/', // 编辑器库的位置
        initialFrameWidth: 800, // 编辑器宽度
        initialFrameHeight: 400, // 编辑器高度
        serverUrl: `/laravel-u-editor-server/server`, // 上传图片以及视频的接口
        autoHeightEnabled: false // 防止内容撑高编辑器
      }, // 默认配置
      editorDependencies: [
        'ueditor.config.js',
        'ueditor.all.js'
      ], // 资源链接
      dialog: {
        title: '从图库中选择',
        show: false,
        checked: []
      },
      imgLists: [], // 视频封面列表
      queryParams: {
        pageSize: 10,
        page: 1,
        type: 'image',
        keyword: '',
        startdate: '',
        enddate: ''
      },
      isMy: false, // 是否为自己传的
      total: 0,
      dateValue: '',
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
      editor: ''
    }
  },
  beforeDestroy() {

  },
  created() {
    this.$once('getImgLists', () => {
      this.getList()
    })
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
    /*
        * 编辑框值变化
        * */
    handleInput(val) {
      this.$emit('input', val)
    },
    /* 初始化之前 */
    beforeInit(id) {
      window.UE.registerUI('135editor', (editor, uiName) => {
        const width = document.body.clientWidth * 0.9
        const height = window.innerHeight - 50
        const dialog = new window.UE.ui.Dialog({
          iframeUrl: `${editor.options.UEDITOR_HOME_URL}dialogs/135/135EditorDialogPage.html`,
          cssRules: `width: ${width}px; height: ${height}px;`,
          editor: editor,
          name: uiName,
          title: '135编辑器'
        })
        dialog.fullscreen = false
        dialog.draggable = false
        const btn = new window.UE.ui.Button({
          name: 'btn-dialog-' + uiName,
          cssRules: `background-image: url("http://static.135editor.com/img/icons/editor-135-icon.png") !important;background-size: 85%;background-position: center;background-repeat: no-repeat;`,
          title: '135编辑器',
          onclick: function() {
            dialog.render()
            dialog.open()
          }
        })
        return btn
      }, undefined, id)
    },
    /* 已生成editor实例 */
    handleReady(editor) {
      editor.registerCommand('videolist', {
        execCommand: () => {
          this.dialog.show = true
          this.$emit('getImgLists')
        }
      })
      currentEditor = editor
    },
    /* 弹框控制 */
    dialogControl(status) {
      const arr = this.dialog.checked.map(n => `<img src="${n}" />`)
      this.dialog.show = false
      this.dialog.checked = []
      if (status === 'confirm' && arr.length) {
        currentEditor.execCommand('insertHtml', arr.join(''))
      }
    },
    /* 获取图库数据 */
    getList() {
      const query = { ...this.queryParams }
      getEditImgLists(this.removePropertyOfNull(query), this.isMy).then(res => {
        this.imgLists = res.data
        this.total = res.total
      })
    }
  }
}
</script>
