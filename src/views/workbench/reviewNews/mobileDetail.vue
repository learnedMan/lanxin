<style type="text/scss" lang="scss">
.xl-mobile-news {
  background-color: #f9f9f9;
  padding: 10px;
  margin: 0;
  &--header {
    background-color: #fff;
    padding: 10px;
  }
  &--footer {
    text-align: center;
    background-color: #fff;
    margin-top: 10px;
    line-height: 40px;
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
}
.promptClass {
  width: 100vw;
}
</style>
<template>
  <el-container class="xl-mobile-news">
    <el-header height="auto" class="xl-mobile-news--header" v-if="editorPerson">
      <span style="color: #409eff;margin-right: 10px">{{ editorPerson }}</span> 当前正在编辑该文稿
    </el-header>
    <el-main style="padding: 10px 0">
      <el-tabs v-model="from.extra.type" class="xl-mobile-news--tab" @tab-click="handleTabChange('tab')">
        <el-tab-pane
          :disabled="disabled"
          v-for="item of tabs"
          :key="item.value"
          :label="item.label"
          :name="item.value"
        />
      </el-tabs>
      <el-form
        ref="submitForm"
        label-width="70px"
        size="small"
        style="max-height: 600px;overflow: auto; background-color: #fff;padding: 10px 10px"
        :model="from"
        :rules="currentTabsFromRules"
      >
        <!-- 标题 -->
        <el-form-item
          v-show="initFrom().includes('extra.title')"
          v-bind="formOptions['extra.title'].item.props"
        >
          <el-input
            :value="parseObj(formOptions['extra.title'].item)"
            v-bind="formOptions['extra.title'].item.componentProps"
            clearable
            size="small"
            @input="handleInput($event, formOptions['extra.title'].item)"
          />
        </el-form-item>
        <!-- 关键词 -->
        <el-form-item
          v-show="initFrom().includes('extra.keywords')"
          v-bind="formOptions['extra.keywords'].item.props"
        >
          <tag
            :value="parseObj(formOptions['extra.keywords'].item)"
            @input="handleInput($event, formOptions['extra.keywords'].item)"
          />
        </el-form-item>
        <!-- 编辑器 -->
        <el-form-item
          v-show="initFrom().includes('extra.content')"
          v-bind="formOptions['extra.content'].item.props"
        >
          <editor
            v-if="editorInit"
            :value="parseObj(formOptions['extra.content'].item)"
            @input="handleInput($event, formOptions['extra.content'].item)"
            @changeVideoList="changeVideoList"
          />
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer class="xl-mobile-news--footer" height="40px">
      <el-button
        type="primary"
        size="small"
        @click="handleClose"
      >
        关闭
      </el-button>
      <el-button
        type="primary"
        size="small"
        @click="handleSave"
      >
        保存
      </el-button>
      <el-button
        v-if="status === 0"
        type="primary"
        size="small"
        @click="handleThrough"
      >
        通过
      </el-button>
      <el-button
        v-if="status === 0"
        type="primary"
        size="small"
        @click="handleReject"
      >
        拒绝
      </el-button>
    </el-footer>
  </el-container>
</template>

<script>
  import { getEditorPerson, getNewDetail, changeNews, changeNewsStatus } from '@/api/content'
  import Editor from '@/components/editor'
  import Tag from '@/components/media/tag'

    export default {
      props: {
        /* 新闻id */
        id: {
          type: [Number, String],
          required: true
        },
        disabled: {
          type: Boolean,
          default: false
        }
      },
      components: {
        Editor,
        Tag
      },
      data() {
        return {
          editorPerson: '',
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
                  placeholder: '请输入新闻标题'
                }
              },
              rule: [
                { required: true, message: '请输入新闻标题', trigger: 'blur' }
              ]
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
                  }
                ]
              },
              rule: [
                { required: true, message: '请选择链接对象', trigger: 'change' }
              ]
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
          currentTabsFromRules: {}, // 当前激活tab的表单验证规则
          from: {
            extra: {
              type: 'news', // 类型
              title: '', // 标题
              keywords: '', // 关键词
              content: '', // 编辑器内容
            }
          }, // 表单
          editorVideoLists: [], // 编辑器视频集合
          editorInit: false,
          status: 0
        }
      },
      methods: {
        /* 解析路径返回值 */
        parseObj(item) {
          const arr = item.key.split('.')
          const val = arr.reduce((obj, key) => obj[key], this.from)
          return item.component === 'select' ? val && val.toString().split(',') : val
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
        /* 处理需要传给后台的数据 */
        initFrom() {
          let arr = []
          // 基础显示的item
          const baseTopItem = ['extra.title', 'extra.keywords']
          switch (this.from.extra.type) {
            case 'news':
              arr = [...baseTopItem, 'extra.content']
              break
            default:
              arr = [...baseTopItem]
          }
          return arr
        },
        /* 处理编辑器中的视频数据 */
        delEditorVideo (content) {
          let div = document.createElement("div");
          div.innerHTML = content;
          let videoList = Array.from(div.querySelectorAll('video'));
          if(videoList.length) {
            return this.editorVideoLists.filter(n => videoList.find(item => item.title === n.title && item.cover === n.poster));
          }
          return []
        },
        /* tab变化 */
        handleTabChange(val) {
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
        },
        /* 修改视频列表数据 */
        changeVideoList (val) {
          this.editorVideoLists.push(val);
        },
        /*
          * 保存数据
          * */
        handleSave() {
          this.$refs.submitForm.validate(valid => {
            if (valid) {
              if(this.from.extra.type === 'news') {
                this.from.extra.video_extra = {
                  video_list: this.delEditorVideo(this.from.extra.content)
                }
              }
              changeNews(this.id, this.from).then(() => {
                this.$message.success('保存草稿成功!')
                this.$emit('refresh')
                this.handleClose()
              })
            }
          })
        },
        /* 通过 */
        handleThrough() {
          const { id, from } = this;
          this.$refs.submitForm.validate(valid => {
            if (valid) {
              changeNews(id, from).then(() => {
                changeNewsStatus({
                  ids: id,
                  status: 1
                }).then(() => {
                  this.$emit('refresh')
                  this.handleClose()
                })
              })
            }
          })
        },
        /* 拒绝 */
        handleReject () {
          const { id } = this;
          this.$prompt('请输入拒绝原因', '拒绝', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            customClass: 'promptClass',
            inputValidator: (val) => {
              return val != null && val.trim() !== '';
            },
            inputErrorMessage: '请输入拒绝原因'
          }).then(({ value }) => {
            changeNewsStatus({
              ids: id,
              status: 2,
              remark: value.trim()
            }).then(() => {
              this.$message.success('拒绝成功')
              this.$emit('refresh');
              this.handleClose()
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        },
        /* 获取编辑人员 */
        getEditorPerson () {
          getEditorPerson({
            id: this.id,
            type: 'news'
          }).then(res => {
            this.editorPerson = res.length < 2? '' : res.join();
          })
        },
        /* 关闭弹框 */
        handleClose() {
          this.$emit('update:visible', false)
        },
        /* 获取详情数据 */
        getList() {
          return getNewDetail(this.id).then(res => {
            const extra = res.extra;
            this.status = res.status;
            this.from = {
              author_name: res.author_name, // 作者
              editor_name: res.editor_name, // 编辑
              extra
            }// 表单
            this.editorVideoLists = [...(extra.video_extra && extra.video_extra.video_list || [])]
          })
        },
        async getData() {
          await this.getList()
          this.handleTabChange()
          this.$nextTick(() => {
            this.editorInit = true;
          })
        }
      },
      created() {
        let timer = setInterval(() => {
          this.getEditorPerson();
        }, 8000)
        this.$once('hook:beforeDestroy', () => {
          clearInterval(timer);
        })
        this.getData();
      }
    }
</script>
