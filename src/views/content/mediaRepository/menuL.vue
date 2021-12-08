<style type="text/scss" lang="scss" scoped>
.xl-component-menu {
  width: 200px;
  margin-right: 10px;
}
</style>
<template>
    <div class="xl-component-menu">
      <el-scrollbar wrap-class="scrollbar-wrapper" style="width: 200px">
        <el-menu
          :default-active="activeMenu"
          @select="handleSelect"
        >
          <menu-item-l v-for="menu of menus" :key="menu.code" :item="menu"></menu-item-l>
        </el-menu>
      </el-scrollbar>
    </div>
</template>

<script>
import MenuItemL from './menuItemL.vue';

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
        MenuItemL
      },
      methods: {
        handleSelect (key) {
          this.$emit('select', key);
        }
      }
    }
</script>
