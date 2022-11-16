import{_ as l,j as M,p as N,k as g,o as a,a as c,b as o,t as d,l as v,q as p,s as b,e as f,F as m,g as C,n as A,i as B,f as y,m as w}from"./bootstrap.7115ed90.js";import j from"./ns-alert-popup.492db84d.js";import"./vue-upload-component.563fc299.js";import{_ as E}from"./ns-numpad.294977cb.js";import S from"./ns-pos-confirm-popup.93a69e6e.js";import{n as F}from"./currency.8eb47013.js";const V={name:"ns-expense-selector",data(){return{configurations:[],warningMessage:!1,type:null}},mounted(){this.configurations=this.$popupParams.configurations,this.warningMessage=this.$popupParams.warningMessage,this.type=this.$popupParams.type},methods:{__:l,nsCurrency:F,popupResolver:M,popupCloser:N,selectType(e){this.popupResolver(e)}}},O={class:"w-6/7-screen md:w-4/7-screen lg:w-3/7-screen flex flex-col shadow-lg ns-box"},U={class:"ns-box-header p-2 border-b flex justify-between items-center"},R={class:"font-bold text-xl"},W={key:0,class:"p-2"},q=["innerHTML"],H={class:"grid grid-cols-2"},D=["onClick"],J=["src","alt"],Y={class:"font-bold"};function z(e,s,n,h,t,i){const _=g("ns-notice");return a(),c("div",O,[o("div",U,[o("h3",R,d(i.__("Expense Type")),1)]),t.warningMessage?(a(),c("div",W,[v(_,{color:"info"},{title:p(()=>[b(d(i.__("Warning")),1)]),default:p(()=>[o("span",{innerHTML:t.warningMessage},null,8,q)]),_:1})])):f("",!0),o("div",H,[(a(!0),c(m,null,C(t.configurations,r=>(a(),c("div",{class:A([t.type===r.identifier?"info":"","h-40 elevation-surface hoverable flex-col flex items-center justify-center cursor-pointer"]),onClick:k=>i.selectType(r),key:r.identifier},[o("img",{src:r.icon,class:"w-20 my-2",alt:r.label},null,8,J),o("h3",Y,d(r.label),1)],10,D))),128))])])}var G=E(V,[["render",z]]);const I={props:[],data(){return{configurations:[],activeTab:"create-customers",selectedConfiguration:{},isLoading:!1,tabs:[],unavailableType:!1,expense:{},originalRecurrence:[],validation:new B,recurrence:[],warningMessage:!1}},computed:{},mounted(){window.nsExpenseData!==void 0&&(this.expense=window.nsExpenseData),this.init()},watch:{},methods:{__:l,nsCurrency:F,confirmBeforeSave(){Popup.show(S,{title:l("Confirm Your Action"),message:l("The expense is about to be saved. Would you like to confirm your action ?"),onAction:e=>{e&&this.saveExpense()}})},saveExpense(){const e=this.expense.id!==void 0?"put":"post",s=this.expense.id!==void 0?`/api/nexopos/v4/crud/ns.expenses/${this.expense.id}`:"/api/nexopos/v4/crud/ns.expenses",n=this.configurations.filter(r=>r.identifier===this.selectedConfiguration.identifier);if(n.length!==1)return y.error(l("No configuration were choosen. Unable to proceed.")).subscribe();if(!this.validation.validateFields(n[0].fields))return y.error(l("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(n[0].fields);const h=this.validation.extractFields(n[0].fields),t=this.validation.extractFields(this.recurrence),i={...h,...t},_={general:{}};for(let r in i)r==="name"?_[r]=i[r]:_.general[r]=i[r];nsHttpClient[e](s,_).subscribe({next:r=>{y.success(r.message).subscribe(),setTimeout(()=>{document.location=r.data.editUrl},1e3)},error:r=>{this.validation.enableFields(n[0].fields),y.error(r.message||l("An unexpected error occured.")).subscribe()}})},updateSelectLabel(){this.recurrence.length>0&&(this.recurrence[0].options=this.recurrence[0].options.map((e,s)=>{const n=this.originalRecurrence[0].options[s];return["x_after_month_starts","x_before_month_ends"].includes(e.value)?(e.label=n.label.replace("{day}",this.recurrence[1].value>=0&&this.recurrence[1].value<=1?`${this.recurrence[1].value} day`:`${this.recurrence[1].value} days`),e.label=n.label.replace("{day}",this.recurrence[1].value>=0&&this.recurrence[1].value<=1?`${this.recurrence[1].value} day`:`${this.recurrence[1].value} days`)):["on_specific_day"].includes(e.value)&&(e.label=n.label.replace("{day}",this.ordinalSuffix(this.recurrence[1].value))),e}))},setActiveTab(e){this.activeTab=e,this.updateSelectLabel()},executeCondition(e,s){if(e.shows){const n=s.filter(t=>Object.keys(e.shows).includes(t.name));return n.filter(t=>e.shows[t.name].includes(t.value)).length===n.length}return!0},setTabs(){const e=[{label:this.selectedConfiguration.label||l("N/A"),identifier:"general",active:!0,fields:this.selectedConfiguration.fields}];["ns.recurring-expenses","ns.salary-expenses"].includes(this.selectedConfiguration.identifier)&&e.push({label:l("Conditions"),identifier:"recurrence"}),this.tabs=e},async init(){try{this.isLoading=!0;const{configurations:e,recurrence:s,warningMessage:n}=await this.loadConfiguration();if(this.configurations=e,this.recurrence=s,this.warningMessage=n,this.originalRecurrence=JSON.parse(JSON.stringify(s)),this.expense.type===void 0)await this.selectExpenseType();else{const h=this.configurations.filter(t=>t.identifier===this.expense.type);if(h.length==0)return this.unavailableType=!0,this.isLoading=!1,Popup.show(j,{title:l("Unable to load the Expense"),message:l("You cannot edit this expense if NexoPOS cannot perform background requests.")});this.processSelectedConfiguration(h[0])}this.isLoading=!1,this.setTabs()}catch(e){console.log(e)}},processSelectedConfiguration(e){e.fields=this.validation.createFields(e.fields),e.fields.forEach(s=>{s.name==="recurring"&&(["ns.recurring-expenses","ns.salary-expenses"].includes(e.identifier)?s.value=!0:s.value=!1),s.name==="type"&&(s.value=e.identifier)}),this.selectedConfiguration=e},async selectExpenseType(){try{const e=await new Promise((s,n)=>{Popup.show(G,{resolve:s,reject:n,configurations:this.configurations,type:this.expense.type,warningMessage:this.warningMessage})});this.processSelectedConfiguration(e)}catch(e){console.log(e)}},confirmTypeChange(){Popup.show(S,{title:l("Change Type"),message:l("By proceeding the current for and all your entries will be cleared. Would you like to proceed?"),onAction:e=>{e&&(delete this.expense.type,this.init())}})},ordinalSuffix(e){var s=e%10,n=e%100;return s==1&&n!=11?e+"st":s==2&&n!=12?e+"nd":s==3&&n!=13?e+"rd":e+"th"},loadConfiguration(){return new Promise((e,s)=>{nsHttpClient.get(`/api/nexopos/v4/expenses/configurations/${this.expense.id?this.expense.id:""}`).subscribe({next:n=>{e(n)},error:n=>{s(n)}})})}}},K={key:0,class:"h-half w-full flex items-center justify-center"},Q={key:1,class:"flex items-center justify-center"},X={key:2},Z={class:"md:flex hidden flex-col md:flex-row -mx-2"},$={class:"px-2"},ee={class:"ns-button info"},se={class:"px-2"},ne={class:"ns-button success"},te={class:"my-3 md:hidden"},ie={class:"flex -mx-2"},re={class:"px-2"},oe={class:"ns-button info"},ae={class:"px-2"},le={class:"ns-button success"};function ce(e,s,n,h,t,i){const _=g("ns-spinner"),r=g("ns-button"),k=g("ns-notice"),T=g("ns-field"),L=g("ns-tabs-item"),P=g("ns-tabs");return a(),c(m,null,[t.isLoading&&!t.unavailableType?(a(),c("div",K,[v(_)])):f("",!0),t.unavailableType&&!t.isLoading?(a(),c("div",Q,[v(k,{color:"warning"},{title:p(()=>[b(d(i.__("Unable to edit this expense")),1)]),description:p(()=>[b(d(i.__("This expense was created with a type that is no longer available. This type is no longer available because NexoPOS is unable to perform background requests.")),1)]),controls:p(()=>[v(r,{target:"_blank",href:"https://my.nexopos.com/en/documentation/troubleshooting/workers-or-async-requests-disabled?utm_source=nexopos&utm_campaign=warning&utm_medium=app",type:"warning"},{default:p(()=>[b(d(i.__("Learn More")),1)]),_:1})]),_:1})])):f("",!0),t.tabs.length>0&&!t.isLoading?(a(),c("div",X,[v(P,{active:t.activeTab,onActive:s[5]||(s[5]=u=>i.setActiveTab(u))},{extra:p(()=>[o("div",Z,[o("div",$,[o("div",ee,[o("button",{onClick:s[0]||(s[0]=u=>i.confirmTypeChange()),class:"py-1 px-2 text-sm rounded"},d(i.__("Change Type")),1)])]),o("div",se,[o("div",ne,[o("button",{onClick:s[1]||(s[1]=u=>i.confirmBeforeSave()),class:"py-1 px-2 text-sm rounded"},d(i.__("Save Expense")),1)])])])]),default:p(()=>[(a(!0),c(m,null,C(t.tabs,u=>(a(),w(L,{key:u.identifier,identifier:u.identifier,label:u.label},{default:p(()=>[u.fields?(a(),c(m,{key:0},[t.selectedConfiguration.identifier==="ns.salary-expenses"?(a(),w(k,{key:0,class:"mb-2",color:"info"},{title:p(()=>[b(d(i.__("Warning")),1)]),description:p(()=>[b(d(i.__("While selecting salary expense, the amount defined will be multiplied by the total user assigned to the User group selected.")),1)]),_:1})):f("",!0),(a(!0),c(m,null,C(u.fields,x=>(a(),w(T,{key:x.name,field:x},null,8,["field"]))),128))],64)):f("",!0),u.identifier==="recurrence"?(a(!0),c(m,{key:1},C(t.recurrence,x=>(a(),c(m,{key:x.name},[i.executeCondition(x,t.recurrence)?(a(),w(T,{key:0,onChange:s[2]||(s[2]=ue=>i.updateSelectLabel()),field:x},null,8,["field"])):f("",!0)],64))),128)):f("",!0)]),_:2},1032,["identifier","label"]))),128)),o("div",te,[o("div",ie,[o("div",re,[o("div",oe,[o("button",{onClick:s[3]||(s[3]=u=>i.confirmTypeChange()),class:"py-1 px-2 text-sm rounded"},d(i.__("Change Type")),1)])]),o("div",ae,[o("div",le,[o("button",{onClick:s[4]||(s[4]=u=>i.confirmBeforeSave()),class:"py-1 px-2 text-sm rounded"},d(i.__("Save Expense")),1)])])])])]),_:1},8,["active"])])):f("",!0)],64)}var me=E(I,[["render",ce]]);export{me as default};
