<style type="text/scss" lang="scss" scoped>
.xl-statistics-lists {

}
</style>
<template>
    <div class="xl-statistics-lists">
      <el-tabs tab-position="left"
       v-model="activeName"
        style="height: 100%;">
        <el-tab-pane label="员工发稿情况" name="statffDispatches">
           <!-- <el-tab-pane label="按部门查看" name="department"> -->
          <statff-dispatches></statff-dispatches>
        </el-tab-pane>
        <!-- <el-tab-pane label="按人员查看" name="person"> -->
          <el-tab-pane label="按稿件数据" name="newsData">
          <news-data></news-data>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import { listDepartmentKpi, listAuthorDetail, fileImport } from '@/api/statistics'
  import {
  getDepartmentList,
  } from '@/api/manage'
  import newsData from  './newsData'
import StatffDispatches from './statffDispatches.vue'

    export default {
      components: {
        newsData,
        StatffDispatches
      },
      data() {
        return {
          activeName: 'newsData',
          dataList: [],
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
        /* 获取部门数据 */
        getDepartmentList () {
          const department = this.department;
          department.loading = true;
          department.tableData = [];
          department.selection = [];
          const params = {
            ...department.queryParams,
            customerId: this.site.customerId,
            productId: this.site.productId,
          };
          delete params.Date;
          listDepartmentKpi(this.removePropertyOfNullFor0(params)).then(res => {
            department.loading = false;
            department.tableData = res.data;
          })
        },
        /* 获取人员数据 */
        getPersonLists () {
          const person = this.person;
          person.loading = true;
          person.tableData = [];
          person.selection = [];
          const params = {
            ...person.queryParams,
            customerId: this.site.customerId,
            productId: this.site.productId,
          };
          delete params.Date;
          listAuthorDetail(this.removePropertyOfNullFor0(params)).then(res => {
            person.loading = false;
            person.tableData = res.data;
          })
        },
        /* 查看详情 */
        watchDetail (row) {
          this.$emit('watch-detail', row.department_id,row.auth_id);
        },
        goPerson (row) {
          console.log('row',row)
          this.activeName = 'person'
          this.person.queryParams.departmentId = row.department_id
          this.getPersonLists()
        },
      },
      created() {
        this.getDepart();
        if(this.site.productId && this.site.customerId) {
          this.getDepartmentList();
          this.getPersonLists();
        }else{
          this.$message("请联系管理员配置productId和customerId参数")
        }
      }
    }
</script>
