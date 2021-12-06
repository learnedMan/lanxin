<style type="text/scss" lang="scss">
.xl-video {
  &-tab {
    display: flex;
    &--content {
      flex: 1;
      &-ul, &-li {
        padding: 0;
        margin: 0;
        list-style: none;
      }
      &-li {
        display: inline-block;
        width: 300px;
        margin-bottom: 10px;
        margin-right: 30px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        h4 {
          margin: 0;
          padding-left: 4px;
          line-height: 30px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        video {
          object-fit: fill;
          width: 100%;
        }
        .bottom {
          text-align: right;
          padding: 4px 4px;
        }
      }
    }
  }
}
</style>
<template>
    <div class="xl-video">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="vms视频库" name="0" class="xl-video-tab">
          <xl-menu :menus="vmsChannel" :active-menu="vmsParams.defaultActive" v-if="showVmsChannel" @select="menuChange($event, 'vmsParams')"></xl-menu>
          <div class="xl-video-tab--content">
            <el-form
              :model="vmsParams"
              :inline="true"
            >
              <el-form-item prop="keyword">
                <el-input
                  v-model="vmsParams.keyword"
                  placeholder="请输入关键字"
                  clearable
                  size="small"
                  style="width: 200px"
                  @keyup.enter.native="getVideoList('vmsParams')"
                />
              </el-form-item>
              <el-form-item>
                <el-date-picker
                  v-model="vmsParams.dateValue"
                  type="daterange"
                  align="right"
                  size="small"
                  unlink-panels
                  range-separator="~"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions"
                  @change="handleDateChange($event, 'vmsParams')"
                />
              </el-form-item>
              <el-form-item>
                <el-button v-points = "1500"
                  type="primary"
                  size="mini"
                  @click="getVideoList('vmsParams')"
                >
                  搜索
                </el-button>
              </el-form-item>
            </el-form>
            <ul class="xl-video-tab--content-ul">
              <li v-for="(list, index) of vmsVideo" :key="index" class="xl-video-tab--content-li">
                <h4>{{ list.title }}</h4>
                <video height="200" controls preload="metadata" :poster="list.cover" style="object-fit: cover;">
                  <source :src="list.customObj.url" :type="`video/${list.customObj.type}`">
                  您的浏览器不支持 HTML5 video 标签。
                </video>
                <div class="bottom">
                  <el-button v-points = "1500" type="primary" size="mini" style="margin-right: 10px" @click="handleChoose(list)">选择</el-button>
                  <el-dropdown size="mini" @command="changeVideo($event, list)">
                    <el-button v-points = "1500" type="primary" size="mini">
                      {{ list.customObj.label }}<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown" style="width: 60px;text-align: center">
                      <el-dropdown-item
                        v-for="(item, k) of list.customObj.arr"
                        :key="k"
                        :command="item"
                      >{{ item.label }}</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </li>
            </ul>
            <pagination
              v-show="vmsParams.total > 0"
              :total="vmsParams.total"
              :page.sync="vmsParams.page"
              :limit.sync="vmsParams.pageSize"
              @pagination="getVideoList('vmsParams')"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="蓝云视频库" name="1" class="xl-video-tab">
          <xl-menuL :menus="xlChannel" :active-menu="xlParams.defaultActive" v-if="showXlChannel" @select="menuChange($event, 'xlParams')"></xl-menuL>
          <div class="xl-video-tab--content">
            <el-form
              :model="xlParams"
              :inline="true"
            >
              <el-form-item prop="keyword">
                <el-input
                  v-model="xlParams.keyword"
                  placeholder="请输入关键字"
                  clearable
                  size="small"
                  style="width: 200px"
                  @keyup.enter.native="getVideoList('xlParams')"
                />
              </el-form-item>
              <el-form-item>
                <el-date-picker
                  v-model="xlParams.dateValue"
                  type="daterange"
                  align="right"
                  size="small"
                  unlink-panels
                  range-separator="~"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions"
                  @change="handleDateChange($event, 'xlParams')"
                />
              </el-form-item>
              <el-form-item>
                <el-button v-points = "1500"
                  type="primary"
                  size="mini"
                  @click="getVideoList('xlParams')"
                >
                  搜索
                </el-button>
              </el-form-item>
            </el-form>
            <ul class="xl-video-tab--content-ul">
              <li v-for="(list, index) of xlVideo" :key="index" class="xl-video-tab--content-li">
                <h4>{{ list.title }}</h4>
                <video height="200" controls preload="metadata" :poster="list.cover" style="object-fit: cover;">
                  <source :src="list.customObj.url" :type="`video/${list.customObj.type}`">
                  您的浏览器不支持 HTML5 video 标签。
                </video>
                <div class="bottom">
                  <el-button v-points = "1500" type="primary" size="mini" style="margin-right: 10px" @click="handleChoose(list)">选择</el-button>
                  <el-dropdown size="mini" @command="changeVideo($event, list)">
                    <el-button v-points = "1500" type="primary" size="mini">
                      {{ list.customObj.label }}<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown" style="width: 60px;text-align: center">
                      <el-dropdown-item
                        v-for="(item, k) of list.customObj.arr"
                        :key="k"
                        :command="item"
                      >{{ item.label }}</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </li>
            </ul>
            <pagination
              v-show="xlParams.total > 0"
              :total="xlParams.total"
              :page.sync="xlParams.page"
              :limit.sync="xlParams.pageSize"
              @pagination="getVideoList('xlParams')"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import { getVideoChannel, getVideos } from '@/api/content.js'
  import xlMenu from './menu'
  import xlMenuL from './menuL'
    export default {
      components: {
        xlMenu,xlMenuL
      },
      data() {
        return {
          activeName: '0',
          vmsChannel: [], // vms栏目
          vmsVideo: [], // vms视频列表
          xlChannel: [], // 新蓝云栏目
          xlVideo: [], // 新蓝视频列表
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
            defaultActive: '', // 默认激活
            page: 1,
            pageSize: 10,
            total: 0, // 视频总数
          }, // 搜索条件
          xlParams: {
            keyword: '', // 关键词
            startdate: '', // 开始时间
            enddate: '', // 结束时间
            dateValue: '', // 时间
            cloud: 1, // vms标识符
            vms_channel_id: '', // 栏目id
            defaultActive: '', // 默认激活
            page: 1,
            pageSize: 10,
            total: 0, // 视频总数
          }
        }
      },
      computed: {
        /* 站点id */
        site_id() {
          return this.$store.state.user.u_info.site_id
        },
        /* 是否显示vms栏目 */
        showVmsChannel () {
          return this.vmsChannel.length !== 0
        },
        /* 是否显示xl栏目 */
        showXlChannel () {
          return this.xlChannel.length !== 0
        }
      },
      methods: {
        /* 设置默认激活项 */
        getDefaultActive (data) {
          if(!data) return '';
          if(!data.children) return data.id + '';
          return this.getDefaultActive(data.children[0]);
        },
        /* 设置默认激活项 蓝云视频*/
        getDefaultActiveL (data) {
          if(!data) return '';
          if(!data.children) return data.code + '';
          return this.getDefaultActiveL(data.children[0]);
        },
        /* 时间变化 */
        handleDateChange (val, identifier) {
          const arr = val || ['', ''];
          this[identifier].startdate = arr[0];
          this[identifier].enddate = arr[1];
        },
        /* 获取视频列表数据 */
        menuChange (val, status) {
          this.vmsVideo = [];
          this.xlVideo = [];
          this[status].vms_channel_id = val;
          this.getVideoList(status);
        },
        /* 视频库切换 */
        handleClick (tag) {
          this.getVideoChannel(tag.name);
        },
        /* 修改视频清晰度 */
        changeVideo (item, target) {
          Object.assign(target.customObj, {
            label: item.label,
            url: item.path
          })
        },
        /* 确认视频 */
        handleChoose (list) {
          const obj = { ...list };
          const url = {
            url: obj.customObj.url,
            type: obj.customObj.type,
            cover: obj.cover,
            title: obj.title
          };
          delete obj.customObj;
          this.$emit('choose', obj);
          this.$emit('choose-url', url);
        },
        /* 获取栏目 */
        getVideoChannel (code = 0) {
          getVideoChannel({
            cloud: code
          }).then(res => {
            if(code) {
              this.xlChannel = res;
              this.xlParams.defaultActive = this.getDefaultActiveL(res[0]);
              this.xlParams.vms_channel_id = this.getDefaultActiveL(res[0])
            } else {
              this.vmsChannel = res;
              this.vmsParams.defaultActive = this.getDefaultActive(res[0]);
              this.vmsParams.vms_channel_id = this.getDefaultActive(res[0])
            }
            this.getVideoList(code? 'xlParams' : 'vmsParams');
          })
        },
        /* 获取视频列表 */
        getVideoList (identifier) {
          let params;
          params = { ...this[identifier] };
          delete params.dateValue, delete params.total, delete params.defaultActive;
          params.site_id = this.site_id;
          const rateMap = ['超清', '高清', '普清', '模糊'];
          getVideos(params).then(res => {
            const arr = res.data.map(n => {
              const arr = n.item_list.sort((a, b) => b.rate - a.rate).map((item, index) => ({ ...item, label: rateMap[index] }));
              return {
                ...n,
                customObj: {
                  cover: n.cover,
                  url: arr[0]?.path,
                  type: arr[0]?.format,
                  label: '超清',
                  arr
                }
              }
            });
            const total = res.total;
            if(identifier === 'vmsParams') {
              this.vmsVideo = [...arr];
            }else {
              this.xlVideo = arr;
            }
            this[identifier].total = total;
          })
        }
      },
      created() {
        this.getVideoChannel();
      }
    }
</script>
