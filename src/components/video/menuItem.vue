<style type="text/scss" lang="scss" scoped>

</style>
<template>
  <div>
    <template v-if="!item.children">
      <el-menu-item :index="item.id + ''">
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
    <el-submenu :index="item.id + ''" v-else>
      <template slot="title">
        <span>{{ item.name }}</span>
      </template>
      <menu-item v-for="menu of item.children" :key="menu.id" :item="menu"></menu-item>
    </el-submenu>
  </div>
</template>

<script>
    export default {
      name: 'menuItem',
      props: {
        item: {
          type: Object,
          required: true
        },
      },
      data() {
        return {

        }
      }
    }
</script>
