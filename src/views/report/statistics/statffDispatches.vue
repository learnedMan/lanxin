<template>
    <div class="statffDispatches">
        <div class="search">
          <el-form
            ref="queryForm"
            :model="queryParams"
            :inline="true">
            <el-form-item label="发布时间:">
              <el-date-picker
                :clearable="false"
                v-model="dateValue"
                type="daterange"
                range-separator="~"
                value-format="yyyy-MM-dd"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
                @change="handleDateChange">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="部门:" prop="departmentList">
              <el-cascader
                  filterable
                  v-model="queryParams.departmentList"
                  style="width: 250px"
                  :options="departmentList"
                  :props="departmentOption"
                  clearable/>
            </el-form-item>
            <el-form-item label="发布栏目:" prop="channelList">
               <el-cascader
                  filterable
                  v-model="queryParams.channelList"
                  style="width: 250px"
                  :options="channelsList"
                  collapse-tags
                  :props="channelOption"
                  clearable/>
            </el-form-item>

            <el-form-item>
              <el-button v-points = "1500"
                type="primary"
                size="mini"
                @click="handleReset"
              >
                重置
              </el-button>
              <el-button v-points = "1500"
                type="primary"
                size="mini"
                @click="handleQuery"
              >
                搜索
              </el-button>
              <el-button v-points = "1500"
                type="warning"
                size="mini"
                @click="handleImport"
              >
                导出
              </el-button>
            </el-form-item>
          </el-form>
          <el-table
            ref="multipleTable"
            v-loading="loading"
            :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
            :data="tableData"
            border
            tooltip-effect="dark"
            style="width: 100%"
          > 
          <el-table-column
            label="序号" 
            type="index" 
            align="center"
            show-overflow-tooltip 
            width="50">
          </el-table-column>
            <el-table-column
              label="人员名称"
              align="center"
              prop="user_name"
            />
            <el-table-column
              label="发布新闻数量"
              align="center"
              prop="num"
            />
            <el-table-column
              label="点击量（真实）"
              align="center"
              prop="real_view"
            />
            <!-- <el-table-column
              label="点击量（美化）"
              align="center"
              prop="departmentName"
            /> -->
          </el-table>
        </div>
    </div>
</template>
<script>
import { getChannels } from '@/api/manage'
import { kpiStatisticsByAuthor ,fileImportAuthor } from '@/api/statistics'
import {getDepartmentList} from '@/api/manage'
export default {
    name: 'statffDispatches',
    data() {
        return{
          loading: false,
          tableData: [],
          channelsList: [], // 栏目列表
          departmentList:[],//部门；列表
          channelOption: {
            checkStrictly: false, // 是否强制父子不关联
            emitPath: false, // 返回值是否为数组
            value: 'id', // 选项值
            label: 'name', // 显示值
            multiple: true // 多选
          }, // 级联选择器配置
          departmentOption:{
            checkStrictly: true, // 是否强制父子不关联
            emitPath: false, // 返回值是否为数组
            value: 'id', // 选项值
            label: 'name', // 显示值
            multiple: true // 多选
          },
          dateValue:[],
          queryParams: {
            departmentList:[],
            channelList:[],
            beginTime:"",
            endTime:""
          },
          pickerOptions: {
            onPick: obj => {
              this.pickerMinDate = new Date(obj.minDate).getTime();
            },
            disabledDate: time => {
              if (this.pickerMinDate) {
                const day1 = 366 * 24 * 3600 * 1000;
                let maxTime = this.pickerMinDate + day1;
                let minTime = this.pickerMinDate - day1;
                return time.getTime() > maxTime || time.getTime() < minTime;
              }
            }
          }
        }
    },
    computed: {
      constQueryParams ({ $store: { state: { user: { u_info } } } }) {
        const data = u_info?.site?.extra?.bigdata_settings || {};
        return {
          productId: data.product_id || '',
          customerId: data.customer_id || ''
        }
      },
      // 默认时间
      timeDefault () {
        let date = new Date()
        // 通过时间戳计算
        let defalutStartTime = date.getTime() - 30 * 24 * 3600 * 1000 // 转化为时间戳
        let defalutEndTime = date.getTime()
        let startDateNs = new Date(defalutStartTime)
        let endDateNs = new Date(defalutEndTime)
        // 月，日 不够10补0
        defalutStartTime = startDateNs.getFullYear() + '-' + ((startDateNs.getMonth() + 1) >= 10 ? (startDateNs.getMonth() + 1) : '0' + (startDateNs.getMonth() + 1)) + '-' + (startDateNs.getDate() >= 10 ? startDateNs.getDate() : '0' + startDateNs.getDate())
        defalutEndTime = endDateNs.getFullYear() + '-' + ((endDateNs.getMonth() + 1) >= 10 ? (endDateNs.getMonth() + 1) : '0' + (endDateNs.getMonth() + 1)) + '-' + (endDateNs.getDate() >= 10 ? endDateNs.getDate() : '0' + endDateNs.getDate())
        return [defalutStartTime, defalutEndTime]
      }
    },
    created() {
      this.dateValue =  this.timeDefault;
      this.queryParams.beginTime = this.dateValue[0];
      this.queryParams.endTime = this.dateValue[1];

      this.getChannels()
      this.getDepartment()
      this.getList()
    },
    methods: {
      /* 搜索时间变化 */
      handleDateChange(val) {
        const arr = val || ['', ''];
        this.queryParams.beginTime = arr[0];
        this.queryParams.endTime = arr[1];
      },
      /* 重置 */
      handleReset() {
        this.dateValue=this.timeDefault;
        this.queryParams.beginTime = this.dateValue[0];
        this.queryParams.endTime = this.dateValue[1];

        this.queryParams.channelList = [];
        this.queryParams.departmentList = [];
        // this.resetForm('queryForm')
      },
      /* 搜索 */
      handleQuery() {
        this.getList()
      },
      /* 获取列表数据 */
      getList() {
        this.loading = true;
        const params = {
            ...this.queryParams,
            customerId: this.constQueryParams.customerId,
            productId: this.constQueryParams.productId,
        };
        delete params.dateValue;
        kpiStatisticsByAuthor(params).then(res => {
          this.loading = false;
          this.tableData = (res.data || [])
        })
      },
      /* 获取栏目列表 */
      getChannels() {
        getChannels({
          with_special_channels: 'topic'
        }).then(res => {
          this.channelsList = res
        })
      },
      /* 获取栏目列表 */
      getDepartment() {
        getDepartmentList({
        }).then(res => {
          this.departmentList = res
        })
      },
      /* 导出 */
      handleImport () {
        fileImportAuthor('/api/statistics/kpi/statisticsByAuthor/export', {
          customerId: this.constQueryParams.customerId,
          productId: this.constQueryParams.productId
        })
      },
    }
}
</script>