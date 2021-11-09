<template>
<!-- 报名 -->
    <div style="height:auto;padding:30px;">
        <iframe style="width:100%;height:800px;" frameborder="0" scrolling="no" :src="src" ref="iframe"></iframe>
    </div>
</template>
<script>
export default {
    data () {
        return {
            src: this.VUE_APP_XLY_API+'/events/index'
        }
    },
    methods: {
        xlyReload () {
            let fullPath = "/operaManage/events"
            this.$router.replace({
            path: '/redirect' + fullPath
            })
         },
    },
    mounted() {
        // 将方法绑定到window下面，提供给外部调用
        let me = this;
        window['xlyReload'] = () => {
            me.xlyReload()
        }
	},
}
</script>