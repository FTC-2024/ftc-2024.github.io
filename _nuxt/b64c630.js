(window.webpackJsonp=window.webpackJsonp||[]).push([[14,12,13],{312:function(t,e,r){"use strict";var n=r(214);e.a=n.a},467:function(t,e,r){"use strict";r(11),r(6),r(12),r(70),r(35),r(313),r(213),r(71),r(90);var n=r(0);var o,l=r(72);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,c=data.attrs;return c&&(data.attrs={},r=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},469:function(t,e,r){var content=r(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("5db1c400",content,!0,{sourceMap:!1})},470:function(t,e,r){var n=r(18)(!1);n.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=n},483:function(t,e,r){"use strict";r(12),r(9),r(11),r(6),r(16),r(10),r(17);var n=r(2),o=(r(45),r(469),r(170)),l=r(312),c=r(95),d=r(63),v=r(36),h=r(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),f=r(14),m=r(13);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(f.a)(o.a,d.a,h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(n.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=k(k({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||v.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},543:function(t,e,r){"use strict";r.r(e);var n={name:"ChallengeTaskOverview",data:function(){return{}}},o=r(61),l=r(78),c=r.n(l),d=r(461),v=r(467),h=r(463),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"gnt-sec-3"},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h2",{attrs:{id:"challenge-task-section-overview"}},[t._v("Overview")])])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h3",[t._v("Background")]),t._v(" "),r("p",[t._v("\n          Human Activity Recognition is beginning to be applied in industrial\n          domains, targeting the improvement of manual labor efficiency. We\n          know processes such as assembly and packaging inside factories or\n          logistic centers still mainly depend on manual workers. To ensure a\n          rapid response to changing demands, this trend is expected to\n          continue. Therefore, quantifying manual labor is a crucial\n          requirement to streamlining existing processes.\n        ")]),t._v(" "),r("p",[t._v("\n          Workers inside logistic centers perform a series of sequential tasks\n          to pack items. These working periods consist of actions like reading\n          item labels or assembling the packaging boxes. Understanding details\n          from each of these operations, i.e. its temporal duration or\n          potential abnormalities, is crucial for optimizing the packaging\n          process. However, period uniqueness related to item size or number\n          of items included, make identifying such operation details a\n          challenging task.\n        ")])])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h3",[t._v("Challenge")]),t._v(" "),r("p",[t._v("\n          You’ll develop a model to recognize the operations that conform\n          packaging work with data from 4 IMU streams, keypoint data, etc. The\n          packaging work consists of 10 operations (i.e., activity classes)\n          described below. To quantify the operations as precisely as\n          possible, dense labeling is required. You must predict activity\n          classes for each 1second-long time slot. You can use data from 11\n          subjects to develop your model. The test data consists of 6 subjects\n          (4 distinct subjects).\n        ")]),t._v(" "),r("p",[t._v("\n          If successful, your work will help the ubiquitous research community\n          improve current smart factories and better integrate human factors\n          into the smart factory optimization process.\n        ")])])],1)],1)],1)}),[],!1,null,"cdddd284",null);e.default=component.exports;c()(component,{VCol:d.a,VContainer:v.a,VRow:h.a})},544:function(t,e,r){"use strict";r.r(e);var n={name:"ChallengeTaskTaskDefLink",data:function(){return{}},methods:{openTechnicalDetailsPage:function(){this.$gtag("event","open__challenge__task__technical_details",{event_name:"open",page_title:"challenge2022",section_name:"task",button:"technical_details"})}}},o=r(61),l=r(78),c=r.n(l),d=r(483),v=r(214),h=r(461),f=r(467),m=r(198),_=r(463),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"gnt-sec-3"},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h2",{attrs:{id:"challenge-task-section-task-def-link"}},[t._v("\n          Task (Technical Details)\n        ")]),t._v(" "),r("p",[t._v("\n          Plese visit the following page for more technical details such as\n          task definition, evaluation procedures, and rules.\n        ")]),t._v(" "),r("a",{staticClass:"text-decoration-none",attrs:{href:"https://github.com/open-pack/openpack-toolkit/blob/main/docs/OPENPACK_CHALLENGE",target:"_blank"}},[r("v-btn",{staticClass:"d-inline-block d-md-none my-2",attrs:{block:"",color:"op-brown darken-1 white--text text-button"}},[r("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n              Technical Details\n              "),r("v-icon",[t._v("mdi-github")]),t._v(" "),r("v-icon",[t._v("mdi-open-in-new")])],1)]),t._v(" "),r("v-btn",{staticClass:"d-none d-md-inline-block my-2",attrs:{color:"op-brown darken-1 white--text text-button"},on:{click:t.openTechnicalDetailsPage}},[r("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n              Technical Details\n              "),r("v-icon",[t._v("mdi-github")]),t._v(" "),r("v-icon",[t._v("mdi-open-in-new")])],1)])],1)]),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-alert",{attrs:{dense:"",outlined:"",type:"info"}},[t._v("\n          For more information on the dataset used in this competition, see\n          "),r("nuxt-link",{staticClass:"font-weight-bold",attrs:{to:"/"}},[t._v("this page")]),t._v(".\n        ")],1)],1)],1)],1)],1)}),[],!1,null,"6b0b0aed",null);e.default=component.exports;c()(component,{VAlert:d.a,VBtn:v.a,VCol:h.a,VContainer:f.a,VIcon:m.a,VRow:_.a})},583:function(t,e,r){"use strict";r.r(e);var n={name:"ChallengeTaskSection",data:function(){return{}}},o=r(61),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"gnt-sec-2"},[r("ChallengeTaskOverview"),t._v(" "),r("ChallengeTaskDefLink")],1)}),[],!1,null,"16dab516",null);e.default=component.exports;installComponents(component,{ChallengeTaskOverview:r(543).default,ChallengeTaskDefLink:r(544).default})}}]);