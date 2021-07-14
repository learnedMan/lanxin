<template>
<!-- 投票 -->
    <div style="height:auto;padding:30px;">
        <iframe style="width:100%;height:800px;" frameborder="0" scrolling="no" :src="src" ref="iframe"></iframe>
    </div>
</template>
<script>
export default {
    data () {
        return {
            src:this.VUE_APP_XLY_API+'/vote/index'
        }
    }
}
</script>