<style type="text/scss" lang="scss" scoped>
  .xl-common-search {
    font-size: 14px;
    overflow: hidden;
  }
</style>
<template>
  <div class="xl-common-search">
    <el-form ref="ruleForm" label-width="100px" :model="value" inline>
      <el-form-item v-for="(list, index) of lists"  :label="`${list.label}:`" :prop="list.key" :key="index">
        <el-input v-if="list.component === 'input'" v-model="value[list.key]" :size="list.componentSize" :placeholder="list.placeholder" />
        <el-select v-if="list.component === 'select'&& !list.productFlag" v-model="value[list.key]" :size="list.componentSize" :placeholder="list.placeholder">
          <el-option
            v-for="item in list.selectOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-if="list.component === 'select' && list.productFlag" @change="selectChange" v-model="productId" :size="list.componentSize" :placeholder="list.placeholder">
          <el-option
            v-for="item in list.selectOption"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
        <el-date-picker
          v-if="list.component === 'daterange'"
          v-model="value[list.key]"
          :size="list.componentSize"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="~"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd HH:mm:ss"
          :picker-options="pickerOptions"
        />
      </el-form-item>
      <el-form-item>
        <slot name="action"></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    /* 搜索列表集合 */
    productId: {
      type: [Number,String],
      default: 0
    },
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
  },
  methods: {
    selectChange(val) {
      this.$emit('changeProductId',val)
    }
  }
}
</script>
