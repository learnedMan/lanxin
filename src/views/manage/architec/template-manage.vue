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
                @click.stop="handleDirRemove(node, data)">
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
      <div class="xl-template-manage--content">
        <el-form
          ref="queryForm"
          :model="queryParams"
          :inline="true"
        >
          <el-form-item
            label="名称:"
            prop="keyword"
          >
            <el-input
              v-model="queryParams.name"
              placeholder="请输入关键字"
              clearable
              size="small"
              style="width: 200px"
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="mini"
              @click="handleReset"
            >
              重置
            </el-button>
            <el-button
              type="primary"
              size="mini"
              @click="handleQuery"
            >
              搜索
            </el-button>
            <el-button
              type="primary"
              size="mini"
              @click="handleAddList"
            >
              新增
            </el-button>
          </el-form-item>
        </el-form>
        <el-table
          ref="multipleTable"
          v-loading="loading"
          :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column
            label="ID"
            align="center"
            prop="id"
          />
          <el-table-column
            label="名称"
            align="center"
            prop="name"
            show-overflow-tooltip
          />
          <el-table-column
            label="路径规则"
            align="center"
            prop="url"
          />
          <el-table-column
            label="域名"
            align="center"
            prop="domainLabel"
          />
          <el-table-column
            label="更新时间"
            align="center"
            prop="updated_at"
          />
          <el-table-column
            label="操作"
            align="center"
          >
            <template slot-scope="scope">
              <div class="verify-table-action">
                <!-- 编辑 -->
                <Iconbutton
                  icontype="xg"
                  label="修改"
                  @fatherMethod="handleEditList(scope.row)"
                ></Iconbutton>
                <!-- 删除 -->
                <Iconbutton
                  icontype="sc"
                  label="删除"
                  @fatherMethod="handleDeleteList(scope.row)"
                ></Iconbutton>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <pagination
          v-show="total > 0"
          :total="total"
          :page.sync="queryParams.page"
          :limit.sync="queryParams.pageSize"
          @pagination="getList"
        />
      </div>
      <!-- 新增目录 -->
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
      <!-- 编辑和新增列表数据 -->
      <el-dialog
        width="500px"
        :title="dialog.title"
        :visible.sync="dialog.show"
        v-if="dialog.show"
      >
        <el-form
          ref="dialogForm"
          :model="listFrom"
          :rules="listRule"
          label-width="120px"
          size="small"
        >
          <el-form-item
            label="域名:"
            prop="domain"
          >
            <el-select
              style="width: 240px"
              v-model="listFrom.domain"
              placeholder="请选择域名"
              clearable
            >
              <el-option
                v-for="item in domainOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item
            label="类型:"
            prop="type"
          >
            <el-select
              style="width: 240px"
              v-model="listFrom.type"
              placeholder="请选择类型"
              clearable
            >
              <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item
            label="名称:"
            prop="name"
          >
            <el-input
              v-model.trim="listFrom.name"
              placeholder="请输入名称"
              clearable
              style="width: 240px"
            />
          </el-form-item>
          <el-form-item
            label="路径:"
            prop="path"
          >
            <el-input
              v-model.trim="listFrom.path"
              placeholder="请输入路径(不填按年月日来生成路径)"
              clearable
              style="width: 240px"
            />
          </el-form-item>
          <el-form-item
            label="文件:"
            prop="upload"
            :rules="dialog.id? [] : { required: true, message: '文件不能为空', trigger: 'change' }"
          >
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleFileChange"
              :on-remove="handleRemove"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            </el-upload>
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button @click="dialog.show = false">
            取 消
          </el-button>
          <el-button
            type="primary"
            @click="entryDialog"
          >
            确 定
          </el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import {
    getTemplateDirectory,
    renameDirectory,
    addDirectory,
    deleteDirectory,
    getH5List,
    addH5List,
    patchH5List,
    deleteH5List
  } from '@/api/manage'

    export default {
      name: 'Template-manage',
      data() {
        const pathValidator = (rule, value, callback) => {
          if(value.trim() === '') {
            callback()
          }else if(!/(\/([\w\/]?)*)?(\w+)?/.test(value)) {
            callback(new Error('请输入正确的路径'))
          }else {
            callback()
          }
        }
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
          },
          queryParams: {
            name: '',
            page: 1,
            pageSize: 10
          },
          loading: false,
          tableData: [],
          total: 0,
          domainOptions: [
            {
              label: '全站',
              value: 1
            },
            {
              label: '租户',
              value: 2
            }
          ], // 域名
          typeOptions: [
            {
              label: '新闻分享页',
              value: '1'
            },
            {
              label: '直播间分享页',
              value: '2'
            },
            {
              label: '专题分享页',
              value: '3'
            },
            {
              label: '其他',
              value: '0'
            }
          ], // 类型
          dialog: {
            show: false,
            title: '新增'
          },
          listFrom: {
            domain: '',
            type: '',
            path: '',
            name: '',
            upload: ''
          },
          listRule: {
            domain: { required: true, message: '请选择域名', trigger: 'change' },
            type: { required: true, message: '请选择类型', trigger: 'change' },
            name: { required: true, message: '请新增名称', trigger: 'blur' },
            path: { validator: pathValidator, trigger: 'blur' }
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
        /* 新增目录 */
        handleAdd () {
          this.resetForm('directoryForm');
          this.directory.show = true;
        },
        /* 确认新增目录 */
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
        handleDirRemove (node, data) {
          const { name, path } = data;
          this.$confirm(`此操作将永久删除该${name}目录, 是否继续?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            deleteDirectory({
              path: `${path}/${name}`
            }).then(async ({ message, status_code }) => {
              if(status_code === 200) {
                this.$message.success(message)
                await this.getChannels();
                this.$refs.tree.setCurrentKey(this.currentKey);
                this.getList();
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
        /* 搜索 */
        handleQuery () {
          this.queryParams.page = 1;
          this.getList();
        },
        /* 重置 */
        handleReset () {
          Object.assign(this.queryParams, {
            name: '',
            page: 1
          })
        },
        /* 新增列表数据 */
        handleAddList () {
          this.resetForm('dialogForm');
          this.dialog = {
            title: '新增',
            show: true
          }
          this.listFrom = {
            domain: '',
            path: '',
            name: '',
            type: '',
            upload: ''
          }
        },
        /* 编辑列表 */
        handleEditList (row) {
          const { id, name, domain, path, type } = row;
          this.resetForm('dialogForm');
          this.listFrom = {
            name,
            domain,
            path,
            type,
            upload: ''
          }
          this.dialog = {
            title: '新增',
            show: true,
            id
          }
        },
        /* 文件变化 */
        handleFileChange (file, fileList) {
          if(fileList.length > 1) fileList.splice(0, 1);
          this.listFrom.upload = file.raw;
        },
        /* 删除文件 */
        handleRemove () {
          this.listFrom.upload = '';
        },
        /* 确认编辑或新增 */
        entryDialog () {
          this.$refs.dialogForm?.validate(val => {
            if(val) {
              const { id } = this.dialog;
              const params = { ...this.listFrom };
              const formData = new FormData();
              formData.append('name', params.name);
              formData.append('domain', params.domain);
              formData.append('path', params.path);
              formData.append('type', params.type);
              if(params.upload) formData.append('upload', params.upload);
              let promise;
              if(id) {
                promise = patchH5List(id, formData)
              }else {
                promise = addH5List(formData)
              }
              promise.then(async () => {
                this.$message.success(id? '修改成功' : '新增成功');
                this.dialog.show = false;
                this.getList();
                await this.getChannels();
                this.$refs.tree.setCurrentKey(this.currentKey);
              })
            }
          })
        },
        /* 删除列表 */
        handleDeleteList (row) {
          const { id, path } = row;
          this.$confirm(`此操作将永久删除该id为${id}的文件, 是否继续?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            deleteH5List(id).then(() => {
              this.$message.success('删除成功');
              this.getList();
              deleteDirectory({
                path
              }).then(async ({ message, status_code }) => {
                if(status_code === 200) {
                  this.getChannels();
                }else {
                  this.$message.warning(message)
                }
              })
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
        },
        /* 获取列表数据 */
        getList () {
          let params = { ...this.queryParams };
          this.loading = true;
          getH5List(this.removePropertyOfNullFor0(params)).then(res => {
            const { data, total } = res;
            this.tableData = data.map(n => ({
              ...n,
              domainLabel: this.domainOptions.find(item => item.value === n.domain)?.label ?? ''
            }))
            this.total = total;
          }).finally(() => {
            this.loading = false;
          })
        }
      },
      async created() {
        this.getList();
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
