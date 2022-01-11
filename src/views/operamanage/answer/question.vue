<template>
<!-- 题库 -->
    <div style="height:auto;padding:30px;">
        <iframe style="width:100%;height:800px;" id="iframeConcent" frameborder="0" scrolling="no" :src="url" ref="iframe"></iframe>
    </div>
</template>
<script>
export default {
    data () {
        return {
            src:this.VUE_APP_XLY_API+'/question_bank/index'
        }
    },
    computed: {
        url() {
            let token = sessionStorage.getItem('token')
            let arr = token.split(' ')
            return this.VUE_APP_XLY_API+'/question_bank/index?token=' + arr[1]
        }
    },
    methods: {
        xlyReload () {
            let fullPath = "/operaManage/answer/question"
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