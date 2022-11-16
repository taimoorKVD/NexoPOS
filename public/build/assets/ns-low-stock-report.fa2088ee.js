import{_ as u,i as k,y,f as x,o as a,a as c,b as t,t as s,e as p,F as b,g as m,l as R,k as g}from"./bootstrap.7115ed90.js";import{b as v,e as w}from"./components.b24267b5.js";import{n as T}from"./ns-select-popup.e6697597.js";import{n as S}from"./ns-paginate.3256d1f6.js";import{n as N}from"./currency.8eb47013.js";import{_ as P}from"./ns-numpad.294977cb.js";import"./ns-alert-popup.492db84d.js";import"./vue-upload-component.563fc299.js";import"./ns-pos-confirm-popup.93a69e6e.js";import"./ns-media.67eef226.js";import"./ns-notice.d5a21de3.js";import"./ns-numpad-plus.d070e751.js";import"./ns-pos-loading-popup.071ea333.js";import"./ns-prompt-popup.54ca8e0e.js";const C={name:"ns-low-stock-report",props:["store-logo","store-name"],mounted(){this.reportType=this.options[0].value,this.loadRelevantReport()},components:{nsDatepicker:v,nsDateTimePicker:w,nsPaginate:S},data(){return{ns:window.ns,products:[],options:[{label:u("Stock Report"),value:"stock_report"},{label:u("Low Stock Report"),value:"low_stock"}],stockReportResult:{},reportType:"",reportTypeName:"",validation:new k}},watch:{reportType(){const l=this.options.filter(n=>n.value===this.reportType);l.length>0?this.reportTypeName=l[0].label:this.reportTypeName=u("N/A")}},methods:{__:u,nsCurrency:N,async selectReport(){try{const l=await new Promise((n,_)=>{Popup.show(T,{label:u("Report Type"),options:this.options,resolve:n,reject:_})});this.reportType=l[0].value,this.loadRelevantReport()}catch{}},loadRelevantReport(){switch(this.reportType){case"stock_report":this.loadStockReport();break;case"low_stock":this.loadReport();break}},printSaleReport(){this.$htmlToPaper("low-stock-report")},loadStockReport(l=null){y.get(l||"/api/nexopos/v4/reports/stock-report").subscribe({next:n=>{this.stockReportResult=n},error:n=>{x.error(n.message).subscribe()}})},totalSum(l,n,_){if(l.data!==void 0){const r=l.data.map(e=>e.unit_quantities).map(e=>{const i=e.map(o=>o[n]*o[_]);return i.length>0?i.reduce((o,d)=>parseFloat(o)+parseFloat(d)):0});if(r.length>0)return r.reduce((e,i)=>parseFloat(e)+parseFloat(i))}return 0},sum(l,n){if(l.data!==void 0){const h=l.data.map(r=>r.unit_quantities).map(r=>{const e=r.map(i=>i[n]);return e.length>0?e.reduce((i,o)=>parseFloat(i)+parseFloat(o)):0});if(h.length>0)return h.reduce((r,e)=>parseFloat(r)+parseFloat(e))}return 0},loadReport(){y.get("/api/nexopos/v4/reports/low-stock").subscribe({next:l=>{this.products=l},error:l=>{x.error(l.message).subscribe()}})}}},F={id:"report-section",class:"px-4"},q={class:"flex -mx-2"},L={class:"px-2"},j={class:"ns-button"},B=t("i",{class:"las la-sync-alt text-xl"},null,-1),D={class:"pl-2"},V={class:"px-2"},U={class:"ns-button"},A=t("i",{class:"las la-print text-xl"},null,-1),E={class:"pl-2"},H={class:"px-2"},K={class:"ns-button"},z=t("i",{class:"las la-print text-xl"},null,-1),G={class:"pl-2"},I={id:"report",class:"anim-duration-500 fade-in-entrance"},J={class:"flex w-full"},M={class:"my-4 flex justify-between w-full"},O={class:"text-primary"},W={class:"pb-1 border-b border-dashed"},X={class:"pb-1 border-b border-dashed"},Y={class:"pb-1 border-b border-dashed"},Z=["src","alt"],Q={class:"text-primary shadow rounded my-4"},$={class:"ns-box"},tt={key:0,class:"ns-box-body"},et={class:"table ns-table w-full"},st={class:"border p-2 text-left"},rt={class:"border p-2 text-left"},ot={width:"150",class:"border border-info-secondary bg-info-primary p-2 text-right"},lt={width:"150",class:"border border-success-secondary bg-success-primary p-2 text-right"},nt={key:0},at={colspan:"4",class:"p-2 border text-center"},ct={class:"p-2 border"},it={class:"p-2 border"},dt={class:"p-2 border text-right"},pt={class:"p-2 border border-success-secondary bg-success-primary text-right"},_t={key:1,class:"ns-box-body"},ut={class:"table ns-table w-full"},ht={class:"border p-2 text-left"},bt={class:"border p-2 text-left"},mt={width:"150",class:"border p-2 text-right"},yt={width:"150",class:"border p-2 text-right"},xt={width:"150",class:"border p-2 text-right"},ft={key:0},kt={colspan:"5",class:"p-2 border text-center"},Rt={class:"p-2 border"},gt={class:"flex flex-col"},vt={class:"p-2 border"},wt={class:"p-2 border text-right"},Tt={class:"p-2 border text-right"},St={class:"p-2 border text-right"},Nt=t("td",{class:"p-2 border"},null,-1),Pt=t("td",{class:"p-2 border"},null,-1),Ct=t("td",{class:"p-2 border"},null,-1),Ft={class:"p-2 border text-right"},qt={class:"p-2 border text-right"},Lt={key:0,class:"flex justify-end p-2"};function jt(l,n,_,h,r,e){const i=g("ns-paginate");return a(),c("div",F,[t("div",q,[t("div",L,[t("div",j,[t("button",{onClick:n[0]||(n[0]=o=>e.loadReport()),class:"rounded flex justify-between shadow py-1 items-center px-2"},[B,t("span",D,s(e.__("Load")),1)])])]),t("div",V,[t("div",U,[t("button",{onClick:n[1]||(n[1]=o=>e.printSaleReport()),class:"rounded flex justify-between shadow py-1 items-center px-2"},[A,t("span",E,s(e.__("Print")),1)])])]),t("div",H,[t("div",K,[t("button",{onClick:n[2]||(n[2]=o=>e.selectReport()),class:"rounded flex justify-between shadow py-1 items-center px-2"},[z,t("span",G,s(e.__("Report Type"))+" : "+s(r.reportTypeName),1)])])])]),t("div",I,[t("div",J,[t("div",M,[t("div",O,[t("ul",null,[t("li",W,s(e.__("Date : {date}").replace("{date}",r.ns.date.current)),1),t("li",X,s(e.__("Document : {reportTypeName}").replace("{reportTypeName}",r.reportTypeName)),1),t("li",Y,s(e.__("By : {user}").replace("{user}",r.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:l.storeLogo,alt:l.storeName},null,8,Z)])])]),t("div",Q,[t("div",$,[r.reportType==="low_stock"?(a(),c("div",tt,[t("table",et,[t("thead",null,[t("tr",null,[t("th",st,s(e.__("Product")),1),t("th",rt,s(e.__("Unit")),1),t("th",ot,s(e.__("Quantity")),1),t("th",lt,s(e.__("Price")),1)])]),t("tbody",null,[r.products.length===0?(a(),c("tr",nt,[t("td",at,[t("span",null,s(e.__("There is no product to display...")),1)])])):p("",!0),(a(!0),c(b,null,m(r.products,(o,d)=>(a(),c("tr",{key:d,class:"text-sm"},[t("td",ct,s(o.product.name),1),t("td",it,s(o.unit.name),1),t("td",dt,s(o.quantity),1),t("td",pt,s(e.nsCurrency(o.quantity*o.sale_price)),1)]))),128))])])])):p("",!0),r.reportType==="stock_report"?(a(),c("div",_t,[t("table",ut,[t("thead",null,[t("tr",null,[t("th",ht,s(e.__("Product")),1),t("th",bt,s(e.__("Unit")),1),t("th",mt,s(e.__("Price")),1),t("th",yt,s(e.__("Quantity")),1),t("th",xt,s(e.__("Total Price")),1)])]),t("tbody",null,[r.stockReportResult.data===void 0||r.stockReportResult.data.length===0?(a(),c("tr",ft,[t("td",kt,[t("span",null,s(e.__("There is no product to display...")),1)])])):p("",!0),r.stockReportResult.data!==void 0?(a(!0),c(b,{key:1},m(r.stockReportResult.data,o=>(a(),c(b,null,[(a(!0),c(b,null,m(o.unit_quantities,(d,f)=>(a(),c("tr",{key:f,class:"text-sm"},[t("td",Rt,[t("div",gt,[t("span",null,s(o.name),1),t("small",null,s(e.__("SKU"))+": "+s(o.sku),1)])]),t("td",vt,s(d.unit.name),1),t("td",wt,s(e.nsCurrency(d.sale_price)),1),t("td",Tt,s(d.quantity),1),t("td",St,s(e.nsCurrency(d.quantity*d.sale_price)),1)]))),128))],64))),256)):p("",!0)]),t("tfoot",null,[t("tr",null,[Nt,Pt,Ct,t("td",Ft,s(e.sum(r.stockReportResult,"quantity")),1),t("td",qt,s(e.nsCurrency(e.totalSum(r.stockReportResult,"sale_price","quantity"))),1)])])]),r.stockReportResult.data?(a(),c("div",Lt,[R(i,{onLoad:n[3]||(n[3]=o=>e.loadStockReport(o)),pagination:r.stockReportResult},null,8,["pagination"])])):p("",!0)])):p("",!0)])])])])}var Wt=P(C,[["render",jt]]);export{Wt as default};
