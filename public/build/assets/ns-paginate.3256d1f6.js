import{_ as d}from"./ns-numpad.294977cb.js";import{o as n,a as i,F as g,b as l,g as f,e as u,n as h,t as c}from"./bootstrap.7115ed90.js";const m={name:"ns-paginate",props:["pagination"],data:()=>({page:1,path:""}),mounted(){this.path=this.pagination.path},computed:{getPagination(){return this.pagination?this.pageNumbers(this.pagination.last_page,this.pagination.current_page):[]}},methods:{gotoPage(e){this.page=e,this.$emit("load",`${this.path}?page=${this.page}`)},pageNumbers(e,t){var a=[];t-3>1&&a.push(1,"...");for(let s=1;s<=e;s++)t+3>s&&t-3<s&&a.push(s);return t+3<e&&a.push("...",e),console.log(a),a.filter(s=>s>0||typeof s=="string")}}},_={id:"pagination",class:"flex -mx-1"},v=l("i",{class:"las la-angle-double-left"},null,-1),b=[v],k=["onClick"],x=l("i",{class:"las la-angle-double-right"},null,-1),y=[x];function j(e,t,a,s,w,r){return n(),i("div",_,[a.pagination.current_page?(n(),i(g,{key:0},[l("a",{href:"javascript:void(0)",onClick:t[0]||(t[0]=o=>r.gotoPage(a.pagination.first_page)),class:"mx-1 flex items-center justify-center h-8 w-8 rounded-full ns-inset-button info shadow"},b),(n(!0),i(g,null,f(r.getPagination,(o,p)=>(n(),i(g,null,[e.page!=="..."?(n(),i("a",{key:p,class:h([e.page==o?"active":"","mx-1 flex items-center justify-center h-8 w-8 rounded-full ns-inset-button info"]),onClick:C=>r.gotoPage(o),href:"javascript:void(0)"},c(o),11,k)):u("",!0),e.page==="..."?(n(),i("a",{key:p,href:"javascript:void(0)",class:"mx-1 flex items-center justify-center h-8 w-8 rounded-full ns-inset-button"},"...")):u("",!0)],64))),256)),l("a",{href:"javascript:void(0)",onClick:t[1]||(t[1]=o=>r.gotoPage(a.pagination.last_page)),class:"mx-1 flex items-center justify-center h-8 w-8 rounded-full ns-inset-button info shadow"},y)],64)):u("",!0)])}var B=d(m,[["render",j]]);export{B as n};
