<template>
    <div class="companyList">
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
            <el-form-item label="用户手机号：">
                <el-input
                v-model="queryParams.mobile"
                placeholder="请输入关键字"
                clearable
                size="small"
                style="width: 200px"
                @keyup.enter.native="handleQuery"
                />
            </el-form-item>
            <el-form-item label="所属单位:" prop="companyId">
                <el-cascader
                :show-all-levels="false"
                v-model="queryParams.companyId"
                :options="companyList"
                :props="{ emitPath:false,checkStrictly:true,value:'id',label:'name'}"
                clearable></el-cascader>
            </el-form-item>
            <el-form-item label="积分获取时间:">
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
            </el-form-item>
            <el-form-item>
                <el-button v-points = "1500" type="primary" @click="initcondition" size="mini" >重置</el-button>
                <el-button v-points = "1500" type="primary" @click="handleQuery" size="mini">搜索</el-button>
                <el-button v-points = "1500" type="primary" @click="handleExpotr" size="mini" >导出</el-button>
            </el-form-item>
        </el-form>
        <!-- 表格列表 -->
        <el-table
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            border
            v-loading="loading"
            :data="dataList">
            <el-table-column label="用户id" align="center" prop="userId" />
            <el-table-column label="用户昵称" align="center" prop="nickName" />
            <el-table-column label="用户手机号" align="center" prop="mobile" />
            <el-table-column label="所属单位" align="center" prop="companyId">
                <template slot-scope="scope">
                    <el-cascader
                    :show-all-levels="false"
                    v-model="scope.row.companyId"
                    disabled
                    :options="companyList"
                    :props="{ emitPath:false,checkStrictly:true,value:'id',label:'name'}"
                    clearable></el-cascader>
                </template>
            </el-table-column>
            <el-table-column label="用户获得积分" align="center">
                <template slot-scope="scope">
                    <el-button @click="todetail(scope.row)" type="text">{{scope.row.point}}</el-button>
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
    </div>
</template>

<script>
import { 
  pointsAssessList,
  getCompanyList,
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
                mobile:"",
                product_id: "",
                sourceId:'',
                companyId:0,
                startTime: '', // 提交时间
                endTime: '',
                page:1,
                limit:10
            },
            total:0,
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
            companyList:[],
            loading:true
        }
    },
    computed: {
      productId(){
        return this.queryParams.product_id
      },
    },
    created(){
        this.queryParams.companyId = this.companyId;
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
        this.getCompanyList()
      },
    },
    methods:{
        // 获取单位列表
        getCompanyList(){
            getCompanyList({"sourceId":this.queryParams.sourceId}).then(response => {
                this.loading = false;
                this.companyList = response.data.list;
            })
        },
        // 获取产品列表
        getproductList(){
            getproduct({}).then((response) => {
            this.productList = response.data;
            this.queryParams.product_id = this.productList[0].id;
            });
        },
        // 去详情页
        todetail(data){
            this.$emit('watchList',data)
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
                mobile:'',
                companyId:0
            })
        },
        /* 搜索按钮操作 */
        handleQuery() {
            this.getList();
        },
        // 列表
        getList(){
            this.loading = true;
            pointsAssessList(this.queryParams).then(response => {
                this.loading = false;
                this.dataList = response.data.list;
                this.total = response.data.totalCount;
            })
        },
        // 导出
        handleExpotr(){
            const params = {
                sourceId:this.queryParams.sourceId,
                companyId:0
            }
            pointsAssessListImport(params)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>