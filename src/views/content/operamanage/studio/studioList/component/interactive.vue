<template>
<!-- 互动配置 -->
    <div class="interactive">
        <div class="list">
            <div class="item">
                <img src="@/assets/home/cj.png" alt="">
                <i class="el-icon-setting bg" @click="configDialog('lucky_draw')"></i>
                <div class="title">抽奖</div>
                <div class="status">{{interaction_settings.lucky_draw.enable == 1 ? '已启用': '未启用'}}</div>
            </div>
             <div class="item">
                <img src="@/assets/home/tp.png" alt="">
                <i class="el-icon-setting bg" @click="configDialog('vote')"></i>
                <div class="title">投票</div>
                <div class="status">{{interaction_settings.vote.enable == 1 ? '已启用': '未启用'}}</div>
            </div>
             <div class="item">
                <img src="@/assets/home/dt.png" alt="">
                <i class="el-icon-setting bg" @click="configDialog('quiz')"></i>
                <div class="title">答题</div>
                <div class="status">{{interaction_settings.quiz.enable == 1 ? '已启用': '未启用'}}</div>
            </div>
             <div class="item">
                <img src="@/assets/home/bm.png" alt="">
                <i class="el-icon-setting bg" @click="configDialog('enroll')"></i>
                <div class="title">报名</div>
                <div class="status">{{interaction_settings.enroll.enable == 1 ? '已启用': '未启用'}}</div>
            </div>
             <div class="item">
                <img src="@/assets/home/cq.png" alt="">
                <i class="el-icon-setting bg" @click="configDialog('draw_lots')"></i>
                <div class="title">抽签</div>
                <div class="status">{{interaction_settings.draw_lots.enable == 1 ? '已启用': '未启用'}}</div>
            </div>
        </div>
         <!-- 互动配置弹框 -->
      <el-dialog
        width="600px"
        :title="dialog.title"
        :visible.sync="dialog.show"
      >
        <el-form
          ref="dialogForm"
          :model="dialogForm"
          size="small"
          label-width="120px"
        >
          <el-form-item
            label="状态"
            prop="enable"
          >
            <el-switch v-model="dialogForm.enable" :active-value="1" :inactive-value="0">
            </el-switch>
          </el-form-item>
          <el-form-item
            label="互动地址"
            prop="url"
            :rules="{
                required: dialogForm.enable == 1 ? true : false,
                message: '请输入链接地址',
                trigger: 'blur'
            }"
          >
            <el-input
              clearable
              style="width: 200px"
              placeholder="请输入链接地址"
              v-model="dialogForm.url"
            />
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button v-points = "1500" @click="dialog.show = false">
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
    </div>
</template>
<script>
 import { editStudio,getStudio } from '@/api/operamanage'
export default {
    props: {
        id: Number,
    },
    data() {
        return{
            type: '',
            interaction_settings: {
                lucky_draw: {
                    enable: 0,
                    url: ''
                },
                vote: {
                    enable: 0,
                    url: ''
                },
                quiz: {
                    enable: 0,
                    url: ''
                },
                enroll: {
                    enable: 0,
                    url: ''
                },
                draw_lots: {
                    enable: 0,
                    url: ''
                }
            },
            dialogForm: {
                url: '',
                enable: 0
            },
            dialog: {
                title: '互动配置',
                show: false
            },
        }
    },
    created() {
        this.getDetails()
    },
    methods: {
        getDetails() {
            getStudio(this.id).then(res =>{
                this.interaction_settings = res.data.extra?.interaction_settings || this.interaction_settings
            })
        },
        configDialog(value) {
            this.type = value
            this.dialog = {
                title: '互动配置',
                show: true
            }
            this.dialogForm = {
                url: this.interaction_settings[value].url,
                enable: this.interaction_settings[value].enable
            }
        },
        enterDialog() {
            this.$refs.dialogForm.validate(val => {
            const objectAdd = (obj,key) =>{
                let o = {}
                o[key] = obj
                return o
            }
            const getObjVale = (key1,key2) =>{
                return this.interaction_settings[key1][key2]
            }
            if(val) {
                let interaction_settings = {
                    lucky_draw: {
                        enable: getObjVale('lucky_draw','enable'),
                        url: getObjVale('lucky_draw','url')
                    },
                    vote: {
                        enable: getObjVale('vote','enable'),
                        url: getObjVale('vote','url')
                    },
                    quiz: {
                        enable: getObjVale('quiz','enable'),
                        url: getObjVale('quiz','url')
                    },
                    enroll: {
                        enable: getObjVale('enroll','enable'),
                        url: getObjVale('enroll','url')
                    },
                    draw_lots: {
                        enable: getObjVale('draw_lots','enable'),
                        url: getObjVale('draw_lots','url')
                    },
                }
                interaction_settings[this.type].enable = this.dialogForm.enable
                interaction_settings[this.type].url = this.dialogForm.url
                let extra = objectAdd(interaction_settings,'interaction_settings')
                let data = objectAdd(extra,'extra')
                editStudio(this.id, data).then(() => {
                    this.$message.success(`${this.dialog.title}成功!`);
                    this.dialog.show = false;
                    this.getDetails()
                })
            }
          })
        }
    }
}
</script>
<style lang="scss" scoped>
 .interactive{
     .list{
         width: 100%;
         height: 200px;
         display: flex;
         .item{
             width: 200px;
             height: 100px;
             border: 1px solid #dddddd;
             border-radius: 2px;
             position: relative;
             display: flex;
             margin-right: 30px;
             img{
                 display: block;
                 width: 60px;
                 height: 60px;
                 margin: 20px 0 20px 20px;
             }
             .title{
                 font-size: 13px;
                 font-weight: 600;
                 margin-top: 30px;
                 margin-left: 20px;
                 color: #000;
             }
             .status{
                 font-size: 12px;
                 color: #303133;
                 margin-top: 60px;
                 margin-left: -26px;
             }
             .bg{
                 position: absolute;
                 top: 5px;
                 right: 10px;
                 cursor: pointer;
             }
         }
     }
 }
</style>