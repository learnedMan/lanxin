<template>
  <transition name="fade-transform" mode="out-in">
    <keep-alive :exclude="exclude">
      <component
        :is="component"
        :id="id"
        @handleReturn="handleReturn"
      ></component>
    </keep-alive>
  </transition>
</template>
<script>
  import lists from './list'

  export default {
    name: 'User-list',
    components: {
      lists
    },
    data () {
      return {
        id: '',
        component: 'lists',
        exclude: []
      }
    },
    methods: {
      /* 返回列表 */
      handleReturn () {

      }
    }
  }
</script>
