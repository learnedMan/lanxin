<template>
        <div style="padding:30px;" class="templatemanage-container">
          <el-form ref="queryForm" :model="queryParams" :inline="true">
            <el-form-item label="产品名称" prop="name">
              <el-input
                v-model="queryParams.name"
                placeholder="请输入产品名称"
                clearable
                size="small"
                style="width: 240px"
                @keyup.enter.native="handleQuery"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
              <el-button type="primary" icon="el-icon-document-add" size="mini" @click="handleAdd" style="margin:0 10px 0 20px;">增加产品</el-button>
              <el-button type="primary" icon="el-icon-upload" size="mini" @click="copymeal">导入套餐</el-button>
            </el-form-item>
          </el-form>

          <el-table border v-loading="loading" :data="templateList"  @selection-change="handleSelectionChange">
            <el-table-column label="序号" prop="id" />
            <el-table-column label="产品名称" prop="templateName" :show-overflow-tooltip="true" />
            <el-table-column label="更新时间" prop="updateAt" :show-overflow-tooltip="true" />
            <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
              <template slot-scope="scope">
                <Iconbutton icontype="ys" label="样式" @fatherMethod="handlestylelist(scope.row)"></Iconbutton>
                <Iconbutton icontype="tc" label="套餐" @fatherMethod="handleSetmeallist(scope.row)"></Iconbutton>
                <Iconbutton icontype="xg" label="修改" @fatherMethod="handleUpdate(scope.row)"></Iconbutton>
                <Iconbutton icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>
                <!-- <el-button
                  size="mini"
                  type="text"
                  icon="el-icon-more-outline"
                  @click="handlestylelist(scope.row)"
                >样式</el-button>
                <el-button
                  size="mini"
                  type="text"
                  icon="el-icon-edit"
                  @click="handleSetmeallist(scope.row)"
                >套餐</el-button>
                <el-button
                  size="mini"
                  type="text"
                  icon="el-icon-circle-check"
                  @click="handleUpdate(scope.row)"
                >修改</el-button>
                <el-button
                  size="mini"
                  type="text"
                  icon="el-icon-delete"
                  @click="handleDelete(scope.row)"
                >删除</el-button> -->
              </template>
            </el-table-column>
          </el-table>

          <pagination
            v-show="total>0"
            :total="total"
            :page.sync="queryParams.pageIndex"
            :limit.sync="queryParams.pageSize"
            @pagination="getList"
          />
          <!-- 新增或修改产品对话框 -->
          <el-dialog :title="title" :visible.sync="open" width="500px">
            <el-form ref="form" :model="templateform" :rules="rules" label-width="80px">
              <el-form-item label="产品名称" prop="templateName">
                <el-input v-model="templateform.templateName" placeholder="请输入产品名称"/>
              </el-form-item>
              <el-form-item label="所属市县" prop="countyName">
                <el-input v-model="templateform.countyName" placeholder="请输入所属市县"/>
              </el-form-item>
              <el-form-item label="联系人" prop="liaison">
                <el-input v-model="templateform.liaison" placeholder="请输入联系人"/>
              </el-form-item>
              <el-form-item label="手机号" prop="mobile">
                <el-input v-model="templateform.mobile" placeholder="请输入手机号"/>
              </el-form-item>
              <el-form-item label="sourceId" prop="sourceId">
                <el-input :disabled="isEdit" v-model="templateform.sourceId" placeholder="请输入sourceId"/>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="submitForm">确 定</el-button>
              <el-button @click="cancel">取 消</el-button>
            </div>
          </el-dialog>

          <!-- 导入套餐对话框 -->
          <el-dialog title="导入套餐" :visible.sync="mealopen" width="500px">
            <el-form ref="mealform" :model="mealform" :rules="mealrules" label-width="120px">
              <el-form-item label="选择复制产品" prop="templatecopyId1">
                <el-select v-model="mealform.templatecopyId1"  @change="templatechange" placeholder="请选择">
                  <el-option
                    v-for="item in templateoptions"
                    :key="item.id"
                    :label="item.templateName"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="选择套餐" prop="id">
                <el-select v-model="mealid" :disabled="mealform.templatecopyId1?false:true" placeholder="请选择">
                  <el-option
                    v-for="item in mealoptions"
                    :key="item.id"
                    :label="item.mealName"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="选择粘贴产品" prop="templateId">
                <el-select v-model="mealform.templateId" placeholder="请选择">
                  <el-option
                    v-for="item in templateoptions"
                    :key="item.id"
                    :label="item.templateName"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="套餐名称" prop="mealName">
                <el-input v-model="mealform.mealName" placeholder="请输入套餐名称"/>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="mealsubmit">确 定</el-button>
              <el-button @click="mealcancel">取 消</el-button>
            </div>
          </el-dialog>

        </div>
</template>

<script>
import { 
  listtemplate ,
  infotemplate ,
  updatetemplate ,
  addtemplate ,
  deltemplate ,
  copymeal ,
  listmeal } from '@/api/mbh'
