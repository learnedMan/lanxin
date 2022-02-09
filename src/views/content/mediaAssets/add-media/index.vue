<style type="text/scss" lang="scss">
  .xl-add-media {
    background-color: #f9f9f9;
    margin: -30px;
    padding: 10px;
    position: relative;
    .album-site{
      position: absolute;
      left: 130px;
      top: 70px;
    }
    .album-site-other{
      left: 360px!important;
    }
    &--header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      padding: 10px;
      // border: 1px solid;
      position: fixed;
      width: calc(100% - 225px);
      height: auto;
      top: 84px;
      z-index: 1000;
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
  .el-cascader-menu__wrap {
    height: 554px!important;
  }
  .el-scrollbar__wrap >.el-cascader__suggestion-list {
    max-height: 554px!important;
  }


</style>
<template>
  <el-container class="xl-add-media">
    <el-header class="xl-add-media--header" height="auto"  v-if="!disabled && this.typeDetails === 'script'" :style="{ justifyContent: isEdit && editorPerson? 'space-between' : 'flex-end' }">
      <div style="font-size: 14px;color: #606266;flex: 1" v-if="isEdit && editorPerson && !disabled">
        <span style="color: #409eff;margin-right: 10px">{{ editorPerson }}</span> 当前正在编辑该文稿
      </div>
      <div v-if="!disabled && this.typeDetails === 'script'">
        <el-button v-points = "1500"
          type="primary"
          size="small"
          @click="handleDraft"
          v-if="!onlyPublish"
        >
          保存稿件
        </el-button>
        <el-button v-points = "1500"
          type="primary"
          size="small"
          @click="handlePreview"
          v-if="!onlyPublish"
        >
          保存并预览
        </el-button>
        <el-button v-points = "1500"
          type="primary"
          size="small"
          @click="handlePublish"
        >
          保存并发布
        </el-button>
      </div>
    </el-header>
    <!-- <el-main style="padding: 10px 0;overflow: auto;"> -->
      <el-main style="padding: 60px 0 10px 0;overflow: auto;">
      <el-tabs v-model="from.extra.type" class="xl-add-media--tab" @tab-click="handleTabChange('tab',true)">
        <el-tab-pane
          v-for="item of tabs"
          :disabled="disabled || isEdit"
          :key="item.value"
          :label="item.label"
          :name="item.value"
        />
      </el-tabs>
      <el-form
        ref="submitForm"
        label-width="100px"
        size="small"
        :disabled="disabled"
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
                    @input="handleInput($event, formOptions['extra.title'].item)"
                  />
                </el-form-item>
                <!-- 简介 -->
                <el-form-item
                  v-show="initFrom().includes('extra.intro')"
                  v-bind="formOptions['extra.intro'].item.props"
                >
                  <!-- 输入框 -->
                  <el-input
                    :value="parseObj(formOptions['extra.intro'].item)"
                    :rows="6"
                    v-bind="formOptions['extra.intro'].item.componentProps"
                    clearable
                    size="small"
                    @input="handleInput($event, formOptions['extra.intro'].item)"
                  />
                </el-form-item>
                <div style="display: flex;justify-content: space-between;">
                  <div>
                    <!-- 标签 -->
                    <el-form-item
                      v-show="initFrom().includes('extra.tags')"
                      v-bind="formOptions['extra.tags'].item.props"
                    >
                      <el-select
                        :value="parseObj(formOptions['extra.tags'].item)"
                        size="small"
                        style="width: 200px;"
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
                  </div>
                  <div>
                    <!-- pc标题颜色 -->
                    <el-form-item
                      v-show="initFrom().includes('extra.title_color')"
                      v-bind="formOptions['extra.title_color'].item.props"
                    >
                      <el-select
                        :value="parseObj(formOptions['extra.title_color'].item)"
                        size="small"
                        style="width: 200px;"
                        clearable
                        v-bind="formOptions['extra.title_color'].item.componentProps"
                        @input="handleInput($event, formOptions['extra.title_color'].item)"
                      >
                        <el-option
                          v-for="list in formOptions['extra.title_color'].item.lists"
                          :key="list.value"
                          :label="list.label"
                          :value="list.value"
                        />
                      </el-select>
                    </el-form-item>
                  </div>
                </div>
                 <!-- <el-col :span="24">
                   <el-col :span="12">
                   </el-col>
                    <el-col :span="12">
                    </el-col>
                 </el-col> -->
                <!-- 关键词 -->
                <el-form-item
                  v-show="initFrom().includes('extra.keywords')"
                  v-bind="formOptions['extra.keywords'].item.props"
                >
                  <tag
                    :disabled="disabled"
                    :value="parseObj(formOptions['extra.keywords'].item)"
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
                    v-bind="formOptions['extra.subtitle'].item.componentProps"
                    clearable
                    size="small"
                    @input="handleInput($event, formOptions['extra.subtitle'].item)"
                  />
                </el-form-item>
                <!-- 封面样式 -->
                <el-form-item
                  v-show="initFrom().includes('extra.template_style')"
                  v-bind="formOptions['extra.template_style'].item.props"
                >
                  <el-radio-group
                    size="small"
                    :value="parseObj(formOptions['extra.template_style'].item)"
                    @input="handleInput($event, formOptions['extra.template_style'].item)"
                    @change="handleTabChange"
                  >
                     <el-radio
                      v-for="list of formOptions['extra.template_style'].item.lists"
                      :key="list.value"
                      :label="list.value"
                      style="line-height: 32px"
                    >
                      <el-popover
                        placement="top"
                        trigger="focus"
                      >
                        <span slot="reference">{{ list.label }}</span>
                        <img :src="require(`@/assets/media/${list.img}`)" alt="" width="300px" />
                      </el-popover>
                    </el-radio>
                  </el-radio-group>
                </el-form-item>
                <!-- 封面图片 -->
                <el-form-item
                  v-show="initFrom().includes('extra.cover')"
                  style="position:relative"
                  v-bind="formOptions['extra.cover'].item.props"
                >
                  <cropper
                    v-bind="formOptions['extra.cover'].item.componentProps"
                    :disabled="disabled"
                    :value="parseObj(formOptions['extra.cover'].item)"
                    @input="handleInput($event, formOptions['extra.cover'].item)"
                  />
                  <el-button v-points = "1500"
                    type="primary"
                    size="mini"
                    :class="['album-site',this.from.extra.template_style == '230' || this.from.extra.template_style == '231' ? 'album-site-other' : '']"
                    @click="slectAlbum"
                  >
                    从图库中选择
                  </el-button>
                  <ablumDialog
                    :dialogShow="ablumDialogShow"
                    @ablumCancel="ablumCancel"
                    @ablumConfirm="ablumConfirm"
                  />
                </el-form-item>
                <!-- 详情样式 -->
              <el-form-item
                v-show="initFrom().includes('extra.video_type')"
                v-bind="formOptions['extra.video_type'].item.props"
              >
                <el-radio-group
                  size="small"
                  :value="parseObj(formOptions['extra.video_type'].item)"
                  @input="handleInput($event, formOptions['extra.video_type'].item)"
                  @change="handleTabChange"
                >
                  <el-radio v-for="list of formOptions['extra.video_type'].item.lists" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
                </el-radio-group>
              </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <!-- 相关文稿 -->
                <el-form-item
                  v-show="initFrom().includes('extra.custom_rec')"
                  v-bind="formOptions['extra.custom_rec'].item.props"
                >
                  <script-select
                    :disabled="disabled"
                    :value="parseObj(formOptions['extra.custom_rec'].item)"
                    @input="handleInput($event, formOptions['extra.custom_rec'].item)"
                  ></script-select>
                </el-form-item>
                <!-- 使用水印 -->
                <el-form-item
                  v-show="initFrom().includes('extra.use_watermarks')"
                  v-bind="formOptions['extra.use_watermarks'].item.props"
                >
                  <el-select
                    :value="parseObj(formOptions['extra.use_watermarks'].item)"
                    size="small"
                    style="width: 200px;"
                    clearable
                    v-bind="formOptions['extra.use_watermarks'].item.componentProps"
                    @input="handleInput($event, formOptions['extra.use_watermarks'].item)"
                  >
                    <el-option
                      v-for="list in formOptions['extra.use_watermarks'].item.lists"
                      :key="list.value"
                      :label="list.label"
                      :value="list.value"
                    />
                  </el-select>
                  <!--<el-radio-group
                    size="small"
                    :value="parseObj(formOptions['extra.use_watermarks'].item)"
                    @input="handleInput($event, formOptions['extra.use_watermarks'].item)"
                    @change="handleTabChange"
                  >
                    <el-radio v-for="list of formOptions['extra.use_watermarks'].item.lists" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
                  </el-radio-group>-->
                </el-form-item>
                <!-- 编辑器 -->
                <el-form-item
                  v-show="initFrom().includes('extra.content')"
                  v-bind="formOptions['extra.content'].item.props"
                >
                  <editor
                    :watermark="watermark"
                    :position="parseObj(formOptions['extra.use_watermarks'].item)"
                    :disabled="disabled"
                    :zIndex="zIndex"
                    :value="parseObj(formOptions['extra.content'].item)"
                    @input="handleInput($event, formOptions['extra.content'].item)"
                    @changeVideoList="changeVideoList"
                  />
                </el-form-item>
                <!-- 视频 -->
                <el-form-item
                  v-show="initFrom().includes('extra.video_extra.video_list')"
                  v-bind="formOptions['extra.video_extra.video_list'].item.props"
                >
                  <div class="xl-add-media--upload" @click="handleChangeVideo">
                    <i class="el-icon-video-camera-solid" v-if="!from.extra.video_extra.video_list[0]"></i>
                    <el-image
                      v-else
                      lazy
                      style="width: 100%;height: 100%"
                      class="el-upload-list__item-thumbnail"
                      :src="from.extra.video_extra.video_list[0].cover"
                      fit="contain"></el-image>
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
                    @change="handleTabChangeType"
                  >
                    <el-radio style="margin-bottom:15px;" v-for="list of formOptions['extra.link.type'].item.lists" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
                  </el-radio-group>
                </el-form-item>
                <!-- 链接地址 -->
                <el-form-item
                  v-if="initFrom().includes('extra.link.url')"
                  v-bind="formOptions['extra.link.url'].item.props"
                >
                  <el-input
                    :value="parseObj(formOptions['extra.link.url'].item)"
                    v-bind="formOptions['extra.link.url'].item.componentProps"
                    clearable
                    size="small"
                    style="width: 600px"
                    @input="handleInput($event, formOptions['extra.link.url'].item)"
                  />
                </el-form-item>
                <!-- 链接对象 -->
                <el-form-item
                  v-show="initFrom().includes('target_obj')"
                  v-bind="formOptions['target_obj'].item.props"
                >
                  <el-radio-group
                    size="small"
                    :value="parseObj(formOptions['target_obj'].item)"
                    @input="handleInput($event, formOptions['target_obj'].item)"
                    @change="handleTabChange"
                  >
                    <el-radio v-for="list of formOptions['target_obj'].item.lists" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
                  </el-radio-group>
                </el-form-item>
                <!-- 栏目id,活动id,内部其他功能id -->
                <el-form-item
                  v-show="initFrom().includes('extra.link.id')"
                  v-bind="formOptions['extra.link.id'].item.props"
                  label-width="126px"
                >
                  <el-input
                    :value="parseObj(formOptions['extra.link.id'].item)"
                    v-bind="formOptions['extra.link.id'].item.componentProps"
                    clearable
                    size="small"
                    style="width: 350px"
                    @input="handleInput($event, formOptions['extra.link.id'].item)"
                  />
                </el-form-item>
                <el-row>
                  <el-col :span="12">
                    <!-- 活动地址 -->
                    <el-form-item
                      v-show="initFrom().includes('extra.activity_address')"
                      v-bind="formOptions['extra.activity_address'].item.props"
                    >
                      <el-input
                        :value="parseObj(formOptions['extra.activity_address'].item)"
                        v-bind="formOptions['extra.activity_address'].item.componentProps"
                        clearable
                        size="small"
                        style="width: 530px"
                        @input="handleInput($event, formOptions['extra.activity_address'].item)"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <!-- 活动开始时间 -->
                    <el-form-item
                      v-show="initFrom().includes('extra.activity_start_time')"
                      v-bind="formOptions['extra.activity_start_time'].item.props"
                    >
                      <el-date-picker
                        type="datetime"
                        size="small"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        placeholder="选择日期时间"
                        :value="parseObj(formOptions['extra.activity_start_time'].item)"
                        @input="handleInput($event, formOptions['extra.activity_start_time'].item)"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <!-- 活动结束时间 -->
                    <el-form-item
                      v-show="initFrom().includes('extra.activity_end_time')"
                      v-bind="formOptions['extra.activity_end_time'].item.props"
                    >
                      <el-date-picker
                        type="datetime"
                        size="small"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        placeholder="选择日期时间"
                        :value="parseObj(formOptions['extra.activity_end_time'].item)"
                        @input="handleInput($event, formOptions['extra.activity_end_time'].item)"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- 薪资区间 -->
                <el-form-item
                  v-show="initFrom().includes('extra.salary_range.min')"
                  label="薪资区间:"
                  label-width="100px"
                >
                  <el-col :span="4">
                    <el-form-item v-bind="formOptions['extra.salary_range.min'].item.props">
                      <el-input-number
                        :controls="false"
                        :precision="0"
                        :max="from.extra.salary_range.max || Infinity"
                        v-model="from.extra.salary_range.min"
                        v-bind="formOptions['extra.salary_range.min'].item.componentProps"
                        style="width: 100%"
                        clearable
                      ></el-input-number>
                    </el-form-item>
                  </el-col>
                  <el-col class="line" :span="2" style="text-align: center">-</el-col>
                  <el-col :span="4">
                    <el-form-item v-bind="formOptions['extra.salary_range.max'].item.props">
                      <el-input-number
                        :controls="false"
                        :precision="0"
                        :min="from.extra.salary_range.min || 0"
                        v-model="from.extra.salary_range.max"
                        v-bind="formOptions['extra.salary_range.max'].item.componentProps"
                        style="width: 100%"
                        clearable
                      ></el-input-number>
                    </el-form-item>
                  </el-col>
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
                v-show="initFrom().includes('extra.publish_timer.status')"
                v-bind="formOptions['extra.publish_timer.status'].item.props"
              >
                <el-radio-group
                  size="small"
                  :value="parseObj(formOptions['extra.publish_timer.status'].item)"
                  @input="handleInput($event, formOptions['extra.publish_timer.status'].item)"
                  @change="handleTabChange"
                >
                  <el-radio v-for="list of formOptions['extra.publish_timer.status'].item.lists" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
                </el-radio-group>
              </el-form-item>
              <!-- 定时发布时间 -->
              <el-form-item
                label-width="130"
                v-show="initFrom().includes('extra.publish_timer.publish_at')"
                v-bind="formOptions['extra.publish_timer.publish_at'].item.props"
              >
                <el-date-picker
                  type="datetime"
                  size="small"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="选择日期时间"
                  :value="parseObj(formOptions['extra.publish_timer.publish_at'].item)"
                  @input="handleInput($event, formOptions['extra.publish_timer.publish_at'].item)"
                />
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
                  :disabled="disabled"
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
                  :disabled="disabled"
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
                <!-- <el-input
                  :value="parseObj(formOptions['extra.view_base_num'].item)"
                  :rows="4"
                  v-bind="formOptions['extra.view_base_num'].item.componentProps"
                  clearable
                  size="small"
                  style="width: 200px"
                  @input="handleInput($event, formOptions['extra.view_base_num'].item)"
                /> -->
                <!-- :min="viewBaseInterval.min"
                  :max="viewBaseInterval.max" -->
                <el-input-number
                  :controls="false"
                  :precision="0"
                  v-model="from.extra.view_base_num"
                  :placeholder="basePlaceholder"
                  style="width: 200px"
                  clearable
                ></el-input-number>
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
    <el-footer class="xl-news-media--footer" height="40px" v-if="!disabled && this.typeDetails === 'news'">
      <el-button v-points = "1500"
        type="primary"
        size="small"
        @click="handleClose"
      >
        关闭
      </el-button>
      <el-button v-points = "1500"
        type="primary"
        size="small"
        @click="handlePublish"
      >
        保存
      </el-button>
    </el-footer>
    <!-- 选择视频弹框 -->
    <el-dialog
      width="1000px"
      top="4vh"
      :title="videoDialog.title"
      :visible.sync="videoDialog.show"
    >
      <xl-video @choose="videoDialogControl"></xl-video>
    </el-dialog>
     <!-- 上传本地视频 -->
     <el-dialog
        width="600px"
        title="上传视频"
        :visible.sync="uploadDialog.show"
      >
        <el-form
          ref="integralForm"
          size="small"
          label-width="100px"
        > 
        <el-form-item label="视频:" prop="video">
         <upload-video v-model="uploadDialog.path_video"></upload-video>
        </el-form-item>
        <el-form-item label="图片:" prop="picture">
           <cropper
            :count="1"
            :showTip="false"
            v-model="uploadDialog.path_list"
            />
        </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button v-points = "1500" @click="uploadDialog.show = false">
            取 消
          </el-button>
          <el-button v-points = "1500"
            type="primary"
            @click="enterUploadDialog"
          >
            确 定
          </el-button>
        </div>
      </el-dialog>
    <!-- 发布到栏目 -->
      <el-dialog
        width="600px"
        :title="dialog.title"
        :close-on-click-modal="false"
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
              filterable
              v-model="dialog.form.channel_id"
              style="width: 350px;"
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
          <el-button v-points = "1500" @click="cancelDialog">
            取 消
          </el-button>
          <el-button v-points = "1500"
            type="primary"
            :loading="publishLoading"
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
import { getLabels, getScriptDetail, changeScripts, changeNews, getEditorPerson, getNewDetail, getNews, } from '@/api/content'
import { getChannels,getproduct,checkSensitword } from '@/api/manage'
import Tag from '@/components/media/tag'
import ImgTable from '@/components/media/imgTable'
import scriptSelect from '@/components/media/scriptSelect.vue'
import xlVideo from '@/components/video'
import Editor from '@/components/editor'
import uploadVideo from '@/components/Upload/uploadVideo.vue'
import ablumDialog from './ablum.vue'
export default {
  name: 'Add-media',
  components: {
    Cropper,
    ImgTable,
    xlVideo,
    Tag,
    Editor,
    scriptSelect,
    ablumDialog,uploadVideo
  },
  props: {
    id: {
      type: [Number, String],
      default: null
    },
   /* 是否禁用  根据typeDetails类型来判断 */
    disabledNews: {
      type: Boolean,
      default: false
    },
   /*编辑器的层级*/ 
    zIndex: {
      type: Number,
      // default: 900
      default: 2000
    },
  /* 类型 */
    typeDetails: {
      type: String,
      default: 'script'
    },
    /* 自定义请求函数 */
    fetchSuggestions: Function
  },
  data() {
    const coverValidator = (rule, value, callback) => {
      const count = this.formOptions['extra.cover'].item.componentProps.count
      const typeValue = this.from.extra.template_style
      if ((!Array.isArray(value) || value.length === 0) && typeValue != '240') {
        callback(new Error('请上传封面图片'))
      } else if ((!value.slice(0, count).every(n => n.path)) && typeValue != '240') {
        callback(new Error(`请上传${count}张封面图片`))
      } else {
        callback()
      }
    }
    const validateViewBaseNum = (rule, value, callback) => {
      if(!value){
        this.from.extra.view_base_num = 0
        callback()
      }else if (!(/(^[0-9]\d*$)/.test(value))) {
        callback(new Error(`请输入大于零的正整数`))
      } else {
        callback()
      }
    }
    const imgListValidator = (rule, value, callback) => {
      if (!Array.isArray(value) || value.length === 0) {
        callback(new Error('请上传图片'))
      } else if (!value.every(n => Object.keys(n).every(key => key === 'intro' || n[key] !== ''))) {
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
        'extra.template_style': {
          item: {
            key: 'extra.template_style',
            props: {
              label: '封面样式:',
              prop: 'extra.template_style'
            },
            component: 'radio', // 组件名
            lists: [
              {
                label: '左图+标题1',
                value: '220',
                count: 1,
                img: '1402-220.png'
              },
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
              },
              {
                label: '活动列表',
                value: '204',
                count: 1,
                img: '1402-204.png'
              },
              {
                label: '活动大图',
                value: '205',
                count: 1,
                img: '1402-205.png'
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
         'extra.title_color': {
          item: {
            key: 'extra.title_color',
            props: {
              label: 'PC标题颜色:'
            },
            component: 'select', // 组件名
            componentProps: {
              placeholder: '请选择PC标题颜色',
              multiple: false
            },
            lists: [
              {
                label: '黑色',
                value: 'normal'
              },
              {
                label: '红色',
                value: 'red'
              },
              {
                label: '蓝色',
                value: 'blue'
              }
            ]
          }
        },
        'extra.keywords': {
          item: {
            key: 'extra.keywords',
            props: {
              label: '关键词:'
            },
            component: 'tag', // 组件名
          }
        },
        'extra.publish_timer.status': {
          item: {
            key: 'extra.publish_timer.status',
            props: {
              label: '定时发布:',
              prop: 'extra.publish_timer.status'
            },
            component: 'radio', // 组件名
            lists: [
              {
                label: '是',
                value: '1'
              },
              {
                label: '否',
                value: '0'
              },
            ]
          },
          rule: [
            { required: true, message: '请选择是否定时发布', trigger: 'change' }
          ]
        },
        'extra.publish_timer.publish_at': {
          item: {
            key: 'extra.publish_timer.publish_at',
            props: {
              label: '定时发布时间:',
              prop: 'extra.publish_timer.publish_at'
            },
            component: 'date' // 组件名
          },
          rule: [
            { required: true, message: '请选择定时发布时间', trigger: 'change' }
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
          /*rule: [
            { required: true, message: '请选择发布时间', trigger: 'change' }
          ]*/
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
              label: '编辑器:',
              prop: 'extra.content'
            },
            component: 'edit' // 组件名
          },
          rule: [
            { required: true, message: '请输入编辑器内容', trigger: 'blur' }
          ]
        },
        author_name: {
          item: {
            key: 'author_name',
            props: {
              label: '编辑:'
            },
            component: 'tag' // 组件名
          }
        },
        editor_name: {
          item: {
            key: 'editor_name',
            props: {
              label: '作者:'
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
                value: '1'
              },
              {
                label: '来源',
                value: '0'
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
              label: '水印位置:',
              prop: 'extra.use_watermarks'
            },
            component: 'select', // 组件名
            componentProps: {
              placeholder: '请选择水印位置(无表示不使用水印)',
            },
            lists: [
              {
                value: "nw",
                label: "左上",
              },
              {
                value: "north",
                label: "中上",
              },
              {
                value: "ne",
                label: "右上",
              },
              {
                value: "west",
                label: "左",
              },
              {
                value: "center",
                label: "中",
              },
              {
                value: "east",
                label: "右",
              },
              {
                value: "sw",
                label: "左下",
              },
              {
                value: "south",
                label: "中下",
              },
              {
                value: "se",
                label: "右下",
              },
              {
                value: "",
                label: "无",
              }
            ]
          }
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
                value: '0'
              },
              {
                label: '先发后审',
                value: '1'
              },
              {
                label: '禁止评论',
                value: '2'
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
                value: '1'
              },
              {
                label: '否',
                value: '0'
              }
            ]
          },
          rule: [
            { required: true, message: '请选择是否允许分享', trigger: 'change' }
          ]
        },
        'extra.video_type': {
          item: {
            key: 'extra.video_type',
            props: {
              label: '详情样式:',
              prop: 'extra.video_type'
            },
            component: 'radio', // 组件名
            lists: [
              {
                label: '横版',
                value: '1'
              },
              {
                label: '竖版',
                value: '2'
              }
            ]
          },
          // rule: [
          //   { required: true, message: '请选择是否允许分享', trigger: 'change' }
          // ]
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
                value: '1'
              },
              {
                label: '否',
                value: '0'
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
              label: '点击量:',
              prop: 'extra.view_base_num'
            },
            type: 'number',
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入数值'
            }
          },
          rule: [
            { required: false, validator: validateViewBaseNum, trigger: 'blur'  }
          ]
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
        'extra.custom_rec': {
          item: {
            key: 'extra.custom_rec',
            props: {
              label: '相关文稿:'
            },
            component: 'scriptSelect', // 组件名
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
                label: '外链',
                value: 'outer_link'
              },
              {
                label: '目标对象',
                value: 'target_obj'
              },
              {
                label: '授权外链',
                value: 'auth_link'
              },
              {
                label: '看报纸',
                value: 'newspaper'
              },
              {
                label: '乡镇首页',
                value: 'matrix',
                relatedLabel: '对应矩阵栏目ID'
              },
              {
                label: '专题',
                value: 'topic',
                relatedLabel: '专题栏目ID'
              },
              {
                label: '多模块专题',
                value: 'multi_model_topic',
                relatedLabel: '多模块专题栏目ID'
              },
              {
                label: '活动',
                value: 'activity',
                // relatedLabel: '活动地址'
              },
              {
                label: '视频点播列表',
                value: 'vod_list',
                relatedLabel: '栏目id'
              },
              {
                label: '多层级',
                value: 'm_level',
                relatedLabel: '栏目id'
              },
               {
                label: '地图',
                value: 'map',
                relatedLabel: '栏目id'
              },
              {
                label: '领导人',
                value: 'leader',
                relatedLabel: '栏目id'
              },
              {
                label: '矩阵列表',
                value: 'matrix_list',
                relatedLabel: '栏目id'
              },
              {
                label: '无跳转',
                value: 'none',
              }
            ]
          },
          rule: [
            { required: true, message: '请选择链接类型', trigger: 'change' }
          ]
        },
        target_obj: {
          item: {
            key: 'target_obj',
            props: {
              label: '链接对象:',
              prop: 'target_obj'
            },
            component: 'radio', // 组件名
            lists: [
              {
                label: '看电视',
                value: 'tv'
              },
              {
                label: '听广播',
                value: 'radio'
              },
              {
                label: '爆料',
                value: 'tip-off'
              },
              {
                label: '服务',
                value: 'service'
              },
              {
                label: '电视+点播',
                value: 'tv_and_vod'
              },
               {
                label: '扫一扫',
                value: 'scan'
              },
              {
                label: '天气',
                value: 'weather'
              }
            ]
          },
          rule: [
            { required: true, message: '请选择链接对象', trigger: 'change' }
          ]
        },
        'extra.link.id': {
          item: {
            key: 'extra.link.id',
            props: {
              label: 'ID:',
              prop: 'extra.link.id'
            },
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入ID'
            }
          },
          rule: { required: true, message: '请选择链接对象', trigger: 'change' }
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
        },
        'extra.activity_address': {
          item: {
            key: 'extra.activity_address',
            props: {
              label: '活动地址:',
              prop: 'extra.activity_address'
            },
            component: 'input', // 组件名
            componentProps: {
              placeholder: '请输入活动地址'
            }
          },
          rule: [
            { required: true, message: '请输入活动地址', trigger: 'blur' }
          ]
        },
        'extra.activity_start_time': {
          item: {
            key: 'extra.activity_start_time',
            props: {
              label: '开始时间:',
              prop: 'extra.activity_start_time'
            },
            component: 'date' // 组件名
          },
          rule: [
            { required: true, message: '请选择活动开始时间', trigger: 'change' }
          ]
        },
        'extra.activity_end_time': {
          item: {
            key: 'extra.activity_end_time',
            props: {
              label: '结束时间:',
              prop: 'extra.activity_end_time'
            },
            component: 'date' // 组件名
          },
          rule: [
            { required: true, message: '请选择活动结束时间', trigger: 'change' }
          ]
        },
        'extra.salary_range.min': {
          item: {
            key: 'extra.salary_range.min',
            props: {
              prop: 'extra.salary_range.min'
            },
            componentProps: {
              placeholder: '请输入最小薪资'
            }
          }
        },
        'extra.salary_range.max': {
          item: {
            key: 'extra.salary_range.max',
            props: {
              prop: 'extra.salary_range.max'
            },
            componentProps: {
              placeholder: '请输入最大薪资'
            }
          }
        },
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
      checkStatus: false, //审核状态
      editorChangeValue: false,
      editorOldValue: '',
      titleChageValue: false,
      titleOldValue: '',
      ablumDialogShow: false,
      enable_sensitive_word_filter: '0', //敏感词开关 0 禁止 1开启
      sourceId: '',// sourceId 敏感词检测
      newsId: '', //保存草稿再发布需要的id
      detailsType: '', //采集文章管理稿件 和其他稿件 获取详情接口区别
      channel_idOld: [], //
      editorSaveFlag: true,// 自动保存开关
      refreshToken: false, //刷新token开关
      from: {
        author_name: '', // 作者
        editor_name: '', // 编辑
        target_obj: 'tv', // 和链接类型关联
        extra: {
          type: 'news', // 类型
          title: '', // 标题
          subtitle: '', // 副标题
          template_style: '220', // 封面样式
          cover: [], // 封面样式的图片集合
          intro: '', // 简介
          tags: '', // 标签
          title_color: '',//标题颜色
          keywords: '', // 关键词
          video_type: '1', //详情样式
          publish_timer: {
            publish_at: '',
            status: '0'
          }, // 定时发布
          set_created_at: '', // 发布时间
          activity_address: '',//活动地址
          activity_start_time: '', //活动开始时间
          activity_end_time: '', //活动结束时间
          content: '', // 编辑器内容
          is_original: '1', // 是否原创
          source: '', // 来源
          use_watermarks: '', // 水印
          allow_comment: '1', // 评论控制
          allow_share: '1', // 允许分享
          trans_to_audio: '1', // 同步生成语音稿件
          view_base_num: undefined, // 点击量
          praise_base_num: '', // 点赞量
          post_base_num: '', // 转发量
          custom_rec: [], // 关联文稿
          video_extra: {
            video_list: []
          }, // 视频
          album_extra: {
            image_list: []
          }, // 图片
          link: {
            type: 'outer_link', // 链接类型
            id: '', // 链接对象
            url: '' // 链接地址
          }, // 外链
          salary_range: {
            min: undefined,
            max: undefined
          } // 薪资
        }
      }, // 表单
      videoDialog: {
        title: '选择视频',
        show: false,
      }, // 选择视频弹框
      uploadDialog: {
        show: false,
        path_video: '',
        path_list: []
      },
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
        multiple: true, // 多选
      }, // 级联选择器配置
      channelsList: [], // 栏目列表
      editorVideoLists: [], // 编辑器视频集合
      editorPerson: '',
      publishLoading: false, // 发布确认loading
    }
  },
  watch: {
    'from.extra.content': {
      handler: function(newValue,oldValue) {
        this.refreshToken = true
        if(this.from.extra.type !== 'news') return
        if(newValue != this.editorOldValue) this.editorChangeValue = true //编辑器内容变化了开启自动保存
        var bdhhtml = document.getElementById('bdh').innerHTML;
        if(bdhhtml==1){
          this.$message.warning('正在图片本地化，请稍后')
          return
        }
              let arr = this.getFirstImg(newValue) || []
              let defaultImg = '/UEditor/themes/default/images/spacer.gif'
              let  coverFlag =  null
              if(this.from.extra.template_style == '230' || this.from.extra.template_style == '231') {
                coverFlag = this.from.extra.cover.length ? this.from.extra.cover.every(v => v.path !='') : false
              }else{
                coverFlag = this.from.extra.cover[0]?.path
              }
            if(!coverFlag && arr[0] != defaultImg && arr[0] !=undefined) {
              // if(!arr.length) return
              if(this.from.extra.template_style == '230' || this.from.extra.template_style == '231') {
                let list = arr.slice(0,3),arr_ = []
                list.map(v =>{
                  let obj = {}
                  obj.path = v
                  obj.status = 'success'
                  arr_.push(obj)
                })
                this.from.extra.cover = arr_
              }else{
                let list = [{path:''},{path:''}]
                let obj = {
                  path: arr[0],
                  status: 'success'
                }
                list.unshift(obj)
                this.from.extra.cover = list
              }
            }
         },
    },
    'from.extra.album_extra': {
      handler: function(newValue,oldValue) {
        if(this.from.extra.type !== 'album') return
        console.log('图集',newValue)
        if(this.from.extra.type == 'album') {
          let arr = newValue.image_list || []
          if(this.from.extra.template_style == '230' || this.from.extra.template_style == '231') {
            let list = arr.slice(0,3)
            this.from.extra.cover = list.map(v =>{
              v.status = 'success'
              delete v.sort
              return v
            })
          }else{
            let list = [{path:''},{path:''}]
                  let obj = {
                    path: arr[0].path,
                    status: 'success'
                  }
                  list.unshift(obj)
                  this.from.extra.cover = list
          }
        }
      },
      deep: true
    },
    'from.extra.title': {
      handler: function(newValue,oldValue) {
        if(newValue != this.titleOldValue) {
          this.titleChageValue = true
          }
      }
    }
  },
  computed: {
    /* 上传接口 */
    actionUrl() {
      return this.imgurl
    },
    /* 文稿id */
    scriptsId ({ $route }) {
      return $route.query.id || this.id;
    },
    /* 禁用 */
    disabled ({ $route }) {
      if ( this.typeDetails === 'news') return this.disabledNews
      return $route.query.disabled === '1' || this.id != null;
    },
    mediaArticle ({ $route}) {
      return $route.query.media === '1'
    },
    /* 是否只有发布按钮 */
    onlyPublish ({ $route }) {
      return $route.query.channelId
    },
    /* 是否为编辑 */
    isEdit ({ scriptsId }) {
      return scriptsId != null;
    },
    /* 当前已有的标签页 */
    visitedViews() {
      return this.$store.state.tagsView.visitedViews
    },
    /* 点击量区间 */
    viewBaseInterval ({ $store: { state: { user: { u_info } } } }) {
      const extra = u_info.site.extra || {};
      //const multiple = Number(extra.multiplying_factor || 1); 
      const max = Number(extra.random_view_range?.max || 0) || Infinity;
      const min = Number(extra.random_view_range?.min || 0);
      return {
        min,
        max
      }
    },
    /* 基础点击量的提示 */
    basePlaceholder ({ viewBaseInterval: { max, min } }) {
      if(max === Infinity) return `请输入大于${min}的的正整数`;
      return `请输入${min}-${max}的正整数`
    },
    /* 水印图片 */
    watermark ({ $store: { state: { user: { u_info } } } }) {
      const extra = u_info.site.extra || {};
      return extra.watermark || ''
    },
  },
  async created() {
    let newsAdd =  JSON.parse(localStorage.getItem('addNews'))
    if(!Array.isArray(newsAdd))localStorage.removeItem('addNews')
    let siteName = this.$store.state.user.u_info.site.name,siteObj = this.$store.state.user.u_info
    console.log('站点信息',this.$store.state.user.u_info)
    this.enable_sensitive_word_filter = siteObj.site.extra.enable_sensitive_word_filter || '0'
    if(siteName.indexOf('青田')> -1) {
      let obj = {
        label: '早播报',
        value: 'morning_news',
        relatedLabel: '栏目id'
      }
      this.formOptions['extra.link.type'].item.lists.splice(11,0,obj)
    }
    /*定时发布*/
     if(this.scriptsId  || this.id) {
       let obj =  { label: '已处理',value: '2'}
        this.formOptions['extra.publish_timer.status'].item.lists.push(obj)
     }
    // 图片本地化初始化
    var bdhhtml = document.getElementById('bdh');
    bdhhtml.innerHTML=0;

    if(this.isEdit && !this.disabled) {
      let timer = setInterval(() => {
        this.getEditorPerson();
      }, 8000)
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer);
      })
    }
    this.detailsType = this.$route.query?.detailsType || 'scripts'
    this.getChannels()
    await this.getLabels()
    await this.getList()
    this.handleTabChange()
    this.getproductList()
    let editorTime = setInterval(() => {
      if(this.editorSaveFlag) this.editorSelfSave()
    },30000)
    let refreshToken = setInterval(() =>{
        this.refreshToken = false
    }, 5*60*1000)
    let tokenID = setInterval(() => {
      if(this.refreshToken) this.getproductList()
    }, 10*60*1000);
    this.$once('hook:beforeDestroy', () => {
        clearInterval(editorTime);
        clearInterval(refreshToken)
        clearInterval(tokenID)
      })
  },
  methods: {
    /* 解析路径返回值 */
    parseObj(item) {
      const arr = item.key.split('.')
      const val = arr.reduce((obj, key) => obj[key], this.from)
      return item.component === 'select' && item.componentProps.multiple ? val && val.toString().split(',') : val
    },
    /*从图库选择封面*/
    slectAlbum() {
      this.ablumDialogShow = true
    },
    ablumConfirm(arr) {
      console.log('图集选中的值',arr)
      let value = this.from.extra.template_style
      let list = []
      if(value == '230' || value == '231') {
        let arr_ = arr.length > 3 ? arr.slice(0,3) : arr
         list = arr_.map(v =>{
          let obj = {}
           obj.path = v
           obj.status = 'success'
           return obj
        })
      }else{
        let obj = {
          path: arr[0],
          status: 'success'
        }
        list.push(obj)
      }
      console.log('list',list)
      this.from.extra.cover = list
    },
    ablumCancel() {
      this.ablumDialogShow = false
    },
    /* 删除本地存储 */
    delLocalStorage() {
      console.log('删除本地缓存')
      let id = this.scriptsId || this.id
      let siteId = this.$store.state.user.u_info.site_id //站点id
      if (id) {
        let list = JSON.parse(localStorage.getItem('editNews')) || []
        list.map((v,index) =>{
          if(v.id == id && v.siteId == siteId) {
            list.splice(index,1)
          }
        })
        localStorage.setItem('editNews',JSON.stringify(list))
      }else{
        let list = JSON.parse(localStorage.getItem('addNews')) || []
         list.map((v,index) =>{
          if(v.siteId == siteId) {
            list.splice(index,1)
          }
        })
        console.log('list',list)
        localStorage.setItem('addNews',JSON.stringify(list))
        // localStorage.removeItem('addNews')
      }
    },
    /*获取sourceId*/
    getproductList(){
        getproduct({}).then((response) => {
            let obj = response.data.find(v => v.type == 'app');
            this.sourceId = obj.source_id || '';
        });
      },
    /*抓取编辑器文章中的第一张图片*/
    getFirstImg (html) {
      var a = html
      var arrimg = []
      a.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
        arrimg.push(capture)
      })
      if (arrimg != null && arrimg.length > 0) {
        return arrimg
      }
      return ''
    },
    /*编辑器每30s自动保存*/ 
    editorSelfSave() {
      if (this.from.extra.type === 'news' && (this.from.extra.title || this.from.extra.content) && !this.disabled) {
        if (this.scriptsId == null && this.id == null) {
          let siteId = this.$store.state.user.u_info.site_id //站点id
          let obj = {
            siteId: siteId,
            title: this.from.extra.title,
            content: this.from.extra.content
          }
          //先判断是否存储过稿件
          if(localStorage.getItem('addNews')) {
            let list = JSON.parse(localStorage.getItem('addNews'))
            let IsExist = list.some(v => v.siteId == siteId)
            if(IsExist) {
              list.map(v =>{
                if(v.siteId == siteId) {
                  v.title = this.from.extra.title
                  v.content = this.from.extra.content
                }
              })
            }else{
              list.push(obj)
            }
            localStorage.setItem('addNews',JSON.stringify(list))
          }else{
            let arr = []
            arr.push(obj)
            localStorage.setItem('addNews',JSON.stringify(arr))
          }
        } else if(this.editorChangeValue || this.titleChageValue){
          let arr = [],id = this.scriptsId || this.id
          let siteId = this.$store.state.user.u_info.site_id //站点id
          let editObj = {
            id: this.scriptsId || this.id,
            siteId: siteId,
            title: this.from.extra.title,
            content: this.from.extra.content,
          }
          // localStorage.setItem('editNews')
          //先判断是否第一次存编辑的稿件
          if (localStorage.getItem('editNews')) {
            let list = JSON.parse(localStorage.getItem('editNews'))
            let IsExist = list.some(v => v.id == id)
            let siteFlag = list.some(v => v.siteId == siteId)
            if (IsExist && siteFlag) {
              list.map(v =>{
                if(v.id == id) {
                  v.title = this.from.extra.title
                  v.content = this.from.extra.content
                }
              })
            } else {
              list.push(editObj)
            }
              localStorage.setItem('editNews',JSON.stringify(list))
          }else{
            arr.push(editObj)
            localStorage.setItem('editNews',JSON.stringify(arr))
          }
        }
      }
    },
    /* 使用本地缓存提示 */
    userNewsLocalStorgeTips (obj) {
       this.$confirm('是否使用上次本地缓存?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
           this.from.extra.title = obj.title
           this.from.extra.content = obj.content
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
    },
    /* 值变化 */
    handleInput(val, item) {
      const arr = item.key.split('.')
      const type = item.type || 'string'
      if (type === 'number') val = parseInt(val) || ''
      arr.reduce((obj, key) => {
        if (key === arr[arr.length - 1]) obj[key] = item.component === 'select' && item.componentProps.multiple ? val.join() : val
        else return obj[key]
      }, this.from)
    },
    /*
    * 显示选择视频弹框
    * */
    handleChangeVideo() {
      if(this.disabled) return
      if(window.location.host.indexOf('pub.cztvcloud.com')>-1 || window.location.host.indexOf('batrix-www.cztv.com') > -1 || window.location.host.indexOf('batrix-www-local') > -1) {
        this.uploadDialog.show = true
      }else{
        this.videoDialog.show = true;
      }
    },
    /*乡镇上稿本地视频上传*/
    enterUploadDialog() {
      let cover = this.uploadDialog.path_list[0]?.path || ''
      let item_list = [{
        path: this.uploadDialog.path_video
      }]
      let list =  [{cover,item_list}]
       if(this.uploadDialog.path_video) {
         this.from.extra.video_extra.video_list = list
         this.uploadDialog.show = false
        }else{
          this.$message('请上传视频')
        }
    },
    /* 控制视频弹框*/
    videoDialogControl(val) {
      this.videoDialog.show = false;
      this.from.extra.video_extra.video_list = [val];
    },
    /* 处理需要传给后台的数据 */
    initFrom() {
      let arr = []
      const template_style = this.formOptions['extra.template_style'].item.lists.find(n => n.value === this.from.extra.template_style)
      // 确定图片显示个数
      this.formOptions['extra.cover'].item.componentProps.count = template_style?.count || 1
      // 基础显示的item
      const baseTopItem = ['extra.title', 'extra.subtitle', 'extra.template_style', 'extra.cover','extra.publish_timer.status', 'extra.intro', 'extra.tags', 'extra.title_color', 'extra.keywords', 'extra.set_created_at']
      // if (this.typeDetails === 'news') baseTopItem.push('extra.publish_timer.status')
      // 显示发布时间
      if ( this.from.extra.publish_timer.status === '1') baseTopItem.push('extra.publish_timer.publish_at')
      // const baseBottomItem = ['author_name', 'editor_name', 'extra.is_original', 'extra.allow_comment', 'extra.allow_share', 'extra.trans_to_audio', 'extra.view_base_num', 'extra.praise_base_num', 'extra.post_base_num']
      const baseBottomItem = ['editor_name', 'extra.is_original', 'extra.allow_comment', 'extra.allow_share', 'extra.trans_to_audio', 'extra.view_base_num', 'extra.praise_base_num', 'extra.post_base_num']
      // 显示来源
      if (this.from.extra.is_original === '0') baseBottomItem.splice(2, 0, 'extra.source')
      switch (this.from.extra.type) {
        case 'news':
          arr = [...baseTopItem, 'extra.content', 'extra.custom_rec', 'extra.use_watermarks', ...baseBottomItem]
          break
        case 'video':
          arr = [...baseTopItem, 'extra.video_extra.video_list', 'extra.custom_rec','extra.video_type', ...baseBottomItem]
          break
        case 'album':
          arr = [...baseTopItem, 'extra.album_extra.image_list', ...baseBottomItem]
          break
        case 'outer_link':
          // arr = [...baseTopItem, 'extra.link.type', 'extra.salary_range.min', 'extra.salary_range.max','extra.view_base_num', 'extra.praise_base_num', 'extra.post_base_num','extra.allow_share'];
          arr = [...baseTopItem, 'extra.link.type', 'extra.view_base_num', 'extra.praise_base_num', 'extra.post_base_num','extra.allow_share'];
          const type = this.from.extra.link.type;
          // if (this.scriptsId == null && this.id == null) this.from.extra.template_style = '240'
          if (type === 'target_obj'){
            arr.push('target_obj');
          } else if(['outer_link', 'auth_link', 'newspaper'].includes(type)) { 
            arr.push('extra.link.url')
          }else if(type === 'activity') {
            arr.push('extra.activity_address','extra.activity_start_time','extra.activity_end_time')
          } else if(type !== 'none') {
            const current = this.formOptions['extra.link.type'].item.lists.find(n => n.value === type);
            this.formOptions['extra.link.id'].item.props.label = `${current.relatedLabel}:`;
            this.formOptions['extra.link.id'].rule.message = `请输入${current.relatedLabel}`;
            arr.push('extra.link.id');
          }
          break
      }
      return arr
    },
    /*
        * 确认发布
        * */
    enterDialog() {
      if(this.publishLoading) return;
      this.$message('保存稿件后将会对该稿件下所有新闻内容进行覆盖')
      this.$refs.dialogForm.validate(valid => {
        if (valid) {
          this.publishLoading = true;
          this.handleSave('保存并发布成功', () => {
            if(this.from.extra.type === 'news') this.delLocalStorage()
            this.handleReturn();
          }).finally(() => {
            this.publishLoading = false;
          })
        }
      })
    },
    /*发布栏目取消*/ 
    cancelDialog() {
      this.dialog.show = false
      if (this.scriptsId == null && this.id == null) {
        this.dialog.form.channel_id = []
      }else{
        this.dialog.form.channel_id = this.channel_idOld
      }
    },
    /*
     * 返回上一级
    */
    handleReturn() {
      const fullPath = this.$route.fullPath
      const view = this.visitedViews.find(n => n.fullPath === fullPath)
      const { redirect = 'All-media', channelId, father } = this.$route.query;
      this.$router.push({ name: redirect, query: channelId? Object.assign({ id: channelId }, father? { father } : {}) : {} });
      this.$store.dispatch('tagsView/delView', view)
    },
    /* 处理编辑器中的视频数据 */
    delEditorVideo (content) {
      let div = document.createElement("div");
      div.innerHTML = content;
      let videoList = Array.from(div.querySelectorAll('video'));
      console.log('选择视频',videoList)
      if(videoList.length) {
        return this.editorVideoLists.filter(n => videoList.find(item => item.title === n.title && item.cover === n.poster));
      }
      return []
    },
    /*
        * 保存数据
        * */
    handleSave(tip, cb) {
      const { channelId } = this.$route.query
      const channel_id = channelId? [ channelId ] : this.dialog.form.channel_id
      const currentTabsFromItem = this.initFrom()
      const type = this.from.extra.type
      let id = this.typeDetails === 'script' ? this.scriptsId : this.id
      if(this.newsId) id = this.newsId
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
      };
      if(this.typeDetails === 'news') delete obj.channels
      if(obj.extra.link && obj.extra.link.type === 'activity') obj.extra.link.url = obj.extra.activity_address
      if(obj.extra.link && obj.extra.link.type === 'target_obj') obj.extra.link = {
        ...obj.extra.link,
        type: obj.target_obj
      }
      delete obj.target_obj;
      delete obj.extra.activity_address;
      if(obj.extra.type === 'news') {
        obj.extra.video_extra = {
          video_list: this.delEditorVideo(obj.extra.content)
        }
      }
      if (this.checkStatus) obj.status = 1
      console.log('obj',obj)
      // this.checkSensit()
      if(this.from.extra.type == 'news' && this.enable_sensitive_word_filter == '1') {
          let checkData = {
          text: this.from.extra.content,
          sourceId: this.sourceId,
          terminalType: 6
        }
        checkSensitword(checkData).then(res =>{
            let data = res.data
            let type = this.formatFilterType(data.filterType)
            if(data.filterType){
              let text = data.keywords[0]
              this.$confirm(`您所提交的内容中包含${type}类敏感词汇”${text}“，是否确认继续提交？`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                this.fetchAcation(tip, cb,id,obj)
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });
              });
            }else{
               this.fetchAcation(tip, cb,id,obj)
            }
        }).catch(()=>{
            this.fetchAcation(tip, cb,id,obj)
        })
      }else{
         this.fetchAcation(tip, cb,id,obj)
      }
      //  let promise = this.typeDetails === 'script' ? changeScripts(id, obj) : changeNews(id, obj)
      //         return promise.then((res) => {
      //           this.$message.success(tip)
      //           this.dialog.show = false;
      //           cb && cb(res);
      //         })
    },
    fetchAcation(tip, cb,id,obj) {
      let promise = this.typeDetails === 'script' ? changeScripts(id, obj) : changeNews(id, obj)
        return promise.then((res) => {
          this.$message.success(tip)
          this.dialog.show = false;
          cb && cb(res);
       })
    },
    formatFilterType(val) {
          let obj = {
            '0': '正常 ',
            '1': '政治',
            '2': '色情',
            '3': '涉毒违法',
            '4': '谩骂',
            '5': '暴恐',
            '6': '综合',
            '7': '网络引流',
            '8': '综合',
            '9': '性感',
            '10': '灌水',
            '11': '垃圾信息',
            '12': '无意义',
            '13': '自定义'
          }
           return obj[val] || ''
    },
    checkSensit() {
      let data = {
        text: this.from.extra.content,
        sourceId: this.sourceId,
        terminalType: 6
      }
      let info = null
        checkSensitword(data).then(res =>{
          info = res.data
      })
      return info
    },
    /* 保存草稿 */
    handleDraft() {
      var bdhhtml = document.getElementById('bdh').innerHTML;
      if(bdhhtml==1){
        this.$message.warning('正在图片本地化，请稍后')
        return
      }
      this.$message('保存稿件后将会对该稿件下所有新闻内容进行覆盖')
      this.$refs.submitForm.validate((valid, obj) => {
        if (valid) {
          this.handleSave('保存草稿成功!',(res)=>{
            this.newsId = res.data.id
            if(this.from.extra.type === 'news') this.delLocalStorage()
            this.editorSaveFlag = false
          })
        }else {
          this.$message.warning(Object.keys(obj).map(key => obj[key][0].message).join())
        }
      })
    },
    /*
        * 预览
        * */
    handlePreview() {
      var bdhhtml = document.getElementById('bdh').innerHTML;
      if(bdhhtml==1){
        this.$message.warning('正在图片本地化，请稍后')
        return
      }
      this.$message('保存稿件后将会对该稿件下所有新闻内容进行覆盖')
      this.$refs.submitForm.validate((valid, obj) => {
        if (valid) {
          this.handleSave('保存成功', ({ data: { id } = {} }) => {
            if(id) this.$router.push({ name: 'Preview', query: { id, type: 'scripts' }})
            if(this.from.extra.type === 'news') this.delLocalStorage()
          })
        }else {
          this.$message.warning(Object.keys(obj).map(key => obj[key][0].message).join())
        }
      })
    },
    /*
        * 发布
        * */
    handlePublish() {
      var bdhhtml = document.getElementById('bdh').innerHTML;
      if(bdhhtml==1){
        this.$message.warning('正在图片本地化，请稍后')
        return
      }
      this.$refs.submitForm.validate((valid, obj) => {
        if (valid) {
          if (this.typeDetails === 'script') {
            this.checkStatus = true
            const { channelId } = this.$route.query
            if(channelId) return this.handleSave('保存并发布成功', () => {
              this.delLocalStorage()
              this.handleReturn();
            })
            this.dialog.show = true
          }else if (this.typeDetails === 'news') {
            this.handleSave('保存并发布成功', () => {
              this.delLocalStorage()
              this.$emit('refresh')
              this.handleClose()
              })
          }
        }else {
          this.$message.warning(Object.keys(obj).map(key => obj[key][0].message).join())
        }
      })
    },
     /* 关闭弹框 */
    handleClose() {
      this.$emit('update:visible', false)
    },
    /* tab变化 */
    handleTabChange(val,flag) {
      const currentTabsFromItem = this.initFrom()
      this.currentTabsFromRules = currentTabsFromItem.reduce((obj, key) => ({
        ...obj,
        [key]: this.formOptions[key].rule
      }), {})
      this.$nextTick(() => {
        if(val === 'tab') {
          Object.assign(this.from.extra, {
            video_extra: {
              video_list: []
            }
          })
        }
        this.$refs.submitForm?.clearValidate()
      })
      if(this.from.extra.type == 'outer_link' && flag) {
        this.from.extra.template_style = '240'
      }
    },
    handleTabChangeType() {
      this.from.extra.link.id = ''
      this.from.extra.link.url = ''
      // this.$forceUpdate()
    },
    /* 修改视频列表数据 */
    changeVideoList (val) {
      this.editorVideoLists.push(val);
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
          // value: n.id.toString()
          value: n.name
        }))
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
      })
    },
    /* 获取详情数据 */
    getList() {
        let promise = null
      if (this.scriptsId == null && this.id == null) {
        let max = this.viewBaseInterval.max, min = this.viewBaseInterval.min;
        this.from.extra.view_base_num = max && max !=Infinity ? Math.floor(Math.random()*(max-min+1)+min) : 0
        if (localStorage.getItem('addNews') && !this.disabled) {
           let list = JSON.parse(localStorage.getItem('addNews'))
           let siteId = this.$store.state.user.u_info.site_id
            let obj = list.find(v => v.siteId == siteId)
            if (obj) {
              this.userNewsLocalStorgeTips(obj)
            }
        }
        return
      }
        promise = this.typeDetails === 'script' ? getScriptDetail(this.scriptsId,this.detailsType) : getNewDetail(this.id)
      return (this.fetchSuggestions? this.fetchSuggestions() : promise).then(res => {
        const extra = res.extra;
        let link_type = extra?.link && extra?.link?.type || '';
        let target_obj = '';
        if(this.formOptions.target_obj.item.lists.find(n => n.value === link_type)) {
          target_obj = link_type;
          link_type = 'target_obj';
        }
        console.log('extra',extra)
        this.uploadDialog.path_video = extra.video_extra.video_list[0].item_list[0].path
        this.uploadDialog.path_list = [{path: extra.video_extra.video_list[0].cover}]
        this.editorOldValue = extra.content
        this.titleOldValue = extra.title
        this.from = {
          author_name: res.author_name, // 作者
          editor_name: res.editor_name, // 编辑
          target_obj,
          extra: {
            type: extra?.type, // 类型
            title: extra?.title, // 标题
            subtitle: extra?.subtitle, // 副标题
            template_style: extra?.template_style || '220', // 封面样式 (正式数据需要修改)
            cover: extra?.cover, // 封面样式的图片集合
            intro: extra?.intro, // 简介
            tags: extra?.tags, // 标签
            title_color: extra?.title_color, //标题颜色
            keywords: extra.keywords, // 关键词
            video_type: (extra.video_type || '1').toString(), //详情样式
             publish_timer: {
              status: (extra?.publish_timer?.status ?? '0').toString(),
              publish_at: extra?.publish_timer?.publish_at ?? ''
            }, // 定时发布
            set_created_at: extra.set_created_at, // 发布时间
            activity_start_time: extra.activity_start_time, //活动开始时间
            activity_end_time: extra.activity_end_time, //活动结束时间
            activity_address: extra.link && extra.link.url || '', // 活动地址
            content: extra.content, // 编辑器内容
            is_original: (extra.is_original || '1').toString(), // 是否原创
            source: extra.source, // 来源
            use_watermarks: extra.use_watermarks || '', // 水印位置
            allow_comment: (extra.allow_comment || '0').toString(), // 评论控制
            allow_share: (extra.allow_share || '1').toString(), // 允许分享
            trans_to_audio: (extra.trans_to_audio || '1').toString(), // 同步生成语音稿件
            view_base_num: extra.view_base_num, // 点击量
            praise_base_num: extra.praise_base_num, // 点赞量
            post_base_num: extra.post_base_num, // 转发量
            custom_rec: extra.custom_rec || [], // 相关文稿
            video_extra: {
              video_list: extra.video_extra && extra.video_extra.video_list || []
            }, // 视频
            album_extra: {
              image_list: extra.album_extra && extra.album_extra.image_list || []
            }, // 图片
            link: {
              type: link_type, // 链接类型
              id: extra?.link && extra?.link.id || '', // 链接对象
              url: extra?.link && extra?.link.url || '' // 链接地址
            }, // 外链
            salary_range: {
              min: extra.salary_range?.min || undefined,
              max: extra.salary_range?.max || undefined
            }
          }
        }// 表单
        this.editorVideoLists = [...(extra.video_extra && extra.video_extra.video_list || [])]
        if(!this.disabled && this.typeDetails === 'script') {
          this.dialog.form.channel_id = res.news.map(n => n.channel_id)
          this.channel_idOld = res.news.map(n => n.channel_id)
        }
        if (this.from.extra.type === 'news'&& !this.disabled) {
          if (localStorage.getItem('editNews')) {
            let list = JSON.parse(localStorage.getItem('editNews'))
            let id = this.scriptsId || this.id
            let siteId = this.$store.state.user.u_info.site_id
            let obj = list.find(v => v.id == id && v.siteId == siteId)
            if (obj) {
              this.userNewsLocalStorgeTips(obj)
            }
          }
        }

      })
    },
    /* 获取编辑人员 */
    getEditorPerson () {
      const id = this.scriptsId;
      getEditorPerson({
        id,
        type: 'script'
      }).then(res => {
        this.editorPerson = res.length < 2? '' : res.join();
      })
    },
  }
}
</script>
