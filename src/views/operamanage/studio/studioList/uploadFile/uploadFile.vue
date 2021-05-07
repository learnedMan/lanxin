<template>
  <div>
    <el-upload
      class="upload-demo"
      :action="actionUrl"
      :headers="uploadHeader"
      name="image"
      :before-upload="handleBeforeUpload"
      :on-change="onChange"
      :on-preview="handlePreview"
      :limit="2"
      :file-list="fileList"
      :on-success="handleUploadSuccess"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>

    <el-dialog
      width="800px"
      :title="dialog.title"
      :visible.sync="dialog.show"
      v-if="dialog.show"
    >
      <video v-if="dialog.title == '视频'" height="500" width="750" controls>
        <source :src="value" />
        您的浏览器不支持 video 标签。
      </video>
      <img
        style="max-width: 750px"
        v-if="dialog.title == '图片'"
        :src="value"
        alt=""
      />
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      fileList: [],
      uploadtype: "",
      dialog: {
        show: false,
        url: "",
        title: "",
      },
    };
  },
  computed: {
    /* 上传接口 */
    actionUrl() {
      return `${process.env.VUE_APP_BASE_API}/api/upload/image`;
    },
    /* 上传的头部信息 */
    uploadHeader() {
      const Authorization = sessionStorage.getItem("token");
      return {
        Authorization,
      };
    },
  },
  methods: {
    handleBeforeUpload(file) {
      let videoType = [
        "video/mp4",
        "video/ogg",
        "video/flv",
        "video/avi",
        "video/wmv",
        "video/rmvb",
        "video/mov",
      ];
      let imgeType = ["image/png", "image/jpg"];
      if (
        videoType.indexOf(file.type) == -1 &&
        imgeType.indexOf(file.type) == -1
      ) {
        this.$message.warning(
          `请上传正确的格式: ${videoType.join()},${imgeType.join()}`
        );
        return false;
      }
    },
    onChange(file, fileList) {
      let videoType = [
        "video/mp4",
        "video/ogg",
        "video/flv",
        "video/avi",
        "video/wmv",
        "video/rmvb",
        "video/mov",
      ];
      let imgeType = ["image/png", "image/jpg"];
      if (
        videoType.indexOf(file.raw.type) == -1 &&
        imgeType.indexOf(file.raw.type) == -1
      ) {
        return;
      }
      if (fileList.length > 0) {
        this.fileList = [fileList[fileList.length - 1]]; //这一步，是 展示最后一次选择文件
      }
    },
    /* 上传成功 */
    handleUploadSuccess(res, file, fileList) {
      if (res.status_code >= 200 && res.status_code < 300) {
        this.$message.success("上传成功!");
        this.$emit("input", res.path);
      } else {
        this.$message.error("上传失败!");
        fileList.length = 0;
      }
    },
    handlePreview(file) {
      let videoType = [
        "video/mp4",
        "video/ogg",
        "video/flv",
        "video/avi",
        "video/wmv",
        "video/rmvb",
        "video/mov",
      ];
      let imgeType = ["image/png", "image/jpg"];
      if (videoType.indexOf(file.raw.type) != -1) {
        this.dialog.title = "视频";
      } else {
        this.dialog.title = "图片";
      }
      this.dialog.url = file.response.path;
      this.value = this.dialog.url;
      this.dialog.show = true;
    },
  },
};
</script>