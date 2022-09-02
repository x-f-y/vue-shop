"use strict";(self["webpackChunkvue_shop"]=self["webpackChunkvue_shop"]||[]).push([[378],{1743:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var r=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v("用户管理")]),t("el-breadcrumb-item",[e._v("用户列表")])],1),t("el-card",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("el-input",{attrs:{placeholder:"请输入搜索内容",clearable:""},on:{clear:e.getUserList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList},slot:"append"})],1)],1),t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加用户")])],1)],1),t("el-table",{attrs:{data:e.userList,border:"",stripe:""}},[t("el-table-column",{attrs:{label:"#",type:"index"}}),t("el-table-column",{attrs:{label:"姓名",prop:"username"}}),t("el-table-column",{attrs:{label:"邮箱",prop:"email"}}),t("el-table-column",{attrs:{label:"电话",prop:"mobile"}}),t("el-table-column",{attrs:{label:"角色",prop:"role_name"}}),t("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-switch",{on:{change:function(t){return e.userStateChanged(s.row)}},model:{value:s.row.mg_state,callback:function(t){e.$set(s.row,"mg_state",t)},expression:"scope.row.mg_state"}})]}}])}),t("el-table-column",{attrs:{label:"操作",width:"173px"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(t){return e.showEditDialog(s.row.id)}}}),t("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(t){return e.deleteUser(s.row.id)}}}),t("el-tooltip",{attrs:{effect:"dark",content:"分配角色",placement:"top",enterable:!1}},[t("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(t){return e.setRole(s.row)}}})],1)]}}])})],1),t("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[1,2,5,10],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),t("el-dialog",{attrs:{title:"添加用户",visible:e.addDialogVisible},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addFormClosed}},[t("el-form",{ref:"addFormRef",attrs:{"status-icon":"",model:e.addForm,rules:e.addFormRules,"label-width":"70px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{"show-password":""},model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),t("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[t("el-input",{model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改用户",visible:e.editDialogVisible},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editFormClosed}},[t("el-form",{ref:"editFormRef",attrs:{"status-icon":"",model:e.editForm,rules:e.editFormRules,"label-width":"70px"}},[t("el-form-item",{attrs:{label:"用户名"}},[t("el-input",{attrs:{disabled:""},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),t("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[t("el-input",{model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.editUser}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"分配角色",visible:e.setRoleDialogVisible},on:{"update:visible":function(t){e.setRoleDialogVisible=t},close:e.setRoleDialogClosed}},[t("el-form",{attrs:{model:e.userInfo,"label-width":"85px"}},[t("el-form-item",{attrs:{label:"当前的用户"}},[t("el-input",{attrs:{disabled:""},model:{value:e.userInfo.username,callback:function(t){e.$set(e.userInfo,"username",t)},expression:"userInfo.username"}})],1),t("el-form-item",{attrs:{label:"当前的角色"}},[t("el-input",{attrs:{disabled:""},model:{value:e.userInfo.role_name,callback:function(t){e.$set(e.userInfo,"role_name",t)},expression:"userInfo.role_name"}})],1),t("el-form-item",{attrs:{label:"分配新角色"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectdRoleId,callback:function(t){e.selectdRoleId=e._n(t)},expression:"selectdRoleId"}},e._l(e.roleList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.setRoleDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.saveRoleInfo}},[e._v("确 定")])],1)],1)],1)},a=[],i=(s(1703),{name:"Users",data(){var e=(e,t,s)=>{const r=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;return r.test(t)?s():s(new Error("请输入合法的邮箱"))},t=(e,t,s)=>{const r=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;return r.test(t)?s():s(new Error("请输入合法的手机号"))};return{queryInfo:{query:"",pagenum:1,pagesize:2},userList:[],total:0,addDialogVisible:!1,editDialogVisible:!1,setRoleDialogVisible:!1,addForm:{username:"",password:"",email:"",mobile:""},addFormRules:{username:[{trigger:"blur",required:!0,message:"请输入用户名"},{trigger:"blur",min:3,max:10,message:"用户名长度在 3 到 10 个字符"}],password:[{trigger:"blur",required:!0,message:"请输入密码"},{trigger:"blur",min:6,max:15,message:"密码长度在 6 到 15 个字符"}],email:[{trigger:"blur",required:!0,message:"请输入邮箱"},{trigger:"blur",validator:e}],mobile:[{trigger:"blur",required:!0,message:"请输入手机号"},{trigger:"blur",validator:t}]},editFormRules:{email:[{trigger:"blur",required:!0,message:"请输入邮箱"},{trigger:"blur",validator:e}],mobile:[{trigger:"blur",required:!0,message:"请输入手机号"},{trigger:"blur",validator:t}]},editForm:{},userInfo:{},roleList:[],selectdRoleId:""}},methods:{async getUserList(){const{data:e}=await this.$http.get("users",{params:this.queryInfo});if(200!==e.meta.status)return this.$message.error("获取用户列表失败");this.userList=e.data.users,this.total=e.data.total},handleSizeChange(e){this.queryInfo.pagesize=e,this.getUserList()},handleCurrentChange(e){this.queryInfo.pagenum=e,this.getUserList()},async userStateChanged(e){const{data:t}=await this.$http.put(`users/${e.id}/state/${e.mg_state}`);if(200!==t.meta.status)return this.$message.error("更新用户状态失败"),void this.getUserList();this.$message.success("更新用户状态成功")},addFormClosed(){this.$refs.addFormRef.resetFields()},editFormClosed(){this.$refs.editFormRef.resetFields()},setRoleDialogClosed(){this.selectdRoleId=""},addUser(){this.$refs.addFormRef.validate((async e=>{if(!e)return;const{data:t}=await this.$http.post("users",this.addForm);if(201!==t.meta.status)return this.$message.error("添加用户失败");this.$message.success("添加用户成功"),this.addDialogVisible=!1,this.getUserList()}))},editUser(){this.$refs.editFormRef.validate((async e=>{if(!e)return;const{data:t}=await this.$http.put("users/"+this.editForm.id,{email:this.editForm.email,mobile:this.editForm.mobile});if(200!==t.meta.status)return this.$message.error("修改用户失败");this.$message.success("修改用户成功"),this.editDialogVisible=!1,this.getUserList()}))},deleteUser(e){this.$confirm("此操作将永久删除该用户，是否继续","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const{data:t}=await this.$http.delete("users/"+e);if(200!==t.meta.status)return this.$message.error("删除用户失败");this.$message({type:"success",message:"删除用户成功"}),this.getUserList()})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},async showEditDialog(e){const{data:t}=await this.$http.get("users/"+e);if(200!==t.meta.status)return this.$message.error("修改用户失败");this.editForm=t.data,this.editDialogVisible=!0},async setRole(e){this.userInfo=e;const{data:t}=await this.$http.get("roles");if(200!==t.meta.status)return this.$message.error("获取角色列表失败");this.roleList=t.data,this.setRoleDialogVisible=!0},async saveRoleInfo(){if(!this.selectdRoleId)return this.$message.error("请选择要分配的角色");const{data:e}=await this.$http.put(`users/${this.userInfo.id}/role`,{rid:this.selectdRoleId});if(200!==e.meta.status)return this.$message.error("更新角色失败");this.$message.success("更新角色成功"),this.getUserList(),this.setRoleDialogVisible=!1}},created(){this.getUserList()},beforeRouteEnter(e,t,s){s((e=>{sessionStorage.setItem("activePath","users"),e.$store.dispatch("saveNavStatus","users")}))}}),l=i,o=s(1001),n=(0,o.Z)(l,r,a,!1,null,"5f96d02c",null),d=n.exports}}]);
//# sourceMappingURL=user.df8f2603.js.map