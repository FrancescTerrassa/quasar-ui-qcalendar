(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[94],{"09de":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-center",staticStyle:{"max-width":"800px",width:"100%"}},[a("div",{staticClass:"q-gutter-sm"},[a("q-checkbox",{attrs:{label:"Use Touch (set if on mobile)"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),a("q-separator",{staticClass:"full-width"}),a("div",{staticClass:"row justify-center",staticStyle:{"max-width":"800px",width:"100%",overflow:"hidden"}},[a("q-calendar",{staticStyle:{"max-width":"300px","min-width":"auto",overflow:"hidden"},attrs:{view:"month",locale:"en-us","mini-mode":"","no-active-date":"",hover:e.mouseDown,"short-weekday-label":"",animated:"","selected-start-end-dates":e.startEndDates},on:{"mousedown:day2":e.onMouseDownDay,"mouseup:day2":e.onMouseUpDay,"mousemove:day2":e.onMouseMoveDay},model:{value:e.selectedDate1,callback:function(t){e.selectedDate1=t},expression:"selectedDate1"}}),a("q-separator",{attrs:{vertical:""}}),a("q-calendar",{staticStyle:{"max-width":"300px","min-width":"auto",overflow:"hidden"},attrs:{view:"month",locale:"en-us","mini-mode":"","no-active-date":"",hover:e.mouseDown,"short-weekday-label":"",animated:"","selected-start-end-dates":e.startEndDates},on:{"mousedown:day2":e.onMouseDownDay,"mouseup:day2":e.onMouseUpDay,"mousemove:day2":e.onMouseMoveDay},model:{value:e.selectedDate2,callback:function(t){e.selectedDate2=t},expression:"selectedDate2"}})],1)],1)},s=[],o=a("384e");function n(e){return 0===e.button}var r={data:function(){return{selectedDate1:"",selectedDate2:"",anchorTimestamp:"",otherTimestamp:"",mouseDown:!1,mobile:!1}},beforeMount:function(){this.selectedDate1=o["a"].today();var e=o["a"].parseTimestamp(this.selectedDate1);e=o["a"].addToDate(e,{month:1}),this.selectedDate2=e.date},computed:{startEndDates:function(){var e=[];return!1!==this.anchorDayIdentifier&&!1!==this.otherDayIdentifier&&(this.anchorDayIdentifier<=this.otherDayIdentifier?e.push(this.anchorTimestamp.date,this.otherTimestamp.date):e.push(this.otherTimestamp.date,this.anchorTimestamp.date)),e},anchorDayIdentifier:function(){return""!==this.anchorTimestamp&&o["a"].getDayIdentifier(this.anchorTimestamp)},otherDayIdentifier:function(){return""!==this.otherTimestamp&&o["a"].getDayIdentifier(this.otherTimestamp)},lowIdentifier:function(){return Math.min(this.anchorDayIdentifier,this.otherDayIdentifier)},highIdentifier:function(){return Math.max(this.anchorDayIdentifier,this.otherDayIdentifier)}},methods:{classDay:function(e){if(!1!==this.anchorDayIdentifier&&!1!==this.otherDayIdentifier)return this.getBetween(e)},getBetween:function(e){var t=o["a"].getDayIdentifier(e);return{"q-range-first":this.lowIdentifier===t,"q-range":this.lowIdentifier<=t&&this.highIdentifier>=t,"q-range-last":this.highIdentifier===t}},onMouseDownDay:function(e){var t=e.scope,a=e.event;if(n(a)){if(!0===this.mobile&&null!==this.anchorTimestamp&&null!==this.otherTimestamp&&this.anchorTimestamp.date===this.otherTimestamp.date)return this.otherTimestamp=t.timestamp,void(this.mouseDown=!1);this.mouseDown=!0,this.anchorTimestamp=t.timestamp,this.otherTimestamp=t.timestamp}},onMouseUpDay:function(e){var t=e.scope,a=e.event;n(a)&&(this.otherTimestamp=t.timestamp,this.mouseDown=!1)},onMouseMoveDay:function(e){var t=e.scope;e.event;!0===this.mouseDown&&!0!==t.outside&&(this.otherTimestamp=t.timestamp)}}},h=r,d=a("2877"),m=a("8f8e"),c=a("eb85"),u=a("7bbf"),l=a("eebe"),f=a.n(l),p=Object(d["a"])(h,i,s,!1,null,null,null);t["default"]=p.exports;f()(p,"components",{QCheckbox:m["a"],QSeparator:c["a"],QRange:u["a"]})}}]);