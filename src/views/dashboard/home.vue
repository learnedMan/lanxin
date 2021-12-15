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
                                <div class="num">3,193,000</div>
                                <div class="bottom-word">今日阅读量 <span style="color:#EC6B33">3238</span></div>
                            </div>
                            <div class="list">
                                <div class="small-word">总分享量(次)</div>
                                <div class="num">3,425</div>
                                <div class="bottom-word">今日分享量  <span style="color:#EC6B33">427</span></div>
                            </div>
                            <div class="list">
                                <div class="small-word">总注册用户量(人)</div>
                                <div class="num">3,193,000</div>
                                <div class="bottom-word">今日注册量  <span style="color:#EC6B33">54</span></div>
                            </div>
                            <div class="list">
                                <div class="small-word">月活跃用户量(次)</div>
                                <div class="num">219,300</div>
                                <div class="bottom-word">今日活跃用户量  <span style="color:#EC6B33">320</span></div>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="bg-purple" style="display: flex;padding-right: 24px">
                        <div class="info">
                            <div class="word">上午好，</div>
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
                                    <div class="list" @click="goLink('ReviewNews')">
                                        <img class="img" src="@/assets/home/news.png" alt="">
                                        <div class="word">新闻审核</div>
                                    </div>
                                    <div class="list" @click="goLink('CommentVerify')">
                                        <img class="img" src="@/assets/home/comment.png" alt="">
                                        <div class="word">评论审核</div>
                                    </div>
                                    <div class="list" @click="goLink('Gossip')">
                                        <img class="img" src="@/assets/home/announce.png" alt="">
                                        <div class="word">爆料审核</div>
                                    </div>
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
                            <el-tab-pane label="阅读量" name="readNum">
                               <div id="readNum" style="width: 100%;height: 250px;"></div>
                            </el-tab-pane>
                            <el-tab-pane label="分享次数" name="shareNum">
                                分享次数
                            </el-tab-pane>
                            <el-tab-pane label="注册用户" name="register">
                                注册用户
                            </el-tab-pane>
                            <el-tab-pane label="活跃用户" name="active">
                                活跃用户
                            </el-tab-pane>
                             <el-tab-pane label="评论数" name="commentNum">
                                评论数
                            </el-tab-pane>
                            <el-tab-pane label="发稿量" name="newsNum">
                                发稿量
                            </el-tab-pane>
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
                                      <div class="title word-font">31省区市新增本土确诊22例</div>
                                    </div>
                                    <div class="list-right word-font">317万</div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="今日阅读榜单" name="today">今日阅读榜单</el-tab-pane>
                            <el-tab-pane label="今日分享榜单" name="share">今日分享榜单</el-tab-pane>
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
export default {
    name: 'home',
    data() {
        return {
            activeName: 'yesterday',
            chartsNmae: 'readNum',
            dateSelectValue: '7',
            list: [{},{},{},{},{},{},{},{},{},{},{},{},]
        }
    },
    created() {
        let data =  this.$store.state.user.u_info
        console.log('data',data)
    },
    computed: {
        siteName() {
            return this.$store.state.user.u_info.name || ''
        },
       formatDate() { 
            var date = new Date(); var YY = date.getFullYear() + '-';
            var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
            var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            return YY + MM + DD +" "+hh + mm + ss;
        }
    },
    methods: {
     handleClick(tab) {
        console.log('tab',tab);// this.$router.push({ name: 'StudioList', query: { title:script_id } })
        console.log('----',this.activeName)
      },
      handleCharts() {

      },
    /* 快捷入口跳转*/
      goLink(name) {
          this.$router.push({ name })
      },
      handleCommand(value) {
          console.log('value',value)
          this.dateSelectValue = value
          console.log('dateSelectValue',this.dateSelectValue)
      },
      intCharts() {
           let myChart = echarts.init(document.getElementById('readNum'))
           let option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['阅读量'],
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
                    // boundaryGap: false,
                    // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日','周一', '周二', '周三', '周四', '周五', '周六', '周日','周一']
                    data: ['2020.1.1', '2020.1.2', '2020.1.3', '2020.1.4', '2020.1.5', '2020.1.6', '2020.1.7','2020.1.8', '2020.1.9', '2020.1.10', '2020.1.11', '2020.1.12', '2020.1.13', '2020.1.14','2020.1.15','2020.1.16', '2020.1.17', '2020.1.18', '2020.1.19', '2020.1.20', '2020.1.21', '2020.1.22','2020.1.23', '2020.1.24', '2020.1.25', '2020.1.26', '2020.1.27', '2020.1.28', '2020.1.29','2020.1.30'],
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '阅读量',
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
                        data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820],
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
                　　　　　　data: [{yAxis:1000}]
                    　　　　},
                            type: 'line',
                            smooth: true
                    },
                ]
            };
            myChart.setOption(option)
            window.addEventListener('resize',function() {myChart.resize()});

      },
    },
    mounted() {
        this.intCharts()
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
                    margin-bottom: 23px;
                    .word-font{
                        height: 14px;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 14px;
                    }
                    .list-left{
                        display: flex;
                        .title{
                         color: #26282B;
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