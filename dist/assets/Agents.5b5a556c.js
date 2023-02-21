import{_ as f}from"./ListPageTop.167dc090.js";import{h as x}from"./moment.9709ab41.js";import{i as A,n as g,a as b,b as i,c as r,j as d,k as l,ay as _,l as h,ab as v,V as c}from"./index.81c4d563.js";import{_ as p}from"./VSwitch.35d52e8f.js";import{_ as m}from"./VSelect.0bed7eeb.js";import{_ as w}from"./VDataTable.854575c5.js";import{_ as u}from"./VTooltip.97c87792.js";import{_ as y,a as H,b as S,c as $}from"./VTabItem.77fcbebb.js";import"./VBreadcrumbs.8405c320.js";import"./index.1e892548.js";import"./VItemGroup.1df2c7e0.js";const C={name:"AgentList",components:{ListPageTop:f},props:{active:{type:Boolean,default:!1}},data(){return{breads:[{text:"Agents",disabled:!0,href:"/agents"},{text:"List",disabled:!0,href:"/agents?tab=list-view"}],headersFull:[{text:"Name",value:"name",defaultHeader:!0,alwaysShow:!0,order:1},{text:"Last Seen",value:"lastseen_time",defaultHeader:!0,alwaysShow:!0,order:2},{text:"First Seen",value:"checkin_time",defaultHeader:!0,alwaysShow:!0,order:3},{text:"Listener",value:"listener",order:4},{text:"Hostname",value:"hostname",defaultHeader:!0,order:5},{text:"Process",value:"process_name",defaultHeader:!0,order:6},{text:"Process ID",value:"process_id",order:7},{text:"Architecture",value:"architecture",defaultHeader:!0,order:8},{text:"Language",value:"language",defaultHeader:!0,order:9},{text:"Language Version",value:"language_version",order:10},{text:"Username",value:"username",defaultHeader:!0,order:11},{text:"Working Hours",value:"working_hours",order:12},{text:"Exteneral IP",value:"external_ip",order:13},{text:"Internal IP",value:"internal_ip",defaultHeader:!0,order:14},{text:"Delay",value:"delay",order:15},{text:"Jitter",value:"jitter",order:16},{text:"Actions",value:"actions",defaultHeader:!0,alwaysShow:!0,order:17}],selectedHeadersTemp:[],selected:[],showHeaderMenu:!1,moment:x}},computed:{...A({agents:s=>s.agent.agents,hideStaleAgents:s=>s.application.hideStaleAgents,hideArchivedAgents:s=>s.application.hideArchivedAgents,selectedHeadersState:s=>s.application.agentHeaders}),selectedAll:{set(s){this.selectedHeadersTemp=[...this.staticHeaders],s&&this.headersFull.forEach(e=>{this.selectedHeadersTemp.push(e)})},get(){return this.selectedHeadersTemp.length===this.count}},headers(){return this.headersFull.filter(s=>this.selectedHeaders.findIndex(e=>e.text===s.text)>-1).sort((s,e)=>s.order-e.order)},selectableHeaders(){return this.headersFull.filter(s=>!s.alwaysShow)},staticHeaders(){return this.headersFull.filter(s=>s.alwaysShow)},sortedAgents(){const s=this.agents.slice();return s.sort((e,t)=>-e.lastseen_time.localeCompare(t.lastseen_time)),this.hideStaleAgents?s.filter(e=>!e.stale):this.hideArchivedAgents?s.filter(e=>!e.archived):s},showDelete(){return this.selected.length>0},hideStaleAgentsCheckbox:{set(s){this.$store.dispatch("application/hideStaleAgents",s)},get(){return this.hideStaleAgents}},hideArchivedAgentsCheckbox:{set(s){this.$store.dispatch("application/hideArchivedAgents",s)},get(){return this.hideArchivedAgents}},selectedHeaders:{set(s){this.$store.dispatch("application/agentHeaders",s)},get(){return this.selectedHeadersState}}},mounted(){this.getAgents(),this.selectedHeaders.length===0&&(this.selectedHeaders=this.headersFull.filter(s=>s.defaultHeader===!0)),this.selectedHeadersTemp=[...this.selectedHeaders]},methods:{submitHeaderForm(){this.selectedHeaders=[...this.selectedHeadersTemp],this.showHeaderMenu=!1},async killAgents(){await this.$root.$confirm("Kill Agent",`Do you want to kill ${this.selected.length} agents?`,{color:"red"})&&(this.selected.forEach(s=>{this.$store.dispatch("agent/killAgent",{sessionId:s.session_id})}),this.$snack.success(`${this.selected.length} agents tasked to run TASK_EXIT.`),this.selected=[])},getAgents(){this.$store.dispatch("agent/getAgents")},async killAgent(s){await this.$root.$confirm("Kill Agent",`Do you want to kill agent ${s.name}?`,{color:"red"})&&(this.$store.dispatch("agent/killAgent",{sessionId:s.session_id}),this.$snack.success(`Agent ${s.name} tasked to run TASK_EXIT.`))},popout(s){window.open(`${window.location.href}/${s.name}?hideSideBar=true`,"popup","width=600,height=600")},truncateMessage(s){return s?s.length>30?`${s.substr(0,30)}...`:s:""},rowClass(s){return s.stale?"warning-row":""}}};var T=function(){var e=this,t=e._self._c;return t("div",[e.active?t(f,{attrs:{breads:e.breads,"show-create":!1,"show-refresh":!0,"show-delete":e.showDelete,"delete-text":"Kill"},on:{delete:e.killAgents,refresh:e.getAgents}}):e._e(),t("div",{staticClass:"ml-3 mr-3 align-center",staticStyle:{display:"flex"}},[t(p,{attrs:{label:"Hide Stale Agents"},model:{value:e.hideStaleAgentsCheckbox,callback:function(a){e.hideStaleAgentsCheckbox=a},expression:"hideStaleAgentsCheckbox"}}),t(p,{staticClass:"pl-4",attrs:{label:"Hide Archived Agents"},model:{value:e.hideArchivedAgentsCheckbox,callback:function(a){e.hideArchivedAgentsCheckbox=a},expression:"hideArchivedAgentsCheckbox"}}),t(b),t(m,{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:n}){return[t(i,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",n,!1),a),[t(r,[e._v("mdi-format-columns")])],1)]}}]),model:{value:e.showHeaderMenu,callback:function(a){e.showHeaderMenu=a},expression:"showHeaderMenu"}},[t(d,{staticStyle:{"overflow-y":"auto"},attrs:{"max-height":"400px"}},[t(l,[t(_,{attrs:{label:"Select All"},model:{value:e.selectedAll,callback:function(a){e.selectedAll=a},expression:"selectedAll"}})],1),t(h,{staticClass:"pb-4"}),e._l(e.selectableHeaders,function(a,n){return t(l,{key:n},[t(_,{attrs:{label:a.text,value:a},model:{value:e.selectedHeadersTemp,callback:function(o){e.selectedHeadersTemp=o},expression:"selectedHeadersTemp"}})],1)})],2),t(v,{staticClass:"pt-4"},[t(i,{staticClass:"mb-4",attrs:{text:""},on:{click:function(a){e.showHeaderMenu=!1}}},[e._v(" Cancel ")]),t(i,{staticClass:"ml-4 mb-4",attrs:{text:""},on:{click:e.submitHeaderForm}},[e._v(" Save ")])],1)],1)],1),t(w,{attrs:{"item-class":e.rowClass,headers:e.headers,items:e.sortedAgents,"footer-props":{itemsPerPageOptions:[5,10,15,20,50,100]},"items-per-page":15,"item-key":"session_id",dense:"","show-select":""},scopedSlots:e._u([{key:"item.name",fn:function({item:a}){return[t(u,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:n}){return[a.high_integrity?t(r,e._g({attrs:{small:""}},n),[e._v(" fa-user-cog ")]):e._e()]}}],null,!0)},[t("span",[e._v("Elevated Process")])]),t("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"agentEdit",params:{id:a.session_id}}}},[e._v(" "+e._s(a.name)+" ")])]}},{key:"item.lastseen_time",fn:function({item:a}){return[t(u,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:n}){return[t("span",e._g({},n),[e._v(e._s(e.moment(a.lastseen_time).fromNow()))])]}}],null,!0)},[t("span",[e._v(e._s(e.moment(a.lastseen_time).format("MMM D YYYY, h:mm:ss a")))])])]}},{key:"item.checkin_time",fn:function({item:a}){return[t(u,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:n}){return[t("span",e._g({},n),[e._v(e._s(e.moment(a.checkin_time).fromNow()))])]}}],null,!0)},[t("span",[e._v(e._s(e.moment(a.checkin_time).format("MMM D YYYY, h:mm:ss a")))])])]}},{key:"item.listener",fn:function({item:a}){return[t("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"listenerEdit",params:{id:a.listener}}}},[e._v(" "+e._s(a.listener)+" ")])]}},{key:"item.process_name",fn:function({item:a}){return[t("span",[e._v(e._s(e.truncateMessage(a.process_name)))])]}},{key:"item.actions",fn:function({item:a}){return[t(m,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:n,attrs:o}){return[t(i,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",o,!1),n),[t(r,[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[t(d,{staticClass:"ml-2 mr-2"},[t(l,{key:"view",attrs:{link:""}},[t("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"inherit"},attrs:{to:{name:"agentEdit",params:{id:a.session_id}}}},[t(c,[t(r,[e._v("fa-binoculars")]),e._v(" View ")],1)],1)],1),t(l,{key:"popout",attrs:{link:""},on:{click:function(n){return e.popout(a)}}},[t(c,[t(r,[e._v(" fa-external-link-alt ")]),e._v(" Popout ")],1)],1),t(h,{staticClass:"pb-4"}),t(l,{key:"delete",attrs:{link:""},on:{click:function(n){return e.killAgent(a)}}},[t(c,[t(r,[e._v("fa-trash-alt")]),e._v(" Kill ")],1)],1)],1)],1)]}}]),model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}})],1)},M=[],F=g(C,T,M,!1,null,null,null,null);const k=F.exports;const L={name:"Agents",components:{AgentsList:k},data(){return{}},computed:{tab:{set(s){this.$router.replace({query:{...this.$route.query,tab:s}})},get(){return this.$route.query.tab||"list-view"}}}};var I=function(){var e=this,t=e._self._c;return t("div",[t("portal",{attrs:{to:"app-bar-extension"}},[t("div",{staticStyle:{display:"flex","flex-direction":"row",width:"100%"}},[t(y,{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(a){e.tab=a},expression:"tab"}},[t(H,{key:"list-view",attrs:{href:"#list-view"}},[e._v(" List "),t(r,{staticClass:"ml-1",attrs:{"x-small":""}},[e._v(" fa-list ")])],1)],1)],1)]),t(S,{model:{value:e.tab,callback:function(a){e.tab=a},expression:"tab"}},[t($,{key:"list-view",attrs:{value:"list-view",transition:!1,"reverse-transition":!1}},[t(v,{attrs:{flat:""}},[t(k,{attrs:{active:e.tab==="list-view"}})],1)],1)],1)],1)},E=[],P=g(L,I,E,!1,null,null,null,null);const J=P.exports;export{J as default};
