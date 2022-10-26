import{_ as x,m as u,p as _,bG as y,o as i,a as o,f as l,t as m,e as c,F as f,r as p,j as v,n as k,q as h}from"./bootstrap.4fc50695.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";const j=(e,s)=>e?(e=e.toString(),e.length>s?e.substring(0,s)+"...":e):"",C={name:"ns-permissions",filters:[j],data(){return{permissions:[],toggled:!1,roles:[]}},mounted(){this.loadPermissionsAndRoles()},methods:{__:x,selectAllPermissions(e){const s=new Object;if(s[e.namespace]=new Object,!e.locked||e.locked&&confirm(this.$slots["bulk-edit-system-role"]?this.$slots["bulk-edit-system-role"][0].text:'No message has been provided for "bulk-edit-system-role"')){for(let r in e.fields)e.fields[r].value=e.field.value,s[e.namespace][r]=e.field.value;u.put("/api/nexopos/v4/users/roles",s).subscribe(r=>{_.success(r.message,null,{duration:3e3}).subscribe()})}else e.field.value=!e.field.value},submitPermissions(e,s){const r=new Object;r[e.namespace]=new Object,r[e.namespace][s.name]=s.value,u.put("/api/nexopos/v4/users/roles",r).subscribe(d=>{_.success(d.message,null,{duration:3e3}).subscribe()})},loadPermissionsAndRoles(){return y(u.get("/api/nexopos/v4/users/roles"),u.get("/api/nexopos/v4/users/permissions")).subscribe(e=>{this.permissions=e[1],this.roles=e[0].map(s=>(s.fields={},s.field={type:"checkbox",name:s.namespace,value:!1},this.permissions.forEach(r=>{s.fields[r.namespace]={type:"checkbox",value:s.permissions.filter(d=>d.namespace===r.namespace).length>0,name:r.namespace,label:null}}),s))})}}},P={id:"permission-wrapper"},A={class:"rounded shadow ns-box flex"},B={id:"permissions",class:"w- bg-gray-800 flex-shrink-0"},N={class:"h-24 py-4 px-2 border-b border-gray-700 text-gray-100 flex justify-between items-center"},O={key:0},S=l("i",{class:"las la-expand"},null,-1),V=[S],E=l("i",{class:"las la-compress"},null,-1),F=[E],R=["title"],q={key:0},z={key:1},D={class:"flex flex-auto overflow-hidden"},G={class:"overflow-y-auto"},H={class:"text-gray-700 flex"},J={class:"mx-1"},L={class:"mx-1"};function T(e,s,r,d,n,b){const g=v("ns-checkbox");return i(),o("div",P,[l("div",A,[l("div",B,[l("div",N,[n.toggled?c("",!0):(i(),o("span",O,m(b.__("Permissions")),1)),l("div",null,[n.toggled?c("",!0):(i(),o("button",{key:0,onClick:s[0]||(s[0]=t=>n.toggled=!n.toggled),class:"rounded-full bg-white text-gray-700 h-6 w-6 flex items-center justify-center"},V)),n.toggled?(i(),o("button",{key:1,onClick:s[1]||(s[1]=t=>n.toggled=!n.toggled),class:"rounded-full bg-white text-gray-700 h-6 w-6 flex items-center justify-center"},F)):c("",!0)])]),(i(!0),o(f,null,p(n.permissions,t=>(i(),o("div",{key:t.id,class:k([n.toggled?"w-24":"w-54","p-2 border-b border-gray-700 text-gray-100"])},[l("a",{href:"javascript:void(0)",title:t.namespace},[n.toggled?c("",!0):(i(),o("span",q,m(t.name),1)),n.toggled?(i(),o("span",z,m(t.name),1)):c("",!0)],8,R)],2))),128))]),l("div",D,[l("div",G,[l("div",H,[(i(!0),o(f,null,p(n.roles,t=>(i(),o("div",{key:t.id,class:"h-24 py-4 px-2 w-56 items-center border-b justify-center flex role flex-shrink-0 border-r border-table-th-edge"},[l("p",J,[l("span",null,m(t.name),1)]),l("span",L,[h(g,{onChange:a=>b.selectAllPermissions(t),field:t.field},null,8,["onChange","field"])])]))),128))]),(i(!0),o(f,null,p(n.permissions,t=>(i(),o("div",{key:t.id,class:"permission flex"},[(i(!0),o(f,null,p(n.roles,a=>(i(),o("div",{key:a.id,class:"border-b border-table-th-edge w-56 flex-shrink-0 p-2 flex items-center justify-center border-r"},[h(g,{onChange:I=>b.submitPermissions(a,a.fields[t.namespace]),field:a.fields[t.namespace]},null,8,["onChange","field"])]))),128))]))),128))])])])])}var Q=w(C,[["render",T]]);export{Q as default};