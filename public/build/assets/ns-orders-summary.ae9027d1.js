import{_,o,a as l,b as s,t,l as u,e as d,F as h,g as m,k as f,n as i}from"./bootstrap.7115ed90.js";import{n as x}from"./currency.8eb47013.js";import{_ as p}from"./ns-numpad.294977cb.js";const b={name:"ns-orders-summary",data(){return{orders:[],subscription:null,hasLoaded:!1}},mounted(){this.hasLoaded=!1,this.subscription=Dashboard.recentOrders.subscribe(a=>{this.hasLoaded=!0,this.orders=a})},methods:{__:_,nsCurrency:x},destroyed(){this.subscription.unsubscribe()}},y={id:"ns-orders-summary",class:"flex flex-auto flex-col shadow rounded-lg overflow-hidden"},v={class:"p-2 flex title justify-between border-b"},g={class:"font-semibold"},k=s("div",{class:""},null,-1),w={class:"head flex-auto flex-col flex h-56 overflow-y-auto ns-scrollbar"},L={key:0,class:"h-full flex items-center justify-center"},C={key:1,class:"h-full flex items-center justify-center flex-col"},j=s("i",{class:"las la-grin-beam-sweat text-6xl"},null,-1),O={class:"text-sm"},B={class:"text-lg font-semibold"},N={class:"flex -mx-2"},V={class:"px-1"},z={class:"text-semibold text-xs"},D=s("i",{class:"lar la-user-circle"},null,-1),F=s("div",{class:"divide-y-4"},null,-1),S={class:"px-1"},E={class:"text-semibold text-xs"},R=s("i",{class:"las la-clock"},null,-1);function W(a,q,A,G,n,r){const c=f("ns-spinner");return o(),l("div",y,[s("div",v,[s("h3",g,t(r.__("Recents Orders")),1),k]),s("div",w,[n.hasLoaded?d("",!0):(o(),l("div",L,[u(c,{size:"8",border:"4"})])),n.hasLoaded&&n.orders.length===0?(o(),l("div",C,[j,s("p",O,t(r.__("Well.. nothing to show for the meantime.")),1)])):d("",!0),(o(!0),l(h,null,m(n.orders,e=>(o(),l("div",{key:e.id,class:i([e.payment_status==="paid"?"paid-order":"other-order","border-b single-order p-2 flex justify-between"])},[s("div",null,[s("h3",B,t(r.__("Order"))+" : "+t(e.code),1),s("div",N,[s("div",V,[s("h4",z,[D,s("span",null,t(e.user.username),1)])]),F,s("div",S,[s("h4",E,[R,s("span",null,t(e.created_at),1)])])])]),s("div",null,[s("h2",{class:i([e.payment_status==="paid"?"paid-currency":"unpaid-currency","text-xl font-bold"])},t(r.nsCurrency(e.total)),3)])],2))),128))])])}var K=p(b,[["render",W]]);export{K as default};
