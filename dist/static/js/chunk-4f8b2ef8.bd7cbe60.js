(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f8b2ef8"],{"0127":function(t,a,s){t.exports=s.p+"static/img/announce.39059519.png"},"02b2":function(t,a,s){t.exports=s.p+"static/img/add.0fba4a11.png"},"16c6":function(t,a,s){},7153:function(t,a,s){"use strict";s("16c6")},9406:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dashboard-container"},[s("iframe",{style:{height:t.height},attrs:{src:t.secret,width:"100%",frameborder:"0"}})])},i=[],l=s("5530"),c=s("2f62"),n=s("dda4"),o=s.n(n),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"home-top"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:16}},[e("div",{staticClass:"bg-purple"},[e("div",{staticClass:"real-data"},[e("div",{staticClass:"title"},[t._v("实时数据")]),e("div",{staticClass:"small-word",staticStyle:{"margin-left":"16px",display:"inline-block"}},[t._v("更新时间"+t._s(t.formatDate))])]),e("div",{staticClass:"details"},[e("div",{staticClass:"list"},[e("div",{staticClass:"small-word"},[t._v("总阅读量(次)")]),e("div",{staticClass:"num"},[t._v("3,193,000")]),e("div",{staticClass:"bottom-word"},[t._v("今日阅读量 "),e("span",{staticStyle:{color:"#EC6B33"}},[t._v("3238")])])]),e("div",{staticClass:"list"},[e("div",{staticClass:"small-word"},[t._v("总分享量(次)")]),e("div",{staticClass:"num"},[t._v("3,425")]),e("div",{staticClass:"bottom-word"},[t._v("今日分享量 "),e("span",{staticStyle:{color:"#EC6B33"}},[t._v("427")])])]),e("div",{staticClass:"list"},[e("div",{staticClass:"small-word"},[t._v("总注册用户量(人)")]),e("div",{staticClass:"num"},[t._v("3,193,000")]),e("div",{staticClass:"bottom-word"},[t._v("今日注册量 "),e("span",{staticStyle:{color:"#EC6B33"}},[t._v("54")])])]),e("div",{staticClass:"list"},[e("div",{staticClass:"small-word"},[t._v("月活跃用户量(次)")]),e("div",{staticClass:"num"},[t._v("219,300")]),e("div",{staticClass:"bottom-word"},[t._v("今日活跃用户量 "),e("span",{staticStyle:{color:"#EC6B33"}},[t._v("320")])])])])])]),e("el-col",{attrs:{span:8}},[e("div",{staticClass:"bg-purple",staticStyle:{display:"flex","padding-right":"24px"}},[e("div",{staticClass:"info"},[e("div",{staticClass:"word"},[t._v("上午好，")]),e("div",{staticClass:"word"},[t._v(t._s(t.siteName)+"同学")])]),e("img",{staticClass:"bg",attrs:{src:s("e21d"),alt:""}})])])],1)],1),e("div",{staticClass:"concent",staticStyle:{background:"#F7F8FA",height:"530px"}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:16}},[e("el-row",[e("el-col",{staticStyle:{"margin-bottom":"16px"},attrs:{span:24}},[e("div",{staticClass:"bg-purple"},[e("div",{staticClass:"shortcut"},[e("div",{staticClass:"title"},[t._v("快捷入口")]),e("div",{staticClass:"shortcut-concatiner"},[e("div",{staticClass:"list",on:{click:function(a){return t.goLink("Add-media")}}},[e("img",{staticClass:"img",attrs:{src:s("02b2"),alt:""}}),e("div",{staticClass:"word"},[t._v("新增文稿")])]),e("div",{staticClass:"list",on:{click:function(a){return t.goLink("SeeSection")}}},[e("img",{staticClass:"img",attrs:{src:s("d101"),alt:""}}),e("div",{staticClass:"word"},[t._v("栏目数据")])]),e("div",{staticClass:"list",on:{click:function(a){return t.goLink("ReviewNews")}}},[e("img",{staticClass:"img",attrs:{src:s("99e4"),alt:""}}),e("div",{staticClass:"word"},[t._v("新闻审核")])]),e("div",{staticClass:"list",on:{click:function(a){return t.goLink("CommentVerify")}}},[e("img",{staticClass:"img",attrs:{src:s("a375"),alt:""}}),e("div",{staticClass:"word"},[t._v("评论审核")])]),e("div",{staticClass:"list",on:{click:function(a){return t.goLink("Gossip")}}},[e("img",{staticClass:"img",attrs:{src:s("0127"),alt:""}}),e("div",{staticClass:"word"},[t._v("爆料审核")])]),e("div",{staticClass:"list",on:{click:function(a){return t.goLink("Column")}}},[e("img",{staticClass:"img",attrs:{src:s("ce27"),alt:""}}),e("div",{staticClass:"word"},[t._v("栏目管理")])])])])])])],1),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"bg-purple",staticStyle:{"padding-right":"24px"}},[e("div",{staticClass:"statistics"},[e("div",{staticClass:"title"},[t._v("数据详情")]),e("el-tabs",{on:{"tab-click":t.handleCharts},model:{value:t.chartsNmae,callback:function(a){t.chartsNmae=a},expression:"chartsNmae"}},[e("el-tab-pane",{attrs:{label:"阅读量",name:"readNum"}},[e("div",{staticStyle:{width:"100%",height:"250px"},attrs:{id:"readNum"}})]),e("el-tab-pane",{attrs:{label:"分享次数",name:"shareNum"}},[t._v(" 分享次数 ")]),e("el-tab-pane",{attrs:{label:"注册用户",name:"register"}},[t._v(" 注册用户 ")]),e("el-tab-pane",{attrs:{label:"活跃用户",name:"active"}},[t._v(" 活跃用户 ")]),e("el-tab-pane",{attrs:{label:"评论数",name:"commentNum"}},[t._v(" 评论数 ")]),e("el-tab-pane",{attrs:{label:"发稿量",name:"newsNum"}},[t._v(" 发稿量 ")])],1),e("div",{staticClass:"slect-concaiter"},[e("el-dropdown",{on:{command:t.handleCommand}},[e("span",{staticClass:"el-dropdown-link"},[t._v(" 近"+t._s(t.dateSelectValue)+"天"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"7"}},[t._v("近7天")]),e("el-dropdown-item",{attrs:{command:"15"}},[t._v("近15天")]),e("el-dropdown-item",{attrs:{command:"30"}},[t._v("近30天")])],1)],1)],1)],1)])])],1)],1),e("el-col",{attrs:{span:8}},[e("div",{staticClass:"bg-purple",staticStyle:{padding:"16px","padding-bottom":"6px"}},[e("div",{staticClass:"sort"},[e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"昨日阅读榜单",name:"yesterday"}},t._l(t.list,(function(a,s){return e("div",{key:s,staticClass:"list"},[e("div",{staticClass:"list-left"},[e("div",{staticClass:"index word-font"},[t._v(t._s(s>=9?s+1:"0"+(s+1)))]),e("div",{staticClass:"title word-font"},[t._v("31省区市新增本土确诊22例")])]),e("div",{staticClass:"list-right word-font"},[t._v("317万")])])})),0),e("el-tab-pane",{attrs:{label:"今日阅读榜单",name:"today"}},[t._v("今日阅读榜单")]),e("el-tab-pane",{attrs:{label:"今日分享榜单",name:"share"}},[t._v("今日分享榜单")])],1)],1)])])],1)],1)])},d=[],v=s("ade3"),m=(s("b0c0"),s("313e")),u=s.n(m),p={name:"home",data:function(){return{activeName:"yesterday",chartsNmae:"readNum",dateSelectValue:"7",list:[{},{},{},{},{},{},{},{},{},{},{},{}]}},created:function(){var t=this.$store.state.user.u_info;console.log("data",t)},computed:{siteName:function(){return this.$store.state.user.u_info.name||""},formatDate:function(){var t=new Date,a=t.getFullYear()+"-",s=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",e=t.getDate()<10?"0"+t.getDate():t.getDate(),i=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",l=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",c=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return a+s+e+" "+i+l+c}},methods:{handleClick:function(t){console.log("tab",t),console.log("----",this.activeName)},handleCharts:function(){},goLink:function(t){this.$router.push({name:t})},handleCommand:function(t){console.log("value",t),this.dateSelectValue=t,console.log("dateSelectValue",this.dateSelectValue)},intCharts:function(){var t,a=u.a.init(document.getElementById("readNum")),s={tooltip:{trigger:"axis"},legend:{data:["阅读量"],right:30},grid:{left:"3%",top:"15%",right:"5%",bottom:"2%",containLabel:!0},xAxis:{type:"category",data:["2020.1.1","2020.1.2","2020.1.3","2020.1.4","2020.1.5","2020.1.6","2020.1.7","2020.1.8","2020.1.9","2020.1.10","2020.1.11","2020.1.12","2020.1.13","2020.1.14","2020.1.15","2020.1.16","2020.1.17","2020.1.18","2020.1.19","2020.1.20","2020.1.21","2020.1.22","2020.1.23","2020.1.24","2020.1.25","2020.1.26","2020.1.27","2020.1.28","2020.1.29","2020.1.30"]},yAxis:{type:"value"},series:[(t={name:"阅读量",type:"line",stack:"总量",itemStyle:{normal:{color:"#155BD4",lineStyle:{color:"#155BD4"}}},data:[820,932,901,934,1290,1330,1320,820,932,901,934,1290,1330,1320,820,820,932,901,934,1290,1330,1320,820,932,901,934,1290,1330,1320,820],markLine:{symbol:"none",itemStyle:{normal:{borderWidth:1,lineStyle:{type:"solid",width:2},label:{formatter:"平均值",textStyle:{fontSize:10}}}},data:[{yAxis:1e3}]}},Object(v["a"])(t,"type","line"),Object(v["a"])(t,"smooth",!0),t)]};a.setOption(s),window.addEventListener("resize",(function(){a.resize()}))}},mounted:function(){this.intCharts()}},g=p,b=(s("b2ad"),s("2877")),C=Object(b["a"])(g,r,d,!1,null,"56cb53b4",null),f=C.exports,A={name:"Dashboard",components:{home:f},data:function(){return{waiting:o.a,currentRole:"adminDashboard",height:"calc(100vh - 154px)",tabList:[{label:"大数据分析",url:"https://v.yuntus.com/tcv/94333b338a7df463cce194b9ee3e8cd7?key=b940fb0dfac6475fb7e3f226cdaea4d1&admin-key=2gsIh5"}],secret:""}},computed:Object(l["a"])({},Object(c["b"])(["roles"])),created:function(){this.secret="https://v.yuntus.com/tcv/94333b338a7df463cce194b9ee3e8cd7?key="+this.$store.state.user.u_info.site.extra.bigdata_settings.secret+"&admin-key=2gsIh5"}},h=A,w=(s("7153"),Object(b["a"])(h,e,i,!1,null,"304bcfd9",null));a["default"]=w.exports},"99e4":function(t,a,s){t.exports=s.p+"static/img/news.6b573844.png"},a375:function(t,a){t.exports="data:image/png;base64,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"},b2ad:function(t,a,s){"use strict";s("d37a")},ce27:function(t,a,s){t.exports=s.p+"static/img/manage.2400f514.png"},d101:function(t,a,s){t.exports=s.p+"static/img/cloum.c5eabe2f.png"},d37a:function(t,a,s){},dda4:function(t,a,s){t.exports=s.p+"static/img/waiting.ca008e61.jpg"},e21d:function(t,a,s){t.exports=s.p+"static/img/background.87f80683.png"}}]);