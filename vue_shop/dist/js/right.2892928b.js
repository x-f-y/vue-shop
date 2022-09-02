"use strict";(self["webpackChunkvue_shop"]=self["webpackChunkvue_shop"]||[]).push([[595],{6913:function(e,t,l){l.r(t),l.d(t,{default:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v("权限管理")]),t("el-breadcrumb-item",[e._v("权限列表")])],1),t("el-card",[t("el-table",{attrs:{data:e.rightList,border:"",stripe:""}},[t("el-table-column",{attrs:{type:"index",label:"#"}}),t("el-table-column",{attrs:{label:"权限名称",prop:"authName"}}),t("el-table-column",{attrs:{label:"路径",prop:"path"}}),t("el-table-column",{attrs:{label:"权限等级"},scopedSlots:e._u([{key:"default",fn:function(l){return["0"===l.row.level?t("el-tag",[e._v("一级")]):"1"===l.row.level?t("el-tag",{attrs:{type:"success"}},[e._v("二级")]):"2"===l.row.level?t("el-tag",{attrs:{type:"warning"}},[e._v("三级")]):e._e()]}}])})],1)],1)],1)},o=[],i={name:"Rights",data(){return{rightList:[]}},methods:{async getRightList(){const{data:e}=await this.$http.get("rights/list");if(200!==e.meta.status)return this.$message.error("获取权限列表失败");this.rightList=e.data}},created(){this.getRightList()},beforeRouteEnter(e,t,l){l((e=>{sessionStorage.setItem("activePath","rights"),e.$store.dispatch("saveNavStatus","rights")}))}},a=i,r=l(1001),n=(0,r.Z)(a,s,o,!1,null,"3194c71c",null),c=n.exports},1681:function(e,t,l){l.r(t),l.d(t,{default:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("div",[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v("权限管理")]),t("el-breadcrumb-item",[e._v("角色列表")])],1),t("el-card",[t("el-row",[t("el-col",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addRoleDialogVisible=!0}}},[e._v("添加角色")])],1)],1),t("el-table",{attrs:{data:e.roleList,border:"",stripe:""}},[t("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(l){return e._l(l.row.children,(function(s,o){return t("el-row",{key:s.id,class:["bdbottom",0===o?"bdtop":"","vcenter"]},[t("el-col",{attrs:{span:5}},[t("el-tag",{attrs:{closable:""},on:{close:function(t){return e.removeRightById(l.row,s.id)}}},[e._v(e._s(s.authName))]),t("i",{staticClass:"el-icon-caret-right"})],1),t("el-col",{attrs:{span:19}},e._l(s.children,(function(s,o){return t("el-row",{key:s.id,class:[0===o?"":"bdtop","vcenter"]},[t("el-col",{attrs:{span:6}},[t("el-tag",{attrs:{type:"success",closable:""},on:{close:function(t){return e.removeRightById(l.row,s.id)}}},[e._v(e._s(s.authName))]),t("i",{staticClass:"el-icon-caret-right"})],1),t("el-col",{attrs:{span:18}},e._l(s.children,(function(s){return t("el-tag",{key:s.id,attrs:{type:"warning",closable:""},on:{close:function(t){return e.removeRightById(l.row,s.id)}}},[e._v(e._s(s.authName))])})),1)],1)})),1)],1)}))}}])}),t("el-table-column",{attrs:{label:"#",type:"index"}}),t("el-table-column",{attrs:{label:"角色名称",prop:"roleName"}}),t("el-table-column",{attrs:{label:"角色描述",prop:"roleDesc"}}),t("el-table-column",{attrs:{label:"操作",width:"285px"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(t){return e.showEditRoleDialog(l.row)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(t){return e.deleteRole(l.row.id)}}},[e._v("删除")]),t("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(t){return e.showSetRightDialog(l.row)}}},[e._v("分配权限")])]}}])})],1)],1),t("el-dialog",{attrs:{title:"分配权限",visible:e.setRightDialogVisible},on:{"update:visible":function(t){e.setRightDialogVisible=t},close:e.setRightDialogClosed}},[t("el-tree",{ref:"treeRef",attrs:{data:e.rightList,props:e.treeProps,"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":e.defKeys}}),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.setRightDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.allotRights}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"添加角色",visible:e.addRoleDialogVisible},on:{"update:visible":function(t){e.addRoleDialogVisible=t},close:e.addRoleDialogClosed}},[t("el-form",{ref:"addRoleFormRef",attrs:{"status-icon":"",model:e.addRoleForm,rules:e.addRoleFormRules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[t("el-input",{model:{value:e.addRoleForm.roleName,callback:function(t){e.$set(e.addRoleForm,"roleName",t)},expression:"addRoleForm.roleName"}})],1),t("el-form-item",{attrs:{label:"角色描述"}},[t("el-input",{model:{value:e.addRoleForm.roleDesc,callback:function(t){e.$set(e.addRoleForm,"roleDesc",t)},expression:"addRoleForm.roleDesc"}})],1)],1),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.addRoleDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改角色",visible:e.editRoleDialogVisible},on:{"update:visible":function(t){e.editRoleDialogVisible=t}}},[t("el-form",{attrs:{model:e.editRoleForm,"label-width":"70px"}},[t("el-form-item",{attrs:{label:"角色名称"}},[t("el-select",{attrs:{placeholder:"请选择角色名称"},model:{value:e.editRoleForm.roleName,callback:function(t){e.$set(e.editRoleForm,"roleName",t)},expression:"editRoleForm.roleName"}},e._l(e.roleList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.roleName,value:e.roleName}})})),1)],1),t("el-form-item",{attrs:{label:"角色描述"}},[t("el-input",{model:{value:e.editRoleForm.roleDesc,callback:function(t){e.$set(e.editRoleForm,"roleDesc",t)},expression:"editRoleForm.roleDesc"}})],1)],1),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.editRoleDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.editRole}},[e._v("确 定")])],1)],1)],1)},o=[],i={name:"Roles",data(){return{roleList:[],setRightDialogVisible:!1,addRoleDialogVisible:!1,editRoleDialogVisible:!1,rightList:[],treeProps:{children:"children",label:"authName"},defKeys:[],roleId:0,addRoleForm:{roleName:"",roleDesc:""},editRoleForm:{roleName:"",roleDesc:""},addRoleFormRules:{roleName:[{trigger:"blur",required:!0,message:"请输入角色名称"}]}}},methods:{async getRoleList(){const{data:e}=await this.$http.get("roles");if(200!==e.meta.status)return this.$message.error("获取角色列表失败");this.roleList=e.data},async removeRightById(e,t){const l=await this.$confirm("此操作将永久删除该权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((e=>e));if("cancel"===l)return this.$message.info("已取消删除");if("confirm"===l){const{data:l}=await this.$http.delete(`roles/${e.id}/rights/${t}`);if(200!==l.meta.status)return this.$message.error("删除权限失败");e.children=l.data}},async showSetRightDialog(e){this.roleId=e.id;const{data:t}=await this.$http.get("rights/tree");if(200!==t.meta.status)return this.$message.error("获取权限失败");this.rightList=t.data,this.getLeafKeys(e),this.setRightDialogVisible=!0},getLeafKeys(e){e.children?e.children.forEach((e=>{this.getLeafKeys(e)})):this.defKeys.push(e.id)},setRightDialogClosed(){this.defKeys=[]},addRoleDialogClosed(){this.$refs.addRoleFormRef.resetFields(),this.addRoleForm.roleDesc=""},async allotRights(){const e=[...this.$refs.treeRef.getCheckedKeys(),...this.$refs.treeRef.getHalfCheckedKeys()],t=e.join(","),{data:l}=await this.$http.post(`roles/${this.roleId}/rights`,{rids:t});if(200!==l.meta.status)return this.$message.error("分配权限失败");this.$message.success("分配权限成功"),this.getRoleList(),this.setRightDialogVisible=!1},addRole(){this.$refs.addRoleFormRef.validate((async e=>{if(!e)return;const{data:t}=await this.$http.post("roles",this.addRoleForm);if(201!==t.meta.status)return this.$message.error("添加角色失败");this.$message.success("添加角色成功"),this.addRoleDialogVisible=!1,this.getRoleList()}))},showEditRoleDialog(e){this.roleId=e.id,this.editRoleForm.roleName=e.roleName,this.editRoleForm.roleDesc=e.roleDesc,this.editRoleDialogVisible=!0},async editRole(){const{data:e}=await this.$http.put("roles/"+this.roleId,this.editRoleForm);if(200!==e.meta.status)return this.$message.error("修改角色失败");this.$message.success("修改角色成功"),this.getRoleList(),this.editRoleDialogVisible=!1},async deleteRole(e){const t=await this.$confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((e=>e));if("cancel"===t)return this.$message.info("已取消删除");if("confirm"===t){const{data:t}=await this.$http.delete("roles/"+e);if(200!==t.meta.status)return this.$message.error("删除角色失败");this.$message.success("删除角色成功"),this.getRoleList()}}},created(){this.getRoleList()},beforeRouteEnter(e,t,l){l((e=>{sessionStorage.setItem("activePath","roles"),e.$store.dispatch("saveNavStatus","roles")}))}},a=i,r=l(1001),n=(0,r.Z)(a,s,o,!1,null,"080523ce",null),c=n.exports}}]);
//# sourceMappingURL=right.2892928b.js.map