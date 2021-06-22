<style type="text/scss" lang="scss" scoped>

</style>
<template>
    <div class="xl-push-channel">
      <el-tree
        ref="channel"
        :data="channelsList"
        show-checkbox
        check-strictly
        node-key="id"
        @check="handleChecked"
        :default-checked-keys="defaultKeys"
        :props="props">
      </el-tree>
      <div style="text-align: center">
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </div>
</template>

<script>
  import { getChannels } from '@/api/manage'
    export default {
      props: ['id'],
      data() {
        return {
          channelsList: [],
          props: Object.freeze({
            label: 'name'
          }),
          params: {}
        }
      },
      computed: {
        defaultKeys ({ id }) {
          return id? [id] : []
        }
      },
      methods: {
        /*
        * 获取栏目列表
        * */
        getChannels() {
          return getChannels({ status: 1 }).then(res => {
            this.channelsList = res
          })
        },
        /* 选择 */
        handleChecked (val) {
          const id = val.id;
          this.$refs.channel.setCheckedKeys([]);
          this.$refs.channel.setCheckedKeys([id]);
          let cover;
          try {
            cover = JSON.parse(val.cover)?.[0]?.path || '';
          }catch (e) {
            cover = ''
          }
          this.params = {
            id: val.id,
            type: val.type,
            title: val.name,
            cover
          }
        },
        confirm () {
          this.$emit('confirm', { ...this.params })
        }
      },
      created() {
        this.getChannels();
      }
    }
</script>
