import{_ as d,bI as p,y as f,f as _,o as c,a as r,b as t,t as a,e as u,n as v,F as b,g as x,k as g,l as k}from"./bootstrap.7115ed90.js";import y from"./ns-pos-confirm-popup.93a69e6e.js";import{g as w}from"./components.b24267b5.js";import{b as N}from"./currency.8eb47013.js";import{_ as C}from"./ns-numpad.294977cb.js";import"./ns-alert-popup.492db84d.js";import"./vue-upload-component.563fc299.js";import"./ns-media.67eef226.js";import"./ns-notice.d5a21de3.js";import"./ns-numpad-plus.d070e751.js";import"./ns-pos-loading-popup.071ea333.js";import"./ns-paginate.3256d1f6.js";import"./ns-prompt-popup.54ca8e0e.js";const E={name:"ns-notifications",data(){return{notifications:[],visible:!1,interval:null}},components:{nsCloseButton:w},mounted(){document.addEventListener("click",this.checkClickedItem),ns.websocket.enabled?Echo.private("ns.private-channel").listen("App\\Events\\NotificationDispatchedEvent",e=>{this.pushNotificationIfNew(e.notification)}).listen("App\\Events\\NotificationDeletedEvent",e=>{this.deleteNotificationIfExists(e.notification)}):this.interval=setInterval(()=>{this.loadNotifications()},15e3),this.loadNotifications()},destroyed(){clearInterval(this.interval)},methods:{__:d,timespan:p,nsNumberAbbreviate:N,pushNotificationIfNew(e){this.notifications.filter(s=>s.id===e.id).length>0||this.notifications.push(e)},deleteNotificationIfExists(e){const i=this.notifications.filter(s=>s.id===e.id);if(i.length>0){const s=this.notifications.indexOf(i[0]);this.notifications.splice(s,1)}},deleteAll(){Popup.show(y,{title:d("Confirm Your Action"),message:d("Would you like to clear all the notifications ?"),onAction:e=>{e&&f.delete("/api/nexopos/v4/notifications/all").subscribe(i=>{_.success(i.message).subscribe()})}})},checkClickedItem(e){let i;document.getElementById("notification-center")?i=document.getElementById("notification-center").contains(e.srcElement):i=!1;const s=document.getElementById("notification-button").contains(e.srcElement);!i&&!s&&this.visible&&(this.visible=!1)},loadNotifications(){f.get("/api/nexopos/v4/notifications").subscribe(e=>{this.notifications=e})},triggerLink(e){if(e.url!=="url")return window.open(e.url,"_blank")},closeNotice(e,i){f.delete(`/api/nexopos/v4/notifications/${i.id}`).subscribe(s=>{this.loadNotifications()}),e.stopPropagation()}}},I={id:"notificaton-wrapper"},A={key:0,class:"relative float-right"},B={class:"absolute -ml-6 -mt-8"},j={class:"bg-info-tertiary text-white w-8 h-8 rounded-full text-xs flex items-center justify-center"},L=t("i",{class:"las la-bell"},null,-1),P={key:0,class:"h-0 w-0",id:"notification-center"},V={class:"absolute left-0 top-0 sm:relative w-screen zoom-out-entrance anim-duration-300 h-5/7-screen sm:w-64 sm:h-108 flex flex-row-reverse"},z={class:"z-50 sm:rounded-lg shadow-lg h-full w-full md:mt-2 overflow-y-hidden flex flex-col"},D=t("h3",{class:"font-semibold hover:text-info-primary"},"Close",-1),F=[D],S={class:"overflow-y-auto flex flex-col flex-auto"},H=["onClick"],O={class:"flex items-center justify-between"},W={class:"font-semibold"},Y={class:"py-1 text-sm"},q={class:"flex justify-end"},G={class:"text-xs date"},J={key:0,class:"h-full w-full flex items-center justify-center"},K={class:"flex flex-col items-center"},M=t("i",{class:"las la-laugh-wink text-5xl text-primary"},null,-1),Q={class:"text-secondary text-sm"},R={class:"cursor-pointer clear-all"};function T(e,i,s,U,o,l){const h=g("ns-close-button");return c(),r("div",I,[t("div",{id:"notification-button",onClick:i[0]||(i[0]=n=>o.visible=!o.visible),class:v([o.visible?"panel-visible border-0 shadow-lg":"border panel-hidden","hover:shadow-lg hover:border-opacity-0 rounded-full h-12 w-12 cursor-pointer font-bold text-2xl justify-center items-center flex"])},[o.notifications.length>0?(c(),r("div",A,[t("div",B,[t("div",j,a(l.nsNumberAbbreviate(o.notifications.length,"abbreviate")),1)])])):u("",!0),L],2),o.visible?(c(),r("div",P,[t("div",V,[t("div",z,[t("div",{onClick:i[1]||(i[1]=n=>o.visible=!1),class:"sm:hidden p-2 cursor-pointer flex items-center justify-center border-b border-gray-200"},F),t("div",S,[(c(!0),r(b,null,x(o.notifications,n=>(c(),r("div",{key:n.id,class:"notification-card notice border-b"},[t("div",{class:"p-2 cursor-pointer",onClick:m=>l.triggerLink(n)},[t("div",O,[t("h1",W,a(n.title),1),k(h,{onClick:m=>l.closeNotice(m,n)},null,8,["onClick"])]),t("p",Y,a(n.description),1),t("div",q,[t("span",G,a(l.timespan(n.updated_at)),1)])],8,H)]))),128)),o.notifications.length===0?(c(),r("div",J,[t("div",K,[M,t("p",Q,a(l.__("Nothing to care about !")),1)])])):u("",!0)]),t("div",R,[t("h3",{onClick:i[2]||(i[2]=n=>l.deleteAll()),class:"text-sm p-2 flex items-center justify-center w-full font-semibold"},a(l.__("Clear All")),1)])])])])):u("",!0)])}var de=C(E,[["render",T]]);export{de as default};
