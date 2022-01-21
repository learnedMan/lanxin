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
            <el-form-item label="单位名称：">
                <el-input
                v-model="queryParams.name"
                placeholder="请输入关键字"
                clearable
                size="small"
                style="width: 200px"
                @keyup.enter.native="handleQuery"
                />
            </el-form-item>
            <el-form-item>
                <el-button v-points = "1500" type="primary" @click="initcondition" size="mini" >重置</el-button>
                <el-button v-points = "1500" type="primary" @click="handleQuery" size="mini">搜索</el-button>
                <el-button v-points = "1500" type="primary" @click="adddata" size="mini" >新增</el-button>
            </el-form-item>
        </el-form>
        <!-- 表格列表 -->
        <el-table
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            border
            v-loading="loading"
            :data="dataList"
            row-key="id"
            :tree-props="{children: 'children'}">
            <el-table-column label="单位名称" align="center" prop="name" />
            <el-table-column label="单位id" align="center" prop="id" />
            <el-table-column label="创建时间" align="center" prop="createdAt" />
            <el-table-column label="操作" align="center" width="360px">
                <template slot-scope="scope">
                    <Iconbutton icontype="xz" label="新增" @fatherMethod="adddata(scope.row)"></Iconbutton>
                    <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
                    <Iconbutton icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>
                    <Iconbutton icontype="js" label="人员" @fatherMethod="toperson(scope.row)"></Iconbutton>
                </template>
            </el-table-column>
        </el-table>
        <!-- 表格列表 -->

        <!-- 新增/修改弹窗 -->
        <el-dialog
        :close-on-click-modal="false"
        :title="dialogTitle"
        width="800px"
        :visible.sync="dialogFormVisible">
        <el-form
            :model="form"
            :rules="rules"
            ref="dataForm">
            <el-form-item label-width="150px" label="上级单位:" prop="father">
                <el-cascader
                :show-all-levels = false
                :placeholder="form.placeholder"
                v-model="form.father"
                style="width: 350px"
                :options="dataList"
                :props="{ emitPath:false,checkStrictly: true ,value:'id',label:'name'}"
                clearable></el-cascader>
            </el-form-item>
            <el-form-item label-width="150px" label="单位名称:" prop="name">
                <el-input
                style="width: 350px"
                placeholder="请输入单位名称"
                v-model="form.name"
                ></el-input>
            </el-form-item>
        </el-form>
        <div class="dialog-footer" slot="footer">
            <el-button v-points = "1500" @click="closeDialog">取 消</el-button>
            <el-button v-points = "1500" @click="enterDialog" type="primary">确 定</el-button>
        </div>
        </el-dialog>
        <!-- 新增/修改弹窗 -->
    </div>
</template>

<script>
import { 
  getCompanyList,
  addCompanyList,
  editCompanyUpdate,
  deleteCompany
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
                name:"",
                product_id: "",
                sourceId:''
            },
            form:{
                father:0,
                sourceId:'',
                name:''
            },
            rules: {
                name: [{ required: true, message: "请输入单位名称", trigger: "blur" }],
            },
            productList:[],
            dialogFormVisible: false,
            dialogType: "add",
            dialogTitle:'',
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
        /* 重置搜索条件 */ 
        initcondition(){
            this.queryParams.name="";
        },
        /* 搜索按钮操作 */
        handleQuery() {
            this.getList();
        },
        // 去人员列表
        toperson(data){
            this.$emit('watchList',data)
        },
        // 初始化表单
        initForm() {
            this.form={
                father:0,
                sourceId:this.queryParams.sourceId,
                name:''
            }
            if (this.$refs.dataForm) {
                this.$refs.dataForm.resetFields();
            }
        },
        // 新增单位
        adddata(data){
            this.initForm();
            this.form.father = data.id?data.id:0;
            this.dialogTitle = "新增单位";
            this.dialogType = "add";
            this.dialogFormVisible = true;
        },
        // 编辑单位
        editdata(row) {
            this.initForm();
            this.dialogTitle = "编辑单位";
            this.dialogType = "edit";
            this.form={
                father:row.father,
                sourceId:this.queryParams.sourceId,
                name:row.name,
                id:row.id
            }
            this.dialogFormVisible = true;
        },
        //删除单位
        handleDelete(row){
            this.$confirm('此操作将永久删除id为'+row.id+'的单位, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            deleteCompany({"id":[row.id]}).then(response => {
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
        getList(){
            this.loading = true;
            getCompanyList(this.queryParams).then(response => {
                this.loading = false;
                this.dataList = response.data.list;
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
                editCompanyUpdate(this.form).then(response => {
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                    this.dialogFormVisible = false;
                    this.getList();
                })
            }else{
                // 新增
                addCompanyList(this.form).then(response => {
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