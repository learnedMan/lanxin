<template>
        <div style="padding:30px;" class="setmeal-container">
            <h2>{{pagetitle}}:{{title}}</h2>
            <el-form>
                <el-col :span="24">
                    <el-form-item label="套餐名称">
                        <el-input
                        v-model="setmealname"
                        placeholder="请输入套餐名称"
                        @blur="editmeal"
                        :style="{width: '30%'}"
                        ></el-input>
                        <el-button type="primary" v-if="id" icon="el-icon-document-add" size="mini" @click="handleAddCatalog" style="margin:0 10px 0 20px;">增加栏目</el-button>
                    </el-form-item>
                </el-col>
            </el-form>
            <el-table
                :data="tableData"
                :span-method="objectSpanMethod"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                    prop="layoutName"
                    label="布局">
                </el-table-column>
                <el-table-column
                    prop="catalogName"
                    label="栏目类型">
                </el-table-column>
                <el-table-column
                    label="样式选择">
                    <template slot-scope="scope">
                        <el-cascader
                            v-model="scope.row.styleId"
                            placeholder="请选择样式"
                            :options="styleoptions"
                            :checkStrictly="true"
                            :show-all-levels="false"
                            :props="{ checkStrictly: true , emitPath:false}"
                            @focus="stylehandlegetdata(scope.row)"
                            @expand-change = "expandChange"
                            @visible-change="optiondisable($event,scope.row)"
                            @change="stylehandleChange(scope.row)">
                            <template slot-scope="{ node, data }">
                                <span>{{ data.styleName }}</span>
                            </template>
                        </el-cascader>
                    </template>
                </el-table-column>
                <el-table-column label="样式预览" align="center" class-name="small-padding fixed-width">
                    <template slot-scope="scope">
                        <Iconbutton icontype="yl" label="预览" @fatherMethod="handleview(scope.row)"></Iconbutton>
                        <Iconbutton icontype="sc" label="删除" @fatherMethod="handledelete(scope.row)"></Iconbutton>
                        <!-- <el-button
                        size="mini"
                        type="text"
                        icon="el-icon-view"
                        @click="handleview(scope.row)"
                        >预览</el-button>
                        <el-button
                        v-if="id"
                        size="mini"
                        type="text"
                        icon="el-icon-delete"
                        @click="handledelete(scope.row)"
                        >删除</el-button> -->
                    </template>
                </el-table-column>
            </el-table>
            <el-row :gutter="10" class="mb8" style="margin-top:50px;">
                <el-col :span="1.5" style="margin-right:30px;">
                    <el-button
                    type="primary"
                    size="small"
                    @click="submitForm"
                    >确定</el-button>
                </el-col>
                <el-col :span="1.5" style="margin-right:30px;">
                    <el-button
                    type="info"
                    size="small"
                    @click="back"
                    >返回</el-button>
                </el-col>
            </el-row>

            <!-- 新增栏目对话框 -->
            <el-dialog title="新增栏目" :visible.sync="open" width="500px">
                <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                    <el-form-item label="布局">
                      <el-select @change="layoutchange" v-model="layout" placeholder="请选择">
                        <el-option
                          v-for="item in layoutoptions"
                          :key="item.id"
                          :label="item.layoutName"
                          :value="item.id">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="栏目类型" prop="catalogId">
                      <el-select @change="catalogchange" :disabled="layout?false:true" v-model="form.catalogId" placeholder="请选择">
                        <el-option
                          v-for="item in catalogoptions"
                          :key="item.id"
                          :label="item.catalogName" 
                          :value="item.id">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="样式选择"  prop="styleId">
                            <el-cascader
                                :disabled="form.catalogId?false:true"
                                v-model="form.styleId"
                                placeholder="请选择样式"
                                :options="onestyleoptions"
                                :checkStrictly="true"
                                :show-all-levels="false"
                                :props="{ checkStrictly: true , emitPath:false}"
                                @change="stylehandleChangeone()">
                                <template slot-scope="{ node, data }">
                                    <span>{{ data.styleName }}</span>
                                </template>
                            </el-cascader>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitdialog">确 定</el-button>
                <el-button @click="cancel">取 消</el-button>
                </div>
            </el-dialog>



        </div>
</template>

<script>
import {listdetailmeal , listdefaultmeal , detailmeallist , addmealdetail ,
 updatemealdetail , delmealdetail , updatemeal , layouttocatalog ,
  mealaddOne , getmealinfo , liststyle , infotemplate} from '@/api/mbh'
