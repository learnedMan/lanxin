<style type="text/scss" lang="scss" scoped>
  .xl-watch-console-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .header--left {
      color: #575757;
      display: flex;
      align-items: center;
      &-detail {
        margin-left: 10px;
      }
    }
  }
</style>
<template>
  <el-container>
    <el-header height="120px" class="xl-watch-console-header">
      <div class="header--left">
        <el-image
          lazy
          style="width: 140px; height: 100px"
          :src="detail.cover"
          fit="contain"></el-image>
        <div class="header--left-detail">
          <el-row style="margin-bottom: 20px">
            <el-col :span="24" style="font-weight: 500">{{ detail.title }}  <span style="margin-left: 20px">(当前状态: {{ detail.label }})</span></el-col>
          </el-row>
          <el-row style="margin-bottom: 10px; font-size: 12px">
            <el-col :span="24">
              <span>
                开播时间: {{ detail.extra.start_time }}
                <span style="margin-left: 10px" v-if="detail.live === 0">
                  <el-button type="text" size="small" @click="handleStart">提前开播(点击立即开播)</el-button>
                  <el-button type="text" size="small" @click="handleDelayStart">调整开播时间</el-button>
                </span>
              </span>
            </el-col>
          </el-row>
          <el-row style="font-size: 12px">
            <el-col :span="24">
              <span>
                结束时间: {{ detail.extra.end_time }}
                <span style="margin-left: 10px" v-if="detail.live === 0">
                  <el-button type="text" size="small" @click="handleSetEnd">调整直播结束时间</el-button>
                </span>
                <span style="margin-left: 10px" v-if="detail.live === 1">
                  <el-button type="text" size="small" @click="handleEnd">提前停播(点击立即停播)</el-button>
                  <el-button type="text" size="small" @click="handleSetEnd">调整直播结束时间</el-button>
                </span>
              </span>
            </el-col>
          </el-row>
        </div>
      </div>
      <el-button
        type="success"
        size="mini"
        @click="handleReturn"
      >
        返回上一级
      </el-button>
    </el-header>
    <el-container>
      <el-aside width="145px" style="background-color: #fff;">
        <el-tabs tab-position="left" v-model="currentView" style="height: 100%">
          <el-tab-pane v-for="item of lists" :key="item.name" :label="item.label" :name="item.name"></el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-main style="position: relative">
        <component :is="currentView" v-bind="[$props, { newId: detail.news_id, uuid: detail.extra.comment_uuid }]"></component>
      </el-main>
    </el-container>
    <!-- 设置开播时间 -->
    <el-dialog
      width="600px"
      :title="dialogStart.title"
      :visible.sync="dialogStart.show"
    >
      <el-form
        ref="startForm"
        :model="dialogStart.form"
        :rules="dialogStart.rules"
      >
        <el-form-item
          label-width="120px"
          label="当前开播时间"
          prop="old"
        >
          <el-date-picker
            v-model="dialogStart.form.old"
            disabled
            type="datetime"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
          />
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="调整到"
          prop="now"
        >
          <el-date-picker
            v-model="dialogStart.form.now"
            type="datetime"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
          />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogStart.show = false">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="enterStartDialog"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
    <!-- 设置结束时间 -->
    <el-dialog
      width="600px"
      :title="dialogEnd.title"
      :visible.sync="dialogEnd.show"
    >
      <el-form
        ref="endForm"
        :model="dialogEnd.form"
        :rules="dialogEnd.rules"
      >
        <el-form-item
          label-width="120px"
          label="当前结束时间"
          prop="old"
        >
          <el-date-picker
            v-model="dialogEnd.form.old"
            disabled
            type="datetime"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
          />
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="调整到"
          prop="now"
        >
          <el-date-picker
            v-model="dialogEnd.form.now"
            type="datetime"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
          />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogEnd.show = false">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="enterEndDialog"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
  import { getStudio, changeStudio } from '@/api/operamanage'
  import reservation from './component/reservation'
  import directSeeding from './component/directSeeding'
  import comment from './component/comment'

    export default {
      props: {
        id: Number
      },
      components: {
        reservation,
        directSeeding,
        comment
      },
      data() {
        const validatorStart = (rule, value, callback) => {
          const date = new Date(value);
          const end = new Date(this.detail.extra.end_time).getTime();
          if(date.getTime() > end){
            callback(new Error('开播时间必须小于现结束时间'));
          }else if(date.getTime() > new Date()) {
            callback();
          }else {
            callback(new Error('开播时间必须大于当前时间'));
          }
        };
        const validatorEnd = (rule, value, callback) => {
          const date = new Date(value);
          if(date.getTime() > new Date()) {
            callback();
          }else {
            callback(new Error('结束时间必须大于当前时间'));
          }
        };
        return {
          detail: {
            cover: '',
            extra: {}
          },
          currentView: 'reservation', // 当前组件名
          dialogStart: {
            title: '调整开播时间',
            show: false,
            form: {
              old: '',
              now: ''
            },
            rules: {
              now: [
                { required: true, message: '请选择开播时间', trigger: 'change' },
                { validator: validatorStart, trigger: 'change' }
              ]
            }
          },
          dialogEnd: {
            title: '调整结束时间',
            show: false,
            form: {
              old: '',
              now: ''
            },
            rules: {
              now: [
                { required: true, message: '请选择结束时间', trigger: 'change' },
                { validator: validatorEnd, trigger: 'change' }
              ]
            }
          }
        }
      },
      computed: {
        lists () {
          let arr = [];
          if(this.detail.extra.broadcast_type !== '3') {
            arr.push({
              label: '机位管理',
              name: 'reservation'
            })
          }
          if(this.detail.extra.statement !== 'none') arr.push({
            label: '图文直播',
            name: 'directSeeding'
          })
          arr.push({
            label: '评论审核',
            name: 'comment'
          })
          return arr
        }
      },
      methods: {
        /* 返回上一级 */
        handleReturn () {
          this.$emit('handleReturn');
        },
        /* 获取直播间详情 */
        getList () {
          getStudio(this.id).then(res => {
            const data = res.data;
            const statusLabel = {
              0: '未开始',
              1: '进行中',
              2: '已结束'
            };
            this.detail = {
              ...data,
              label: statusLabel[data.live],
              cover: data.extra.cover[0]?.path
            }
            this.currentView = this.lists[0].name
          })
        },
        /* 提前开播 */
        handleStart () {
          this.$confirm('确认提前开播?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            changeStudio(this.id, {
              extra: {
                start_time: this.parseTime(new Date())
              },
              live: 1
            }).then(() => {
              this.$message.success('修改成功!');
              this.getList();
            })
          }).catch(() => {})
        },
        /* 延迟开播 */
        handleDelayStart () {
          Object.assign(this.dialogStart, {
            show: true,
            form: {
              old: this.detail.extra.start_time,
              now: ''
            }
          })
          this.$nextTick(() => {
            this.$refs.startForm?.resetFields();
          })
        },
        /* 确认延迟开播 */
        enterStartDialog () {
          this.$refs.startForm?.validate(val => {
            if(val) {
              changeStudio(this.id, {
                extra: {
                  start_time: this.dialogStart.form.now
                }
              }).then(() => {
                this.$message.success('修改成功!');
                this.getList();
              }).finally(() => {
                this.dialogStart.show = false;
              })
            }
          })
        },
        /* 设置结束直播时间 */
        handleSetEnd () {
          Object.assign(this.dialogEnd, {
            show: true,
            form: {
              old: this.detail.extra.end_time,
              now: ''
            }
          })
          this.$nextTick(() => {
            this.$refs.endForm?.resetFields();
          })
        },
        /* 确认结束时间 */
        enterEndDialog () {
          this.$refs.endForm?.validate(val => {
            if(val) {
              changeStudio(this.id, {
                extra: {
                  end_time: this.dialogStart.form.now
                }
              }).then(() => {
                this.$message.success('修改成功!');
                this.getList();
              }).finally(() => {
                this.dialogEnd.show = false;
              })
            }
          })
        },
        /* 提前停播 */
        handleEnd () {
          this.$confirm('确认提前停播?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            changeStudio(this.id, {
              extra: {
                end_time: this.parseTime(new Date())
              },
              live: 2
            }).then(() => {
              this.$message.success('修改成功!');
              this.getList();
            })
          }).catch(() => {})
        },
      },
      created() {
        this.getList();
      }
    }
</script>
