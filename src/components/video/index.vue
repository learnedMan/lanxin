<style type="text/scss" lang="scss">
.xl-video {
  &-tab {
    display: flex;
    &--content {
      flex: 1;
    }
  }
}
</style>
<template>
    <div class="xl-video">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="vms视频库" name="0" class="xl-video-tab">
          <xl-menu :menus="vmsChannel" :active-menu="vmsDefaultActive"></xl-menu>
          <div class="xl-video-tab--content">
            <el-form
              :model="vmsParams"
              :inline="true"
            >
              <el-form-item
                label="稿件名称:"
                prop="keyword"
              >
                <el-input
                  v-model="vmsParams.keyword"
                  placeholder="请输入关键字"
                  clearable
                  size="small"
                  style="width: 200px"
                  @keyup.enter.native="handleQuery('vms')"
                />
              </el-form-item>
              <el-form-item>
                <el-date-picker
                  v-model="dateValue"
                  type="daterange"
                  align="right"
                  size="small"
                  unlink-panels
                  range-separator="~"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions"
                  @change="handleDateChange($event, 'vms')"
                />
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  size="mini"
                  @click="handleQuery('vms')"
                >
                  搜索
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="蓝云视频库" name="1">
          <xl-menu :menus="xlChannel" :active-menu="xlDefaultActive"></xl-menu>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import { getVideoChannel } from '@/api/content.js'
  import xlMenu from './menu'

    export default {
      components: {
        xlMenu
      },
      data() {
        return {
          activeName: '0',
          vmsChannel: [], // vms栏目
          vmsDefaultActive: '', // 默认激活
          xlChannel: [], // 新蓝云栏目
          xlDefaultActive: '', // 默认激活
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
          vmsParams: {
            keyword: '', // 关键词
            startdate: '', // 开始时间
            enddate: '', // 结束时间
            dateValue: '', // 时间
            cloud: 0, // vms标识符
            vms_channel_id: '', // 栏目id
          }, // 搜索条件
          xlParams: {
            keyword: '', // 关键词
            startdate: '', // 开始时间
            enddate: '', // 结束时间
            dateValue: '', // 时间
            cloud: 1, // vms标识符
            vms_channel_id: '', // 栏目id
          }
        }
      },
      computed: {
        /* 站点id */
        site_id() {
          return this.$store.state.u_info.site_id
        }
      },
      methods: {
        /* 设置默认激活项 */
        getDefaultActive (data) {
          if(!data) return '';
          if(!data.children) return data.id + '';
          return this.getDefaultActive(data.children[0]);
        },
        /* 时间变化 */
        handleDateChange () {

        },
        /* 获取视频列表数据 */
        menuChange () {

        },
        /* 视频库切换 */
        handleClick (tag) {
          this.getVideoChannel(tag.name);
        },
        /* 获取栏目 */
        getVideoChannel (code = 0) {
          getVideoChannel({
            cloud: code
          }).then(res => {
            if(code) {
              this.xlChannel = res;
              this.xlDefaultActive = this.getDefaultActive(res[0]);
            } else {
              this.vmsChannel = res;
              this.vmsDefaultActive = this.getDefaultActive(res[0]);
            }
          })
        },
        /* 获取视频列表 */
        getVideoList (identifier) {
          let params;
          params = { ...this[identifier] };
          delete params.dateValue;
          params.site_id = this.site_id;

        }
      },
      created() {
        this.getVideoChannel();
      }
    }
</script>
