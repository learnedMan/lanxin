<template>
    <div class="page_b">
        <div class="pbox" style="display:flex;padding-top:20px;">
            <el-tabs class="left" tab-position="left" style="height:500px;margin-right:20px;">
                <el-tab-pane label="用户管理"></el-tab-pane>
                <el-tab-pane label="配置管理"></el-tab-pane>
                <el-tab-pane label="角色管理"></el-tab-pane>
                <el-tab-pane label="定时任务补偿"></el-tab-pane>
                <el-tab-pane label="用户管理"></el-tab-pane>
                <el-tab-pane label="配置管理"></el-tab-pane>
                <el-tab-pane label="角色管理"></el-tab-pane>
            </el-tabs>
            <div class="right">
                <div class="top" style="display:inline;">
                    <el-date-picker
                        v-model="date"
                        type="date"
                        :picker-options="pickerOptions"
                        placeholder="选择日期">
                    </el-date-picker>
                </div>

                <el-radio-group class="c_dategroup" v-model="c_date" style="margin-left:20px;">
                    <el-radio-button label="2.8"></el-radio-button>
                    <el-radio-button label="2.9"></el-radio-button>
                    <el-radio-button label="2.10"></el-radio-button>
                    <el-radio-button label="2.11"></el-radio-button>
                </el-radio-group>
            </div>
        </div>
        
        
        

    </div>
</template>

<script>
export default {
    name:"page_b",
    data () {
        return {
            date:'',
            today:new Date(),
            pickerOptions:{
                disabledDate(time) {
                    return time.getTime()-3600 * 1000 * 24 * 7 > Date.now();
                },
            },
            c_date:''
        }
    },
    created () {
        // console.log(Date.now())
    }
}
</script>
<style lang="scss" scoped>
</style>