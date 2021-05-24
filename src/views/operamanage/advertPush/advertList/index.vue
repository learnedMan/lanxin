<template>
  <transition name="fade-transform" mode="out-in">
    <keep-alive :exclude="exclude">
      <component
        :is="component"
        @handleReturn="handleReturn"
      ></component>
    </keep-alive>
  </transition>
</template>

<script>
  import list from './list'

    export default {
      name: 'AdvertList',
      components: {
        list
      },
      data() {
        return {
          component: 'list',
          exclude: []
        }
      },
      methods: {
        handleReturn () {
          this.component = 'list';
        }
      }
    }
</script>
