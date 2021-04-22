<style type="text/scss" lang="scss" scoped>
  .xl-add-media {
    &--header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &--upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      width: 148px;
      height: 148px;
      line-height: 146px;
      text-align: center;
      .el-icon-video-camera-solid {
        font-size: 28px;
        color: #8c939d;
      }
      &:hover {
        border-color: #409EFF;
      }
    }
  }
</style>
<template>
  <el-container>
    <el-header class="xl-add-media--header">
      <el-radio-group v-model="from.extra.type" @change="handleTabChange">
        <el-radio-button v-for="item of tabs" :key="item.value" :label="item.value">{{ item.label }}</el-radio-button>
      </el-radio-group>
      <div>
        <el-button
          type="primary"
          size="mini"
        >
          保存草稿
        </el-button>
        <el-button
          type="primary"
          size="mini"
          @click="handlePreview"
        >
          保存并预览
        </el-button>
        <el-button
          type="primary"
          size="mini"
          @click="handlePublish"
        >
          保存并发布
        </el-button>
      </div>
    </el-header>
    <el-main>
      <el-form
        ref="submitForm"
        label-width="100px"
        :model="from"
        :rules="currentTabsFromRules"
      >
        <div v-for="(item, index) of currentTabsFromItem" :key="index">
          <el-form-item v-show="initFrom().includes(item.key)" v-bind="item.props">
            <!-- 输入框 -->
            <el-input
              v-if="item.component === 'input'"
              :value="parseObj(item)"
              :rows="4"
              v-bind="item.componentProps"
              clearable
              size="small"
              style="width: 200px"
              @input="handleInput($event, item)"
            />
            <!-- 选择框 -->
            <el-select
              v-if="item.component === 'select'"
              :value="parseObj(item)"
              size="small"
              style="width: 200px"
              clearable
              v-bind="item.componentProps"
              @input="handleInput($event, item)"
            >
              <el-option
                v-for="list in item.lists"
                :key="list.value"
                :label="list.label"
                :value="list.value"
              />
            </el-select>
            <!-- 可添加多个(作者, 编辑) -->
            <tag
              v-if="item.component === 'tag'"
              :value="parseObj(item)"
              @input="handleInput($event, item)"
            />
            <!-- 单选框 -->
            <el-radio-group
              v-if="item.component === 'radio'"
              size="small"
              :value="parseObj(item)"
              @input="handleInput($event, item)"
              @change="handleTabChange"
            >
              <el-radio v-for="list of item.lists" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
            </el-radio-group>
            <!-- 图片表格 -->
            <img-table
              v-if="item.component === 'table'"
              :value="parseObj(item)"
              @input="handleInput($event, item)"
            />
            <!-- 剪切图片 -->
            <cropper
              v-if="item.component === 'cropper'"
              v-bind="item.componentProps"
              :value="parseObj(item)"
              @input="handleInput($event, item)"
            />
            <!-- 时间 -->
            <el-date-picker
              v-if="item.component === 'date'"
              :value="parseObj(item)"
              type="datetime"
              size="small"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择日期时间"
              @input="handleInput($event, item)"
            />
            <!-- 视频 -->
            <div v-if="item.component === 'video'" class="xl-add-media--upload" @click="handleChangeVideo">
              <!--<i class="el-icon-video-camera-solid"></i>
              <el-image
                class="el-upload-list__item-thumbnail"
                :src="parseObj(item)"
                fit="cover"></el-image>-->
            </div>
          </el-form-item>
        </div>
      </el-form>
    </el-main>
    <!-- 选择视频弹框 -->
    <el-dialog
      width="600px"
      :title="videoDialog.title"
      :visible.sync="videoDialog.show"
    >
      <el-tabs type="border-card">
        <el-tab-pane label="蓝云视频">
          <div>
            <ul>
              <li v-for="(list, index) of videoLists" :key="index">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="list.url"
                  fit="cover"
                />
                <el-radio v-model="videoDialog.radio" :label="list.value">{{ list.name }}</el-radio>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="在线视频">
          <el-row align="middle" type="flex" style="margin-bottom: 20px">
            <el-col :span="4">视频地址</el-col>
            <el-col :span="12">
              <el-input
                v-model="videoDialog.video"
                placeholder="请输入视频地址"
                clearable
                size="small"
              />
            </el-col>
            <el-col :span="8" style="text-align: center">
              <el-upload
                class="upload-demo"
                :action="actionUrl"
                :limit="1"
                :show-file-list="false"
                :on-success="handleUploadImageSuccess"
              >
                <el-button size="small" type="primary">添加缩略图</el-button>
              </el-upload>
            </el-col>
          </el-row>
          <el-row align="middle" type="flex">
            <el-col :span="16">
              <el-image
                style="width: 300px; height: 300px;margin-left: 20px"
                :src="videoDialog.video"
                fit="cover"
              />
            </el-col>
            <el-col :span="8">
              <div style="margin-bottom: 20px">
                宽度(px):
                <el-input
                  v-model="videoDialog.width"
                  placeholder="数值"
                  clearable
                  size="mini"
                  style="width: 100px"
                />
              </div>
              <div>
                高度(px):
                <el-input
                  v-model="videoDialog.height"
                  placeholder="数值"
                  clearable
                  size="mini"
                  style="width: 100px"
                />
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="videoDialogControl('cancel')">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="videoDialogControl('confirm')"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
    <!-- 发布到栏目 -->
    <el-dialog
      width="600px"
      :title="dialog.title"
      :visible.sync="dialog.show"
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
  </el-container>
