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
  }
}
</style>
<template>
  <div class="dashboard-container">
    <!-- <component :is="currentRole" /> -->
    <div class="imgbox" >
      <img :src="waiting" alt="">
    </div>
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
      currentRole: 'adminDashboard'
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
