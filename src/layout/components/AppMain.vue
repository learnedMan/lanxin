<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- 缓存组件跳转的页面 -->
      <keep-alive>
      　　<router-view v-if="$route.meta.keepAlive" :key="key"></router-view>
      </keep-alive> 
      <!-- <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive> -->
    </transition>
     <transition name="fade-transform" mode="out-in">
       <router-view v-if="!$route.meta.keepAlive" :key="key"></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return []//this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  padding-top: 80px;
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  overflow: visible!important;
  .fixed-header {
    padding-right: 15px;
  }
}
// .el-message-box__wrapper{
//   z-index: 4001!important;
// }
// .v-modal{
//   z-index: 4000!important;
// }
</style>
