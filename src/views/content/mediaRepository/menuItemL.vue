<style type="text/scss" lang="scss" scoped>

</style>
<template>
  <div>
    <template v-if="!item.children">
      <el-menu-item :index="item.code">
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
    <el-submenu :index="item.code" v-else>
      <template slot="title">
        <span>{{ item.name }}</span>
      </template>
      <menu-item-l v-for="menu of item.children" :key="menu.code" :item="menu"></menu-item-l>
    </el-submenu>
  </div>
</template>

<script>
    export default {
      name: 'menuItemL',
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
