<style type="text/scss" lang="scss" scoped>
.xl-statistics {
  padding: 30px;
  min-height: inherit;
}
</style>
<template>
  <div class="xl-statistics">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :exclude="exclude">
        <component
          :is="component"
          :id="id"
          :authorId="authorId"
          @watch-detail="watchDetail"
          @handleReturn="handleReturn"
        ></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import Lists from './lists'
  import Detail from './detail'

  export default {
    name: 'Statistics',
    components: {
      Lists,
      Detail
    },
    data() {
      return {
        exclude: ['Detail'],
        component: 'Lists',
        id: '',
        authorId: ''
      }
    },
    methods: {
      /* 返回到列表 */
      handleReturn () {
        this.component = 'Lists';
      },
      /* 查看详情 */
      watchDetail (id,authorId) {
        this.id = id;
        this.authorId = authorId
        this.component = 'Detail';
      }
    }
  }
</script>

