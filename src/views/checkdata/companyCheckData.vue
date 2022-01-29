<template>
    <div class="companyList" style="padding:30px;">
        <el-row>
            <el-col :span="2">
                <el-tabs @tab-click="tabClick" v-model="tabvalue" tab-position="left" style="height: 500px;">
                    <el-tab-pane name="month" label="月报表"></el-tab-pane>
                    <el-tab-pane name="week" label="周报表"></el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="22">
                <el-form ref="queryForm" :model="queryParams" :inline="true">
                    <el-form-item label="产品：">
                        <el-select v-model="queryParams.product_id" placeholder="请选择">
                            <el-option
                                v-for="item in productList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <!-- <el-form-item label="报表名称">
                        <el-input
                        v-model="queryParams.name"
                        placeholder="请输入关键字"
                        clearable
                        size="small"
                        style="width: 200px"
                        @keyup.enter.native="handleQuery"
                        />
                    </el-form-item>
                    <el-form-item label="创建时间:">
                        <el-date-picker
                            v-model="dateValue"
                            type="daterange"
                            align="right"
                            size="small"
                            unlink-panels
                            range-separator="~"
                            value-format="yyyy-MM-dd HH:mm:ss"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="pickerOptions"
                            @change="handleDateChange"
                        />
                    </el-form-item> -->
                    <el-form-item>
                        <!-- <el-button v-points = "1500" type="primary" @click="initcondition" size="mini" >重置</el-button> -->
                        <!-- <el-button v-points = "1500" type="primary" @click="handleQuery" size="mini">搜索</el-button> -->
                        <!-- <el-button v-points = "1500" type="primary" @click="handleExpotr" size="mini" >导出</el-button> -->
                    </el-form-item>
                </el-form>
                <!-- 表格列表 -->
                <el-table
                    :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                    border
                    v-loading="loading"
                    :data="dataList">
                    <el-table-column label="报表id" align="center" prop="id" />
                    <el-table-column label="报表名称" align="center" prop="nickName">
                        <template slot-scope="scope">
                            {{scope.row.week
                                    ?`${scope.row.year}年${scope.row.month}月第${scope.row.week}周单位活跃度统计报表`
                                    :`${scope.row.year}年${scope.row.month}月单位活跃度统计报表`}}
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button @click="download(scope.row)" type="text">下载</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <pagination
                    v-show="total > 0"
                    :total="total"
                    :page.sync="queryParams.page"
                    :limit.sync="queryParams.limit"
                    @pagination="getList"
                />
                <!-- 表格列表 -->
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { 
  pointsMonthData,
  pointsWeekData,
  pointsAssessList,
  pointsAssessListImport
} from '@/api/checkdata'
import {
  getproduct
} from '@/api/manage'
export default {
    name: 'column',
    data() {
        return {
            // 查询参数
            queryParams: {
                product_id: "",
                sourceId:'',
                startTime: '', // 提交时间
                endTime: '',
                page:1,
                limit:10,
                name:''
            },
            total:0,
            tabvalue:'month',
            dateValue: '', // 时间区间
            pickerOptions: {
                shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                    const end = new Date()
                    const start = new Date()
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                    picker.$emit('pick', [start, end])
                }
                }, {
                text: '最近一个月',
                onClick(picker) {
                    const end = new Date()
                    const start = new Date()
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                    picker.$emit('pick', [start, end])
                }
                }, {
                text: '最近三个月',
                onClick(picker) {
                    const end = new Date()
                    const start = new Date()
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                    picker.$emit('pick', [start, end])
                }
                }]
            },
            productList:[],
            dialogFormVisible: false,
            dataList:[],
            loading:true
        }
    },
    computed: {
      productId(){
        return this.queryParams.product_id
      },
    },
    created(){
        this.getproductList();
    },
    watch:{
      productId(val){
        this.productList.forEach((item)=>{
          if(val==item.id){
            this.queryParams.sourceId = item.source_id
          }
        })
        this.getList();
      },
    },
    methods:{
        // 获取产品列表
        getproductList(){
            getproduct({}).then((response) => {
            this.productList = response.data;
            this.queryParams.product_id = this.productList[0].id;
            });
        },
        // 下载
        download(data){
        },
        /* 搜索时间变化 */ 
        handleDateChange(val) {
            const arr = val || ['', '']
            this.queryParams.startTime = arr[0]
            this.queryParams.endTime = arr[1]
        },
        /* 重置搜索条件 */ 
        initcondition(){
            this.dateValue = ''
            Object.assign(this.queryParams, {
                startTime: '',
                endTime: '',
                name:''
            })
        },
        /* 搜索按钮操作 */
        handleQuery() {
            this.getList();
        },
        tabClick(){
            this.initcondition();
            this.getList();
        },
        // 列表
        getList(){
            this.loading = true;
            if(this.tabvalue=='month'){
                pointsMonthData(this.queryParams).then(response => {
                    this.loading = false;
                    this.dataList = response.data.list;
                    this.total = response.data.totalCount;
                })
            }else{
                pointsWeekData(this.queryParams).then(response => {
                    this.loading = false;
                    this.dataList = response.data.list;
                    this.total = response.data.totalCount;
                })
            }
            
        },
        // 导出
        handleExpotr(){
            const params = {
                sourceId:this.queryParams.sourceId,
            }
            pointsAssessListImport(params)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>