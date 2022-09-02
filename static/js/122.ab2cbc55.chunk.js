"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[122],{5565:function(n,t,e){e.d(t,{F:function(){return p},Y:function(){return l}});var r,o=e(885),i=e(2791),a=e(24),u=e(2080),c=e(5984),d=e(3979),s=e(168),l=e(3081).Z.form(r||(r=(0,s.Z)(["\n  display: block;\n  margin: 0 auto;\n  width: fit-content;\n"]))),f=e(9584),h=e(4717),m=e(3329),p=function(){var n=(0,i.useState)(""),t=(0,o.Z)(n,2),e=t[0],r=t[1],s=(0,i.useState)(""),p=(0,o.Z)(s,2),x=p[0],g=p[1],v=(0,a.Lr)(),b=(0,o.Z)(v,2),w=b[0],j=b[1].isLoading,Z=(0,h.g)(),C=function(n){var t=n.target,e=t.name,o=t.value;switch(e){case"name":r(o);break;case"number":g(o);break;default:console.log("No such a field")}},y=function(n){return!Z.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))||(alert("".concat(n," is already in contacts")),!1)};return(0,m.jsxs)(l,{autoComplete:"off",onSubmit:function(n){n.preventDefault(),y(e)&&(w({name:e,number:x}),r(""),g(""))},children:[(0,m.jsx)(d.I,{name:"name",type:"text",id:(0,c.x0)(),pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:e,required:!0,placeholder:"Name Surname",onChange:C}),(0,m.jsx)(d.I,{type:"tel",name:"number",id:(0,c.x0)(),pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:x,required:!0,placeholder:"+380 (111) 11 11 11",onChange:C}),(0,m.jsx)(f.Button,{type:"submit",children:j?(0,m.jsx)(u.p2,{color:"#8d8d8d",width:"16",height:"16"}):"Add contact"})]})}},3979:function(n,t,e){e.d(t,{I:function(){return l}});var r,o,i=e(5984),a=e(168),u=e(3081),c=u.Z.label(r||(r=(0,a.Z)(["\n  display: block;\n  margin-bottom: 5px;\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: capitalize;\n"]))),d=u.Z.input(o||(o=(0,a.Z)(["\n  display: block;\n  margin-bottom: 20px;\n\n  border-radius: ",";\n  border: 1px solid ",";\n  transition: box-shadow 250ms ease-out;\n\n  &:focus-within {\n    outline: none;\n    box-shadow: 0 0 7px ",";\n  }\n"])),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.colors.borderMiddleColor}),(function(n){return n.theme.colors.accentColor})),s=e(3329);function l(n){var t=n.name,e=n.type,r=n.value,o=n.pattern,a=n.title,u=n.required,l=n.placeholder,f=n.onChange,h=(0,i.x0)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{htmlFor:h,children:t}),(0,s.jsx)(d,{type:e,name:t,id:h,value:r,pattern:o,title:a,required:u,placeholder:l,onChange:f})]})}},4717:function(n,t,e){e.d(t,{g:function(){return r.g}});e(5861);var r=e(3193)},3193:function(n,t,e){e.d(t,{g:function(){return a}});var r=e(24),o=e(5048),i=e(2824),a=function(){var n=(0,o.v9)(i.Nh),t=(0,r.wY)(void 0,{skip:!n}).data;return void 0===t?[]:t}},5861:function(n,t,e){var r=e(24),o=e(3193),i=e(5048);t.Z=function(){var n=(0,o.g)(),t=(0,i.v9)(r.B8).toLowerCase();return t?n.filter((function(n){return n.name.toLowerCase().split(" ").some((function(n){return n.includes(t)}))})):n}},24:function(n,t,e){e.d(t,{B8:function(){return o.B8},Lr:function(){return r.Lr},Nt:function(){return r.Nt},Tv:function(){return o.Tv},wY:function(){return r.wY}});var r=e(9676),o=e(4808)},6122:function(n,t,e){e.r(t),e.d(t,{default:function(){return F}});var r,o,i=e(168),a=e(3081),u=a.Z.section(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 300px;\n  width: 60%;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  background-color: ",";\n  border-radius: ",";\n  box-shadow: ",";\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"])),(function(n){return n.theme.colors.backgroundLightColor}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.shadow})),c=a.Z.h2(o||(o=(0,i.Z)(["\n  margin-top: 0;\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 25px;\n  text-align: center;\n  vertical-align: middle;\n"]))),d=e(3329);function s(n){var t=n.title,e=n.children;return(0,d.jsxs)(u,{children:[t&&(0,d.jsx)(c,{children:t}),e]})}var l,f=e(5565),h=e(5048),m=e(24),p=e(3979),x=a.Z.div(l||(l=(0,i.Z)(["\n  margin: 0 auto;\n  width: fit-content;\n"])));function g(){var n=(0,h.v9)(m.B8),t=(0,h.I0)();return(0,d.jsx)(x,{children:(0,d.jsx)(p.I,{name:"filter",type:"search",value:n,title:"Enter a name or a family name of the contact to filter data. Filter is case insensitive.",onChange:function(n){var e=n.target.value;t((0,m.Tv)(e))},required:!1,pattern:""})})}var v,b,w=e(5861),j=e(885),Z=e(2080),C=a.Z.li(v||(v=(0,i.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: capitalize;\n"]))),y=e(9584),k=e(4717);function L(n){var t=n.id,e=(0,k.g)(),r=(0,m.Nt)(),o=(0,j.Z)(r,2),i=o[0],a=o[1].isLoading,u=e.find((function(n){return n.id===t})),c=u.name,s=u.number;return(0,d.jsx)(C,{children:e&&(0,d.jsxs)(d.Fragment,{children:[c,": ",s," ",(0,d.jsx)(y.Button,{type:"button",onClick:function(){i(t)},disabled:a,children:a?(0,d.jsx)(Z.p2,{color:"#8d8d8d",width:"16",height:"16"}):"Delete"})]})})}var z=a.Z.ul(b||(b=(0,i.Z)(["\n  margin: 0 auto;\n  width: fit-content;\n"])));function _(){var n=(0,w.Z)();return(0,d.jsx)(d.Fragment,{children:n&&(0,d.jsx)(z,{children:n.map((function(n){var t=n.id;return(0,d.jsx)(L,{id:t},t)}))})})}var F=function(){return(0,d.jsxs)(y.Main,{children:[(0,d.jsx)(s,{title:"Phonebook",children:(0,d.jsx)(f.F,{})}),(0,d.jsxs)(s,{title:"Contacts",children:[(0,d.jsx)(g,{}),(0,d.jsx)(_,{})]})]})}},5984:function(n,t,e){e.d(t,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=122.ab2cbc55.chunk.js.map