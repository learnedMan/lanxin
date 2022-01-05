<template>
    <div class="home">
        <div class="home-top">
            <el-row :gutter="20">
                <el-col :span="16">
                    <div class="bg-purple">
                        <div class="real-data">
                            <div class="title">实时数据</div>
                            <div class="small-word" style="margin-left: 16px;display: inline-block;">更新时间{{formatDate}}</div>
                        </div>
                        <div class="details">
                            <div class="list">
                                <div class="small-word">总阅读量(次)</div>
                                <div class="num">{{readTotal}}</div>
                                <div class="bottom-word">今日阅读量 <span style="color:#EC6B33">{{readToday}}</span></div>
                            </div>
                            <div class="list">
                                <div class="small-word">总分享量(次)</div>
                                <div class="num">{{shareTotal}}</div>
                                <div class="bottom-word">今日分享量  <span style="color:#EC6B33">{{shareToday}}</span></div>
                            </div>
                            <div class="list">
                                <div class="small-word">总注册用户量(人)</div>
                                <div class="num">{{userTotal}}</div>
                                <div class="bottom-word">今日注册量  <span style="color:#EC6B33">{{userToday}}</span></div>
                            </div>
                            <div class="list" style="position: relative">
                                <el-popover
                                    placement="top"
                                    trigger="hover"
                                >
                                    <span slot="reference"><img src="@/assets/home/tip.png" style="position: absolute;right: -6px;width: 16px" alt=""></span>
                                     <p>月活跃用户量：近三十天在线人数</p>
                                     <p>今日活跃用户量：当日在线人数</p>
                                </el-popover>
                                <div class="small-word">月活跃用户量(次)</div>
                                <div class="num">{{activeTotal}}</div>
                                <div class="bottom-word">今日活跃用户量  <span style="color:#EC6B33">{{activeToday}}</span></div>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="bg-purple" style="display: flex;padding-right: 24px">
                        <div class="info">
                            <div class="word">{{dayTypeName}}，</div>
                            <div class="word">{{siteName}}同学</div>
                            <!-- <div class="small-word" style="color: #949597;margin-bottom: 8px">上次登录时间</div>
                            <div class="small-word" style="color:#26282B">2021-09-13 11:28:32</div> -->
                        </div>
                        <img class="bg" src="@/assets/home/background.png" alt="">
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="concent" style="background: #F7F8FA;height: 530px">
            <el-row :gutter="20">
            <el-col :span="16">
                <el-row>
                    <el-col :span="24" style="margin-bottom: 16px">
                        <div class="bg-purple">
                            <div class="shortcut">
                                <div class="title">快捷入口</div>
                                <div class="shortcut-concatiner">
                                    <div class="list" @click="goLink('Add-media')">
                                        <img class="img" src="@/assets/home/add.png" alt="">
                                        <div class="word">新增文稿</div>
                                    </div>
                                    <div class="list" @click="goLink('SeeSection')">
                                        <img class="img" src="@/assets/home/cloum.png" alt="">
                                        <div class="word">栏目数据</div>
                                    </div>
                                    <el-badge :value="checkNum" :max="99">
                                        <div class="list" @click="goLink('ReviewNews')">
                                            <img class="img" src="@/assets/home/news.png" alt="">
                                            <div class="word">新闻审核</div>
                                        </div>
                                    </el-badge>
                                     <el-badge :value="commentNum" :max="99">
                                        <div class="list" @click="goLink('CommentVerify')">
                                            <img class="img" src="@/assets/home/comment.png" alt="">
                                            <div class="word">评论审核</div>
                                        </div>
                                    </el-badge>
                                    <el-badge :value="gossipNum" :max="99">
                                        <div class="list" @click="goLink('Gossip')">
                                            <img class="img" src="@/assets/home/announce.png" alt="">
                                            <div class="word">爆料审核</div>
                                        </div>
                                    </el-badge>
                                    <div class="list" @click="goLink('Column')">
                                        <img class="img" src="@/assets/home/manage.png" alt="">
                                        <div class="word">栏目管理</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                 <el-col :span="24">
                    <div class="bg-purple" style="padding-right: 24px">
                        <div class="statistics">
                             <div class="title">数据详情</div>
                             <el-tabs v-model="chartsNmae" @tab-click="handleCharts">
                            <el-tab-pane label="阅读量" name="read">
                               <div id="read" style="width: 100%;height: 250px;"></div>
                            </el-tab-pane>
                            <el-tab-pane label="分享次数" name="share">
                               <div id="share" style="width: 100%;height: 250px;"></div>
                            </el-tab-pane>
                            <el-tab-pane label="注册用户" name="register">
                               <div id="register" style="width: 100%;height: 250px;"></div>
                            </el-tab-pane>
                            <el-tab-pane label="活跃用户" name="active">
                               <div id="active" style="width: 100%;height: 250px;"></div>
                            </el-tab-pane>
                             <!-- <el-tab-pane label="评论数" name="commentNum">
                                评论数
                            </el-tab-pane>
                            <el-tab-pane label="发稿量" name="newsNum">
                                发稿量
                            </el-tab-pane> -->
                       </el-tabs>
                       <div class="slect-concaiter">
                           <el-dropdown @command="handleCommand">
                            <span class="el-dropdown-link">
                                近{{dateSelectValue}}天<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="7">近7天</el-dropdown-item>
                                <el-dropdown-item command="15">近15天</el-dropdown-item>
                                <el-dropdown-item command="30">近30天</el-dropdown-item>
                            </el-dropdown-menu>
                            </el-dropdown>
                       </div>
                        </div>
                    </div>
                 </el-col>
                </el-row>
            </el-col>
            <el-col :span="8">
                <div class="bg-purple" style="padding: 16px;padding-bottom: 6px">
                    <div class="sort">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="昨日阅读榜单" name="yesterday">
                                <div class="list" v-for="(item,index) in list" :key="index">
                                    <div class="list-left">
                                      <div class="index word-font">{{index >= 9 ? index+1 :  `0${index+1}`}}</div>
                                      <div class="title word-font">{{item.title}}</div>
                                    </div>
                                    <div class="list-right word-font">{{getNumber(item.score)}}</div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="今日阅读榜单" name="today">
                                   <div class="list" v-for="(item,index) in list" :key="index">
                                    <div class="list-left">
                                      <div class="index word-font">{{index >= 9 ? index+1 :  `0${index+1}`}}</div>
                                      <div class="title word-font">{{item.title}}</div>
                                    </div>
                                    <div class="list-right word-font">{{getNumber(item.score)}}</div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="今日分享榜单" name="share">
                                 <div class="list" v-for="(item,index) in list" :key="index">
                                    <div class="list-left">
                                      <div class="index word-font">{{index >= 9 ? index+1 :  `0${index+1}`}}</div>
                                      <div class="title word-font">{{item.title}}</div>
                                    </div>
                                    <div class="list-right word-font">{{getNumber(item.score)}}</div>
                                </div>
                            </el-tab-pane>
                       </el-tabs>
                    </div>
                </div>
            </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
