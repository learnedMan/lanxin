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
      }
      ul {
        display: flex;
        flex-wrap: wrap;
      }
      li {
        display: inline-block;
        box-sizing: border-box;
        width: 22.6%;
        justify-content: center;
        border-radius: 6px;
        box-shadow: 2px 2px 10px 5px rgba(219, 219, 219, .4);
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
      ref="ueditor"
      :value="value"
      :config="config"
      :editor-dependencies="editorDependencies"
      :destroy="true"
      @input="handleInput"
      @before-init="beforeInit"
      @ready="handleReady"
    />
    <el-dialog
      width="900px"
      top="20px"
      :title="dialog.title"
      :visible.sync="dialog.show"
      append-to-body
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
            <el-button v-points = "1500"
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
                lazy
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
        <el-button v-points = "1500" @click="dialogControl('cancel')">
          取 消
        </el-button>
        <el-button v-points = "1500"
          type="primary"
          @click="dialogControl('confirm')"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
    <!-- 选择视频弹框 -->
    <el-dialog
      width="1000px"
      top="4vh"
      :title="videoDialog.title"
      :visible.sync="videoDialog.show"
      append-to-body
    >
      <xl-video @choose-url="videoDialogControl" @choose="videoDialogChoose"></xl-video>
    </el-dialog>
  </div>
</template>

<script>
  import VueUeditorWrap from 'vue-ueditor-wrap'
  import xlVideo from '@/components/video'
  import { getEditImgLists } from '@/api/content'
  import { uploadImg } from '@/api/content.js'
  let currentEditor, currentEditorId;
  export default {
    components: {
      VueUeditorWrap,
      xlVideo
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      /* 是否可编辑 */
      disabled: {
        type: Boolean,
        default: false
      },
      /* 水印 */
      watermark: {
        type: String,
        default: ''
      },
      /* 水印位置 */
      position: {
        type: String,
        default: ''
      }
    },
    data() {
      // let toolbars_xz = window.location.host.indexOf('localhost')>-1?batrix-www-local
      let toolbars_xz = window.location.host.indexOf('pub.cztvcloud.com')>-1 || window.location.host.indexOf('batrix-www.cztv.com') > -1 ?
      [[
            'source', '|',
            'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', '|',
            'forecolor', 'backcolor' , 'selectall', 'cleardoc', '|',
            'indent','rowspacingtop', 'rowspacingbottom',  'lineheight', '|',
            'fontfamily', 'fontsize', '|',
            'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
            'link', 'unlink', '|',
            'simpleupload', 'insertimage','imglist', 'attachment',
            'insertvideo',
            '|',
            'searchreplace', '|',
            'fullscreen'
      ]]:
      [[
            'source', '|',
            'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', '|',
            'forecolor', 'backcolor' , 'selectall', 'cleardoc', '|',
             'indent', 'rowspacingtop', 'rowspacingbottom',  'lineheight', '|',
            'fontfamily', 'fontsize', '|',
            'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
            'link', 'unlink', '|',
            'simpleupload', 'insertimage','imglist', 'attachment',
            // 'insertvideo',
            '|',
            'searchreplace', '|',
            'fullscreen'
      ]];
      return {
        config: Object.assign({
          UEDITOR_HOME_URL: '/UEditor/', // 编辑器库的位置
          initialFrameWidth: '100%', // 编辑器宽度
          initialFrameHeight: 200, // 编辑器高度
          zIndex : 3000,
          serverUrl: `/laravel-u-editor-server/server`, // 上传图片以及视频的接口
          autoHeightEnabled: true, // 防止内容撑高编辑器
          enableAutoSave: false,
          readonly: this.disabled
        }, this.isMobile? {toolbars: [[
          'bold', 'italic', 'underline', '|',
          'forecolor', 'backcolor' , '|',
          'fontfamily', 'fontsize', '|',
          'justifyleft','indent', 'justifycenter', 'justifyright', 'justifyjustify', '|',
          'simpleupload'
        ]]} : {
          toolbars: toolbars_xz
        }), // 默认配置

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
        editor: '',
        videoDialog: {
          title: '选择视频',
          show: false,
        }, // 选择视频弹框
      }
    },
    beforeDestroy() {
      currentEditor = null;
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
      /* 设置水印位置 */
      setPosition (width, height, b = 0.15) {
        const widthPercentage = Math.floor(width * b);
        const heightPercentage = Math.floor(height * b);
        let data = {};
        switch (this.position) {
          case 'nw': // 左上角
            data = { left: 0, top: 0 }
            break
          case 'north': // 正上方
            data = { left: Math.floor(width / 2 - widthPercentage / 2), top: 0 };
            break
          case 'ne': // 右上角
            data = { left: Math.floor(width - widthPercentage), top: 0 };
            break
          case 'west': // 左边
            data = { left: 0, top: Math.floor(height / 2 - heightPercentage / 2) };
            break;
          case 'center': // 正中间
            data = { left: Math.floor(width / 2 - widthPercentage / 2), top: Math.floor(height / 2 - heightPercentage / 2) };
            break;
          case 'east': // 右边
            data = { left: Math.floor(width - widthPercentage), top: Math.floor(height / 2 - heightPercentage / 2) };
            break;
          case 'sw': // 左下角
            data = { left: 0, top: Math.floor(height - heightPercentage) };
            break;
          case 'south': // 正下方
            data = { left: Math.floor(width / 2 - widthPercentage / 2), top: Math.floor(height - heightPercentage) };
            break
          case 'se': // 右下角
            data = { left: Math.floor(width - widthPercentage), top: Math.floor(height - heightPercentage) };
        }
        return {
          ...data,
          width: widthPercentage,
          height: heightPercentage
        }
      },
      /* 添加水印图片 */
      generateCanvas (img) {
        return new Promise(res => {
          const { src } = img;
          let newImg = new Image();
          newImg.src = src;
          newImg.setAttribute('crossOrigin', 'Anonymous')
          newImg.onload = () => {
            const { width, height } = newImg;
            let canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            let context = canvas.getContext("2d");
            context.drawImage(newImg , 0 , 0 , width , height);
            const shuiyin = new Image();
            shuiyin.src = this.watermark;
            shuiyin.crossOrigin = 'Anonymous';
            shuiyin.onload = () => {
              const position = this.setPosition(width, height);
              context.drawImage(shuiyin, position.left, position.top, position.width, position.height);
              canvas.toBlob((blob) => {
                const file = new File([blob], `${new Date().getTime()}.png`, {
                  type: 'image/png'
                })
                const formData = new FormData()
                formData.append('image', file, file.name)
                uploadImg({
                  url: '/api/upload/image',
                  method: 'post',
                  data: formData
                }).then(({ path, status_code }) => {
                  if(status_code === 200) {
                    res({
                      now: path,
                      old: src
                    });
                  }
                })
              },"image/png");
            }
            shuiyin.onerror = function () {
              res({
                now: '',
                old: src
              });
            }
          }
        })
      },
      /*
          * 编辑框值变化
          * */
      handleInput(val) {
        let htmlContent = val;
        let div = document.createElement("div");
        div.innerHTML = htmlContent;
        let imgList = Array.from(div.querySelectorAll('img')).filter(img => {
          return !img.className.includes('loadingclass') && !img.dataset.canvas
        })
        if(imgList.length && this.watermark && this.position) {
          Promise.all(imgList.map(n => this.generateCanvas(n))).then((arr) => {
            imgList.forEach(img => {
              const item = arr.find(item => item.old === img.src)
              if(item) {
                img.src = item.now;
                img.setAttribute('data-canvas', '1');
              }
            })
            this.$emit('input', div.innerHTML)
          }).catch((err) => {
            console.log(err)
          })
        }else {
          this.$emit('input', val)
        }
      },
      /* 初始化之前 */
      beforeInit(id) {
        if(this.isMobile || this.disabled) return
        currentEditorId = id;
        window.UE.registerUI('135editor', (editor, uiName) => {
          /*const width = document.body.clientWidth * 0.9
          const height = window.innerHeight - 50
          const dialog = new window.UE.ui.Dialog({
            iframeUrl: `${editor.options.UEDITOR_HOME_URL}dialogs/135/135EditorDialogPage.html`,
            cssRules: `width: ${width}px; height: ${height}px;`,
            editor: editor,
            name: uiName,
            title: '135编辑器'
          })
          dialog.fullscreen = false
          dialog.draggable = false*/
          let editor135;
          function onContentFrom135(event) {
            if (typeof event.data !== 'string') {
              if(event.data.ready) {
                editor135.postMessage(editor.getContent(),'*');
              }
              return;
            };

            if(event.data.indexOf('<') !== 0) return;

            editor.setContent(event.data);
            editor.fireEvent("catchRemoteImage");
            window.removeEventListener('message', onContentFrom135);
          }
          const btn = new window.UE.ui.Button({
            name: 'btn-dialog-' + uiName,
            cssRules: `background-image: url("http://static.135editor.com/img/icons/editor-135-icon.png") !important;background-size: 85%;background-position: center;background-repeat: no-repeat;`,
            title: '135编辑器',
            onclick: function() {
              /*dialog.render()
              dialog.open()*/
              editor135 = window.open('https://www.135editor.com/simple_editor.html?callback=true&appkey=')

              window.removeEventListener('message', onContentFrom135);
              window.addEventListener('message', onContentFrom135, false);
            }
          })
          return btn
        }, undefined, id)
        window.UE.registerUI('xiumi-editor', (editor, uiName) => {
          const width = document.body.clientWidth * 0.9
          const height = window.innerHeight - 50
          const btn = new window.UE.ui.Button({
            name   : 'xiumi-connect-'+uiName,
            cssRules: `background-image: url("https://dl.xiumi.us/connect/ue/xiumi-connect-icon.png") !important;background-size: 85%;background-position: center;background-repeat: no-repeat;`,
            title: '秀米编辑器',
            onclick: function() {
              var dialog = new UE.ui.Dialog({
                iframeUrl: `${editor.options.UEDITOR_HOME_URL}xiumi-ue-dialog-v5.html`,
                cssRules: `width: ${width}px; height: ${height}px;`,
                editor   : editor,
                name     : 'xiumi-connect',
                title    : "",
              });
              dialog.render();
              dialog.open();
            }
          })
          return btn
        }, undefined, id)


        window.UE.registerUI('videoList', (editor, uiName) => {
          const btn = new window.UE.ui.Button({
            name: 'btn-dialog-' + uiName,
            cssRules: `background-position: -320px -20px;`,
            title: '视频列表',
            onclick: () => {
              this.videoDialog.show = true;
            }
          })
          return btn
        }, undefined, id)
      },
      /* 已生成editor实例 */
      handleReady(editor) {
        if(!this.isMobile) editor.registerCommand('imglist', {
          execCommand: () => {
            this.dialog.show = true
            this.$emit('getImgLists')
          }
        })
        currentEditor = editor;
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
      /* 视频弹框 */
      videoDialogControl (val) {
      //   <video style="width:300px;display:inline-block;" scale="0.0" title="安吉长龙山水电站" poster="http://img.cztv.com/cms_upload/cms_1624591586_LeiHPwfsPi.png" controls="" controlslist="" disablepictureinpicture="" form_repository="vms" preload="meta">
      //     <source src="http://ali-v.cztv.com/cztv/vod/2021/06/25/9b17fc8528b445c2a035f9796157ca49/h264_1500k_mp4.mp4" id="684381" type="video/mp4"/>
      // </video>&nbsp;

        const video =
                `<p><video style="width:300px;display:inline-block;" title="${val.title}" poster="${val.cover}" class="" controls="" preload="none" width="420" src="${val.url}" data-setup="{}">
                    <source src="${val.url}" type="video/mp4"/>
                </video>&nbsp;</p><b style='display:none;'>.</b>`
        currentEditor.execCommand('insertHtml', video);
        this.videoDialog.show = false;
      },
      /* 用于传递给文稿或新闻的视频列表数据 */
      videoDialogChoose (val) {
        this.$emit('changeVideoList', val)
      },
      /* 获取图库数据 */
      getList() {
        const query = { ...this.queryParams }
        getEditImgLists(this.removePropertyOfNull(query), this.isMy).then(res => {
          this.imgLists = res.data
          this.total = res.total
        })
      },
      /*获取编辑器内第一张图片地址; editor_:编辑器单例*/
      get_editor_img( editor_){
            let sourceReg = /<img.*?(?:>|\/>)/gi,
            srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i,
            edc = editor_.getContent(),
            matches = edc.match(sourceReg)
            if ( matches ) {
                let source_src_matches = matches[0].match(srcReg)
                if ( source_src_matches[1]) {
                    return source_src_matches[1]
                }
                return null
            }
            return null
      },
      /*截取正文的前xx字*/
      get_editor_prefixlength( editor_,slen){
          let edc = editor_.getContent()
          return edc.slice(0,slen)
      },
    }
  }
</script>
