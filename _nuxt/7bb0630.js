(window.webpackJsonp=window.webpackJsonp||[]).push([[59,7,16,18,47],{480:function(t,e,n){"use strict";n.r(e);var o={props:{imgSrc:{type:String,default:"https://cdn.vuetifyjs.com/images/john.jpg"},name:{type:String,default:"Open Pack"},role:{type:String,default:"Role"},bgcolor:{type:String,default:"#ffffff"},imgSize:{type:String,default:"5rem"},link:{type:String,default:null}}},l=n(61),r=n(78),c=n.n(r),v=n(202),d=n(168),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[t.imgSrc?n("div",[n("v-avatar",{attrs:{size:t.imgSize}},[n("v-img",{attrs:{src:t.imgSrc}})],1)],1):n("div",[n("v-avatar",{attrs:{color:"op-brown",size:t.imgSize}},[n("span",{staticClass:"white--text text-h4 font-size-black"},[t._v(t._s(t.name[0]))])])],1),t._v(" "),n("p",{attrs:{clss:"mt-3"}},[t.link?[n("a",{staticClass:"black--text",attrs:{href:t.link,target:"_blank"}},[n("strong",[t._v(t._s(t.name))])])]:[n("strong",[t._v(t._s(t.name))])],t._v(" "),n("br"),t._v(" "),n("small",[t._v(t._s(t.role))])],2)])}),[],!1,null,"202ee102",null);e.default=component.exports;c()(component,{VAvatar:v.a,VImg:d.a})},481:function(t,e,n){t.exports=n.p+"img/Cynav_213ppi.7f14c99.png"},496:function(t,e,n){t.exports=n.p+"img/2023-03-13-Percom2023BiRD-AwardsCeremony.65a3d13.jpg"},497:function(t,e,n){var content=n(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("874b0a22",content,!0,{sourceMap:!1})},509:function(t,e,n){"use strict";n.r(e);var o={name:"ChallengeContentsSection",data:function(){return{lists:[{name:"Overview",link:"challenge-task-section-overview"},{name:"Task (Technical Details)",link:"challenge-task-section-task-def-link"},{name:"Prize",link:"challenge-prize-section"},{name:"Rules",link:"challenge-rule-section"},{name:"Detail",link:"challenge-detail-section"},{name:"Results",link:"challenge-result-section"},{name:"Registration and Submission",link:"challenge-registration-section"},{name:"Tools",link:"challenge-link-section"}]}}},l=n(61),r=n(78),c=n.n(r),v=n(214),d=n(464),m=n(466),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-5"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h4",{staticClass:"d-inline-block op-brown--text mb-2"},[t._v("Contents:")]),t._v(" "),t._l(t.lists,(function(e,o){return n("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+e.link,expression:"`#${list.link}`"}],key:o,staticClass:"ma-1 text-capitalize",attrs:{outlined:"",small:"",color:"op-brown"}},[t._v("\n        "+t._s(e.name)+"\n      ")])}))],2)],1)],1)}),[],!1,null,"56af189b",null);e.default=component.exports;c()(component,{VBtn:v.a,VCol:d.a,VRow:m.a})},510:function(t,e,n){"use strict";n.r(e);var o={name:"ChallengeTaskOverview",data:function(){return{}}},l=n(61),r=n(78),c=n.n(r),v=n(464),d=n(470),m=n(466),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{attrs:{id:"challenge-task-section-overview"}},[t._v("Overview")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("Background")]),t._v(" "),n("p",[t._v("\n          Collective animal behaviors are teeming with life and intricate\n          behavioral patterns. The sweetfish, included in this dataset, offers\n          a unique window into understanding animal navigation in water. For\n          ethologists, ecologists, and mathematical and theoretical\n          biologists, decoding these patterns is pivotal, but automatic\n          tracking the navigation of sweetfish, especially when in schools,\n          introduces a plethora of challenges. (TBD)\n        ")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("Challenge")]),t._v(" "),n("p",[t._v("\n          You can develop an automatic tracking model that can pinpoint the\n          navigational patterns of sweetfish with the Sweetfish dataset\n          including locations of 10 fishes. The dataset includes videos and\n          bounding boxes of fishes. To analyze the behaviors recorded by\n          videos, automatic detection and tracking of bounding boxes is\n          necessary. We have train, development, and test datasets. By\n          training your object detection and tracking algorithms using\n          training dataset, you can estimate and submit the bounding box data\n          in development and test datasets.\n        ")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{col:"12"}},[n("h3",[t._v("Video")]),t._v(" "),n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/LH59G8MkqP0?si=Oj-JnI4VgXcemiUO",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""}})])],1)],1)],1)}),[],!1,null,"60d53a31",null);e.default=component.exports;c()(component,{VCol:v.a,VContainer:d.a,VRow:m.a})},511:function(t,e,n){"use strict";n.r(e);var o={name:"ChallengeTaskTaskDefLink",data:function(){return{}},methods:{openTechnicalDetailsPage:function(){this.$gtag("event","open__challenge__task__technical_details",{event_name:"open",page_title:"challenge2022",section_name:"task",button:"technical_details"})}}},l=n(61),r=n(78),c=n.n(r),v=n(214),d=n(464),m=n(470),h=n(198),_=n(466),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{attrs:{id:"challenge-task-section-task-def-link"}},[t._v("\n            Task (Technical Details)\n          ")]),t._v(" "),n("p",[t._v("\n            Plese visit the following page for more technical details such as\n            task definition, evaluation procedures, and rules.\n          ")]),t._v(" "),n("a",{staticClass:"text-decoration-none",attrs:{href:"https://github.com/FTC-2024",target:"_blank"}},[n("v-btn",{staticClass:"d-inline-block d-md-none my-2",attrs:{block:"",color:"op-brown darken-1 white--text text-button"}},[n("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n                Technical Details\n                "),n("v-icon",[t._v("mdi-github")]),t._v(" "),n("v-icon",[t._v("mdi-open-in-new")])],1)]),t._v(" "),n("v-btn",{staticClass:"d-none d-md-inline-block my-2",attrs:{color:"op-brown darken-1 white--text text-button"},on:{click:t.openTechnicalDetailsPage}},[n("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n                Technical Details\n                "),n("v-icon",[t._v("mdi-github")]),t._v(" "),n("v-icon",[t._v("mdi-open-in-new")])],1)])],1)])],1)],1)],1)}),[],!1,null,"d4d36606",null);e.default=component.exports;c()(component,{VBtn:v.a,VCol:d.a,VContainer:m.a,VIcon:h.a,VRow:_.a})},512:function(t,e,n){"use strict";n.r(e);var o=n(98),l={name:"LpTeamMemberList",data:function(){return{members:o.a.members.core,advisers:o.a.members.adviser,supportMembers:o.a.members.support,provider:o.a.members.provider}}},r=n(61),c=n(78),v=n.n(c),d=n(464),m=n(466),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"mb-6"},[t._v("Members")])])],1),t._v(" "),n("v-row",{staticClass:"d-flex justify-center"},t._l(t.members,(function(t){return n("v-col",{key:t.name,staticClass:"d-flex justify-center",attrs:{cols:"6",md:"4"}},[n("MoleculesMemberCard",{attrs:{"img-src":t.imgSrc,name:t.name,role:t.role,"img-size":"10rem"}})],1)})),1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"mb-6"},[t._v("Adviser")])])],1),t._v(" "),n("v-row",{staticClass:"d-flex justify-center"},t._l(t.advisers,(function(t){return n("v-col",{key:t.name,staticClass:"d-flex justify-center",attrs:{cols:"4",md:"3"}},[n("MoleculesMemberCard",{attrs:{"img-src":t.imgSrc,name:t.name,role:t.role,"img-size":"7rem"}})],1)})),1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"mb-6"},[t._v("Data Provider")])])],1),t._v(" "),n("v-row",{staticClass:"d-flex justify-center"},t._l(t.provider,(function(t){return n("v-col",{key:t.name,staticClass:"d-flex justify-center",attrs:{cols:"4",md:"3"}},[n("MoleculesMemberCard",{attrs:{"img-src":t.imgSrc,name:t.name,role:t.role,"img-size":"7rem"}})],1)})),1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"mb-6"},[t._v("Special Thanks")])])],1),t._v(" "),n("v-row",{staticClass:"d-flex justify-center"},t._l(t.supportMembers,(function(t){return n("v-col",{key:t.name,staticClass:"d-flex justify-center",attrs:{cols:"4",md:"3"}},[n("MoleculesMemberCard",{attrs:{"img-src":t.imgSrc,name:t.name,role:t.role,"img-size":"5rem"}})],1)})),1)],1)}),[],!1,null,"1bf8df1c",null);e.default=component.exports;v()(component,{MoleculesMemberCard:n(480).default}),v()(component,{VCol:d.a,VRow:m.a})},513:function(t,e,n){"use strict";n.r(e);var o={name:"ChallengeTeamMemberList",data:function(){return{items:[{alt:"Cynav: What is Hierarchical Bio-Navigation?",imgSrc:n(481),link:"https://bio-navigation.jp/",bgColor:"white"}]}}},l=n(61),r=n(78),c=n.n(r),v=n(464),d=n(466),m=n(55),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"mb-6"},[t._v("Sponsors")])])],1),t._v(" "),n("v-row",{staticClass:"d-flex justify-center"},t._l(t.items,(function(e,o){return n("v-col",{key:o,staticClass:"d-flex justify-center",attrs:{cols:"12",md:"4"}},[n("a",{staticClass:"text-decoration-none d-flex align-stretch",attrs:{href:e.link,target:"_blank"}},[n("v-sheet",{staticClass:"pa-2 d-flex align-stretch",class:e.bgColor,attrs:{elevation:"1",rounded:"lg",width:"100%"}},[e.imgSrc?[n("img",{attrs:{src:e.imgSrc,alt:e.alt,width:"100%"}})]:[n("div",[t._v(t._s(e.alt))])]],2)],1)])})),1)],1)}),[],!1,null,"04fd35bd",null);e.default=component.exports;c()(component,{VCol:v.a,VRow:d.a,VSheet:m.a})},521:function(t,e,n){t.exports=n.p+"img/OpenPackCHALLENG-black.7c13e75.png"},524:function(t,e,n){"use strict";n(497)},525:function(t,e,n){var o=n(18)(!1);o.push([t.i,".btn-container{opacity:0;transition:all .3s cubic-bezier(.39,.575,.565,1);position:fixed;right:-40px;bottom:32px;z-index:9}",""]),t.exports=o},558:function(t,e,n){"use strict";n.r(e);var o={name:"LpChallengeSection",data:function(){return{imgLogo:n(521)}}},l=n(61),r=n(78),c=n.n(r),v=n(471),d=n(469),m=n(464),h=n(470),_=n(168),f=n(466),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-0 op-brown lighten-2 my-0 py-0"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"d-block"},[n("v-img",{staticClass:"mr-3",attrs:{src:t.imgLogo,alt:"OpenPack",contain:""}})],1),t._v(" "),n("h2",{staticClass:"op-brown--text text-h5 text-md-h3 text-center font-weight-bold my-3"},[t._v("\n          @International Symposium of Hierarchical Bio-Navigation 2024\n        ")]),t._v(" "),n("p",[t._v("\n          We are hosting a multi-object tracking competition, Fish Tracking\n          Challenge 2024, using the SweetFish dataset at the International\n          Symposium of Hierarchical Bio-Navigation 2024! The task is very\n          simple: tracking 10 fishes’ locations from the SweetFish dataset.\n        ")]),t._v(" "),n("p",[t._v("\n          The SweetFish dataset captures the complex collective behaviors of\n          aquatic animals, with a focus on sweetfish navigation. While\n          understanding these patterns is crucial for various scientific\n          disciplines, accurately tracking sweetfish, especially in groups,\n          presents challenges. By developing an advanced tracking model,\n          researchers can uncover the intricacies of aquatic movement and\n          significantly advance this field. Dive in and make waves in the\n          world of aquatic animal research!\n        ")])])],1),t._v(" "),n("v-row",{staticClass:"d-flex flex-child align-stretch"},[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"4"}},[n("v-card",{staticClass:"op-brown darken-1",attrs:{width:"100%",elevation:"0"}},[n("v-card-text",{staticClass:"white--text"},[n("div",[t._v("Competition Start")]),t._v(" "),n("p",{staticClass:"text-h5 font-weight-bold"},[t._v("2023-10-15 (AOE)")]),t._v(" "),n("div",[t._v("Competition End")]),t._v(" "),n("p",{staticClass:"text-h5 font-weight-bold"},[t._v("2024-01-15 (AOE)")])])],1)],1),t._v(" "),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"4"}},[n("v-card",{staticClass:"op-brown darken-1",attrs:{width:"100%",elevation:"0"}},[n("v-card-text",{staticClass:"white--text"},[n("div",[t._v("Task")]),t._v(" "),n("p",{staticClass:"text-h5 font-weight-bold"},[t._v("\n              Tracking 10 fishes’ locations (multi-object tracking)\n            ")])])],1)],1),t._v(" "),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"4"}},[n("v-card",{staticClass:"op-brown darken-1",attrs:{width:"100%",elevation:"0"}},[n("v-card-text",{staticClass:"white--text"},[n("div",[t._v("Prize")]),t._v(" "),n("p",{staticClass:"text-h5 font-weight-bold"},[t._v("Travel Fee Support (TBD)")])])],1)],1)],1),t._v(" "),n("ChallengeOverviewContents")],1)],1)}),[],!1,null,"023a184f",null);e.default=component.exports;c()(component,{ChallengeOverviewContents:n(509).default}),c()(component,{VCard:v.a,VCardText:d.c,VCol:m.a,VContainer:h.a,VImg:_.a,VRow:f.a})},559:function(t,e,n){"use strict";n.r(e);var o={name:"ChallengeTaskSection",data:function(){return{}}},l=n(61),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-2"},[n("ChallengeTaskOverview"),t._v(" "),n("ChallengeTaskDefLink")],1)}),[],!1,null,"16dab516",null);e.default=component.exports;installComponents(component,{ChallengeTaskOverview:n(510).default,ChallengeTaskDefLink:n(511).default})},560:function(t,e,n){"use strict";n.r(e);var o={name:"ChallengePrizeSection"},l=n(61),r=n(78),c=n.n(r),v=n(464),d=n(470),m=n(466),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-2"},[n("section",{staticClass:"gnt-sec-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{attrs:{id:"challenge-prize-section"}},[t._v("Prize")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("Travel Fee Support")]),t._v(" "),n("p",[t._v("\n            At least one person from the top-3 team was encouraged to attend\n            the award ceremony on-site or online. We will support the travel\n            fee (within Japan) for the attendance of up to 1 member from each\n            winning team, who lives in Japan.\n          ")])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("Winners Obligations")]),t._v(" "),n("p",[t._v("\n            As a condition to being awarded a Prize, a top-5 winner must\n            fulfill the following obligations. The detailed instructions will\n            be sent to top-5 winners after the final submission deadline.\n          ")]),t._v(" "),n("ul",[n("li",[t._v("Submit your code so that we can check for cheating.")]),t._v(" "),n("li",[t._v("\n              Submit a short report paper that describes the award\n              methodology.\n            ")])])])],1)],1)],1)])}),[],!1,null,"466e8fb6",null);e.default=component.exports;c()(component,{VCol:v.a,VContainer:d.a,VRow:m.a})},561:function(t,e,n){"use strict";n.r(e);var o={name:"ChallengeRuleSection"},l=n(61),r=n(78),c=n.n(r),v=n(464),d=n(470),m=n(466),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-2"},[n("section",{staticClass:"gnt-sec-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{attrs:{id:"challenge-rule-section"}},[t._v("Detail")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("Data")]),t._v(" "),n("p",[t._v("\n            The Dataset for this challenge is SweatFish dataset (you can\n            download from\n            "),n("a",{attrs:{href:"https://drive.google.com/drive/folders/1Xn3IY46t7DkG2bntbO6sL3oElRPeQA1d?usp=drive_link",target:"_blank"}},[t._v("[Google drive Link ] ")]),t._v(".). You can use all dataset listed below:\n          ")]),t._v(" "),n("ul",[n("li",[t._v("Video (.mp4 in training, development, and test sets)")]),t._v(" "),n("li",[t._v("\n              Bounding boxes (training set only; .txt file in MOT format\n              "),n("a",{attrs:{href:"https://motchallenge.net/instructions/",target:"_blank"}},[t._v("[https://motchallenge.net/instructions/]")]),t._v(")\n            ")])]),t._v(" "),n("p"),t._v(" "),n("h3",[t._v("Evaluation")]),t._v(" "),n("p",[t._v("\n            The goal of this challenge is accurate tracking of 10 sweetfishes.\n            Performance of your model will be evaluated based on HOTA (Higher\n            Order Tracking Accuracy) score, which is a holistic and popular\n            score in multi-object tracking (MOT). HOTA is designed to overcome\n            many of the limitations of previous metrics. For example, you can\n            see this web page\n            [https://autonomousvision.github.io/hota-metrics/] for\n            understanding.\n          ")]),t._v(" "),n("h3",[t._v("Submission Format")]),t._v(" "),n("p",[t._v("\n            To submit your results to this competition you must construct a\n            submission zip file containing a single file named submission.txt.\n            Sample submission files for Development Phase are available as\n            follows: submission.zip ("),n("a",{attrs:{href:"https://drive.google.com/drive/folders/1vvDDS98bKKMOzuFCO_2gNmQunaYDHneZ?usp=sharing",target:"_blank"}},[t._v("https://drive.google.com/drive/folders/1vvDDS98bKKMOzuFCO_2gNmQunaYDHneZ?usp=sharing")]),t._v(")\n          ")])])],1)],1)],1)])}),[],!1,null,"90e09e94",null);e.default=component.exports;c()(component,{VCol:v.a,VContainer:d.a,VRow:m.a})},562:function(t,e,n){"use strict";n.r(e);var o={name:"ChallengeRuleSection"},l=n(61),r=n(78),c=n.n(r),v=n(464),d=n(470),m=n(466),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-2"},[n("section",{staticClass:"gnt-sec-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{attrs:{id:"challenge-rule-section"}},[t._v("\n            Rules for Fish Tracking Challenge 2024 \n          ")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h3",[t._v("A. Registration Required")]),t._v(" "),n("p",[t._v("\n            Please submit a team registration form before you join this competition \n            even if you are a solo challenger. This is required to get prizes. \n            There are no limitations for the team size. However, if you are creating \n            multiple teams within the same lab, be careful not to violate \n            the rules of PRIVATE SHARING.\n\n          ")]),t._v(" "),n("p",[t._v("\n            When you want to merge your team with another team, \n            please contact the Fish Tracking Challenge Admin Team via email.\n\n          ")]),t._v(" "),n("h3",[t._v("B. No Private Sharing Outside Teams")]),t._v(" "),n("p",[t._v("\n            Privately sharing code or data outside of teams is not permitted. \n            It’s OK to share code if made available to all participants on the forum.\n\n          ")]),t._v(" "),n("h3",[t._v("C. External Dataset")]),t._v(" "),n("p",[t._v("\n            You may use data other than the competition data to develop and test your submission. \n            However, you will ensure the external data is publicly available to everyone \n            without any cost.\n          ")])])],1)],1)],1)])}),[],!1,null,"a8628886",null);e.default=component.exports;c()(component,{VCol:v.a,VContainer:d.a,VRow:m.a})},563:function(t,e,n){"use strict";n.r(e);var o={name:"ChallengeResultSection",data:function(){return{top5Teams:[{rank:"1st Place",team:"tomoon",score:.9633,member:"Tomoki Uchiyama. (Tsukuba Univ., JA)",links:[{title:"Poster",url:"data/2023-03-13-openpack-challenge-poster/1st-tomoon.pdf"},{title:"Solution (GitHub)",url:"https://github.com/uchiyama33/OpenPack-Challenge-1st"}]},{rank:"2nd Place",team:"vbu211",score:.9592,member:"Yuto Namba(a,b), Yuichi Nakatani(a), Kenta Ishihara(a), Sachio Iwasaki(a), Kosuke Moriwaki(a), Xian-Hua Han(b), Tetsuo Inoshita(a). (a=NEC Corporation, JP; b=Yamaguchi Univ., JP)",links:[{title:"Poster",url:"data/2023-03-13-openpack-challenge-poster/2nd-vbu211.pdf"}]},{rank:"3rd Place",team:"Ritsumei",score:.9241,member:"Shurong Chai(a), Jiaqing Liu(a), Rahul Kumar Jain(a), Yinhao Li(a), Tomoko Tateyama(b), Yen-Wei Chen. (a=Ritsumeikan Univ, JP; b=Fujita Health Univ., JP)",links:[{title:"Poster",url:"data/2023-03-13-openpack-challenge-poster/3rd-ritsumei.pdf"},{title:"Solution (GitHub)",url:"https://github.com/11yxk/openpack_challenge"}]},{rank:"4th Place",team:"Malton",score:.9171,member:"Yusuke Matsubayashi. (Osaka Univ., JP)",links:[{title:"Poster",url:"data/2023-03-13-openpack-challenge-poster/4th-malton.pdf"}]},{rank:"5th Place",team:"Shubham Wagh",score:.9112,member:"Shubham Maroti Wagh. (Veridium in Oxford, UK)",links:[{title:"Poster",url:"data/2023-03-13-openpack-challenge-poster/5th-shubham.pdf"}]}],results:[{rank:1,team:"tomoon",score:.9633,member:"Tomoki UCHIYAMA (Univ. Tsukuba, JA)"},{rank:2,team:"vbu211",score:.9592,member:"Yuto Namba (a,b), Yuichi Nakatani(a), Kenta Ishihara(a), Sachio Iwasaki(a), Kosuke Moriwaki(a), Xian-Hua Han(b), Tetsuo Inoshit(a), (a=NEC Corporation, b= Yamaguchi University)"},{rank:3,team:"Ritsumei",score:.9241},{rank:4,team:"Malton",score:.9171},{rank:5,team:"Shubham Wagh",score:.9112},{rank:6,team:"UCLab",score:.9057},{rank:7,team:"liuqijd",score:.8987},{rank:8,team:"Potros",score:.8822},{rank:9,team:"Dialga",score:.8752},{rank:10,team:"SotaroFushimi",score:.8466},{rank:11,team:"Tetsu_roo",score:.8118},{rank:12,team:"syoka4156",score:.8114}],googleSheetUrl:"https://docs.google.com/spreadsheets/d/1AwZqu9ccUQ81zfICLo8qtU_Bg_KbOv1P3jhWpIb1Fis?usp=sharing",photo:{awardsCeremony:n(496)}}}},l=n(61),r=n(78),c=n.n(r),v=n(464),d=n(470),m=n(466),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{attrs:{id:"challenge-task-section-overview"}},[t._v("Results")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("p",[t._v("(TBD)")])])],1)],1)],1)}),[],!1,null,"89ad481c",null);e.default=component.exports;c()(component,{VCol:v.a,VContainer:d.a,VRow:m.a})},564:function(t,e,n){"use strict";n.r(e);var o=n(98),l={name:"ChallengeRegistrationSection",data:function(){return{urlGoogleForm:"",urlCodalab:o.a.challenge.codalab}},methods:{openGoogleFormPage:function(){this.$gtag("event","open__challenge__registration__google_form",{event_name:"open",page_title:"challenge2022",section_name:"registration",button:"google_form"})},openCodalabPage:function(){this.$gtag("event","open__challenge__registration__codalab",{event_name:"open",page_title:"challenge2022",section_name:"registration",button:"codalab"})}}},r=n(61),c=n(78),v=n.n(c),d=n(214),m=n(464),h=n(470),_=n(198),f=n(466),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-0 op-brown lighten-2 my-0 py-0"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"text-h5 font-weight-bold my-3",attrs:{id:"challenge-registration-section"}},[t._v("\n          Registration and Submission\n        ")])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("p",[t._v("\n          Before submitting your prediction, registration is required. You\n          need to register your information to both (1) CodaLab and (2) Google\n          Form. Please follow the procedures below.\n        ")]),t._v(" "),n("ul",[n("li",[t._v("\n            Solo challengers are also welcome! But don't forget to register as\n            a solo team!\n          ")]),t._v(" "),n("li",[t._v("\n            No limitation to team size. (But be careful about violation of the\n            NO PRIVATE SHARING policy when you make multiple teams.)\n          ")])])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("h3",{staticClass:"text-h6 font-weight-bold my-3"},[t._v("Steps for Registration")]),t._v(" "),n("ol",[n("li",[n("span",{staticClass:"op-brown--text"},[t._v("[Every Members]")]),t._v("\n            Make your codalab accounts. All members should have thier own\n            accounts.\n          ")]),t._v(" "),n("li",[n("span",{staticClass:"op-brown--text"},[t._v("[Every Members]")]),t._v(" "),n("strong",[t._v("Register")]),t._v(" to this challenge from\n            "),n("strong",[t._v("Participate")]),t._v(" tab in the codalab page.\n          ")]),t._v(" "),n("li",[n("span",{staticClass:"op-brown--text"},[t._v("[Team Leader]")]),t._v("\n            Submit the Google Form for team registration.\n          ")]),t._v(" "),n("li",[n("span",{staticClass:"op-brown--text"},[t._v("(Wait for a while... Admin team will check and aprove your\n              team.)")])]),t._v(" "),n("li",[t._v("\n            You got email from codalab about approval and you can submit your\n            prediction!\n          ")])])]),t._v(" "),n("v-col",{staticClass:"d-none d-md-block",attrs:{cols:"12"}},[n("v-btn",{staticClass:"mx-2",attrs:{href:t.urlCodalab,target:"_blank",color:"op-brown darken-1 white--text text-button"},on:{click:t.openCodalabPage}},[n("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n            (Step.2) Player Registration (Codalab)\n            "),n("v-icon",[t._v("mdi-open-in-new")])],1)]),t._v(" "),n("v-btn",{attrs:{href:t.urlGoogleForm,target:"_blank",color:"op-brown darken-1 white--text text-button"},on:{click:t.openGoogleFormPage}},[n("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n            (Step.3) Team Registration (Google Form)\n            "),n("v-icon",[t._v("mdi-open-in-new")])],1)])],1),t._v(" "),n("v-col",{staticClass:"d-block d-md-none",attrs:{cols:"12"}},[n("v-btn",{staticClass:"my-2",attrs:{href:t.urlCodalab,target:"_blank",block:"",color:"op-brown darken-1 white--text text-button"},on:{click:t.openCodalabPage}},[n("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n            (S2) Player Registration (Codalab)\n            "),n("v-icon",[t._v("mdi-open-in-new")])],1)]),t._v(" "),n("v-btn",{attrs:{href:t.urlGoogleForm,target:"_blank",block:"",color:"op-brown darken-1 white--text text-button",disabled:""},on:{click:t.openGoogleFormPage}},[n("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n            (S3) Team Registration (Google Form)\n            "),n("v-icon",[t._v("mdi-open-in-new")])],1)])],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"text-h6 font-weight-bold"},[t._v("Submission & Leadersboard")])]),t._v(" "),n("v-col",{staticClass:"d-none d-md-block",attrs:{cols:"12"}},[n("v-btn",{attrs:{href:t.urlCodalab,target:"_blank",color:"op-brown darken-1 white--text text-button"},on:{click:t.openCodalabPage}},[n("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n            Codalab\n            "),n("v-icon",[t._v("mdi-open-in-new")])],1)])],1),t._v(" "),n("v-col",{staticClass:"d-block d-md-none",attrs:{cols:"12"}},[n("v-btn",{staticClass:"my-2",attrs:{block:"",color:"op-brown darken-1 white--text text-button"},on:{click:t.openCodalabPage}},[n("span",{staticClass:"text-decoration-none text-capitalize"},[t._v("\n            Codalab\n            "),n("v-icon",[t._v("mdi-open-in-new")])],1)])],1)],1)],1)],1)}),[],!1,null,"fdc0d1ba",null);e.default=component.exports;v()(component,{VBtn:d.a,VCol:m.a,VContainer:h.a,VIcon:_.a,VRow:f.a})},565:function(t,e,n){"use strict";n.r(e);var o={name:"ChallengeTimelineSection",data:function(){return{tlItems:[{datetime:"2023-10-01",title:"Registration Open",caption:"Google form and competition page on codalab will be public.",titleStyle:"text-h6",color:"op-brown darken-1"},{datetime:"2023-10-15",title:"Launch",titleStyle:"text-h6",caption:"You can submit your estimates to the competition site.",color:"op-brown  darken-1"},{datetime:"2024-01-10",title:"Entry and Team Merger Deadline",titleStyle:"text-h6",caption:"If you want to join this competition or change team members, you must register until this date.",color:"op-brown  darken-1"},{datetime:"2024-01-15",title:"Final Submission Deadline",titleStyle:"text-h6",caption:"You must submit your best results until the end of this day.",color:"op-brown  darken-1"},{datetime:"2024-01-31",title:"Report Submission Deadline",titleStyle:"text-h6",caption:"Top 3 winners must submit a report of your solution to get the prize! Deadlines are subject to change.",color:"op-brown darken-1"}]}}},l=n(61),r=n(78),c=n.n(r),v=n(464),d=n(470),m=n(466),h=n(612),_=n(613),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-2"},[n("section",{staticClass:"gnt-sec-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{attrs:{id:"challenge-timeline-section"}},[t._v("Timeline")])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-timeline",{attrs:{"align-top":"",dense:""}},t._l(t.tlItems,(function(e,o){return n("v-timeline-item",{key:o,attrs:{color:e.color,small:""}},[n("v-row",{staticClass:"pt-0"},[n("v-col",{staticClass:"d-block d-md-none"},[n("div",{staticClass:"op-brown--text text-subtitle-1"},[t._v("\n                    "+t._s(e.datetime)+"\n                  ")]),t._v(" "),n("h5",{class:e.titleStyle},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"text-caption"},[t._v(t._s(e.caption))])]),t._v(" "),n("v-col",{staticClass:"d-none d-md-block"},[n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("div",{staticClass:"op-brown--text text-subtitle-1"},[t._v("\n                        "+t._s(e.datetime)+"\n                      ")])]),t._v(" "),n("v-col",[n("h5",{class:e.titleStyle},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"text-caption"},[t._v(t._s(e.caption))])])],1)],1)],1)],1)})),1)],1)],1)],1)],1)])}),[],!1,null,"ef72514a",null);e.default=component.exports;c()(component,{VCol:v.a,VContainer:d.a,VRow:m.a,VTimeline:h.a,VTimelineItem:_.a})},566:function(t,e,n){"use strict";n.r(e);var o={name:"LpChallengeSection",data:function(){return{cardElevation:0}}},l=n(61),r=n(78),c=n.n(r),v=n(464),d=n(470),m=n(466),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-2"},[n("section",{staticClass:"gnt-sec-3"},[n("v-container",[n("v-row",[n("v-col",{staticClass:"pb-1",attrs:{cols:"12"}},[n("h2",[t._v("Terms of Use (License)")]),t._v(" "),n("p",[t._v('\n              The SweetFish dataset consisting of video and location data will\n              continue to be provided under "CC BY-NC-SA 4.0".\n            ')])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",[t._v("Cite")]),t._v(" "),n("p",[t._v("(TBD)")])])],1)],1)],1)])}),[],!1,null,"a6b031b4",null);e.default=component.exports;c()(component,{VCol:v.a,VContainer:d.a,VRow:m.a})},567:function(t,e,n){"use strict";n.r(e);var o={name:"LpLinkSection",data:function(){return{links:[{contentType:"GitHub",title:"OpenPack Toolkit",description:"dataset utilities and documents",url:"https://github.com/open-pack/openpack-toolkit"},{contentType:"GitHub",title:"OpenPack Torch",description:"sample code (PyTorch)",url:"https://github.com/open-pack/openpack-torch"},{contentType:"YouTube",title:"OpenPack Dataset Channel",description:"sample videos",url:"https://www.youtube.com/channel/UC-AzuKxoJcyOtFi7B3CS4rA"},{contentType:"Codalab: System for Competition",title:"OpenPack Challenge 2022",description:"Submission and evaluation system for this challenge.",url:"https://codalab.lisn.upsaclay.fr/competitions/7830"}]}}},l=n(61),r=n(78),c=n.n(r),v=n(464),d=n(470),m=n(466),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-2"},[n("section",{staticClass:"gnt-sec-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{attrs:{id:"challenge-link-section"}},[t._v("Tools")]),t._v(" "),n("p",[t._v("(TBD)")])])],1)],1)],1)])}),[],!1,null,"82deb672",null);e.default=component.exports;c()(component,{VCol:v.a,VContainer:d.a,VRow:m.a})},568:function(t,e,n){"use strict";n.r(e);var o={name:"ChallengeTeamSection"},l=n(61),r=n(78),c=n.n(r),v=n(470),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gnt-sec-2"},[n("v-container",[n("section",{staticClass:"gnt-sec-3"},[n("ChallengeTeamMemberList"),t._v(" "),n("ChallengeTeamSponserList")],1)])],1)}),[],!1,null,"25a7c17e",null);e.default=component.exports;c()(component,{ChallengeTeamMemberList:n(512).default,ChallengeTeamSponserList:n(513).default}),c()(component,{VContainer:v.a})},569:function(t,e,n){"use strict";n.r(e);var o={name:"TopScrollBtn",props:{color:{type:String,default:"op-brown darken-2"}},methods:{scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll:function(t,e,n){e=document.getElementById("btnmenu"),n=document.documentElement.scrollHeight-document.documentElement.clientHeight,window.scrollY>100&&window.scrollY<n-100?e.setAttribute("style","opacity: 1; transform: translate3d(-64px, 0, 0)"):e.setAttribute("style","opacity: 0;")}}},l=(n(524),n(61)),r=n(78),c=n.n(r),v=n(214),d=n(198),m=n(526),h=n.n(m),_=n(225),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"}],staticClass:"btn-container",attrs:{id:"btnmenu"}},[n("v-btn",{attrs:{fab:"",elevation:"6",color:t.color},on:{click:t.scrollTop}},[n("v-icon",{attrs:{large:"",color:"white"}},[t._v("mdi-chevron-up")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VIcon:d.a}),h()(component,{Scroll:_.b})},649:function(t,e,n){"use strict";n.r(e);var o="A multi-object tracking competition, Fish Tracking Challenge 2024, using the SweetFish dataset at the International Symposium of Hierarchical Bio-Navigation 2024(OPEN: 2023-10-15, END: 2024-01-15)",l="https://ftc-2024.github.io/img/FishTrackingChallenge.jpg",r={name:"ChallengePage",head:{title:"FishTrackingChallenge2024",meta:[{hid:"description",name:"description",content:o},{hid:"og:title",property:"og:title",content:"Fish Tracking Challenge 2024"},{hid:"og:description",property:"og:description",content:o},{hid:"og:url",property:"og:url",content:"https://FTC-2024.github.io/challenge2022/"},{hid:"og:image",property:"og:image",content:l},{hid:"twitter:card",property:"twitter:card",content:"summary_large_image"},{hid:"twitter:site",property:"twitter:site",content:"@FishTrackingChallenge"},{hid:"twitter:domain",property:"twitter:domain",content:"FTC-2024.github.io"},{hid:"twitter:title",property:"twitter:title",content:"FishTrackingChallenge 2024"},{hid:"twitter:description",property:"twitter:description",content:o},{hid:"twitter:image",property:"twitter:image",content:l}]}},c=n(61),v=n(78),d=n.n(v),m=n(470),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("ChallengeOverviewSection"),t._v(" "),n("ChallengeTaskSection"),t._v(" "),n("ChallengePrizeSection"),t._v(" "),n("ChallengeDetailSection"),t._v(" "),n("ChallengeRuleSection"),t._v(" "),n("ChallengeResultSection"),t._v(" "),n("ChallengeRegistrationSection"),t._v(" "),n("ChallengeTimelineSection"),t._v(" "),n("LpTermsSection"),t._v(" "),n("ChallengeLinkSection"),t._v(" "),n("ChallengeTeamSection"),t._v(" "),n("OrganismsTopScrollBtn")],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{ChallengeOverviewSection:n(558).default,ChallengeTaskSection:n(559).default,ChallengePrizeSection:n(560).default,ChallengeDetailSection:n(561).default,ChallengeRuleSection:n(562).default,ChallengeResultSection:n(563).default,ChallengeRegistrationSection:n(564).default,ChallengeTimelineSection:n(565).default,LpTermsSection:n(566).default,ChallengeLinkSection:n(567).default,ChallengeTeamSection:n(568).default,OrganismsTopScrollBtn:n(569).default}),d()(component,{VContainer:m.a})}}]);