<style type="text/scss" lang="scss">
  .xl-cropper {
    &-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      &-left {
        width: 350px;
        height: 300px;
      }
      .radio-select-item {
        display: block;
        line-height: 40px;
      }
    }
    &-footer {
      margin-top: 30px;
      text-align: right;
    }
    &-ul {
      line-height: 0;
    }
    &-li, &-ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    &-li {
      display: inline-block;
      vertical-align: top;
      margin-right: 20px;
    }
    &-uploader {
      line-height: 0;
      .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 100px;
        height: 100px;
        line-height: 98px;
        .el-icon-plus {
          font-size: 28px;
          color: #8c939d;
        }
        .el-upload-list__item-thumbnail {
          width: 100%;
          height: 100%;
        }
        .el-upload-list__item-actions {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          cursor: default;
          text-align: center;
          color: #fff;
          opacity: 0;
          font-size: 18px;
          background-color: rgba(0,0,0,.5);
          transition: opacity .3s;
        }
        &:hover {
          border-color: #409EFF;
          .el-upload-list__item-actions {
            opacity: 1;
          }
        }
      }
    }
    &-icon {
      margin-left: 6px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
    }
    &-tip {
      color: #ccc;
    }
  }
</style>
<template>
  <div class="xl-cropper">
    <ul class="xl-cropper-ul">
      <li v-for="(list, index) of fileLists" :key="index" class="xl-cropper-li">
        <el-upload
          v-show="count >= index + 1"
          ref="uploader"
          class="xl-cropper-uploader"
          :disabled="disabled"
          :action="actionUrl"
          :show-file-list="false"
          name="image"
          accept="image/jpeg,image/png,image/gif"
          :headers="uploadHeader"
          :on-success="handleUploadImageSuccess(index)"
          :on-error="handleUploadImageError"
          :before-upload="beforeUpload"
          :on-exceed="handleOnExceed"
        >
          <i v-show="list.path === ''" class="el-icon-plus" />
          <div v-show="list.path" @click.stop="" style="line-height: 98px;height: 100%">
            <el-image
              class="el-upload-list__item-thumbnail"
              :src="list.path"
              fit="contain"
            />
            <span v-show="list.status === 'success'" class="el-upload-list__item-actions">
              <span
                class="xl-cropper-icon"
                @click="handlePictureCardPreview(list)"
              >
                <i class="el-icon-zoom-in" />
              </span>
              <span
                class="xl-cropper-icon"
                @click="handleUpload(index)"
                v-show="!disabled && hasUploadAgain"
              >
                <i class="el-icon-upload" />
              </span>
              <span
                class="xl-cropper-icon"
                @click="handleShear(list, index)"
                v-show="!disabled"
              >
                <i class="el-icon-scissors" />
              </span>
              <span
                class="xl-cropper-icon"
                @click="handleRemove(index)"
                v-show="!disabled && hasRemove"
              >
                <i class="el-icon-delete" />
              </span>
            </span>
          </div>
        </el-upload>
      </li>
    </ul>
    <div class="xl-cropper-tip" v-if="showTip">上传封面,建议比例16:9（最佳尺寸750*420）,单个图片不超过10M!</div>
    <!-- 600 -->
    <el-dialog
      width="600px"
      :title="dialog.title"
      :visible.sync="dialog.show"
      append-to-body
    >
      <div class="xl-cropper-box">
        <div class="xl-cropper-box-left">
          <vueCropper
            ref="cropper"
            :img="option.img"
            :output-size="option.size"
            :output-type="option.outputType"
            :info="true"
            :full="option.full"
            :can-move="option.canMove"
            :can-move-box="option.canMoveBox"
            :original="option.original"
            :auto-crop="option.autoCrop"
            :auto-crop-width="option.autoCropWidth"
            :auto-crop-height="option.autoCropHeight"
            :fixed-box="option.fixedBox"
            :fixed-number="option.fixedNumber"
            :fixed="option.fixed"
            :enlarge="option.enlarge"
            :info-true="option.infoTrue"
          />
        </div>
        <div class="xl-cropper-box-right">
          <el-radio-group v-model="proportionVal" class="radio-select" @change="proportionChange">
            <el-radio v-for="(item, index) of proportion" :key="index" :label="item.value" class="radio-select-item">{{ item.label }}</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="xl-cropper-footer">
        <el-button v-points = "1500" @click="closeDialog">取 消</el-button>
        <el-button v-points = "1500" type="primary"  @click="enterDialog">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="bigImgDialog.show" append-to-body>
      <img width="100%" :src="bigImgDialog.path" alt="">
    </el-dialog>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
