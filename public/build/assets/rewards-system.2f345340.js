import{i as C,f as u,y as v,_ as n,o,a as l,l as k,e as h,F as f,b as t,r as c,n as N,w as R,v as U,t as m,g as b,k as _,s as y,m as w,q as j}from"./bootstrap.7115ed90.js";import{_ as S}from"./ns-numpad.294977cb.js";const B={name:"ns-rewards-system",mounted(){this.loadForm(),console.log(this.rules)},data:()=>({formValidation:new C,form:{},nsSnackBar:u,nsHttpClient:v}),props:["submit-method","submit-url","return-url","src","rules"],methods:{__:n,submit(){if(this.form.rules.length===0)return u.error(this.$slots["error-no-rules"]?this.$slots["error-no-rules"]:n("No rules has been provided.")).subscribe();if(this.form.rules.filter(s=>s.filter(r=>!(r.value>=0)&&r.type!=="hidden").length>0).length>0)return u.error(this.$slots["error-no-valid-rules"]?this.$slots["error-no-valid-rules"]:n("No valid run were provided.")).subscribe();if(this.formValidation.validateForm(this.form).length>0)return u.error(this.$slots["error-invalid-form"]?this.$slots["error-invalid-form"][0].text:n("Unable to proceed, the form is invalid."),this.$slots.okay?this.$slots.okay[0].text:n("OK")).subscribe();if(this.formValidation.disableForm(this.form),this.submitUrl===void 0)return u.error(this.$slots["error-no-submit-url"]?this.$slots["error-no-submit-url"][0].text:n("Unable to proceed, no valid submit URL is defined."),this.$slots.okay?this.$slots.okay[0].text:n("OK")).subscribe();const e={...this.formValidation.extractForm(this.form),rules:this.form.rules.map(s=>{const r={};return s.forEach(p=>{r[p.name]=p.value}),r})};v[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,e).subscribe(s=>{if(s.status==="success")return document.location=this.returnUrl;this.formValidation.enableForm(this.form)},s=>{this.formValidation.triggerError(this.form,s.response.data),this.formValidation.enableForm(this.form),u.error(s.data.message||n("An unexpected error has occured"),void 0,{duration:5e3}).subscribe()})},handleGlobalChange(e){this.globallyChecked=e,this.rows.forEach(s=>s.$checked=e)},loadForm(){v.get(`${this.src}`).subscribe(s=>{this.form=this.parseForm(s.form)})},parseForm(e){e.main.value=e.main.value===void 0?"":e.main.value,e.main=this.formValidation.createFields([e.main])[0];let s=0;for(let r in e.tabs)s===0&&(e.tabs[r].active=!0),e.tabs[r].active=e.tabs[r].active===void 0?!1:e.tabs[r].active,e.tabs[r].fields=this.formValidation.createFields(e.tabs[r].fields),s++;return e},getRuleForm(){return JSON.parse(JSON.stringify(this.form.ruleForm))},addRule(){this.form.rules.push(this.getRuleForm())},removeRule(e){this.form.rules.splice(e,1)}}},O={class:"form flex-auto flex flex-col",id:"crud-form"},q={key:0,class:"flex items-center justify-center flex-auto"},E={class:"flex flex-col"},L={class:"flex justify-between items-center"},M={for:"title",class:"font-bold my-2 text-primary"},A={for:"title",class:"text-sm my-2 text-primary"},D=["href"],G=["disabled"],J=["disabled"],K={key:0,class:"text-xs text-primary py-1"},T={id:"points-wrapper",class:"flex -mx-4 mt-4"},z={class:"w-full md:w-1/3 lg:1/4 px-4"},H={class:"ns-box rounded shadow"},P={class:"header ns-box-header border-b p-2"},I={class:"body p-2"},Q={class:"ns-box rounded"},W={class:"ns-body p-2 flex justify-between items-center my-3"},X={class:"text-primary"},Y={class:"ns-button info"},Z=t("i",{class:"las la-plus"},null,-1),ee=[Z],se={class:"w-full md:w-2/3 lg:3/4 px-4 -m-3 flex flex-wrap items-start justify-start"},te={class:"rounded shadow ns-box flex-auto"},re={class:"body p-2"},oe={class:"header border-t ns-box-footer p-2 flex justify-end"},ie=t("i",{class:"las la-times"},null,-1);function le(e,s,r,p,ne,a){const $=_("ns-spinner"),x=_("ns-field"),F=_("ns-button");return o(),l("div",O,[Object.values(e.form).length===0?(o(),l("div",q,[k($)])):h("",!0),Object.values(e.form).length>0?(o(),l(f,{key:1},[t("div",E,[t("div",L,[t("label",M,[c(e.$slots,"title",{},()=>[y(m(a.__("No title Provided")),1)])]),t("div",A,[e.returnUrl?(o(),l("a",{key:0,href:e.returnUrl,class:"rounded-full border ns-inset-button error px-2 py-1"},"Return",8,D)):h("",!0)])]),t("div",{class:N([e.form.main.disabled?"disabled":e.form.main.errors.length>0?"error":"info","input-group flex border-2 rounded overflow-hidden"])},[R(t("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>e.form.main.value=i),onBlur:s[1]||(s[1]=i=>e.formValidation.checkField(e.form.main)),onChange:s[2]||(s[2]=i=>e.formValidation.checkField(e.form.main)),disabled:e.form.main.disabled,type:"text",class:"flex-auto text-primary outline-none h-10 px-2"},null,40,G),[[U,e.form.main.value]]),t("button",{disabled:e.form.main.disabled,onClick:s[3]||(s[3]=i=>a.submit()),class:"outline-none px-4 h-10 border-l border-tertiary"},[c(e.$slots,"save",{},()=>[y(m(a.__("Save")),1)])],8,J)],2),e.form.main.description&&e.form.main.errors.length===0?(o(),l("p",K,m(e.form.main.description),1)):h("",!0),(o(!0),l(f,null,b(e.form.main.errors,(i,d)=>(o(),l("p",{class:"text-xs py-1 text-error-tertiary",key:d},[t("span",null,[c(e.$slots,"error-required",{},()=>[y(m(i.identifier),1)])])]))),128))]),t("div",T,[t("div",z,[t("div",H,[t("div",P,m(a.__("General")),1),t("div",I,[(o(!0),l(f,null,b(e.form.tabs.general.fields,(i,d)=>(o(),w(x,{class:"mb-2",key:d,field:i},null,8,["field"]))),128))])]),t("div",Q,[t("div",W,[c(e.$slots,"add",{},()=>[t("span",X,m(a.__("Add Rule")),1)]),t("div",Y,[t("button",{onClick:s[4]||(s[4]=i=>a.addRule()),class:"rounded font-semibold flex items-center justify-center h-10 w-10"},ee)])])])]),t("div",se,[(o(!0),l(f,null,b(e.form.rules,(i,d)=>(o(),l("div",{class:"w-full md:w-1/2 p-3",key:d},[t("div",te,[t("div",re,[(o(!0),l(f,null,b(i,(g,V)=>(o(),w(x,{class:"mb-2",field:g,key:V},null,8,["field"]))),128))]),t("div",oe,[k(F,{onClick:g=>a.removeRule(d),type:"error"},{default:j(()=>[ie]),_:2},1032,["onClick"])])])]))),128))])])],64)):h("",!0)])}var ue=S(B,[["render",le]]);export{ue as default};
