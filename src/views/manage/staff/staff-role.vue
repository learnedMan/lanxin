<template>
  <div class="staff-role">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
        <el-form-item label="角色：" prop="name">
          <el-input
            v-model="queryParams.name"
            placeholder="请输入关键字"
            clearable
            size="small"
            style="width: 240px"
          />
        </el-form-item>
        <el-form-item label="创建时间：" prop="creattime"  style="margin-right:50px;">
          <el-date-picker
            v-model="queryParams.creattime"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
            <el-button type="info" @click="resetqueryParams" size="mini" >重置</el-button>
            <el-button type="primary" style="margin-right:50px;" size="mini">搜索</el-button>
            <el-button type="primary" @click="addAuthority" size="mini" >添加</el-button>
        </el-form-item>
    </el-form>

    <el-table border v-loading="loading" :data="dataList">
      <el-table-column label="角色id" align="center" prop="id" />
      <el-table-column label="角色名称" align="center" prop="id" :show-overflow-tooltip="true" />
      <el-table-column label="创建时间" align="center" prop="updateAt" :show-overflow-tooltip="true" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="editAuthority(scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
          >删除</el-button>
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

    <!-- 新增角色弹窗 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="authorityForm">
        <el-form-item label="角色姓名" prop="authorityName">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入角色名称" v-model="form.authorityName"></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>


  </div>
</template>

<script>
  export default {
    name: 'staff-role',
    data() {
      return {
        // 查询参数
        queryParams: {
          pageIndex: 1,
          pageSize: 10,
          name: undefined,
          creattime:'',
        },
        pickerOptions: {
          shortcuts: [{
            text: '最近七天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三十天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近九十天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        loading:true,
        dataList:[{
          id:'1',
        }],
        // 总条数
        total: 0,
        dialogFormVisible: false,
        form: {
          authorityName: "",
        },
        rules: {
          authorityName: [
            { required: true, message: "请输入角色名", trigger: "blur" }
          ]
        },
        dialogType: "add",
        dialogTitle:''
      }
    },
    created() {
      this.getList();
    },
    methods:{
      /** 搜索按钮操作 */
      handleQuery() {
        this.queryParams.pageIndex = 1
      },
      getList(){
        this.loading = false;
      },
      handleDelete(){

      },
      resetqueryParams(){
        this.queryParams = {
          pageIndex: 1,
          pageSize: 10,
          name: undefined,
          creattime:'',
        }
      },
      // 关闭窗口
      closeDialog() {
        // this.initForm();
        this.dialogFormVisible = false;
      },
      // 确定弹窗
      enterDialog() {
        this.dialogFormVisible = false;
      },
      // 初始化表单
      initForm() {
        if (this.$refs.authorityForm) {
          this.$refs.authorityForm.resetFields();
        }
        this.form = {
          authorityName: ""
        };
      },
      // 增加角色
      addAuthority() {
        this.initForm();
        this.dialogTitle = "新增角色";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 编辑角色
      editAuthority(row) {
        this.dialogTitle = "编辑角色";
        this.dialogType = "edit";
        for (let key in this.form) {
          this.form[key] = row[key];
        }
        this.dialogFormVisible = true;
      }
    }
  }

</script>

<style scoped lang="scss">

</style>
