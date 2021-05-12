<template>
  <div class="radioTV" style="padding: 30px">
    <el-form>
      <el-form-item label="所属产品：">
        <el-select v-model="product_id" placeholder="请选择">
          <el-option v-for="item in productList" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="电视频道" name="page_a">
        <pagea :productId="product_id" :productList="productList" />
      </el-tab-pane>
      <el-tab-pane label="电视直播" name="page_b">
        <pageb ref="page_b" :productId="product_id"  />
      </el-tab-pane>
      <el-tab-pane label="电视点播" name="page_c">
        <pagec :productId="product_id" />
      </el-tab-pane>
      <el-tab-pane label="广播频道" name="page_d">
        <paged :productId="product_id" :productList="productList" />
      </el-tab-pane>
      <el-tab-pane label="广播直播" name="page_e">
        <pagee ref="page_e" :productId="product_id" />
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
import { 
  getproduct
} from '@/api/manage'
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
        activeName: 'page_a',
        product_id:0,
        productList:[]
      }
  },
  created() {
    this.getproductList()
  },
  methods: {
    handleClick(tab, event) {
      if(tab.index==1){
        this.$refs.page_b.gettvList();
        this.$refs.page_b.initForm();
      }
      if(tab.index==4){
        this.$refs.page_e.gettvList();
        this.$refs.page_e.initForm();
      }
    },
    getproductList(){
      getproduct({}).then((response) => {
          this.productList = response.data;
          this.product_id = this.productList[0].id;
      });
    },
  },
};
</script>
<style lang="scss">
</style>