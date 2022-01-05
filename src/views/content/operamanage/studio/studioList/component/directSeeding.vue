
<template>
  <!-- 图文直播 -->
  <div class="xl-direct-seeding">
    <div v-if="statement != 'none'">
      <el-tabs
        style="width: 100%"
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          v-for="(item, index) in streamlist"
          :key="index"
          :label="statement == 'stream' ? item.extra.name : ''"
          :name="item.extra.name"
        >
          <div style="height: 400px; margin-bottom: 30px">
            <el-table
              :data="dataList"
              height="400"
              ref="tableList"
              style="width: 100%"
            >
              <el-table-column prop="created_at" label="时间">
              </el-table-column>
              <el-table-column label="内容">
                <template slot-scope="scope">
                  <div>{{scope.row.extra.text}}</div>
                  <div style="display: flex;margin-bottom: 10px;" v-if="scope.row.extra.img_list.length >0">
                     <el-image 
                     v-for="(item,index) of scope.row.extra.img_list" :key="index"
                      style="width: 100px; height: 100px;margin-right:10px"
                      :src="item.path" 
                      :preview-src-list="scope.row.img_lists">
                    </el-image>
                  </div>
                  <video height="100" controls preload="metadata" v-if="scope.row.extra.video_list[0].path">
                  <source :src="scope.row.extra.video_list[0].path">
                  您的浏览器不支持 HTML5 video 标签。
                </video>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center" width="260">
                <template slot-scope="scope">
                  <!-- 编辑 -->
                  <Iconbutton
                    icontype="xg"
                    label="修改"
                    @fatherMethod="handleEdit(scope.row)"
                  ></Iconbutton>
                  <!-- 删除 -->
                  <Iconbutton
                    icontype="sc"
                    label="删除"
                    @fatherMethod="handleDelete(scope.row)"
                  ></Iconbutton>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- <el-form-item label="图片/视频" prop="content">
          <editor v-model="ruleForm.content" />
        </el-form-item> -->
        <el-form-item label="文字：" prop="text">
          <el-input
            v-model="ruleForm.extra.text"
            type="textarea"
            :rows="4"
            placeholder="请输入文字内容"
            clearable
          />
        </el-form-item>
        <el-form-item label="图片：" prop="text">
           <cropper
           v-if="broadcastId"
            :count="count"
            :lists="imgLists"
            v-model="path_list"
            ref="cropper"
            />
            <cropper-add
            v-else
            :count="count"
            :lists="imgLists"
            v-model="path_list"
            ref="cropper"
            />
        </el-form-item>
        <el-form-item label="视频：" prop="text">
         <upload-video v-model="extra_video" ref="UploadVideo"></upload-video>
        </el-form-item>
        <el-form-item>
          <el-button v-points = "1500" type="primary" @click="submitForm('ruleForm')"
            >发送</el-button
          >
          <el-button v-points = "1500" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { parseTime } from "@/utils/costum";
