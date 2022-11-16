import v from"./ns-alert-popup.492db84d.js";import P from"./ns-pos-confirm-popup.93a69e6e.js";import w from"./ns-media.67eef226.js";import{n as g,a as x}from"./ns-orders-preview-popup.c1ae3352.js";import y from"./ns-pos-loading-popup.071ea333.js";import{n as Q}from"./ns-procurement-quantity.ec02ed9c.js";import"./currency.8eb47013.js";import{_ as k,y as C,k as c,o as i,a as d,b as t,t as s,l as u,q as p,F as L,g as V,e as l,m as U}from"./bootstrap.7115ed90.js";import{_ as q}from"./ns-numpad.294977cb.js";import S from"./ns-prompt-popup.54ca8e0e.js";import{n as A}from"./ns-select-popup.e6697597.js";import"./vue-upload-component.563fc299.js";import"./ns-notice.d5a21de3.js";const B={name:"ns-products-preview",computed:{product(){return this.$popupParams.product}},methods:{__:k,changeActiveTab(e){this.active=e,this.active==="units-quantities"&&this.loadProductQuantities()},loadProductQuantities(){this.hasLoadedUnitQuantities=!1,C.get(`/api/nexopos/v4/products/${this.product.id}/units/quantities`).subscribe(e=>{this.unitQuantities=e,this.hasLoadedUnitQuantities=!0})}},data(){return{active:"units-quantities",unitQuantities:[],hasLoadedUnitQuantities:!1}},mounted(){this.loadProductQuantities(),this.$popup.event.subscribe(e=>{e.event==="click-overlay"&&this.$popup.close()})}},O={class:"shadow-lg w-6/7-screen lg:w-3/5-screen h-6/7-screen lg:h-4/5-screen ns-box overflow-hidden flex flex-col"},N={class:"p-2 border-b ns-box-header text-primary text-center font-medium flex justify-between items-center"},F={class:"flex-auto overflow-y-auto ns-box-body"},T={class:"p-2"},j={key:0,class:"table ns-table w-full"},z={class:"p-1 border"},D={width:"150",class:"text-right p-1 border"},E={width:"150",class:"text-right p-1 border"},H={width:"150",class:"text-right p-1 border"},M={class:"p-1 border text-left"},R={class:"p-1 border text-right"},W={class:"p-1 border text-right"},G={class:"p-1 border text-right"};function I(e,r,K,X,a,o){const m=c("ns-close-button"),h=c("ns-spinner"),b=c("ns-tabs-item"),f=c("ns-tabs");return i(),d("div",O,[t("div",N,[t("div",null,s(o.__("Previewing :"))+" "+s(o.product.name),1),t("div",null,[u(m,{onClick:r[0]||(r[0]=n=>e.$popup.close())})])]),t("div",F,[t("div",T,[u(f,{active:a.active,onActive:r[1]||(r[1]=n=>o.changeActiveTab(n))},{default:p(()=>[u(b,{label:o.__("Units & Quantities"),identifier:"units-quantities"},{default:p(()=>[a.hasLoadedUnitQuantities?(i(),d("table",j,[t("thead",null,[t("tr",null,[t("th",z,s(o.__("Unit")),1),t("th",D,s(o.__("Sale Price")),1),t("th",E,s(o.__("Wholesale Price")),1),t("th",H,s(o.__("Quantity")),1)])]),t("tbody",null,[(i(!0),d(L,null,V(a.unitQuantities,n=>(i(),d("tr",{key:n.id},[t("td",M,s(n.unit.name),1),t("td",R,s(e.nsCurrency(n.sale_price)),1),t("td",W,s(e.nsCurrency(n.wholesale_price)),1),t("td",G,s(n.quantity),1)]))),128))])])):l("",!0),a.hasLoadedUnitQuantities?l("",!0):(i(),U(h,{key:1,size:"16",border:"4"}))]),_:1},8,["label"])]),_:1},8,["active"])])])])}var J=q(B,[["render",I]]);const _={nsOrderPreview:g,nsProductPreview:J,nsAlertPopup:v,nsConfirmPopup:P,nsPromptPopup:S,nsMediaPopup:w,nsProcurementQuantity:Q,nsOrdersRefund:x,nsSelectPopup:A,nsPOSLoadingPopup:y};for(let e in _)window[e]=_[e];
