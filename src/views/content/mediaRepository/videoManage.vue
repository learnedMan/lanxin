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
        <el-tab-pane label="蓝云视频库" name="1" class="xl-video-tab">
          <xl-menuL :menus="xlChannel" :active-menu="xlParams.defaultActive" v-if="showXlChannel" @select="menuChange($event, 'xlParams')"></xl-menuL>
          <div class="xl-video-tab--content">
            <el-form
              :model="xlParams"
              :inline="true"
            >
              <el-form-item label="视频名称:" prop="keyword">
                <el-input
                  v-model="xlParams.keyword"
                  placeholder="请输入关键字"
                  clearable
                  size="small"
                  style="width: 200px"
                  @keyup.enter.native="getVideoList('xlParams')"
                />
              </el-form-item>
              <el-form-item  label="类型:" prop="type">
                <el-select
                v-model="xlParams.type"
                size="small"
                placeholder="请选择类型"
                clearable
              >
                <el-option
                  v-for="item in typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              </el-form-item>
              <el-form-item label="同步时间:">
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
                <el-button v-points = "1500" type="primary" @click="rest('xlParams')" size="mini" >重置</el-button>
                <el-button v-points = "1500"
                  type="primary"
                  size="mini"
                  @click="getVideoList('xlParams')"
                >
                  搜索
                </el-button>
              </el-form-item>
            </el-form>
            <div class="xl-video-tab--content-ul" style="width: 98%">
              <el-table
                    :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
                    border
                    v-loading="loading"
                    :data="xlVideo"
                  >
                <el-table-column label="ID" width="60px" align="center" prop="id" />
                <el-table-column
                  label="视频封面"
                  width="100px"
                  align="center"
                  prop="cover"
                  :show-overflow-tooltip="true"
                >
                  <template slot-scope="scope">
                    <img
                      :src="scope.row.cover"
                      alt=""
                      style="width: 50px; height: 50px;"
                    />
                  </template>
                </el-table-column>

                <el-table-column
                  label="视频名称"
                  align="center"
                  prop="title"
                  :show-overflow-tooltip="true"
                />
                <el-table-column
                  label="时长"
                  align="center"
                  prop="duration"
                >
                 <template slot-scope="scope">
                   <span>{{getTime(scope.row.duration)}}</span>
                 </template>
                </el-table-column>
                <el-table-column
                  label="同步时间"
                  align="center"
                  prop="created_at"
                  :show-overflow-tooltip="true"
                />
                <el-table-column width="280px" label="操作" align="center">
                  <template slot-scope="scope">
                    <Iconbutton icontype="bf" label="播放" @fatherMethod="play(scope.row)"></Iconbutton>
                    <Iconbutton icontype="fz" label="复制" @fatherMethod="openLink(scope.row)"></Iconbutton>
                    <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row,1)"></Iconbutton>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <pagination
              v-show="xlParams.total > 0"
              :total="xlParams.total"
              :page.sync="xlParams.page"
              :limit.sync="xlParams.pageSize"
              @pagination="getVideoList('xlParams')"
            />
          </div>
        </el-tab-pane>
         <el-tab-pane label="vms视频库" name="0" class="xl-video-tab">
          <xl-menu  :menus="vmsChannel" :active-menu="vmsParams.defaultActive" v-if="showVmsChannel" @select="menuChange($event, 'vmsParams')"></xl-menu>
          <div class="xl-video-tab--content">
            <el-form
              :model="vmsParams"
              :inline="true"
            >
              <el-form-item label="视频名称:" prop="keyword">
                <el-input
                  v-model="vmsParams.keyword"
                  placeholder="请输入关键字"
                  clearable
                  size="small"
                  style="width: 200px"
                  @keyup.enter.native="getVideoList('vmsParams')"
                />
              </el-form-item>
              <el-form-item  label="类型:" prop="type">
                <el-select
                v-model="vmsParams.type"
                size="small"
                placeholder="请选择类型"
                clearable
              >
                <el-option
                  v-for="item in typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              </el-form-item>
              <el-form-item label="同步时间:">
                <el-date-picker
                  v-model="vmsParams.dateValue"
                  type="daterange"
                  align="right"
                  size="small"
                  unlink-panels
                  range-separator="~"
                  value-format="yyyy-MM-dd"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions"
                  @change="handleDateChange($event, 'vmsParams')"
                />
              </el-form-item>
              <el-form-item>
                <el-button v-points = "1500" type="primary" @click="rest('vmsParams')" size="mini" >重置</el-button>
                <el-button v-points = "1500"
                  type="primary"
                  size="mini"
                  @click="getVideoList('vmsParams')"
                >
                  搜索
                </el-button>
              </el-form-item>
            </el-form>
            <div class="xl-video-tab--content-ul" style="width: 98%">
                  <el-table
                    :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
                    border
                    v-loading="loading"
                    :data="vmsVideo"
                  >
                <el-table-column label="ID" width="60px" align="center" prop="id" />
                <el-table-column
                  label="视频封面"
                  width="150px"
                  align="center"
                  prop="cover"
                  :show-overflow-tooltip="true"
                >
                  <template slot-scope="scope">
                    <img
                      :src="scope.row.cover"
                      alt=""
                      style="width: 50px; height: 50px;"
                    />
                  </template>
                </el-table-column>

                <el-table-column
                  label="视频名称"
                  align="center"
                  prop="title"
                  :show-overflow-tooltip="true"
                />
                <el-table-column
                  label="时长"
                  align="center"
                  prop="duration"
                >
                 <template slot-scope="scope">
                   <span>{{getTime(scope.row.duration)}}</span>
                 </template>
                </el-table-column>
                <el-table-column
                  label="同步时间"
                  align="center"
                  prop="created_at"
                  :show-overflow-tooltip="true"
                />
                <el-table-column width="280px" label="操作" align="center">
                  <template slot-scope="scope">
                    <Iconbutton icontype="bf" label="播放" @fatherMethod="play(scope.row)"></Iconbutton>
                    <Iconbutton icontype="fz" label="复制" @fatherMethod="openLink(scope.row)"></Iconbutton>
                    <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row,0)"></Iconbutton>
                  </template>
                </el-table-column>
              </el-table>
            </div>

            <pagination
              v-show="vmsParams.total > 0"
              :total="vmsParams.total"
              :page.sync="vmsParams.page"
              :limit.sync="vmsParams.pageSize"
              @pagination="getVideoList('vmsParams')"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
      <el-dialog
      width="640px"
      title="视频"
      @close="closeVideo"
      :visible.sync="VideoDialog.show"
    >
      <video height="400" width="600" controls id="video">
        <source :src="VideoDialog.url">
        您的浏览器不支持 video 标签。
      </video>
    </el-dialog>
    <el-dialog
      width="640px"
      title="修改"
      :visible.sync="editDialog.show"
    >
       <el-form :model="editDialog.form" :rules="rules" ref="dataForm">
         <el-form-item  label-width="120px" label="视频名称:" prop="name">
          <el-input style="width: 300px" autocomplete="off" placeholder="请输入视频名称" v-model="editDialog.form.name"></el-input>
        </el-form-item>
        <el-form-item  label-width="120px" label="视频封面图:" prop="cover">
           <cropper
            :count="1"
            :showTip="false"
            v-model="editDialog.cover"
            />
        </el-form-item>
       </el-form>
        <div class="dialog-footer" slot="footer">
          <el-button v-points = "1500" @click="closeDialog">取 消</el-button>
          <el-button v-points = "1500" @click="enterDialog" type="primary">确 定</el-button>
         </div>
    </el-dialog>
    <el-dialog
      width="80%"
      title="链接地址"
      :visible.sync="linkDialog.show"
    >
     <el-table
        :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
        border
        :data="linkDialog.tableData"
      >
          <el-table-column
            label="类型"
            align="center"
            prop="format"
            width="80px"
            :show-overflow-tooltip="true"
          />
          <el-table-column
            label="码率"
            align="center"
            prop="rate"
            width="80px"
            :show-overflow-tooltip="true"
          />
           <el-table-column
            label="地址"
            align="center"
            prop="path"
            :show-overflow-tooltip="true"
          />
          <el-table-column width="120px" label="操作" align="center">
            <template slot-scope="scope">
              <Iconbutton icontype="fz" label="复制" @fatherMethod="copy(scope.row)"></Iconbutton>
            </template>
          </el-table-column>
        </el-table>
    </el-dialog>
    </div>
