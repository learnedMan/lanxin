<style type="text/scss" lang="scss" scoped>
.xl-component-menu {
  width: 240px;
}
</style>
<template>
    <div class="xl-component-menu">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          :default-active="activeMenu"
          @select="handleSelect"
        >
          <menu-item v-for="menu of menus" :key="menu.id" :item="menu"></menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
</template>

<script>
  import menuItem from './menuItem'

    export default {
      props: {
        menus: {
          type: Array,
          default: () => []
        },
        activeMenu: {
          type: String,
          default: '0'
        }
      },
      components: {
        menuItem
      },
      methods: {
        handleSelect (key) {
          console.log(key)
        }
      }
    }
</script>
