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
                v-model="newsData.queryParams.departmentList"
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
        <!-- <el-form-item label="来源：">
          <el-input
            v-model="newsData.queryParams.source"
            placeholder="请输入编辑名称"
            clearable
          />
        </el-form-item> -->
        <el-form-item
          label="发布栏目"
          prop="channel_id"
        >
          <el-cascader
            filterable
            v-model="newsData.queryParams.channelList"
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
           <pagination
            v-show="total>0"
            :total="total"
            :page.sync="newsData.queryParams.page"
            :limit.sync="newsData.queryParams.pageSize"
            @pagination="getNewsList"
          />
    </div>
</template>
<script>
import { getDepartmentList,getChannels } from '@/api/manage'
import { listnewsNum } from '@/api/statistics'
export default {
    name: 'newsDate',
    data() {
        return{
            newsData: {
                queryParams: {
                beginTime: '',
                departmentId: '',
                editor: '',
                channelList: [],
                departmentList: [],
                authorlList: [],
                // source: '',
                endTime: '',
                page: 1,
                pageSize: 10,
                Date: ''
                },
            loading: false,
            tableData: [],
            selection: []
          }, // 部门
          total: 0,
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
        this.getChannelsList()
        this.getNewsList()
    },
     computed: {
        site ({ $store: { state: { user: { u_info } } } }) {
          const data = u_info?.site?.extra?.bigdata_settings || {};
          return {
            productId: data.product_id || '',
            customerId: data.customer_id || ''
          }
        }
      },
    methods: {
         /* 修改时间 */
        handleDateChange (val) {
          const arr = val || ['', ''];
          this.newsData.queryParams.beginTime = arr[0];
          this.newsData.queryParams.endTime = arr[1];
        },
        /*获取部门数据*/ 
        getDepartList(){
            getDepartmentList().then(res => {
            this.departmentList = res;
            })
        },
      /*获取栏目数据*/ 
      getChannelsList() {
        getChannels({
          with_special_channels: 'topic'
        }).then(res => {
          let arr = ['product','topic','broadcast','radio_replay','radio_channel','radio_live','tv_channel','tv_replay','tv_live']
          this.channelsList = res.map(n => ({
            ...n,
          disabled: arr.includes(n.type),
          }))
        })
      },
      /*获取稿件列表*/ 
      getNewsList() {
         this.newsData.loading = false;
        const params = {
            ...this.newsData.queryParams,
            customerId: this.site.customerId,
            productId: this.site.productId,
          };
         listnewsNum(this.removePropertyOfNullFor0(params)).then(res => {
            this.newsData.loading = false;
            this.newsData.tableData = res.data;
          })
      },
    }
}
</script>
<style lang="scss" scoped>
.newsData{
  .el-cascader-menu__wrap {
      height: 554px!important;
  }
}
</style>