<style type="text/scss" lang="scss" scoped>
  .xl-app-menu {
    .table-box {
      display: inline-block;
      width: 500px;
      margin-right: 30px;
      vertical-align: top;
      h4,p {
        margin: 0;
        padding: 0;
        line-height: 30px;
      }
      h4 {
        font-size: 20px;
      }
      p {
        margin-bottom: 10px;
        font-size: 14px;
      }
      .el-table {
        margin-bottom: 20px;
      }
      &--btn {
        margin-bottom: 10px;
      }
    }
  }
</style>
<template>
    <div class="xl-app-menu">
      <el-form
        ref="queryForm"
        :inline="true"
        size="small"
      >
        <el-form-item
          label="所属产品:"
          prop="sourceId"
        >
          <el-select
            v-model="sourceId"
            placeholder="请选择所属产品"
            clearable
          >
            <el-option
              v-for="item in productLists"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            size="mini"
            @click="handleQuery"
          >
            搜索
          </el-button>
        </el-form-item>
      </el-form>
      <div class="table-box">
        <h4>主功能区</h4>
        <p>说明：主功能菜单在有色底区，最多支持<span style="color: red;font-size: 18px">4</span>个</p>
        <div class="table-box--btn">
          <el-button type="primary" size="mini" @click="addCustom('main')">添加自定义菜单</el-button>
          <el-button type="primary" size="mini" @click="addDefault('main')">添加默认菜单</el-button>
        </div>
        <el-table
          ref="first"
          :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
          :data="main"
          border
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column
            label="菜单名称"
            align="center"
            prop="name"
          />
          <el-table-column
            label="排序"
            align="center"
            prop="sort"
          />
          <el-table-column
            label="操作"
            align="center"
          >
            <template slot-scope="scope">
              <!-- 编辑 -->
              <el-button
                type="text"
                icon="el-icon-edit"
                size="small"
                @click="handleEdit(scope.row, 'main')"
              >
                编辑
              </el-button>
              <!-- 删除 -->
              <el-button
                type="text"
                icon="el-icon-delete"
                size="small"
                @click="handleDelete(scope.$index, scope.row.name, 'main')"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="table-box">
        <h4>常用功能区</h4>
        <p>说明：副功能菜单在白底区，无数量限制，自动换行</p>
        <div class="table-box--btn">
          <el-button type="primary" size="mini" @click="addCustom('frequent')">添加自定义菜单</el-button>
          <el-button type="primary" size="mini" @click="addDefault('frequent')">添加默认菜单</el-button>
        </div>
        <el-table
          ref="first"
          :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
          :data="frequent"
          border
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column
            label="菜单名称"
            align="center"
            prop="name"
          />
          <el-table-column
            label="排序"
            align="center"
            prop="sort"
          />
          <el-table-column
            label="操作"
            align="center"
          >
            <template slot-scope="scope">
              <!-- 编辑 -->
              <el-button
                type="text"
                icon="el-icon-edit"
                size="small"
                @click="handleEdit(scope.row, 'frequent')"
              >
                编辑
              </el-button>
              <!-- 删除 -->
              <el-button
                type="text"
                icon="el-icon-delete"
                size="small"
                @click="handleDelete(scope.$index, scope.row.name, 'frequent')"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="table-box">
        <h4>更多区域</h4>
        <p></p>
        <div class="table-box--btn">
          <el-button type="primary" size="mini" @click="addCustom('more')">添加自定义菜单</el-button>
          <el-button type="primary" size="mini" @click="addDefault('more')">添加默认菜单</el-button>
        </div>
        <el-table
          ref="first"
          :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
          :data="more"
          border
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column
            label="菜单名称"
            align="center"
            prop="name"
          />
          <el-table-column
            label="排序"
            align="center"
            prop="sort"
          />
          <el-table-column
            label="操作"
            align="center"
          >
            <template slot-scope="scope">
              <!-- 编辑 -->
              <el-button
                type="text"
                icon="el-icon-edit"
                size="small"
                @click="handleEdit(scope.row, 'more')"
              >
                编辑
              </el-button>
              <!-- 删除 -->
              <el-button
                type="text"
                icon="el-icon-delete"
                size="small"
                @click="handleDelete(scope.$index, scope.row.name, 'more')"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 选择默认菜单 -->
      <el-dialog
        width="600px"
        :title="defaultMenu.title"
        :visible.sync="defaultMenu.show"
      >
        <el-checkbox-group v-model="allMenuSelect" :max="defaultMenu.max">
          <el-checkbox
            style="margin-bottom: 20px"
            v-for="(menu, index) in allMenu"
            :label="menu.name"
            :key="index"
            :disabled="judgeDisabled(menu.name)"
          >{{ menu.name }}</el-checkbox>
        </el-checkbox-group>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button @click="defaultMenu.show = false">
            取 消
          </el-button>
          <el-button
            type="primary"
            @click="defaultMenuEnter"
          >
            确 定
          </el-button>
        </div>
      </el-dialog>
      <!-- 编辑和添加自定义菜单 -->
      <el-dialog
        width="600px"
        :title="dialog.title"
        :visible.sync="dialog.show"
      >
        <el-form
          ref="dialogForm"
          :model="dialogForm"
          :rules="dialogRules"
          size="small"
          label-width="120px"
        >
          <el-form-item
            label="菜单名称"
            prop="name"
          >
            <el-input
              clearable
              placeholder="请输入菜单名(不要与默认菜单名重复)"
              style="width: 260px"
              :disabled="dialog.disabledName"
              v-model="dialogForm.name"
            />
          </el-form-item>
          <el-form-item
            label="图标"
            prop="logo"
          >
            <upload-single v-model="dialogForm.logo"></upload-single>
          </el-form-item>
          <el-form-item
            label="排序"
            prop="sort"
          >
            <el-input
              clearable
              style="width: 260px"
              v-model.number="dialogForm.sort"
            />
          </el-form-item>
          <el-form-item
            label="类型"
            prop="sort"
          >
            <el-radio-group @change="radiochange" v-model="dialogForm.type">
              <el-radio v-for="type of typeOptions" :key="type.value" :label="type.value" style="margin-top: 10px">{{ type.label }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="外链"
            prop="link"
            v-if="dialogForm.type === 'outer_link'"
          >
            <el-input
              clearable
              placeholder="请输入链接"
              style="width: 260px"
              v-model="dialogForm.link"
            />
          </el-form-item>
          <el-form-item
            label="授权外链"
            prop="link"
            v-if="dialogForm.type === 'auth_link'"
          >
            <el-input
              clearable
              placeholder="请输入链接"
              style="width: 260px"
              v-model="dialogForm.link"
            />
          </el-form-item>


          <el-form-item
            label="原生跳转id"
            prop="link"
            v-if="dialogForm.type === 'app_redirect'"
          >
            <el-input
              clearable
              placeholder="请输入原生跳转id"
              style="width: 260px"
              v-model="dialogForm.link"
            />
          </el-form-item>
          <el-form-item
            label="电话号码"
            prop="phone"
            v-if="dialogForm.type === 'phone'"
          >
            <el-input
              clearable
              placeholder="请输入电话号码"
              style="width: 260px"
              v-model.trim="dialogForm.phone"
            />
          </el-form-item>
          <el-form-item
            label="信息展示"
            prop="text"
            v-if="dialogForm.type === 'text'"
          >
            <el-input
              clearable
              placeholder="请输入展示信息"
              style="width: 260px"
              v-model.trim="dialogForm.text"
            />
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
            @click="dialogEnter"
          >
            确 定
          </el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import { getproduct, getAppMenu, changeAppMenu } from '@/api/manage.js'
  import uploadSingle from '@/components/Upload/uploadSingle.vue'

    export default {
      components: {
        uploadSingle
      },
      data() {
        return {
          productLists: [],
          typeOptions: [
            {
              label: '外链',
              value: 'outer_link'
            },
            {
              label: '授权外链',
              value: 'auth_link'
            },
            {
              label: '原生跳转',
              value: 'app_redirect'
            },
            {
              label: '电话',
              value: 'phone'
            },
            {
              label: '信息展示',
              value: 'text'
            }
          ],
          sourceId: '',
          main: [], // 主要区域
          frequent: [], // 常用
          more: [], // 更多
          allMenu: [
            {
              name: '收藏',
              logo: '',
              sort: 1,
              type: 'app_redirect',
              link: '1'
            },
            {
              name: '积分',
              logo: '',
              sort: 2,
              type: 'app_redirect',
              link: '2'
            },
            {
              name: '评论',
              logo: '',
              sort: 3,
              type: 'app_redirect',
              link: '3'
            },
            {
              name: '活动',
              logo: '',
              sort: 4,
              type: 'app_redirect',
              link: '4'
            },
            {
              name: '爆料',
              logo: '',
              sort: 5,
              type: 'app_redirect',
              link: '5'
            },
            {
              name: '意见反馈',
              logo: '',
              sort: 6,
              type: 'app_redirect',
              link: '6'
            },
            {
              name: '邀请好友',
              logo: '',
              sort: 7,
              type: 'app_redirect',
              link: '7'
            },
            {
              name: '邀请码',
              logo: '',
              sort: 8,
              type: 'app_redirect',
              link: '8'
            },
            {
              name: '我的奖品',
              logo: '',
              sort: 9,
              type: 'app_redirect',
              link: '9'
            },
            {
              name: '发布',
              logo: '',
              sort: 10,
              type: 'app_redirect',
              link: '10'
            },
            {
              name: '我的钱包',
              logo: '',
              sort: 11,
              type: 'app_redirect',
              link: '11'
            },
            {
              name: '关于我们',
              logo: '',
              sort: 12,
              type: 'app_redirect',
              link: '12'
            }
          ], // 默认菜单集合
          allMenuSelect: [], // 当前选中项
          defaultMenu: {
            title: '添加默认菜单',
            show: false,
            key: '',
            max: 9999
          }, // 默认菜单弹框
          dialog: {
            title: '添加自定义菜单',
            show: false,
            disabledName: false, // 是否禁止修改菜单名
            key: ''
          },
          patchData: {}, // 传给后台的数据
          dialogForm: {
            name: '',
            logo: '',
            sort: '',
            type: 'outer_link',
            // outer_link: '',
            // auth_link: '',
            // app_redirect: '',
            link:'',
            text: '',
            phone: ''
          },
          dialogRules: {
            name: [
              { required: true, message: '请输入菜单名称', trigger: 'blur' }
            ],
            logo: [
              { required: true, message: '请添加菜单logo', trigger: 'chnage' }
            ],
            sort: [
              { required: true, type: 'number', message: '请输入排序', trigger: 'blur' }
            ],
            // outer_link: [
            //   { required: true, message: '请输入外链', trigger: 'blur' }
            // ],
            // auth_link: [
            //   { required: true, message: '请输入外链', trigger: 'blur' }
            // ],
            // app_redirect: [
            //   { required: true, message: '请输入原生跳转id', trigger: 'blur' }
            // ],
            link: [
              { required: true, message: '请输入', trigger: 'blur' }
            ],
            phone: [
              { required: true, message: '请输入电话号码', trigger: 'blur' }
            ],
            text: [
              { required: true, message: '请输入展示号码', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        /* 获取产品列表 */
        getProductList () {
          return getproduct({}).then(res => {
            const data = res.data || []
            this.productLists = data.map(n => ({
              label: n.name,
              value: n.id
            }));
            this.sourceId = data?.[0]?.id;
          });
        },
        /* 搜索 */
        handleQuery () {
          this.getList();
        },
        /* 新增菜单radio修改 */
        radiochange(){
          this.dialogForm.link='';
        }, 
        /* 判断是否禁用 */
        judgeDisabled (name) {
          const key = this.defaultMenu.key;
          if(key === '') return false;
          let disabledArr = [];
          if(key === 'main') disabledArr = this.frequent.concat(this.more).map(n => n.name);
          else if(key === 'frequent') disabledArr = this.main.concat(this.more).map(n => n.name);
          else disabledArr = this.frequent.concat(this.main).map(n => n.name);
          return disabledArr.includes(name);
        },
        /* 添加默认菜单 */
        addDefault (key) {
          this.allMenuSelect = this[key].map(n => n.name);
          this.allMenu.forEach(n => {
            const current = this[key].find(item => n.name === item.name);
            if(current) Object.assign(n, current);
          })
          Object.assign(this.defaultMenu, {
            show: true,
            key,
            max: key === 'main'? 4 : 99999
          })
        },
        /* 确认添加默认菜单 */
        defaultMenuEnter () {
          const data = this.patchData.extra.profile_settings || (this.patchData.extra.profile_settings = {});
          const key = this.defaultMenu.key;
          const all = this.allMenu.map(n => n.name);
          // 弹框选中项
          const now = this.allMenu.filter(n => this.allMenuSelect.includes(n.name));
          // 原选中项(筛选掉默认的)
          const old = this[key].filter(n => !all.includes(n.name));
          data[key] = now.concat(old);
          this.httpPatch(() => {
            this.defaultMenu.show = false;
          });
        },
        /* 新增自定义菜单 */
        addCustom (key) {
          this.resetForm('dialogForm');
          this.dialog = {
            title: '添加自定义菜单',
            show: true,
            disabledName: false,
            add: true,
            key
          }
        },
        /* 编辑 */
        handleEdit (row, key) {
          this.resetForm('dialogForm');
          const { name, logo, sort, type = 'outer_link', link='', text = '', phone = '' } = row;
          this.dialog = {
            title: '编辑菜单',
            disabledName: this.allMenu.some(n => n.name === name),
            show: true,
            key
          }
          this.dialogForm = {
            name,
            logo,
            sort,
            type,
            // outer_link,
            // auth_link,
            // app_redirect,
            link,
            text,
            phone
          }
        },
        /* 确认添加和编辑 */
        dialogEnter () {
          this.$refs.dialogForm?.validate(val => {
            if(val) {
              const data = this.patchData.extra.profile_settings || (this.patchData.extra.profile_settings = {});
              const key = this.dialog.key;
              const target = data[key] || (data[key] = []);
              const value = { ...this.dialogForm };
            // return
              if(this.dialog.add) {
                target.push(value)
              }else {
                target.splice(target.findIndex(n => n.name === value.name), 1, value);
              }
              this.httpPatch(() => {
                this.dialog.show = false;
              });
            }
          })
        },
        /* 删除 */
        handleDelete (index, name, key) {
          this.$confirm(`此操作将永久删除这条名为${name}的菜单, 是否继续?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            const data = this.patchData.extra.profile_settings;
            data[key].splice(index, 1);
            this.httpPatch(() => {
              this.dialog.show = false;
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
        },
        /* 调用接口修改数据 */
        httpPatch (fn) {
          const { sourceId } = this;
          changeAppMenu(sourceId, this.patchData).then(() => {
            this.$message.success('修改菜单成功');
            this.getList();
            fn?.();
          })
        },
        /* 获取表格数据 */
        getList () {
          getAppMenu(this.sourceId).then(res => {
            const profile_settings = res.extra.profile_settings || {};
            this.patchData = res;
            this.main = (profile_settings.main || []).map(_ => ({ ..._ }));
            this.frequent = (profile_settings.frequent || []).map(_ => ({ ..._ }));
            this.more = (profile_settings.more || []).map(_ => ({ ..._ }));
          })
        }
      },
      async created() {
        await this.getProductList();
        this.getList();
      }
    }
</script>
