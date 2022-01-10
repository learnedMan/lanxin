<template>
    <div class="ablum">
        <el-dialog
          width="900px"
          top="20px"
          title="从图库中选择"
          :visible.sync="dialogShow"
          :close-on-click-modal="false"
          :before-close="handleClose"
          append-to-body
        >
        <div>
            <el-form
            ref="queryForm"
            :model="queryParams"
            :inline="true"
            >
            <el-form-item label="上传日期:">
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
                @change="handleDateChange"
                />
            </el-form-item>
            <el-form-item>
                <el-input
                v-model="queryParams.keyword"
                placeholder="请输入关键字"
                clearable
                size="small"
                style="width: 200px"
                @keyup.enter.native="getList"
                />
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="isMy" size="small">只看我传的</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button v-points = "1500"
                type="primary"
                size="mini"
                @click="getList"
                >
                搜索
                </el-button>
            </el-form-item>
            </el-form>
        </div>
        <div class="xl-editor-images">
            <el-checkbox-group v-model="checkedList">
            <ul>
                <li v-for="(list, index) of imgLists" :key="index">
                <div class="xl-editor-images-checked">
                    <el-checkbox :label="list.url">{{ '' }}</el-checkbox>
                </div>
                <el-image
                    lazy
                    class="xl-editor-images-style"
                    fit="contain"
                    :src="list.url"
                />
                <div class="xl-editor-images-info">{{ list.width }}*{{ list.height }}</div>
                <div class="xl-editor-images-name">{{ list.description }}</div>
                </li>
            </ul>
            </el-checkbox-group>
        </div>
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
            <el-button v-points = "1500" @click="dialogControl('cancel')">
            取 消
            </el-button>
            <el-button v-points = "1500"
            type="primary"
            @click="dialogControl('confirm')"
            >
            确 定
            </el-button>
        </div>
        </el-dialog>
    </div>
</template>
<script>
import { getEditImgLists } from '@/api/content'
export default {
    props: {
        dialogShow: {
          type: Boolean,
          default: false
      },
    },
    data() {
        return{
          queryParams: {
            pageSize: 10,
            page: 1,
            // type: 'image',
            keyword: '',
            startdate: '',
            enddate: ''
          },
          isMy: false, // 是否为自己传的
          total: 0,
          imgLists: [],
          checkedList: [],
          dateValue: '',
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
        }
    },
    watch: {
        dialogShow() {
            this.getList()
        }
    },
    created() {
        this.getList()
    },
    methods: {
       /* 获取图库数据 */
        getList() {
          const query = { ...this.queryParams }
          getEditImgLists(this.removePropertyOfNull(query), this.isMy).then(res => {
            this.imgLists = res.data
            this.total = res.total
          })
        },
        handleDateChange(val) {
          const arr = val || ['', '']
          this.queryParams.startdate = arr[0]
          this.queryParams.enddate = arr[1]
        },
        dialogControl(status) {
          const arr = this.checkedList
          this.$emit('ablumCancel')
          this.checkedList = []
          if (status === 'confirm' && arr.length) {
            this.$emit('ablumConfirm',arr)
          }
      },
      handleClose() {
          this.$emit('ablumCancel')
      },
    }
}
</script>