import{h as c,_ as g,y as x,f as y,o as a,a as i,b as t,l as m,t as s,w as v,u as f,F as D,g as k,e as d,k as w,n as u,s as h}from"./bootstrap.7115ed90.js";import{b as C,e as S}from"./components.b24267b5.js";import{n as N}from"./currency.8eb47013.js";import{_ as U}from"./ns-numpad.294977cb.js";import"./ns-alert-popup.492db84d.js";import"./vue-upload-component.563fc299.js";import"./ns-pos-confirm-popup.93a69e6e.js";import"./ns-media.67eef226.js";import"./ns-notice.d5a21de3.js";import"./ns-numpad-plus.d070e751.js";import"./ns-pos-loading-popup.071ea333.js";import"./ns-paginate.3256d1f6.js";import"./ns-prompt-popup.54ca8e0e.js";const Y={name:"ns-best-products-report",mounted(){},components:{nsDatepicker:C,nsDateTimePicker:S},data(){return{ns:window.ns,startDate:c(),endDate:c(),report:null,sort:""}},computed:{totalDebit(){return 0},totalCredit(){return 0}},props:["store-logo","store-name"],methods:{nsCurrency:N,__:g,setStartDate(l){this.startDate=l.format()},setEndDate(l){this.endDate=l.format()},printSaleReport(){this.$htmlToPaper("best-products-report")},loadReport(){const l=c(this.startDate),r=c(this.endDate);x.post("/api/nexopos/v4/reports/products-report",{startDate:l.format("YYYY/MM/DD HH:mm"),endDate:r.format("YYYY/MM/DD HH:mm"),sort:this.sort}).subscribe({next:_=>{_.current.products=Object.values(_.current.products),this.report=_,console.log(this.report)},error:_=>{y.error(_.message).subscribe()}})}}},B={id:"report-section",class:"px-4"},P={class:"flex -mx-2"},R={class:"px-2"},V={class:"px-2"},q={class:"px-2"},H={class:"ns-button"},M=t("i",{class:"las la-sync-alt text-xl"},null,-1),j={class:"pl-2"},F={class:"px-2"},A={class:"ns-button"},E=t("i",{class:"las la-print text-xl"},null,-1),L={class:"pl-2"},Q={class:"flex -mx-2"},T={class:"px-2"},z={value:""},O={value:"using_quantity_asc"},G={value:"using_quantity_desc"},I={value:"using_sales_asc"},J={value:"using_sales_desc"},K={value:"using_name_asc"},W={value:"using_name_desc"},X={id:"best-products-report",class:"anim-duration-500 fade-in-entrance"},Z={class:"flex w-full"},$={class:"my-4 flex justify-between w-full"},tt={class:"text-primary"},st={class:"pb-1 border-b border-dashed"},et={class:"pb-1 border-b border-dashed"},ot={class:"pb-1 border-b border-dashed"},rt=["src","alt"],nt={class:"shadow rounded my-4"},at={class:"border-b ns-box"},it={class:"ns-box-body p-2"},lt={class:"table ns-table w-full"},dt={class:""},_t={class:"p-2 text-left"},ct={width:"150",class:"p-2 text-right"},ut={width:"150",class:"p-2 text-right"},ht={width:"150",class:"p-2 text-right"},pt={width:"150",class:"p-2 text-right"},mt={key:0,class:""},bt={class:"p-2 border"},gt={class:"p-2 border text-right"},xt={class:"p-2 border text-right"},yt={class:"flex flex-col"},vt={key:0},ft={class:"p-2 border text-right"},Dt={class:"flex flex-col"},kt={key:0},wt={key:0},Ct=t("i",{class:"las la-arrow-up"},null,-1),St={key:1},Nt=t("i",{class:"las la-arrow-down"},null,-1),Ut={key:0},Yt={colspan:"5"},Bt={key:1},Pt={colspan:"5",class:"text-center p-2"},Rt={key:2,class:"font-semibold"},Vt=t("td",{colspan:"3",class:"p-2 border"},null,-1),qt={class:"p-2 border text-right"},Ht=t("td",{class:"p-2 border text-right"},null,-1);function Mt(l,r,_,jt,n,e){const p=w("ns-date-time-picker");return a(),i("div",B,[t("div",P,[t("div",R,[m(p,{date:n.startDate,onChange:r[0]||(r[0]=o=>e.setStartDate(o))},null,8,["date"])]),t("div",V,[m(p,{date:n.endDate,onChange:r[1]||(r[1]=o=>e.setEndDate(o))},null,8,["date"])]),t("div",q,[t("div",H,[t("button",{onClick:r[2]||(r[2]=o=>e.loadReport()),class:"rounded flex justify-between border-box-background text-primary shadow py-1 items-center px-2"},[M,t("span",j,s(e.__("Load")),1)])])]),t("div",F,[t("div",A,[t("button",{onClick:r[3]||(r[3]=o=>e.printSaleReport()),class:"rounded flex justify-between border-box-background text-primary shadow py-1 items-center px-2"},[E,t("span",L,s(e.__("Print")),1)])])])]),t("div",Q,[t("div",T,[v(t("select",{"onUpdate:modelValue":r[4]||(r[4]=o=>n.sort=o),class:"text-primary border-box-background shadow rounded p-2"},[t("option",z,s(e.__("Sort Results")),1),t("option",O,s(e.__("Using Quantity Ascending")),1),t("option",G,s(e.__("Using Quantity Descending")),1),t("option",I,s(e.__("Using Sales Ascending")),1),t("option",J,s(e.__("Using Sales Descending")),1),t("option",K,s(e.__("Using Name Ascending")),1),t("option",W,s(e.__("Using Name Descending")),1)],512),[[f,n.sort]])])]),t("div",X,[t("div",Z,[t("div",$,[t("div",tt,[t("ul",null,[t("li",st,s(e.__("Date : {date}").replace("{date}",n.ns.date.current)),1),t("li",et,s(e.__("Document : Best Products")),1),t("li",ot,s(e.__("By : {user}").replace("{user}",n.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:l.storeLogo,alt:l.storeName},null,8,rt)])])]),t("div",nt,[t("div",at,[t("div",it,[t("table",lt,[t("thead",dt,[t("tr",null,[t("th",_t,s(e.__("Product")),1),t("th",ct,s(e.__("Unit")),1),t("th",ut,s(e.__("Quantity")),1),t("th",ht,s(e.__("Value")),1),t("th",pt,s(e.__("Progress")),1)])]),n.report?(a(),i("tbody",mt,[(a(!0),i(D,null,k(n.report.current.products,(o,b)=>(a(),i("tr",{key:b,class:u(o.evolution==="progress"?"bg-success-primary":"bg-error-primary")},[t("td",bt,s(o.name),1),t("td",gt,s(o.unit_name),1),t("td",xt,[t("div",yt,[t("span",null,[t("span",null,s(o.quantity),1)]),t("span",{class:u([o.evolution==="progress"?"text-success-tertiary":"text-danger-light-tertiary","text-xs"])},[o.evolution==="progress"?(a(),i("span",vt,"+")):d("",!0),h(" "+s(o.quantity-o.old_quantity),1)],2)])]),t("td",ft,[t("div",Dt,[t("span",null,s(e.nsCurrency(o.total_price)),1),t("span",{class:u([o.evolution==="progress"?"text-success-tertiary":"text-danger-light-tertiary","text-xs"])},[o.evolution==="progress"?(a(),i("span",kt,"+")):d("",!0),h(" "+s(e.nsCurrency(o.total_price-o.old_total_price)),1)],2)])]),t("td",{class:u([o.evolution==="progress"?"text-success-tertiary":"text-error-light-tertiary","p-2 border text-right"])},[o.evolution==="progress"?(a(),i("span",wt,[h(s(o.difference.toFixed(2))+"% ",1),Ct])):d("",!0),o.evolution==="regress"?(a(),i("span",St,[h(s(o.difference.toFixed(2))+"% ",1),Nt])):d("",!0)],2)],2))),128)),n.report.current.products.length===0?(a(),i("tr",Ut,[t("td",Yt,s(e.__("No results to show.")),1)])):d("",!0)])):d("",!0),n.report?d("",!0):(a(),i("tbody",Bt,[t("tr",null,[t("td",Pt,s(e.__("Start by choosing a range and loading the report.")),1)])])),n.report?(a(),i("tfoot",Rt,[t("tr",null,[Vt,t("td",qt,s(e.nsCurrency(n.report.current.total_price)),1),Ht])])):d("",!0)])])])])])])}var Xt=U(Y,[["render",Mt]]);export{Xt as default};
