<template>
  <div class="iconbutton">
    <div class="icon_button" v-points = "1500" @click="childMethod">
      <img :class="['img', label == '上线' ? 'img-rate': '']" :src="imgsrc" alt="">{{label}}
    </div>
  </div>
</template>

<script>
import ckxq from '@/assets/iconbox/查看详情.png'
import ckjson from '@/assets/iconbox/查看json.png'
import dbjmd from '@/assets/iconbox/点播节目单.png'
import fb from '@/assets/iconbox/发布.png'
import fz from '@/assets/iconbox/复制.png'
import gglb from '@/assets/iconbox/广告列表.png'
import hf from '@/assets/iconbox/恢复.png'
import hfjy from '@/assets/iconbox/恢复禁言.png'
import js from '@/assets/iconbox/角色.png'
import jy from '@/assets/iconbox/禁言.png'
import qxzd from '@/assets/iconbox/取消置顶.png'
import qx from '@/assets/iconbox/权限.png'
import sc from '@/assets/iconbox/删除.png'
import sy from '@/assets/iconbox/上移.png'
import shjj from '@/assets/iconbox/审核拒绝.png'
import shtg from '@/assets/iconbox/审核通过.png'
import ts from '@/assets/iconbox/推送.png'
import xy from '@/assets/iconbox/下移.png'
import xiazai from '@/assets/iconbox/下载.png'
import xz from '@/assets/iconbox/新增.png'
import xg from '@/assets/iconbox/修改.png'
import yl from '@/assets/iconbox/预览.png'
import zd from '@/assets/iconbox/置顶.png'
import ztwglb from '@/assets/iconbox/专题文稿列表.png'
import appbbgl from '@/assets/iconbox/app版本管理.png'
import ys from '@/assets/iconbox/样式.png'
import tc from '@/assets/iconbox/套餐.png'
import xx from '@/assets/iconbox/下线.png'
import shjd from '@/assets/iconbox/审核进度.png'
import czjl from '@/assets/iconbox/操作记录.png'
import bf from '@/assets/iconbox/播放.png'
import jf from '@/assets/iconbox/积分.png'
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    icontype:{
      type: String,
      default: ''
    }
  },
  data() {
    return {
      xx,
      jf,
      shjd,
      czjl,
      ckxq:ckxq,
      ckjson:ckjson,
      dbjmd:dbjmd,
      fb:fb,
      fz:fz,
      gglb:gglb,
      hf:hf,
      hfjy:hfjy,
      js:js,
      jy:jy,
      qxzd:qxzd,
      qx:qx,
      sc:sc,
      sy:sy,
      shjj:shjj,
      shtg:shtg,
      ts:ts,
      xy:xy,
      xiazai:xiazai,
      xz:xz,
      xg:xg,
      yl:yl,
      zd:zd,
      ztwglb:ztwglb,
      appbbgl:appbbgl,
      ys:ys,
      tc:tc,
      bf:bf
    }
  },
  computed: {
    imgsrc(){
      return this[this.icontype]
    }
  },
  methods: {
    childMethod(){
      this.$emit('fatherMethod')
    }
  }
}
</script>

<style type="text/scss" lang="scss" scoped>
.iconbutton{
  cursor: pointer;
  display: inline-block;
  padding: 0 8px;
  vertical-align: middle;
  font-size: 13px;
  .icon_button{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img{
      margin-right: 5px;
    }
    .img-rate{
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
}
</style>
