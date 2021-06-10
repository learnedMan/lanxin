<template>
  <div class="architec-site">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <el-form-item label="稿件类型：">
        <el-select clearable v-model="queryParams.type" placeholder="请选择">
          <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="作者：">
        <el-input
          v-model="queryParams.author_name"
          placeholder="请输入作者姓名"
          clearable
          size="small"
          style="width: 200px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
          <el-button type="info" @click="initcondition" size="mini" >重置</el-button>
          <el-button type="primary" @click="handleQuery" size="mini">搜索</el-button>
          <el-button type="success" @click="recovery" :disabled="multipleSelection.length==0" size="mini" >批量恢复</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border v-loading="loading" :data="dataList"
       @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="稿件id" align="center" prop="id" />
      <el-table-column label="稿件封面" width="80px" align="center" prop="name" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <img :src="scope.row.extra.cover[0].path||noimg" alt="" style="width: 50px;height: 50px;">
          </template>
      </el-table-column>
      <el-table-column label="稿件标题" align="center" prop="title" :show-overflow-tooltip="true" />
      <el-table-column label="稿件类型" align="center" :show-overflow-tooltip="true" >
            <template slot-scope="scope">
                <span>{{scope.row.type | formattype}}</span>
            </template>
      </el-table-column>
      <el-table-column label="作者" align="center" prop="author_name" :show-overflow-tooltip="true" />
      <el-table-column label="编辑" align="center" prop="editor_name" :show-overflow-tooltip="true" />
      <el-table-column label="状态" align="center" :show-overflow-tooltip="true" >
            <template slot-scope="scope">
                <span>{{scope.row.status | formatstatus}}</span>
            </template>
      </el-table-column>
      <el-table-column label="删除时间" align="center" prop="deleted_at" :show-overflow-tooltip="true" />
      <el-table-column width="100px" label="操作" align="center">
          <template slot-scope="scope">
            <!-- <el-button
                size="mini"
                type="text"
                icon="el-icon-finished"
                @click="recovery(scope.row)"
                style="color:#67C23A;"
            >恢复</el-button> -->
            <Iconbutton icontype="hf" label="恢复" @fatherMethod="recovery(scope.row)"></Iconbutton>
          </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.page"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script>
import {
  getsites,
  getrecycleBin,
  restore
  } from '@/api/manage'
  export default {
    name: 'architec-site',
    data() {
      return {
        // 查询参数
        queryParams: {
          page: 1,
          pageSize: 10,
          type:'',
          author_name:''
        },
        noimg: require('@/assets/c_images/noimg.png'),//默认图片
        loading:true,
        dataList:[],
        // 总条数
        total: 0,
        statusoptions: [{
          value: 'news',
          label: '图文'
        },{
          value: 'album',
          label: '图集'
        },{
          value: 'video',
          label: '视频'
        },{
          value: 'outer_link',
          label: '外链'
        }],
        multipleSelection:[]//选中数组
      }
    },
    created() {
      this.getList();
    },
    filters: {
        formatstatus(val){
            if(val==0){
                return '待审核'
            }else if(val==1){
                return '已审核'
            }else if(val==2){
                return '已下架'
            }else if(val==3){
                return '已删除'
            }else{
                return '未知状态'
            }
        },
        formattype(val){
            if(val=='news'){
                return '图文'
            }else if(val=='album'){
                return '图集'
            }else if(val=='video'){
                return '视频'
            }else{
                return '未知类型'
            }
        }
    },
    methods:{
      initcondition(){
        this.queryParams.author_name="";
        this.queryParams.type="";
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.loading = true;
        this.queryParams.page = 1;
        this.getList();
      },
      getList(){
        getrecycleBin(this.queryParams).then(response => {
          this.loading = false;
          this.dataList = response.data;
          this.total = response.total;
        //   console.log(this.dataList)
        })
      },
      recovery(data){
          var ids = data.id||this.multipleSelection.join(',');

          this.$confirm('此操作将恢复id为'+ids+'的稿件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            restore(ids).then(response => {
              this.$message({
                message: '恢复成功',
                type: 'success'
              });
              this.getList();
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消恢复'
            });          
          });




          
      },
        // 表格选中变化
      handleSelectionChange(val){
        this.multipleSelection = val;
        for(var i=0;i<this.multipleSelection.length;i++){
            this.multipleSelection[i] = this.multipleSelection[i].id;
        }
      }
    }
  }

</script>
<style lang="scss">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

.role-box {
  .el-tabs__content {
    height: calc(100vh - 150px);
    overflow: auto;
  }
}
</style>



<style scoped>
.clearflex {
    *zoom: 1;
}

.clearflex:after {
    content: '';
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}

.fl-right{
  float: right;
}


</style>
