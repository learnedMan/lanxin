<template>
  <transition name="fade-transform" mode="out-in">
    <keep-alive :include="include">
      <component
        :is="component"
        :id="id"
        @handleReturn="handleReturn"
        @invitedRecord="invitedRecord"
        @integralValue="integralValue"
        @loginRecord="loginRecord"
      ></component>
    </keep-alive>
  </transition>
</template>
<script>
  import lists from './query'
  import invitedRecord from './invited-record'
  import integralValue from './integral-value'
  import loginRecord from './login-record'

  export default {
    name: 'User-list',
    components: {
      lists,
      invitedRecord,
      integralValue,
      loginRecord
    },
    data () {
      return {
        id: '',
        component: 'lists',
        include: ['lists']
      }
    },
    methods: {
      /* 返回列表 */
      handleReturn () {
        this.component = 'lists';
      },
      /* 查看邀请记录 */
      invitedRecord (id) {
        this.id = id;
        this.component = 'invitedRecord';
      },
      /* 查看积分 */
      integralValue (id) {
        this.id = id;
        this.component = 'integralValue';
      },
      /* 查看登录记录 */
      loginRecord (id) {
        this.id = id;
        this.component = 'loginRecord';
      },
    }
  }
</script>
