<template>
  <div>
    <el-input
      style="width: 500px"
      autocomplete="off"
      disabled
      placeholder=""
      v-model="getvalue"
      ></el-input>
    <el-upload
    style="display:inline;margin-left:20px;"
      class="upload-demo"
      :action="actionUrl"
      :headers="uploadHeader"
      name="image"
      :before-upload="handleBeforeUpload"
      :before-remove="beforeRemove"
      :on-change="onChange"
      :limit="2"
      :file-list="fileList"
      :on-progress="handleProgress"
      :on-success="handleUploadSuccess">
      <el-button v-points = "1500" size="small" type="primary">新增</el-button>
    </el-upload>
    <el-progress :percentage="percentage" v-show="percentage"></el-progress>
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
      percentage: 0,
      getvalue:this.value
    };
  },
  created(){
    if(this.getvalue){
      this.fileList[0] = {};
      this.fileList[0].url = this.getvalue
      this.fileList[0].name = this.getvalue.split('/')[this.getvalue.split('/').length-1];
    }
  },
  computed: {
    /* 上传接口 */
    actionUrl() {
      return this.imgurl
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
    beforeRemove(){
      this.$emit("input", '');
      this.getvalue = ''
      this.percentage = 0;
    },
    handleBeforeUpload(file) {
    },
    onChange(file, fileList) {
      if (fileList.length > 0) {
        this.fileList = [fileList[fileList.length - 1]]; //这一步，是 展示最后一次选择文件
      }
    },
    /* 上传中 */
    handleProgress () {
      this.percentage = 90;
    },
    /* 上传成功 */
    handleUploadSuccess(res, file, fileList) {
      if (res.status_code >= 200 && res.status_code < 300) {
        this.percentage = 100;
        this.$message.success("上传成功!");
        this.$emit("input",  res.path);
          this.getvalue = res.path
      } else {
        this.$message.error(res.message);
        this.percentage = 0;
        fileList.length = 0;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>