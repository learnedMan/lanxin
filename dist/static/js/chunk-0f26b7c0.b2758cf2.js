(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f26b7c0"],{"27b6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-watch-column"},[a("el-form",{ref:"queryForm",attrs:{inline:!0}},[a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"success",size:"mini"},on:{click:e.handleReturn}},[e._v(" 返回上一级 ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"新闻ID",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"新闻名称",align:"center",width:"140",prop:"title","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticClass:"watch-detail-btn",attrs:{type:"text"},on:{click:function(a){return e.handleWatch(t.row)}}},[e._v(e._s(t.row.title))])]}}])}),a("el-table-column",{attrs:{label:"新闻类型",align:"center",prop:"type"}}),a("el-table-column",{attrs:{label:"栏目ID",align:"center",prop:"channel_id","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"栏目名称",align:"center",prop:"channel_name","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"评论控制",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"small"},on:{change:function(a){return e.changeCommentAndShare(t.row,"allow_comment")}},model:{value:t.row.allow_comment,callback:function(a){e.$set(t.row,"allow_comment",a)},expression:"scope.row.allow_comment"}},e._l(e.commentOption,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),a("el-table-column",{attrs:{label:"分享控制",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"small"},on:{change:function(a){return e.changeCommentAndShare(t.row,"allow_share")}},model:{value:t.row.allow_share,callback:function(a){e.$set(t.row,"allow_share",a)},expression:"scope.row.allow_share"}},e._l(e.shareOption,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"small"},on:{change:function(a){return e.changeStatus(t.row)}},model:{value:t.row.status,callback:function(a){e.$set(t.row,"status",a)},expression:"scope.row.status"}},e._l(e.statusOptions.filter((function(e){return""!==e.value})),(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"380"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"verify-table-action"},[a("Iconbutton",{attrs:{icontype:"shjd",label:"审核进度"},on:{fatherMethod:function(a){return e.watchProgress(t.row)}}}),a("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(a){return e.handleListDelete(t.row)}}}),1===t.row.status?a("Iconbutton",{attrs:{icontype:"ckxq",label:"查看详情"},on:{fatherMethod:function(a){return e.handleWatch(t.row)}}}):e._e(),1!==t.row.status?a("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(a){return e.handleEdit(t.row)}}}):e._e(),a("Iconbutton",{attrs:{icontype:"czjl",label:"操作记录"},on:{fatherMethod:function(a){return e.handleHistory(t.row)}}})],1)]}}])})],1),a("el-dialog",{attrs:{width:"400px",title:"审批进度",visible:e.approval.show},on:{"update:visible":function(t){return e.$set(e.approval,"show",t)}}},[a("el-steps",{attrs:{direction:"vertical",active:e.approval.active,space:100}},e._l(e.approval.lists,(function(t,n){return a("el-step",{key:t.sort,attrs:{title:t.title,description:t.description}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("div",[e._v(e._s(0===n?"提交人":"审核人")+": "+e._s(t.name))]),t.remark?a("p",[e._v("拒绝原因: "+e._s(t.remark))]):e._e()])])})),1)],1),e.dialog.show?a("el-dialog",{attrs:{width:"1200px",title:e.dialog.title,top:"20px",visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("scripts-details",{staticStyle:{padding:"10px",margin:"0"},attrs:{typeDetails:"news",id:e.dialog.id,visible:e.dialog.show,disabledNews:e.dialog.disabled},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)},refresh:e.refresh}})],1):e._e(),e.history.show?a("el-dialog",{attrs:{width:"700px",title:"操作记录",visible:e.history.show},on:{"update:visible":function(t){return e.$set(e.history,"show",t)}}},[a("version-history",{attrs:{id:e.history.id,type:"news"}})],1):e._e()],1)},i=[],l=a("46d3"),o=a("1c03"),s=(a("2eeb"),a("053b"),a("e18c"),a("4194"),a("3466"),a("e35a"),a("0d7a"),a("9302"),a("dbb3"),a("b130"),a("90aa"),a("1c2e"),a("b4fb"),a("cc48")),r=a("0fea"),u=a("1d6e"),c=a("9d3e"),d=a("5fe8"),p={components:{newDetail:u["a"],scriptsDetails:d["default"],VersionHistory:c["a"]},data:function(){return{statusOptions:[{label:"全部",value:""},{label:"待审核",value:0},{label:"已上线",value:1},{label:"已下线",value:2},{label:"待定时发布",value:5}],tableData:[],typeOptions:[{label:"全部",value:""},{label:"新闻",value:"news"},{label:"图集",value:"album"},{label:"视频",value:"video"},{label:"外链",value:"outer_link"}],commentOption:[{label:"先审后发",value:"0"},{label:"先发后审",value:"1"},{label:"禁止评论",value:"2"}],shareOption:[{label:"允许",value:"1"},{label:"不允许",value:"2"}],loading:!1,approval:{show:!1,active:"",lists:[]},dialog:{title:"查看详情",show:!1,id:"",disabled:!1},history:{show:!1,id:""},userLists:[]}},computed:{visitedViews:function(){return this.$store.state.tagsView.visitedViews}},created:function(){this.getList(),this.getUserList()},methods:{getUserList:function(){var e=this;Object(r["Mb"])({model:"User",page:1,pageSize:9999}).then((function(t){var a=t.data;e.userLists=a.map((function(e){var t=e.id,a=e.name;return{id:t,name:a}}))}))},getList:function(){var e=this,t=this.$route.query.id;this.loading=!0,Object(s["z"])(t).then((function(t){e.tableData=(t.news||[]).map((function(a){var n,i=e.typeOptions.find((function(e){return a.type===e.value})),l=e.statusOptions.find((function(e){return a.status===e.value}));return Object(o["a"])(Object(o["a"])({},a),{},{channel_name:(null===(n=(t.channel||[]).find((function(e){return e.id===a.channel_id})))||void 0===n?void 0:n.name)||"",type:i&&i.label||"",statusLabel:l&&l.label||"",allow_comment:a.extra.allow_comment,allow_share:a.extra.allow_share})}))})).finally((function(){e.loading=!1}))},handleReturn:function(){var e=this.$route.fullPath,t=this.visitedViews.find((function(t){return t.fullPath===e})),a=this.$route.query.redirect,n=void 0===a?"All-media":a;this.$router.push({name:n}),this.$store.dispatch("tagsView/delView",t)},handleListDelete:function(e){var t=this,a=e.id;this.$confirm("此操作将永久删除这条新闻, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["v"])(a).then((function(){t.$message({message:"删除成功",type:"success"}),t.getList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},changeCommentAndShare:function(e,t){var a=this,n=e.id;Object(s["k"])(n,{extra:Object(l["a"])({},t,e[t])}).then((function(e){var t=e.message,n=e.statu_code;n?a.$message({message:t,type:"error"}):a.$message({message:"切换成功!",type:"success"}),a.getList()}))},watchProgress:function(e){var t=this,a=e.extra.multi_review||[];if(0===a.length)return this.$message.warning("暂无审批进度");var n=[{label:"待审核",value:0},{label:"已审核",value:1},{label:"已拒绝",value:2}];this.approval={show:!0,active:a.findIndex((function(e){return 1===e.status||2===e.status}))+1,lists:a.map((function(e){var a,i=e.reviewer_ids.split(",");return Object(o["a"])(Object(o["a"])({},e),{},{name:t.userLists.filter((function(t){return e.user_id?t.id===e.user_id:i.includes(t.id.toString())})).map((function(e){return e.name})).join(),title:"".concat(null===(a=n.find((function(t){return e.status===t.value})))||void 0===a?void 0:a.label,"   ").concat(e.time||"")})}))}},handleWatch:function(e){var t=e.id;console.log("id",t),this.dialog={title:"查看详情",show:!0,id:t,disabled:!0}},handleEdit:function(e){var t=e.id;this.dialog={title:"编辑详情",show:!0,id:t,disabled:!1}},changeStatus:function(e){var t=this,a=e.id,n=e.status;Object(s["m"])({ids:a,status:n}).then((function(){t.$message({message:"修改成功",type:"success"}),t.getList()}))},refresh:function(){this.getList()},handleHistory:function(e){var t=e.id;this.history={show:!0,id:t}}}},h=p,f=a("4ac2"),b=Object(f["a"])(h,n,i,!1,null,"6a652900",null);t["default"]=b.exports},5857:function(e,t,a){},"9d3e":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-version-history"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"created_at",label:"日期",align:"center"}}),a("el-table-column",{attrs:{prop:"user.name",label:"姓名","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"operation",label:"操作记录","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleWatch(t.row)}}},[e._v(" 查看详情 ")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getHistory}}),e.dialog.show?a("el-dialog",{attrs:{width:"1200px",top:"20px",title:e.dialog.title,visible:e.dialog.show,"append-to-body":""},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("scripts-details",{staticStyle:{padding:"10px",margin:"0"},attrs:{id:e.id,visible:e.dialog.show,typeDetails:e.type,"fetch-suggestions":e.fetchSuggestions,disabled:!0,disabledNews:!0},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}})],1):e._e()],1)},i=[],l=a("1c03"),o=(a("513c"),a("e18c"),a("cc48")),s=a("1d6e"),r=a("5fe8"),u={name:"versionHistory",components:{NewDetail:s["a"],scriptsDetails:r["default"]},props:{type:{type:String,default:"script"},id:{type:Number,required:!0}},data:function(){return{tableData:[],total:0,loading:!1,queryParams:{page:1,pageSize:10},dialog:{title:"查看详情",show:!1,id:""},fetchSuggestions:function(){return new Promise((function(e){return e()}))}}},methods:{getHistory:function(){var e=this,t=this.id,a=this.type;this.loading=!0,Object(o["F"])(Object(l["a"])({item_type:a,item_id:t},this.queryParams)).then((function(t){var a=t.data,n=t.total;e.tableData=a,e.total=n})).finally((function(){e.loading=!1}))},handleWatch:function(e){var t=e.extra;this.fetchSuggestions=function(){return new Promise((function(e){e(t.item)}))},this.dialog={title:"查看详情",show:!0}}},created:function(){this.getHistory()}},c=u,d=(a("9e1d"),a("4ac2")),p=Object(d["a"])(c,n,i,!1,null,"c9ac419c",null);t["a"]=p.exports},"9e1d":function(e,t,a){"use strict";a("5857")}}]);