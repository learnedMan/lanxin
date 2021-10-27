<style type="text/scss" lang="scss" scoped>
  $images: '~@/assets';
.xl-preview-script {
  padding: 30px;
  &--url {
    padding-right: 20px;
    span {
      display: inline-block;
      width: 500px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  &--box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &--phone {
    padding: 50px 40px;
    box-sizing: border-box;
    width: 375px;
    height: 700px;
    background: url($images + '/c_images/phone.png') no-repeat center;
    background-size: contain;
  }
}
</style>
<template>
    <div class="xl-preview-script">
      <h3>{{ detail.title }}</h3>
      <p class="xl-preview-script--url">
        <span>{{ this.url }}</span>
        <el-button v-points = "1500"
          style="margin-left: 10px"
          type="text"
          icon="el-icon-copy-document"
          size="small"
          @click="copyText"
        >复制链接</el-button>
      </p>
      <el-tabs v-model="tab" type="card">
        <el-tab-pane
          label="手机预览"
          name="phone"
        >
          <div class="xl-preview-script--box">
            <div class="xl-preview-script--phone">
              <iframe :src="url" frameborder="0" style="height: 100%"></iframe>
            </div>
            <div style="margin-left: 20px;text-align: center">
              <canvas id="canvas" ref="canvas" width="200" height="200"></canvas>
              <p>使用扫一扫，在手机上预览</p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="电脑预览"
          name="computed"
        >
          电脑预览
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import { getScriptDetail, getNewDetail } from '@/api/content'
  import QRCode from 'qrcode'

    export default {
      name: 'Preview',
      data() {
        return {
          detail: {
            title: '',
          },
          tab: 'phone'
        }
      },
      computed: {
        id ({ $route }) {
          return $route.query.id
        },
        type ({ $route }) {
          return $route.query.type
        },
        previewDomin({ $store: { state: { user:{u_info:{site:{extra}}}} } }){
          return extra.preview_domain
        },
        url ({ id, type , previewDomin}) {
          const token = sessionStorage.getItem('token');
          if(!previewDomin){
            this.$message.warning('站点未配置预览域名，请联系管理员去站点管理页面配置');
          }
          return `${previewDomin}?id=${id}&type=${type}&token=${token}`
        }
      },
      methods: {
        getList () {
          let promise;
          if(this.type === 'news') {
            promise = getNewDetail(this.id)
          }else {
            promise = getScriptDetail(this.id)
          }
          promise.then(res => {
            this.detail = res;
          })
        },
        /* 复制内容 */
        copyText () {
          const text = this.url;
          const input = document.createElement('input');
          input.value = text; // 修改文本框的内容
          document.body.appendChild(input);    // 新增临时实例
          input.select(); // 选中文本
          document.execCommand('copy'); // 执行浏览器复制命令
          document.body.removeChild(input); // 删除临时实例
          this.$message.success('复制成功!');
        }
      },
      mounted () {
        QRCode.toCanvas(this.$refs.canvas, this.url, {
          width: 200,
          height: 200,
        },function (error) {
          if (error) console.error(error);
          else console.log('success');
        })
      },
      created() {
        this.getList();
      }
    }
</script>
