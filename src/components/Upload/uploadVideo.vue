<style type="text/scss" lang="scss" scoped>
  .xl-upload-video {
    .el-icon-video-play {
      font-size: 24px;
      margin-left: 20px;
      color: #aaa;
      vertical-align: middle;
    }
    &--play {
      font-size: 16px;
      color: #575757;
      line-height: 40px;
      cursor: pointer;
      display: inline-block;
      &:hover {
        color: #409eff;
        .el-icon-video-play {
          color: #409eff;
        }
      }
    }
  }
</style>
<template>
  <div class="xl-upload-video">
    <el-upload
      name="file"
      accept="video/*"
      :action="actionUrl"
      :headers="uploadHeader"
      :show-file-list="false"
      :on-success="handleUploadSuccess"
      :before-upload="beforeUploadVideo"
      :on-progress="handleProgress"
      :on-error="handleUploadError"
    >
      <el-button>上传视频<i class="el-icon-upload el-icon--right" style="font-size: 14px"></i></el-button>
    </el-upload>
    <div class="xl-upload-video--play" v-show="value" @click="play">{{ value }} <i class="el-icon-video-play"></i></div>
    <el-progress :percentage="percentage" v-show="percentage"></el-progress>
    <el-dialog
      width="640px"
      title="视频"
      :visible.sync="dialog.show"
      v-if="dialog.show"
    >
      <video height="400" width="600" controls>
        <source :src="dialog.url">
        您的浏览器不支持 video 标签。
      </video>
    </el-dialog>
  </div>
</template>

<script>
    export default {
      props: {
        value: String
      },
      data() {
        return {
          percentage: 0,
          dialog: {
            show: false,
            url: ''
          }
        }
      },
      computed: {
        /* 上传接口 */
        actionUrl() {
          return process.env.VUE_APP_BASE_API=='/'?window.location.host+`${process.env.VUE_APP_BASE_API}/api/upload/video`:`${process.env.VUE_APP_BASE_API}/api/upload/video`
        },
        /* 上传的头部信息 */
        uploadHeader() {
          const Authorization = sessionStorage.getItem('token')
          return {
            Authorization
          }
        },
        /* 视频类型 */
        type () {
          const arr = this.value && this.value.split('.');
          return arr?.[arr.length - 1] || ''
        }
      },
      methods: {
        /* 视频上传之前 */
        beforeUploadVideo (file) {
          let fileSize = file.size / 1024 / 1024 <= 300;
          let videoType = ['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb', 'video/mov']
          if (videoType.indexOf(file.type) == -1) {
            this.$message.warning(`请上传正确的视频格式: ${videoType.join()}`);
            return false;
          }
          if (!fileSize) {
            this.$message.warning("视频大小不能超过300MB");
            return false;
          }
          this.percentage = 0;
          return true
        },
        /* 上传中 */
        handleProgress () {
          this.percentage = 90;
        },
        /* 上传成功 */
        handleUploadSuccess(res, file, fileList) {
          if (res.status_code >= 200 && res.status_code < 300) {
            this.percentage = 100;
            this.$message.success('视频上传成功!');
            this.$emit('input', res.path);
          } else {
            this.$message.error('视频上传失败!');
            this.percentage = 0;
            fileList.length = 0;
          }
        },
        /* 上传失败 */
        handleUploadError () {
          this.$message.error('上传失败, 请重新上传!');
          this.percentage = 0;
        },
        /* 播放视频 */
        play () {
          this.dialog = {
            show: true,
            url: this.value
          }
        }
      }
    }
</script>
