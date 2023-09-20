(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{466:function(t,n,e){"use strict";e(11),e(6),e(12),e(70),e(35),e(312),e(212),e(71),e(90);var o=e(0);var r,c=e(72);n.a=(r="container",o.a.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var e=n.props,data=n.data,o=n.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var d=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,o=n.props,data=n.data,r=n.children,d=data.attrs;return d&&(data.attrs={},e=Object.keys(d).filter((function(t){if("slot"===t)return!1;var n=d[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(e||[])}),r)}})},506:function(t,n,e){"use strict";e.r(n);var o={name:"ChallengeTaskOverview",data:function(){return{}}},r=e(61),c=e(78),d=e.n(c),l=e(460),v=e(466),h=e(462),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"gnt-sec-3"},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("h2",{attrs:{id:"challenge-task-section-overview"}},[t._v("Overview")])])],1),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("h3",[t._v("Background")]),t._v(" "),e("p",[t._v("\n          Collective animal behaviors are teeming with life and intricate\n          behavioral patterns. The sweetfish, included in this dataset, offers\n          a unique window into understanding animal navigation in water. For\n          ethologists, ecologists, and mathematical and theoretical\n          biologists, decoding these patterns is pivotal, but automatic\n          tracking the navigation of sweetfish, especially when in schools,\n          introduces a plethora of challenges. (TBD)\n        ")])])],1),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("h3",[t._v("Challenge")]),t._v(" "),e("p",[t._v("\n          You can develop an automatic tracking model that can pinpoint the\n          navigational patterns of sweetfish with the Sweetfish dataset\n          including locations of 10 fishes. The dataset includes videos and\n          bounding boxes of fishes. To analyze the behaviors recorded by\n          videos, automatic detection and tracking of bounding boxes is\n          necessary. We have train, development, and test datasets. By\n          training your object detection and tracking algorithms using\n          training dataset, you can estimate and submit the bounding box data\n          in development and test datasets.\n        ")])])],1)],1)],1)}),[],!1,null,"8f2df278",null);n.default=component.exports;d()(component,{VCol:l.a,VContainer:v.a,VRow:h.a})}}]);