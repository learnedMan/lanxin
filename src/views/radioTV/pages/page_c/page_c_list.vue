<template>
    <div class="page_c_list">
        <el-button type="primary" @click="back" size="mini">返回上一级</el-button>
        <el-table
            style="margin-top:20px;"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            border 
            v-loading="loading"
            :data="dataList">
            <el-table-column label="id" align="center" prop="script.id" :show-overflow-tooltip="true" />
            <el-table-column label="节目名称" align="center" prop="script.title" :show-overflow-tooltip="true" />
            <el-table-column label="所属节目" align="center" prop="channel.name" :show-overflow-tooltip="true" />
            <el-table-column 
                label="状态" 
                align="center" 
                prop="script.status" 
                :show-overflow-tooltip="true" >
                <template slot-scope="scope">
                <el-select disabled @change="statuschange(scope.row)" v-model="scope.row.script.status" placeholder="请选择">
                    <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                </template>
            </el-table-column>
            <el-table-column label="创建时间" align="center" prop="script.created_at" :show-overflow-tooltip="true" />
            <el-table-column width="200px" label="操作" align="center">
                <template slot-scope="scope">
                <!-- <el-button
                    size="mini"
                    type="text"
                    icon="el-icon-edit"
                    style="color:#E6A23C;"
                    @click="editdata(scope.row)">修改</el-button> -->
                    <Iconbutton icontype="sc" label="删除" @fatherMethod="deldata(scope.row)"></Iconbutton>
                <!-- <el-button
                    size="mini"
                    type="text"
                    icon="el-icon-delete"
                    style="color: #f56c6c"
                    @click="deldata(scope.row)"
                    >删除</el-button> -->
                </template>
            </el-table-column>
        </el-table>
        <!-- 
            标清<450
            高清<800
            超清<450
        -->
        <el-dialog
            width="740px"
            :title="dialogTitle"
            :show-close= false
            :close-on-press-escape = false
            :close-on-click-modal = false
            :visible.sync="innerVisible">
            <el-form
            :model="form"
            :rules="rules"
            ref="dataForm">
                <el-form-item label-width="120px" label="点播节目单名称:" prop="name">
                        <el-input
                            style="width: 350px"
                            placeholder="请输入点播节目单名称"
                            v-model="form.name"
                        ></el-input>
                </el-form-item>
                <el-form-item label-width="120px" label="节目单封面:" prop="cover">
                    <el-upload
                    class="avatar-uploader"
                    :action="VUE_APP_BASE_API + '/api/upload/image'"
                    :headers="importHeaders"
                    name="image"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess.bind(this,'name')"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="form.name" :src="form.name" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label-width="120px" label="资源地址">
                    <el-input style="width: 400px" placeholder="请输入内容" v-model="form.name">
                        <template slot="prepend">超清</template>
                    </el-input>
                    <el-input style="width: 400px;margin:15px 0;" placeholder="请输入内容" v-model="form.name">
                        <template slot="prepend">高清</template>
                    </el-input>
                    <el-input style="width: 400px" placeholder="请输入内容" v-model="form.name">
                        <template slot="prepend">标清</template>
                    </el-input>
                </el-form-item>
                <el-form-item label-width="120px" label="播放时间:" prop="play_time">
                    <el-date-picker
                        v-model="form.play_time"
                        type="datetime"
                        placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label-width="120px" label="基础点击量:" prop="view_base_num">
                        <el-input
                            style="width: 350px"
                            placeholder="请输入基础点击量"
                            v-model="form.view_base_num"
                        ></el-input>
                </el-form-item>
                <el-form-item label-width="120px" label="是否启用:" prop="name">
                    <el-select v-model="form.name" placeholder="请选择">
                        <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            

            <div class="dialog-footer" slot="footer">
            <el-button @click="innercloseDialog">取 消</el-button>
            <el-button @click="innerenterDialog" type="primary">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { 
    getReplaysByChannel,
    delreplays
  } from '@/api/manage'