</template>

<script>
import Cropper from '@/components/Cropper'
import { getLabels, getScriptDetail, changeScripts } from '@/api/content'
import { getChannels } from '@/api/manage'
import Tag from './components/tag'
import ImgTable from './components/imgTable'

export default {
  name: 'AddMedia',
  components: {
    Cropper,
    ImgTable,
    Tag
  },
  data() {
    const coverValidator = (rule, value, callback) => {
      if (!Array.isArray(value) || value.length === 0) {
        callback(new Error('请上传图片'))
      } else {
        callback()
      }
    }
    const imgListValidator = (rule, value, callback) => {
      if (!Array.isArray(value) || value.length === 0) {
        callback(new Error('请上传图片'))
      } else if (!value.every(n => Object.keys(n).every(key => n[key] !== ''))) {
        callback(new Error('请填写完成图片信息'))
      } else {
        callback()
      }
    }
    return {
      formOptions: Object.freeze({
        'extra.title': {
          item: {
            props: {
              label: '标题:',
              prop: 'extra.title'
            },
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入媒资标题'
            }
          },
          rule: [
            { required: true, message: '请输入媒资标题', trigger: 'blur' }
          ]
        },
        'extra.subtitle': {
          item: {
            props: {
              label: '副标题:'
            },
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入媒资副标题'
            }
          }
        },
        'extra.cover_type': {
          item: {
            props: {
              label: '封面样式:',
              prop: 'extra.cover_type'
            },
            component: 'radio', // 组件名
            lists: [
              {
                label: '纯文字',
                value: 1,
                count: 1
              },
              {
                label: '左图右文字',
                value: 2,
                count: 1
              },
              {
                label: '右图左文字',
                value: 3,
                count: 1
              },
              {
                label: '三图上文字',
                value: 4,
                count: 3
              },
              {
                label: '三图下文字',
                value: 5,
                count: 3
              },
              {
                label: '大图模式+上文字',
                value: 6,
                count: 1
              },
              {
                label: '大图模式+下文字',
                value: 7,
                count: 1
              },
              {
                label: '大图模式+图上文字',
                value: 8,
                count: 1
              }
            ]
          },
          rule: [
            { required: true, message: '请选择封面样式', trigger: 'change' }
          ]
        },
        'extra.cover': {
          item: {
            props: {
              label: '',
              prop: 'extra.cover'
            },
            component: 'cropper', // 组件名
            componentProps: {
              count: 1
            }
          },
          rule: [
            { validator: coverValidator, trigger: 'change' }
          ]
        },
        'extra.intro': {
          item: {
            props: {
              label: '简介:'
            },
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入媒资简介',
              type: 'textarea',
              maxlength: 200
            }
          }
        },
        'extra.tags': {
          item: {
            props: {
              label: '标签:'
            },
            component: 'select', // 组件名
            componentProps: {
              placeholder: '请选择标签',
              multiple: true
            },
            lists: []
          }
        },
        'extra.keywords': {
          item: {
            props: {
              label: '关键词:'
            },
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入关键词',
              multiple: true
            }
          }
        },
        'extra.publish_timer': {
          item: {
            props: {
              label: '定时发布:',
              prop: 'extra.publish_timer'
            },
            component: 'radio', // 组件名
            lists: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          },
          rule: [
            { required: true, message: '请选择是否定时发布', trigger: 'change' }
          ]
        },
        'extra.set_created_at': {
          item: {
            props: {
              label: '发布时间:',
              prop: 'extra.set_created_at'
            },
            component: 'date' // 组件名
          },
          rule: [
            { required: true, message: '请选择发布时间', trigger: 'change' }
          ]
        },
        'extra.video_extra.video_list': {
          item: {
            props: {
              label: '视频:',
              prop: 'extra.video_extra.video_list'
            },
            component: 'video' // 组件名
          },
          rule: [
            { required: true, message: '请选择视频', trigger: 'change' }
          ]
        }, // 待确认
        'extra.album_extra.image_list': {
          item: {
            props: {
              label: '图片:',
              prop: 'extra.album_extra.image_list'
            },
            component: 'table' // 组件名
          },
          rule: [
            { validator: imgListValidator, trigger: 'change' }
          ]
        },
        'extra.content': {
          item: {
            props: {
              label: '编辑器:'
            },
            component: 'edit' // 组件名
          }
        },
        author_name: {
          item: {
            props: {
              label: '作者:'
            },
            component: 'tag' // 组件名
          }
        },
        editor_name: {
          item: {
            props: {
              label: '编辑:'
            },
            component: 'tag' // 组件名
          }
        },
        'extra.is_original': {
          item: {
            props: {
              label: '是否原创:',
              prop: 'extra.is_original'
            },
            component: 'radio', // 组件名
            lists: [
              {
                label: '原创',
                value: 1
              },
              {
                label: '来源',
                value: 0
              }
            ]
          },
          rule: [
            { required: true, message: '请选择是否原创', trigger: 'change' }
          ]
        },
        'extra.source': {
          item: {
            props: {
              label: '来源:',
              prop: 'extra.source'
            },
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入来源'
            }
          },
          rule: [
            { required: true, message: '请输入来源', trigger: 'blur' }
          ]
        },
        'extra.use_watermarks': {
          item: {
            props: {
              label: '使用水印:',
              prop: 'extra.use_watermarks'
            },
            component: 'radio', // 组件名
            lists: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          },
          rule: [
            { required: true, message: '请选择是否使用水印', trigger: 'change' }
          ]
        },
        'extra.allow_comment': {
          item: {
            props: {
              label: '评论控制:',
              prop: 'extra.allow_comment'
            },
            component: 'radio', // 组件名
            lists: [
              {
                label: '先审后发',
                value: 0
              },
              {
                label: '先发后审',
                value: 1
              },
              {
                label: '禁止评论',
                value: 2
              }
            ]
          },
          rule: [
            { required: true, message: '请选择评论控制', trigger: 'change' }
          ]
        },
        'extra.allow_share': {
          item: {
            props: {
              label: '允许分享:',
              prop: 'extra.allow_share'
            },
            component: 'radio', // 组件名
            lists: [
              {
                label: '是',
                value: 1
              },
              {
                label: '否',
                value: 0
              }
            ]
          },
          rule: [
            { required: true, message: '请选择是否允许分享', trigger: 'change' }
          ]
        },
        'extra.view_base_num': {
          item: {
            props: {
              label: '点击量:'
            },
            type: 'number',
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入数值'
            }
          }
        },
        'extra.praise_base_num': {
          item: {
            props: {
              label: '点赞量:'
            },
            type: 'number',
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入数值'
            }
          }
        },
        'extra.post_base_num': {
          item: {
            props: {
              label: '转发量:'
            },
            type: 'number',
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入数值'
            }
          }
        },
        'extra.link.type': {
          item: {
            props: {
              label: '链接类型:',
              prop: 'extra.link.type'
            },
            component: 'radio', // 组件名
            lists: [
              {
                label: '目标对象',
                value: 'outerlink'
              },
              {
                label: '外链',
                value: 'outer_link'
              },
              {
                label: '授权外链',
                value: 'auth_link'
              }
            ]
          },
          rule: [
            { required: true, message: '请选择链接类型', trigger: 'change' }
          ]
        },
        'extra.link.id': {
          item: {
            props: {
              label: '链接对象:',
              prop: 'extra.link.id'
            },
            component: 'radio', // 组件名
            lists: [
              {
                label: '广电',
                value: '1'
              },
              {
                label: '兑吧',
                value: '2'
              },
              {
                label: '其他',
                value: '3'
              }
            ]
          },
          rule: [
            { required: true, message: '请选择链接对象', trigger: 'change' }
          ]
        },
        'extra.link.url': {
          item: {
            props: {
              label: '链接地址:',
              prop: 'extra.link.url'
            },
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入链接地址'
            }
          },
          rule: [
            { required: true, message: '请输入链接地址', trigger: 'blur' }
          ]
        }
      }),
      tabs: [
        {
          label: '图文',
          value: 'news',
          formItems: [
            'extra.title',
            'extra.subtitle',
            'extra.cover',
            'extra.intro',
            'extra.tags',
            'extra.keywords',
            'extra.publish_timer',
            'extra.content',
            'author_name',
            'editor_name',
            'extra.is_original',
            'extra.use_watermarks',
            'extra.allow_comment',
            'extra.allow_share',
            'extra.view_base_num',
            'extra.praise_base_num',
            'extra.post_base_num'
          ]
        },
        {
          label: '视频',
          value: 'video',
          formItems: [
            'extra.title',
            'extra.subtitle',
            'extra.cover',
            'extra.intro',
            'extra.tags',
            'extra.keywords',
            'extra.publish_timer',
            'author_name',
            'editor_name',
            'extra.is_original',
            'extra.use_watermarks',
            'extra.allow_comment',
            'extra.allow_share',
            'extra.view_base_num',
            'extra.praise_base_num',
            'extra.post_base_num',
            'extra.video_extra.video_list'
          ]
        },
        {
          label: '图集',
          value: 'album',
          formItems: [
            'extra.title',
            'extra.subtitle',
            'extra.cover',
            'extra.intro',
            'extra.tags',
            'extra.keywords',
            'extra.publish_timer',
            'author_name',
            'editor_name',
            'extra.is_original',
            'extra.use_watermarks',
            'extra.allow_comment',
            'extra.allow_share',
            'extra.view_base_num',
            'extra.praise_base_num',
            'extra.post_base_num',
            'extra.album_extra.image_list'
          ]
        },
        {
          label: '外链',
          value: 'outerlink',
          formItems: [
            'extra.title',
            'extra.subtitle',
            'extra.cover',
            'extra.intro',
            'extra.tags',
            'extra.keywords',
            'extra.publish_timer',
            'extra.link.type'
          ]
        }
      ], // tab按钮切换
      currentTabsFromItem: [], // 当前激活tab的表单显示数据
      currentTabsFromRules: {}, // 当前激活tab的表单验证规则
      from: {
        author_name: '', // 作者
        editor_name: '', // 编辑
        extra: {
          type: 'news', // 类型
          title: '', // 标题
          subtitle: '', // 副标题
          cover_type: 1, // 封面样式
          cover: [], // 封面样式的图片集合
          intro: '', // 简介
          tags: '', // 标签
          keywords: '', // 关键词
          publish_timer: 0, // 定时发布
          set_created_at: '', // 发布时间
          content: '2fdsdfsfsd', // 编辑器内容
          is_original: 1, // 是否原创
          source: '', // 来源
          use_watermarks: 0, // 水印
          allow_comment: 0, // 评论控制
          allow_share: 1, // 允许分享
          view_base_num: '', // 点击量
          praise_base_num: '', // 点赞量
          post_base_num: '', // 转发量
          video_extra: {
            video_list: []
          }, // 视频
          album_extra: {
            image_list: []
          }, // 图片
          link: {
            type: 'outerlink', // 链接类型
            id: '', // 链接对象
            url: '' // 链接地址
          } // 外链
        }
      }, // 表单
      videoDialog: {
        title: '选择视频',
        show: false,
        radio: '', // 选择的视频
        video: '', // 填写的视频
        width: '',
        height: ''
      }, // 选择视频弹框
      videoLists: [], // 视频列表
      dialog: {
        show: false,
        multiple: false, // 批量单选  单个多选
        title: '发布栏目',
        form: {
          channel_id: []
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
      channelsList: [] // 栏目列表
    }
  },
  computed: {
    /* 上传接口 */
    actionUrl() {
      return `${process.env.VUE_APP_BASE_API}/api/upload/image`
    }
  },
  async created() {
    this.getChannels()
    await this.getLabels()
    await this.getList()
    this.currentTabsFromItem = Object.keys(this.formOptions).map(key => ({
      ...this.formOptions[key].item,
      key
    }))
    this.handleTabChange()
  },
  methods: {
    /* 解析路径返回值 */
    parseObj(item) {
      const arr = item.key.split('.')
      const val = arr.reduce((obj, key) => obj[key], this.from)
      return item.component === 'select' ? val && val.split(',') : val
    },
    /* 值变化 */
    handleInput(val, item) {
      const arr = item.key.split('.')
      const type = item.type || 'string'
      if (type === 'number') val = parseInt(val) || ''
      arr.reduce((obj, key) => {
        if (key === arr[arr.length - 1]) obj[key] = item.component === 'select' ? val.join() : val
        else return obj[key]
      }, this.from)
    },
    /*
      * 显示选择视频弹框(未完成)
      * */
    handleChangeVideo() {
      /* const { url, id } = this.from.video_extra.video_list;
        let obj = {
          show: true,
          radio: id || '',
          video: url
        }
        Object.assign(this.videoDialog, { ...obj });*/
    },
    /* 控制视频弹框 (未完成)*/
    videoDialogControl(val) {
      /* this.videoDialog.show = false;
        if(val === 'confirm'){
          this.from.extra.link = {
            ...this.from.extra.link,
            id: this.videoDialog.radio,
            url: this.videoDialog.video
          }
        }*/
    },
    /* 上传图片成功 */
    handleUploadImageSuccess(res) {
      if (res.status_code >= 200 && res.status_code < 300) {
        this.$message.success('图片上传成功!')
        this.videoDialog.video = res.path
      }
    },
    /* 处理需要传给后台的数据 */
    initFrom() {
      let arr = []
      const cover_type = this.formOptions['extra.cover_type'].item.lists.find(n => n.value === this.from.extra.cover_type)
      // 确定图片显示个数
      this.formOptions['extra.cover'].item.componentProps.count = cover_type.count
      // 基础显示的item
      const baseTopItem = ['extra.title', 'extra.subtitle', 'extra.cover_type', 'extra.cover', 'extra.intro', 'extra.tags', 'extra.keywords', 'extra.publish_timer']
      // 显示发布时间
      if (this.from.extra.publish_timer === 1) baseTopItem.push('extra.set_created_at')
      const baseBottomItem = ['author_name', 'editor_name', 'extra.is_original', 'extra.use_watermarks', 'extra.allow_comment', 'extra.allow_share', 'extra.view_base_num', 'extra.praise_base_num', 'extra.post_base_num']
      // 显示来源
      if (this.from.extra.is_original === 0) baseBottomItem.splice(2, 0, 'extra.source')
      switch (this.from.extra.type) {
        case 'news':
          arr = [...baseTopItem, 'extra.content', ...baseBottomItem]
          break
        case 'video':
          arr = [...baseTopItem, 'extra.video_extra.video_list', ...baseBottomItem]
          break
        case 'album':
          arr = [...baseTopItem, 'extra.album_extra.image_list', ...baseBottomItem]
          break
        case 'outerlink':
          arr = [...baseTopItem, 'extra.link.type']
          if (this.from.extra.link.type === 'outerlink') arr.push('extra.link.id')
          else arr.push('extra.link.url')
          break
      }
      return arr
    },
    /*
      * 确认发布
      * */
    enterDialog() {
      this.$refs.dialogForm.validate(valid => {
        if (valid) {
          this.handleSave('保存并发布成功')
        }
      })
    },
    /*
      * 保存数据
      * */
    handleSave(tip) {
      const channel_id = this.dialog.form.channel_id
      const currentTabsFromItem = this.initFrom()
      const type = this.from.extra.type
      const { id } = this.$route.query
      const obj = {
        ...currentTabsFromItem.reduce((obj, key) => {
          const arr = key.split('.')
          if (arr[1]) {
            obj[arr[0]][arr[1]] = this.from[arr[0]][arr[1]]
          } else {
            obj[arr[0]] = this.from[arr[0]]
          }
          return obj
        }, {
          extra: {
            type
          }
        }),
        channels: channel_id.join() // 关联到多个栏目
      }
      changeScripts(id, obj).then(() => {
        this.$message.success(tip)
        this.dialog.show = false
      })
    },
    /*
      * 预览
      * */
    handlePreview() {
      this.$refs.submitForm.validate(valid => {
        if (valid) {
          this.handleSave('保存成功')
        }
      })
    },
    /*
      * 发布
      * */
    handlePublish() {
      this.$refs.submitForm.validate(valid => {
        if (valid) {
          this.dialog.show = true
        }
      })
    },
    /* tab变化 */
    handleTabChange() {
      const currentTabsFromItem = this.initFrom()
      this.currentTabsFromRules = currentTabsFromItem.reduce((obj, key) => ({
        ...obj,
        [key]: this.formOptions[key].rule
      }), {})
    },
    /* 获取标签列表 */
    getLabels() {
      return getLabels({
        page: 1,
        pageSize: 9999
      }).then(res => {
        const { data } = res
        this.formOptions['extra.tags'].item.lists = data.map(n => ({
          label: n.name,
          value: n.id.toString()
        }))
      })
    },
    /*
     * 获取栏目列表
     * */
    getChannels() {
      getChannels().then(res => {
        this.channelsList = res
      })
    },
    /* 获取详情数据 */
    getList() {
      const { id } = this.$route.query
      if (id == null) return
      return getScriptDetail(id).then(res => {
        const extra = res.extra
        this.from = {
          author_name: res.author_name, // 作者
          editor_name: res.editor_name, // 编辑
          extra: {
            type: extra.type, // 类型
            title: extra.title, // 标题
            subtitle: extra.subtitle, // 副标题
            cover_type: 1, // extra.cover_type || 1, // 封面样式 (正式数据需要修改)
            cover: extra.cover, // 封面样式的图片集合
            intro: extra.intro, // 简介
            tags: extra.tags, // 标签
            keywords: extra.keywords, // 关键词
            publish_timer: extra.publish_timer, // 定时发布
            set_created_at: extra.set_created_at, // 发布时间
            content: extra.content, // 编辑器内容
            is_original: extra.is_original, // 是否原创
            source: extra.source, // 来源
            use_watermarks: extra.use_watermarks, // 水印
            allow_comment: extra.allow_comment, // 评论控制
            allow_share: extra.allow_share, // 允许分享
            view_base_num: extra.view_base_num, // 点击量
            praise_base_num: extra.praise_base_num, // 点赞量
            post_base_num: extra.post_base_num, // 转发量
            video_extra: {
              video_list: extra.video_extra && extra.video_extra.video_list || []
            }, // 视频
            album_extra: {
              image_list: extra.album_extra && extra.album_extra.image_list || []
            }, // 图片
            link: {
              type: extra.link && extra.link.type || '', // 链接类型
              id: extra.link && extra.link.id || '', // 链接对象
              url: extra.link && extra.link.url || '' // 链接地址
            } // 外链
          }
        }// 表单
        this.dialog.form.channel_id = res.news.map(n => n.channel_id)
      })
    }
  }
}
</script>
