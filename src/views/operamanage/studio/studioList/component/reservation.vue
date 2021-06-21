<!-- 机位管理 -->
<style type="text/scss" lang="scss" scoped>
  .xl-reservation {
    &-add {
      text-align: right;
    }
    &-save {
      position: absolute;
      right: 10px;
      z-index: 1;
    }
  }
</style>
<template>
    <div class="xl-reservation">
      <div class="xl-reservation-add">
        <el-button
          type="primary"
          size="mini"
          @click="handleAdd"
        >
          新增机位
        </el-button>
      </div>
      <el-tabs v-model="activeName" closable @tab-remove="handleDelete">
        <div class="xl-reservation-save">
          <el-button
            type="primary"
            size="mini"
            @click="handleSave"
          >
            保存
          </el-button>
        </div>
        <el-tab-pane
          v-for="item of lists"
          :key="item.extra.sort"
          :label="item.oldName"
          :name="`${item.extra.sort}`"
        >
          <el-form
            ref="form"
            :model="item"
            :rules="rules"
            label-width="120px"
            size="small"
          >
            <el-form-item label="机位状态">
              <el-switch v-model="item.extra.is_valid" active-value="1" inactive-value="0"></el-switch>
            </el-form-item>
            <el-form-item
              label="机位名称"
              prop="extra.name"
            >
              <el-input
                v-model="item.extra.name"
                placeholder="请输入机位名称"
                clearable
                size="small"
                style="width: 200px"
              />
            </el-form-item>
            <el-form-item
              label="机位头图"
              prop="extra.cover"
            >
              <upload-single v-model="item.extra.cover"></upload-single>
            </el-form-item>
            <el-form-item
              label="机位流地址"
              prop="extra.stream_url"
            >
              <el-input
                v-model="item.extra.stream_url"
                placeholder="请输入机位流地址"
                clearable
                size="small"
                style="width: 200px"
              />
            </el-form-item>
            <el-form-item
              label="备用流地址"
              prop="extra.stream_url_backup"
            >
              <el-input
                v-model="item.extra.stream_url_backup"
                placeholder="请输入备用流地址"
                clearable
                size="small"
                style="width: 200px"
              />
            </el-form-item>
            <el-form-item
              label="支持回看:"
              prop="extra.allow_replay"
            >
              <el-radio-group v-model="item.extra.allow_replay">
                <el-radio v-for="type of replayOptions" :key="type.value" :label="type.value">{{ type.label }}</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item
              v-if="item.extra.allow_replay === '1'"
              label="回放流地址"
              prop="extra.replay_stream"
            >
              <el-input
                v-model="item.extra.replay_stream"
                placeholder="请输入回放流地址"
                clearable
                size="small"
                style="width: 200px"
              />
            </el-form-item>
            <el-form-item label="直播引导片">
              <el-switch v-model="item.guide"></el-switch>
            </el-form-item>
            <el-form-item label="播放时间" prop="extra.guide_play_time" v-if="item.guide">
              <el-date-picker
                v-model="item.extra.guide_play_time"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="上传引导片" prop="extra.guide_video" v-if="item.guide">
              <upload-video v-model="item.extra.guide_video"></upload-video>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import { getStudio, deleteReservation, editReservation, addReservation } from '@/api/operamanage'
  import uploadSingle from '@/components/Upload/uploadSingle.vue'
  import uploadVideo from '@/components/Upload/uploadVideo.vue'

    export default {
      components: {
        uploadSingle,
        uploadVideo
      },
      props: {
        id: Number
      },
      data() {
        return {
          activeName: '',
          lists: [], // 机位列表
          replayOptions: [
            {
              label: '是',
              value: '1'
            },
            {
              label: '否',
              value: '0'
            }
          ], // 回放
          rules: {
            'extra.name': [
              { required: true, message: '请输入机位名称', trigger: 'blur' }
            ],
            'extra.cover': [
              { required: true, message: '请上传机位头图', trigger: 'change' }
            ],
            /*'extra.stream_url': [
              { required: true, message: '请输入机位流地址', trigger: 'blur' }
            ],*/
            'extra.replay_stream': [
              { required: true, message: '请输入回放流地址', trigger: 'blur' }
            ],
            'extra.guide_play_time': [
              { required: true, message: '请选择引导片播放时间', trigger: 'change' }
            ],
            'extra.guide_video': [
              { required: true, message: '请上传引导片', trigger: 'change' }
            ]
          }
        }
      },
      methods: {
        /* 新增 */
        handleAdd () {
          const sort = ([...this.lists].pop()?.extra.sort || 0) + 1;
          this.$prompt('请输入机位名', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputErrorMessage: '请输入机位名',
            inputValidator(val) {
              return val != null && val.trim() !== ''
            }
          }).then(({ value }) => {
            this.lists.push({
              broadcast_id: this.id,
              oldName: value,
              extra: {
                sort,
                name: value,
                oldName: value,
                cover: '',
                is_valid: '0',
                stream_url: '',
                guide_video: '',
                allow_replay: '0',
                replay_stream: '',
                guide_play_time: '',
                stream_url_backup: ''
              }
            })
            this.activeName = `${sort}`;
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        },
        /* 删除 */
        handleDelete (val) {
          const currentIndex = this.lists.findIndex(n => n.extra.sort == val);
          if(currentIndex) {
            const { extra, id } = this.lists[currentIndex];
            this.$confirm(`此操作将永久删除这条名称为${extra.name}的机位, 是否继续?`, '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              const sort = (this.lists[currentIndex + 1] || this.lists[currentIndex - 1])?.extra.sort || '';
              if(id == null) {
                this.lists.splice(currentIndex, 1);
                if(sort) this.activeName = `${sort}`;
              }else {
                deleteReservation(id).then(async () => {
                  this.$message({
                    message: '删除成功',
                    type: 'success'
                  })
                  await this.getList();
                  if(sort) this.activeName = `${sort}`;
                })
              }
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              })
            })
          }
        },
        /* 保存 */
        handleSave () {
          const currentIndex = this.lists.findIndex(n => n.extra.sort == this.activeName);
          this.$refs.form[currentIndex]?.validate(val => {
            if(val) {
              const { id, extra } = this.lists[currentIndex];
              const params = {
                broadcast_id: this.id,
                extra: {
                  ...extra
                }
              };
              let promise;
              // 编辑
              if(id != null) {
                promise = editReservation(id, params);
              }else {
                // 新增
                promise = addReservation(params);
              }
              promise.then(() => {
                this.$message.success('保存成功!');
                this.getList();
              })
            }
          })
        },
        /* 获取机位 */
        getList () {
          return getStudio(this.id).then(res => {
            const data = res.data;
            this.lists = (data.extra.stream || []).sort((a, b) => a.extra.sort - b.extra.sort).map(n => ({
              ...n,
              oldName: n.extra.name.toString(),
              guide: !!(n.extra.guide_video && n.extra.guide_play_time)
            }));
          })
        },
      },
      async created() {
        await this.getList();
        const name = this.lists[0]?.extra.sort;
        this.activeName = name != null? `${name}` : '';
      }
    }
</script>
