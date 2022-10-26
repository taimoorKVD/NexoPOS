import{s as C,p as f,m as b,_ as y,o as r,a as o,q as g,e as h,F as u,f as l,b as v,t as c,n as k,k as T,x as N,r as m,j as F,h as p,i as O}from"./bootstrap.4fc50695.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";const U={name:"ns-create-coupons",mounted(){this.loadForm()},computed:{validTabs(){if(this.form){const e=[];for(let t in this.form.tabs)["selected_products","selected_categories"].includes(t)&&e.push(this.form.tabs[t]);return e}return[]},activeValidTab(){return this.validTabs.filter(e=>e.active)[0]},generalTab(){const e=[];for(let t in this.form.tabs)["general"].includes(t)&&e.push(this.form.tabs[t]);return e}},data(){return{formValidation:new C,form:{},nsSnackBar:f,nsHttpClient:b,options:new Array(40).fill("").map((e,t)=>({label:"Foo"+t,value:"bar"+t}))}},props:["submit-method","submit-url","return-url","src","rules"],methods:{__:y,setTabActive(e){this.validTabs.forEach(t=>t.active=!1),e.active=!0},submit(){if(this.formValidation.validateForm(this.form).length>0)return f.error(this.$slots["error-invalid-form"]?this.$slots["error-invalid-form"][0].text:"No error message provided for having an invalid form.",this.$slots.okay?this.$slots.okay[0].text:"OK").subscribe();if(this.submitUrl===void 0)return f.error(this.$slots["error-no-submit-url"]?this.$slots["error-no-submit-url"][0].text:"No error message provided for not having a valid submit url.",this.$slots.okay?this.$slots.okay[0].text:"OK").subscribe();this.formValidation.disableForm(this.form);const e={...this.formValidation.extractForm(this.form)};b[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,e).subscribe(t=>{if(t.status==="success")return document.location=this.returnUrl;this.formValidation.enableForm(this.form)},t=>{f.error(t.message||y("An unexpected error occured."),void 0,{duration:5e3}).subscribe(),t.response&&this.formValidation.triggerError(this.form,t.response.data),this.formValidation.enableForm(this.form)})},handleGlobalChange(e){this.globallyChecked=e,this.rows.forEach(t=>t.$checked=e)},loadForm(){b.get(`${this.src}`).subscribe(t=>{this.form=this.parseForm(t.form)})},parseForm(e){e.main.value=e.main.value===void 0?"":e.main.value,e.main=this.formValidation.createFields([e.main])[0];let t=0;for(let n in e.tabs)t===1&&e.tabs[n].active===void 0&&(e.tabs[n].active=!0),e.tabs[n].active=e.tabs[n].active===void 0?!1:e.tabs[n].active,e.tabs[n].fields=this.formValidation.createFields(e.tabs[n].fields),t++;return e},addOption(e){const t=this.options.indexOf(e);t>=0&&(this.options[t].selected=!this.options[t].selected)},removeOption({option:e,index:t}){e.selected=!1},getRuleForm(){return this.form.ruleForm},addRule(){this.form.rules.push(this.getRuleForm())},removeRule(e){this.form.rules.splice(e,1)}}},j={class:"form flex-auto flex flex-col",id:"crud-form"},R={key:0,class:"flex items-center justify-center flex-auto"},q={class:"flex flex-col"},A={class:"flex justify-between items-center"},E={for:"title",class:"font-bold my-2 text-primary"},S={for:"title",class:"text-sm my-2"},M=["href"],D=["disabled"],K=["disabled"],L={key:0,class:"text-xs text-primary py-1"},z={id:"form-container",class:"-mx-4 flex flex-wrap mt-4"},G={class:"px-4 w-full md:w-1/2"},H={class:"px-4 w-full md:w-1/2"},P={id:"tabbed-card"},I={id:"card-header",class:"flex flex-wrap ns-tab"},J=["onClick"],Q={class:"ns-tab-item rounded-br-lg rounded-bl-lg shadow p-2"};function W(e,t,n,X,s,a){const V=F("ns-spinner"),_=F("ns-field");return r(),o("div",j,[Object.values(s.form).length===0?(r(),o("div",R,[g(V)])):h("",!0),Object.values(s.form).length>0?(r(),o(u,{key:1},[l("div",q,[l("div",A,[l("label",E,[v(e.$slots,"title",{},()=>[p("No title Provided")])]),l("div",S,[e.returnUrl?(r(),o("a",{key:0,href:e.returnUrl,class:"rounded-full border ns-inset-button error px-2 py-1"},c(a.__("Return")),9,M)):h("",!0)])]),l("div",{class:k([s.form.main.disabled?"disabled":s.form.main.errors.length>0?"error":"info","input-group flex border-2 rounded overflow-hidden"])},[T(l("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>s.form.main.value=i),onBlur:t[1]||(t[1]=i=>s.formValidation.checkField(s.form.main)),onChange:t[2]||(t[2]=i=>s.formValidation.checkField(s.form.main)),disabled:s.form.main.disabled,type:"text",class:"flex-auto text-primary outline-none h-10 px-2"},null,40,D),[[N,s.form.main.value]]),l("button",{disabled:s.form.main.disabled,onClick:t[3]||(t[3]=i=>a.submit()),class:"outline-none px-4 h-10 border-l border-tertia"},[v(e.$slots,"save",{},()=>[p(c(a.__("Save")),1)])],8,K)],2),s.form.main.description&&s.form.main.errors.length===0?(r(),o("p",L,c(s.form.main.description),1)):h("",!0),(r(!0),o(u,null,m(s.form.main.errors,(i,d)=>(r(),o("p",{class:"text-xs py-1 text-error-tertiary",key:d},[l("span",null,[v(e.$slots,"error-required",{},()=>[p(c(i.identifier),1)])])]))),128))]),l("div",z,[l("div",G,[(r(!0),o(u,null,m(a.generalTab,(i,d)=>(r(),o("div",{class:"rounded ns-box shadow p-2",key:d},[(r(!0),o(u,null,m(i.fields,(x,w)=>(r(),O(_,{key:w,field:x},null,8,["field"]))),128))]))),128))]),l("div",H,[l("div",P,[l("div",I,[(r(!0),o(u,null,m(a.validTabs,(i,d)=>(r(),o("div",{onClick:x=>a.setTabActive(i),class:k([i.active?"active":"inactive","tab cursor-pointer px-4 py-2 rounded-tl-lg rounded-tr-lg"]),key:d},c(i.label),11,J))),128))]),l("div",Q,[(r(!0),o(u,null,m(a.activeValidTab.fields,(i,d)=>(r(),o("div",{class:"flex flex-col",key:d},[g(_,{field:i},null,8,["field"])]))),128))])])])])],64)):h("",!0)])}var $=B(U,[["render",W]]);export{$ as default};