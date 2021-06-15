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
            src:'http://dev-a.cztvcloud.com/events/index'
        }
    }
}
</script>