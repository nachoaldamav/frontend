(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{355:function(e,t,r){var content=r(366);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(62).default)("4dfd763c",content,!0,{sourceMap:!1})},358:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=function(){return(n=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e}).apply(this,arguments)};var o=r(8);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(template,style,script,e,t,r,n,o){var c,component=("function"==typeof script?script.options:script)||{};if(component.__file="JSONViewItem.vue",component.render||(component.render=template.render,component.staticRenderFns=template.staticRenderFns,component._compiled=!0,t&&(component.functional=!0)),component._scopeId=e,style&&(c=function(e){style.call(this,n(e))}),void 0!==c)if(component.functional){var l=component.render;component.render=function(e,t){return c.call(t),l(e,t)}}else{var d=component.beforeCreate;component.beforeCreate=d?[].concat(d,c):[c]}return component}({render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"json-view-item"},["object"===e.data.type||"array"===e.data.type?r("div",[r("button",{staticClass:"data-key",attrs:{"aria-expanded":e.open?"true":"false"},on:{click:function(t){return t.stopPropagation(),e.toggleOpen(t)}}},[r("div",{class:e.classes}),e._v("\n      "+e._s(e.data.key)+":\n      "),r("span",{staticClass:"properties"},[e._v(e._s(e.lengthString))])]),e._v(" "),e._l(e.data.children,(function(t){return r("json-view-item",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],key:e.getKey(t),attrs:{data:t,maxDepth:e.maxDepth,canSelect:e.canSelect},on:{selected:e.bubbleSelected}})}))],2):e._e(),e._v(" "),"value"===e.data.type?r("div",{class:e.valueClasses,attrs:{role:e.canSelect?"button":void 0,tabindex:e.canSelect?"0":void 0},on:{click:function(t){return e.clickEvent(e.data)},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.clickEvent(e.data)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:e.clickEvent(e.data)}]}},[r("span",{staticClass:"value-key"},[e._v(e._s(e.data.key)+":")]),e._v(" "),r("span",{style:e.getValueStyle(e.data.value)},[e._v("\n      "+e._s(e.dataValue)+"\n    ")])]):e._e()])},staticRenderFns:[]},(function(e){e&&e("data-v-c45632d2_0",{source:".json-view-item[data-v-c45632d2]:not(.root-item){margin-left:15px}.value-key[data-v-c45632d2]{color:var(--vjc-valueKey-color);font-weight:600;margin-left:10px;border-radius:2px;white-space:nowrap;padding:5px 5px 5px 10px}.value-key.can-select[data-v-c45632d2]{cursor:pointer}.value-key.can-select[data-v-c45632d2]:hover{background-color:rgba(0,0,0,.08)}.value-key.can-select[data-v-c45632d2]:focus{outline:2px solid var(--vjc-hover-color)}.data-key[data-v-c45632d2]{font-size:100%;font-family:inherit;border:0;padding:0;background-color:transparent;width:100%;color:var(--vjc-key-color);display:flex;align-items:center;border-radius:2px;font-weight:600;cursor:pointer;white-space:nowrap;padding:5px}.data-key[data-v-c45632d2]:hover{background-color:var(--vjc-hover-color)}.data-key[data-v-c45632d2]:focus{outline:2px solid var(--vjc-hover-color)}.data-key[data-v-c45632d2]::-moz-focus-inner{border:0}.data-key .properties[data-v-c45632d2]{font-weight:300;opacity:.9;margin-left:4px;user-select:none}.chevron-arrow[data-v-c45632d2]{flex-shrink:0;border-right:4px solid var(--vjc-arrow-color);border-bottom:4px solid var(--vjc-arrow-color);width:var(--vjc-arrow-size);height:var(--vjc-arrow-size);margin-right:20px;margin-left:5px;transform:rotate(-45deg)}.chevron-arrow.opened[data-v-c45632d2]{margin-top:-3px;transform:rotate(45deg)}",map:void 0,media:void 0})}),o.default.extend({name:"json-view-item",data:function(){return{open:this.data.depth<this.maxDepth}},props:{data:{required:!0,type:Object},maxDepth:{type:Number,required:!1,default:1},canSelect:{type:Boolean,required:!1,default:!1}},methods:{toggleOpen:function(){this.open=!this.open},clickEvent:function(data){this.$emit("selected",{key:data.key,value:data.value,path:data.path})},bubbleSelected:function(data){this.$emit("selected",data)},getKey:function(e){return isNaN(e.key)?'"'+e.key+'":':e.key+":"},getValueStyle:function(e){switch(c(e)){case"string":return{color:"var(--vjc-string-color)"};case"number":return{color:"var(--vjc-number-color)"};case"boolean":return{color:"var(--vjc-boolean-color)"};case"object":case"undefined":return{color:"var(--vjc-null-color)"};default:return{color:"var(--vjc-valueKey-color)"}}}},computed:{classes:function(){return{"chevron-arrow":!0,opened:this.open}},valueClasses:function(){return{"value-key":!0,"can-select":this.canSelect}},lengthString:function(){return"array"===this.data.type?1===this.data.length?this.data.length+" element":this.data.length+" elements":1===this.data.length?this.data.length+" property":this.data.length+" properties"},dataValue:function(){return void 0===this.data.value?"undefined":JSON.stringify(this.data.value)}}}),"data-v-c45632d2",!1,0,(function e(){var head=document.head||document.getElementsByTagName("head")[0],t=e.styles||(e.styles={}),r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,n){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var o=r?n.media||"default":e,style=t[o]||(t[o]={ids:[],parts:[],element:void 0});if(!style.ids.includes(e)){var code=n.source,c=style.ids.length;if(style.ids.push(e),n.map&&(code+="\n/*# sourceURL="+n.map.sources[0]+" */",code+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r&&(style.element=style.element||document.querySelector("style[data-group="+o+"]")),!style.element){var l=style.element=document.createElement("style");l.type="text/css",n.media&&l.setAttribute("media",n.media),r&&(l.setAttribute("data-group",o),l.setAttribute("data-next-index","0")),head.appendChild(l)}if(r&&(c=parseInt(style.element.getAttribute("data-next-index")),style.element.setAttribute("data-next-index",c+1)),style.element.styleSheet)style.parts.push(code),style.element.styleSheet.cssText=style.parts.filter(Boolean).join("\n");else{var d=document.createTextNode(code),v=style.element.childNodes;v[c]&&style.element.removeChild(v[c]),v.length?style.element.insertBefore(d,v[c]):style.element.appendChild(d)}}}}}));window.matchMedia("(prefers-color-scheme: dark)").matches;var d=function(template,style,script,e,t,r,n,o){var c,component=("function"==typeof script?script.options:script)||{};if(component.__file="JSONView.vue",component.render||(component.render=template.render,component.staticRenderFns=template.staticRenderFns,component._compiled=!0,t&&(component.functional=!0)),component._scopeId=e,style&&(c=function(e){style.call(this,n(e))}),void 0!==c)if(component.functional){var l=component.render;component.render=function(e,t){return c.call(t),l(e,t)}}else{var d=component.beforeCreate;component.beforeCreate=d?[].concat(d,c):[c]}return component}({render:function(){var e=this.$createElement;return(this._self._c||e)("json-view-item",{class:[{"root-item":!0,dark:"dark"===this.colorScheme}],attrs:{data:this.parsed,maxDepth:this.maxDepth,canSelect:this.hasSelectedListener},on:{selected:this.itemSelected}})},staticRenderFns:[]},(function(e){e&&e("data-v-1c053202_0",{source:".root-item[data-v-1c053202]{--vjc-key-color:#0977e6;--vjc-valueKey-color:#073642;--vjc-string-color:#268bd2;--vjc-number-color:#2aa198;--vjc-boolean-color:#cb4b16;--vjc-null-color:#6c71c4;--vjc-arrow-size:6px;--vjc-arrow-color:#444;--vjc-hover-color:rgba(0, 0, 0, 0.2);margin-left:0;width:100%;height:auto}.root-item.dark[data-v-1c053202]{--vjc-key-color:#80d8ff;--vjc-valueKey-color:#fdf6e3;--vjc-hover-color:rgba(255, 255, 255, 0.2);--vjc-arrow-color:#fdf6e3}",map:void 0,media:void 0})}),o.default.extend({name:"json-view",props:{data:{required:!0},rootKey:{type:String,required:!1,default:"root"},maxDepth:{type:Number,required:!1,default:1},colorScheme:{type:String,required:!1,default:"light"}},components:{"json-view-item":l},methods:{build:function(e,t,r,path,n){if(this.isObject(t)){for(var o=[],c=0,l=Object.entries(t);c<l.length;c++){var d=l[c],v=d[0],h=d[1];o.push(this.build(v,h,r+1,n?""+path+e+".":""+path,!0))}return{key:e,type:"object",depth:r,path:path,length:o.length,children:o}}if(this.isArray(t)){o=[];for(var i=0;i<t.length;i++)o.push(this.build(i.toString(),t[i],r+1,n?""+path+e+"["+i+"].":""+path,!1));return{key:e,type:"array",depth:r,path:path,length:o.length,children:o}}return{key:e,type:"value",path:n?path+e:path.slice(0,-1),depth:r,value:t}},isObject:function(e){return"object"===c(e)&&null!==e&&!this.isArray(e)},isArray:function(e){return Array.isArray(e)},itemSelected:function(data){this.$emit("selected",data)}},computed:{parsed:function(){return"object"===c(this.data)?this.build(this.rootKey,n({},this.data),0,"",!0):{key:this.rootKey,type:"value",path:"",depth:0,value:this.data}},hasSelectedListener:function(){return Boolean(this.$listeners&&this.$listeners.selected)}}}),"data-v-1c053202",!1,0,(function e(){var head=document.head||document.getElementsByTagName("head")[0],t=e.styles||(e.styles={}),r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,n){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var o=r?n.media||"default":e,style=t[o]||(t[o]={ids:[],parts:[],element:void 0});if(!style.ids.includes(e)){var code=n.source,c=style.ids.length;if(style.ids.push(e),n.map&&(code+="\n/*# sourceURL="+n.map.sources[0]+" */",code+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r&&(style.element=style.element||document.querySelector("style[data-group="+o+"]")),!style.element){var l=style.element=document.createElement("style");l.type="text/css",n.media&&l.setAttribute("media",n.media),r&&(l.setAttribute("data-group",o),l.setAttribute("data-next-index","0")),head.appendChild(l)}if(r&&(c=parseInt(style.element.getAttribute("data-next-index")),style.element.setAttribute("data-next-index",c+1)),style.element.styleSheet)style.parts.push(code),style.element.styleSheet.cssText=style.parts.filter(Boolean).join("\n");else{var d=document.createTextNode(code),v=style.element.childNodes;v[c]&&style.element.removeChild(v[c]),v.length?style.element.insertBefore(d,v[c]):style.element.appendChild(d)}}}}}))},365:function(e,t,r){"use strict";var n=r(355);r.n(n).a},366:function(e,t,r){(t=r(61)(!1)).push([e.i,".chevronStyle[data-v-fd018e60]{--vjc-arrow-size:10px!important}",""]),e.exports=t},377:function(e,t,r){"use strict";r.r(t);r(42);var n=r(14),o={components:{"json-view":r(358).a},data:function(){return{slide:0,details:{}}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,details;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("https://raw.githubusercontent.com/EpicData-info/items-tracker/master/database/items/".concat(e.$route.params.id,".json"));case 2:r=t.sent,details=r.data,e.details=details;case 5:case"end":return t.stop()}}),t)})))()}},c=(r(365),r(31)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("h1",[e._v(e._s(this.details.title))]),e._v(" "),r("p",[e._v(e._s(this.details.description))]),e._v(" "),r("h2",[e._v("Details")]),e._v(" "),r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{sm:"12"}},[r("json-view",{staticClass:"chevronStyle",attrs:{data:e.details}})],1)],1)],1),e._v(" "),r("h2",[e._v("Images")]),e._v(" "),r("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},e._l(e.details.keyImages,(function(image,e){return r("b-carousel-slide",{key:e,attrs:{caption:image.type,"img-src":image.url}})})),1)],1)}),[],!1,null,"fd018e60",null);t.default=component.exports}}]);