import{o as g,s as j,p as R,q as W,w as c,r as w,t as p,b as v,c as b,h as u,m as f,T as A,M as E,u as F,v as h,x as k,y as G,z as _,A as $,B as L,g as P,D as N,L as V,E as T,F as z,G as q}from"./index.81c4d563.js";import{V as H,a as M,b as U}from"./VSelect.0bed7eeb.js";const x=g.extend({name:"v-data",inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})},sortBy:{type:[String,Array]},sortDesc:{type:[Boolean,Array]},customSort:{type:Function,default:j},mustSort:Boolean,multiSort:Boolean,page:{type:Number,default:1},itemsPerPage:{type:Number,default:10},groupBy:{type:[String,Array],default:()=>[]},groupDesc:{type:[Boolean,Array],default:()=>[]},customGroup:{type:Function,default:R},locale:{type:String,default:"en-US"},disableSort:Boolean,disablePagination:Boolean,disableFiltering:Boolean,search:String,customFilter:{type:Function,default:W},serverItemsLength:{type:Number,default:-1}},data(){let t={page:this.page,itemsPerPage:this.itemsPerPage,sortBy:c(this.sortBy),sortDesc:c(this.sortDesc),groupBy:c(this.groupBy),groupDesc:c(this.groupDesc),mustSort:this.mustSort,multiSort:this.multiSort};this.options&&(t=Object.assign(t,this.options));const{sortBy:e,sortDesc:s,groupBy:i,groupDesc:a}=t,n=e.length-s.length,o=i.length-a.length;return n>0&&t.sortDesc.push(...w(n,!1)),o>0&&t.groupDesc.push(...w(o,!1)),{internalOptions:t}},computed:{itemsLength(){return this.serverItemsLength>=0?this.serverItemsLength:this.filteredItems.length},pageCount(){return this.internalOptions.itemsPerPage<=0?1:Math.ceil(this.itemsLength/this.internalOptions.itemsPerPage)},pageStart(){return this.internalOptions.itemsPerPage===-1||!this.items.length?0:(this.internalOptions.page-1)*this.internalOptions.itemsPerPage},pageStop(){return this.internalOptions.itemsPerPage===-1?this.itemsLength:this.items.length?Math.min(this.itemsLength,this.internalOptions.page*this.internalOptions.itemsPerPage):0},isGrouped(){return!!this.internalOptions.groupBy.length},pagination(){return{page:this.internalOptions.page,itemsPerPage:this.internalOptions.itemsPerPage,pageStart:this.pageStart,pageStop:this.pageStop,pageCount:this.pageCount,itemsLength:this.itemsLength}},filteredItems(){let t=this.items.slice();return!this.disableFiltering&&this.serverItemsLength<=0&&(t=this.customFilter(t,this.search)),t},computedItems(){let t=this.filteredItems.slice();return(!this.disableSort||this.internalOptions.groupBy.length)&&this.serverItemsLength<=0&&(t=this.sortItems(t)),!this.disablePagination&&this.serverItemsLength<=0&&(t=this.paginateItems(t)),t},groupedItems(){return this.isGrouped?this.groupItems(this.computedItems):null},scopedProps(){return{sort:this.sort,sortArray:this.sortArray,group:this.group,items:this.computedItems,options:this.internalOptions,updateOptions:this.updateOptions,pagination:this.pagination,groupedItems:this.groupedItems,originalItemsLength:this.items.length}},computedOptions(){return{...this.options}}},watch:{computedOptions:{handler(t,e){p(t,e)||this.updateOptions(t)},deep:!0,immediate:!0},internalOptions:{handler(t,e){p(t,e)||this.$emit("update:options",t)},deep:!0,immediate:!0},page(t){this.updateOptions({page:t})},"internalOptions.page"(t){this.$emit("update:page",t)},itemsPerPage(t){this.updateOptions({itemsPerPage:t})},"internalOptions.itemsPerPage"(t){this.$emit("update:items-per-page",t)},sortBy(t){this.updateOptions({sortBy:c(t)})},"internalOptions.sortBy"(t,e){!p(t,e)&&this.$emit("update:sort-by",Array.isArray(this.sortBy)?t:t[0])},sortDesc(t){this.updateOptions({sortDesc:c(t)})},"internalOptions.sortDesc"(t,e){!p(t,e)&&this.$emit("update:sort-desc",Array.isArray(this.sortDesc)?t:t[0])},groupBy(t){this.updateOptions({groupBy:c(t)})},"internalOptions.groupBy"(t,e){!p(t,e)&&this.$emit("update:group-by",Array.isArray(this.groupBy)?t:t[0])},groupDesc(t){this.updateOptions({groupDesc:c(t)})},"internalOptions.groupDesc"(t,e){!p(t,e)&&this.$emit("update:group-desc",Array.isArray(this.groupDesc)?t:t[0])},multiSort(t){this.updateOptions({multiSort:t})},"internalOptions.multiSort"(t){this.$emit("update:multi-sort",t)},mustSort(t){this.updateOptions({mustSort:t})},"internalOptions.mustSort"(t){this.$emit("update:must-sort",t)},pageCount:{handler(t){this.$emit("page-count",t)},immediate:!0},computedItems:{handler(t){this.$emit("current-items",t)},immediate:!0},pagination:{handler(t,e){p(t,e)||this.$emit("pagination",this.pagination)},immediate:!0}},methods:{toggle(t,e,s,i,a,n){let o=e.slice(),r=s.slice();const l=o.findIndex(d=>d===t);return l<0?(n||(o=[],r=[]),o.push(t),r.push(!1)):l>=0&&!r[l]?r[l]=!0:a?r[l]=!1:(o.splice(l,1),r.splice(l,1)),(!p(o,e)||!p(r,s))&&(i=1),{by:o,desc:r,page:i}},group(t){const{by:e,desc:s,page:i}=this.toggle(t,this.internalOptions.groupBy,this.internalOptions.groupDesc,this.internalOptions.page,!0,!1);this.updateOptions({groupBy:e,groupDesc:s,page:i})},sort(t){if(Array.isArray(t))return this.sortArray(t);const{by:e,desc:s,page:i}=this.toggle(t,this.internalOptions.sortBy,this.internalOptions.sortDesc,this.internalOptions.page,this.internalOptions.mustSort,this.internalOptions.multiSort);this.updateOptions({sortBy:e,sortDesc:s,page:i})},sortArray(t){const e=t.map(s=>{const i=this.internalOptions.sortBy.findIndex(a=>a===s);return i>-1?this.internalOptions.sortDesc[i]:!1});this.updateOptions({sortBy:t,sortDesc:e})},updateOptions(t){this.internalOptions={...this.internalOptions,...t,page:this.serverItemsLength<0?Math.max(1,Math.min(t.page||this.internalOptions.page,this.pageCount)):t.page||this.internalOptions.page}},sortItems(t){let e=[],s=[];return this.disableSort||(e=this.internalOptions.sortBy,s=this.internalOptions.sortDesc),this.internalOptions.groupBy.length&&(e=[...this.internalOptions.groupBy,...e],s=[...this.internalOptions.groupDesc,...s]),this.customSort(t,e,s,this.locale)},groupItems(t){return this.customGroup(t,this.internalOptions.groupBy,this.internalOptions.groupDesc)},paginateItems(t){return this.serverItemsLength===-1&&t.length<=this.pageStart&&(this.internalOptions.page=Math.max(1,Math.ceil(t.length/this.internalOptions.itemsPerPage))||1),t.slice(this.pageStart,this.pageStop)}},render(){return this.$scopedSlots.default&&this.$scopedSlots.default(this.scopedProps)}});const K=g.extend({name:"v-data-footer",props:{options:{type:Object,required:!0},pagination:{type:Object,required:!0},itemsPerPageOptions:{type:Array,default:()=>[5,10,15,-1]},prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},itemsPerPageAllText:{type:String,default:"$vuetify.dataFooter.itemsPerPageAll"},showFirstLastPage:Boolean,showCurrentPage:Boolean,disablePagination:Boolean,disableItemsPerPage:Boolean,pageText:{type:String,default:"$vuetify.dataFooter.pageText"}},computed:{disableNextPageIcon(){return this.options.itemsPerPage<=0||this.options.page*this.options.itemsPerPage>=this.pagination.itemsLength||this.pagination.pageStop<0},computedDataItemsPerPageOptions(){return this.itemsPerPageOptions.map(t=>typeof t=="object"?t:this.genDataItemsPerPageOption(t))}},methods:{updateOptions(t){this.$emit("update:options",Object.assign({},this.options,t))},onFirstPage(){this.updateOptions({page:1})},onPreviousPage(){this.updateOptions({page:this.options.page-1})},onNextPage(){this.updateOptions({page:this.options.page+1})},onLastPage(){this.updateOptions({page:this.pagination.pageCount})},onChangeItemsPerPage(t){this.updateOptions({itemsPerPage:t,page:1})},genDataItemsPerPageOption(t){return{text:t===-1?this.$vuetify.lang.t(this.itemsPerPageAllText):String(t),value:t}},genItemsPerPageSelect(){let t=this.options.itemsPerPage;const e=this.computedDataItemsPerPageOptions;return e.length<=1?null:(e.find(s=>s.value===t)||(t=e[0]),this.$createElement("div",{staticClass:"v-data-footer__select"},[this.$vuetify.lang.t(this.itemsPerPageText),this.$createElement(H,{attrs:{"aria-label":this.$vuetify.lang.t(this.itemsPerPageText)},props:{disabled:this.disableItemsPerPage,items:e,value:t,hideDetails:!0,auto:!0,minWidth:"75px"},on:{input:this.onChangeItemsPerPage}})]))},genPaginationInfo(){let t=["\u2013"];const e=this.pagination.itemsLength;let s=this.pagination.pageStart,i=this.pagination.pageStop;return this.pagination.itemsLength&&this.pagination.itemsPerPage?(s=this.pagination.pageStart+1,i=e<this.pagination.pageStop||this.pagination.pageStop<0?e:this.pagination.pageStop,t=this.$scopedSlots["page-text"]?[this.$scopedSlots["page-text"]({pageStart:s,pageStop:i,itemsLength:e})]:[this.$vuetify.lang.t(this.pageText,s,i,e)]):this.$scopedSlots["page-text"]&&(t=[this.$scopedSlots["page-text"]({pageStart:s,pageStop:i,itemsLength:e})]),this.$createElement("div",{class:"v-data-footer__pagination"},t)},genIcon(t,e,s,i){return this.$createElement(v,{props:{disabled:e||this.disablePagination,icon:!0,text:!0},on:{click:t},attrs:{"aria-label":s}},[this.$createElement(b,i)])},genIcons(){const t=[],e=[];return t.push(this.genIcon(this.onPreviousPage,this.options.page===1,this.$vuetify.lang.t("$vuetify.dataFooter.prevPage"),this.$vuetify.rtl?this.nextIcon:this.prevIcon)),e.push(this.genIcon(this.onNextPage,this.disableNextPageIcon,this.$vuetify.lang.t("$vuetify.dataFooter.nextPage"),this.$vuetify.rtl?this.prevIcon:this.nextIcon)),this.showFirstLastPage&&(t.unshift(this.genIcon(this.onFirstPage,this.options.page===1,this.$vuetify.lang.t("$vuetify.dataFooter.firstPage"),this.$vuetify.rtl?this.lastIcon:this.firstIcon)),e.push(this.genIcon(this.onLastPage,this.options.page>=this.pagination.pageCount||this.options.itemsPerPage===-1,this.$vuetify.lang.t("$vuetify.dataFooter.lastPage"),this.$vuetify.rtl?this.firstIcon:this.lastIcon))),[this.$createElement("div",{staticClass:"v-data-footer__icons-before"},t),this.showCurrentPage&&this.$createElement("span",[this.options.page.toString()]),this.$createElement("div",{staticClass:"v-data-footer__icons-after"},e)]}},render(){return this.$createElement("div",{staticClass:"v-data-footer"},[u(this,"prepend"),this.genItemsPerPageSelect(),this.genPaginationInfo(),this.genIcons()])}}),B=f(E,A).extend({name:"v-data-iterator",props:{...x.options.props,itemKey:{type:String,default:"id"},value:{type:Array,default:()=>[]},singleSelect:Boolean,expanded:{type:Array,default:()=>[]},mobileBreakpoint:{...E.options.props.mobileBreakpoint,default:600},singleExpand:Boolean,loading:[Boolean,String],noResultsText:{type:String,default:"$vuetify.dataIterator.noResultsText"},noDataText:{type:String,default:"$vuetify.noDataText"},loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideDefaultFooter:Boolean,footerProps:Object,selectableKey:{type:String,default:"isSelectable"}},data:()=>({selection:{},expansion:{},internalCurrentItems:[],shiftKeyDown:!1,lastEntry:-1}),computed:{everyItem(){return!!this.selectableItems.length&&this.selectableItems.every(t=>this.isSelected(t))},someItems(){return this.selectableItems.some(t=>this.isSelected(t))},sanitizedFooterProps(){return F(this.footerProps)},selectableItems(){return this.internalCurrentItems.filter(t=>this.isSelectable(t))}},watch:{value:{handler(t){this.selection=t.reduce((e,s)=>(e[h(s,this.itemKey)]=s,e),{})},immediate:!0},selection(t,e){p(Object.keys(t),Object.keys(e))||this.$emit("input",Object.values(t))},expanded:{handler(t){this.expansion=t.reduce((e,s)=>(e[h(s,this.itemKey)]=!0,e),{})},immediate:!0},expansion(t,e){if(p(t,e))return;const s=Object.keys(t).filter(a=>t[a]),i=s.length?this.items.filter(a=>s.includes(String(h(a,this.itemKey)))):[];this.$emit("update:expanded",i)}},created(){[["disable-initial-sort","sort-by"],["filter","custom-filter"],["pagination","options"],["total-items","server-items-length"],["hide-actions","hide-default-footer"],["rows-per-page-items","footer-props.items-per-page-options"],["rows-per-page-text","footer-props.items-per-page-text"],["prev-icon","footer-props.prev-icon"],["next-icon","footer-props.next-icon"]].forEach(([s,i])=>{this.$attrs.hasOwnProperty(s)&&k(s,i,this)}),["expand","content-class","content-props","content-tag"].forEach(s=>{this.$attrs.hasOwnProperty(s)&&G(s)})},mounted(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)},beforeDestroy(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)},methods:{onKeyDown(t){t.keyCode===_.shift&&(this.shiftKeyDown=!0)},onKeyUp(t){t.keyCode===_.shift&&(this.shiftKeyDown=!1)},toggleSelectAll(t){const e=Object.assign({},this.selection);for(let s=0;s<this.selectableItems.length;s++){const i=this.selectableItems[s];if(!this.isSelectable(i))continue;const a=h(i,this.itemKey);t?e[a]=i:delete e[a]}this.selection=e,this.$emit("toggle-select-all",{items:this.internalCurrentItems,value:t})},isSelectable(t){return h(t,this.selectableKey)!==!1},isSelected(t){return!!this.selection[h(t,this.itemKey)]||!1},select(t,e=!0,s=!0){if(!this.isSelectable(t))return;const i=this.singleSelect?{}:Object.assign({},this.selection),a=h(t,this.itemKey);e?i[a]=t:delete i[a];const n=this.selectableItems.findIndex(o=>h(o,this.itemKey)===a);if(this.lastEntry===-1)this.lastEntry=n;else if(this.shiftKeyDown&&!this.singleSelect&&s){const o=h(this.selectableItems[this.lastEntry],this.itemKey),r=Object.keys(this.selection).includes(String(o));this.multipleSelect(r,s,i,n)}if(this.lastEntry=n,this.singleSelect&&s){const o=Object.keys(this.selection),r=o.length&&h(this.selection[o[0]],this.itemKey);r&&r!==a&&this.$emit("item-selected",{item:this.selection[r],value:!1})}this.selection=i,s&&this.$emit("item-selected",{item:t,value:e})},multipleSelect(t=!0,e=!0,s,i){const a=i<this.lastEntry?i:this.lastEntry,n=i<this.lastEntry?this.lastEntry:i;for(let o=a;o<=n;o++){const r=this.selectableItems[o],l=h(r,this.itemKey);t?s[l]=r:delete s[l],e&&this.$emit("item-selected",{currentItem:r,value:t})}},isExpanded(t){return this.expansion[h(t,this.itemKey)]||!1},expand(t,e=!0){const s=this.singleExpand?{}:Object.assign({},this.expansion),i=h(t,this.itemKey);e?s[i]=!0:delete s[i],this.expansion=s,this.$emit("item-expanded",{item:t,value:e})},createItemProps(t,e){return{item:t,index:e,select:s=>this.select(t,s),isSelected:this.isSelected(t),expand:s=>this.expand(t,s),isExpanded:this.isExpanded(t),isMobile:this.isMobile}},genEmptyWrapper(t){return this.$createElement("div",t)},genEmpty(t,e){if(t===0&&this.loading){const s=this.$slots.loading||this.$vuetify.lang.t(this.loadingText);return this.genEmptyWrapper(s)}else if(t===0){const s=this.$slots["no-data"]||this.$vuetify.lang.t(this.noDataText);return this.genEmptyWrapper(s)}else if(e===0){const s=this.$slots["no-results"]||this.$vuetify.lang.t(this.noResultsText);return this.genEmptyWrapper(s)}return null},genItems(t){const e=this.genEmpty(t.originalItemsLength,t.pagination.itemsLength);return e?[e]:this.$scopedSlots.default?this.$scopedSlots.default({...t,isSelected:this.isSelected,select:this.select,isExpanded:this.isExpanded,isMobile:this.isMobile,expand:this.expand}):this.$scopedSlots.item?t.items.map((s,i)=>this.$scopedSlots.item(this.createItemProps(s,i))):[]},genFooter(t){if(this.hideDefaultFooter)return null;const e={props:{...this.sanitizedFooterProps,options:t.options,pagination:t.pagination},on:{"update:options":i=>t.updateOptions(i)}},s=$("footer.",this.$scopedSlots);return this.$createElement(K,{scopedSlots:s,...e})},genDefaultScopedSlot(t){const e={...t,someItems:this.someItems,everyItem:this.everyItem,toggleSelectAll:this.toggleSelectAll};return this.$createElement("div",{staticClass:"v-data-iterator"},[u(this,"header",e,!0),this.genItems(t),this.genFooter(t),u(this,"footer",e,!0)])}},render(){return this.$createElement(x,{props:this.$props,on:{"update:options":(t,e)=>!p(t,e)&&this.$emit("update:options",t),"update:page":t=>this.$emit("update:page",t),"update:items-per-page":t=>this.$emit("update:items-per-page",t),"update:sort-by":t=>this.$emit("update:sort-by",t),"update:sort-desc":t=>this.$emit("update:sort-desc",t),"update:group-by":t=>this.$emit("update:group-by",t),"update:group-desc":t=>this.$emit("update:group-desc",t),pagination:(t,e)=>!p(t,e)&&this.$emit("pagination",t),"current-items":t=>{this.internalCurrentItems=t,this.$emit("current-items",t)},"page-count":t=>this.$emit("page-count",t)},scopedSlots:{default:this.genDefaultScopedSlot}})}});const I=f().extend({directives:{ripple:L},props:{headers:{type:Array,default:()=>[]},options:{type:Object,default:()=>({page:1,itemsPerPage:10,sortBy:[],sortDesc:[],groupBy:[],groupDesc:[],multiSort:!1,mustSort:!1})},checkboxColor:String,sortIcon:{type:String,default:"$sort"},everyItem:Boolean,someItems:Boolean,showGroupBy:Boolean,singleSelect:Boolean,disableSort:Boolean},methods:{genSelectAll(){var t;const e={props:{value:this.everyItem,indeterminate:!this.everyItem&&this.someItems,color:(t=this.checkboxColor)!==null&&t!==void 0?t:""},on:{input:s=>this.$emit("toggle-select-all",s)}};return this.$scopedSlots["data-table-select"]?this.$scopedSlots["data-table-select"](e):this.$createElement(M,{staticClass:"v-data-table__checkbox",...e})},genSortIcon(){return this.$createElement(b,{staticClass:"v-data-table-header__icon",props:{size:18}},[this.sortIcon])}}}),J=f(I).extend({name:"v-data-table-header-mobile",props:{sortByText:{type:String,default:"$vuetify.dataTable.sortBy"}},methods:{genSortChip(t){const e=[t.item.text],s=this.options.sortBy.findIndex(n=>n===t.item.value),i=s>=0,a=this.options.sortDesc[s];return e.push(this.$createElement("div",{staticClass:"v-chip__close",class:{sortable:!0,active:i,asc:i&&!a,desc:i&&a}},[this.genSortIcon()])),this.$createElement(U,{staticClass:"sortable",on:{click:n=>{n.stopPropagation(),this.$emit("sort",t.item.value)}}},e)},genSortSelect(t){return this.$createElement(H,{props:{label:this.$vuetify.lang.t(this.sortByText),items:t,hideDetails:!0,multiple:this.options.multiSort,value:this.options.multiSort?this.options.sortBy:this.options.sortBy[0],menuProps:{closeOnContentClick:!0}},on:{change:e=>this.$emit("sort",e)},scopedSlots:{selection:e=>this.genSortChip(e)}})}},render(t){const e=[],s=this.headers.find(o=>o.value==="data-table-select");s&&!this.singleSelect&&e.push(this.$createElement("div",{class:["v-data-table-header-mobile__select",...c(s.class)],attrs:{width:s.width}},[this.genSelectAll()]));const i=this.headers.filter(o=>o.sortable!==!1&&o.value!=="data-table-select").map(o=>({text:o.text,value:o.value}));!this.disableSort&&i.length&&e.push(this.genSortSelect(i));const a=e.length?t("th",[t("div",{staticClass:"v-data-table-header-mobile__wrapper"},e)]):void 0,n=t("tr",[a]);return t("thead",{staticClass:"v-data-table-header v-data-table-header-mobile"},[n])}}),Q=f(I).extend({name:"v-data-table-header-desktop",methods:{genGroupByToggle(t){return this.$createElement("span",{on:{click:e=>{e.stopPropagation(),this.$emit("group",t.value)}}},["group"])},getAria(t,e){const s=n=>this.$vuetify.lang.t(`$vuetify.dataTable.ariaLabel.${n}`);let i="none",a=[s("sortNone"),s("activateAscending")];return t?(e?(i="descending",a=[s("sortDescending"),s(this.options.mustSort?"activateAscending":"activateNone")]):(i="ascending",a=[s("sortAscending"),s("activateDescending")]),{ariaSort:i,ariaLabel:a.join(" ")}):{ariaSort:i,ariaLabel:a.join(" ")}},genHeader(t){const e={attrs:{role:"columnheader",scope:"col","aria-label":t.text||""},style:{width:P(t.width),minWidth:P(t.width)},class:[`text-${t.align||"start"}`,...c(t.class),t.divider&&"v-data-table__divider"],on:{}},s=[];if(t.value==="data-table-select"&&!this.singleSelect)return this.$createElement("th",e,[this.genSelectAll()]);if(s.push(this.$scopedSlots.hasOwnProperty(t.value)?this.$scopedSlots[t.value]({header:t}):this.$createElement("span",[t.text])),!this.disableSort&&(t.sortable||!t.hasOwnProperty("sortable"))){e.on.click=()=>this.$emit("sort",t.value);const i=this.options.sortBy.findIndex(l=>l===t.value),a=i>=0,n=this.options.sortDesc[i];e.class.push("sortable");const{ariaLabel:o,ariaSort:r}=this.getAria(a,n);e.attrs["aria-label"]+=`${t.text?": ":""}${o}`,e.attrs["aria-sort"]=r,a&&(e.class.push("active"),e.class.push(n?"desc":"asc")),t.align==="end"?s.unshift(this.genSortIcon()):s.push(this.genSortIcon()),this.options.multiSort&&a&&s.push(this.$createElement("span",{class:"v-data-table-header__sort-badge"},[String(i+1)]))}return this.showGroupBy&&t.groupable!==!1&&s.push(this.genGroupByToggle(t)),this.$createElement("th",e,s)}},render(){return this.$createElement("thead",{staticClass:"v-data-table-header"},[this.$createElement("tr",this.headers.map(t=>this.genHeader(t)))])}});function X(t){if(t.model&&t.on&&t.on.input)if(Array.isArray(t.on.input)){const e=t.on.input.indexOf(t.model.callback);e>-1&&t.on.input.splice(e,1)}else delete t.on.input}function Y(t,e){const s=[];for(const i in t)t.hasOwnProperty(i)&&s.push(e("template",{slot:i},t[i]));return s}const Z=g.extend({name:"v-data-table-header",functional:!0,props:{...I.options.props,mobile:Boolean},render(t,{props:e,data:s,slots:i}){X(s);const a=Y(i(),t);return s=N(s,{props:e}),e.mobile?t(J,s,a):t(Q,s,a)}});function tt(t){var e;return t.length!==1||!["td","th"].includes((e=t[0])===null||e===void 0?void 0:e.tag)}const et=g.extend({name:"row",functional:!0,props:{headers:Array,index:Number,item:Object,rtl:Boolean},render(t,{props:e,slots:s,data:i}){const a=s(),n=e.headers.map(o=>{const r=[],l=h(e.item,o.value),d=o.value,m=i.scopedSlots&&i.scopedSlots.hasOwnProperty(d)&&i.scopedSlots[d],y=a.hasOwnProperty(d)&&a[d];m?r.push(...c(m({item:e.item,isMobile:!1,header:o,index:e.index,value:l}))):y?r.push(...c(y)):r.push(l==null?l:String(l));const S=`text-${o.align||"start"}`;return tt(r)?t("td",{class:[S,o.cellClass,{"v-data-table__divider":o.divider}]},r):r});return t("tr",i,n)}}),D=g.extend({name:"row-group",functional:!0,props:{value:{type:Boolean,default:!0},headerClass:{type:String,default:"v-row-group__header"},contentClass:String,summaryClass:{type:String,default:"v-row-group__summary"}},render(t,{slots:e,props:s}){const i=e(),a=[];return i["column.header"]?a.push(t("tr",{staticClass:s.headerClass},i["column.header"])):i["row.header"]&&a.push(...i["row.header"]),i["row.content"]&&s.value&&a.push(...i["row.content"]),i["column.summary"]?a.push(t("tr",{staticClass:s.summaryClass},i["column.summary"])):i["row.summary"]&&a.push(...i["row.summary"]),a}});const st=f(A).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:P(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),it=g.extend({name:"row",functional:!0,props:{headers:Array,hideDefaultHeader:Boolean,index:Number,item:Object,rtl:Boolean},render(t,{props:e,slots:s,data:i}){const a=s(),n=e.headers.map(o=>{const r={"v-data-table__mobile-row":!0},l=[],d=h(e.item,o.value),m=o.value,y=i.scopedSlots&&i.scopedSlots.hasOwnProperty(m)&&i.scopedSlots[m],S=a.hasOwnProperty(m)&&a[m];y?l.push(y({item:e.item,isMobile:!0,header:o,index:e.index,value:d})):S?l.push(S):l.push(d==null?d:String(d));const O=[t("div",{staticClass:"v-data-table__mobile-row__cell"},l)];return o.value!=="dataTableSelect"&&!e.hideDefaultHeader&&O.unshift(t("div",{staticClass:"v-data-table__mobile-row__header"},[o.text])),t("td",{class:r},O)});return t("tr",{...i,staticClass:"v-data-table__mobile-table-row"},n)}});function C(t,e,s){return i=>{const a=h(t,i.value);return i.filter?i.filter(a,e,t):s(a,e,t)}}function at(t,e,s,i,a){return e=typeof e=="string"?e.trim():null,t.filter(n=>{const o=s.every(C(n,e,T)),r=!e||i.some(C(n,e,a));return o&&r})}const rt=f(B,V).extend({name:"v-data-table",directives:{ripple:L},props:{headers:{type:Array,default:()=>[]},showSelect:Boolean,checkboxColor:String,showExpand:Boolean,showGroupBy:Boolean,height:[Number,String],hideDefaultHeader:Boolean,caption:String,dense:Boolean,headerProps:Object,calculateWidths:Boolean,fixedHeader:Boolean,headersLength:Number,expandIcon:{type:String,default:"$expand"},customFilter:{type:Function,default:T},itemClass:{type:[String,Function],default:()=>""},loaderHeight:{type:[Number,String],default:4}},data(){return{internalGroupBy:[],openCache:{},widths:[]}},computed:{computedHeaders(){if(!this.headers)return[];const t=this.headers.filter(s=>s.value===void 0||!this.internalGroupBy.find(i=>i===s.value)),e={text:"",sortable:!1,width:"1px"};if(this.showSelect){const s=t.findIndex(i=>i.value==="data-table-select");s<0?t.unshift({...e,value:"data-table-select"}):t.splice(s,1,{...e,...t[s]})}if(this.showExpand){const s=t.findIndex(i=>i.value==="data-table-expand");s<0?t.unshift({...e,value:"data-table-expand"}):t.splice(s,1,{...e,...t[s]})}return t},colspanAttrs(){return this.isMobile?void 0:{colspan:this.headersLength||this.computedHeaders.length}},columnSorters(){return this.computedHeaders.reduce((t,e)=>(e.sort&&(t[e.value]=e.sort),t),{})},headersWithCustomFilters(){return this.headers.filter(t=>t.filter&&(!t.hasOwnProperty("filterable")||t.filterable===!0))},headersWithoutCustomFilters(){return this.headers.filter(t=>!t.filter&&(!t.hasOwnProperty("filterable")||t.filterable===!0))},sanitizedHeaderProps(){return F(this.headerProps)},computedItemsPerPage(){const t=this.options&&this.options.itemsPerPage?this.options.itemsPerPage:this.itemsPerPage,e=this.sanitizedFooterProps.itemsPerPageOptions;if(e&&!e.find(s=>typeof s=="number"?s===t:s.value===t)){const s=e[0];return typeof s=="object"?s.value:s}return t},groupByText(){var t,e,s;return(s=(e=(t=this.headers)===null||t===void 0?void 0:t.find(i=>{var a;return i.value===((a=this.internalGroupBy)===null||a===void 0?void 0:a[0])}))===null||e===void 0?void 0:e.text)!==null&&s!==void 0?s:""}},created(){[["sort-icon","header-props.sort-icon"],["hide-headers","hide-default-header"],["select-all","show-select"]].forEach(([e,s])=>{this.$attrs.hasOwnProperty(e)&&k(e,s,this)})},mounted(){this.calculateWidths&&(window.addEventListener("resize",this.calcWidths),this.calcWidths())},beforeDestroy(){this.calculateWidths&&window.removeEventListener("resize",this.calcWidths)},methods:{calcWidths(){this.widths=Array.from(this.$el.querySelectorAll("th")).map(t=>t.clientWidth)},customFilterWithColumns(t,e){return at(t,e,this.headersWithCustomFilters,this.headersWithoutCustomFilters,this.customFilter)},customSortWithHeaders(t,e,s,i){return this.customSort(t,e,s,i,this.columnSorters)},createItemProps(t,e){const s=B.options.methods.createItemProps.call(this,t,e);return Object.assign(s,{headers:this.computedHeaders})},genCaption(t){return this.caption?[this.$createElement("caption",[this.caption])]:u(this,"caption",t,!0)},genColgroup(t){return this.$createElement("colgroup",this.computedHeaders.map(e=>this.$createElement("col",{class:{divider:e.divider}})))},genLoading(){const t=this.$createElement("th",{staticClass:"column",attrs:this.colspanAttrs},[this.genProgress()]),e=this.$createElement("tr",{staticClass:"v-data-table__progress"},[t]);return this.$createElement("thead",[e])},genHeaders(t){const e={props:{...this.sanitizedHeaderProps,headers:this.computedHeaders,options:t.options,mobile:this.isMobile,showGroupBy:this.showGroupBy,checkboxColor:this.checkboxColor,someItems:this.someItems,everyItem:this.everyItem,singleSelect:this.singleSelect,disableSort:this.disableSort},on:{sort:t.sort,group:t.group,"toggle-select-all":this.toggleSelectAll}},s=[u(this,"header",{...e,isMobile:this.isMobile})];if(!this.hideDefaultHeader){const i=$("header.",this.$scopedSlots);s.push(this.$createElement(Z,{...e,scopedSlots:i}))}return this.loading&&s.push(this.genLoading()),s},genEmptyWrapper(t){return this.$createElement("tr",{staticClass:"v-data-table__empty-wrapper"},[this.$createElement("td",{attrs:this.colspanAttrs},t)])},genItems(t,e){const s=this.genEmpty(e.originalItemsLength,e.pagination.itemsLength);return s?[s]:e.groupedItems?this.genGroupedRows(e.groupedItems,e):this.genRows(t,e)},genGroupedRows(t,e){return t.map(s=>(this.openCache.hasOwnProperty(s.name)||this.$set(this.openCache,s.name,!0),this.$scopedSlots.group?this.$scopedSlots.group({group:s.name,options:e.options,isMobile:this.isMobile,items:s.items,headers:this.computedHeaders}):this.genDefaultGroupedRow(s.name,s.items,e)))},genDefaultGroupedRow(t,e,s){const i=!!this.openCache[t],a=[this.$createElement("template",{slot:"row.content"},this.genRows(e,s))],n=()=>this.$set(this.openCache,t,!this.openCache[t]),o=()=>s.updateOptions({groupBy:[],groupDesc:[]});if(this.$scopedSlots["group.header"])a.unshift(this.$createElement("template",{slot:"column.header"},[this.$scopedSlots["group.header"]({group:t,groupBy:s.options.groupBy,isMobile:this.isMobile,items:e,headers:this.computedHeaders,isOpen:i,toggle:n,remove:o})]));else{const r=this.$createElement(v,{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:n}},[this.$createElement(b,[i?"$minus":"$plus"])]),l=this.$createElement(v,{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:o}},[this.$createElement(b,["$close"])]),d=this.$createElement("td",{staticClass:"text-start",attrs:this.colspanAttrs},[r,`${this.groupByText}: ${t}`,l]);a.unshift(this.$createElement("template",{slot:"column.header"},[d]))}return this.$scopedSlots["group.summary"]&&a.push(this.$createElement("template",{slot:"column.summary"},[this.$scopedSlots["group.summary"]({group:t,groupBy:s.options.groupBy,isMobile:this.isMobile,items:e,headers:this.computedHeaders,isOpen:i,toggle:n})])),this.$createElement(D,{key:t,props:{value:i}},a)},genRows(t,e){return this.$scopedSlots.item?this.genScopedRows(t,e):this.genDefaultRows(t,e)},genScopedRows(t,e){const s=[];for(let i=0;i<t.length;i++){const a=t[i];s.push(this.$scopedSlots.item({...this.createItemProps(a,i),isMobile:this.isMobile})),this.isExpanded(a)&&s.push(this.$scopedSlots["expanded-item"]({headers:this.computedHeaders,isMobile:this.isMobile,index:i,item:a}))}return s},genDefaultRows(t,e){return this.$scopedSlots["expanded-item"]?t.map((s,i)=>this.genDefaultExpandedRow(s,i)):t.map((s,i)=>this.genDefaultSimpleRow(s,i))},genDefaultExpandedRow(t,e){const s=this.isExpanded(t),i={"v-data-table__expanded v-data-table__expanded__row":s},a=this.genDefaultSimpleRow(t,e,i),n=this.$createElement("tr",{staticClass:"v-data-table__expanded v-data-table__expanded__content"},[this.$scopedSlots["expanded-item"]({headers:this.computedHeaders,isMobile:this.isMobile,item:t})]);return this.$createElement(D,{props:{value:s}},[this.$createElement("template",{slot:"row.header"},[a]),this.$createElement("template",{slot:"row.content"},[n])])},genDefaultSimpleRow(t,e,s={}){const i=$("item.",this.$scopedSlots),a=this.createItemProps(t,e);if(this.showSelect){const n=i["data-table-select"];i["data-table-select"]=n?()=>n({...a,isMobile:this.isMobile}):()=>{var o;return this.$createElement(M,{staticClass:"v-data-table__checkbox",props:{value:a.isSelected,disabled:!this.isSelectable(t),color:(o=this.checkboxColor)!==null&&o!==void 0?o:""},on:{input:r=>a.select(r)}})}}if(this.showExpand){const n=i["data-table-expand"];i["data-table-expand"]=n?()=>n(a):()=>this.$createElement(b,{staticClass:"v-data-table__expand-icon",class:{"v-data-table__expand-icon--active":a.isExpanded},on:{click:o=>{o.stopPropagation(),a.expand(!a.isExpanded)}}},[this.expandIcon])}return this.$createElement(this.isMobile?it:et,{key:h(t,this.itemKey),class:z({...s,"v-data-table__selected":a.isSelected},q(t,this.itemClass)),props:{headers:this.computedHeaders,hideDefaultHeader:this.hideDefaultHeader,index:e,item:t,rtl:this.$vuetify.rtl},scopedSlots:i,on:{click:n=>this.$emit("click:row",t,a,n),contextmenu:n=>this.$emit("contextmenu:row",n,a),dblclick:n=>this.$emit("dblclick:row",n,a)}})},genBody(t){const e={...t,expand:this.expand,headers:this.computedHeaders,isExpanded:this.isExpanded,isMobile:this.isMobile,isSelected:this.isSelected,select:this.select};return this.$scopedSlots.body?this.$scopedSlots.body(e):this.$createElement("tbody",[u(this,"body.prepend",e,!0),this.genItems(t.items,t),u(this,"body.append",e,!0)])},genFoot(t){var e,s;return(s=(e=this.$scopedSlots).foot)===null||s===void 0?void 0:s.call(e,t)},genFooters(t){const e={props:{options:t.options,pagination:t.pagination,itemsPerPageText:"$vuetify.dataTable.itemsPerPageText",...this.sanitizedFooterProps},on:{"update:options":i=>t.updateOptions(i)},widths:this.widths,headers:this.computedHeaders},s=[u(this,"footer",e,!0)];return this.hideDefaultFooter||s.push(this.$createElement(K,{...e,scopedSlots:$("footer.",this.$scopedSlots)})),s},genDefaultScopedSlot(t){const e={height:this.height,fixedHeader:this.fixedHeader,dense:this.dense};return this.$createElement(st,{props:e,class:{"v-data-table--mobile":this.isMobile}},[this.proxySlot("top",u(this,"top",{...t,isMobile:this.isMobile},!0)),this.genCaption(t),this.genColgroup(t),this.genHeaders(t),this.genBody(t),this.genFoot(t),this.proxySlot("bottom",this.genFooters(t))])},proxySlot(t,e){return this.$createElement("template",{slot:t},e)}},render(){return this.$createElement(x,{props:{...this.$props,customFilter:this.customFilterWithColumns,customSort:this.customSortWithHeaders,itemsPerPage:this.computedItemsPerPage},on:{"update:options":(t,e)=>{this.internalGroupBy=t.groupBy||[],!p(t,e)&&this.$emit("update:options",t)},"update:page":t=>this.$emit("update:page",t),"update:items-per-page":t=>this.$emit("update:items-per-page",t),"update:sort-by":t=>this.$emit("update:sort-by",t),"update:sort-desc":t=>this.$emit("update:sort-desc",t),"update:group-by":t=>this.$emit("update:group-by",t),"update:group-desc":t=>this.$emit("update:group-desc",t),pagination:(t,e)=>!p(t,e)&&this.$emit("pagination",t),"current-items":t=>{this.internalCurrentItems=t,this.$emit("current-items",t)},"page-count":t=>this.$emit("page-count",t)},scopedSlots:{default:this.genDefaultScopedSlot}})}});export{rt as _};
