<template>
        <div  style="padding:30px;" class="templatemanage-container">
          
          <el-form ref="queryForm" :model="queryParams" :inline="true">
            <el-form-item label="栏目名字" prop="name">
              <el-input
                v-model="queryParams.name"
                placeholder="请输入栏目名字"
                clearable
                size="small"
                style="width: 240px"
                @keyup.enter.native="handleQuery"
              />
            </el-form-item>
            <el-form-item label="布局">
                      <el-select v-model="queryParams.layout" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
              <el-button type="primary" icon="el-icon-document-add" size="mini" @click="handleAdd" style="margin:0 10px 0 20px;">增加栏目</el-button>
            </el-form-item>
          </el-form>

          <el-table border v-loading="loading" :data="cataloglist" >
            <el-table-column label="id" align="center" prop="id" />
            <el-table-column label="栏目代码" align="center" prop="catalogCode" :show-overflow-tooltip="true" />
            <el-table-column label="栏目名字" align="center" prop="catalogName" :show-overflow-tooltip="true" />
            <el-table-column label="布局" :formatter="layoutFormatter" align="center" prop="layout" :show-overflow-tooltip="true" />
            <el-table-column label="排序" align="center" prop="sort" :show-overflow-tooltip="true" />
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <Iconbutton icontype="xg" label="修改" @fatherMethod="handleUpdate(scope.row)"></Iconbutton>
                <Iconbutton icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>
                <!-- <el-button
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

          <!-- 添加或修改栏目对话框 -->
          <el-dialog :title="title" :visible.sync="open" width="500px">
            <el-form ref="form" :model="templateform" :rules="rules" label-width="80px">
              <el-form-item label="栏目名称" prop="catalogName">
                <el-input v-model="templateform.catalogName" placeholder="请输入栏目名称"/>
              </el-form-item>
              <el-form-item label="栏目代码" prop="catalogCode">
                <el-input v-model="templateform.catalogCode" placeholder="请输入栏目代码"/>
              </el-form-item>
              <el-form-item label="排序" prop="sort">
                <el-input v-model="templateform.sort" placeholder="请输入排序"/>
              </el-form-item>
              <el-form-item label="布局" prop="layout">
                <el-select v-model="templateform.layout" placeholder="请选择">
                  <el-option
                    v-for="item in layoutoptions"
                    :key="item.id"
                    :label="item.layoutName"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <!-- <el-form-item label="布局" prop="layout">
                <el-input v-model="templateform.layout" placeholder="请选择布局"/>
              </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="submitForm">确 定</el-button>
              <el-button @click="cancel">取 消</el-button>
            </div>
          </el-dialog>
        </div>
</template>

<script>
import { 
  cataloglist ,
  updatecatalog ,
  infocatalog ,
  addcatalog ,
  delcatalog} from '@/api/mbh'

export default {
  name: 'templatemanage',
  data() {
    return {
      // 查询参数
      queryParams: {
        name: undefined,
        layout:''
      },
      options: [{
          value: '',
          label: '全部'
        }, {
          value: 'header',
          label: '头部'
        }, {
          value: 'menu',
          label: '菜单栏'
        }, {
          value: 'middle',
          label: '中部'
        }, {
          value: 'groupHeader',
          label: '组头'
        }, {
          value: 'bottom',
          label: '底部'
      }],
      loading:true,
      cataloglist:[],
      // 弹出层标题
      title: '',
      // 是否显示弹出层
      open: false,
      // 表单参数
      templateform: {},
      // 布局options
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
      // 表单校验
      rules: {
        catalogName: [
          { required: true, message: '栏目名称不能为空', trigger: 'blur' }
        ],
        catalogCode: [
          { required: true, message: '栏目代码不能为空', trigger: 'blur' }
        ],
        layout : [
          { required: true, message: '布局不能为空', trigger: 'blur' }
        ],
        sort : [
          { required: true, message: '排序不能为空', trigger: 'blur' }
        ]
      },
      mealform:{},
      mealid:''
    }
  },
  created() {
    this.getList();
  },
  methods: {
    handleQuery(){
      this.queryParams.pageIndex = 1
      this.getList();
    },
    // Formatter
    layoutFormatter (row, column) {
      if(row.layout=='header'){
        return '头部';
      }
      if(row.layout=='menu'){
        return '菜单';
      }
      if(row.layout=='middle'){
        return '中部';
      }
      if(row.layout=='groupHeader'){
        return '组头';
      }
      if(row.layout=='bottom'){
        return '底部';
      }
    },
    //获取栏目数据列表
    getList(){
      this.loading = true
      cataloglist(this.queryParams).then(
        response => {
          console.log(response)
          this.cataloglist = response.data.list
          this.loading = false;
        }
      )
    },
    // 表单重置
    reset() {
      this.templateform = {
        id: undefined,
        catalogCode: undefined,
        catalogName: undefined,
        layout: undefined,
      }
      this.resetForm('form')
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset()
      this.open = true
      this.title = '新增栏目'
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset()
      const id = row.id;
      // console.log(id)
      infocatalog(id).then(response => {
        // console.log(response)
        this.templateform = response.data
        this.open = true
        this.title = '修改栏目'
      })
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const id = row.id;
      this.$confirm('是否确认删除id为"' + id + '"的数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function() {
        return delcatalog(id)
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
      if(this.templateform.sort){
        this.templateform.sort = Number(this.templateform.sort);
      }
      this.$refs['form'].validate(valid => {

        if (valid) {
          if (this.templateform.id !== undefined) {
            updatecatalog(this.templateform).then(response => {
              if (response.code === 200) {
                this.msgSuccess('修改成功')
                this.open = false
                this.getList()
              } else {
                this.msgError(response.msg)
              }
            })
          } else {
            addcatalog(this.templateform).then(response => {
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