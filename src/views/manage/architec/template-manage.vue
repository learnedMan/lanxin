<style type="text/scss" lang="scss">
  .xl-template-manage {
    display: flex;
    &--tree {
      display: inline-block;
      width: 350px;
      border-right: 1px solid #f3f3f3;
      background-color: #fff;
      .el-tree-node__content {
        padding-right: 20px;
        position: relative;
        height: 40px;
        .el-tree-node__expand-icon {
          position: absolute;
          right: 0;
        }
        &:hover {
          background-color: #ecf5ff;
        }
      }
      .el-tree-node:focus > .el-tree-node__content {
        background-color: #fff;
      }
      .el-tree-node.is-current:focus > .el-tree-node__content {
        background-color: #ecf5ff;
      }
      .is-current > .el-tree-node__content{
        color: rgb(64, 158, 255);
        background-color: #ecf5ff;
        &::before {
          content: '';
          position: absolute;
          height: 40px;
          width: 2px;
          background-color: #1c90ff;
          right: 0;
        }
      }
    }
    &--title {
      margin: 0;
      padding-right: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &--content {
      background-color: #fff;
      flex: 1;
      padding-left: 20px;
    }
    .custom-tree-node {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding-right: 8px;
    }
  }
</style>
<template>
    <div class="xl-template-manage">
      <div class="xl-template-manage--tree">
        <h3 class="xl-template-manage--title">
          <span>目录</span>
          <span>
            <el-button
              style="margin-right: 6px"
              type="text"
              icon="el-icon-folder-add"
              @click="handleAdd">
              </el-button>
            <el-switch v-model="switchAction"></el-switch>
          </span>
        </h3>
        <el-tree
          ref="tree"
          :data="channelsList"
          :props="props"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          @current-change="treeChange"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ data.name }}</span>
            <span v-show="switchAction">
              <el-button
                type="text"
                icon="el-icon-edit"
                @click.stop="handleEdit(data)">
              </el-button>
              <el-button
                type="text"
                icon="el-icon-delete"
                @click.stop="handleRemove(node, data)">
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
      <div class="xl-template-manage--content"></div>
      <!-- 添加目录 -->
      <el-dialog
        width="400px"
        title="新增目录"
        :visible.sync="directory.show"
      >
        <el-form
          ref="directoryForm"
          :model="directory.form"
          :rules="directory.rules"
          label-width="120px"
          size="small"
        >
          <el-form-item
            label="上级目录:"
            prop="path"
          >
            <el-cascader
              v-model="directory.form.path"
              style="width: 200px"
              :options="channelsList"
              :props="cascaderOption"
              clearable
            />
          </el-form-item>
          <el-form-item
            label="目录名称:"
            prop="name"
          >
            <el-input
              v-model="directory.form.name"
              placeholder="请输入目录名称"
              clearable
              style="width: 200px"
            />
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button @click="directory.show = false">
            取 消
          </el-button>
          <el-button
            type="primary"
            @click="directoryDialog"
          >
            确 定
          </el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import { getTemplateDirectory, renameDirectory, addDirectory, deleteDirectory } from '@/api/manage'

    export default {
      name: 'Template-manage',
      data() {
        return {
          channelsList: [], // 栏目
          props: Object.freeze({
            label: 'name',
            children: 'child'
          }),
          currentKey: '', // 树节点默认选中项
          switchAction: false, // 操作控制器
          cascaderOption: {
            checkStrictly: true, // 是否强制父子不关联
            emitPath: false, // 返回值是否为数组
            children: 'child',
            value: 'id', // 选项值
            label: 'name', // 显示值
            multiple: false // 多选
          }, // 级联选择器配置
          id: 1,
          directory: {
            show: false,
            form: {
              path: '',
              name: ''
            },
            rules: {
              name: [
                { required: true, message: '请输入目录名', trigger: 'blur' }
              ]
            }
          }
        }
      },
      methods: {
        /*
      * 获取栏目列表
      * */
        getChannels() {
          return getTemplateDirectory().then(res => {
            let arr = [res]
            this.setOnlyId(arr);
            this.channelsList = arr;
          })
        },
        /* 设置唯一id */
        setOnlyId (arr) {
          arr.forEach(n => {
            n.id = `${n.path}:${n.name}`;
            if(n.child) {
              this.setOnlyId(n.child);
            }
          })
        },
        /* 添加目录 */
        handleAdd () {
          this.resetForm('directoryForm');
          this.directory.show = true;
        },
        /* 确认添加目录 */
        directoryDialog () {
          this.$refs.directoryForm?.validate(val => {
            if(val) {
              const { path, name } = this.directory.form
              const params = {
                path: path.replace(/:.+/, ''),
                name
              };
              addDirectory(params).then(async ({ message, status_code }) => {
                if(status_code === 200) {
                  this.$message.success(message);
                  this.directory.show = false;
                  await this.getChannels();
                  this.$refs.tree.setCurrentKey(this.currentKey);
                }else {
                  this.$message.warning(message);
                }
              })
            }
          })
        },
        /* 修改目录 */
        handleEdit (data) {
          const { name, path } = data;
          this.$prompt('请输入目录名', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputValue: data.name,
            inputValidator: (val) => {
              return val != null && val.trim() !== '';
            },
            inputErrorMessage: '请输入目录名'
          }).then(({ value }) => {
            if(name !== value) {
              renameDirectory({
                path,
                name,
                rename: value
              }).then(async ({ message, status_code }) => {
                if(status_code === 200) {
                  this.$message.success(message)
                  await this.getChannels();
                  this.$refs.tree.setCurrentKey(this.currentKey);
                }else {
                  this.$message.warning(message)
                }
              })
            }
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        },
        /* 删除目录 */
        handleRemove (node, data) {
          const { name, path } = data;
          this.$confirm(`此操作将永久删除该${name}目录, 是否继续?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            deleteDirectory({
              path: `${path}/${name}`
            }).then(({ message, status_code }) => {
              if(status_code === 200) {
                this.$message.success(message)
              }else {
                this.$message.warning(message)
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
        },
        /* 节点数选中时 */
        treeChange(val) {
          this.currentKey = val.id;
          console.log(val)
        },
      },
      async created() {
        await this.getChannels();
        this.$nextTick(() => {
          const id = this.$route.query.id || this.channelsList[0]?.id;
          this.currentKey = id;
          this.$refs.tree.setCurrentKey(id);
          //this.$refs.tree.getCurrentNode(); 获取当前选中节点的信息
        })
      }
    }
</script>
