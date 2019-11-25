(this.webpackJsonpdynamic_app=this.webpackJsonpdynamic_app||[]).push([[0],{100:function(e,a,t){},156:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),l=t.n(r),s=(t(94),t(16)),o=t(20),i=t(159),m=t(160),u=t(157),p=t(61),d=(t(99),t(100),function(e){return{type:"DELETE_TASK",payload:e}}),E=Object(s.b)((function(e){return e}),{deleteTask:d,getQuantity:function(e){return{type:"SET_QUANTITY",payload:e}}})((function(e){var a=Object(n.useState)(),t=Object(o.a)(a,2),r=t[0],l=t[1];return Object(n.useEffect)((function(){e.getQuantity({active_index:r})}),[r]),c.a.createElement("div",null,e.task.allTask?e.task.allTask.map((function(a,t){return c.a.createElement(i.a,{key:a.id,className:r===t?"wrapper-task row active":"wrapper-task row",type:"flex",justify:"space-between"},c.a.createElement(m.a,{onClick:function(){return function(e){l(e)}(t)},span:20},c.a.createElement("ul",{className:"ul"},c.a.createElement("li",null,a.name),c.a.createElement("span",{className:"quantity"},a.comments.length))),c.a.createElement(m.a,{span:3},c.a.createElement(p.a,{onClick:function(){return function(a){var t=e.task.allTask.filter((function(e){return e.id!==a}));e.deleteTask(t)}(a.id)},className:"delete-btn"},"Delete")))})):null)})),f=Object(s.b)((function(e){return e}),{setComments:function(e){return{type:"SET_COMMENTS",payload:e}},deleteTask:d})((function(e){var a=Object(n.useState)(),t=Object(o.a)(a,2),r=t[0],l=t[1],s=Object(n.useState)(""),p=Object(o.a)(s,2),d=p[0],E=p[1],f=u.a.TextArea;return Object(n.useEffect)((function(){void 0!==e.task.active_index&&null!==e.task.active_index&&l(e.task.allTask[e.task.active_index].comments.map((function(e,a){return c.a.createElement(i.a,{className:"row wrapper-task",key:a},c.a.createElement(m.a,{span:4},c.a.createElement("div",{className:"photo"})),c.a.createElement(m.a,{span:17},c.a.createElement("p",{className:"text-comment"},e)))})))}),[e.task.active_index]),Object(n.useEffect)((function(){l("")}),[]),c.a.createElement("div",{className:"comments-wrapper"},c.a.createElement(i.a,{className:"row"},c.a.createElement(m.a,{span:3},c.a.createElement("h2",{className:"title"},"Comments #",void 0!==e.task.active_index?e.task.active_index+1:null))),c.a.createElement("div",{className:"wrapper-comments"},r),c.a.createElement(i.a,{className:"comment row",type:"flex",justify:"center",allign:"bottom"},c.a.createElement(m.a,{span:3},c.a.createElement("div",{className:"image"})),c.a.createElement(m.a,{span:20},c.a.createElement(f,{className:"text-area",allign:"bottom",onKeyDown:function(a){if(a.ctrlKey&&13===a.keyCode){var t=e.task.allTask;void 0!==e.task.active_index&&null!==e.task.active_index&&(t[e.task.active_index].comments.push(a.target.value),e.setComments(t),E(""),l(e.task.allTask[e.task.active_index].comments.map((function(e,a){return c.a.createElement(i.a,{className:"row wrapper-task",key:a},c.a.createElement(m.a,{span:4},c.a.createElement("div",{className:"photo"})),c.a.createElement(m.a,{span:19},c.a.createElement("p",{className:"text-comment"},e)))}))))}},onChange:function(e){return E(e.target.value)},value:d}))))})),v=Object(s.b)((function(e){return{allTask:e.task.allTask}}),{setTask:function(e){return{type:"ADD_TASK",payload:e}}})((function(e){var a=Object(n.useState)(),t=Object(o.a)(a,2),r=t[0],l=t[1];return c.a.createElement("div",{className:"wrapper-background"},c.a.createElement("div",{className:"wrapper-blocks"},c.a.createElement("div",{className:"items"},c.a.createElement(i.a,{className:"row"},c.a.createElement(m.a,{span:3},c.a.createElement("h2",{className:"title"},"Items"))),c.a.createElement(i.a,{className:"row",type:"flex",justify:"space-between"},c.a.createElement(m.a,{span:15},c.a.createElement(u.a,{onChange:function(e){return l(e.target.value)},value:r,placeholder:"Type name here"})),c.a.createElement(m.a,{span:3},c.a.createElement(p.a,{onClick:function(){""!==r&&e.setTask({name:r,id:Math.random(),comments:[]}),l("")},className:"add-btn",type:"primary"},"Add new"))),c.a.createElement("div",{className:"scroll-items"},c.a.createElement(E,null))),c.a.createElement("div",{className:"comments"},c.a.createElement(f,null))))})),k=t(86),b=t(85),y=t(29);function O(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?O(t,!0).forEach((function(a){Object(b.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var w={allTask:[],active_index:""},N=Object(y.c)(Object(y.b)({task:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"ADD_TASK":return T({},e,{allTask:[].concat(Object(k.a)(e.allTask),[n])});case"DELETE_TASK":return T({},e,{allTask:n});case"SET_QUANTITY":return T({},e,{active_index:n.active_index});case"SET_COMMENTS":return T({},e,{allTask:n});default:return T({},e)}}}),JSON.parse(localStorage.redux));N.subscribe((function(){localStorage.redux=JSON.stringify(N.getState())}));var j=N;var g=function(){return c.a.createElement(s.a,{store:j},c.a.createElement("div",{className:"App"},c.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,a,t){e.exports=t(156)},94:function(e,a,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.739702be.chunk.js.map