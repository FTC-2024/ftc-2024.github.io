(window.webpackJsonp=window.webpackJsonp||[]).push([[20,21],{467:function(t,e,o){"use strict";o(11),o(6),o(12),o(70),o(35),o(313),o(213),o(71),o(90);var r=o(0);var n,l=o(72);e.a=(n="container",r.a.extend({name:"v-".concat(n),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var o=e.props,data=e.data,r=e.children;data.staticClass="".concat(n," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var o,r=e.props,data=e.data,n=e.children,c=data.attrs;return c&&(data.attrs={},o=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(o||[])}),n)}})},469:function(t,e,o){var content=o(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("5db1c400",content,!0,{sourceMap:!1})},470:function(t,e,o){var r=o(18)(!1);r.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=r},483:function(t,e,o){"use strict";o(12),o(9),o(11),o(6),o(16),o(10),o(17);var r=o(2),n=(o(45),o(469),o(170)),l=o(312),c=o(95),d=o(63),v=o(36),h=o(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),m=o(14),_=o(13);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(m.a)(n.a,d.a,h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(r.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},n.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||v.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(_.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},505:function(t,e,o){"use strict";o.r(e);var r={name:"ChallengeTutorialNotebook",data:function(){return{selected:[],items:[{title:"Download and visualize OpenPack Dataset",body:"This notebook shows how to download and visualize the OpenPack dataset. You can get an overview of the dataset and get familiar with our data and tools.",level:"Beginner",links:[{tool:"Colab",url:"https://colab.research.google.com/github/open-pack/openpack-toolkit/blob/main/samples/OpenPack_DataVisualization.ipynb"}]},{title:"U-Net: Train Model and Make Submission File",body:"This notebook shows how to train and test U-Net to predict work operations for each timeslot. You can learn the pipline of model training, e.g. loading data, training, predicting and visuaizing model outputs.",level:"Beginner",links:[{tool:"Colab",url:"https://colab.research.google.com/github/open-pack/openpack-torch/blob/main/examples/unet/notebooks/U-Net_Train-Model-and-Make-Submission-File.ipynb"},{tool:"Colab (日本語)",url:"https://colab.research.google.com/github/open-pack/openpack-torch/blob/main/examples/unet/notebooks/U-Net_Train-Model-and-Make-Submission-File__JA.ipynb"}]},{title:"Change Input Data (Customize Configs and Dataset Classes)",body:"This notebook describes how to change input modality for UNet. Customizing config YAML files and Dataset classes.",level:"Intermediate",links:[{tool:"Colab",url:"https://colab.research.google.com/github/open-pack/openpack-torch/blob/main/examples/unet/notebooks/U-Net_Change-Input-Data.ipynb"}]},{title:"Train DeepConvLSTM and Learn the Modeling  Basics on OpenPack Dataset",body:"This notebook will show you how to train and test DeepConvLSTM models. You will learn important concepts when building a work activity recognition model.",level:"Beginner",links:[{tool:"Colab",url:"https://colab.research.google.com/github/open-pack/openpack-torch/blob/main/examples/deep-conv-lstm/notebooks/Tutorial_Basics_of_Modeling.ipynb"},{tool:"Colab (日本語)",url:"https://colab.research.google.com/drive/1DjkTu3Sq-8jH-0bqcApyR9qxUwNBn9G6?usp=sharing"}]}]}}},n=o(61),l=o(78),c=o.n(l),d=o(483),v=o(214),h=o(461),m=o(467),_=o(449),f=o(198),x=o(199),C=o(128),k=o(96),w=o(200),y=o(463),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"gnt-sec-3 mt-3"},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("h3",[t._v("Notebooks (Colab / Jupyter Notebook)")]),t._v(" "),o("v-list",{attrs:{"two-line":""}},[o("v-list-item-group",{attrs:{"active-class":"op-brown--text",multiple:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._l(t.items,(function(e,r){return[o("v-list-item",{key:r},[o("v-list-item-content",[o("v-list-item-subtitle",{staticClass:"text-overline",domProps:{textContent:t._s(e.level)}}),t._v(" "),o("v-list-item-title",{staticClass:"text-h6",domProps:{textContent:t._s(e.title)}}),t._v(" "),o("div",[o("p",{staticClass:"text--primary mb-0",domProps:{textContent:t._s(e.body)}})]),t._v(" "),o("div",{staticClass:"d-flex justify-end"},t._l(e.links,(function(link){return o("a",{key:link.url,staticClass:"text-decoration-none",attrs:{href:link.url,target:"_blank"}},[o("v-btn",{attrs:{color:"op-brown",text:""}},[t._v("\n                        "+t._s(link.tool)+"\n                        "),o("v-icon",{staticClass:"mx-1"},[t._v("mdi-open-in-new")])],1)],1)})),0)],1)],1),t._v(" "),r<t.items.length-1?o("v-divider",{key:r}):t._e()]}))],2)],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[t._v("\n          Change runtime to enable GPU acceleration when you train models in\n          colab.\n        ")])],1)],1)],1)],1)}),[],!1,null,"f131dc9e",null);e.default=component.exports;c()(component,{VAlert:d.a,VBtn:v.a,VCol:h.a,VContainer:m.a,VDivider:_.a,VIcon:f.a,VList:x.a,VListItem:C.a,VListItemContent:k.a,VListItemGroup:w.a,VListItemSubtitle:k.b,VListItemTitle:k.c,VRow:y.a})},517:function(t,e,o){t.exports=o.p+"img/Slide1.f501fb1.jpeg"},518:function(t,e,o){t.exports=o.p+"img/Slide2.9d5e5de.jpeg"},519:function(t,e,o){t.exports=o.p+"img/Slide3.1b04237.jpeg"},520:function(t,e,o){t.exports=o.p+"img/Slide4.c0f54d3.jpeg"},521:function(t,e,o){t.exports=o.p+"img/Slide5.9f9a45a.jpeg"},522:function(t,e,o){t.exports=o.p+"img/Slide6.800077a.jpeg"},523:function(t,e,o){t.exports=o.p+"img/Slide7.174c158.jpeg"},524:function(t,e,o){t.exports=o.p+"img/Slide8.1de20a3.jpeg"},525:function(t,e,o){t.exports=o.p+"img/Slide9.6fe485a.jpeg"},526:function(t,e,o){t.exports=o.p+"img/Slide10.7de70e7.jpeg"},546:function(t,e,o){"use strict";o.r(e);var r={name:"ChallengeTutorialVideo",data:function(){return{videoResize:!0,videoFitParent:!0,items:[{title:"Tutorial Session (日本語)",body:"This is a tutorial session for the OpenPack Challenge 2022, held on October 28, 2022, at the academic workshop (Hierarchical BioNavigation Workshop). The session explains how to build a work activity recognition model and how to submit it to the competition site (codalab), which is the challenge of the competition.",level:"Beginner",videoId:"X1Tj9t1EbK0",show:!1}]}}},n=o(61),l=o(78),c=o.n(l),d=o(214),v=o(468),h=o(466),m=o(570),_=o(461),f=o(449),x=o(215),C=o(198),k=o(463),w=o(460),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-col",{attrs:{cols:"12"}},[o("h3",[t._v("Video")]),t._v(" "),o("v-row",{staticClass:"d-flex justify-center"},[t._l(t.items,(function(e,r){return[o("v-col",{key:r,attrs:{cols:"12",md:"10"}},[o("v-card",[o("youtube",{ref:"youtube",refInFor:!0,attrs:{"video-id":e.videoId,resize:t.videoResize,"fit-parent":t.videoFitParent}}),t._v(" "),o("v-card-title",{staticClass:"pt-1 pb-0"},[t._v(t._s(e.title))]),t._v(" "),o("v-card-actions",{staticClass:"pt-0"},[o("v-chip",{staticClass:"text-uppercase font-weight-bold mx-2",attrs:{color:"op-brown darken-2",outlined:"",label:"",small:""}},[t._v("\n              "+t._s(e.level)+"\n            ")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"op-brown darken-1",text:""},on:{click:function(t){e.show=!e.show}}},[t._v("\n              Details\n            ")]),t._v(" "),o("v-btn",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[o("v-icon",[t._v(t._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),t._v(" "),o("v-expand-transition",[o("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"item.show"}]},[o("v-divider"),t._v(" "),o("v-card-text",[t._v("\n                "+t._s(e.body)+"\n              ")])],1)])],1)],1)]}))],2)],1)}),[],!1,null,"76b7f5ad",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VChip:m.a,VCol:_.a,VDivider:f.a,VExpandTransition:x.a,VIcon:C.a,VRow:k.a,VSpacer:w.a})},547:function(t,e,o){"use strict";o.r(e);var r={name:"ChallengeTutorialSlide",data:function(){return{items:[{dialog:!1,title:"Tutorial (日本語)",description:"Slides used for the tutorial session @2022-10-28",dataId:"137f4123eb2c493fa7f3232e41b7beab",dataRatio:"1.77777777777778",tags:["BEGINNER","ConvLSTM"],link:{tool:"Speaker Deck",url:"https://speakerdeck.com/getty708/openpack-challenge-2022-tiyutoriaru-ri-ben-yu"},slides:[o(517),o(518),o(519),o(520),o(521),o(522),o(523),o(524),o(525),o(526)]}],colors:["green","secondary","yellow darken-4","red lighten-2","orange darken-1"],cycle:!1}}},n=o(61),l=o(78),c=o.n(l),d=o(214),v=o(468),h=o(466),m=o(657),_=o(658),f=o(570),x=o(461),C=o(642),k=o(449),w=o(198),y=o(168),V=o(463),S=o(460),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-col",{attrs:{cols:"12"}},[o("h3",[t._v("Slide")]),t._v(" "),o("v-row",[t._l(t.items,(function(e,r){return[o("v-col",{key:r,attrs:{cols:"12",md:"6"}},[o("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,l=r.attrs;return[o("v-card",{staticClass:"op-brown lighten-2",attrs:{width:"100%"}},[o("div",t._g(t._b({},"div",l,!1),n),[o("v-card-subtitle",{staticClass:"pb-0"},[t._v("\n                  "+t._s(e.link.tool)+"\n                ")]),t._v(" "),o("v-card-text",[o("h4",{staticClass:"text-h5 black--text"},[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"mb-0"},[t._v("\n                    "+t._s(e.description)+"\n                  ")]),t._v(" "),t._l(e.tags,(function(e,r){return o("v-chip",{key:r,staticClass:"text-uppercase font-weight-bold mr-1",attrs:{color:"op-brown darken-2",outlined:"",label:"",small:""}},[t._v("\n                    "+t._s(e)+"\n                  ")])}))],2)],1),t._v(" "),o("v-card-actions",{staticClass:"d-flex justify-end white"},[o("v-spacer"),t._v(" "),o("v-btn",t._g(t._b({attrs:{color:"op-brown",text:""}},"v-btn",l,!1),n),[t._v("\n                  Open\n                ")]),t._v(" "),o("v-btn",{attrs:{color:"op-brown",text:"",href:e.link.url,target:"_blank"}},[t._v("\n                  "+t._s(e.link.tool)+"\n                  "),o("v-icon",{staticClass:"mx-1"},[t._v("mdi-open-in-new")])],1)],1)],1)]}}],null,!0),model:{value:e.dialog,callback:function(o){t.$set(e,"dialog",o)},expression:"item.dialog"}},[t._v(" "),o("v-card",{attrs:{"max-height":"90vh"}},[o("v-card-title",{staticClass:"text-h5 font-weight-bold op-brown lighten-2"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),o("v-card-text",{staticClass:"font-weight-bold op-brown lighten-2"},[t._l(e.tags,(function(e,r){return o("v-chip",{key:r,staticClass:"text-uppercase font-weight-bold mr-1",attrs:{color:"op-brown darken-2",outlined:"",label:"",small:""}},[t._v("\n                "+t._s(e)+"\n              ")])})),t._v(" "),o("a",{attrs:{href:e.link.url,target:"_blank"}},[t._v(t._s(e.link.tool))])],2),t._v(" "),o("v-carousel",{attrs:{continuous:!1,cycle:t.cycle,"show-arrows":!0,"hide-delimiter-background":"","delimiter-icon":"mdi-minus",height:"70vh","max-height":"100%"}},t._l(e.slides,(function(t,i){return o("v-carousel-item",{key:i},[o("v-img",{attrs:{contain:"",src:t,"max-height":"100%"}})],1)})),1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"op-brown",text:"",href:e.link.url,target:"_blank"}},[t._v("\n                "+t._s(e.link.tool)+"\n                "),o("v-icon",{staticClass:"mx-1"},[t._v("mdi-open-in-new")])],1),t._v(" "),o("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[t._v("\n                Close\n              ")])],1)],1)],1)],1)]}))],2)],1)}),[],!1,null,"67b57037",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardSubtitle:h.b,VCardText:h.c,VCardTitle:h.d,VCarousel:m.a,VCarouselItem:_.a,VChip:f.a,VCol:x.a,VDialog:C.a,VDivider:k.a,VIcon:w.a,VImg:y.a,VRow:V.a,VSpacer:S.a})},589:function(t,e,o){"use strict";o.r(e);var r={name:"ChallengeTutorialSection",data:function(){return{}}},n=o(61),l=o(78),c=o.n(l),d=o(461),v=o(467),h=o(463),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"gnt-sec-2"},[o("section",{staticClass:"gnt-sec-3"},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("h2",{attrs:{id:"challenge-tutorial-section"}},[t._v("Getting Started")])]),t._v(" "),o("ChallengeTutorialNotebook"),t._v(" "),o("ChallengeTutorialVideo"),t._v(" "),o("ChallengeTutorialSlide")],1)],1)],1)])}),[],!1,null,"18cdf418",null);e.default=component.exports;c()(component,{ChallengeTutorialNotebook:o(505).default,ChallengeTutorialVideo:o(546).default,ChallengeTutorialSlide:o(547).default}),c()(component,{VCol:d.a,VContainer:v.a,VRow:h.a})}}]);