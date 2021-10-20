<template>
  <div class="system-sensitword">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <!-- <el-form-item label="白名单：">
        <el-input
          v-model="queryParams.keyword"
          placeholder="请输入关键字"
          clearable
          size="small"
          style="width: 200px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
        <el-form-item
          label="所属产品:"
        >
          <el-select
            v-model="queryParams.sourceId"
            placeholder="请选择所属产品"
            @change="handleQuery"
          >
            <el-option
              v-for="item in productLists"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      <el-form-item>
          <!-- <el-button v-points = "1500" type="primary" @click="initcondition" size="mini" >重置</el-button> -->
          <!-- <el-button v-points = "1500" type="primary" @click="handleQuery" size="mini">搜索</el-button> -->
          <el-button v-points = "1500" type="primary" @click="adddata" size="mini" >新增</el-button>
      </el-form-item>
    </el-form>

    <el-table 
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border v-loading="loading" :data="dataList">
      <el-table-column
        label="检测类型"
        align="center"
        prop="terminalType"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          <span>{{scope.row.terminalType | formatTerminalType}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="查询状态"
        align="center"
        prop="allowStatus"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          <span>{{scope.row.allowStatus | formatAllowStatus}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="敏感词类型"
        align="center"
        prop="filterType"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          <span>{{scope.row.filterType | formatFilterType}}</span>
        </template>
      </el-table-column>
      <el-table-column label="敏感词临界值" align="center" prop="sensitiveness" />
      <!-- <el-table-column label="替换文本" align="center" prop="replacetxt" /> -->
      <el-table-column width="160px" label="操作" align="center">
        <template slot-scope="scope">
          <Iconbutton icontype="xg" label="修改" @fatherMethod="handleEdit(scope.row)"></Iconbutton>
          <Iconbutton icontype="sc" label="删除" @fatherMethod="handleDelete(scope.row)"></Iconbutton>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="totalCount>0"
      :total="totalCount"
      :page.sync="queryParams.page"
      :limit.sync="queryParams.limit"
      @pagination="getList"
    />
    <!-- 新增/修改白名单弹窗 -->
    <el-dialog width="800px" 
    :close-on-click-modal = false
    :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="dataForm" style="margin-left: 60px">
        <!-- <el-form-item  label-width="80px" label="白名单" prop="keyword">
          <el-input style="width: 200px" autocomplete="off" placeholder="请输入白名单词汇" v-model="form.keyword"></el-input>
        </el-form-item> -->
        <el-form-item  label-width="120px" label="检测类型" prop="terminalType">
          <el-select clearable v-model="form.terminalType" placeholder="请选择">
          <el-option v-for="item in terminalTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item  label-width="120px" label="检测状态" prop="allowStatus">
          <el-select clearable v-model="form.allowStatus" placeholder="请选择">
          <el-option v-for="item in allowStatusLists" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item  label-width="120px" label="敏感词类型:" prop="type">
            <el-radio-group
              size="small"
              v-model="form.type"
            >
              <el-radio v-for="list of types" :key="list.value" :label="list.value">{{ list.label }}</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item  label-width="120px" label="敏感值临界值" prop="sensitiveness">
          <el-input style="width: 200px" autocomplete="off" placeholder="请输入0-100正整数" v-model="form.sensitiveness"></el-input>
        </el-form-item>
         <el-form-item  label-width="120px" label="替换文本" prop="replacetxt" v-if="this.form.terminalType == '1'">
          <el-input style="width: 200px" autocomplete="off" placeholder="请输入替代文本" v-model="form.replacetxt"></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button v-points = "1500" @click="closeDialog">取 消</el-button>
        <el-button v-points = "1500" @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import {
  getgories,
  addgories,
  editgories,
  delgories,


  getWhitelist,
  getSensitwordList,
  addSensitword,
  delSensitword,
  getproduct,
  addWhitelist,
  delWhitelist
  } from '@/api/manage'
  export default {
    name: 'system-sensitword',
    data() {
      return {
        // 查询参数
        queryParams: {
          page: 1,
          limit: 10,
          // keyword:"",
          sourceId: '',
          order:'desc'
        },
        loading:true,
        dataList: [],
        productLists: [],
        terminalTypes: [
          {
            value: 1,
            label: '评论',
          },
          {
            value: 2,
            label: '问政',
          },
          {
            value: 3,
            label: '分类问答',
          },
          {
            value: 4,
            label: '搜索',
          },
          {
            value: 5,
            label: '注册',
          },
          {
            value: 6,
            label: '新闻',
          },
          {
            value: 7,
            label: '镇街新闻',
          },
        ],
        allowStatusLists: [
           {
            value: 1,
            label: '禁止查询',
          },
          {
            value: 2,
            label: '内容删除',
          },
          {
            value: 3,
            label: '内容替换',
          },
          {
            value: 4,
            label: '允许查询',
          },
        ],
        types: [
           {
            value: '0',
            label: '正常',
          },
          {
            value: '1',
            label: '政治',
          },
          {
            value: '2',
            label: '色情',
          },
          {
            value: '3',
            label: '涉毒违法',
          },
          {
            value: '4',
            label: '谩骂',
          },
          {
            value: '5',
            label: '暴恐',
          },
          {
            value: '6',
            label: '综合',
          },
          {
            value: '7',
            label: '网络引流',
          },
          {
            value: '8',
            label: '综合',
          },
          {
            value: '9',
            label: '性感',
          },
          {
            value: '10',
            label: '灌水',
          },
          {
            value: '11',
            label: '垃圾信息',
          },
          {
            value: '12',
            label: '无意义',
          },
          {
            value: '13',
            label: '自定义',
          },
        ],
        // 总条数
        totalCount: 0,
        dialogFormVisible: false,
        form: {
          terminalType: '',
          allowStatus: '',
          type: '',
          sensitiveness: '',
          replacetxt: '',
        },
        rules: {
          // keyword: [
          //   { required: true, message: "请输入白名单词汇", trigger: "blur" }
          // ],
          terminalType: [
            { required: true, message: "请选择检测类型", trigger: "blur" }
          ],
          allowStatus: [
             { required: true, message: "请选择检测状态", trigger: "blur" }
          ],
          type: [
             { required: true, message: "请选择敏感词类型", trigger: "blur" }
          ],
          sensitiveness: [
             { required: true, message: "请输入敏感值临界值", trigger: "blur" }
          ],
          replacetxt: [
            { required: true, message: "请输入替换文本", trigger: "blur" }
          ],
        },
        dialogType: "add",
        dialogTitle:'',
      }
    },
  async created() {
      await this.getProductList();
      this.getList();
      this.initForm();
    },
     filters: {
        formatAllowStatus(val){
           let obj = {
             '1': '禁止查询',
             '2': '内容删除',
             '3': '内容替换',
             '4': '允许查询'
           }
          return obj[val] || ''
        },
        formatTerminalType(val){
          let obj = {
            '1': '评论',
            '2': '问政',
            '3': '分类问答',
            '4': '搜索',
            '5': '注册',
            '6': '新闻',
            '7': '镇街新闻'
          }
           return obj[val] || ''
        },
        formatFilterType(val) {
          let obj = {
            '0': '正常 ',
            '1': '政治',
            '2': '色情',
            '3': '涉毒违法',
            '4': '谩骂',
            '5': '暴恐',
            '6': '综合',
            '7': '网络引流',
            '8': '综合',
            '9': '性感',
            '10': '灌水',
            '11': '垃圾信息',
            '12': '无意义',
            '13': '自定义'
          }
           return obj[val] || ''
        }
    },
    methods:{
      initcondition(){
        this.queryParams.keyword="";
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.loading = true;
        this.queryParams.page = 1;
        this.getList();
      },
      /* 获取产品列表 */
      getProductList () {
        return getproduct({}).then(res => {
          const data = res.data || []
          this.productLists = data.map(n => ({
            label: n.name,
            value: n.source_id
          }));
          this.queryParams.sourceId = data?.[0]?.source_id;
        });
      },
      getList(){
        this.loading = true;
        getSensitwordList(this.queryParams).then(res=>{
          this.loading = false;
          this.dataList = res.page.list;
          this.totalCount = res.page.totalCount;
        })
      },
      adddata(){
        this.initForm();
        this.dialogTitle = "新增敏感词";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 初始化表单
      initForm() {
          if (this.$refs.dataForm) {
            this.$refs.dataForm.resetFields();
          }
      },
      // 编辑白名单
      handleEdit(row) {
        this.initForm();
        this.dialogTitle = "编辑敏感词";
        this.dialogType = "edit";
        console.log('row',row)
        let obj = {
          ...row,
          type: String(row.filterType)
        }
        delete obj.filterType
        console.log('obj',obj)
        this.$nextTick(() => {
          this.form = JSON.parse(JSON.stringify(obj))
        })
        this.dialogFormVisible = true;
      },
      // 关闭窗口
      closeDialog() {
        this.initForm();
        this.dialogFormVisible = false;
      },
      //删除敏感词
      handleDelete(row){
        this.$confirm('此操作将永久删除id为'+row.id+'的敏感词, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(row.id)
          var arr = []
          arr.push(row.id)
          delSensitword(arr).then(response => {
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
      // 确定弹窗
      enterDialog() {
        this.$refs["dataForm"].validate((valid) => {
          if (!valid) return;
           this.form.sensitiveness = Number(this.form.sensitiveness)
            let data = {
              ...this.form,
              appTypes: this.queryParams.sourceId + ','
            }
          if (this.dialogType=='edit') {
            //修改
            // console.log(this.form)
            // var data = this.form;
            console.log('data-----',data)
            // editgories(data.id,data).then(response => {
            //       this.$message({
            //         message: '修改成功',
            //         type: 'success'
            //       });
            //       this.dialogFormVisible = false;
            //       this.getList();
            // })
          }else{
            // 新增
            addSensitword(this.removePropertyOfNullFor0(data)).then(response => {
                  this.$message({
                    message: '新增成功',
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

.system-sensitword {
  .el-radio{
    margin-bottom: 10px;
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