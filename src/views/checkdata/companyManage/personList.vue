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
            <el-form-item label="加入时间:">
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
                <el-button v-if="!params.children||params.children.length==0" v-points = "1500" type="primary" @click="adddata" size="mini" >新增</el-button>
            </el-form-item>
        </el-form>
        <!-- 表格列表 -->
        <el-table
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            border
            v-loading="loading"
            :data="dataList">
            <el-table-column label="用户昵称" align="center" prop="nickName" />
            <el-table-column label="手机号" align="center" prop="mobile" />
            <el-table-column label="加入时间" align="center" prop="createdTime" />
            <el-table-column label="操作" align="center" width="360px">
                <template slot-scope="scope">
                    <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
                    <Iconbutton icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>
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

        <!-- 新增/修改栏目弹窗 -->
        <el-dialog
        :close-on-click-modal="false"
        :title="dialogTitle"
        width="800px"
        :visible.sync="dialogFormVisible">
        <el-form
            :model="form"
            :rules="rules"
            ref="dataForm">
            <el-form-item label-width="150px" label="单位:" prop="companyId">
                <el-cascader
                :show-all-levels="false"
                v-model="form.companyId"
                style="width: 350px"
                :options="companyList"
                :props="{ emitPath:false,value:'id',label:'name'}"
                clearable></el-cascader>
            </el-form-item>
            <el-form-item label-width="150px" label="手机号:" prop="mobile">
                <el-input
                style="width: 350px"
                placeholder="请输入手机号"
                v-model.trim="form.mobile"
                :disabled="dialogType=='edit'"
                ></el-input>
            </el-form-item>
        </el-form>
        <div class="dialog-footer" slot="footer">
            <el-button v-points = "1500" @click="closeDialog">取 消</el-button>
            <el-button v-points = "1500" @click="enterDialog" type="primary">确 定</el-button>
        </div>
        </el-dialog>
        <!-- 新增/修改栏目弹窗 -->
    </div>
</template>

<script>
import { 
  getCompanyList,
  getCompanyUserList,
  addCompanyUserList,
  editCompanyUserUpdate,
  deleteCompanyUser
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
                startTime: '', // 提交时间
                endTime: '',
                page:1,
                limit:10,
                companyId:0
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
            form:{
                sourceId:'',
                companyId:'',
                mobile:''
            },
            rules: {
                companyId: [{ required: true, message: "请选择单位", trigger: "blur" }],
                mobile: [{ required: true, message: "请输入手机号", trigger: "blur" }],
            },
            productList:[],
            dialogFormVisible: false,
            dialogType: "add",
            dialogTitle:'',
            dataList:[],
            companyList:[],
            loading:true
        }
    },
    props:{
        params:{
            default:{},
            type:Object
        }
    },
    computed: {
      productId(){
        return this.queryParams.product_id
      },
      companyId(){
          return this.params.id
      }
    },
    created(){
        this.queryParams.companyId = this.companyId;
        this.initForm();
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
        // 返回上一级
        handleReturn () {
            this.$emit('handleReturn');
        },
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
                mobile:''
            })
        },
        /* 搜索按钮操作 */
        handleQuery() {
            this.getList();
        },
        // 初始化表单
        initForm() {
            this.form={
                mobile:'',
                sourceId:this.queryParams.sourceId,
                companyId:''
            }
            if (this.$refs.dataForm) {
                this.$refs.dataForm.resetFields();
            }
        },
        // 新增关系
        adddata(){
            this.initForm();
            this.form.companyId = this.companyId;
            this.dialogTitle = "新增关系";
            this.dialogType = "add";
            this.dialogFormVisible = true;
        },
        // 编辑关系
        editdata(row) {
            console.log(row)
            this.initForm();
            this.dialogTitle = "编辑关系";
            this.dialogType = "edit";
            this.form=row
            this.dialogFormVisible = true;
        },
        //删除关系
        handleDelete(row){
            this.$confirm('此操作将永久删除用户昵称为'+row.nickName+'的关系, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            deleteCompanyUser({"id":[row.id]}).then(response => {
                    this.$message({
                    message: '删除成功',
                    type: 'success'
                    });
                    this.getList();
            })
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
        },
        // 列表
        getList(){
            this.loading = true;
            getCompanyUserList(this.queryParams).then(response => {
                this.loading = false;
                this.dataList = response.data.list;
                this.total = response.data.totalCount;
            })
        },
        // 关闭窗口
        closeDialog() {
            this.initForm();
            this.dialogFormVisible = false;
        },
        // 确定弹窗
        enterDialog() {
            this.$refs["dataForm"].validate((valid) => {
            if (!valid) return;
            if (this.dialogType=='edit') {
                //修改
                console.log(this.form)
                editCompanyUserUpdate(this.form).then(response => {
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                    this.dialogFormVisible = false;
                    this.getList();
                })
            }else{
                // 新增
                addCompanyUserList(this.form).then(response => {
                    this.$message({
                        message: '新建成功',
                        type: 'success'
                    });
                    this.dialogFormVisible = false;
                    this.getList();
                })
            }
            })
        },
    }
}
</script>
<style lang="scss" scoped>

</style>