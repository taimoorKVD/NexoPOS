import{_ as a,j as i,p,o as c,a as u,b as e,t as o,n as m}from"./bootstrap.7115ed90.js";import{_ as d}from"./ns-numpad.294977cb.js";const f={data(){return{title:"",message:""}},computed:{size(){return this.$popupParams.size||"h-full w-full"}},mounted(){this.title=this.$popupParams.title,this.message=this.$popupParams.message,this.popupCloser()},methods:{__:a,popupResolver:i,popupCloser:p,emitAction(r){this.$popupParams.onAction(r),this.$popup.close()}}},_={class:"flex items-center justify-center flex-col flex-auto p-4"},x={class:"text-xl md:text-3xl font-body text-center"},h={class:"py-4 text-sm md:text-base text-center"},b={class:"action-buttons flex border-t"},g=e("hr",{class:"border-r h-16"},null,-1);function v(r,s,w,y,n,t){return c(),u("div",{id:"confirm-popup",class:m([t.size,"flex flex-col shadow-lg w-5/7-screen md:w-4/7-screen lg:w-2/7-screen"])},[e("div",_,[e("h2",x,o(n.title),1),e("p",h,o(n.message),1)]),e("div",b,[e("button",{class:"flex-auto rounded-none w-1/2 h-16 flex items-center justify-center uppercase",onClick:s[0]||(s[0]=l=>t.emitAction(!0))},o(t.__("Yes")),1),g,e("button",{class:"flex-auto rounded-none w-1/2 h-16 flex items-center justify-center uppercase",onClick:s[1]||(s[1]=l=>t.emitAction(!1))},o(t.__("No")),1)])],2)}var j=d(f,[["render",v]]);export{j as default};
