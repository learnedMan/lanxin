<style type="text/scss" lang="scss" scoped>

</style>
<template>
  <transition name="fade-transform" mode="out-in">
    <keep-alive :exclude="exclude">
      <component
        :is="component"
        :id="id"
        @watchConsole="watchConsole"
        @handleReturn="handleReturn"
      ></component>
    </keep-alive>
  </transition>
</template>

<script>
    import studioList from './list'
    import watchConsole from './watchConsole'

    export default {
      components: {
        studioList,
        watchConsole
      },
      data () {
        return {
          component: 'studioList',
          id: 0
        }
      },
      computed: {
        /* 不缓存 */
        exclude () {
          return ['watchConsole']
        }
      },
      methods: {
        /* 查看控制台 */
        watchConsole (id) {
          this.id = id;
          this.component = 'watchConsole';
        },
        handleReturn () {
          this.component = 'studioList';
        }
      }
    }
</script>
