<style type="text/scss" lang="scss" scoped>
  .xl-common-search {
    font-size: 14px;
    overflow: hidden;
    [class*=el-col-] {
      display: flex;
      align-items: center;
    }
    .el-form-item {
      width: 100%;
    }
    .el-range-editor.el-input__inner {
      width: 100%;
    }
    .el-select {
      width: 100%;
    }
  }
</style>
<template>
  <div class="xl-common-search">
    <el-form ref="ruleForm" label-width="80px" :model="value">
      <el-row :gutter="20">
        <el-col v-for="(list, index) of lists" :key="index" :span="list.span">
          <el-form-item :label="`${list.label}:`" :prop="list.key">
            <el-input v-if="list.component === 'input'" v-model="value[list.key]" :size="list.componentSize" :placeholder="list.placeholder" />
            <el-select v-if="list.component === 'select'" v-model="value[list.key]" :size="list.componentSize" :placeholder="list.placeholder">
              <el-option
                v-for="item in list.selectOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-date-picker
              v-if="list.component === 'daterange'"
              v-model="value[list.key]"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    /* 搜索列表集合 */
    lists: {
      type: Array,
      default: () => []
    },
    value: Object
  },
  data() {
    return {
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
      }
    }
  }
}
</script>
