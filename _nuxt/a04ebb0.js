(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{470:function(t,n,e){"use strict";e(11),e(6),e(12),e(70),e(35),e(312),e(212),e(71),e(90);var o=e(0);var c,r=e(72);n.a=(c="container",o.a.extend({name:"v-".concat(c),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var e=n.props,data=n.data,o=n.children;data.staticClass="".concat(c," ").concat(data.staticClass||"").trim();var r=data.attrs;if(r){data.attrs={};var l=Object.keys(r).filter((function(t){if("slot"===t)return!1;var n=r[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,o=n.props,data=n.data,c=n.children,l=data.attrs;return l&&(data.attrs={},e=Object.keys(l).filter((function(t){if("slot"===t)return!1;var n=l[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(r.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(e||[])}),c)}})},651:function(t,n,e){"use strict";e.r(n);var o={name:"ChallengeTaskTaskDefLink",data:function(){return{}},methods:{openTechnicalDetailsPage:function(){this.$gtag("event","open__challenge__task__technical_details",{event_name:"open",page_title:"challenge2022",section_name:"task",button:"technical_details"})}}},c=e(61),r=e(78),l=e.n(r),d=e(216),v=e(464),f=e(470),h=e(198),_=e(466),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"gnt-sec-3"},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("h2",{attrs:{id:"challenge-task-section-task-def-link"}},[t._v("\n            Task (Technical Details)\n          ")]),t._v(" "),e("p",[t._v("\n            Plese visit the following page for more technical details such as\n            task definition, evaluation procedures, and rules.\n          ")]),t._v(" "),e("a",{staticClass:"text-decoration-none",attrs:{href:"https://github.com/FTC-2024",target:"_blank"}},[e("v-btn",{staticClass:"d-inline-block d-md-none my-2",attrs:{block:"",color:"op-brown darken-1 white--text text-button"}},[e("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n                Technical Details\n                "),e("v-icon",[t._v("mdi-github")]),t._v(" "),e("v-icon",[t._v("mdi-open-in-new")])],1)]),t._v(" "),e("v-btn",{staticClass:"d-none d-md-inline-block my-2",attrs:{color:"op-brown darken-1 white--text text-button"},on:{click:t.openTechnicalDetailsPage}},[e("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n                Technical Details\n                "),e("v-icon",[t._v("mdi-github")]),t._v(" "),e("v-icon",[t._v("mdi-open-in-new")])],1)])],1)])],1)],1)],1)}),[],!1,null,"d4d36606",null);n.default=component.exports;l()(component,{VBtn:d.a,VCol:v.a,VContainer:f.a,VIcon:h.a,VRow:_.a})}}]);