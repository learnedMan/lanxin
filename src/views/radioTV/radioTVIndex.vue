<template>
  <div class="radioTV" style="padding: 30px">

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="电视频道" name="page_a">
        <pagea />
      </el-tab-pane>
      <el-tab-pane label="电视直播" name="page_b">
        <pageb />
      </el-tab-pane>
      <el-tab-pane label="电视点播" name="page_c">
        <pagec />
      </el-tab-pane>
      <el-tab-pane label="广播频道" name="page_d">
        <paged />
      </el-tab-pane>
      <el-tab-pane label="广播直播" name="page_e">
        <pagee />
      </el-tab-pane>
      <el-tab-pane label="广播点播" name="page_f">
        <pagef />
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import Pagea from './pages/page_a'
import Pageb from './pages/page_b'
import Pagec from './pages/page_c'
import Paged from './pages/page_d'
import Pagee from './pages/page_e'
import Pagef from './pages/page_f'

export default {
  name: "radioTV",
  components: {
    Pagea,
    Pageb,
    Pagec,
    Paged,
    Pagee,
    Pagef
  },
  data() {
      return{
        activeName: 'page_a'
      }
  },
  created() {},
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  },
};
</script>
<style lang="scss">
</style>