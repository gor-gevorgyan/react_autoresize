(this.webpackJsonpuntitled3=this.webpackJsonpuntitled3||[]).push([[0],{104:function(e,t,n){e.exports=n(157)},109:function(e,t,n){},138:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),o=(n(109),n(72)),l=n(36),s=n(162),u=n(165),m=n(167),d=s.a.Option;var f=function(e){return r.a.createElement(u.a,null,r.a.createElement(m.a,{span:20},r.a.createElement(s.a,{defaultValue:"add",onSelect:function(){e.addRow()}},r.a.createElement(d,{value:"add"},"Add"))))},v=n(168),E=n(71),b=n(41),p=n(163),h=n(161),O=n(79),g=n(166),j=n(160),N=n(164),k=(n(138),n(86)),y=p.a.TextArea;function w(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(!1),s=Object(l.a)(o,2),u=s[0],m=s[1],d=Object(a.useState)(""),f=Object(l.a)(d,2),v=f[0],w=f[1],C=Object(a.useState)(""),x=Object(l.a)(C,2),S=x[0],F=x[1],R=Object(a.useState)(e.vendor),z=Object(l.a)(R,2),A=z[0],M=z[1],V=Object(a.useRef)(null);var J,B=function(){return V.current.click()};function D(e){var t=e.target.files;if(t.length>0){var n=new FileReader;n.onloadend=function(){M(Object(b.a)(Object(b.a)({},A),{},{icon:n.result}))},n.readAsDataURL(t[0])}else M(Object(b.a)(Object(b.a)({},A),{},{icon:""}))}function I(t){i(!1);var n=Object(b.a)(Object(b.a)({},A),{},{edit:!1});e.addVendor(n),M(k)}function L(e,t,n){u&&S===n?(m(!1),w(""),F("")):(m(!0),F(n),w(t))}function W(e){M(Object(b.a)(Object(b.a)({},A),{},Object(E.a)({},S,e)))}return r.a.createElement("div",{className:"vendor-item"},r.a.createElement("div",{className:"vendor-icon-content",onMouseMove:function(){return i(!0)},onMouseLeave:function(){return i(!1)}},u&&A.edit?function(){var e="";switch(v){case"number":e=r.a.createElement(g.a,{min:0,max:10,step:.1,size:"small",value:A[S],onChange:function(e){return W(e)}});break;case"text":e=r.a.createElement(p.a,{className:"input",size:"small",value:A[S],onChange:function(e){return W(e.target.value)}});break;case"textarea":e=r.a.createElement(y,{className:"input",size:"small",value:A[S],onChange:function(e){return W(e.target.value)}});break;default:e=r.a.createElement(r.a.Fragment,null)}return r.a.createElement("div",{className:"redactor"},e)}():r.a.createElement(r.a.Fragment,null,A.icon.length>0?r.a.createElement(h.a,{className:"image",src:A.icon}):r.a.createElement("div",{className:"empty-img"},r.a.createElement(N.a,{className:"plus-icon",onClick:B}),r.a.createElement("input",{type:"file",ref:V,onChange:D})),c&&A.edit&&A.score>0&&A.icon.length>0&&A.description.length>0&&A.history.length>0&&A.founded.length>0&&A.investors.length>0&&A.founders.length>0?r.a.createElement(O.a,{type:"link",onClick:I},"Add New Vendor"):r.a.createElement("div",{className:"empty-space"}))),r.a.createElement("div",{className:"vendor-data-content"},A.edit?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"item item-score",onClick:function(e){return L(0,"number","score")}},"Overall Score"),r.a.createElement("div",{className:"item item-description",onClick:function(e){return L(0,"textarea","description")}},"Product Description"),r.a.createElement("div",{className:"item item-history",onClick:function(e){return L(0,"textarea","history")}},"Funding History"),r.a.createElement("div",{className:"item item-founded",onClick:function(e){return L(0,"text","founded")}},"Founded"),r.a.createElement("div",{className:"item item-investors",onClick:function(e){return L(0,"text","investors")}},"Key Investors"),r.a.createElement("div",{className:"item item-founders",onClick:function(e){return L(0,"text","founders")}},"Founders")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"item item-score"},r.a.createElement(j.a,{width:18,strokeColor:{from:"#108ee9",to:"#87d068"},percent:(J=A.score,10*parseFloat(J)),format:function(e){return e},type:"circle"})),r.a.createElement("div",{className:"item item-description"},A.description),r.a.createElement("div",{className:"item item-history"},A.history),r.a.createElement("div",{className:"item item-founded"},A.founded),r.a.createElement("div",{className:"item item-investors"},A.investors),r.a.createElement("div",{className:"item item-founders"},A.founders))))}var C=n(86);var x=function(){var e=Object(a.useState)((function(){return[C]})),t=Object(l.a)(e,2),n=t[0],c=t[1];function i(e){c([].concat(Object(o.a)(n),[e]))}return r.a.createElement(u.a,null,r.a.createElement(v.b,{direction:"horizontal"},n.map((function(e,t){return r.a.createElement(w,{key:t,vendor:e,addVendor:i})}))))};function S(){var e=Object(a.useState)([1]),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement(u.a,null,r.a.createElement(m.a,{span:22,offset:1},r.a.createElement(f,{addRow:function(){c([].concat(Object(o.a)(n),[1]))}}),n.map((function(e,t){return r.a.createElement(x,{key:t})}))))}n(155),n(156);var F=function(){return r.a.createElement(S,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e){e.exports=JSON.parse('{"icon":"","score":"","description":"","history":"","founded":"","investors":"","founders":"","edit":true}')}},[[104,1,2]]]);
//# sourceMappingURL=main.72c6a5ee.chunk.js.map