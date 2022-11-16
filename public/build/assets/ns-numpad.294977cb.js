import{_ as d,o as n,a as i,F as p,g as m,r as f,n as c,t as V,e as o}from"./bootstrap.7115ed90.js";var v=(e,t)=>{const s=e.__vccOpts||e;for(const[a,l]of t)s[a]=l;return s};const b={name:"ns-numpad",props:["value","currency","floating","limit"],data(){return{number:parseInt(1+new Array(parseInt(ns.currency.ns_currency_precision)).fill("").map(e=>0).join("")),screenValue:0,order:null,cursor:parseInt(ns.currency.ns_currency_precision),orderSubscription:null,allSelected:!0,keys:[...[7,8,9].map(e=>({identifier:e,value:e})),...[4,5,6].map(e=>({identifier:e,value:e})),...[1,2,3].map(e=>({identifier:e,value:e})),{identifier:"backspace",icon:"la-backspace"},{identifier:0,value:0},{identifier:"next",value:d("Enter")}]}},mounted(){this.floating&&this.value>0?this.screenValue=parseFloat(this.value/this.number):this.screenValue=this.value||0;const e=new Array(10).fill("").map((t,s)=>s);nsHotPress.create("numpad-keys").whenVisible([".is-popup"]).whenPressed(e,(t,s)=>{this.inputValue({value:s})}),nsHotPress.create("numpad-backspace").whenVisible([".is-popup"]).whenPressed("backspace",()=>this.inputValue({identifier:"backspace"})),nsHotPress.create("numpad-increase").whenVisible([".is-popup"]).whenPressed("+",()=>this.increaseBy({value:1})),nsHotPress.create("numpad-reduce").whenVisible([".is-popup"]).whenPressed("-",()=>this.increaseBy({value:-1})),nsHotPress.create("numpad-save").whenVisible([".is-popup"]).whenPressed("enter",()=>this.inputValue({identifier:"next"}))},watch:{value(){this.value.toString().length>0?this.floating?this.screenValue=Math.round(this.value*this.number).toString():this.screenValue=this.value:this.screenValue=""}},beforeDestroy(){nsHotPress.destroy("numpad-backspace"),nsHotPress.destroy("numpad-increase"),nsHotPress.destroy("numpad-reduce"),nsHotPress.destroy("numpad-save")},methods:{increaseBy(e){let t=parseInt(1+new Array(this.cursor).fill("").map(s=>0).join(""));this.screenValue=(parseFloat(e.value)*t+(parseFloat(this.screenValue)||0)).toString(),this.allSelected=!1},inputValue(e){let t=parseInt(1+new Array(this.cursor).fill("").map(a=>0).join(""));if(e.identifier==="next"){this.$emit("next",this.floating&&this.screenValue.length>0?parseFloat(this.screenValue/t):this.screenValue);return}else if(e.identifier==="backspace")this.allSelected?(this.screenValue="0",this.allSelected=!1):this.screenValue=this.screenValue.toString().substr(0,this.screenValue.length-1);else if(e.value.toString().match(/^\d+$/)){if(this.limit>0&&this.screenValue.length>=this.limit)return;this.allSelected?(this.screenValue=e.value.toString(),this.allSelected=!1):(this.screenValue+=""+e.value.toString(),this.mode==="percentage"&&(this.screenValue=this.screenValue>100?100:this.screenValue))}const s=this.floating&&this.screenValue.length>0&&this.screenValue!=="0"?parseFloat(this.screenValue/this.number):this.screenValue;this.$emit("changed",s)}}},g={id:"numpad",class:"grid grid-flow-row divide-x divide-y border-r border-b grid-cols-3 grid-rows-3"},_=["onClick"],w={key:0};function y(e,t,s,a,l,h){return n(),i("div",g,[(n(!0),i(p,null,m(l.keys,(r,u)=>(n(),i("div",{onClick:S=>h.inputValue(r),key:u,class:c([u===0?"border-l border-t":"","select-none ns-numpad-key h-24 font-bold flex items-center justify-center cursor-pointer"])},[r.value!==void 0?(n(),i("span",w,V(r.value),1)):o("",!0),r.icon?(n(),i("i",{key:1,class:c(["las",r.icon])},null,2)):o("",!0)],10,_))),128)),f(e.$slots,"numpad-footer")])}var H=v(b,[["render",y]]);export{v as _,H as n};
