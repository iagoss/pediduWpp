(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+QRC":function(e,t,n){"use strict";var r=n("E9nw"),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,c,l,u,s=!1;t||(t={}),n=t.debug||!1;try{if(i=r(),c=document.createRange(),l=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(u),c.selectNodeContents(u),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),u&&document.body.removeChild(u),i()}return s}},"1Aac":function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".fidelity {\n    display: flex;\n    flex-direction: column;\n    border-radius: 5px;\n    text-align: left;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.15);\n    padding: 5px 15px 10px 15px;\n    margin-top: 11px;\n}\n\n.fidelity .title-box {\n    width: 100%;\n    font-weight: 500 !important;\n    margin-top: 5px !important;\n}\n\n.fidelity .points {\n    padding: 5px 0;\n}\n\n.fidelity .points .point {\n    width: 30px;\n    height: 30px;\n    float: left;\n    border-radius: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 2.5px;\n    background: white;\n}\n\n.fidelity .points .point.check {\n    background: var(--priceItem);\n}\n\n\n.fidelity .points .point.award {\n    background: #FCC115;\n}\n\n.fidelity .rescue {\n    width: 100%;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n    color: white;\n    margin-top: 5px;\n}\n\n.fidelity .rescue svg {\n    margin-right: 8px;\n}\n\n.fidelity .rescue.inactive {\n    background: #565658;\n    opacity: 0.3;\n    cursor: not-allowed;\n}\n\n.fidelity .rescue.active {\n    background: #1d9f2c;\n    cursor: pointer;\n}\n\n.fidelity .rescue.copy {\n    background: #565658;\n    display: flex;\n    flex-direction: column;\n    height: 55px;\n    cursor: pointer;\n}\n\n.fidelity .rescue.copy .small {\n   font-size: 12px;\n}\n",""])},"8A1L":function(e,t,n){var r=n("1Aac");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,o);r.locals&&(e.exports=r.locals)},"9yQG":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=(n("My6r"),function(e){var t=e.title;e.icon;return o.a.createElement("div",{className:"title-page"},t)});t.a=function(e){var t=e.title,n=e.icon;return o.a.createElement(a,{title:t,icon:n})}},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},JoNN:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("17x9"),i=n.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,u=l(e,["color","size"]);return o.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),o.a.createElement("polyline",{points:"20 6 9 17 4 12"}))}));u.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},u.displayName="Check",t.a=u},M9NL:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".title-page {\r\n    height: 45px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    font-size: 18px;\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);\r\n    background-color: var(--white);\r\n    color: var(--black);\r\n}",""])},My6r:function(e,t,n){var r=n("M9NL");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(r,o);r.locals&&(e.exports=r.locals)},P5Jw:function(e,t,n){"use strict";var r=n("rHrb").CopyToClipboard;r.CopyToClipboard=r,e.exports=r},PnLD:function(e,t,n){"use strict";var r=n("o0o1"),o=n.n(r),a=n("q1tI"),i=n.n(a),c=n("/MKj"),l=n("raOy"),u=n("spY8"),s=n("JoNN"),p=n("17x9"),f=n.n(p);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=Object(a.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,a=void 0===o?24:o,c=y(e,["color","size"]);return i.a.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.a.createElement("circle",{cx:"12",cy:"8",r:"7"}),i.a.createElement("polyline",{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}))}));m.propTypes={color:f.a.string,size:f.a.oneOfType([f.a.string,f.a.number])},m.displayName="Award";var v=m,b=n("cZ1P"),g=n("P5Jw");n("8A1L");function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=function(e){var t,n,r=e.configurations,o=e.user,c=e.itemsFidelity,u=e.getCoupon,p=e.setPoints,f=e.coupon,d=h(Object(a.useState)(null===(t=o.data)||void 0===t||null===(n=t.fidelity)||void 0===n?void 0:n.buttonStatus),2),y=d[0],m=d[1];return"active"===(null==r?void 0:r.fidelity.status)?i.a.createElement("div",{className:"fidelity"},i.a.createElement("div",{className:"title-box"},"Programa de fidelidade:"),i.a.createElement("div",{className:"text-explication",dangerouslySetInnerHTML:{__html:r.fidelity.promotional_text}}),i.a.createElement("div",{className:"points"},c.map((function(e,t){return e.marked?i.a.createElement("div",{className:"point check",key:t},i.a.createElement(s.a,{color:"#FFFFFF",size:16})):i.a.createElement("div",{className:"point",key:t})})),i.a.createElement("div",{className:"point award"},i.a.createElement(v,{color:"#FFFFFF",size:16}))),y?i.a.createElement(i.a.Fragment,null,""!==f?i.a.createElement(g.CopyToClipboard,{text:f,onCopy:function(){m(!1),p(0),l.notify.show("Copiado com sucesso!","success",5e3)}},i.a.createElement("div",{className:"rescue copy",onClick:function(){}},i.a.createElement("div",null,"Seu código é: ",i.a.createElement("b",null,f)),i.a.createElement("div",{className:"small"},"aperte para copiar"))):i.a.createElement("div",{className:"rescue active",onClick:function(){return u()}},i.a.createElement(b.a,{size:16})," Resgatar cupom")):i.a.createElement("div",{className:"rescue inactive"},i.a.createElement(b.a,{size:16})," Resgatar cupom")):null};function O(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(){var e,t=function(){return Object(c.c)((function(e){return e}))},n=t().configurations,r=t().user,s=j(Object(a.useState)([]),2),p=s[0],f=s[1],d=j(Object(a.useState)(""),2),y=d[0],m=d[1],v=j(Object(a.useState)(null===(e=r.data.fidelity)||void 0===e?void 0:e.totalPoints),2),b=v[0],g=v[1];Object(a.useEffect)((function(){for(var e=[],t=b,r=0;r<n.fidelity.total_orders;r++)e.push({marked:t>0}),t>0&&t--;f(e)}),[b]);var h=function(){var e,t=(e=o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.querySelector(".rescue.active").style.opacity=.5,(t={}).token=localStorage.getItem("token"),e.next=5,u.a.post("/fidelity_coupon",t);case 5:(n=e.sent).data.success?(document.querySelector(".rescue.active").style.opacity=1,m(n.data.success.data.coupon)):l.notify.show(n.data.error.message,"success",5e3);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){O(a,r,o,i,c,"next",e)}function c(e){O(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return i.a.createElement(x,{configurations:n,user:r,itemsFidelity:p,getCoupon:h,setPoints:g,coupon:y})}},cZ1P:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("17x9"),i=n.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,u=l(e,["color","size"]);return o.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),o.a.createElement("polyline",{points:"20 12 20 22 4 22 4 12"}),o.a.createElement("rect",{x:"2",y:"7",width:"20",height:"5"}),o.a.createElement("line",{x1:"12",y1:"22",x2:"12",y2:"7"}),o.a.createElement("path",{d:"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"}),o.a.createElement("path",{d:"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"}))}));u.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},u.displayName="Gift",t.a=u},rHrb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(n("q1tI")),o=a(n("+QRC"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?d(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){function t(){var e,n;u(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return m(d(n=p(this,(e=f(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,a=t.text,i=t.onCopy,c=t.children,l=t.options,u=r.default.Children.only(c),s=(0,o.default)(a,l);i&&i(a,s),u&&u.props&&"function"==typeof u.props.onClick&&u.props.onClick(e)})),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&s(n.prototype,a),i&&s(n,i),t}(r.default.PureComponent);t.CopyToClipboard=v,m(v,"defaultProps",{onCopy:void 0,options:void 0})}}]);