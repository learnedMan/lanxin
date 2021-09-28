<style type="text/scss" lang="scss" scoped>
.xl-version-history {

}
</style>
<template>
    <div class="xl-version-history">
      <el-table
        ref="multipleTable"
        v-loading="loading"
        :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
        :data="tableData"
        border
        tooltip-effect="dark"
        style="width: 100%"
      >
        <el-table-column prop="created_at" label="日期" align="center"></el-table-column>
        <el-table-column prop="user.name" label="姓名" show-overflow-tooltip align="center"></el-table-column>
        <el-table-column prop="operation" label="操作记录" show-overflow-tooltip align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button v-points = "1500"
              type="primary"
              size="mini"
              @click="handleWatch(scope.row)"
            >
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="queryParams.page"
        :limit.sync="queryParams.pageSize"
        @pagination="getHistory"
      />
      <!-- 详情 -->
      <el-dialog
        width="1200px"
        top="20px"
        :title="dialog.title"
        :visible.sync="dialog.show"
        append-to-body
        v-if="dialog.show"
      >
        <new-detail
          v-if="type === 'news'"
          :id="id"
          :visible.sync="dialog.show"
          :fetch-suggestions="fetchSuggestions"
          :disabled="true"
        />
        <scripts-details
          style="padding: 10px;margin: 0"
          v-if="type === 'script'"
          :id="id"
          :visible.sync="dialog.show"
          :fetch-suggestions="fetchSuggestions"
          :disabled="true"
        ></scripts-details>
      </el-dialog>
    </div>
</template>

<script>
  import { getHistory } from '@/api/content'
  import NewDetail from '@/views/workbench/reviewNews/detail.vue'
  import scriptsDetails from '@/views/content/mediaAssets/add-media/index.vue'

    export default {
      name: 'versionHistory',
      components: {
        NewDetail,
        scriptsDetails
      },
      props: {
        /* 类型 */
        type: {
          type: String,
          default: 'script'
        },
        /* 文稿或新闻id */
        id: {
          type: Number,
          required: true
        }
      },
      data() {
        return {
          tableData: [],
          total: 0,
          loading: false,
          queryParams: {
            page: 1,
            pageSize: 10
          },
          dialog: {
            title: '查看详情',
            show: false,
            id: '',
          },
          fetchSuggestions () {
            return new Promise(res => res())
          }
        }
      },
      methods: {
        getHistory () {
          const { id, type } = this;
          this.loading = true;
          getHistory({
            item_type: type,
            item_id: id,
            ...this.queryParams
          }).then(({ data, total }) => {
            this.tableData = data;
            this.total = total;
          }).finally(() => {
            this.loading = false;
          })
        },
        /* 查看修改详情 */
        handleWatch (row) {
          const { extra } = row;
          this.fetchSuggestions = () => {
            return new Promise(res => {
              res(extra.item);
            })
          }
          this.dialog = {
            title: '查看详情',
            show: true
          }
        }
      },
      created() {
        this.getHistory()
      }
    }
</script>
