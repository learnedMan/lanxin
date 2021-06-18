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
    <el-table
      :data="value"
      style="width: 100%"
    >
      <el-table-column
        label="图片"
        width="120"
      >
        <template slot-scope="scope">
          <cropper
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
      <el-table-column label="权重">
        <template slot-scope="scope">
          <el-input
            placeholder="请输入权重"
            :value="scope.row.sort"
            clearable
            size="small"
            style="width: 100px"
            @input="handleInput($event, scope.row)"
          />
        </template>
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
    <el-button
      icon="el-icon-plus"
      size="small"
      type="primary"
      @click="handleAdd"
    >
      添加
    </el-button>
  </div>
</template>

<script>
/*import { uploadImg } from '@/api/content.js'*/
import Cropper from '@/components/Cropper'

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
  methods: {
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
    /* 权重 */
    handleInput(val, row) {
      val = parseInt(val) || ''
      row.sort = val
    },
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
    /* 添加 */
    handleAdd() {
      this.value.push({
        path: '',
        intro: '',
        sort: ''
      })
    }
  }
}
</script>
