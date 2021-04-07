<template>
    <div class="childpage1">
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
                @change="((val)=>{transferchange(val,index)})"
                style="display: flex;justify-content: center;align-items: center;margin-bottom:20px;"
                :titles="['用户列表', '审核人列表']"
                filterable
                :filter-method="filterMethod"
                filter-placeholder="请输入审核人姓名" 
                v-model="listarr[index]" 
                :data="userdata"></el-transfer>
            </template>

            <span slot="footer" class="dialog-footer">
                <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
                <el-button type="primary" @click="suretransfer">确 定</el-button>
            </span>
        </el-dialog>
        <el-form-item label-width="150px" label="多级审核:" prop="extra.defaultform">
            <el-button @click="edituser" type="primary" size="mini">编辑审核人</el-button>

            <div v-for="(item,index) in listshowarr" :key="index">
                <h4><span style="color:#000;">第{{index+1}}级审核人：</span>{{item}}</h4>
            </div>

        </el-form-item>

        <el-form-item label-width="150px" label="显示更多:" prop="extra.display_more">
            <el-radio-group v-model="c_form.extra.display_more">
                <el-radio :label="2">显示</el-radio>
                <el-radio :label="0">不显示</el-radio>
            </el-radio-group>
        </el-form-item>
        
        <el-form-item label-width="150px" label="显示标题:" prop="extra.display_title">
            <el-radio-group v-model="c_form.extra.display_title">
                <el-radio :label="2">显示</el-radio>
                <el-radio :label="0">不显示</el-radio>
            </el-radio-group>
        </el-form-item>

    </div>
</template>

<script>
import { 
  getUser} from '@/api/manage'
export default({
    name:'ChildPage1',
    props: {
        value: {
            type: Object,
            default: {}
        }
    },
    data () {
        return {
            dialogVisible: false,
            userdata:[],
            listnum:1,
            listarr:[],
            listshowarr:[]
        }
    },
    created () {
        this.getuserfn();
    },
    computed:{
        c_form: {
            get:function() {
                return this.value; 
            },
            set:function(value) {
                this.$emit('input', value);
            }
        }
    },
    methods: {
        addtransfer(){
            this.listnum++
            this.listarr.length =  this.listnum
            for(var i=0;i<this.listarr.length;i++){
                if(!this.listarr[i]){
                    this.listarr[i] = [];
                }
            }
            console.log(this.listarr)
        },
        deltransfer(){
            if(this.listnum>=1){
                this.listnum--
            }else{
                this.$message({
                  message: '已经没有了',
                  type: 'warning'
                });
            }
            this.listarr.length =  this.listnum
            for(var i=0;i<this.listarr.length;i++){
                if(!this.listarr[i]){
                    this.listarr[i] = [];
                }
            }
            console.log(this.listarr)
        },
        edituser(){
            this.dialogVisible = true;
        },
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        },
        transferchange(index,res){
            // console.log(index)
            // console.log(res)
            // console.log(this.listarr)
        },
        suretransfer(){
            // console.log(this.listarr);
            this.dialogVisible = false;
            this.listshowarr.length = this.listarr.length;
            for(var i=0;i<this.listshowarr.length;i++){
                this.listshowarr[i] = [];
            }
            for(var i=0;i<this.listarr.length;i++){//外数组
                for(var j=0;j<this.listarr[i].length;j++){//内数组
                    for(var k=0;k<this.userdata.length;k++){
                        if(this.listarr[i][j]==this.userdata[k].key){
                            this.listshowarr[i][j] = this.userdata[k].label
                        }
                    }
                }
            }
            // console.log(this.userdata)
            // console.log(this.listshowarr)
        },
        getuserfn(){//获取用户列表
            var data={};
            data.model = 'User';
            var queryParams = {
                page: 1,
                pageSize: 999
            }
            getUser(Object.assign(data,queryParams)).then(response => {
                // console.log(response)
                response.data.forEach((item, index) => {
                    this.userdata.push({
                        label: item.name,
                        key: item.id,
                        pinyin: item.name
                    });
                });
            })
        }
    }
})
</script>

<style scoped lang="scss">

</style>
