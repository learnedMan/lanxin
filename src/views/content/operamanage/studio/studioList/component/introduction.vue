<template>
    <div class="introduction">
        <div class="btn">
           <el-button v-points = "1500" type="primary" size="small"  @click="save" >保存</el-button>
        </div>
         <editor v-model="concent" />
    </div>
</template>
<script>
import Editor from '@/components/editor'
export default {
    name: 'introduction',
    components: {
        Editor
    },
    data() {
        return{
            concent: ''
        }
    },
    methods: {
        save() {
            console.log('concent',this.concent)
        }
    }
}
</script>
<style lang="scss" scoped>
 .introduction{
    width: 100%;
    .btn{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
    }
 }
</style>