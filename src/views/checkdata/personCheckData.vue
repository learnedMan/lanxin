<template>
  <transition name="fade-transform" mode="out-in">
      <component
        style="padding:30px;"
        :is="component"
        :params="params"
        @handleReturn="handleReturn"
        @watchList="watchList"
      ></component>
  </transition>
</template>

<script>
  import personData from './personCheckData/personData'
  import dataDetail from './personCheckData/dataDetail'

    export default {
      name: 'CompanyManage',
      components: {
        personData,
        dataDetail
      },
      data() {
        return {
          component: 'personData',
          params: {}
        }
      },
      methods: {
        //   返回人员考核统计
        handleReturn () {
          this.component = 'personData';
        },
        /* 查看考核详情 */
        watchList (val) {
          this.params = val;
          this.component = 'dataDetail';
        }
      }
    }
</script>