export default {
    name:"page_c_list",
    props:{
      _channel_id:{
        type:Number,
        default:0
      }
    },
    data () {
        var mytoken = sessionStorage.getItem("token");
        return{
            importHeaders: { Authorization: mytoken }, //传图片时的token
            dataList:[],
            loading:true,
            statusoptions: [{
                value: 1,
                label: '启用'
                },{
                value: 0,
                label: '禁用'
            }],

            // 弹窗
            dialogTitle:'',
            innerVisible: false,
            form:{},
            rules: {
            },

        }
    },
    created () {
        // console.log(this._channel_id)
        this.getList();
    },
    computed:{
        VUE_APP_BASE_API() {
            return process.env.VUE_APP_BASE_API;
        },
    },
    methods: {
        handleAvatarSuccess(name,res) {
            this.form.name = res.path;
            this.$forceUpdate();
        },
        beforeAvatarUpload(file) {
            const isLt = file.size / 1024 / 1024 < 20;
            if (!isLt) {
            this.$message.error("上传头像图片大小不能超过 20MB!");
            }
            return isLt;
        },
        back(){
            this.$parent.showlist = false;
        },
        getList(){
            this.loading = true;
            var data = {
                "channel_id":this._channel_id,
                "type":'tv_replay'
            }
            getReplaysByChannel(data).then(response => {
                this.loading = false;
                console.log(response)
                this.dataList = response.data;
            })
        },
        // 删除点播
        deldata(row){
            // console.log(row.script.id)
            // return
            this.$confirm('此操作将永久删除id为'+row.script.id+'的节目, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                delreplays(row.script.id).then(response => {
                    this.$message({
                    message: '删除成功',
                    type: 'success'
                    });
                    this.getList();
                })
            }).catch(() => {
                this.$message({
                type: 'info',
                message: '已取消删除'
                });          
            });
        },
        innercloseDialog(){
          this.innerVisible = false;
        },
        innerenterDialog(){
          this.innerVisible = false;
        },
        initForm() {
          if (this.$refs.dataForm) {
            this.$refs.dataForm.resetFields();
          }
            this.form = {
                "status": 1,
                "extra": {
                    "cover": [
                        {
                            "path": "",
                            "intro": ""
                        }
                    ],
                    "title": "",
                    "stream": [
                        {
                            "path": "http://cv.cztv.com/zrtg_mit/36bd6a3457514fd7b67fd44940cf7a63/36bd6a3457514fd7b67fd44940cf7a63_h264_128k_mp3.mp3",
                            "rate": "128",
                            "format": "mp3",
                            "video_id": "581e88ee8cb649fa9692a07d0726c889",
                            "file_name": "/lanyun/2021/05/08/视频.mp4_47296197#h264_128k_mp3.mp3"
                        },
                        {
                            "path": "http://cv.cztv.com/zrtg_mit/36bd6a3457514fd7b67fd44940cf7a63/36bd6a3457514fd7b67fd44940cf7a63_H264_1500K_MP4.mp4",
                            "rate": "1500",
                            "format": "mp4",
                            "video_id": "455d73bc95d14f6a9fbaba3f1b03eda4",
                            "file_name": "/lanyun/2021/05/08/视频.mp4_47296197#H264_1500K_MP4.mp4"
                        },
                        {
                            "path": "http://cv.cztv.com/zrtg_mit/36bd6a3457514fd7b67fd44940cf7a63/36bd6a3457514fd7b67fd44940cf7a63_H264_800K_MP4.mp4",
                            "rate": "800",
                            "format": "mp4",
                            "video_id": "ef2418a8e8b4480fa172668c8e82734e",
                            "file_name": "/lanyun/2021/05/08/视频.mp4_47296197#H264_800K_MP4.mp4"
                        },
                        {
                            "path": "http://cv.cztv.com/zrtg_mit/36bd6a3457514fd7b67fd44940cf7a63/36bd6a3457514fd7b67fd44940cf7a63_H264_450K_MP4.mp4",
                            "rate": "450",
                            "format": "mp4",
                            "video_id": "07df38e0829a480abef854674ee6685f",
                            "file_name": "/lanyun/2021/05/08/视频.mp4_47296197#H264_450K_MP4.mp4"
                        }
                    ]
                }
            }
        },
        // 编辑节目
        editdata(row) {
            console.log(row)
            this.initForm();
            this.dialogTitle = "编辑节目";
            this.dialogType = "edit";
            this.innerVisible = true;
        },
    }
}
</script>
<style lang="scss">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.role-box {
  .el-tabs__content {
    height: calc(100vh - 150px);
    overflow: auto;
  }
}

.placeholderdiv input::-webkit-input-placeholder {
  color:#717171 !important;
}
.placeholderdiv input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color:#717171 !important;
}
.placeholderdiv input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color:#717171 !important;
}
.placeholderdiv input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color:#717171 !important;
}
</style>



<style scoped lang="scss">

.clearflex {
  *zoom: 1;
}

.clearflex:after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}

.fl-right {
  float: right;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.role-box {
  .el-tabs__content {
    height: calc(100vh - 150px);
    overflow: auto;
  }
}
</style>