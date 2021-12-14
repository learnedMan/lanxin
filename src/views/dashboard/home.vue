<template>
    <div class="home">
        <div class="home-top">
            <el-row :gutter="20">
                <el-col :span="16">
                    <div class="bg-purple">
                        <div class="real-data">
                            <div class="title">实时数据</div>
                            <div class="date">更新时间2021-09-13 11:28</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="bg-purple">右边</div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>
<style lang="scss" scoped>
    .home{
        padding: 16px;
        height: 600px;
        background: #F7F8FA;
        .home-top{
            height: 168px;
        }
        .bg-purple{
            border: 1px solid;
            background: #FFFFFF;
            height: 168px;
            padding: 16px 60px 16px 16px;
            box-sizing: border-box;
            .real-data{
                .title{
                    font-size: 16px;
                    font-family: PingFang-SC-Semibold, PingFang-SC;
                    font-weight: 600;
                    color: #3A3C40;
                    line-height: 22px;
                }
            }
        }
    }
</style>