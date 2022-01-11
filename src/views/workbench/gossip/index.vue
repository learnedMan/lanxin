<style type="text/scss" lang="scss" scoped>
  .xl-gossip {
    padding: 30px;
    &-file {
      display: inline-block;
      width: 300px;
      height: 200px;
      margin-right: 10px;
      background-color: #409eff;
    }
  }
</style>
<template>
    <div class="xl-gossip">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
        size="small"
      >
        <!-- <el-form-item
          label="所属产品:"
        >
          <el-select
            v-model="queryParams.sourceId"
            placeholder="请选择所属产品"
          >
            <el-option
              v-for="item in productLists"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item> -->
        <el-form-item label="所属产品：">
        <el-select v-model="product_id" placeholder="请选择所属产品">
          <el-option v-for="item in productList" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
        <el-form-item
          label="爆料标题:"
          prop="title"
        >
          <el-input
            v-model="queryParams.title"
            placeholder="请输入关键字"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item
          label="状态:"
          prop="status"
        >
          <el-select
            v-model="queryParams.status"
            placeholder="请选择状态"
            clearable
          >
            <el-option
              v-for="item in statusLists"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="爆料人:"
          prop="userName"
        >
          <el-input
            v-model.number="queryParams.userName"
            placeholder="请输入姓名"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="提交时间:" prop="submitTime">
          <el-date-picker
            v-model="queryParams.submitTime"
            type="daterange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            :default-time="['00:00:00', '23:59:59']"
            @change="handleDateChange($event, 'submitTime')"
          />
        </el-form-item>
        <el-form-item label="审核时间:" prop="auditTime">
          <el-date-picker
            v-model="queryParams.auditTime"
            type="daterange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            :default-time="['00:00:00', '23:59:59']"
            @change="handleDateChange($event, 'auditTime')"
          />
        </el-form-item>
        <el-form-item>
          <el-button v-points = "1500"
            type="primary"
            size="mini"
            @click="handleReset"
          >
            重置
          </el-button>
          <el-button v-points = "1500"
            type="primary"
            size="mini"
            @click="handleQuery"
          >
            搜索
          </el-button>
          <el-button v-points = "1500"
            size="mini"
            type="success"
            @click="batchAgreeOrRefused(1)"
            :disabled="disabledBatchAction"
          >批量通过</el-button>
          <el-button v-points = "1500"
            size="mini"
            type="warning"
            @click="batchAgreeOrRefused(3)"
            :disabled="disabledBatchAction"
          >批量拒绝</el-button>
        </el-form-item>
      </el-form>
      <el-table
        ref="multipleTable"
        :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
        :data="tableData"
        border
        tooltip-effect="dark"
        style="width: 100%"
        v-loading="loading"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          label="新闻ID"
          align="center"
          prop="id"
        />
        <el-table-column
          label="爆料标题"
          align="center"
          prop="title"
          showOverflowTooltip
        />
        <el-table-column
          label="状态"
          align="center"
          prop="statusLabel"
        />
        <el-table-column
          label="爆料人"
          align="center"
          prop="userName"
        />
        <el-table-column
          label="审核时间"
          align="center"
          prop="auditAt"
        />
        <el-table-column
          label="提交时间"
          align="center"
          prop="createdAt"
        />
        <el-table-column label="操作" align="center" width="280">
          <template slot-scope="scope">
            <div class="verify-table-action">
              <!-- 查看 -->
              <Iconbutton
                icontype="ckxq"
                label="详情"
                @fatherMethod="watchDetail(scope.row)"
              ></Iconbutton>
              <!-- 通过 -->
              <Iconbutton
                v-if="scope.row.status != 1"
                icontype="shtg"
                label="通过"
                @fatherMethod="handleAgreeOrRefused(scope.row, 1)"
              ></Iconbutton>
              <!-- 拒绝 -->
              <Iconbutton
                v-if="scope.row.status != 3"
                icontype="shjj"
                label="拒绝"
                @fatherMethod="handleAgreeOrRefused(scope.row, 3)"
              ></Iconbutton>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="queryParams.page"
        :limit.sync="queryParams.limit"
        @pagination="getList"
      />
      <!-- 详情 -->
      <el-dialog
        width="600px"
        title="详情"
        :visible.sync="dialog.show"
      >
        <el-form size="small" label-width="120px">
          <el-form-item label="爆料人:">{{ detail.userName }}</el-form-item>
          <el-form-item label="爆料账号:">{{ detail.userId }}</el-form-item>
          <el-form-item label="爆料时间:">{{ detail.createdAt }}</el-form-item>
          <el-form-item label="爆料标题:">{{ detail.title }}</el-form-item>
          <el-form-item label="状态:">{{ detail.statusLabel }}</el-form-item>
          <el-form-item label="爆料内容:">{{ detail.content }}</el-form-item>
          <el-form-item label="图片/视频:">
            <span class="xl-gossip-file" v-for="list of detail.files">
              <el-image
                lazy
                v-if="list.type === 2"
                style="width: 100%; height: 100%"
                :src="list.path"
                fit="cover"
                :preview-src-list="imgLists"
              ></el-image>
              <video controls preload="metadata" style="width: 100%;height: 100%" v-else>
                <source :src="list.path">
                您的浏览器不支持 HTML5 video 标签。
              </video>
            </span>
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button v-points = "1500" @click="dialog.show = false">
            关 闭
          </el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import { getGossipLists, changeGossipStatus, batchChangeGossipStatus, getGossipDetail } from '@/api/workbench.js'
  import { getproduct } from '@/api/manage'

    export default {
      data() {
        return {
          productList: [],
          statusLists: [
            {
              label: '全部',
              value: ''
            },
            {
              label: '已审核',
              value: 1
            },
            {
              label: '待审核',
              value: 2
            },
            {
              label: '已拒绝',
              value: 3
            }
          ],
          pickerOptions: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                picker.$emit('pick', [start, end])
              }
            }, {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                picker.$emit('pick', [start, end])
              }
            }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                picker.$emit('pick', [start, end])
              }
            }]
          },
          queryParams: {
            sourceId: '',
            type: '',
            status: '',
            title: '',
            type: 0,
            userName: '',
            startCreateAt: '',
            endCreateAt: '',
            submitTime: '',
            startAuditAt: '',
            endAuditAt: '',
            auditTime: '',
            page: 1,
            limit: 10
          },
          product_id: 0,
          dialog: {
            show: false
          },
          detail: {
            title: '',
            content: '',
            userName: '',
            statusLabel: '',
            files: []
          },
          loading: false,
          total: 0,
          tableData: [],
          selection: [], // 选中项
        }
      },
      computed: {
        disabledBatchAction () {
          return this.selection.length === 0;
        },
        /* 详情图片集合 */
        imgLists () {
          return this.detail.files.filter(n => n.type === 2).map(n => n.path);
        }
      },
       watch:{
        product_id(val){
          this.queryParams.sourceId = this.productList.filter(item=>item.id==val)[0].source_id||0;
          this.getList();
        },
      },
      methods: {
        /* 获取产品列表 */
        getProductList () {
          // return getproduct({}).then(res => {
          //   const data = res.data || []
          //   this.productLists = data.map(n => ({
          //     label: n.name,
          //     value: n.source_id
          //   }));
          //   this.queryParams.sourceId = data?.[0]?.source_id;
          // });
           getproduct({}).then((response) => {
            this.productList = response.data;
            this.product_id = this.productList[0].id;
          });
        },
        /* 修改时间 */
        handleDateChange (val, key) {
          const arr = val || ['', ''];
          if(key === 'submitTime') {
            this.queryParams.startCreateAt = arr[0];
            this.queryParams.endCreateAt = arr[1];
          }else {
            this.queryParams.startAuditAt = arr[0];
            this.queryParams.endAuditAt = arr[1];
          }
        },
        /* 重置 */
        handleReset () {
          Object.assign(this.queryParams, {
            startCreateAt: '',
            endCreateAt: '',
            startAuditAt: '',
            endAuditAt: '',
            page: 1
          })
          this.resetForm('queryForm');
        },
        /* 搜索 */
        handleQuery () {
          this.queryParams.page = 1;
          this.getList();
        },
        /* 查看爆料详情 */
        watchDetail (row) {
          const { id, statusLabel } = row;
          getGossipDetail({ id }).then(res => {
            if(res.code == 200) {
              this.detail = {
                ...(res.data || {}),
                statusLabel,
                files: (res.data?.files || []).filter(n => n.type !== 0)
              };
              this.dialog.show = true;
            }
          })
        },
        /* 批量通过或拒绝 */
        batchAgreeOrRefused (status) {
          batchChangeGossipStatus({
            ids: [...this.selection],
            status
          }).then(res => {
            if(res.code == 200) {
              this.$message.success(res.msg);
              this.getList();
            }
          })
        },
        /* 通过或拒绝 */
        handleAgreeOrRefused (row, status) {
          const { id } = row;
          changeGossipStatus({
            id,
            status
          }).then(res => {
            if(res.code == 200) {
              this.$message.success(res.msg);
              this.getList();
            }
          })
        },
        /* 修改选中项 */
        handleSelectionChange (arr) {
          this.selection = arr.map(n => n.id);
        },
        /* 获取列表数据 */
        getList () {
          this.loading = true;
          const params = { ...this.queryParams };
          delete params.submitTime, delete params.auditTime;
          getGossipLists(this.removePropertyOfNullFor0(params)).then(res => {
            if(res.code == 200) {
              const data = res.data;
              this.selection = [];
              this.tableData = (data.list || []).map(n => ({
                ...n,
                statusLabel: this.statusLists.find(list => list.value === n.status)?.label
              }));
              this.total = data.totalCount;
            }
          }).finally(() => {
            this.loading = false;
          })
        }
      },
      async created() {
        await this.getProductList();
        // this.getList();
      }
    }
</script>
