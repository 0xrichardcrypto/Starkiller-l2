import{_ as o}from"./AgentExecuteModule.79b00c00.js";import{_ as n}from"./EditPageTop.ae162017.js";import{i as m,n as r,ab as u}from"./index.81c4d563.js";import{a as l}from"./GeneralForm.3e2538c0.js";import"./TechniqueChips.96fa6b5e.js";import"./VSelect.0bed7eeb.js";import"./index.1e892548.js";import"./InfoViewer.faacbbba.js";import"./VExpansionPanelHeader.b3e1c802.js";import"./VItemGroup.1df2c7e0.js";import"./ErrorStateAlert.1e369898.js";import"./index.724a936b.js";import"./VRow.2b8953c0.js";import"./VDataTable.854575c5.js";import"./TooltipButton.21f18540.js";import"./VTooltip.97c87792.js";import"./VBreadcrumbs.8405c320.js";import"./VSwitch.35d52e8f.js";const i={name:"ModuleExecute",components:{AgentExecuteModule:o,EditPageTop:n},data(){return{selectedAgents:[],moduleName:""}},computed:{...m({agents:s=>s.agent.agents.filter(e=>e.archived===!1&&e.stale===!1)}),breads(){return[{text:"Modules",disabled:!1,to:"/modules",exact:!0},{text:`${this.moduleName}`,disabled:!0,to:"/modules/execute"}]}},mounted(){this.getAgents(),this.moduleName=this.$route.params.id},methods:{submit(){this.$refs.executeform.create()},moduleChange(s){this.moduleName=s,this.$router.push({name:"moduleExecute",params:{id:s}})},getAgents(){this.$store.dispatch("agent/getAgents")},clearAgents(){this.selectedAgents=[]}}};var d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"p4"},[t(n,{attrs:{breads:e.breads,"show-submit":!0},on:{submit:e.submit}}),t("h4",{staticClass:"pl-4 pb-4"},[e._v(" Execute Module ")]),t(l,{attrs:{dense:"",outlined:"",chips:"",multiple:"",placeholder:"Agents",items:e.agents,"item-text":"name","item-value":"name"},model:{value:e.selectedAgents,callback:function(a){e.selectedAgents=a},expression:"selectedAgents"}}),t(u,[t(o,{ref:"executeform",attrs:{"module-name":e.moduleName,agents:e.selectedAgents,"show-submit":!1},on:{moduleChange:e.moduleChange,submitted:e.clearAgents}})],1)],1)},p=[],c=r(i,d,p,!1,null,null,null,null);const P=c.exports;export{P as default};
