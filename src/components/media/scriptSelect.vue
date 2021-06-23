<style type="text/scss" lang="scss" scoped>
  .xl-script-select {
    ul,li {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    &--lists {
      li {
        display: flex;
        align-items: center;
        color: #575757;
        padding-left: 4px;
      }
      p {
        width: 200px;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 30px;
        padding: 0;
        margin: 0 10px 0 0;
      }
      .el-icon-circle-close {
        cursor: pointer;
        color: #ccc;
        transition: all .2s;
        &:hover {
          color: #575757;
        }
      }
    }
  }
</style>
<template>
    <div class="xl-script-select">
      <el-button type="primary" size="small" @click="showDialog">添加新闻</el-button>
      <ul class="xl-script-select--lists">
        <li v-for="(list, index) of chooseList" :key="list.id">
          <p>{{ list.title }}</p>
          <i class="el-icon-circle-close" @click="deleteScript(index)" v-if="!disabled"></i>
        </li>
      </ul>
      <!-- 选择关联新闻 -->
      <el-dialog
        width="1000px"
        top="5vh"
        :title="dialog.title"
        :visible.sync="dialog.show"
      >
        <el-form
          ref="queryForm"
          :model="queryParams"
          :inline="true"
          size="small"
        >
          <el-form-item
            label="新闻标题:"
            prop="keyword"
          >
            <el-input
              v-model="queryParams.keyword"
              placeholder="请输入关键字"
              clearable
              style="width: 200px"
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
          <el-form-item label="创建时间:" prop="dateValue">
            <el-date-picker
              v-model="queryParams.dateValue"
              type="daterange"
              align="right"
              size="small"
              unlink-panels
              range-separator="~"
              value-format="yyyy-MM-dd HH:mm:ss"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
              @change="handleDateChange"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="mini"
              @click="handleReset"
            >
              重置
            </el-button>
            <el-button
              type="primary"
              size="mini"
              @click="handleQuery"
            >
              搜索
            </el-button>
          </el-form-item>
        </el-form>
        <el-table
          ref="multipleTable"
          v-loading="loading"
          :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="55"
          />
          <el-table-column
            label="ID"
            align="center"
            prop="id"
          />
          <el-table-column
            label="新闻标题"
            align="center"
            prop="title"
            :show-overflow-tooltip="true"
          />
          <el-table-column
            label="创建时间"
            align="center"
            prop="created_at"
            :show-overflow-tooltip="true"
          />
        </el-table>
        <pagination
          v-show="total > 0"
          :total="total"
          :page.sync="queryParams.page"
          :limit.sync="queryParams.pageSize"
          @pagination="getList"
        />
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button @click="dialog.show = false">
            取 消
          </el-button>
          <el-button
            type="primary"
            @click="enterDialog"
          >
            确 定
          </el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import { getNews } from '@/api/content'

    export default {
      props: {
        value: {
          type: Array,
          default: () => []
        },
        /* 是否禁用 */
        disabled: {
          type: Boolean,
          default: false
        }
      },
      data() {
        return {
          lists: [], // 现已选中数据
          chooseList: [], // 默认数据
          dialog: {
            title: '选择新闻',
            show: false
          },
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
            dateValue: '',
            startdate: '',
            enddate: '',
            status: 1,
            page: 1,
            pageSize: 10
          },
          total: 0,
          tableData: [],
          loading: false
        }
      },
      watch: {
        value: {
          handler (val) {
            const ids = val.join();
            if(!ids || this.lists.length) return;
            this.initLists(ids);
          },
          immediate: true
        }
      },
      methods: {
        /* 初始化已选列表数据 */
        initLists (ids) {
          getNews({ ids }).then(res => {
            this.lists = res.data.map(n => n);
            this.chooseList = res.data.map(n => n);
          })
        },
        /*
        * 搜索时间变化
        * */
        handleDateChange(val) {
          const arr = val || ['', '']
          this.queryParams.startdate = arr[0]
          this.queryParams.enddate = arr[1]
        },
        /* 重置 */
        handleReset () {
          Object.assign(this.queryParams, {
            startdate: '',
            enddate: '',
            page: 1
          })
          this.resetForm('queryForm')
        },
        /* 搜索新闻 */
        handleQuery () {
          this.getList();
        },
        showDialog () {
          this.dialog.show = true;
          this.getList();
        },
        /*
        * 列表选择框变化
        * */
        handleSelectionChange(arr) {
          const ids = arr.map(n => n.id);
          const value = this.lists.map(n => n.id);
          this.tableData.map(row => {
            // 选中项并且不存在
            if(ids.includes(row.id) && !value.includes(row.id)) {
              this.lists.unshift(row);
            }else if(!ids.includes(row.id) && value.includes(row.id)) {
              // 未选中但是原先选中需删除
              this.lists.splice(this.lists.findIndex(n => n.id === row.id), 1);
            }
          })
        },
        /* 删除某一项 */
        deleteScript (index) {
          this.lists.splice(index, 1);
          this.chooseList = this.lists.map(n => n);
          this.$emit('input', this.lists.map(n => n.id))
        },
        /* 获取新闻列表 */
        getList () {
          this.loading = true;
          this.tableData = [];
          const params = { ...this.queryParams }
          getNews(this.removePropertyOfNull(params)).then(res => {
            /* {
                    title: '', // 稿件标题
                    type: '', // 稿件类型
                    id: '', // 稿件id
                    cover: '', // 图片(Array)
                    author_name: '', // 作者
                    status: '', // 状态
                    created_at: '', // 创建时间
            }*/
            this.tableData = res.data || [];
            this.total = res.total;
            this.setSelectRow(this.tableData);
          }).finally(() => {
            this.loading = false
          })
        },
        /* 设置选中项 */
        setSelectRow (rows) {
          if(rows) {
            this.$nextTick(() => {
              rows.filter(row => this.value.includes(row.id)).map(row => {
                this.$refs.multipleTable.toggleRowSelection(row, true);
              })
            })
          }
        },
        /* 确认选中 */
        enterDialog () {
          this.chooseList = this.lists.map(n => n);
          this.$emit('input', this.lists.map(n => n.id))
          this.dialog.show = false;
        },
      }
    }
</script>
