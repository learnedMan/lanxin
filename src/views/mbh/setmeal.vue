<template>
        <div style="padding:30px;" class="setmeal-container">
            <h2>{{pagetitle}} — 套餐列表</h2>
            <el-row :gutter="10" class="mb8" style="margin-bottom:30px;">
                <el-col :span="1.5" style="margin-right:30px;">
                  <el-button
                    type="primary"
                    size="small"
                    @click="handleAdd"
                  >增加套餐</el-button>
                </el-col>
                <el-col :span="1.5" style="margin-right:30px;">
                  <el-button
                    type="info"
                    size="small"
                    @click="back"
                  >返回</el-button>
                </el-col>
            </el-row>
            <el-table
              :data="tableData"
              style="width: 100%;"
              row-key="id"
              border>
              <el-table-column label="序号" prop="id" />
              <el-table-column label="套餐名称" prop="mealName" :show-overflow-tooltip="true" />
              <el-table-column label="更新时间" prop="upatedAt" :show-overflow-tooltip="true" />
              <el-table-column
                prop="status"
                label="是否启用">
                <template slot-scope="scope">
                  <el-switch
                    @change="changestatus(scope.row)"
                    v-model="scope.row.status">
                  </el-switch>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
              <template slot-scope="scope">
                <Iconbutton icontype="xg" label="修改" @fatherMethod="handleUpdate(scope.row)"></Iconbutton>
                <!-- <el-button
                  size="mini"
                  type="text"
                  icon="el-icon-circle-check"
                  @click="handleUpdate(scope.row)"
                >修改</el-button> -->
                <!-- <el-button
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
          
        </div>
</template>

<script>
import { listmeal , delmeal , updatemeal , infotemplate} from '@/api/mbh'
export default {
  name: 'setmeal',
  data() {
    return {
      pagetitle:'',
      loading:true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 总条数
      total: 0,
      tableData:[],
      // 查询参数
      queryParams: {
        pageIndex: 1,
        pageSize: 10,
      },
      id:undefined
    }
  },
  created() {
    this.id = this.$route.query.id;
    infotemplate(this.id).then(response => {
        this.pagetitle = response.data.templateName
    })//模板名
    this.getList();
  },
  methods: {
    handleAdd(){
      this.$router.push({
        path:'/mbh/setmealDetails',
        query:{
          id:'',
          templateid:this.id
        }
      });
    },
    back(){
      this.$router.go(-1)
    },
    // 切换启用状态
    changestatus(data){
      console.log(data)
      updatemeal(data).then(response => {
        // console.log(response)
        if (response.code === 200) {
          this.msgSuccess('修改成功')
          this.getList();
        } else {
          this.msgError(response.msg)
        }
      })
    },
    //获取模板数据列表
    getList(){
      this.loading = true
      listmeal(this.id).then(
        response => {
          console.log(response)
          this.tableData = response.data.list
          // this.total = response.data.count
          this.loading = false
        }
      )
    },
    handleUpdate(row){
      // console.log(row.id)
      this.$router.push({
        path:'/mbh/setmealDetails',
        query:{
          id:row.id,
          templateid:this.id
        }
      });
    },
    handleDelete(data){
      this.$confirm('是否确认删除序号为"' + data.id + '"的数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function() {
        return delmeal(data.id)
      }).then(() => {
        this.getList()
        this.msgSuccess('删除成功')
      }).catch(function() {})
    },
  }
}
</script>
<style lang="scss">
</style>