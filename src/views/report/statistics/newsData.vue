<template>
    <div class="newsData">
        <el-form
            ref="department"
            :model="newsData.queryParams"
            :inline="true"
          >
            <el-form-item label="发布时间:" prop="Date">
              <el-date-picker
                v-model="newsData.queryParams.Date"
                type="daterange"
                align="right"
                size="small"
                unlink-panels
                range-separator="~"
                value-format="yyyy-MM-dd"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="handleDateChange($event)"
              />
            </el-form-item>
             <el-form-item  label="部门:" prop="departmentId">
                <el-cascader
                :show-all-levels = false
                v-model="newsData.queryParams.departmentId"
                :options="departmentList"
                :props="{ emitPath:false,checkStrictly: true ,value:'id',label:'name'}"
                clearable></el-cascader>
          </el-form-item>
          <el-form-item label="编辑：">
          <el-input
            v-model="newsData.queryParams.editor"
            placeholder="请输入编辑名称"
            clearable
          />
          </el-form-item>
        <el-form-item label="来源：">
          <el-input
            v-model="newsData.queryParams.source"
            placeholder="请输入编辑名称"
            clearable
          />
        </el-form-item>
        <el-form-item
          label="发布栏目"
          prop="channel_id"
        >
          <el-cascader
            filterable
            v-model="newsData.queryParams.channel_id"
            :options="channelsList"
            :props="cascaderOption"
            clearable
          />
        </el-form-item>
            <el-form-item>
              <el-button v-points = "1500"
                type="primary"
                size="mini"
                @click="handleReset()"
              >
                重置
              </el-button>
              <el-button v-points = "1500"
                type="primary"
                size="mini"
                @click="handleQuery()"
              >
                搜索
              </el-button>
              <el-button v-points = "1500"
                type="warning"
                size="mini"
                @click="handleImport()"
              >
                导出
              </el-button>
            </el-form-item>
          </el-form>
          <el-table
            ref="multipleTable"
            v-loading="newsData.loading"
            :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
            :data="newsData.tableData"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange($event, 'department')"
          >
            <el-table-column
              label="序号"
              align="center"
              width="80"
              prop="num"
            />
             <el-table-column
              label="稿件标题"
              align="center"
              prop="title"
            />
             <el-table-column
              label="发布栏目"
              align="center"
              prop="num"
            />
            <el-table-column
              label="部门"
               align="center"
               prop="num"
            >
            </el-table-column>
             <el-table-column
              label="编辑"
              align="center"
              prop="num"
            />
            <el-table-column
              label="点击量(真实)"
              align="center"
              prop="num"
            />
             <el-table-column
              label="点击量(美化)"
              align="center"
              prop="num"
            />
             <el-table-column
              label="链接地址"
              align="center"
              prop="num"
            />
            <el-table-column
              label="创建时间"
              align="center"
              prop="real_view"
            />
          </el-table>
    </div>
</template>
<script>
import {
  getDepartmentList,
  } from '@/api/manage'
export default {
    name: 'newsDate',
    data() {
        return{
            newsData: {
                queryParams: {
                beginTime: '',
                departmentId: '',
                editor: '',
                source: '',
                endTime: '',
                Date: ''
                },
            loading: false,
            tableData: [],
            selection: []
          }, // 部门
          departmentList: [],
          channelsList: [],
           cascaderOption: {
            checkStrictly: true, // 是否强制父子不关联
            emitPath: false, // 返回值是否为数组
            value: 'id', // 选项值
            label: 'name', // 显示值
            multiple: true, // 多选
        }, // 级联选择器配置
        }
    },
    created() {
        this.getDepartList()
    },
    methods: {
         /* 修改时间 */
        handleDateChange (val) {
          const arr = val || ['', ''];
          this.newsData.queryParams.beginTime = arr[0];
          this.newsData.queryParams.endTime = arr[1];
        },
        getDepartList(){
            getDepartmentList().then(res => {
            this.departmentList = res;
            })
      },
    }
}
</script>