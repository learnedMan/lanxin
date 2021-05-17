<style type="text/scss" lang="scss" scoped>
  .xl-tag-component {
    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .button-new-tag {
      margin-left: 10px;
    }
    .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: bottom;
    }
  }
</style>
<template>
  <div class="xl-tag-component">
    <el-tag
      v-for="(tag, index) in dynamicTags"
      :key="index"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag }}
    </el-tag>
    <el-input
      v-if="inputVisible"
      ref="saveTagInput"
      v-model="inputValue"
      style="width: 100px"
      class="input-new-tag"
      size="mini"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    />
    <el-button v-else class="button-new-tag" size="mini" @click="showInput">+ 添加</el-button>
  </div>
</template>

<script>
export default {
  props: {
    /* 标签集合 */
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputVisible: false, // 显示添加框
      inputValue: ''
    }
  },
  computed: {
    /* 标签集合 */
    dynamicTags() {
      return this.value && this.value.split(',').map(n => n) || []
    }
  },
  methods: {
    showInput() {
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      this.$emit('input', this.dynamicTags.join())
    },
    handleInputConfirm() {
      const inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
        this.$emit('input', this.dynamicTags.join())
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>
