import{f as s,aB as n,a3 as o,be as i}from"./defineAppConfig-_73fm9CR.js";function d(e){return s({name:"DashboardRouterLink",props:{to:{type:String,required:!0}},render(){var t,r;return n("a",{href:this.to,onClick:a=>{a.preventDefault(),e(this.to)}},(r=(t=this.$slots).default)==null?void 0:r.call(t))}})}function h(e){const t=e.startsWith("/")?o(e):e;i("create-tab",{active:!0,url:t})}export{d as D,h as o};
