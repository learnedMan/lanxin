<style type="text/scss" lang="scss">
.xl-table-img {
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  background-color: #fff;
  &:hover {
    border-color: #409eff;
  }
  &-slot {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &--upload {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
  }
}
.xl-table {
  &-images {
    margin-top: 20px;
    border-radius: 6px;
    border: 1px solid #eee;
    ul, li {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
    }
    li {
      display: inline-block;
      box-sizing: border-box;
      width: 22.6%;
      justify-content: center;
      border-radius: 6px;
      box-shadow: 2px 2px 10px 5px rgba(219, 219, 219, .4);
      margin: 10px;
      padding: 10px;
      text-align: center;
      position: relative;
    }
    &-checked {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: 1;
      .el-checkbox {
        display: block;
        width: 100%;
        height: 100%;
        text-align: right;
        box-sizing: border-box;
        padding: 6px 6px 0 0;
        .el-checkbox__label {
          display: none;
        }
      }
    }
    &-style {
      width: 100%;
      height: 160px;
    }
    &-info {
      background-color: rgba(0, 0, 0, 0.45);
      line-height: 24px;
      color: #fff;
      width: 100%;
      margin: 0 auto;
      font-size: 14px;
    }
    &-name {
      width: 100%;
      margin: 0 auto;
      font-size: 14px;
      line-height: 24px;
    }
  }
}
.el-form-item.is-error .table-textarea {
  .el-textarea__inner {
    border-color: #DCDFE6;
  }
  .el-textarea__inner:focus {
    border-color: #409eff;
  }
}
</style>
<template>
  <div class="xl-table">
    <!--<el-button
      icon="el-icon-plus"
      size="small"
      type="primary"
      @click="handleAdd"
    >
      新增
    </el-button>-->
    <el-table
      :data="tableData"
      style="width: 100%"
      ref="sortTable"
    >
      <el-table-column
        label="图片"
        width="120"
      >
        <template slot-scope="scope">
          <cropper
            :has-upload-again="false"
            :has-remove="false"
            :show-tip="false"
            :value="parseObj(scope.row.path)"
            @input="handleCropper($event, scope.row)"
            @changeCropper="changeCropper($event, scope.row)"
          ></cropper>
          <!--<div class="xl-table-img">
            <el-image
              style="width: 100%; height: 100%"
              :src="scope.row.path"
              fit="cover"
            >
              <div slot="error" class="xl-table-img-slot">
                <i class="el-icon-plus" style="font-size: 24px; color: #8c939d" />
              </div>
            </el-image>
            <input type="file" accep="image/png,image/gif,image/jpeg" class="xl-table-img&#45;&#45;upload" @change="handleUpload($event, scope.row)">
          </div>-->
        </template>
      </el-table-column>
      <el-table-column label="描述">
        <template slot-scope="scope">
          <el-input
            class="table-textarea"
            v-model="scope.row.intro"
            type="textarea"
            placeholder="请输入图片描述"
            :rows="4"
            clearable
            size="small"
            style="width: 200px"
          />
        </template>
      </el-table-column>
      <el-table-column label="权重" prop="sort">
        <!--<template slot-scope="scope">
          <el-input
            placeholder="请输入权重"
            :value="scope.row.sort"
            clearable
            size="small"
            style="width: 100px"
            @input="handleInput($event, scope.row)"
          />
        </template>-->
      </el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            icon="el-icon-delete"
            size="small"
            @click="handleDelete(scope.$index)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-upload
      style="display: inline-block;margin-right: 10px;"
      class="upload-demo"
      name="image"
      :action="actionUrl"
      :headers="uploadHeader"
      :show-file-list="false"
      :on-success="handleSuccess"
      multiple >
      <el-button size="small" type="primary">本地上传</el-button>
    </el-upload>
    <el-button size="small" type="primary" @click="handleImgLists">图库选择</el-button>
    <el-dialog
      width="900px"
      top="20px"
      :title="dialog.title"
      :visible.sync="dialog.show"
      append-to-body
    >
      <div>
        <el-form
          ref="queryForm"
          :model="queryParams"
          :inline="true"
        >
          <el-form-item label="上传日期:">
            <el-date-picker
              v-model="dateValue"
              type="daterange"
              align="right"
              size="small"
              unlink-panels
              range-separator="~"
              value-format="yyyy-MM-dd"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
              @change="handleDateChange"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="queryParams.keyword"
              placeholder="请输入关键字"
              clearable
              size="small"
              style="width: 200px"
              @keyup.enter.native="getList"
            />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="isMy" size="small">只看我传的</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="mini"
              @click="getList"
            >
              搜索
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="xl-table-images">
        <el-checkbox-group v-model="dialog.checked">
          <ul>
            <li v-for="(list, index) of imgLists" :key="index">
              <div class="xl-table-images-checked">
                <el-checkbox :label="list.url">{{ '' }}</el-checkbox>
              </div>
              <el-image
                class="xl-table-images-style"
                fit="contain"
                lazy
                :src="list.url"
              />
              <div class="xl-table-images-info">{{ list.width }}*{{ list.height }}</div>
              <div class="xl-table-images-name">{{ list.description }}</div>
            </li>
          </ul>
        </el-checkbox-group>
      </div>
      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="queryParams.page"
        :limit.sync="queryParams.pageSize"
        @pagination="getList"
      />
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogControl('cancel')">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="dialogControl('confirm')"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
/*import { uploadImg } from '@/api/content.js'*/
import Sortable from 'sortablejs'
import Cropper from '@/components/Cropper'
import { getEditImgLists } from '@/api/content'

export default {
  components: {
    Cropper
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      dialog: {
        title: '从图库中选择',
        show: false,
        checked: []
      },
      imgLists: [], // 视频封面列表
      queryParams: {
        pageSize: 10,
        page: 1,
        type: 'image',
        keyword: '',
        startdate: '',
        enddate: ''
      },
      isMy: false, // 是否为自己传的
      total: 0,
      dateValue: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
    }
  },
  computed: {
    /* 上传接口 */
    actionUrl() {
      return `${process.env.VUE_APP_BASE_API}/api/upload/image`
    },
    /* 上传的头部信息 */
    uploadHeader() {
      const Authorization = sessionStorage.getItem('token')
      return {
        Authorization
      }
    },
    tableData () {
      return this.value
    }
  },
  methods: {
    /* 获取图库数据 */
    getList() {
      const query = { ...this.queryParams }
      getEditImgLists(this.removePropertyOfNull(query), this.isMy).then(res => {
        this.imgLists = res.data
        this.total = res.total
      })
    },
    /*
          * 搜索时间变化
          * */
    handleDateChange(val) {
      const arr = val || ['', '']
      this.queryParams.startdate = arr[0]
      this.queryParams.enddate = arr[1]
    },
    /* 显示图库 */
    handleImgLists () {
      this.dialog.show = true
      this.getList();
    },
    /* 弹框控制 */
    dialogControl(status) {
      const arr = this.dialog.checked;
      const select = this.imgLists.filter(n => arr.includes(n.url))
      this.dialog.show = false
      this.dialog.checked = []
      if (status === 'confirm' && arr.length) {
        const sort = this.value[this.value.length - 1]?.sort || 0;
        select.map((n, index) => {
          this.value.push({
            path: n.url,
            intro: n.title,
            sort: sort + index + 1
          })
        })
        this.initSort();
      }
    },
    /* 解析数据 */
    parseObj (path) {
      return [
        {
          path
        }
      ]
    },
    /* 修改数据 */
    handleCropper (val, row) {
      const path = val?.[0]?.path || '';
      row.path = path;
    },
    /* 修改图片剪切数据 */
    changeCropper (val, row) {
      row.path = val;
    },
    /*/!* 权重 *!/
    handleInput(val, row) {
      val = parseInt(val) || ''
      row.sort = val
    },*/
    /*/!* 上传图片 *!/
    handleUpload(e, row) {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('image', file, file.name)
      uploadImg({
        url: `${process.env.VUE_APP_BASE_API}/api/upload/image`,
        method: 'post',
        data: formData
      }).then(res => {
        if (res.status_code >= 200 && res.status_code < 300) {
          row.path = res.path
        }
      })
    },*/
    /* 删除一项 */
    handleDelete(index) {
      this.value.splice(index, 1)
    },
   /* /!* 新增 *!/
    handleAdd() {
      this.value.push({
        path: '',
        intro: '',
        sort: ''
      })
    },*/
    /* 上传成功 */
    handleSuccess (res, file, fileList) {
      if(res.status_code === 200) {
        const sort = this.value[this.value.length - 1]?.sort || 0;
        const uid = fileList[fileList.length - 1]?.uid;
        this.value.push({
          path: res.path,
          intro: file.name,
          sort: sort + 1
        })
        if(file.uid === uid) {
          fileList = [];
          this.initSort();
        }
      }
    },
    /* 初始化 */
    initSort () {
      const sortTable = this.$refs.sortTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0];
      Sortable.create(sortTable, {
        ghostClass:'sortable-ghost',
        onEnd: evt => {
          const { newIndex, oldIndex } = evt;
          let arr = this.value.map(n => ({ ...n }));
          let oldSort = arr.splice(oldIndex, 1)[0]; // 获取拖动的数据
          // 判断是上移还是下移
          if(newIndex > oldIndex) {
            // 下移
            arr.splice(newIndex - 1, 0, oldSort);
          }else {
            // 上移
            arr.splice(newIndex, 0, oldSort);
          }
          arr.forEach((n, index) => {
            n.sort = index + 1
          })
          this.$emit('input', []);
          this.$nextTick(() => {
            this.$emit('input', arr);
          })
        }
      })
    },
  }
}
</script>
