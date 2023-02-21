import{_ as p}from"./ListPageTop.167dc090.js";import{h as c}from"./moment.9709ab41.js";import{i as u,n as _,b as d,c as n,j as m,k as r,V as i,l as y}from"./index.81c4d563.js";import{_ as f}from"./VDataTable.854575c5.js";import{_ as h}from"./VTooltip.97c87792.js";import{_ as v}from"./VSelect.0bed7eeb.js";import"./VBreadcrumbs.8405c320.js";import"./index.1e892548.js";const b={name:"Bypasses",components:{ListPageTop:p},data(){return{breads:[{text:"Bypasses",disabled:!0,href:"/bypasses"}],headers:[{text:"Name",value:"name"},{text:"Updated At",value:"updated_at"},{text:"Actions",value:"actions",sortable:!1}],sortBy:"name",sortDesc:!1,moment:c,selected:[]}},computed:{...u({bypasses:a=>a.bypass.bypasses}),showDelete(){return this.selected.length>0}},mounted(){this.getBypasses()},methods:{getBypasses(){this.$store.dispatch("bypass/getBypasses")},create(){this.$router.push({name:"bypassNew"})},view(a){this.$router.push({name:"bypassEdit",params:{id:a.id}})},async deleteBypass(a){await this.$root.$confirm("Delete",`Are you sure you want to delete bypass ${a.name}?`,{color:"red"})&&this.$store.dispatch("bypass/deleteBypass",a.id)},async deleteBypasses(){await this.$root.$confirm("Delete",`Are you sure you want to delete ${this.selected.length} bypasses?`,{color:"red"})&&this.selected.forEach(a=>{this.$store.dispatch("bypass/deleteBypass",a.id)})}}};var g=function(){var e=this,s=e._self._c;return s("div",[s(p,{attrs:{breads:e.breads,"show-create":!0,"show-refresh":!0,"show-delete":e.showDelete},on:{create:e.create,delete:e.deleteBypasses,refresh:e.getBypasses}}),s(f,{attrs:{headers:e.headers,items:e.bypasses,"footer-props":{itemsPerPageOptions:[5,10,15,20,50,100]},"items-per-page":15,"item-key":"name",dense:"","show-select":"","sort-by":e.sortBy,"sort-desc":e.sortDesc},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t}},scopedSlots:e._u([{key:"item.name",fn:function({item:t}){return[s("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"bypassEdit",params:{id:t.id}}}},[e._v(" "+e._s(t.name)+" ")])]}},{key:"item.updated_at",fn:function({item:t}){return[s(h,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:o}){return[s("span",e._g({},o),[e._v(e._s(e.moment(t.updated_at).fromNow()))])]}}],null,!0)},[s("span",[e._v(e._s(e.moment(t.updated_at).format("MMM D YYYY, h:mm:ss a")))])])]}},{key:"item.actions",fn:function({item:t}){return[s(v,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:o,attrs:l}){return[s(d,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",l,!1),o),[s(n,[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[s(m,{staticClass:"ml-2 mr-2"},[s(r,{key:"view",attrs:{link:""}},[s("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"inherit"},attrs:{to:{name:"bypassEdit",params:{id:t.id}}}},[s(i,[s(n,[e._v("fa-binoculars")]),e._v(" View ")],1)],1)],1),s(r,{key:"copy",attrs:{to:{name:"bypassNew",params:{copy:!0,id:t.id}},link:""}},[s(i,[s(n,[e._v("fa-clone")]),e._v(" Copy ")],1)],1),s(y,{staticClass:"pb-4"}),s(r,{key:"delete",attrs:{link:""},on:{click:function(o){return e.deleteBypass(t)}}},[s(i,[s(n,[e._v("fa-trash-alt")]),e._v(" Delete ")],1)],1)],1)],1)]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)},B=[],k=_(b,g,B,!1,null,null,null,null);const N=k.exports;export{N as default};
