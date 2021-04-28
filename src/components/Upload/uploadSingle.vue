<style type="text/scss" lang="scss">
  .xl-avatar-uploader {
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .el-upload:hover {
      border-color: #409EFF;
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
      object-fit: cover;
    }
  }
</style>
<template>
  <el-upload
    class="xl-avatar-uploader"
    name="image"
    accept="image/jpeg,image/png,image/gif"
    :action="actionUrl"
    :headers="uploadHeader"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="value" :src="value" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon" />
  </el-upload>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    /* 上传接口 */
    actionUrl() {
      return `${process.env.VUE_APP_BASE_API}/api/upload/image`
    },
    /* 上传的头部信息 */
    uploadHeader() {
      const Authorization = sessionStorage.getItem('token')
      return {
        Authorization
      }
    }
  },
  methods: {
    handleAvatarSuccess(res, file, fileList) {
      if (res.status_code >= 200 && res.status_code < 300) {
        this.$message.success('图片上传成功!')
        this.$emit('input', res.path)
      } else {
        this.$message.error('图片上传失败!')
        fileList.length = 0
      }
    },
    beforeAvatarUpload(file) {
      const isLt10M = file.size / 1024 / 1024 <= 10
      const imgType = ['jpeg', 'gif', 'png']
      const type = imgType.find(n => file.type.includes(n))
      if (!type) {
        this.$message.error(`上传图片只能是 ${imgType.join()} 格式!`)
      }
      if (!isLt10M) {
        this.$message.error('上传图片大小不能超过 10MB!')
      }
      const status = type && isLt10M
      return status
    }
  }
}
</script>
