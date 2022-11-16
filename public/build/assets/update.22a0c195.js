import{c as x}from"./components.b24267b5.js";import{y as u,f as h,_,k as g,o as i,a as c,b as e,t,e as a,m,q as f,c as y}from"./bootstrap.7115ed90.js";import{_ as b}from"./ns-numpad.294977cb.js";import"./ns-alert-popup.492db84d.js";import"./vue-upload-component.563fc299.js";import"./ns-pos-confirm-popup.93a69e6e.js";import"./ns-media.67eef226.js";import"./ns-notice.d5a21de3.js";import"./ns-numpad-plus.d070e751.js";import"./ns-pos-loading-popup.071ea333.js";import"./ns-paginate.3256d1f6.js";import"./ns-prompt-popup.54ca8e0e.js";const k={name:"ns-database-update",data(){return{files:Update.files,returnLink:Update.returnLink,modules:Update.modules,updating:!1,xXsrfToken:null,updatingModule:!1,error:!1,lastErrorMessage:"",index:0}},computed:{totalModules(){return Object.values(this.modules).length}},mounted(){u.get("/sanctum/csrf-cookie").subscribe(o=>{try{this.xXsrfToken=u.response.config.headers["X-XSRF-TOKEN"],this.proceedUpdate()}catch(r){h.error(r.message).subscribe()}})},methods:{__:_,async proceedUpdate(){this.updating=!0;for(let o in this.files)try{this.index=parseInt(o)+1;const r=await new Promise((d,l)=>{u.post("/api/nexopos/v4/update",{file:this.files[o]},{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe({next:d,error:l})})}catch(r){return this.updating=!1,this.error=!0,this.lastErrorMessage=r.message||_("An unexpected error occured"),h.error(r.message).subscribe()}if(this.index=0,Object.values(this.modules).length>0){this.updatingModule=!0;let o=0;for(let r in this.modules)try{o+=1,this.index=o;const d=await new Promise((l,s)=>{u.post("/api/nexopos/v4/update",{module:this.modules[r]},{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe({next:l,error:s})})}catch(d){return this.updating=!1,this.error=!0,this.lastErrorMessage=d.message||_("An unexpected error occured"),h.error(d.message).subscribe()}}this.error=!1,this.updating=!1,document.location=this.returnLink}}},w={class:"container mx-auto flex-auto items-center justify-center flex"},v={id:"database-update",class:"w-full md:w-2/3 lg:w-1/3"},U=e("div",{class:"flex justify-center items-center py-6"},[e("img",{class:"w-32",src:"/svg/nexopos-variant-1.svg",alt:"NexoPOS"})],-1),M={class:"my-3 rounded shadow ns-box"},X={class:"border-b ns-box-header py-4 flex items-center justify-center"},E={class:"text-xl font-bold"},T={class:"p-2 ns-box-body"},j={class:"text-center text-sm py-4"},N={key:0,class:"border-l-4 text-sm ns-notice error p-4"},O={class:"rounded whitespace-pre-wrap my-2 p-2"},S={class:"border-t ns-box-footer p-2 flex justify-between"},B=e("i",{class:"las la-sync"},null,-1),C={class:"ml-1"},L={class:"flex"},P=e("i",{class:"las la-sync animate-spin"},null,-1),A={key:0},R={key:1,class:"mr-1"},D={key:2},F={key:3,class:"mr-1"},I=e("i",{class:"las la-undo"},null,-1),K={class:"ml-1"};function H(o,r,d,l,s,n){const p=g("ns-button");return i(),c("div",w,[e("div",v,[U,e("div",M,[e("div",X,[e("h3",E,t(n.__("Datebase Update")),1)]),e("div",T,[e("p",j,t(n.__("In order to keep NexoPOS running smoothly with updates, we need to proceed to the database migration. In fact you don't need to do any action, just wait until the process is done and you'll be redirected.")),1),s.error?(i(),c("div",N,[e("p",null,t(n.__("Looks like an error has occured during the update. Usually, giving another shot should fix that. However, if you still don't get any chance."))+" "+t(n.__("Please report this message to the support : ")),1),e("pre",O,t(s.lastErrorMessage),1)])):a("",!0)]),e("div",S,[e("div",null,[s.error?(i(),m(p,{key:0,onClick:r[0]||(r[0]=q=>n.proceedUpdate()),type:"error",class:"rounded shadow-inner"},{default:f(()=>[B,e("span",C,t(n.__("Try Again")),1)]),_:1})):a("",!0)]),e("div",L,[s.updating?(i(),m(p,{key:0,type:"info",class:"rounded shadow-inner"},{default:f(()=>[P,s.updatingModule?a("",!0):(i(),c("span",A,t(n.__("Updating"))+"...",1)),s.updatingModule?a("",!0):(i(),c("span",R,t(s.index)+"/"+t(s.files.length),1)),s.updatingModule?(i(),c("span",D,t(n.__("Updating Modules"))+"...",1)):a("",!0),s.updatingModule?(i(),c("span",F,t(s.index)+"/"+t(n.totalModules),1)):a("",!0)]),_:1})):a("",!0),s.updating?a("",!0):(i(),m(p,{key:1,type:"info",href:s.returnLink,class:"rounded shadow-inner"},{default:f(()=>[I,e("span",K,t(n.__("Return")),1)]),_:1},8,["href"]))])])])])])}var V=b(k,[["render",H]]);window.nsUpdate=y({components:{nsDatabaseUpdate:V}});for(let o in x)window.nsUpdate.component(o,x[o]);window.nsUpdate.mount("#main-container");
