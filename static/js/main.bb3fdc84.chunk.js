(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),s=n.n(i),o=(n(12),n(4)),r=n(6),l=n(17),d=(n(13),n.p+"static/media/todoIcon.6820232d.png"),u=n(0),j=function(e){var t=e.todoList,n=e.submitHandler,c=e.onChangeHandler,a=e.deleteHandler,i=e.entryText,s=e.isCompleteHandler;return Object(u.jsxs)("div",{className:"main-container",children:[Object(u.jsx)("img",{className:"todo-icon",src:d,alt:""}),Object(u.jsx)("h3",{children:"REACT TO DO"}),Object(u.jsx)("ul",{className:"todo-list",children:t.map((function(e){return Object(u.jsxs)("li",{className:"todo-item",children:[e.isComplete?Object(u.jsx)("p",{style:{textDecoration:"line-through"},children:e.text}):Object(u.jsx)("p",{children:e.text}),Object(u.jsx)("button",{className:"check-btn",onClick:function(){return s(e.id)},children:Object(u.jsx)("i",{className:"fas fa-check fa-lg"})}),Object(u.jsx)("button",{className:"delete-btn",onClick:function(){return a(e.id)},children:Object(u.jsx)("i",{className:"fas fa-trash-alt fa-lg"})})]},e.id)}))}),Object(u.jsxs)("form",{className:"input-container",onSubmit:function(e){return n(e,i)},children:[Object(u.jsx)("input",{className:"input-box",type:"text",placeholder:"Enter Task...",value:i,onChange:function(e){return c(e)}}),Object(u.jsx)("button",{className:"add-btn",type:"submit",children:Object(u.jsx)("i",{className:"fas fa-plus fa-lg"})})]})]})};var b=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([{id:Object(l.a)(),text:"Task one",isComplete:!1},{id:Object(l.a)(),text:"Task two",isComplete:!1},{id:Object(l.a)(),text:"Task three",isComplete:!1}]),s=Object(r.a)(i,2),d=s[0],b=s[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(j,{todoList:d,submitHandler:function(e,t){if(e.preventDefault(),t.trim()){var n=Object(o.a)(d),c={id:Object(l.a)(),text:t,isComplete:!1};n.push(c),b(n),a("")}},onChangeHandler:function(e){var t=e.target.value;a(t)},entryText:n,deleteHandler:function(e){var t=Object(o.a)(d).filter((function(t){return t.id!==e}));b(t)},isCompleteHandler:function(e){var t=Object(o.a)(d),n=t.find((function(t){return t.id===e}));n.isComplete=!n.isComplete,b(t)}})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.bb3fdc84.chunk.js.map