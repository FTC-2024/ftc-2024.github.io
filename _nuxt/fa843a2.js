(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{467:function(t,e,n){"use strict";n(11),n(6),n(12),n(70),n(35),n(313),n(213),n(71),n(90);var o=n(0);var r,c=n(72);e.a=(r="container",o.a.extend({name:"v-".concat(r),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,o=e.children;data.staticClass="".concat(r," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,o=e.props,data=e.data,r=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),r)}})},543:function(t,e,n){"use strict";n.r(e);var o={name:"ChallengeTaskOverview",data:function(){return{}}},r=n(61),c=n(78),l=n.n(c),d=n(461),f=n(467),m=n(463),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{attrs:{id:"challenge-task-section-overview"}},[t._v("Overview")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("Background")]),t._v(" "),n("p",[t._v("\n          Human Activity Recognition is beginning to be applied in industrial\n          domains, targeting the improvement of manual labor efficiency. We\n          know processes such as assembly and packaging inside factories or\n          logistic centers still mainly depend on manual workers. To ensure a\n          rapid response to changing demands, this trend is expected to\n          continue. Therefore, quantifying manual labor is a crucial\n          requirement to streamlining existing processes.\n        ")]),t._v(" "),n("p",[t._v("\n          Workers inside logistic centers perform a series of sequential tasks\n          to pack items. These working periods consist of actions like reading\n          item labels or assembling the packaging boxes. Understanding details\n          from each of these operations, i.e. its temporal duration or\n          potential abnormalities, is crucial for optimizing the packaging\n          process. However, period uniqueness related to item size or number\n          of items included, make identifying such operation details a\n          challenging task.\n        ")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("Challenge")]),t._v(" "),n("p",[t._v("\n          You’ll develop a model to recognize the operations that conform\n          packaging work with data from 4 IMU streams, keypoint data, etc. The\n          packaging work consists of 10 operations (i.e., activity classes)\n          described below. To quantify the operations as precisely as\n          possible, dense labeling is required. You must predict activity\n          classes for each 1second-long time slot. You can use data from 11\n          subjects to develop your model. The test data consists of 6 subjects\n          (4 distinct subjects).\n        ")]),t._v(" "),n("p",[t._v("\n          If successful, your work will help the ubiquitous research community\n          improve current smart factories and better integrate human factors\n          into the smart factory optimization process.\n        ")])])],1)],1)],1)}),[],!1,null,"cdddd284",null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:f.a,VRow:m.a})}}]);