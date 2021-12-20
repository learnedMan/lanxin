<template>
    <div class="newsData">
        <el-form
            ref="department"
            :model="newsData.queryParams"
            :inline="true"
          >
            <el-form-item label="发布时间:" prop="Date">
              <el-date-picker
                v-model="dateValue"
                type="daterange"
                align="right"
                size="small"
                unlink-panels
                range-separator="~"
                value-format="yyyy-MM-dd"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
                @change="handleDateChange($event)"
              />
            </el-form-item>
             <el-form-item  label="部门:" prop="departmentList">
                <el-cascader
                :show-all-levels = false
                 style="width: 250px"
                v-model="newsData.queryParams.departmentList"
                :options="departmentList"
                collapse-tags
                :props="{ emitPath:false,checkStrictly: true ,value:'id',label:'name',multiple: true}"
                clearable></el-cascader>
          </el-form-item>
          <el-form-item label="编辑：" prop="authorList">
            <el-cascader
                :show-all-levels = false
                 style="width: 250px"
                v-model="newsData.queryParams.authorList"
                :options="authorList"
                collapse-tags
                filterable
                :props="{ emitPath:false,checkStrictly: true ,value:'id',label:'name',multiple: true}"
                clearable></el-cascader>
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
            style="width: 250px"
            v-model="newsData.queryParams.channelList"
            :options="channelsList"
            :props="cascaderOption"
            collapse-tags
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
              type="index"
              min-width="5%"
            />
             <el-table-column
              label="稿件标题"
              align="center"
              prop="title"
              show-overflow-tooltip
              min-width="30%"
            >
             <template slot-scope="scope">
               <div class="watch-detail-btn">{{ scope.row.title }}</div>
            </template>
             </el-table-column>
             <el-table-column
              label="发布栏目"
              align="center"
              prop="channelName"
              show-overflow-tooltip
              min-width="8%"
            />
            <el-table-column
              label="部门"
               align="center"
               prop="departmentName"
               min-width="8%"
            >
            </el-table-column>
             <el-table-column
              label="编辑"
              align="center"
              prop="auhtorName"
              min-width="8%"
            />
            <el-table-column
              label="点击量(真实)"
              align="center"
              prop="real_view"
              min-width="5%"
            />
             <!-- <el-table-column
              label="点击量(美化)"
              align="center"
              prop="num"
            /> -->
             <el-table-column
              label="链接地址"
              align="center"
              prop="extra.url"
              show-overflow-tooltip
              min-width="15%"
            />
            <el-table-column
              label="创建时间"
              align="center"
              prop="created_at"
              min-width="8%"
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
import { getDepartmentList,getChannels,getUser } from '@/api/manage'
import { listnewsNum,fileImportNews } from '@/api/statistics'
export default {
    name: 'newsDate',
    props: {
      channelsList: {
         type: Array,
         default: ()=> []
      },
      departmentList: {
        type: Array,
        default: ()=> []
      },
      authorList: {
        type: Array,
        default: ()=> []
      }
    },
    data() {
        return{
            newsData: {
                queryParams: {
                beginTime: '',
                editor: '',
                channelList: [],
                departmentList: [],
                authorList: [],
                // source: '',
                endTime: '',
                page: 1,
                pageSize: 10,
                },
            loading: false,
            tableData: [],
            selection: []
          }, // 部门
          total: 0,
          dateValue:[],
          // departmentList: [],
          // channelsList: [],
          // authorList: [],
          cascaderOption: {
            checkStrictly: false, // 是否强制父子不关联
            emitPath: false, // 返回值是否为数组
            value: 'id', // 选项值
            label: 'name', // 显示值
            multiple: true, // 多选
          }, // 级联选择器配置
          pickerOptions: {
            onPick: obj => {
              this.pickerMinDate = new Date(obj.minDate).getTime();
            },
            disabledDate: time => {
              if (this.pickerMinDate) {
                const day1 = 366 * 24 * 3600 * 1000;
                let maxTime = this.pickerMinDate + day1;
                let minTime = this.pickerMinDate - day1;
                return time.getTime() > maxTime || time.getTime() < minTime;
              }
            }
          }
        }
    },
    created() {
        this.dateValue =  this.timeDefault;
        this.newsData.queryParams.beginTime = this.dateValue[0];
        this.newsData.queryParams.endTime = this.dateValue[1];
        // this.getDepartList()
        // this.getChannelsList()
        this.getNewsList()
        // this.getUersList()
    },
     computed: {
        site ({ $store: { state: { user: { u_info } } } }) {
          const data = u_info?.site?.extra?.bigdata_settings || {};
          return {
            productId: data.product_id || '',
            customerId: data.customer_id || ''
          }
        },
         // 默认时间
        timeDefault () {
          let date = new Date()
          // 通过时间戳计算
          let defalutStartTime = date.getTime() - 30 * 24 * 3600 * 1000 // 转化为时间戳
          let defalutEndTime = date.getTime()
          let startDateNs = new Date(defalutStartTime)
          let endDateNs = new Date(defalutEndTime)
          // 月，日 不够10补0
          defalutStartTime = startDateNs.getFullYear() + '-' + ((startDateNs.getMonth() + 1) >= 10 ? (startDateNs.getMonth() + 1) : '0' + (startDateNs.getMonth() + 1)) + '-' + (startDateNs.getDate() >= 10 ? startDateNs.getDate() : '0' + startDateNs.getDate())
          defalutEndTime = endDateNs.getFullYear() + '-' + ((endDateNs.getMonth() + 1) >= 10 ? (endDateNs.getMonth() + 1) : '0' + (endDateNs.getMonth() + 1)) + '-' + (endDateNs.getDate() >= 10 ? endDateNs.getDate() : '0' + endDateNs.getDate())
          return [defalutStartTime, defalutEndTime]
        }
      },
    methods: {
         /* 修改时间 */
        handleDateChange (val) {
          const arr = val || ['', ''];
          this.newsData.queryParams.beginTime = arr[0];
          this.newsData.queryParams.endTime = arr[1];
        },
         /* 重置 */
      handleReset() {
        this.dateValue=this.timeDefault;
        this.newsData.queryParams.beginTime = this.dateValue[0];
        this.newsData.queryParams.endTime = this.dateValue[1];

        this.newsData.queryParams.channelList = [];
        this.newsData.queryParams.departmentList = [];
        this.newsData.queryParams.authorList = [];
        // this.resetForm('queryForm')
      },
       /* 搜索 */
      handleQuery() {
        this.getNewsList()
      },
       /* 导出 */
        handleImport () {
          let data = {
            ...this.newsData.queryParams,
            customerId: this.site.customerId,
            productId: this.site.productId,
          }
          fileImportNews('/api/statistics/kpi/exportNews',this.removePropertyOfNullFor0(data))
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
            this.total = res.total
          })
      },
    }
}
</script>
<style lang="scss">
.newsData{
  .el-cascader-menu__wrap {
      height: 554px!important;
  }
}

// .newsData .el-cascader__tags {
//   max-height: 100px !important;
//   overflow: auto !important; // 勾选的tags出现滚动条显示
// }
// .newsData .el-cascader .el-input {
//   height: 72px !important;
// }
</style>