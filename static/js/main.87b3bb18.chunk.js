(this["webpackJsonpts-todo-app-context"]=this["webpackJsonpts-todo-app-context"]||[]).push([[0],{31:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var o,c,i,r,a,d,l,b,s,x,j,p,u,f,O,h,g,v=t(0),m=t.n(v),C=t(23),k=t.n(C),D=(t(31),t(2)),y=t(3),w=t(4),T=t(21),L=t(15),S=t(1),F=Object(v.createContext)({toDoList:[],addToDo:function(){},deleteToDo:function(){}}),z=function(n){var e=n.children,t=Object(v.useState)([]),o=Object(L.a)(t,2),c=o[0],i=o[1];return Object(v.useEffect)((function(){var n=localStorage.getItem("ToDoList");n&&i(JSON.parse(n))}),[]),Object(S.jsx)(F.Provider,{value:{toDoList:c,addToDo:function(n){if(n){var e=[].concat(Object(T.a)(c),[n]);localStorage.setItem("ToDoList",JSON.stringify(e)),i(e)}},deleteToDo:function(n){var e=Object(T.a)(c);e.splice(n,1),localStorage.setItem("ToDoList",JSON.stringify(e)),i(e)}},children:e})},A=t(9),B=function(n){var e=n.label,t=n.backgroundColor,o=void 0===t?"#AACD6E":t,c=n.hoverColor,i=void 0===c?"#BCE55C":c,r=n.onClick;return Object(S.jsx)(E,{backgroundColor:o,hoverColor:i,onClick:r,children:Object(S.jsx)(I,{children:e})})},E=y.a.div(o||(o=Object(D.a)(["\n  text-align: center;\n  background-color: ",";\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  &:hover {\n    background-color: ",";\n  }\n  &:active {\n    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);\n  }\n"])),(function(n){return n.backgroundColor}),(function(n){return n.hoverColor})),I=y.a.div(c||(c=Object(D.a)(["\n  color: #fff;\n  font-size: 16px;\n"]))),J=function(n){var e=n.placeholder,t=n.value,o=n.onChange,c=n.onAdd;return Object(S.jsx)(N,{value:t,placeholder:e,onChange:function(n){"function"===typeof o&&o(n.target.value)},onKeyPress:c})},N=y.a.input(i||(i=Object(D.a)(["\n  flex: 1;\n  font-size: 16px;\n  padding: 10px;\n  border: none;\n  outline: none;\n"]))),P=function(n){var e=n.id,t=n.label,o=n.onDelete;return Object(S.jsxs)(K,{children:[Object(S.jsx)(M,{to:"/detail/".concat(e),children:t}),Object(S.jsx)(B,{label:"\uc0ad\uc81c",backgroundColor:"#F16B6F",hoverColor:"#E71D36",onClick:o})]})},K=y.a.div(r||(r=Object(D.a)(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #bdbdbd;\n  margin: 10px;\n  padding: 10px;\n"]))),M=Object(y.a)(A.b)(a||(a=Object(D.a)(["\n  flex: 1;\n  font-size: 16px;\n  margin-right: 20px;\n  text-decoration: none;\n"]))),W=function(n){var e=n.onAdd,t=Object(v.useState)(""),o=Object(L.a)(t,2),c=o[0],i=o[1],r=Object(v.useContext)(F).addToDo,a=function(){r(c),i(""),c&&"function"===typeof e&&e()};return Object(S.jsxs)(q,{children:[Object(S.jsx)(J,{placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",value:c,onChange:i,onAdd:a}),Object(S.jsx)(B,{label:"\ucd94\uac00",onClick:a})]})},q=y.a.div(d||(d=Object(D.a)(["\n  display: flex;\n"]))),G=function(){var n=Object(v.useContext)(F),e=n.toDoList,t=n.deleteToDo;return Object(S.jsx)(H,{"data-testid":"toDoList",children:null===e||void 0===e?void 0:e.map((function(n,e){return Object(S.jsx)(P,{id:e,label:n,onDelete:function(){return t(e)}},n)}))})},H=y.a.div(l||(l=Object(D.a)(["\n  min-width: 350px;\n  height: 400px;\n  overflow-y: scroll;\n  border: 1px solid #bdbdbd;\n  margin-bottom: 20px;\n"]))),Q=function(){var n=Object(w.g)().pathname,e="\uc5d0\ub7ec";return"/"===n?e="\ud560 \uc77c \ubaa9\ub85d":"/add"===n?e="\ud560 \uc77c \ucd94\uac00":n.startsWith("/detail")&&(e="\ud560 \uc77c \uc0c1\uc138"),Object(S.jsxs)(R,{children:[Object(S.jsx)(U,{children:e}),"/"!==n&&Object(S.jsx)(V,{to:"/",children:"\ub3cc\uc544\uac00\uae30"})]})},R=y.a.div(b||(b=Object(D.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #aacd6e;\n"]))),U=y.a.div(s||(s=Object(D.a)(["\n  padding: 20px;\n  color: #fff;\n  font-size: 20px;\n  font-weight: 600;\n"]))),V=Object(y.a)(A.b)(x||(x=Object(D.a)(["\n  padding: 10px;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  position: absolute;\n  left: 20px;\n  border: 1px solid #fff;\n  border-radius: 8px;\n"]))),X=function(){return Object(S.jsxs)(Y,{children:[Object(S.jsx)(G,{}),Object(S.jsx)(Z,{to:"/add",children:"+"})]})},Y=y.a.div(j||(j=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n  position: relative;\n"]))),Z=Object(y.a)(A.b)(p||(p=Object(D.a)(["\n  font-size: 20px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  border-radius: 30px;\n  position: absolute;\n  bottom: -30px;\n  background-color: #aacd6e;\n  text-decoration: none;\n\n  &:hover {\n    background-color: #bce55c;\n  }\n  &:active {\n    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);\n  }\n"]))),$=function(){var n=Object(w.f)().replace;return Object(S.jsx)(_,{children:Object(S.jsx)(W,{onAdd:function(){return n("/")}})})},_=y.a.div(u||(u=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n  position: relative;\n"]))),nn=function(){var n=Object(w.f)().goBack,e=Object(w.h)(),t=Number.parseInt(e.id),o=Object(v.useContext)(F),c=o.toDoList,i=o.deleteToDo,r=c[t];return Object(S.jsxs)(en,{children:[Object(S.jsx)(tn,{children:r}),Object(S.jsx)(B,{label:"\uc0ad\uc81c",backgroundColor:"#F16B6F",hoverColor:"#E71D36",onClick:function(){i(t),n()}})]})},en=y.a.div(f||(f=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n  position: relative;\n"]))),tn=y.a.div(O||(O=Object(D.a)(["\n  min-width: 350px;\n  height: 350px;\n  overflow-y: auto;\n  border: 1px solid #bdbdbd;\n  margin-bottom: 20px;\n  padding: 10px;\n"]))),on=function(){return Object(S.jsx)(cn,{children:"Not Found"})},cn=y.a.div(h||(h=Object(D.a)(["\n  font-size: 20px;\n"])));var rn=y.a.div(g||(g=Object(D.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),an=function(){return Object(S.jsx)(z,{children:Object(S.jsxs)(rn,{children:[Object(S.jsx)(Q,{}),Object(S.jsxs)(w.c,{children:[Object(S.jsx)(w.a,{exact:!0,path:"/",component:X}),Object(S.jsx)(w.a,{exact:!0,path:"/add",component:$}),Object(S.jsx)(w.a,{exact:!0,path:"/detail/:id",component:nn}),Object(S.jsx)(w.a,{component:on})]})]})})},dn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(e){var t=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;t(n),o(n),c(n),i(n),r(n)}))};k.a.render(Object(S.jsx)(m.a.StrictMode,{children:Object(S.jsx)(A.a,{children:Object(S.jsx)(an,{})})}),document.getElementById("root")),dn()}},[[43,1,2]]]);
//# sourceMappingURL=main.87b3bb18.chunk.js.map