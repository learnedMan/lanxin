<style type="text/scss" lang="scss">
  .xl-add-media {
    background-color: #f9f9f9;
    margin: -30px;
    padding: 10px;
    &--header {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background-color: #fff;
      margin-top: 10px;
    }
    &--tab {
      background-color: #fff;
      .el-tabs__header {
        margin-bottom: 0;
        .el-tabs__nav-wrap {
          padding-left: 20px;
          .el-tabs__item {
            padding: 0 30px;
          }
          &::after {
            background-color: #f4f4f5;
          }
        }
      }
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
    &--bc {
      background-color: #fff;
      padding: 0 10px;
      border-radius: 6px;
    }
    &--row {
      padding: 0 10px 10px;
      height: 100%;
    }
    &--title {
      font-size: 20px;
      font-weight: bold;
      line-height: 60px;
      padding-left: 10px;
    }
  }
</style>
<template>
  <el-container class="xl-add-media">
    <el-header class="xl-add-media--header" height="40px">
      <div>
        <el-button
          type="primary"
          size="small"
          @click="handleDraft"
        >
          保存稿件
        </el-button>
        <el-button
          type="primary"
          size="small"
          @click="handlePreview"
        >
          保存并预览
        </el-button>
        <el-button
          type="primary"
          size="small"
          @click="handlePublish"
        >
          保存并发布
        </el-button>
      </div>
    </el-header>
    <el-main style="padding: 10px">
      <el-tabs v-model="from.extra.type" class="xl-add-media--tab" @tab-click="handleTabChange">
        <el-tab-pane
          v-for="item of tabs"
          :key="item.value"
          :label="item.label"
          :name="item.value"
        />
      </el-tabs>
      <el-form
        ref="submitForm"
        label-width="100px"
        size="small"
        :model="from"
        :rules="currentTabsFromRules"
      >
        <el-row class="xl-add-media--bc" style="margin-bottom: 20px">
          <el-col :span="24">
            <el-row class="xl-add-media--title">
              <el-col :span="24">图文设置</el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <!-- 标题 -->
                <el-form-item
                  v-show="initFrom().includes('extra.title')"
                  v-bind="formOptions['extra.title'].item.props"
                >
                  <!-- 输入框 -->
                  <el-input
                    :value="parseObj(formOptions['extra.title'].item)"
                    v-bind="formOptions['extra.title'].item.componentProps"
                    clearable
                    size="small"
                    style="width: 200px"
                    @input="handleInput($event, formOptions['extra.title'].item)"
                  />
                </el-form-item>
                <!-- 简介 -->
                <el-form-item
                  v-show="initFrom().includes('extra.tags')"
                  v-bind="formOptions['extra.tags'].item.props"
                >
                  <!-- 输入框 -->
                  <el-input
                    :value="parseObj(formOptions['extra.intro'].item)"
                    :rows="6"
                    v-bind="formOptions['extra.intro'].item.componentProps"
                    clearable
                    size="small"
                    style="width: 400px"
                    @input="handleInput($event, formOptions['extra.intro'].item)"
                  />
                </el-form-item>
                <!-- 标签 -->
                <el-form-item
                  v-show="initFrom().includes('extra.tags')"
                  v-bind="formOptions['extra.tags'].item.props"
                >
                  <el-select
                    :value="parseObj(formOptions['extra.tags'].item)"
                    size="small"
                    style="width: 200px"
                    clearable
                    v-bind="formOptions['extra.tags'].item.componentProps"
                    @input="handleInput($event, formOptions['extra.tags'].item)"
                  >
                    <el-option
                      v-for="list in formOptions['extra.tags'].item.lists"
                      :key="list.value"
                      :label="list.label"
                      :value="list.value"
                    />
                  </el-select>
                </el-form-item>
                <!-- 关键词 -->
                <el-form-item
                  v-show="initFrom().includes('extra.keywords')"
                  v-bind="formOptions['extra.keywords'].item.props"
                >
                  <!-- 输入框 -->
                  <el-input
                    :value="parseObj(formOptions['extra.keywords'].item)"
                    :rows="4"
                    v-bind="formOptions['extra.keywords'].item.componentProps"
                    clearable
                    size="small"
                    style="width: 200px"
                    @input="handleInput($event, formOptions['extra.keywords'].item)"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <!-- 副标题 -->
                <el-form-item
                  v-show="initFrom().includes('extra.subtitle')"
                  v-bind="formOptions['extra.subtitle'].item.props"
                >
                  <!-- 输入框 -->
                  <el-input
                    :value="parseObj(formOptions['extra.subtitle'].item)"
                    :rows="4"
                    v-bind="formOptions['extra.subtitle'].item.componentProps"
                    clearable
                    size="small"
                    style="width: 200px"
                    @input="handleInput($event, formOptions['extra.subtitle'].item)"
                  />
                </el-form-item>
                <!-- 封面样式 -->
                <el-form-item
                  v-show="initFrom().includes('extra.cover_type')"
                  v-bind="formOptions['extra.cover_type'].item.props"
                >
                  <el-radio-group
                    size="small"
                    :value="parseObj(formOptions['extra.cover_type'].item)"
                    @input="handleInput($event, formOptions['extra.cover_type'].item)"
                    @change="handleTabChange"
                  >
                    <el-radio
                      v-for="list of formOptions['extra.cover_type'].item.lists"
                      :key="list.value"
                      :label="list.value"
                      style="line-height: 32px"
                    >{{ list.label }}</el-radio>
                  </el-radio-group>
                </el-form-item>
                <!-- 封面图片 -->
                <el-form-item
                  v-show="initFrom().includes('extra.cover')"
                  v-bind="formOptions['extra.cover'].item.props"
                >
                  <cropper
                    v-bind="formOptions['extra.cover'].item.componentProps"
                    :value="parseObj(formOptions['extra.cover'].item)"
                    @input="handleInput($event, formOptions['extra.cover'].item)"
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <!-- 编辑器 -->
                <el-form-item
                  v-show="initFrom().includes('extra.content')"
                  v-bind="formOptions['extra.content'].item.props"
                >
                  <editor
                    :value="parseObj(formOptions['extra.content'].item)"
                    @input="handleInput($event, formOptions['extra.content'].item)"
                  />
                </el-form-item>
                <!-- 视频 -->
                <el-form-item
                  v-show="initFrom().includes('extra.video_extra.video_list')"
                  v-bind="formOptions['extra.video_extra.video_list'].item.props"
                >
                  <div class="xl-add-media--upload" @click="handleChangeVideo">
                    <!--<i class="el-icon-video-camera-solid"></i>
                    <el-image
                      class="el-upload-list__item-thumbnail"
                      :src="parseObj(formOptions['extra.video_extra.video_list'].item)"
                      fit="cover"></el-image>-->
                  </div>
                </el-form-item>
                <!-- 图集的图片 -->
                <el-form-item
                  v-show="initFrom().includes('extra.album_extra.image_list')"
                  v-bind="formOptions['extra.album_extra.image_list'].item.props"
                >
                  <img-table
                    :value="parseObj(formOptions['extra.album_extra.image_list'].item)"
                    @input="handleInput($event, formOptions['extra.album_extra.image_list'].item)"
                  />
                </el-form-item>
                <!-- 链接类型 -->
                <el-form-item
                  v-show="initFrom().includes('extra.link.type')"
                  v-bind="formOptions['extra.link.type'].item.props"
                >
                  <el-radio-group
                    size="small"
                    :value="parseObj(formOptions['extra.link.type'].item)"
                    @input="handleInput($event, formOptions['extra.link.type'].item)"
                    @change="handleTabChange"
                  >
                    <el-radio v-for="list of formOptions['extra.link.type'].item.lists" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
                  </el-radio-group>
                </el-form-item>
                <!-- 链接地址 -->
                <el-form-item
                  v-show="initFrom().includes('extra.link.url')"
                  v-bind="formOptions['extra.link.url'].item.props"
                >
                  <el-input
                    :value="parseObj(formOptions['extra.link.url'].item)"
                    v-bind="formOptions['extra.link.url'].item.componentProps"
                    clearable
                    size="small"
                    style="width: 200px"
                    @input="handleInput($event, formOptions['extra.link.url'].item)"
                  />
                </el-form-item>
                <!-- 链接对象 -->
                <el-form-item
                  v-show="initFrom().includes('extra.link.id')"
                  v-bind="formOptions['extra.link.id'].item.props"
                >
                  <el-radio-group
                    size="small"
                    :value="parseObj(formOptions['extra.link.id'].item)"
                    @input="handleInput($event, formOptions['extra.link.id'].item)"
                    @change="handleTabChange"
                  >
                    <el-radio v-for="list of formOptions['extra.link.id'].item.lists" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="20" type="flex">
          <el-col :span="12">
            <div class="xl-add-media--bc xl-add-media--row">
              <el-row class="xl-add-media--title">
                <el-col :span="24">发布设置</el-col>
              </el-row>
              <!-- 定时发布 -->
              <el-form-item
                v-show="initFrom().includes('extra.publish_timer')"
                v-bind="formOptions['extra.publish_timer'].item.props"
              >
                <el-radio-group
                  size="small"
                  :value="parseObj(formOptions['extra.publish_timer'].item)"
                  @input="handleInput($event, formOptions['extra.publish_timer'].item)"
                  @change="handleTabChange"
                >
                  <el-radio v-for="list of formOptions['extra.publish_timer'].item.lists" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
                </el-radio-group>
              </el-form-item>
              <!-- 发布时间 -->
              <el-form-item
                v-show="initFrom().includes('extra.set_created_at')"
                v-bind="formOptions['extra.set_created_at'].item.props"
              >
                <el-date-picker
                  type="datetime"
                  size="small"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="选择日期时间"
                  :value="parseObj(formOptions['extra.set_created_at'].item)"
                  @input="handleInput($event, formOptions['extra.set_created_at'].item)"
                />
              </el-form-item>
              <!-- 作者 -->
              <el-form-item
                v-show="initFrom().includes('author_name')"
                v-bind="formOptions['author_name'].item.props"
              >
                <tag
                  :value="parseObj(formOptions['author_name'].item)"
                  @input="handleInput($event, formOptions['author_name'].item)"
                />
              </el-form-item>
              <!-- 编辑 -->
              <el-form-item
                v-show="initFrom().includes('editor_name')"
                v-bind="formOptions['editor_name'].item.props"
              >
                <tag
                  :value="parseObj(formOptions['editor_name'].item)"
                  @input="handleInput($event, formOptions['editor_name'].item)"
                />
              </el-form-item>
              <!-- 是否原创 -->
              <el-form-item
                v-show="initFrom().includes('extra.is_original')"
                v-bind="formOptions['extra.is_original'].item.props"
              >
                <el-radio-group
                  size="small"
                  :value="parseObj(formOptions['extra.is_original'].item)"
                  @input="handleInput($event, formOptions['extra.is_original'].item)"
                  @change="handleTabChange"
                >
                  <el-radio v-for="list of formOptions['extra.is_original'].item.lists" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
                </el-radio-group>
              </el-form-item>
              <!-- 来源 -->
              <el-form-item
                v-show="initFrom().includes('extra.source')"
                v-bind="formOptions['extra.source'].item.props"
              >
                <!-- 输入框 -->
                <el-input
                  :value="parseObj(formOptions['extra.source'].item)"
                  :rows="4"
                  v-bind="formOptions['extra.source'].item.componentProps"
                  clearable
                  size="small"
                  style="width: 200px"
                  @input="handleInput($event, formOptions['extra.source'].item)"
                />
              </el-form-item>
              <!-- 使用水印 -->
              <el-form-item
                v-show="initFrom().includes('extra.use_watermarks')"
                v-bind="formOptions['extra.use_watermarks'].item.props"
              >
                <el-radio-group
                  size="small"
                  :value="parseObj(formOptions['extra.use_watermarks'].item)"
                  @input="handleInput($event, formOptions['extra.use_watermarks'].item)"
                  @change="handleTabChange"
                >
                  <el-radio v-for="list of formOptions['extra.use_watermarks'].item.lists" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
                </el-radio-group>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="xl-add-media--bc xl-add-media--row">
              <el-row class="xl-add-media--title">
                <el-col :span="24">推广设置</el-col>
              </el-row>
              <!-- 评论控制-->
              <el-form-item
                v-show="initFrom().includes('extra.allow_comment')"
                v-bind="formOptions['extra.allow_comment'].item.props"
              >
                <el-radio-group
                  size="small"
                  :value="parseObj(formOptions['extra.allow_comment'].item)"
                  @input="handleInput($event, formOptions['extra.allow_comment'].item)"
                  @change="handleTabChange"
                >
                  <el-radio v-for="list of formOptions['extra.allow_comment'].item.lists" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
                </el-radio-group>
              </el-form-item>
              <!-- 允许分享 -->
              <el-form-item
                v-show="initFrom().includes('extra.allow_share')"
                v-bind="formOptions['extra.allow_share'].item.props"
              >
                <el-radio-group
                  size="small"
                  :value="parseObj(formOptions['extra.allow_share'].item)"
                  @input="handleInput($event, formOptions['extra.allow_share'].item)"
                  @change="handleTabChange"
                >
                  <el-radio v-for="list of formOptions['extra.allow_share'].item.lists" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
                </el-radio-group>
              </el-form-item>
              <!-- 同步生成语音稿件 -->
              <el-form-item
                label-width="150"
                v-show="initFrom().includes('extra.trans_to_audio')"
                v-bind="formOptions['extra.trans_to_audio'].item.props"
              >
                <el-radio-group
                  size="small"
                  :value="parseObj(formOptions['extra.trans_to_audio'].item)"
                  @input="handleInput($event, formOptions['extra.trans_to_audio'].item)"
                  @change="handleTabChange"
                >
                  <el-radio v-for="list of formOptions['extra.trans_to_audio'].item.lists" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
                </el-radio-group>
              </el-form-item>
              <!-- 点击量 -->
              <el-form-item
                v-show="initFrom().includes('extra.view_base_num')"
                v-bind="formOptions['extra.view_base_num'].item.props"
              >
                <el-input
                  :value="parseObj(formOptions['extra.view_base_num'].item)"
                  :rows="4"
                  v-bind="formOptions['extra.view_base_num'].item.componentProps"
                  clearable
                  size="small"
                  style="width: 200px"
                  @input="handleInput($event, formOptions['extra.view_base_num'].item)"
                />
              </el-form-item>
              <!-- 点赞量 -->
              <el-form-item
                v-show="initFrom().includes('extra.praise_base_num')"
                v-bind="formOptions['extra.praise_base_num'].item.props"
              >
                <el-input
                  :value="parseObj(formOptions['extra.praise_base_num'].item)"
                  :rows="4"
                  v-bind="formOptions['extra.praise_base_num'].item.componentProps"
                  clearable
                  size="small"
                  style="width: 200px"
                  @input="handleInput($event, formOptions['extra.praise_base_num'].item)"
                />
              </el-form-item>
              <!-- 转发量 -->
              <el-form-item
                v-show="initFrom().includes('extra.post_base_num')"
                v-bind="formOptions['extra.post_base_num'].item.props"
              >
                <el-input
                  :value="parseObj(formOptions['extra.post_base_num'].item)"
                  :rows="4"
                  v-bind="formOptions['extra.post_base_num'].item.componentProps"
                  clearable
                  size="small"
                  style="width: 200px"
                  @input="handleInput($event, formOptions['extra.post_base_num'].item)"
                />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-main>
    <!-- 选择视频弹框 -->
    <el-dialog
      width="1000px"
      :title="videoDialog.title"
      :visible.sync="videoDialog.show"
    >
      <xl-video></xl-video>
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
import xlVideo from '@/components/video'
import Editor from '@/components/editor'

export default {
  name: 'AddMedia',
  components: {
    Cropper,
    ImgTable,
    xlVideo,
    Tag,
    Editor
  },
  data() {
    const coverValidator = (rule, value, callback) => {
      const count = this.formOptions['extra.cover'].item.componentProps.count
      if (!Array.isArray(value) || value.length === 0) {
        callback(new Error('请上传图片'))
      } else if (!value.slice(0, count).every(n => n.path)) {
        callback(new Error(`请上传${count}张图片`))
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
            key: 'extra.title',
            props: {
              label: '标题:',
              prop: 'extra.title'
            },
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入稿件标题'
            }
          },
          rule: [
            { required: true, message: '请输入稿件标题', trigger: 'blur' }
          ]
        },
        'extra.subtitle': {
          item: {
            key: 'extra.subtitle',
            props: {
              label: '副标题:'
            },
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入稿件副标题'
            }
          }
        },
        'extra.cover_type': {
          item: {
            key: 'extra.cover_type',
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
            key: 'extra.cover',
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
            key: 'extra.intro',
            props: {
              label: '简介:'
            },
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入稿件简介',
              type: 'textarea',
              maxlength: 200
            }
          }
        },
        'extra.tags': {
          item: {
            key: 'extra.tags',
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
            key: 'extra.keywords',
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
            key: 'extra.publish_timer',
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
            key: 'extra.set_created_at',
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
            key: 'extra.video_extra.video_list',
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
            key: 'extra.album_extra.image_list',
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
            key: 'extra.content',
            props: {
              label: '编辑器:'
            },
            component: 'edit' // 组件名
          }
        },
        author_name: {
          item: {
            key: 'author_name',
            props: {
              label: '作者:'
            },
            component: 'tag' // 组件名
          }
        },
        editor_name: {
          item: {
            key: 'editor_name',
            props: {
              label: '编辑:'
            },
            component: 'tag' // 组件名
          }
        },
        'extra.is_original': {
          item: {
            key: 'extra.is_original',
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
            key: 'extra.source',
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
            key: 'extra.use_watermarks',
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
            key: 'extra.allow_comment',
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
            key: 'extra.allow_share',
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
        'extra.trans_to_audio': {
          item: {
            key: 'extra.trans_to_audio',
            props: {
              label: '同步生成语音稿件:',
              prop: 'extra.trans_to_audio'
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
            { required: true, message: '请选择是否同步生成语音稿件', trigger: 'change' }
          ]
        },
        'extra.view_base_num': {
          item: {
            key: 'extra.view_base_num',
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
            key: 'extra.praise_base_num',
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
            key: 'extra.post_base_num',
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
            key: 'extra.link.type',
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
            key: 'extra.link.id',
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
            key: 'extra.link.url',
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
          value: 'news'
        },
        {
          label: '视频',
          value: 'video'
        },
        {
          label: '图集',
          value: 'album'
        },
        {
          label: '外链',
          value: 'outer_link'
        }
      ], // tab按钮切换
      /* currentTabsFromItem: [], // 当前激活tab的表单显示数据*/
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
          content: '', // 编辑器内容
          is_original: 1, // 是否原创
          source: '', // 来源
          use_watermarks: 0, // 水印
          allow_comment: 0, // 评论控制
          allow_share: 1, // 允许分享
          trans_to_audio: 1, // 同步生成语音稿件
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
       this.videoDialog.show = true;
    },
    /* 控制视频弹框 (未完成)*/
    videoDialogControl(val) {
       this.videoDialog.show = false;
       if(val === 'confirm'){
          this.from.extra.link = {
            ...this.from.extra.link,
            id: this.videoDialog.radio,
            url: this.videoDialog.video
          }
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
      const baseBottomItem = ['author_name', 'editor_name', 'extra.is_original', 'extra.use_watermarks', 'extra.allow_comment', 'extra.allow_share', 'extra.trans_to_audio', 'extra.view_base_num', 'extra.praise_base_num', 'extra.post_base_num']
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
        case 'outer_link':
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
      const count = this.formOptions['extra.cover'].item.componentProps.count
      let arr, keyVal
      const obj = {
        ...currentTabsFromItem.reduce((obj, key) => {
          arr = key.split('.')
          if (arr[1]) {
            keyVal = this.from[arr[0]][arr[1]]
            obj[arr[0]][arr[1]] = arr[1] === 'cover' ? keyVal.slice(0, count) : keyVal
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
    /* 保存草稿 */
    handleDraft() {
      this.$refs.submitForm.validate(valid => {
        if (valid) {
          this.handleSave('保存草稿成功!')
        }
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
      this.$nextTick(() => {
          this.$refs.submitForm?.clearValidate()
      })
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
            cover_type: extra.cover_type || 1, // 封面样式 (正式数据需要修改)
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
            trans_to_audio: extra.trans_to_audio, // 同步生成语音稿件
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