import { getHomeData,getOnlineData,getItemsRank } from '@/api/statistics'
import { getUserLists,getproduct } from '@/api/manage'
import { getNews } from '@/api/content'
import { getGossipLists,getCommentLists } from '@/api/workbench'
export default {
    name: 'home',
    data() {
        return {
            activeName: 'yesterday',
            chartsNmae: 'read',
            sourceId: '', //用户来源id
            readTotal: '',
            readToday: '',
            shareTotal: '',
            shareToday: '',
            userTotal: '',
            userToday: '',
            activeTotal: '',
            activeToday: '',
            checkNum: 0,
            gossipNum: 0,
            commentNum: 0,
            dateSelectValue: '7',
            list: [] //排行榜
        }
    },
    created() {
        let data =  this.$store.state.user.u_info
        console.log('data',data)
        this.getBasicsData()
        this.getCheckNum()
        this.getproductList()
        this.getItemsRankList('read','yesterday')
    },
    computed: {
        siteName() {
            return this.$store.state.user.u_info.name || ''
        },
        site ({ $store: { state: { user: { u_info } } } }) {
          const data = u_info?.site?.extra?.bigdata_settings || {};
          return {
            productId: data.product_id || '',
            customerId: data.customer_id || ''
          }
        },
       formatDate() {
            var date = new Date(); var YY = date.getFullYear() + '-';
            var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
            var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            return YY + MM + DD +" "+hh + mm + ss;
        },
        dayTypeName() {
            let date = new Date(),hours = date.getHours()
            if(hours < 12) {
                return '上午好'
            }else if(hours > 12 && hours < 17) {
                return '下午好'
            }
            return '晚上好'
        },
    },
    methods: {
      getBasicsData() {
        let params = {
            customer_id: this.site.customerId,
            product_id: this.site.productId
        }
        getHomeData(params).then(res => {
            this.shareTotal = res.data?.share.total.toLocaleString() || 0
            // this.userTotal = res.data?.user.total.toLocaleString() || 0
            this.activeTotal =res.data?.active.total.toLocaleString() || 0
            this.shareToday = res.data?.share.today || 0
            this.userToday = res.data?.user.today || 0
            this.activeToday = res.data?.active.today || 0
            this.readToday = res.data?.read.today || 0
            this.readTotal = res.data?.read.total.toLocaleString() || 0
        })
     },
     getCheckNum() {
      const params = { status: 0, reviewer_id: this.$store.state.user.u_info.id }
      getNews(this.removePropertyOfNullFor0(params)).then(res => {
        this.checkNum = res.total || 0
      })
    },
    getproductList(){
        getproduct({}).then((response) => {
            let obj = response.data.find(v => v.type == 'app');
            let sourceId = obj.source_id || '';
            this.getUserList(sourceId)
            this.getGossipListNum(sourceId)
            this.getCommentListNum(sourceId)
        });
      },
    getUserList(sourceId) {
         let params = { sourceId }
          getUserLists(params).then(res => {
            if(res.code == 200) {
              this.userTotal = res.data.totalCount.toLocaleString() || 0
            }
          })
     },
     getGossipListNum(sourceId) {
          let params = {sourceId,status: 2,type: 0}
          getGossipLists(params).then(res => {
            if(res.code == 200) {
              this.gossipNum = res.data.totalCount || 0
            }
          })
     },
     getCommentListNum(sourceId) {
          let params = {sourceId,status: 0}
          getCommentLists(params).then(res => {
          this.commentNum = res.data.totalCount || 0;
        })
     },
     getItemsRankList(type,dateType) {
          let params = {
            customer_id: this.site.customerId,
            product_id: this.site.productId,
            type,
            dateType,
            number: '12'
        }
         getItemsRank(params).then(res =>{
            //  console.log('排行榜', res)
             this.list = res.data || []
         })
     },
     dataFxied(data) {
         let obj = {
             x: [],
             y: [],
             average: 0,
         }
         data.map(v =>{
            obj.x.push(v.x)
            obj.y.push(v.y)
         })
        let num = obj.y.reduce((accumulator,crrentval)=>{
                return accumulator+crrentval
        },0)
        obj.average = parseInt(num/obj.y.length)
        return obj
     },
     getNumber(num) {
        if(num > 100000) {
         return (num/10000).toFixed(2) + '万'
        }
        return num || 0
     },
     handleClick() {
        if(this.activeName == 'yesterday') {
            this.getItemsRankList('read','yesterday')
        }else if(this.activeName == 'today') {
            this.getItemsRankList('read','today')
        }else if(this.activeName == 'share'){
            this.getItemsRankList('share','today')
        }
      },
      handleCharts() {
          this.chartsOnline(this.chartsNmae)
      },
    /* 快捷入口跳转*/
      goLink(name) {
          this.$router.push({ name })
      },
      handleCommand(value) {
          this.dateSelectValue = value
          this.chartsOnline(this.chartsNmae)
      },
      chartsOnline(type) { // type 类型
           let params = {
            customer_id: this.site.customerId,
            product_id: this.site.productId,
            dimension: type,
            time: this.dateSelectValue
         }
         getOnlineData(params).then(res =>{
             let data = res.data
             let obj = this.dataFxied(data)
            let myChart = echarts.init(document.getElementById(type))
            // window.addEventListener('resize',function() {myChart.resize()});
            let textObj = {
                read: '阅读量',
                share: '分享量',
                register: '注册用户',
                active: '活跃用户',
            }
            let readOption = this.echartsOptions(obj.x,obj.y,textObj[type],obj.average)
             myChart.setOption(readOption)
         })
      },
      echartsOptions(x,y,type,num) {
          let  option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: [type],
                    right: 30,
                },
                grid: {
                    left: '3%',
                    top: '15%',
                    right: '5%',
                    bottom: '2%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: x,
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: type,
                        type: 'line',
                        stack: '总量',
                        itemStyle: {
                            normal: {
                                color: "#155BD4",
                                lineStyle: {
                                    color: "#155BD4"
                                }
                            }
                        },
                        data: y,
                        markLine : {
                            symbol:"none",   //该线无样式
                            itemStyle: {
                    　　　　　　  normal:{
                    　　　　　　    borderWidth: 1,
                    　　　　　　    lineStyle: {
                    　　　　　　      type: 'solid',
                    　　　　　　      width: 2
                    　　　　　　    },
                    　　　　　　    label:{
                    　　　　　　      formatter: '平均值',
                    　　　　　　      textStyle: {
                    　　　　　　        fontSize: 10
                    　　　　　　      }
                    　　　　　　    }
                    　　　　　　  }
                    　　　　},
                　　　　　　data: [{yAxis:num}]
                    　　　　},
                            type: 'line',
                            smooth: true
                    },
                ]
            };
        return option
      },
    },
    mounted() {
        this.chartsOnline('read')
    },
}
</script>
<style lang="scss" scoped>
    .home{
        padding: 16px;
        // height: 600px;
        background: #F7F8FA;
        font-family: PingFang-SC-Semibold, PingFang-SC;
        .home-top{
            height: 158px;
        }
        .bg-purple{
            // border: 1px solid;
            background: #FFFFFF;
            // height: 168px;
            padding: 16px 60px 16px 16px;
            box-sizing: border-box;
            .small-word{
                    font-size: 14px;
                    font-weight: 400;
                    color: #626467;
                    line-height: 14px;
                }
            .real-data{
                margin-bottom: 16px;
                .title{
                    font-size: 16px;
                    font-weight: 600;
                    color: #3A3C40;
                    line-height: 22px;
                    display: inline-block;
                }
            }
            .details{
                display: flex;
                justify-content: space-between;
                .num{
                    font-size: 26px;
                    margin-top: 8px;
                    font-family: DIN-Bold, DIN;
                    font-weight: bold;
                    color: #26282B;
                    line-height: 26px;
                }
                .bottom-word{
                    margin-top: 12px;
                    font-size: 14px;
                    font-family: MicrosoftYaHei;
                    color: #BCBEBF;
                    line-height: 14px;
                }
            }
            .info{
                .word{
                    font-size: 20px;
                    font-weight: 600;
                    color: #26282B;
                    line-height: 20px;
                    margin-bottom: 16px;
                }
            }
            .bg{
                width: 147px;
                margin-left: 37px;
                height: 114px;
            }
            .shortcut{
                .title{
                    font-size: 16px;
                    font-weight: 600;
                    color: #3A3C40;
                    line-height: 22px;
                    margin-bottom: 32px;
                }
                .shortcut-concatiner{
                    display: flex;
                    justify-content: space-between;
                    padding-left: 44px;
                    box-sizing: border-box;
                    .tip-item {
                    margin-top: 10px;
                    margin-right: 40px;
                    }
                    .list{
                        width: 56px;
                        cursor: pointer;
                    }
                    .img{
                        width: 40px;
                        height: 40px;
                        display: block;
                        margin: 0 auto;
                    }
                    .word{
                        font-size: 14px;
                        font-weight: 400;
                        margin-top: 16px;
                        color: #26282B;
                        line-height: 14px;
                        text-align: center;
                    }
                }
            }
            .statistics{
                // padding: 24px 24px 17px 24px;
                box-sizing: border-box;
                height: 315px;
                // border: 1px solid;
                position: relative;
                .title{
                    font-size: 16px;
                    font-weight: 600;
                    color: #3A3C40;
                    line-height: 22px;
                }
                .slect-concaiter{
                    width: 80px;
                    // border: 1px solid;
                    position: absolute;
                    top: 30px;
                    right: 10px;
                }
            }
            .sort{
                height: 100%;
                .list{
                    display: flex;
                    justify-content: space-between;
                    // margin-bottom: 23px;
                    height: 37px;
                    line-height: 35px;
                    .word-font{
                        // height: 14px;
                        font-size: 14px;
                        font-weight: 400;
                        // line-height: 14px;
                    }
                    .list-left{
                        display: flex;
                        .title{
                         color: #26282B;
                         width: 280px;
                         white-space: nowrap;
                         text-overflow: ellipsis;
                         overflow: hidden;
                         word-break: break-all;
                         margin-left: 16px;
                        }
                    }
                    .list-right{
                        color: #949597;
                    }
                }
            }
        }
    }
</style>