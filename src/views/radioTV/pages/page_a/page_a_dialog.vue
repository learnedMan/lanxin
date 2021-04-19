<template>
  <div class="page_a_dialog">
    <!-- 新增/修改频道弹窗 -->
    <el-dialog width="1200px" 
        :show-close= false
        :close-on-press-escape = false
        :close-on-click-modal = false
        title="编辑节目单模板" 
        :visible.sync="dialogFormVisible">
            <span>直播节日模板：</span>
            <el-radio-group @change="chooseradio" v-model="radio">
                <el-radio :label="3">每日重复(创建单日节目单模板，每日重复)</el-radio>
                <el-radio :label="6">每周重复(创建周一至周日节目单模板，每周循环)</el-radio>
                <el-radio :label="9">不启用模板</el-radio>
            </el-radio-group>
            <div style="min-height:500px;">
                <div v-show="radio==3||radio==6" style="margin-top:30px;display:flex;">
                    <el-tabs v-show="radio==6" class="left" tab-position="left" style="height:500px;margin-right:10px;width:100px;">
                        <el-tab-pane label="周一"></el-tab-pane>
                        <el-tab-pane label="周二"></el-tab-pane>
                        <el-tab-pane label="周三"></el-tab-pane>
                        <el-tab-pane label="周四"></el-tab-pane>
                        <el-tab-pane label="周五"></el-tab-pane>
                        <el-tab-pane label="周六"></el-tab-pane>
                        <el-tab-pane label="周日"></el-tab-pane>
                    </el-tabs>
                    <div class="right" style="flex-grow:1;">
                        <el-button style="margin-bottom:20px;" type="primary" size="mini" >添加</el-button>
                        <el-table 
                            v-if="tablefalg"
                            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                            border 
                            :data="dataList">
                            <el-table-column label="ID" align="center" prop="id" />
                            </el-table-column>
                            <el-table-column label="节目名称" align="center" prop="name" :show-overflow-tooltip="true" />
                            <el-table-column label="开始时间" align="center" prop="sort" :show-overflow-tooltip="true" />
                            <el-table-column label="播放时长" align="center" prop="sort" :show-overflow-tooltip="true" />
                            <el-table-column 
                                label="允许回看" 
                                align="center" 
                                prop="status" 
                                :show-overflow-tooltip="true" >
                                <template slot-scope="scope">
                                <el-select v-model="scope.row.status" placeholder="请选择">
                                    <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column width="150px" label="操作" align="center">
                                <template slot-scope="scope">
                                <el-button
                                    size="mini"
                                    type="text"
                                    icon="el-icon-edit"
                                    style="color:#E6A23C;"
                                    @click="editdata(scope.row)"
                                >修改</el-button>
                                <el-button
                                    size="mini"
                                    type="text"
                                    icon="el-icon-delete"
                                    style="color: #f56c6c"
                                    @click="deldata(scope.row)"
                                    >删除</el-button
                                >
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>

      <div class="dialog-footer" slot="footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { 
  } from '@/api/manage'
  export default {
    name: 'page_a_dialog',
    data() {
      return {
          dialogFormVisible:true,
          radio:"",
          dataList:[{name:''}],
          tablefalg:true,
          statusoptions: [{
            value: 1,
            label: '是'
            },{
            value: 2,
            label: '否'
          }],
      }
    },
    created() {
    },
    methods:{
        // 关闭窗口
        closeDialog() {
            this.dialogFormVisible = false;
        },
        enterDialog(){
            this.dialogFormVisible = false;
        },
        chooseradio(){
            this.tablefalg= false
            this.$nextTick(()=>{
                this.tablefalg = true
            })
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



<style scoped lang="scss">

.clearflex {
  *zoom: 1;
}

.clearflex:after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}

.fl-right {
  float: right;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.role-box {
  .el-tabs__content {
    height: calc(100vh - 150px);
    overflow: auto;
  }
}
</style>