</template>

<script>
  import { getVideoChannel, getVideos, changeVideo } from '@/api/content.js'
  import xlMenu from './menu'
  import xlMenuL from './menuL'
  import Cropper from '@/components/Cropper'
    export default {
      components: {
        xlMenu,xlMenuL,Cropper
      },
      data() {
        return {
          activeName: '1',
          vmsChannel: [], // vms栏目
          vmsVideo: [], // vms视频列表
          xlChannel: [], // 新蓝云栏目
          loading: true,
          xlVideo: [], // 新蓝视频列表
          VideoDialog: {
            show: false,
            url: ''
          },
          editDialog: {
            show: false,
            cover: [],
            form: {
              name: '',
            },
          },
           rules: {
              name: [ { required: true, message: "请输入视频名称", trigger: "blur" } ]
            },
          linkDialog: {
            show: false,
            tableData: []
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
          typeOptions: [
            {
              label: '全部',
              value: ''
            },
            {
              label: '视频',
              value: 1
            },
            {
              label: '音频',
              value: 2
            }
          ],
          vmsParams: {
            keyword: '', // 关键词
            startDate  : '', // 开始时间
            endDate: '', // 结束时间
            type: '',
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
            startDate  : '', // 开始时间
            endDate: '', // 结束时间
            type: '',
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
         /* 播放视频 */
        play (row) {
          let url = row.item_list[0].path
          this.VideoDialog = {
            show: true,
            url: url
          }
        },
        rest(value) {
          this[value].keyword = ''
          this[value].dateValue = ''
          this[value].startDate   = ''
          this[value].endDate = ''
        },
        closeVideo() {
          let myVideo = document.getElementById('video')
          myVideo.pause()
        },
        /*打开复制弹框*/
        openLink(row) {
          this.linkDialog = {
            show: true,
            tableData: row.item_list
          }
        },
        copyLink(data){
          let url = data;
          let oInput = document.createElement('input');
          oInput.value = url;
          document.body.appendChild(oInput);
          oInput.select(); // 选择对象;
          document.execCommand("Copy"); // 执行浏览器复制命令
          this.$message({
            message: '复制成功',
            type: 'success'
          });
          oInput.remove()
      },
        /*复制*/
        copy(row) {
          this.copyLink(row.path)
        },
        /*编辑*/
        editdata(row,cloud) {
          let arr = [{ path: row.cover, status: 'success' }]
          this.editDialog = {
             show: true,
             cover: arr,
             id: row.id,
             cloud,
             form: {
               name: row.title || ''
             }
          }
          console.log('editDialog',this.editDialog)
        },
        closeDialog() {
          this.editDialog.show = false
        },
        enterDialog() {
          // this.editDialog.show = false
          this.$refs["dataForm"].validate((valid) => {
          if (!valid) return;
          let data = {
            title: this.editDialog.form.name,
            cover: this.editDialog.cover[0].path,
            cloud: this.editDialog.cloud
          }
          console.log('封面图片',this.editDialog.cover)
          console.log('提交数据',data)
           changeVideo(this.editDialog.id,data).then(res => {
             if(res.status_code == 200) {
               this.$message({
                 message: '修改成功',
                 type: 'success'
               });
               this.editDialog.show = false
               this.getVideoList(data.cloud? 'xlParams' : 'vmsParams')
             }else{
               this.$message.warning(res.message);
             }
            })
         })
        },
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
          this[identifier].startDate   = arr[0];
          this[identifier].endDate = arr[1];
        },
        /* 获取视频列表数据 */
        menuChange (val, status) {
          this.vmsVideo = [];
          this.xlVideo = [];
          this[status].vms_channel_id = val;
          this.getVideoList(status);
        },
        /*时间转换*/
        getTime(value) {
          let result = parseInt(value)
          let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
          let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
          let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
          let res = '';
          if(h !== '00') res += `${h}:`;
          if(m !== '00') res += `${m}:`;
          res += `${s}`;
          return res;
        },
        /* 视频库切换 */
        handleClick (tag) {
          this.getVideoChannel(Number(tag.name));
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
        getVideoChannel (code = 1) {
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
          this.loading = true
          params = { ...this[identifier] };
          delete params.dateValue, delete params.total, delete params.defaultActive;
          params.site_id = this.site_id;
          const rateMap = ['超清', '高清', '普清', '模糊'];
          getVideos(params).then(res => {
            console.log('res表格数据', res.data)
            // const arr = res.data || []
            this.loading = false
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
