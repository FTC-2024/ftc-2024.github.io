(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{492:function(e,t,n){e.exports=n.p+"img/100.4772e1a.jpg"},493:function(e,t,n){e.exports=n.p+"img/204.175ec4c.jpg"},494:function(e,t,n){e.exports=n.p+"img/303.9a5607e.jpg"},495:function(e,t,n){e.exports=n.p+"img/401.e02366f.jpg"},496:function(e,t,n){e.exports=n.p+"img/501.22601a4.jpg"},497:function(e,t,n){e.exports=n.p+"img/601.e858313.jpg"},498:function(e,t,n){e.exports=n.p+"img/704.fab660f.jpg"},499:function(e,t,n){e.exports=n.p+"img/802.d8d7931.jpg"},500:function(e,t,n){e.exports=n.p+"img/902.4a5eef6.jpg"},501:function(e,t,n){e.exports=n.p+"img/1002.5047e03.jpg"},506:function(e,t,n){"use strict";n.r(t);n(11),n(6);var o={name:"GalleryActivityOpenPackOperationList",data:function(){return{items:[{id:100,name:"Picking",description:"Check the order-sheet and go to the back table to pick up the items.",version:"v3.0.0",ignore:!1,image:n(492)},{id:200,name:"Relocate Item Label",description:"Peel off the label from the items and place it on the bottom margin of the order sheet. Check the item names and quantity on the list and label with a ballpoint pen. (When picking is done in one round trip, this action is set as the beginning of the box.)",version:"v3.2.2",ignore:!1,image:n(493)},{id:300,name:"Assemble Box",description:"Assemble cardboard boxes that match the size of the items.",version:"v3.2.2",ignore:!1,image:n(494)},{id:400,name:"Insert Items",description:"Put the goods into the box. Fill the box with air cushion.",version:"v3.2.2",ignore:!1,image:n(495)},{id:500,name:"Close Box",description:"Close the box with craft tape.",version:"v3.2.2",ignore:!1,image:n(496)},{id:600,name:"Attach Box Label",description:"Attach the box number label to the side of the box.",version:"v3.2.2",ignore:!1,image:n(497)},{id:700,name:"Scan Label",description:'Scan barcodes with the handy scanner in the following order: (1) order sheet, (2) box number sticker, (3) item label. Then press the "ESC" button on the handy scanner twice. Next, scan barcodes with the scanner of the label printer in the following order: (1) order sheet, (2) code on the label printer.',version:"v3.2.2",ignore:!1,image:n(498)},{id:800,name:"Attach Shipping Label",description:"Attach the shipping label printed out from the label printer to the box.",version:"v3.2.2",ignore:!1,image:n(499)},{id:900,name:"Put on Back Table",description:"Move the completed packing box under the back table.",version:"v3.2.2",ignore:!1,image:n(500)},{id:1e3,name:"Fill out Order",description:"Write their signatures in the confirmation column of the order sheet and insert it into the tray for completed order sheets.",version:"v3.2.2",ignore:!1,image:n(501)},{id:8100,name:"Null",description:"",version:"v3.2.2",ignore:!0,image:""}]}},computed:{headers:function(){var e=this;return[{text:"Image",align:"start",sortable:!1,value:"image"},{text:"ID",value:"id",sortable:!1},{text:"Operation",value:"name",sortable:!1},{text:"Description",value:"description",sortable:!1}].filter((function(t){return e.$vuetify.breakpoint.smAndUp||"id"===t.value||"name"===t.value||"image"===t.value}))}}},r=n(61),c=n(78),l=n.n(c),h=n(461),m=n(645),d=n(168),v=n(463),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h3",{attrs:{id:"gellery-activity-openpackoperationlist"}},[e._v("\n      Work Operations (10 classes)\n    ")]),e._v(" "),n("v-data-table",{attrs:{headers:e.headers,items:e.items,"mobile-breakpoint":0,"disable-pagination":"","hide-default-footer":""},scopedSlots:e._u([{key:"item.image",fn:function(e){var t=e.item;return[n("v-img",{attrs:{src:t.image,"aspect-ratop":4/3,height:"6vw","min-height":"60px",width:"8vw","min-width":"80px"}})]}}],null,!0)})],1)],1)}),[],!1,null,"ff209a32",null);t.default=component.exports;l()(component,{VCol:h.a,VDataTable:m.a,VImg:d.a,VRow:v.a})}}]);