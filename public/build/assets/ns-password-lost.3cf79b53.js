import{i as w,bG as F,y as r,z as p,f as a,_ as l,o as t,a as d,b as s,F as S,g as T,e as u,l as f,t as _,q as b,k as c,m as g,s as V}from"./bootstrap.7115ed90.js";import{_ as X}from"./ns-numpad.294977cb.js";const N={name:"ns-login",data(){return{fields:[],xXsrfToken:null,validation:new w,isSubitting:!1}},mounted(){F([r.get("/api/nexopos/v4/fields/ns.password-lost"),r.get("/sanctum/csrf-cookie")]).subscribe(i=>{this.fields=this.validation.createFields(i[0]),this.xXsrfToken=r.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>p.doAction("ns-login-mounted",this),100)},i=>{a.error(i.message||l("An unexpected error occured."),l("OK"),{duration:0}).subscribe()})},methods:{__:l,requestRecovery(){if(!this.validation.validateFields(this.fields))return a.error(l("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),p.applyFilters("ns-password-lost-submit",!0)&&(this.isSubitting=!0,r.post("/auth/password-lost",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe(e=>{a.success(e.message).subscribe(),setTimeout(()=>{document.location=e.data.redirectTo},500)},e=>{this.isSubitting=!1,this.validation.enableFields(this.fields),e.data&&this.validation.triggerFieldsErrors(this.fields,e.data),a.error(e.message).subscribe()}))}}},R={class:"bg-white rounded shadow overflow-hidden transition-all duration-100"},B={class:"p-3 -my-2"},C={key:0,class:"py-2 fade-in-entrance anim-duration-300"},j={key:0,class:"flex items-center justify-center py-10"},E={class:"flex w-full items-center justify-center py-4"},q={href:"/sign-in",class:"hover:underline text-blue-600 text-sm"},z={class:"flex justify-between items-center bg-gray-200 p-3"};function K(i,e,O,A,n,o){const v=c("ns-field"),m=c("ns-spinner"),y=c("ns-button"),k=c("ns-link");return t(),d("div",R,[s("div",B,[n.fields.length>0?(t(),d("div",C,[(t(!0),d(S,null,T(n.fields,(h,x)=>(t(),g(v,{key:x,field:h},null,8,["field"]))),128))])):u("",!0)]),n.fields.length===0?(t(),d("div",j,[f(m,{border:"4",size:"16"})])):u("",!0),s("div",E,[s("a",q,_(o.__("Remember Your Password ?")),1)]),s("div",z,[s("div",null,[f(y,{onClick:e[0]||(e[0]=h=>o.requestRecovery()),class:"justify-between",type:"info"},{default:b(()=>[n.isSubitting?(t(),g(m,{key:0,class:"mr-2",size:"6",border:"2"})):u("",!0),s("span",null,_(o.__("Submit")),1)]),_:1})]),s("div",null,[f(k,{href:"/sign-up",type:"success"},{default:b(()=>[V(_(o.__("Register")),1)]),_:1})])])])}var P=X(N,[["render",K]]);export{P as default};