export default {
  name: 'templatemanage',
  data() {
    return {
      // 查询参数
      queryParams: {
        pageIndex: 1,
        pageSize: 10,
        name: undefined,
      },
      loading:true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 总条数
      total: 0,
      templateList:[],
      // 弹出层标题
      title: '',
      // 是否显示弹出层
      open: false,
      // 表单参数
      templateform: {},
      // 表单校验
      rules: {
        templateName: [
          { required: true, message: '产品名称不能为空', trigger: 'blur' }
        ],
        countyName: [
          { required: true, message: '所属市县不能为空', trigger: 'blur' }
        ],
        liaison : [
          { required: true, message: '联系人不能为空', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' }
        ],
        sourceId:[
          { required: true, message: 'sourceId不能为空', trigger: 'blur' }
        ]
      },
      isEdit: false,
      firstsearch:false,
      // 导入套餐
      mealopen:false,
      mealform:{},
      mealrules:{
        templatecopyId1: [
          { required: true, message: '复制产品不能为空', trigger: 'blur' }
        ],
        id: [
          { required: true, message: '套餐不能为空', trigger: 'blur' }
        ],
        mealName: [
          { required: true, message: '套餐名字不能为空', trigger: 'blur' }
        ],
        templateId:[
          { required: true, message: '粘贴产品不能为空', trigger: 'blur' }
        ],
      },
      templateoptions:[],
      mealoptions:[],
      mealid:''
    }
  },
  created() {
    this.getList();
  },
  methods: {
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageIndex = 1
      this.getList();
    },
    handlestylelist(data){
      console.log(data)
      if(data.sourceId==10000){
        this.$router.push({
          path:'/mbh/stylelist',
          query:{
            sourceId:data.sourceId
          }
        });
      }else{
        this.$router.push({
          path:'/mbh/productstylelist',
          query:{
            sourceId:data.sourceId,
            pname:data.templateName
          }
        });
      }
    },

    // 复制套餐
    copymeal(){

      this.mealopen = true;
      // this.$message({
      //   message:'点击导入套餐，暂未开发，敬请期待',
      //   type:'warning'
      // })
    },
    mealcancel(){
      this.mealopen = false;
      this.$refs["mealform"].resetFields();
      this.mealid = '';
    },
    templatechange(){
      // console.log(this.mealform.id)
      this.mealid = '';
      listmeal(this.mealform.templatecopyId1).then(
        response => {
          this.mealoptions = response.data.list
        }
      )
    },
    /** 提交按钮 */
    mealsubmit: function() {
      this.mealform.id = this.mealid;
      this.mealform.templatecopyId = this.mealform.templateId;
      this.$refs['mealform'].validate(valid => {
        if (!valid) return;
        copymeal(this.mealform).then(response => {
          if (response.code === 200) {
            this.msgSuccess('复制成功')
            this.$refs["mealform"].resetFields();
            this.mealid = '';
            this.mealopen = false
          } else {
            this.msgError(response.msg)
          }
        })
      })
    },

    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    },
    //获取产品数据列表
    getList(){
      this.loading = true
      listtemplate(this.queryParams).then(
        response => {
          console.log(response)
          this.templateList = response.data.list
          
          this.total = response.data.count
          this.loading = false;
          if(this.firstsearch){
            // this.$message({
            //   message:response.msg,
            //   type:"success"
            // })
          }
          this.firstsearch = true;
        }
      )
      listtemplate().then(
        response =>{
          // console.log(response);
          this.templateoptions = response.data.list
        }
      )
    },
    // 表单重置
    reset() {
      this.templateform = {
        id: undefined,
        countyName: undefined,
        templateName: undefined,
        mobile: undefined,
        liaison: undefined
      }
      this.resetForm('form')
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset()
      this.open = true
      this.title = '新增产品'
      this.isEdit = false
    },
    /** 点击套餐 */
    handleSetmeallist(row) {
      this.$router.push({
        path:'/mbh/setmeal',
        query:{
          id:row.id
        }
      });
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset()
      const id = row.id || this.ids;
      // console.log(id)
      infotemplate(id).then(response => {
        // console.log(response)
        this.templateform = response.data
        this.open = true
        this.title = '修改产品'
        this.isEdit = true
      })
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const id = row.id || this.ids
      this.$confirm('是否确认删除产品序号为"' + id + '"的数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function() {
        return deltemplate(id)
      }).then(() => {
        this.getList()
        this.msgSuccess('删除成功')
      }).catch(function() {})
    },
    // 取消按钮
    cancel() {
      this.open = false
      this.reset()
    },
    /** 提交按钮 */
    submitForm: function() {
      this.templateform.sourceId = Number(this.templateform.sourceId);
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.templateform.id !== undefined) {
            updatetemplate(this.templateform).then(response => {
              if (response.code === 200) {
                this.msgSuccess('修改成功')
                this.open = false
                this.getList()
              } else {
                this.msgError(response.msg)
              }
            })
          } else {
            addtemplate(this.templateform).then(response => {
              if (response.code === 200) {
                this.msgSuccess('新增成功')
                this.open = false
                this.getList()
              } else {
                this.msgError(response.msg)
              }
            })
          }
        }
      })
    },
  }
}
</script>
<style lang="scss">
</style>