import { uploadImg } from '@/api/content.js'
import axios from 'axios'
import { tokenIsOverdue } from '@/utils/auth'
export default {
  components: {
    VueCropper
  },
  props: {
    /* 图片集合 */
    value: {
      type: Array,
      default: () => []
    },
    /* 是否禁用 */
    disabled: {
      type: Boolean,
      default: false
    },
    /* 显示个数 */
    count: {
      type: [Number, String],
      default: 1
    },
    showTip: {
      type: Boolean,
      default: true
    },
    /* 是否有删除按钮 */
    hasRemove: {
      type: Boolean,
      default: true
    },
    /* 是否有重新上传按钮 */
    hasUploadAgain: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dialog: {
        title: '裁剪',
        show: false
      }, // 裁剪弹框
      bigImgDialog: {
        show: false,
        path: ''
      }, // 大图弹框
      option: {
        img: require('@/assets/c_images/useravatar.jpg'), // 裁剪图片的地址(支持url 地址 / base64 / blob)
        outputSize: 1, // 裁剪生成的图片质量 (0.1 - 1)
        outputType: 'png', // 裁剪生成图片的类型 (jpeg || png || webp)
        full: false, // 是否输出原图比例的截图
        canMove: false, // 上传图片是否可以移动
        original: false, // 上传图片按照原始比例渲染
        canMoveBox: true, // 截图框能否拖动
        autoCrop: true, // 是否默认生成截图框
        fixedBox: false, // 固定截图框大小 不允许改变
        autoCropWidth: 686, // 默认生成截图框宽度
        autoCropHeight: 180, // 默认生成截图框高度
        maxImgSize: 2000, // 限制图片最高大宽高
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [16, 9], // 截图框的宽高比例
        infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
        mode: 'contain', // 图片渲染方式 (contain, cover, 100px, 100% auto)
        enlarge: 1
      }, // 裁剪框配置项
      proportion: [
        {
          label: '16:9',
          value: 1,
          option: {
            fixed: true,
            full: false,
            fixedBox: false,
            fixedNumber: [16, 9]
          }
        },
        {
          label: '4:3',
          value: 2,
          option: {
            fixed: true,
            full: false,
            fixedBox: false,
            fixedNumber: [4, 3]
          }
        },
        {
          label: '10:14.2',
          value: 3,
          option: {
            fixed: true,
            full: false,
            fixedBox: false,
            fixedNumber: [10, 14.269]
          }
        },
        {
          label: '蓝媒视频竖屏',
          value: 4,
          option: {
            fixed: true,
            full: false,
            fixedBox: false,
            fixedNumber: [10, 15.5]
          }
        },
        {
          label: '自定义',
          value: 5,
          option: {
            fixed: false,
            fixedBox: true,
            full: false
          }
        },
        {
          label: '不剪切',
          value: 6,
          option: {
            fixedBox: false,
            full: true
          }
        }
      ], // 裁剪比例选项
      proportionVal: 1 // 当前裁剪值
    }
  },
  computed: {
    /* 图片集合 */
    fileLists() {
      return Array.from({ length: 3 }).map((n, index) => {
        if (this.value[index] && this.value[index].path) {
          return Object.assign(this.value[index], {
            status: 'success'
          })
        } else {
          return {
            path: ''
          }
        }
      })
    },
    /* 上传接口 */
    actionUrl() {
      return this.imgurl
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
    /*
        * 重新上传图片
        * */
    handleUpload(index) {
      this.$refs.uploader[index].$refs['upload-inner'].$refs.input.click()
    },
    tokenIsOverdue () { // 
        const queryTime = parseInt(window.sessionStorage.getItem('tokenQueryTime')) // token获取的时间，毫秒级
        const nowTime = new Date().getTime()
        const arealyTime = Math.ceil((nowTime - queryTime)/1000) // 已经过去的时间
        return  arealyTime > 600 ? true : false
      },
    /*重新获取token*/
    refreshToken() {
       return new Promise(resolve => {
          axios({
            url: '/api/authorizations/refresh',
            method: 'post',
            baseURL: process.env.VUE_APP_BASE_API,
            timeout: 5000,
            headers: {
              'Authorization': sessionStorage.getItem('token')
            }
          }).then(res => {
            // console.log(res)
            console.log(res.data)
            if (res.status === 200) {
              let response = res.data
              const token = response.token_type + ' ' + response.access_token;
              const tokenQueryTime = new Date().getTime()
              sessionStorage.setItem('token', token)
              sessionStorage.setItem('tokenQueryTime', tokenQueryTime)
              resolve(token);
            } else {
              sessionStorage.removeItem('token')
              router.push({ path: '/login' })// 失败就跳转登陆
            }
          }).catch(() => {
            sessionStorage.removeItem('token')
            router.push({ path: '/login' })// 失败就跳转登陆
          })
        });
    },

    /*
        * 上传图片
        * */
    uploadImgFn(option) {
      const formData = new FormData()
      formData.append(option.filename, option.file, option.file.name)
      return uploadImg({
        url: option.action,
        method: 'post',
        data: formData
      })
    },
    /*
        * 图片上传超出限制
        * */
    handleOnExceed() {
      this.$message.warning('图片上传超出限制!')
    },
    /*
        * 图片上传之前
        * */
    beforeUpload(file) {
      if(this.tokenIsOverdue()) {
        this.refreshToken()
      }
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
    },
    /*
        * 图片上传成功
        * */
    handleUploadImageSuccess(index) {
      return (res, file, fileList) => {
        if (res.status_code >= 200 && res.status_code < 300) {
          this.$message.success('图片上传成功!')
          Object.assign(this.fileLists[index], {
            intro: '',
            path: res.path
          })
        } else {
          this.$message.error('图片上传失败!')
          Object.assign(this.fileLists[index], {
            intro: '',
            path: ''
          })
          fileList.length = 0
        }
        this.$emit('input', this.fileLists)
      }
    },
    /* 上传失败 */
    handleUploadImageError() {
      this.$message.error('图片上传失败!')
    },
    /* 删除图片 */
    handleRemove(index) {
      this.fileLists[index].path = ''
      this.$emit('input', this.fileLists)
    },
    /*
        * 查看大图
        * */
    handlePictureCardPreview(list) {
      this.bigImgDialog = {
        show: true,
        path: list.path
      }
    },
    /* 图片转base64 */
    imgToBase64(src) {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = 'anonymous' // 跨域
        img.src = src
        img.onload = function() { // 图片加载后执行的方法
          const canvas = document.createElement('canvas')// 创建一个canvas
          canvas.width = img.width // 设置对应的宽高
          canvas.height = img.height
          const ctx = canvas.getContext('2d') // 二维绘图环境
          ctx.drawImage(img, 0, 0, img.width, img.height) // 将图片画在画布上
          const ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase() // 获取到图片的格式
          const dataURL = canvas.toDataURL('image/' + ext) // 得到base64 编码的 dataURL
          resolve(dataURL)
        }
        img.onerror = function() {
          reject()
        }
      })
    },
    /*
        * 剪切图片
        * */
    handleShear(file, index) {
       const img = new Image()
       img.src = file.path
       this.option.img = file.path
      //  this.option.maxImgSize = img.naturalWidth;
      Object.assign(this.dialog, {
        show: true,
        index
      })
    },
    /* 裁剪比例变化 */
    proportionChange(val) {
      const item = this.proportion.find(n => val === n.value)
      this.option.autoCropWidth = Math.random() + 686
      this.$set(this, 'option', {
        ...this.option,
        ...item.option
      })
    },
    /* 取消 */
    closeDialog() {
      this.dialog.show = false
    },
    /* 确定 */
    enterDialog() {
      // 上传blob或base64获取图片路径
      // 获取截图的blob数据
      this.$refs.cropper.getCropBlob(data => {
        const file = new File([data], `${new Date().getTime()}.png`, {
          type: data.type
        })
        this.uploadImgFn({
          action: '/api/upload/image',
          filename: 'image',
          file
        }).then(res => {
          if (res.status_code >= 200 && res.status_code < 300) {
            this.fileLists[this.dialog.index].path = res.path;
            this.$emit('changeCropper', res.path);
            this.dialog.show = false
          }
        })
      })
    }
  }
}
</script>
