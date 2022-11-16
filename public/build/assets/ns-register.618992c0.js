import{i as y,bG as F,y as n,z as h,_ as m,f as d,o as t,a as o,b as s,F as T,g as V,e as p,l,t as c,q as g,k as f,m as X,s as b}from"./bootstrap.7115ed90.js";import{_ as w}from"./ns-numpad.294977cb.js";const N={name:"ns-register",data(){return{fields:[],xXsrfToken:null,validation:new y}},mounted(){F([n.get("/api/nexopos/v4/fields/ns.register"),n.get("/sanctum/csrf-cookie")]).subscribe(r=>{this.fields=this.validation.createFields(r[0]),this.xXsrfToken=n.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>h.doAction("ns-register-mounted",this))})},methods:{__:m,register(){if(!this.validation.validateFields(this.fields))return d.error(m("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),h.applyFilters("ns-register-submit",!0)&&n.post("/auth/sign-up",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe(e=>{d.success(e.message).subscribe(),setTimeout(()=>{document.location=e.data.redirectTo},1500)},e=>{this.validation.triggerFieldsErrors(this.fields,e),this.validation.enableFields(this.fields),d.error(e.message).subscribe()})}}},B={class:"ns-box rounded shadow overflow-hidden transition-all duration-100"},C={class:"ns-box-body"},S={class:"p-3 -my-2"},E={key:0,class:"py-2 fade-in-entrance anim-duration-300"},R={key:0,class:"flex items-center justify-center"},j={class:"flex w-full items-center justify-center py-4"},A={href:"/sign-in",class:"link hover:underline text-sm"},H={class:"flex ns-box-footer border-t justify-between items-center p-3"};function K(r,e,O,q,a,i){const v=f("ns-field"),k=f("ns-spinner"),u=f("ns-button");return t(),o("div",B,[s("div",C,[s("div",S,[a.fields.length>0?(t(),o("div",E,[(t(!0),o(T,null,V(a.fields,(_,x)=>(t(),X(v,{key:x,field:_},null,8,["field"]))),128))])):p("",!0)]),a.fields.length===0?(t(),o("div",R,[l(k)])):p("",!0),s("div",j,[s("a",A,c(i.__("Already registered ?")),1)])]),s("div",H,[s("div",null,[l(u,{onClick:e[0]||(e[0]=_=>i.register()),type:"info"},{default:g(()=>[b(c(i.__("Register")),1)]),_:1})]),s("div",null,[l(u,{link:!0,href:"/sign-in",type:"success"},{default:g(()=>[b(c(i.__("Sign In")),1)]),_:1})])])])}var G=w(N,[["render",K]]);export{G as default};
