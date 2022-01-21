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
  import companyList from './companyManage/companyList'
  import personList from './companyManage/personList'

    export default {
      name: 'CompanyManage',
      components: {
        companyList,
        personList
      },
      data() {
        return {
          component: 'companyList',
          params: {}
        }
      },
      methods: {
        handleReturn () {
          this.component = 'companyList';
        },
        /* 查看人员列表 */
        watchList (val) {
          this.params = val;
          this.component = 'personList';
        }
      }
    }
</script>
