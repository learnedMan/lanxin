(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7804ac0"],{"1f41":function(e,t,a){"use strict";a("3780")},3780:function(e,t,a){},"3acb":function(e,t,a){},"48b0":function(e,t,a){},"52ec":function(e,t,a){"use strict";a("3acb")},"8c22":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-statistics"},[a("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[a("keep-alive",{attrs:{exclude:e.exclude}},[a(e.component,{tag:"component",attrs:{id:e.id,authorId:e.authorId},on:{"watch-detail":e.watchDetail,handleReturn:e.handleReturn}})],1)],1)],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-statistics-lists"},[a("el-tabs",{staticStyle:{height:"100%"},attrs:{"tab-position":"left"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"部门发稿情况",name:"department"}},[a("department",{attrs:{channelsList:e.channelsList}})],1),a("el-tab-pane",{attrs:{label:"员工发稿情况",name:"statffDispatches"}},[a("statff-dispatches",{attrs:{channelsList:e.channelsList,authorlList:e.authorlList,departmentList:e.dataList}})],1),a("el-tab-pane",{attrs:{label:"来源发稿情况",name:"sourceData"}},[a("sourceData",{attrs:{channelsList:e.channelsList}})],1),a("el-tab-pane",{attrs:{label:"按稿件数据",name:"newsData"}},[a("news-data",{attrs:{channelsList:e.channelsList,authorlList:e.authorlList,departmentList:e.dataList}})],1)],1)],1)},s=[],l=a("48fb"),o=a("0fea"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"newsData"},[a("el-form",{ref:"department",attrs:{model:e.newsData.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"发布时间:",prop:"Date"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:function(t){return e.handleDateChange(t)}},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}})],1),a("el-form-item",{attrs:{label:"部门:",prop:"departmentList"}},[a("el-cascader",{staticStyle:{width:"250px"},attrs:{"show-all-levels":!1,options:e.departmentList,"collapse-tags":"",props:{emitPath:!1,checkStrictly:!0,value:"id",label:"name",multiple:!0},clearable:""},model:{value:e.newsData.queryParams.departmentList,callback:function(t){e.$set(e.newsData.queryParams,"departmentList",t)},expression:"newsData.queryParams.departmentList"}})],1),a("el-form-item",{attrs:{label:"编辑：",prop:"authorList"}},[a("el-cascader",{staticStyle:{width:"250px"},attrs:{"show-all-levels":!1,options:e.authorList,"collapse-tags":"",filterable:"",props:{emitPath:!1,checkStrictly:!0,value:"id",label:"name",multiple:!0},clearable:""},model:{value:e.newsData.queryParams.authorList,callback:function(t){e.$set(e.newsData.queryParams,"authorList",t)},expression:"newsData.queryParams.authorList"}})],1),a("el-form-item",{attrs:{label:"发布栏目",prop:"channel_id"}},[a("el-cascader",{staticStyle:{width:"250px"},attrs:{filterable:"",options:e.channelsList,props:e.cascaderOption,"collapse-tags":"",clearable:""},model:{value:e.newsData.queryParams.channelList,callback:function(t){e.$set(e.newsData.queryParams,"channelList",t)},expression:"newsData.queryParams.channelList"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleReset()}}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleQuery()}}},[e._v(" 搜索 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"warning",size:"mini"},on:{click:function(t){return e.handleImport()}}},[e._v(" 导出 ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.newsData.loading,expression:"newsData.loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.newsData.tableData,border:"","tooltip-effect":"dark"},on:{"selection-change":function(t){return e.handleSelectionChange(t,"department")}}},[a("el-table-column",{attrs:{label:"序号",align:"center",type:"index","min-width":"5%"}}),a("el-table-column",{attrs:{label:"稿件标题",align:"center",prop:"title","show-overflow-tooltip":"","min-width":"30%"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"watch-detail-btn"},[e._v(e._s(t.row.title))])]}}])}),a("el-table-column",{attrs:{label:"发布栏目",align:"center",prop:"channelName","show-overflow-tooltip":"","min-width":"8%"}}),a("el-table-column",{attrs:{label:"部门",align:"center",prop:"departmentName","min-width":"8%"}}),a("el-table-column",{attrs:{label:"编辑",align:"center",prop:"auhtorName","min-width":"8%"}}),a("el-table-column",{attrs:{label:"点击量(真实)",align:"center",prop:"real_view","min-width":"5%"}}),a("el-table-column",{attrs:{label:"链接地址",align:"center",prop:"extra.url","show-overflow-tooltip":"","min-width":"15%"}}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"created_at","min-width":"8%"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.newsData.queryParams.page,limit:e.newsData.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.newsData.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.newsData.queryParams,"pageSize",t)},pagination:e.getNewsList}})],1)},u=[],d=a("5530"),m={name:"newsDate",props:{channelsList:{type:Array,default:function(){return[]}},departmentList:{type:Array,default:function(){return[]}},authorList:{type:Array,default:function(){return[]}}},data:function(){var e=this;return{newsData:{queryParams:{beginTime:"",editor:"",channelList:[],departmentList:[],authorList:[],endTime:"",page:1,pageSize:10},loading:!1,tableData:[],selection:[]},total:0,dateValue:[],cascaderOption:{checkStrictly:!1,emitPath:!1,value:"id",label:"name",multiple:!0},pickerOptions:{onPick:function(t){e.pickerMinDate=new Date(t.minDate).getTime()},disabledDate:function(t){if(e.pickerMinDate){var a=316224e5,i=e.pickerMinDate+a,n=e.pickerMinDate-a;return t.getTime()>i||t.getTime()<n}}}}},created:function(){this.dateValue=this.timeDefault,this.newsData.queryParams.beginTime=this.dateValue[0],this.newsData.queryParams.endTime=this.dateValue[1],this.getNewsList()},computed:{site:function(e){var t,a,i=e.$store.state.user.u_info,n=(null===i||void 0===i||null===(t=i.site)||void 0===t||null===(a=t.extra)||void 0===a?void 0:a.bigdata_settings)||{};return{productId:n.product_id||"",customerId:n.customer_id||""}},timeDefault:function(){var e=new Date,t=e.getTime()-2592e6,a=e.getTime(),i=new Date(t),n=new Date(a);return t=i.getFullYear()+"-"+(i.getMonth()+1>=10?i.getMonth()+1:"0"+(i.getMonth()+1))+"-"+(i.getDate()>=10?i.getDate():"0"+i.getDate()),a=n.getFullYear()+"-"+(n.getMonth()+1>=10?n.getMonth()+1:"0"+(n.getMonth()+1))+"-"+(n.getDate()>=10?n.getDate():"0"+n.getDate()),[t,a]}},methods:{handleDateChange:function(e){var t=e||["",""];this.newsData.queryParams.beginTime=t[0],this.newsData.queryParams.endTime=t[1]},handleReset:function(){this.dateValue=this.timeDefault,this.newsData.queryParams.beginTime=this.dateValue[0],this.newsData.queryParams.endTime=this.dateValue[1],this.newsData.queryParams.channelList=[],this.newsData.queryParams.departmentList=[],this.newsData.queryParams.authorList=[]},handleQuery:function(){this.getNewsList()},handleImport:function(){var e=Object(d["a"])(Object(d["a"])({},this.newsData.queryParams),{},{customerId:this.site.customerId,productId:this.site.productId});Object(l["d"])("/api/statistics/kpi/exportNews",this.removePropertyOfNullFor0(e))},getNewsList:function(){var e=this;this.newsData.loading=!1;var t=Object(d["a"])(Object(d["a"])({},this.newsData.queryParams),{},{customerId:this.site.customerId,productId:this.site.productId});Object(l["n"])(this.removePropertyOfNullFor0(t)).then((function(t){e.newsData.loading=!1,e.newsData.tableData=t.data,e.total=t.total}))}}},p=m,h=(a("52ec"),a("2877")),g=Object(h["a"])(p,c,u,!1,null,null,null),f=g.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"statffDispatches"},[a("div",{staticClass:"search"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"发布时间:"}},[a("el-date-picker",{attrs:{clearable:!1,type:"daterange","range-separator":"~","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:e.handleDateChange},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}})],1),a("el-form-item",{attrs:{label:"部门:",prop:"departmentList"}},[a("el-cascader",{staticStyle:{width:"250px"},attrs:{filterable:"",options:e.departmentList,props:e.departmentOption,"collapse-tags":"",clearable:""},model:{value:e.queryParams.departmentList,callback:function(t){e.$set(e.queryParams,"departmentList",t)},expression:"queryParams.departmentList"}})],1),a("el-form-item",{attrs:{label:"编辑：",prop:"authorList"}},[a("el-cascader",{staticStyle:{width:"250px"},attrs:{"show-all-levels":!1,options:e.authorList,"collapse-tags":"",filterable:"",props:{emitPath:!1,checkStrictly:!0,value:"id",label:"name",multiple:!0},clearable:""},model:{value:e.queryParams.authorList,callback:function(t){e.$set(e.queryParams,"authorList",t)},expression:"queryParams.authorList"}})],1),a("el-form-item",{attrs:{label:"发布栏目:",prop:"channelList"}},[a("el-cascader",{staticStyle:{width:"250px"},attrs:{filterable:"",options:e.channelsList,"collapse-tags":"",props:e.channelOption,clearable:""},model:{value:e.queryParams.channelList,callback:function(t){e.$set(e.queryParams,"channelList",t)},expression:"queryParams.channelList"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"warning",size:"mini"},on:{click:e.handleImport}},[e._v(" 导出 ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center","show-overflow-tooltip":"",width:"50"}}),a("el-table-column",{attrs:{label:"人员名称",align:"center",prop:"user_name"}}),a("el-table-column",{attrs:{label:"发布新闻数量",align:"center",prop:"num"}}),a("el-table-column",{attrs:{label:"点击量（真实）",align:"center",prop:"real_view"}})],1)],1)])},y=[],v={name:"statffDispatches",props:{channelsList:{type:Array,default:function(){return[]}},departmentList:{type:Array,default:function(){return[]}},authorList:{type:Array,default:function(){return[]}}},data:function(){var e=this;return{loading:!1,tableData:[],channelOption:{checkStrictly:!1,emitPath:!1,value:"id",label:"name",multiple:!0},departmentOption:{checkStrictly:!0,emitPath:!1,value:"id",label:"name",multiple:!0},dateValue:[],queryParams:{departmentList:[],channelList:[],authorList:[],beginTime:"",endTime:""},pickerOptions:{onPick:function(t){e.pickerMinDate=new Date(t.minDate).getTime()},disabledDate:function(t){if(e.pickerMinDate){var a=316224e5,i=e.pickerMinDate+a,n=e.pickerMinDate-a;return t.getTime()>i||t.getTime()<n}}}}},computed:{constQueryParams:function(e){var t,a,i=e.$store.state.user.u_info,n=(null===i||void 0===i||null===(t=i.site)||void 0===t||null===(a=t.extra)||void 0===a?void 0:a.bigdata_settings)||{};return{productId:n.product_id||"",customerId:n.customer_id||""}},timeDefault:function(){var e=new Date,t=e.getTime()-2592e6,a=e.getTime(),i=new Date(t),n=new Date(a);return t=i.getFullYear()+"-"+(i.getMonth()+1>=10?i.getMonth()+1:"0"+(i.getMonth()+1))+"-"+(i.getDate()>=10?i.getDate():"0"+i.getDate()),a=n.getFullYear()+"-"+(n.getMonth()+1>=10?n.getMonth()+1:"0"+(n.getMonth()+1))+"-"+(n.getDate()>=10?n.getDate():"0"+n.getDate()),[t,a]}},created:function(){this.dateValue=this.timeDefault,this.queryParams.beginTime=this.dateValue[0],this.queryParams.endTime=this.dateValue[1],this.getList()},methods:{handleDateChange:function(e){var t=e||["",""];this.queryParams.beginTime=t[0],this.queryParams.endTime=t[1]},handleReset:function(){this.dateValue=this.timeDefault,this.queryParams.beginTime=this.dateValue[0],this.queryParams.endTime=this.dateValue[1],this.queryParams.channelList=[],this.queryParams.departmentList=[],this.queryParams.authorList=[]},handleQuery:function(){this.getList()},getList:function(){var e=this;this.loading=!0;var t=Object(d["a"])(Object(d["a"])({},this.queryParams),{},{customerId:this.constQueryParams.customerId,productId:this.constQueryParams.productId});delete t.dateValue,Object(l["j"])(t).then((function(t){e.loading=!1,e.tableData=t.data||[]}))},getChannels:function(){var e=this;Object(o["Ib"])({with_special_channels:"topic"}).then((function(t){e.channelsList=t}))},getDepartment:function(){var e=this;Object(o["Kb"])({}).then((function(t){e.departmentList=t}))},handleImport:function(){Object(l["b"])("/api/statistics/kpi/statisticsByAuthor/export",{customerId:this.constQueryParams.customerId,productId:this.constQueryParams.productId})}}},D=v,w=Object(h["a"])(D,b,y,!1,null,null,null),P=w.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"statffDispatches"},[a("div",{staticClass:"search"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"发布时间:"}},[a("el-date-picker",{attrs:{clearable:!1,type:"daterange","range-separator":"~","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:e.handleDateChange},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}})],1),a("el-form-item",{attrs:{label:"发布栏目:",prop:"channelList"}},[a("el-cascader",{staticStyle:{width:"250px"},attrs:{filterable:"",options:e.channelsList,"collapse-tags":"",props:e.channelOption,clearable:""},model:{value:e.queryParams.channelList,callback:function(t){e.$set(e.queryParams,"channelList",t)},expression:"queryParams.channelList"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"warning",size:"mini"},on:{click:e.handleImport}},[e._v(" 导出 ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center","show-overflow-tooltip":"",width:"50"}}),a("el-table-column",{attrs:{label:"部门名称",align:"center",prop:"department_name"}}),a("el-table-column",{attrs:{label:"发布新闻数量",align:"center",prop:"num"}}),a("el-table-column",{attrs:{label:"点击量（真实）",align:"center",prop:"real_view"}})],1)],1)])},k=[],q={name:"department",props:{channelsList:{type:Array,default:function(){return[]}},departmentList:{type:Array,default:function(){return[]}},authorlList:{type:Array,default:function(){return[]}}},data:function(){var e=this;return{loading:!1,tableData:[],channelOption:{checkStrictly:!1,emitPath:!1,value:"id",label:"name",multiple:!0},departmentOption:{checkStrictly:!0,emitPath:!1,value:"id",label:"name",multiple:!0},dateValue:[],queryParams:{channelList:[],beginTime:"",endTime:""},pickerOptions:{onPick:function(t){e.pickerMinDate=new Date(t.minDate).getTime()},disabledDate:function(t){if(e.pickerMinDate){var a=316224e5,i=e.pickerMinDate+a,n=e.pickerMinDate-a;return t.getTime()>i||t.getTime()<n}}}}},computed:{constQueryParams:function(e){var t,a,i=e.$store.state.user.u_info,n=(null===i||void 0===i||null===(t=i.site)||void 0===t||null===(a=t.extra)||void 0===a?void 0:a.bigdata_settings)||{};return{productId:n.product_id||"",customerId:n.customer_id||""}},timeDefault:function(){var e=new Date,t=e.getTime()-2592e6,a=e.getTime(),i=new Date(t),n=new Date(a);return t=i.getFullYear()+"-"+(i.getMonth()+1>=10?i.getMonth()+1:"0"+(i.getMonth()+1))+"-"+(i.getDate()>=10?i.getDate():"0"+i.getDate()),a=n.getFullYear()+"-"+(n.getMonth()+1>=10?n.getMonth()+1:"0"+(n.getMonth()+1))+"-"+(n.getDate()>=10?n.getDate():"0"+n.getDate()),[t,a]}},created:function(){this.dateValue=this.timeDefault,this.queryParams.beginTime=this.dateValue[0],this.queryParams.endTime=this.dateValue[1],this.getList()},methods:{handleDateChange:function(e){var t=e||["",""];this.queryParams.beginTime=t[0],this.queryParams.endTime=t[1]},handleReset:function(){this.dateValue=this.timeDefault,this.queryParams.beginTime=this.dateValue[0],this.queryParams.endTime=this.dateValue[1],this.queryParams.channelList=[]},handleQuery:function(){this.getList()},getList:function(){var e=this;this.loading=!0;var t=Object(d["a"])(Object(d["a"])({},this.queryParams),{},{customerId:this.constQueryParams.customerId,productId:this.constQueryParams.productId});delete t.dateValue,Object(l["k"])(t).then((function(t){console.log("部门",t.data),e.loading=!1,e.tableData=t.data||[]}))},handleImport:function(){var e=Object(d["a"])(Object(d["a"])({},this.queryParams),{},{customerId:this.constQueryParams.customerId,productId:this.constQueryParams.productId});Object(l["c"])("/api/statistics/kpi/statisticsByDepartment/export",this.removePropertyOfNullFor0(e))}}},I=q,x=Object(h["a"])(I,L,k,!1,null,null,null),O=x.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"statffDispatches"},[a("div",{staticClass:"search"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"发布时间:"}},[a("el-date-picker",{attrs:{clearable:!1,type:"daterange","range-separator":"~","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:e.handleDateChange},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}})],1),a("el-form-item",{attrs:{label:"发布栏目:",prop:"channelList"}},[a("el-cascader",{staticStyle:{width:"250px"},attrs:{filterable:"",options:e.channelsList,"collapse-tags":"",props:e.channelOption,clearable:""},model:{value:e.queryParams.channelList,callback:function(t){e.$set(e.queryParams,"channelList",t)},expression:"queryParams.channelList"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"warning",size:"mini"},on:{click:e.handleImport}},[e._v(" 导出 ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center","show-overflow-tooltip":"",width:"50"}}),a("el-table-column",{attrs:{label:"来源名称",align:"center",prop:"sourceName"}}),a("el-table-column",{attrs:{label:"发布新闻数量",align:"center",prop:"num"}}),a("el-table-column",{attrs:{label:"点击量（真实）",align:"center",prop:"realView"}})],1)],1)])},_=[],V={name:"sourceData",props:{channelsList:{type:Array,default:function(){return[]}},departmentList:{type:Array,default:function(){return[]}},authorlList:{type:Array,default:function(){return[]}}},data:function(){var e=this;return{loading:!1,tableData:[],channelOption:{checkStrictly:!1,emitPath:!1,value:"id",label:"name",multiple:!0},departmentOption:{checkStrictly:!0,emitPath:!1,value:"id",label:"name",multiple:!0},dateValue:[],queryParams:{channelList:[],beginTime:"",endTime:""},pickerOptions:{onPick:function(t){e.pickerMinDate=new Date(t.minDate).getTime()},disabledDate:function(t){if(e.pickerMinDate){var a=316224e5,i=e.pickerMinDate+a,n=e.pickerMinDate-a;return t.getTime()>i||t.getTime()<n}}}}},computed:{constQueryParams:function(e){var t,a,i=e.$store.state.user.u_info,n=(null===i||void 0===i||null===(t=i.site)||void 0===t||null===(a=t.extra)||void 0===a?void 0:a.bigdata_settings)||{};return{productId:n.product_id||"",customerId:n.customer_id||""}},timeDefault:function(){var e=new Date,t=e.getTime()-2592e6,a=e.getTime(),i=new Date(t),n=new Date(a);return t=i.getFullYear()+"-"+(i.getMonth()+1>=10?i.getMonth()+1:"0"+(i.getMonth()+1))+"-"+(i.getDate()>=10?i.getDate():"0"+i.getDate()),a=n.getFullYear()+"-"+(n.getMonth()+1>=10?n.getMonth()+1:"0"+(n.getMonth()+1))+"-"+(n.getDate()>=10?n.getDate():"0"+n.getDate()),[t,a]}},created:function(){this.dateValue=this.timeDefault,this.queryParams.beginTime=this.dateValue[0],this.queryParams.endTime=this.dateValue[1],this.getList()},methods:{handleDateChange:function(e){var t=e||["",""];this.queryParams.beginTime=t[0],this.queryParams.endTime=t[1]},handleReset:function(){this.dateValue=this.timeDefault,this.queryParams.beginTime=this.dateValue[0],this.queryParams.endTime=this.dateValue[1],this.queryParams.channelList=[]},handleQuery:function(){this.getList()},getList:function(){var e=this;this.loading=!0;var t=Object(d["a"])(Object(d["a"])({},this.queryParams),{},{customerId:this.constQueryParams.customerId,productId:this.constQueryParams.productId});delete t.dateValue,Object(l["l"])(t).then((function(t){e.loading=!1,e.tableData=t.data||[]}))},handleImport:function(){var e=Object(d["a"])(Object(d["a"])({},this.queryParams),{},{customerId:this.constQueryParams.customerId,productId:this.constQueryParams.productId});Object(l["e"])("/api/statistics/kpi/source/statistics/export",e)}}},M=V,N=Object(h["a"])(M,T,_,!1,null,null,null),j=N.exports,S={components:{newsData:f,StatffDispatches:P,department:O,sourceData:j},data:function(){return{activeName:"department",dataList:[],channelsList:[],authorlList:[],department:{queryParams:{beginTime:"",endTime:"",Date:""},loading:!1,tableData:[],selection:[]},person:{queryParams:{beginTime:"",endTime:"",Date:"",departmentId:""},loading:!1,tableData:[],selection:[]}}},computed:{site:function(e){var t,a,i=e.$store.state.user.u_info,n=(null===i||void 0===i||null===(t=i.site)||void 0===t||null===(a=t.extra)||void 0===a?void 0:a.bigdata_settings)||{};return{productId:n.product_id||"",customerId:n.customer_id||""}}},methods:{handleDateChange:function(e,t){var a=e||["",""];this[t].queryParams.beginTime=a[0],this[t].queryParams.endTime=a[1]},handleReset:function(e){this.resetForm(e)},handleQuery:function(e){this["department"===e?"getDepartmentList":"getPersonLists"]()},handleImport:function(){Object(l["a"])("/api/statistics/items/kpiStatistics/export",{customerId:this.site.customerId,productId:this.site.productId})},getDepart:function(){var e=this;Object(o["Kb"])().then((function(t){e.dataList=t}))},getChannelsList:function(){var e=this;Object(o["Ib"])({with_special_channels:"topic"}).then((function(t){e.channelsList=t}))},getUersList:function(){var e=this,t={model:"User",page:1,pageSize:999999};Object(o["cc"])(t).then((function(t){e.authorlList=t.data}))}},created:function(){this.getDepart(),this.getChannelsList(),this.getUersList(),this.site.productId&&this.site.customerId||this.$message("请联系管理员配置productId和customerId参数")}},$=S,C=(a("1f41"),Object(h["a"])($,r,s,!1,null,"863da42e",null)),Q=C.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-statistics-detail"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"时间区间:",prop:"dateValue"}},[a("el-date-picker",{attrs:{size:"small",type:"daterange",align:"right","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.handleDateChange},model:{value:e.queryParams.dateValue,callback:function(t){e.$set(e.queryParams,"dateValue",t)},expression:"queryParams.dateValue"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"warning",size:"mini"},on:{click:e.handleImport}},[e._v(" 导出 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"success",size:"mini"},on:{click:e.handleReturn}},[e._v(" 返回上一级 ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"稿件名称",align:"center",prop:"title"}}),a("el-table-column",{attrs:{label:"发稿人",align:"center",prop:"auhtorName"}}),a("el-table-column",{attrs:{label:"原作者",align:"center",prop:"extra.author"}}),a("el-table-column",{attrs:{label:"所属部门",align:"center",prop:"departmentName"}}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createdAt"}}),a("el-table-column",{attrs:{label:"发稿时间",align:"center",prop:"publishedAt"}}),a("el-table-column",{attrs:{label:"阅读量（真实）",align:"center",prop:"realView"}}),a("el-table-column",{attrs:{label:"阅读量（修正）",align:"center",prop:"baseView"}}),a("el-table-column",{attrs:{label:"链接",align:"center",prop:"extra.url"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)},F=[],R=(a("a9e3"),a("d81d"),{props:{id:[Number,String],authorId:[Number,String]},data:function(){return{queryParams:{departmentId:this.id,authorId:this.authorId,beginTime:"",endTime:"",dateValue:"",pageSize:10,pageNum:1},loading:!1,tableData:[],total:0}},computed:{site:function(e){var t,a,i=e.$store.state.user.u_info,n=(null===i||void 0===i||null===(t=i.site)||void 0===t||null===(a=t.extra)||void 0===a?void 0:a.bigdata_settings)||{};return{productId:n.product_id||"",customerId:n.customer_id||""}}},methods:{handleDateChange:function(e){var t=e||["",""];this.queryParams.beginTime=t[0],this.queryParams.endTime=t[1]},handleReset:function(){Object.assign(this.queryParams,{beginTime:"",endTime:"",page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},handleReturn:function(){this.$emit("handleReturn")},handleImport:function(){var e=Object(d["a"])(Object(d["a"])({},this.queryParams),{},{customerId:this.site.customerId,productId:this.site.productId});delete e.dateValue,Object(l["a"])("/api/statistics/items/pageKpiStatistics/export",this.removePropertyOfNullFor0(e))},getList:function(){var e=this;this.loading=!0,this.tableData=[];var t=Object(d["a"])(Object(d["a"])({},this.queryParams),{},{customerId:this.site.customerId,productId:this.site.productId});delete t.dateValue,Object(l["m"])(this.removePropertyOfNullFor0(t)).then((function(t){e.loading=!1,e.total=t.total,e.tableData=(t.data||[]).map((function(e){return e.extra=JSON.parse(e.extra),Object(d["a"])({},e)}))}))}},created:function(){this.getList()}}),A=R,Y=(a("d7474"),Object(h["a"])(A,z,F,!1,null,null,null)),E=Y.exports,J={name:"Statistics",components:{Lists:Q,Detail:E},data:function(){return{exclude:["Detail"],component:"Lists",id:"",authorId:""}},methods:{handleReturn:function(){this.component="Lists"},watchDetail:function(e,t){this.id=e,this.authorId=t,this.component="Detail"}}},K=J,U=(a("d39c"),Object(h["a"])(K,i,n,!1,null,"61fdf637",null));t["default"]=U.exports},d39c:function(e,t,a){"use strict";a("fbe9")},d7474:function(e,t,a){"use strict";a("48b0")},fbe9:function(e,t,a){}}]);