import {
  getbroadcasts,
  getbroadcastStatement,
  addbroadcastStatement,
  editbroadcastStatement,
  delbroadcastStatement
} from "@/api/manage";
import Editor from "@/components/editor";
import Cropper from './cropper';
import uploadVideo from './uploadVideo.vue'
import { deepClone } from '@/utils'
import CropperAdd from './cropper-add.vue';
export default {
  data() {
    return {
      activeName: "",
      statement: "",
      path_list: [],
      imgLists: [],
      broadcastId: '',
      extra_video: '',
      count: 9,
      ruleForm: {
        broadcast_id: "",
        host_name: "",
        content: "",
        stream_id: "",
        time: "",
        file: "",
        extra: {
          text: '',
          img_list: [],
          video_list: [{
            path: ''
          }],
        },
      },
      rules: {
        content: [{ required: true, message: "请填写文字", trigger: "blur" }],
      },
      statementquery: {
        id: "",
        stream_id: "",
        pageSize: 9999
      },
      dataList: [],
      streamlist: [],
    };
  },
  components: {
    Editor,Cropper,uploadVideo,CropperAdd
  },
  props: {
    id: Number,
  },
  created() {
    this.statementquery.id = this.id;
    this.getbroadcastStatement();
  },
  updated() {
    // 滚动条
    this.downscroll();
  },
  methods: {
    //图片
    handleAvatarSuccess(name, res) {
      this.ruleForm[name] = res.path;
    },
    beforeAvatarUpload(file) {
      const isLt = file.size / 1024 / 1024 < 20;
      if (!isLt) {
        this.$message.error("上传头像图片大小不能超过 20MB!");
      }
      return isLt;
    },
    // 滚动条
    downscroll() {
      try {
        this.$refs.tableList.forEach((element) => {
          element.bodyWrapper.scrollTop = element.bodyWrapper.scrollHeight;
        });
      } catch (error) {
        // console.log('滚动失败')
      }
    },
    // 获取直播间发言列表
    async getbroadcastStatement() {
      var data = await this.getbroadcasts();
      this.getdatalist();
    },
    getdatalist() {
      this.dataList = [];
      getbroadcastStatement(
        this.statementquery.id,
        this.statementquery.stream_id,
        this.statementquery.pageSize
      ).then((res) => {
        this.dataList = res.data.reverse();
      let arr = (res.data || []).map(v=>{
           if(v.extra == null) {
             delete v.extra
             let obj = {
               text: '',
               img_list: [],
               video_list: [{path:''}]
             }
             v.extra = obj
             v.img_lists = []
           }
           return { ...v}
         })
         this.dataList = arr.map(v=>{
           let img_lists = (v.extra.img_list || []).map(k =>{
              return k.path
            })
            return {
              img_lists,
              ...v
            }
         })
        // console.log('----',this.dataList);
      });
    },
    //直播间发言编辑
    handleEdit(row) {
      this.broadcastId = row.id
      this.ruleForm.extra.text = row.extra.text || ''
      this.extra_video = row.extra.video_list[0].path || ''
      this.path_list = row.extra.img_list || []
      this.imgLists =  deepClone(row.extra.img_list) || []
      this.imgLists.map(v =>{
        v.status = 'success'
        return v
      })
      this.imgLists.push({path:''})
    },
    //直播间发言删除
     handleDelete (row) {
        const { id } = row;
        this.$confirm(`此操作将永久删除这条ID为${id}的直播间发言, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delbroadcastStatement(id).then(() => {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.getdatalist();
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
    // 获取直播详情
    getbroadcasts() {
      return new Promise((resolve, reject) => {
        getbroadcasts(this.id).then((res) => {
          console.log(res)
          this.streamlist = res.data.extra.stream;
          if (this.streamlist && this.streamlist.length > 0) {
            this.activeName = this.streamlist[0].extra.name;
            this.statementquery.stream_id = this.streamlist[0].id;
            this.statement = res.data.extra.statement;
          }else{
            this.streamlist = [{extra:{name:''}}]
          }
          resolve(this.streamlist);
        });
      });
    },
    //切换机位
    handleClick(tab, event) {
      var index = parseInt(tab.index);
      this.statementquery.stream_id = this.streamlist[index].id;
      this.getdatalist();
    },
    //直播间发言重置
    broadcastRest() {
      this.resetForm("ruleForm");
      // this.$refs.cropper.imgLists = [{path: ''}]
      // console.log('--------,',this.$refs.cropper.imgLists)
       this.$refs.cropper.rest()
      this.path_list = []
      this.extra_video = ''
      this.$refs.UploadVideo.rest()
      this.ruleForm.extra.text = ''
      this.ruleForm.extra.video_list[0].path = ''
      this.getdatalist();
      this.downscroll();
       this.$forceUpdate()
    },
    //发送文字
    submitForm(formName) {
      let arr = this.path_list.filter(v=>v.path).map(n =>{
        let obj = { path: n.path}
        return obj
      })
      // return
      if (this.extra_video) this.ruleForm.extra.video_list[0].path = this.extra_video
      this.ruleForm.extra.img_list = arr.length > 0 ? arr : []
      if (this.ruleForm.extra.text || this.extra_video || arr.length > 0) {
        console.log('extra',this.ruleForm.extra)
        // return
        this.ruleForm.broadcast_id = this.statementquery.id;
        this.ruleForm.stream_id = this.statementquery.stream_id;
        this.ruleForm.host_name = "测试";
        this.ruleForm.time = parseTime(new Date());
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.broadcastId) {
              editbroadcastStatement(this.broadcastId,this.ruleForm).then((response) => {
                this.$message({
                  message: "修改成功",
                  type: "success",
                });
               this.broadcastRest()
               this.broadcastId = ''
                this.imgLists = []
              });
            }else{
              addbroadcastStatement(this.ruleForm).then((response) => {
                this.$message({
                  message: "发送成功",
                  type: "success",
                });
               this.broadcastRest()
              });
            }
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      }else{
        this.$message('文字、图片、视频三者不同都为空');
      }
    },
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss">
.el-table::before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.role-box {
  .el-tabs__content {
    height: calc(100vh - 150px);
    overflow: auto;
  }
}
</style>
<style type="text/scss" lang="scss" scoped>
.xl-direct-seeding {
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
}
</style>
