import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'
// import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'


import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters
import {  VUE_APP_BASE_API,
          VUE_APP_VIEW_API ,
          VUE_APP_REQUEST1_API ,
          VUE_APP_REQUEST2_API ,
          VUE_APP_REQUEST3_API ,
          VUE_APP_XLY_API } from '@/utils/judgmentEvn.js'


import { resetForm, removePropertyOfNull, removePropertyOfNullFor0, parseTime } from '@/utils/costum'
import { changeChannelName } from '@/utils'
Object.defineProperties(Vue.prototype, {
 /* resetForm: { value: resetForm },*/
  removePropertyOfNull: { value: removePropertyOfNull },
  removePropertyOfNullFor0: { value: removePropertyOfNullFor0 },
  parseTime: { value: parseTime },
  isMobile: { value: /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) },
  imgurl: { value: `${ VUE_APP_BASE_API }/api/upload/image` },
  imgurl2: { value: VUE_APP_BASE_API },
  videourl: { value: `${ VUE_APP_BASE_API }/api/upload/video` },
  viewurl: { value: VUE_APP_VIEW_API },
  xlsxUrl: { value: `${ VUE_APP_BASE_API }/api/channels/importProgramFromExcel` },
  VUE_APP_REQUEST1_API: { value: VUE_APP_REQUEST1_API },
  VUE_APP_REQUEST2_API: { value: VUE_APP_REQUEST2_API },
  VUE_APP_REQUEST3_API: { value: VUE_APP_REQUEST3_API },
  VUE_APP_XLY_API: { value: VUE_APP_XLY_API }
});
// 组件
import Pagination from '@/components/Pagination'
Vue.component('Pagination', Pagination)
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.prototype.msgSuccess = function(msg) {
  this.$message({ showClose: true, message: msg, type: 'success' })
}
Vue.prototype.resetForm = resetForm;
Vue.prototype.changeChannelName = changeChannelName;

Vue.prototype.msgError = function(msg) {
  this.$message({ showClose: true, message: msg, type: 'error' })
}

Vue.prototype.msgInfo = function(msg) {
  this.$message.info(msg)
}

import Iconbutton from '@/components/iconbutton/index.vue'
Vue.component("Iconbutton", Iconbutton);

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// import VueUeditorWrap from 'vue-ueditor-wrap';

Vue.config.productionTip = false

// 富文本ue需要的js和css
// import'./assets/UEditor/ueditor.config.js'
// import'./assets/UEditor/ueditor.all.js'
// import'./assets/UEditor/ueditor.parse.min.js'

// 防止重复点击
import "@/utils/banreclick.js"


new Vue({
  el: '#app',
  router,
  store,
  // VueUeditorWrap,
  render: h => h(App)
})
