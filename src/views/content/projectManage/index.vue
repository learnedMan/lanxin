<template>
  <transition name="fade-transform" mode="out-in">
    <keep-alive :exclude="exclude">
      <component
        :is="component"
        :id="id"
        @watch-detail="watchDetail"
        @handleReturn="handleReturn"
      ></component>
      <!--<router-view />-->
    </keep-alive>
  </transition>
</template>

<script>
  import ProjectLists from './lists'
  import ProjectDetail from './detail'

    export default {
      name: 'ProjectManage',
      components: {
        ProjectLists,
        ProjectDetail
      },
      data() {
        return {
          exclude: ['ProjectDetail'],
          component: 'ProjectLists',
          id: ''
        }
      },
      methods: {
        /* 返回到列表 */
        handleReturn () {
          this.$router.push(this.$route.path);
          this.component = 'ProjectLists';
        },
        /* 查看详情 */
        watchDetail (id) {
          this.id = id;
          this.component = 'ProjectDetail';
        }
      },
      created() {
        const { father } = this.$route.query;
        this.id = father || '';
        if(this.id) this.component = 'ProjectDetail';
      }
    }
</script>
