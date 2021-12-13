<template>
<!-- 稿费 -->
    <div style="height:auto;padding:30px;">
        <iframe style="width:100%;height:800px;" frameborder="0" scrolling="no" :src="src" ref="iframe"></iframe>
    </div>
</template>
<script>
export default {
    data () {
        return {
            src:'https://a-zrtghd.cztvcloud.com:3001/#/sent_news_list/all_sent_news'
        }
    },
    // methods: {
    //     xlyReload () {
    //         let fullPath = "/operaManage/vote"
    //         this.$router.replace({
    //         path: '/redirect' + fullPath
    //         })
    //      },
    // },
    // mounted() {
    //     // 将方法绑定到window下面，提供给外部调用
    //     let me = this;
    //     window['xlyReload'] = () => {
    //         me.xlyReload()
    //     }
	// },
}
</script>