export default {
  name: 'setmeal',
  data() {
    return {
        pagetitle:'',//模板名
        title:'',//套餐名
        templateid:undefined,//模板id
        id:undefined,//套餐id
        sourceId:'',//
        tableData: [],
        hebing:[],
        styleoptions: [],
        setmealname:'',
        open:false,
        form:{
        },
        // 表单校验
        rules: {
                catalogId: [
                { required: true, message: '栏目不能为空', trigger: 'blur' }
                ],
                styleId: [
                { required: true, message: '样式不能为空', trigger: 'blur' }
                ]
        },
        layout:'',
        layoutoptions:[{
            "layoutName":"头部",
            "id":'header'
        },{
            "layoutName":"菜单",
            "id":'menu'
        },{
            "layoutName":"中部",
            "id":'middle'
        },{
            "layoutName":"组头",
            "id":'groupHeader'
        },{
            "layoutName":"底部",
            "id":'bottom'
        }],
        catalogoptions:[],
        onestyleoptions:[]
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.templateid = this.$route.query.templateid;
    infotemplate(this.templateid).then(response => {
        this.sourceId = response.data.sourceId;
        this.pagetitle = response.data.templateName;//模板名字

        if(!this.id){
            this.title = "新增套餐";
            this.getnewmealdetail();
        }else{
            listdetailmeal(this.id,this.sourceId).then(response => {
                this.title = "修改套餐";
                this.setmealname = response.data.mealName;
            })//套餐名字
            this.getmealdetail(this.id);
        }
        
        this.getliststyle();
    })
    
  },
  methods: {
        back(){
            this.$router.go(-1)
        },
        handleview(data){
            // console.log(data)
            // console.log(data)
            window.open(this.viewurl+data.styleId);
            // this.$message({
            //     message:'点击预览，暂未开发，敬请期待',
            //     type:"warning"
            // })
        },
        handleAddCatalog(){
            this.open = true;
        },
        layoutchange(){
            // console.log("布局修改")
            layouttocatalog(this.layout).then(
                response => {
                    this.catalogoptions = response.data;
                    this.form.catalogId = '';
                    this.form.styleId = '';
                }
            )
            
        },
        getMenuBtnList (menuTreeList) {
            for (let item of menuTreeList) {
                if (item.children.length == 0) {
                delete item.children;
                } else if (item.children.length > 0 ) {
                this.getMenuBtnList(item.children);
                }
            }
            return menuTreeList
        },
        catalogchange(){
            console.log("栏目类型修改")
            var catalogdata = {
                "layout":'',
                "catalogId":this.form.catalogId,
                "sourceId":this.sourceId
            }
            liststyle(catalogdata).then(
                response => {
                    console.log(response)
                    this.onestyleoptions = response.data;
                    this.getMenuBtnList(this.onestyleoptions);
                    this.form.styleId = '';
                }
            )
        },
        //新增一条时样式选择
        stylehandleChangeone(){

        },
        submitdialog(){
            console.log("弹窗提交")
            console.log(this.form)
            this.$refs["form"].validate((valid) => {
                if (!valid) return;
            })
            const dataaddOne = {
                "mealId":Number(this.id),
                "catalogId":this.form.catalogId,
                "styleId":this.form.styleId
            }
            // 新增
            mealaddOne(dataaddOne).then(response => {
                console.log(response)
                if (response.code === 200) {
                    this.msgSuccess('新增成功');
                    // this.open = false;
                    // this.$refs["form"].resetFields();
                    // this.layout = '';
                    // this.form = {}
                    this.cancel();
                    this.getmealdetail(this.id);
                } else {
                this.msgError(response.msg)
                }
            })
        },
        cancel(){
            this.open = false;
            this.$refs["form"].resetFields();
            this.layout = '';
            this.form = {}
            console.log("弹窗取消")
        },
        handledelete(data){
            console.log(data)
            
                

            console.log(this.id)
            if(this.id){
                getmealinfo(this.id).then(response=>{
                    console.log(response)
                    if(response.data.status){
                        this.$confirm('是否确认删除栏目类型为"' + data.catalogName + '"的数据项?该数据项正在使用！', '严重警告', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'error'
                        }).then(function() {
                            return delmealdetail(data.id)
                        }).then(() => {
                            this.msgSuccess('删除成功')
                            if(!this.id){
                                this.getnewmealdetail();
                            }else{
                                this.getmealdetail(this.id);
                            }
                        }).catch(function() {})
                    }else{
                        this.$confirm('是否确认删除栏目类型为"' + data.catalogName + '"的数据项?', '警告', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(function() {
                            return delmealdetail(data.id)
                        }).then(() => {
                            this.msgSuccess('删除成功')
                            if(!this.id){
                                this.getnewmealdetail();
                            }else{
                                this.getmealdetail(this.id);
                            }
                        }).catch(function() {})
                    }
                })
            }else{
                this.$confirm('是否确认删除栏目类型为"' + data.catalogName + '"的数据项?', '警告', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function() {
                    return delmealdetail(data.id)
                }).then(() => {
                    this.msgSuccess('删除成功')
                    if(!this.id){
                        this.getnewmealdetail();
                    }else{
                        this.getmealdetail(this.id);
                    }
                }).catch(function() {})
            }
            
        },
        editmeal(){
            if(!this.id){
                return
            }
            const addmealdata = {
                "id":Number(this.id),
                "mealName": this.setmealname,
                "templateId":Number(this.templateid)
            };
            updatemeal(addmealdata).then(response => {
                if (response.code === 200) {
                    // this.msgSuccess('修改成功')
                } else {
                    this.setmealname = '';
                    this.msgError(response.msg)
                }
            })
        },
        //获取样式列表(级联菜单)
        getliststyle(){
            this.loading = true;
            if(!this.sourceId){
                var idd = 10000
            }else{
                var idd = this.sourceId;
            }
            var catalogdata = {
                "layout":'',
                'sourceId':idd
            }
            liststyle(catalogdata).then(
                response => {
                // console.log(response)
                this.styleoptions = response.data;
                this.getMenuBtnList(this.styleoptions);
                this.loading = false
                }
            )
        },
        stylehandlegetdata(data){
        },
        optiondisable(e,data){
            if(e){
                for(var i=0;i<this.styleoptions.length;i++){
                    if(this.styleoptions[i].layout == data.layout){
                        this.C_disable(this.styleoptions[i],false)
                    }else{
                        this.C_disable(this.styleoptions[i],true)
                    }
                }
            }
            this.$nextTick(function(){
                $('.is-disabled').parents('.el-cascader-node').attr('C_color_change','C_color_change');
            })
        },
        expandChange(){
            this.$nextTick(function(){
                $('.is-disabled').parents('.el-cascader-node').attr('C_color_change','C_color_change');
            })
        },
        C_disable(e,bool){
            this.$set(e, 'disabled', bool)
            if(e.children){
                for(var i=0;i<e.children.length;i++){
                this.C_disable(e.children[i],bool);
                }
            }
        },
        // optiondisable(e){
        //         if(e){
        //             for(var i=0;i<this.styleoptions.length;i++){
        //                 if(this.styleoptions[i].layout == this.layout){
        //                 this.C_disable(this.styleoptions[i],false)
        //                 }else{
        //                 this.C_disable(this.styleoptions[i],true)
        //                 }
        //             }
        //         }
        // },
        //级联菜单修改
        stylehandleChange(data) {
            console.log(data);
            if(!this.id){
                return
            }
            //修改
            const editmealdata = {
                "id":Number(data.id),        
                "mealId":Number(this.id),
                "styleId":Number(data.styleId),
                "catalogId":Number(data.catalogId)
            };
            updatemealdetail(editmealdata).then(response => {
                if (response.code === 200) {
                    // this.msgSuccess('修改成功')
                    // this.getList()
                } else {
                    this.msgError(response.msg)
                }
            })
        },
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                for(var i=0;i<this.hebing.length;i++){
                    if(rowIndex == this.hebing[i].start){
                        return {
                            rowspan: this.hebing[i].count,
                            colspan: 1
                        };
                    }
                    if(rowIndex > this.hebing[i].start && rowIndex < parseInt(this.hebing[i].start)+parseInt(this.hebing[i].count)){
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            }
        },
        getnewmealdetail(){
            listdefaultmeal(this.sourceId).then(response => {
                console.log(response)
                this.tableData = response.data.list;
                this.hebing = response.data.info;

                
                for (var i = 0; i < this.hebing.length; i++) {
                    if (this.hebing[i].count==0) {//判断key为999的对象是否存在，
                        this.hebing.splice(i, 1);//存在即删除
                    }
                }
                
            })
        },
        getmealdetail(data){
            detailmeallist(data,this.sourceId).then(response => {
                // console.log(response)
                this.tableData = response.data.list;
                this.hebing = response.data.info;

                for (var i = 0; i < this.hebing.length; i++) {
                    if (this.hebing[i].count==0) {//判断key为999的对象是否存在，
                        this.hebing.splice(i, 1);//存在即删除
                    }
                }
                console.log(this.tableData)
                console.log(this.hebing)
            })
        },
        /** 提交按钮 */
        submitForm: function() {
            if (this.id) {
                //修改
                // const editmealdata = {
                //     "templateId":Number(this.templateid),
                //     "name":this.setmealname,
                //     "data":this.tableData
                // };
                // updatemealdetail(editmealdata).then(response => {
                //     if (response.code === 200) {
                //         this.msgSuccess('修改成功')
                //         // this.getList()
                //         this.back()
                //     } else {
                //         this.msgError(response.msg)
                //     }
                // })
                this.msgSuccess('修改成功')
                this.back()
            }else{

                if(!this.setmealname){
                    this.$message({
                        message:'请先填写套餐名',
                        type:'warning'
                    })
                    return;
                }
                //新增
                const addmealdata = {
                    "templateId":Number(this.templateid),
                    "name":this.setmealname,
                    "data":this.tableData
                };
                addmealdetail(addmealdata).then(response => {
                    if (response.code === 200) {
                        this.msgSuccess('新增成功')
                        // this.getList()
                        this.back()
                    } else {
                        this.msgError(response.msg)
                    }
                })
            }
        },
  
  }
}
</script>
<style lang="scss">
</style>