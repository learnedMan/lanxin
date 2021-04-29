<style type="text/scss" lang="scss" scoped>

</style>
<template>
  <el-container>
    <el-header>
      <el-button
        type="success"
        size="mini"
        @click="handleReturn"
      >
        返回上一级
      </el-button>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: #fff;">
        <el-tabs tab-position="left" v-model="currentView">
          <el-tab-pane v-for="item of lists" :key="item.name" :label="item.label" :name="item.name"></el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-main>
        <component :is="currentView" v-bind="[$props]"></component>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import reservation from './component/reservation'
  import directSeeding from './component/directSeeding'

    export default {
      props: {
        id: Number
      },
      components: {
        reservation,
        directSeeding
      },
      data() {
        return {
          lists: [
            {
              label: '机位管理',
              name: 'reservation'
            },
            {
              label: '图文直播',
              name: 'directSeeding'
            }
          ],
          currentView: 'reservation', // 当前组件名
        }
      },
      methods: {
        /* 返回上一级 */
        handleReturn () {
          this.$emit('handleReturn');
        },
      }
    }
</script>
