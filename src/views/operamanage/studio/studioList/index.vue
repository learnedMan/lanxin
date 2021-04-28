<style type="text/scss" lang="scss" scoped>

</style>
<template>
  <keep-alive>
    <component :is="component"></component>
  </keep-alive>
</template>

<script>
    import studioList from './list'

    export default {
      components: {
        studioList
      },
      data () {
        return {
          component: 'studioList'
        }
      }
    }
</script>
