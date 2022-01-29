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
                <el-button v-points = "1500" type="success" size="mini" @click="handleReturn"> 返回上一级 </el-button>
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
            <el-table-column label="所属乡镇" align="center" prop="companyName" />
            <el-table-column label="积分变动类型" align="center" prop="ruleName" />
            <el-table-column label="积分变动值" align="center" prop="action" />
            <el-table-column label="变动时间" align="center" prop="createdTime" />
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
  pointsAloneData,
  pointsAloneImport,
  pointsActionItem
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
                userId:"",
                product_id: "",
                sourceId:'',
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
            actionList:[],
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
    props:{
        params:{
            default:{},
            type:Object
        }
    },
    created(){
        this.queryParams.userId = this.params.userId;
        this.getproductList();
        this.getactionList();
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
        // 返回上一级
        handleReturn () {
            this.$emit('handleReturn');
        },
        // 获取产品列表
        getproductList(){
            getproduct({}).then((response) => {
            this.productList = response.data;
            this.queryParams.product_id = this.productList[0].id;
            });
        },
        // 获取积分行为列表
        getactionList(){
            pointsActionItem({}).then((response) => {
                this.actionList = response.data;
            });
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
                endTime: ''
            })
        },
        /* 搜索按钮操作 */
        handleQuery() {
            this.getList();
        },
        // 列表
        getList(){
            this.loading = true;
            pointsAloneData(this.queryParams).then(response => {
                this.loading = false;
                this.dataList = response.data.list;
                this.total = response.data.totalCount;
            })
        },
        // 导出
        handleExpotr(){
            const params = {
                sourceId:this.queryParams.sourceId,
                userId:this.queryParams.userId

            }
            pointsAloneImport(params)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>