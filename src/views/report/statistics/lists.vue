<style type="text/scss" lang="scss" scoped>
.xl-statistics-lists {

}
</style>
<template>
    <div class="xl-statistics-lists">
      <el-tabs tab-position="left"
       v-model="activeName"
        style="height: 100%;">
        <el-tab-pane label="部门发稿情况" name="department">
          <department
          :channelsList="channelsList"
         ></department>
        </el-tab-pane>
        <el-tab-pane label="员工发稿情况" name="statffDispatches">
          <statff-dispatches
          :channelsList="channelsList"
          :authorList="authorList"
          :departmentList="dataList"></statff-dispatches>
        </el-tab-pane>
        <el-tab-pane label="来源发稿情况" name="sourceData">
          <sourceData
          :channelsList="channelsList"
         ></sourceData>
        </el-tab-pane>
          <el-tab-pane label="按稿件数据" name="newsData">
          <news-data
          :channelsList="channelsList"
          :authorList="authorList"
          :departmentList="dataList"></news-data>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import { listDepartmentKpi, listAuthorDetail, fileImport } from '@/api/statistics'
  import {
  getDepartmentList,getChannels,getUser
  } from '@/api/manage'
  import newsData from  './newsData'
  import StatffDispatches from './statffDispatches.vue'
  import department from './department.vue'
  import sourceData from './sourceData.vue'
    export default {
      components: {
        newsData,
        StatffDispatches,
        department,
        sourceData
      },
      data() {
        return {
          activeName: 'department',
          dataList: [],
          channelsList: [], //栏目数据
          authorList: [], //作者列表
          department: {
            queryParams: {
              beginTime: '',
              endTime: '',
              Date: ''
            },
            loading: false,
            tableData: [],
            selection: []
          }, // 部门
          person: {
            queryParams: {
              beginTime: '',
              endTime: '',
              Date: '',
              departmentId: ''
            },
            loading: false,
            tableData: [],
            selection: []
          }
        }
      },
      computed: {
        site ({ $store: { state: { user: { u_info } } } }) {
          const data = u_info?.site?.extra?.bigdata_settings || {};
          return {
            productId: data.product_id || '',
            customerId: data.customer_id || ''
          }
        }
      },
      methods: {
        /* 修改时间 */
        handleDateChange (val, key) {
          const arr = val || ['', ''];
          this[key].queryParams.beginTime = arr[0];
          this[key].queryParams.endTime = arr[1];
        },
        /* 重置 */
        handleReset (key) {
          this.resetForm(key);
        },
        /* 搜索 */
        handleQuery (key) {
          this[key === 'department'? 'getDepartmentList' : 'getPersonLists']();
        },
        /* 导出 */
        handleImport () {
          fileImport('/api/statistics/items/kpiStatistics/export', {
            customerId: this.site.customerId,
            productId: this.site.productId
          })
        },
        /*/!* 选中项 *!/
        handleSelectionChange (arr, key) {
          this[key].selection = arr.map(n => n.id);
        },*/
        getDepart(){
        getDepartmentList().then(res => {
          this.dataList = res;
        })
      },
       /*获取栏目数据*/ 
      getChannelsList() {
        getChannels({
          with_special_channels: 'topic'
        }).then(res => {
           this.channelsList = res
        })
      },
       /*获取编辑者列表*/ 
      getUersList() {
        let params = {
          model: 'User',
          page: 1,
          pageSize: 999999
        }
         getUser(params).then(res => {
           this.authorList = res.data
           console.log('作者列表',res.data)
        })
       },
      },
      created() {
        this.getDepart();
        this.getChannelsList()
        this.getUersList()
        if(this.site.productId && this.site.customerId) {
          // this.getDepartmentList();
          // this.getPersonLists();
        }else{
          this.$message("请联系管理员配置productId和customerId参数")
        }
      }
    }
</script>
