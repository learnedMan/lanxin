<style lang="scss" scoped>
.dashboard-container{
  width: 100%;
  min-height: calc(100vh - 84px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.imgbox{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    display: block;
    margin: 0 auto;
    max-width: 400px;
  }
}
</style>
<template>
  <div class="dashboard-container">
    <el-tabs type="border-card" style="width: 100%">
      <el-tab-pane v-for="(list, index) of tabList" :key="index" :label="list.label">
        <iframe
          :src="list.url"
          width="100%"
          :style="{ height: height }"
          frameborder="0"
        ></iframe>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import waiting from '@/assets/c_images/waiting.jpg'

export default {
  name: 'Dashboard',
  components: {},
  data() {
    return {
      waiting,
      currentRole: 'adminDashboard',
      height: 'calc(100vh - 154px)',
      tabList: [
        {
          label: '基础统计',
          url: 'http://v.yuntus.com/tcv/d4a42097add1501531b75002b2f6d4e8?admin_key=2gsIh5&admin_secret=e3a39add4a2bc70970288687135fd3df868fccc0&customer_id=1&product_id=2',
        },
        {
          label: 'APP用户数据横向对比',
          url: 'http://v.yuntus.com/tcv/1749c20f244eff53e3e57f80de7bae62?admin_key=2gsIh5&admin_secret=e3a39add4a2bc70970288687135fd3df868fccc0&customer_id=1&product_id=2'
        },
        {
          label: '机型统计',
          url: 'http://v.yuntus.com/tcv/1d95de64d4041e6dd986fabebe027cf3?admin_key=2gsIh5&admin_secret=e3a39add4a2bc70970288687135fd3df868fccc0&customer_id=1&product_id=2'
        },
        {
          label: '用户留存',
          url: 'http://v.yuntus.com/tcv/6658633d8a861069bc5dc537b25fa712?admin_key=2gsIh5&admin_secret=e3a39add4a2bc70970288687135fd3df868fccc0&customer_id=1&product_id=2'
        },
        {
          label: '蓝TV热门视频排行',
          url: 'http://v.yuntus.com/tcv/8f59c8abbb6b8039043f363e4635f2e6?admin_key=2gsIh5&admin_secret=e3a39add4a2bc70970288687135fd3df868fccc0&customer_id=1&product_id=2'
        }
      ],
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {

  }
}
</script>
