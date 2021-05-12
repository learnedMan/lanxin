<template>
    <div class="childpage1" >
        <!-- 审核人弹窗 -->
        <el-dialog
            :close-on-click-modal="false"
            append-to-body
            ref="indialog"
            title="编辑审核人"
            :visible.sync="dialogVisible"
            width="800px">
            <div style="margin-bottom:20px;">
                <el-button @click="addtransfer" type="primary" size="mini">增加一级审核人</el-button>
                <el-button :disabled="listnum<1" @click="deltransfer" type="primary" size="mini">删除一级审核人</el-button>
            </div>
            <template v-for="(item,index) in listnum">
                <h3>第{{index+1}}级审核人：</h3>
                <el-transfer 
                style="display: flex;justify-content: center;align-items: center;margin-bottom:20px;"
                :titles="['用户列表', '审核人列表']"
                filterable
                :filter-method="filterMethod"
                filter-placeholder="请输入审核人姓名" 
                v-model="c_form.extra.multi_review[index]" 
                :data="userdata"></el-transfer>
            </template>

            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="suretransfer">确 定</el-button>
            </span>
        </el-dialog>

        <el-form-item label-width="150px" label="多级审核:" prop="extra.defaultform">
            <el-button @click="edituser" type="primary" size="mini">编辑审核人</el-button>

            <div v-for="(item,index) in listshowarr" :key="index">
                <h4><span style="color:#000;">第{{index+1}}级审核人：</span>{{item}}</h4>
            </div>

        </el-form-item>

        <!-- 显示更多 -->
        <el-form-item label-width="150px" label="显示更多:" prop="extra.display_more">
            <el-radio-group v-model="c_form.extra.display_more">
                <el-radio :label="1">显示</el-radio>
                <el-radio :label="0">不显示</el-radio>
            </el-radio-group>
        </el-form-item>
        <!-- 显示标题 -->
        <el-form-item label-width="150px" label="显示标题:" prop="extra.display_title">
            <el-radio-group v-model="c_form.extra.display_title">
                <el-radio :label="1">显示</el-radio>
                <el-radio :label="0">不显示</el-radio>
            </el-radio-group>
        </el-form-item>

    </div>
</template>

<script>
export default({
    name:'ChildPage1',
    props: {
        value: {
            type: Object,
            default: {}
        },
        userdata: {
            type: Array,
            default: {}
        }
    },
    data () {
        return {
            dialogVisible: false,
            listnum:1,
            listshowarr:[],
            p_flag:false
        }
    },
    created () {
        // this.p_flag = true;
    },
    // watch: {
    //     c_form
    // },
    computed:{
        c_form: {
            get:function() {
                // this.p_flag = true;
                return this.value; 
            },
            set:function(value) {
                this.$emit('input', value);
            }
        }
    },
    methods: {
        // 加一级
        addtransfer(){
            this.listnum++
            this.c_form.extra.multi_review.length =  this.listnum
            for(var i=0;i<this.c_form.extra.multi_review.length;i++){
                if(!this.c_form.extra.multi_review[i]){
                    this.c_form.extra.multi_review[i] = [];
                }
            }
            console.log(this.c_form.extra.multi_review)
        },
        // 删除一级
        deltransfer(){
            if(this.listnum>=1){
                this.listnum--
            }else{
                this.$message({
                  message: '已经没有了',
                  type: 'warning'
                });
            }
            this.c_form.extra.multi_review.length =  this.listnum
            for(var i=0;i<this.c_form.extra.multi_review.length;i++){
                if(!this.c_form.extra.multi_review[i]){
                    this.c_form.extra.multi_review[i] = [];
                }
            }
            console.log(this.c_form.extra.multi_review)
        },
        // 编辑审核人
        edituser(){
            this.dialogVisible = true;
        },
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        },
        // 确定审核人
        suretransfer(){
            this.dialogVisible = false;
            this.listshowarr.length = this.c_form.extra.multi_review.length;
            this.showtxt()
        },
        showtxt(){
            // console.log(this.userdata)
            // this.listshowarr = [];
            for(var i=0;i<this.c_form.extra.multi_review.length;i++){
                this.listshowarr[i] = [];
            }
            for(var i=0;i<this.c_form.extra.multi_review.length;i++){//外数组
                for(var j=0;j<this.c_form.extra.multi_review[i].length;j++){//内数组
                    for(var k=0;k<this.userdata.length;k++){
                        if(this.c_form.extra.multi_review[i][j]==this.userdata[k].key){
                            this.listshowarr[i][j] = this.userdata[k].label
                        }
                    }
                }
            }
            this.$forceUpdate()
            // console.log(this.listshowarr)
        },
    }
})
</script>

<style scoped lang="scss">

</style>
