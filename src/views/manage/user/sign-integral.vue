<template>
  <div class="sign-integral" style="padding-left:80px;padding-top:30px;">
      <el-form :model="form" :rules="rules" ref="dataForm">
         <!-- <el-form-item label-width="120px"  label="所属产品:" prop="sourceId"
        >
          <el-select
            v-model="form.sourceId"
            placeholder="请选择所属产品"
            @change="handleQuery"
          >
            <el-option
              v-for="item in productLists"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item> -->
         <el-form-item label-width="120px" label="所属产品：">
        <el-select v-model="product_id" placeholder="请选择所属产品">
          <el-option v-for="item in productList" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
        <el-form-item  label-width="120px" label="签到模式:" prop="signPattern">
            <el-radio-group
              :disabled="editflag"
              size="small"
              v-model="form.circulatory"
            >
              <el-radio v-for="list of patterns" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item  label-width="120px" label="规则:" prop="tips">
          <el-input
            :disabled="editflag"
            v-model="form.tips"
            type="textarea"
            :rows="4"
            placeholder="请输入签到规则"
            clearable
            style="width: 400px"
          />
        </el-form-item>
        <el-form-item  label-width="120px" label="状态:" prop="status">
          <el-switch v-model="form.status" :disabled="editflag" :active-value='0' :inactive-value='1'></el-switch>
        </el-form-item>
        <el-form-item  label-width="120px" label="奖励设置:" prop="awardSet">
          <el-row style="width: 400px">
            <el-col :span="8"><div class="grid-content bg-purple">时间</div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light">奖励类型</div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">奖励</div></el-col>
          </el-row>
           <el-row style="width: 400px" v-for="v in form.awardSet.lists" :key="v.day">
            <el-col :span="8">{{v.label}}</el-col>
            <el-col :span="8" style="padding-right: 30px">
              <el-select :disabled="editflag" v-model="v.type"  size="mini" placeholder="请选择">
              <el-option
                v-for="item in v.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            </el-col>
            <el-col :span="8">
              <el-input :disabled="editflag" v-model="v.value" size="mini" placeholder="请输入积分值"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
        <div style="padding-top:20px;padding-left:50px;">
            <el-button v-points = "1500" @click="editfn" :disabled="!editflag" type="success" size="mini">编辑</el-button>
            <el-button v-points = "1500" @click="reset" :disabled="editflag" type="info" size="mini" >重置</el-button>
            <el-button v-points = "1500" @click="save" :disabled="editflag" type="primary" size="mini" >保存</el-button>
        </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  addSignIntegral,
  getSignIntegral,
  getproduct,
  } from '@/api/manage'
  import { deepClone } from '@/utils'
  export default {
    name: 'sign-integral',
    data() {
        return {
            editflag: true,
            form: {},
            recordform:{},
            productList: [],
            product_id: 0,
            patterns: [
              {
                label: '7天连续循环签到(连续签到7天后,第8天重新从第1天开始循环)',
                value: 1
              },
              {
                label: '7天连续不循环签到(连续签到7天后,继续签到,按第7天积分值进行奖励)',
                value: 2
              },
            ],
            rules: {
                tips: [
                    { required: true, message: "请输入签到规则", trigger: "blur" }
                ],
                awardSet: [
                    { required: true, message: "请输入积分值", trigger: "blur" }
                ]
            }
        }
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'avatar',
        'device',
        'u_info'
        ])
    },
     watch:{
        product_id(val){
          this.form.sourceId = this.productList.filter(item=>item.id==val)[0].source_id||0;
           this.getinfo()
        },
      },
  async created() {
      this.form = {
        circulatory: 1,
              tips: '',
              status: 0,
              sourceId: '',
              awardSet: {
                 lists: [
                  {
                    type: '1',
                    value: '',
                    label: '第1天/周一',
                    day: 1,
                    options: [
                    {
                      value: '1',
                      label: '积分'
                    }
                    ],
                  },
                  {
                    type: '1',
                    value: '',
                    label: '第2天/周二',
                    day: 2,
                    options: [
                    {
                      value: '1',
                      label: '积分'
                    }
                    ],
                  },
                   {
                    type: '1',
                    value: '',
                    label: '第3天/周三',
                    day: 3,
                    options: [
                    {
                      value: '1',
                      label: '积分'
                    }
                    ],
                  },
                   {
                    type: '1',
                    value: '',
                    label: '第4天/周四',
                    day: 4,
                    options: [
                    {
                      value: '1',
                      label: '积分'
                    }
                    ],
                  },
                   {
                    type: '1',
                    value: '',
                    label: '第5天/周五',
                    day: 5,
                    options: [
                    {
                      value: '1',
                      label: '积分'
                    }
                    ],
                  },
                   {
                    type: '1',
                    value: '',
                    label: '第6天/周六',
                    day: 6,
                    options: [
                    {
                      value: '1',
                      label: '积分'
                    }
                    ],
                  },
                   {
                    type: '1',
                    value: '',
                    label: '第7天/周七',
                    day: 7,
                    options: [
                    {
                      value: '1',
                      label: '积分'
                    }
                    ],
                  }
                ],
              }
      }
      this.recordform = deepClone(this.form)
      await this.getProductList();
      // this.getinfo()
    },
    methods:{
        /* 获取产品列表 */
        getProductList () {
          // return getproduct({}).then(res => {
          //   const data = res.data || []
          //   this.productLists = data.map(n => ({
          //     label: n.name,
          //     value: n.source_id
          //   }));
          //   this.form.sourceId = data?.[0]?.source_id;
          // });
           getproduct({}).then((response) => {
            this.productList = response.data;
            this.product_id = this.productList[0].id;
          });
        },
          /* 搜索 */
        handleQuery (val) {
          this.form.sourceId = val
          this.getinfo()
        },
        getinfo(){
          let params = { sourceId: this.form.sourceId}
            getSignIntegral(params).then(res=>{
              let data = res.data
                this.form.circulatory = data.circulatory
                this.form.status = data.status
                this.form.tips = data.tips
                this.form.sourceId = data.data[0].sourceId
                let lists = data.data || []
                this.form.awardSet.lists = this.form.awardSet.lists.map(v=>{
                  lists.map(k=>{
                    if(k.day === v.day) {
                      v.value = k.point
                    }
                  })
                  return {...v}
                })
            })
        },
        reset(){
            this.form = JSON.parse(JSON.stringify(this.recordform));
            this.$message({
                type:"success",
                message:"已重置"
            })
            console.log(this.recordform)
        },
        save(){
            this.$refs["dataForm"].validate((valid) => {
                if (!valid) return;
                let arr = this.form.awardSet.lists
                let isEmpty = arr.every(v=>v.value)
                let data = arr.map(v=>{
                  let day = v.day,point = Number(v.value)
                  return{day,point}
                })
                let obj = {
                  ...this.form,
                  data
                }
                delete obj.awardSet
                if (isEmpty) {
                  addSignIntegral(obj).then(response => {
                    this.$message({
                      message: '保存成功',
                      type: 'success'
                    });
                  }).then(
                    (res) => {
                      this.editflag = true;
                      this.getinfo();
                    },  // 成功
                    (err) => {} // 失败
                  )
                }else{
                   this.$message('请输入积分值');
                }
            })
        },
        editfn(){
            this.editflag = false;
        },
        handleAvatarSuccess(response, file, fileList) {
            this.form.logo = response.path;
            this.$forceUpdate();
        },
        beforeAvatarUpload(file) {
            const isLt = file.size / 1024 / 1024 < 20;
            if (!isLt) {
            this.$message.error('上传头像图片大小不能超过 20MB!');
            }
            return isLt;
        },
    }
  }

</script>
<style lang="scss">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
.notallowed .el-upload:hover {
    border-color: #d9d9d9;
    cursor: not-allowed;
}
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

.role-box {
  .el-tabs__content {
    height: calc(100vh - 150px);
    overflow: auto;
  }
}
.sign-integral{
  .el-radio-group{
    padding-top: 11px;
  }
  .el-radio-group .el-radio{
    display: block!important;
  }
  .el-radio{
    margin-bottom: 20px;
  }
}
</style>



<style scoped>
.clearflex {
    *zoom: 1;
}

.clearflex:after {
    content: '';
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}

.fl-right{
  float: right;
}


</style>
