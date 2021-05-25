<template>
  <transition name="fade-transform" mode="out-in">
    <keep-alive :exclude="exclude">
      <component
        :is="component"
        :params="params"
        @handleReturn="handleReturn"
        @watchList="watchList"
      ></component>
    </keep-alive>
  </transition>
</template>

<script>
  import list from './list'
  import childrenList from './childrenList'

    export default {
      name: 'AdvertList',
      components: {
        list,
        childrenList
      },
      data() {
        return {
          component: 'list',
          exclude: ['childrenList'],
          params: {}
        }
      },
      methods: {
        handleReturn () {
          this.component = 'list';
        },
        /* 查看广告列表 */
        watchList (val) {
          this.params = val;
          this.component = 'childrenList';
        }
      }
    }
</script>
