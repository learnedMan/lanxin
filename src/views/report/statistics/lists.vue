<style type="text/scss" lang="scss" scoped>
.xl-statistics-lists {

}
</style>
<template>
    <div class="xl-statistics-lists">
      <el-tabs tab-position="left"
       v-model="activeName"
        style="height: 100%;">
        <el-tab-pane label="按部门查看" name="department">
          <el-form
            ref="department"
            :model="department.queryParams"
            :inline="true"
          >
            <el-form-item label="时间区间:" prop="Date">
              <el-date-picker
                v-model="department.queryParams.Date"
                type="daterange"
                align="right"
                size="small"
                unlink-panels
                range-separator="~"
                value-format="yyyy-MM-dd"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="handleDateChange($event, 'department')"
              />
            </el-form-item>
            <el-form-item>
              <el-button v-points = "1500"
                type="primary"
                size="mini"
                @click="handleReset('department')"
              >
                重置
              </el-button>
              <el-button v-points = "1500"
                type="primary"
                size="mini"
                @click="handleQuery('department')"
              >
                搜索
              </el-button>
              <el-button v-points = "1500"
                type="warning"
                size="mini"
                @click="handleImport('department')"
              >
                导出
              </el-button>
            </el-form-item>
          </el-form>
          <el-table
            ref="multipleTable"
            v-loading="department.loading"
            :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
            :data="department.tableData"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange($event, 'department')"
          >
            <!--<el-table-column
              type="selection"
              width="55"
            />-->
            <el-table-column
              label="部门名称"
              align="center"
            >
              <template slot-scope="scope">
                <!-- <span style="color: #409EFF;cursor: pointer" @click="watchDetail(scope.row)">{{ scope.row.department_name }}</span> -->
                <span style="color: #409EFF;cursor: pointer" @click="goPerson(scope.row)">{{ scope.row.department_name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="发稿量"
              align="center"
              prop="num"
            />
            <el-table-column
              label="截止昨日点击量"
              align="center"
              prop="real_view"
            />
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="按人员查看" name="person">
          <el-form
            ref="person"
            :model="person.queryParams"
            :inline="true"
          >
            <el-form-item label="时间区间:" prop="Date">
              <el-date-picker
                v-model="person.queryParams.Date"
                type="daterange"
                align="right"
                size="small"
                unlink-panels
                range-separator="~"
                value-format="yyyy-MM-dd"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="handleDateChange($event, 'person')"
              />
            </el-form-item>
            <el-form-item  label="部门:" prop="departmentId">
            <el-cascader
            :show-all-levels = false
            v-model="person.queryParams.departmentId"
            style="width: 350px"
            :options="dataList"
            :props="{ emitPath:false,checkStrictly: true ,value:'id',label:'name'}"
            clearable></el-cascader>
          </el-form-item>
            <el-form-item>
              <el-button v-points = "1500"
                type="primary"
                size="mini"
                @click="handleReset('person')"
              >
                重置
              </el-button>
              <el-button v-points = "1500"
                type="primary"
                size="mini"
                @click="handleQuery('person')"
              >
                搜索
              </el-button>
              <el-button v-points = "1500"
                type="warning"
                size="mini"
                @click="handleImport('person')"
              >
                导出
              </el-button>
            </el-form-item>
          </el-form>
          <el-table
            ref="multipleTable"
            v-loading="person.loading"
            :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
            :data="person.tableData"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange($event, 'person')"
          >
            <!--<el-table-column
              type="selection"
              width="55"
            />-->
            <el-table-column
              label="人员"
              align="center"
            >
              <template slot-scope="scope">
                <span style="color: #409EFF;cursor: pointer" @click="watchDetail(scope.row)">{{ scope.row.auhtor_name}}</span>
              </template>
            </el-table-column>
             <el-table-column
              label="部门"
              align="center"
              prop="department_name"
            />
            <el-table-column
              label="发稿量"
              align="center"
              prop="num"
            />
            <el-table-column
              label="截止昨日点击量"
              align="center"
              prop="real_view"
            />
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import { listDepartmentKpi, listAuthorDetail, fileImport } from '@/api/statistics'
  import {
  getDepartmentList,
  } from '@/api/manage'
    export default {
      data() {
        return {
          activeName: 'department',
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
            productId: data.product_id || '999999999999999',
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
        this.getDepartmentList();
        this.getPersonLists();
      }
    }
</script>
