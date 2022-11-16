import{h as l,_ as i,f as c,y as h,o as _,a as p,b as t,l as b,t as s,F as x,g as y,k as f}from"./bootstrap.7115ed90.js";import{b as g,e as D}from"./components.b24267b5.js";import{n as v}from"./currency.8eb47013.js";import{_ as k}from"./ns-numpad.294977cb.js";import"./ns-alert-popup.492db84d.js";import"./vue-upload-component.563fc299.js";import"./ns-pos-confirm-popup.93a69e6e.js";import"./ns-media.67eef226.js";import"./ns-notice.d5a21de3.js";import"./ns-numpad-plus.d070e751.js";import"./ns-pos-loading-popup.071ea333.js";import"./ns-paginate.3256d1f6.js";import"./ns-prompt-popup.54ca8e0e.js";const w={name:"ns-payment-types-report",props:["store-name","store-logo"],data(){return{startDate:l(),endDate:l(),report:[],ns:window.ns,field:{type:"datetimepicker",value:"2021-02-07",name:"date"}}},components:{nsDatepicker:g,nsDateTimePicker:D},computed:{},mounted(){},methods:{__:i,nsCurrency:v,printSaleReport(){this.$htmlToPaper("sale-report")},setStartDate(r){console.log(r),this.startDate=r.format()},loadReport(){if(this.startDate===null||this.endDate===null)return c.error(i("Unable to proceed. Select a correct time range.")).subscribe();const r=l(this.startDate);if(l(this.endDate).isBefore(r))return c.error(i("Unable to proceed. The current time range is not valid.")).subscribe();h.post("/api/nexopos/v4/reports/payment-types",{startDate:this.startDate,endDate:this.endDate}).subscribe({next:d=>{this.report=d},error:d=>{c.error(d.message).subscribe()}})},setEndDate(r){console.log(r),this.endDate=r.format()}}},C={id:"report-section",class:"px-4"},S={class:"flex -mx-2"},T={class:"px-2"},B={class:"px-2"},P={class:"px-2"},R=t("i",{class:"las la-sync-alt text-xl"},null,-1),j={class:"pl-2"},E={class:"px-2"},L=t("i",{class:"las la-print text-xl"},null,-1),M={class:"pl-2"},N={id:"sale-report",class:"anim-duration-500 fade-in-entrance"},F={class:"flex w-full"},U={class:"my-4 flex justify-between w-full"},V={class:"text-secondary"},H={class:"pb-1 border-b border-dashed"},q={class:"pb-1 border-b border-dashed"},z={class:"pb-1 border-b border-dashed"},A=["src","alt"],G={class:"bg-box-background shadow rounded my-4"},I={class:"border-b border-box-edge"},J={class:"table ns-table w-full"},K={class:"text-primary"},O={class:"text-primary border p-2 text-left"},Q={width:"150",class:"text-primary border p-2 text-right"},W={class:"text-primary"},X={class:"p-2 border border-box-edge"},Y={class:"p-2 border text-right"},Z={class:"text-primary font-semibold"},$={class:"p-2 border border-box-edge text-primary"},tt={class:"p-2 border text-right"};function et(r,o,d,st,n,e){const m=f("ns-date-time-picker");return _(),p("div",C,[t("div",S,[t("div",T,[b(m,{date:n.startDate,onChange:o[0]||(o[0]=a=>e.setStartDate(a))},null,8,["date"])]),t("div",B,[b(m,{date:n.endDate,onChange:o[1]||(o[1]=a=>e.setEndDate(a))},null,8,["date"])]),t("div",P,[t("button",{onClick:o[2]||(o[2]=a=>e.loadReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[R,t("span",j,s(e.__("Load")),1)])]),t("div",E,[t("button",{onClick:o[3]||(o[3]=a=>e.printSaleReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[L,t("span",M,s(e.__("Print")),1)])])]),t("div",N,[t("div",F,[t("div",U,[t("div",V,[t("ul",null,[t("li",H,s(e.__("Date : {date}").replace("{date}",n.ns.date.current)),1),t("li",q,s(e.__("Document : Payment Type")),1),t("li",z,s(e.__("By : {user}").replace("{user}",n.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:r.storeLogo,alt:r.storeName},null,8,A)])])]),t("div",G,[t("div",I,[t("table",J,[t("thead",K,[t("tr",null,[t("th",O,s(e.__("Summary")),1),t("th",Q,s(e.__("Total")),1)])]),t("tbody",W,[(_(!0),p(x,null,y(n.report.summary,(a,u)=>(_(),p("tr",{key:u,class:"font-semibold"},[t("td",X,s(a.label),1),t("td",Y,s(e.nsCurrency(a.total)),1)]))),128))]),t("tfoot",Z,[t("tr",null,[t("td",$,s(e.__("Total")),1),t("td",tt,s(e.nsCurrency(n.report.total)),1)])])])])])])])}var ht=k(w,[["render",et]]);export{ht as default};
