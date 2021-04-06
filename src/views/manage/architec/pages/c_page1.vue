<template>
    <div class="childpage1">
        <el-dialog
            :close-on-click-modal="false"
            append-to-body
            ref="indialog"
            title="编辑审核人"
            :visible.sync="dialogVisible"
            width="800px">
            <el-button @click="addtransfer" type="primary" size="mini">增加一级</el-button>
            <el-button @click="deltransfer" type="primary" size="mini">删除一级</el-button>
            <template v-for="(item,index) in listnum">
                <el-transfer 
                @change="((val)=>{transferchange(val,index)})"
                style="display: flex;justify-content: center;align-items: center;margin-bottom:20px;"
                filterable
                :titles="['用户列表', '审核人列表']"
                :filter-method="filterMethod"
                filter-placeholder="请输入审核人姓名" 
                v-model="listarr[index]" 
                :data="userdata"></el-transfer>
            </template>

            

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-form-item label-width="150px" label="多级审核:" prop="id">
            <el-button @click="edituser" type="primary" size="mini">编辑审核人</el-button>
        </el-form-item>

        <el-form-item label-width="150px" label="显示更多:" prop="id">
            <el-radio-group v-model="c_form.id">
                <el-radio :label="2">显示</el-radio>
                <el-radio :label="0">不显示</el-radio>
            </el-radio-group>
        </el-form-item>
        
        <el-form-item label-width="150px" label="显示标题:" prop="id">
            <el-radio-group v-model="c_form.id">
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
            listarr:[]
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
        },
        edituser(){
            this.dialogVisible = true;
        },
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        },
        transferchange(index,res){
            console.log(index)
            console.log(res)
        },
        getuserfn(){
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
