(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/PpZ":function(e,n,t){(e.exports=t("I1BE")(!1)).push([e.i,"#optional {\n    margin-top: 15px;\n    text-align: left;\n}\n\n.title-o {\n    text-transform: uppercase;\n    font-weight: 600;\n    font-size: 22px;\n    text-align: left;\n}\n\n.desc-o {\n    opacity: 0.6;\n    text-align: left;\n    font-size: 16px;\n    font-weight: 300;\n    margin-bottom: 15px;\n}\n\n.checkbox-o {\n    width: 100%;\n    position: relative;\n}\n\n.checkbox-o label {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.checkbox-o input {\n    opacity: 0;\n    display: none;\n}\n\n.checkbox-o label .checked {\n    height: 35px;\n    width: 35px;\n    border-radius: 100%;\n    background-color: var(--white);\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n}\n\n.checkbox-o label .checked svg {\n    height: 18px;\n    stroke-width: 4px;\n    color: #FFF;\n}\n\n.checkbox-o input:checked+label .checked {\n    background-color: var(--green);\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);\n}\n\n\n.checkbox-o label .text-c .title-c {\n    font-size: 17px;\n    font-weight: 500;\n}\n\n.checkbox-o label .text-c .desc-c {\n    opacity: 0.8;\n    font-weight: 200;\n    font-size: 14px;\n    margin-left: 3px;\n}\n\n.checkbox-o label .price-c {\n    font-weight: 500;\n    font-size: 12px;\n    margin-left: 6px;\n    color: var(--priceItem);\n}\n\n.more-less-additional {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 15px;\n}\n\n.more-less-additional .btns {\n    display: flex;\n}\n\n.more-less-additional .btns div {\n    padding: 7px;\n    border-radius: 5px;\n    max-width: 40px;\n    max-height: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 5px;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n.more-less-additional .infos-c .title {\n    font-weight: 500;\n    font-size: 17px;\n}\n\n.more-less-additional .infos-c .desc {\n    font-weight: 200;\n    font-size: 14px;\n    margin: 0 0 0 3px !important;\n}\n\n.more-less-additional .infos-c .price {\n    font-weight: 500;\n    font-size: 12px;\n    margin: 0 0 0 6px !important;\n    color: var(--priceItem)\n}\n\n#optional .input-group, #optional .more-less-additional {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.07);\n}\n\n#optional.inactive #add-0 {\n    opacity: 0.5;\n    cursor: not-allowed;\n}\n",""])},"16NB":function(e,n,t){(e.exports=t("I1BE")(!1)).push([e.i,"@keyframes placeholderShimmer {\r\n    0% {\r\n        background-position: -468px 0;\r\n    }\r\n    100% {\r\n        background-position: 468px 0;\r\n    }\r\n}\r\n\r\n.shimmer header {\r\n    background: #f6f7f8;\r\n    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%) !important;\r\n    background-size: 800px 104px;\r\n    position: relative;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: forwards;\r\n    animation-iteration-count: infinite;\r\n    animation-name: placeholderShimmer;\r\n    animation-timing-function: linear;\r\n}\r\n\r\n.shimmer header .logo {\r\n    background: #f6f7f8;\r\n    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%) !important;\r\n    background-size: 800px 104px;\r\n    position: relative;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: forwards;\r\n    animation-iteration-count: infinite;\r\n    animation-name: placeholderShimmer;\r\n    animation-timing-function: linear;\r\n}\r\n\r\n.shine {\r\n    background: #f6f7f8;\r\n    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%) !important;\r\n    background-size: 800px 104px !important;\r\n    position: relative;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: forwards;\r\n    animation-iteration-count: infinite;\r\n    animation-name: placeholderShimmer;\r\n    animation-timing-function: linear;\r\n    color: transparent !important;\r\n}",""])},"6Zz6":function(e,n,t){(e.exports=t("I1BE")(!1)).push([e.i,"#additional-h {\n    height: 150px;\n}\n\n.based-text {\n    width: 100%;\n    background-color: var(--white);\n    padding: 15px;\n    padding-bottom: 20px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);\n}\n\n.based-text .title-a {\n    font-weight: 700;\n    font-size: 30px;\n}\n\n.based-text .desc-a {\n    opacity: 0.5;\n    font-size: 14px;\n}\n\n.input-group textarea {\n    resize: none;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    padding: 12px;\n}\n\n.conclude {\n    width: 100%;\n    height: 55px;\n    background-color: var(--green);\n    position: fixed;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    color: #FFF;\n    padding: 0 15px;\n    font-size: 15px;\n    font-weight: 700;\n    z-index: 9999;\n    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);\n}\n\n.conclude .text-c {\n    display: flex;\n    flex-direction: column;\n}\n\n.conclude .text-c .desc-c {\n    font-size: 13px;\n    font-weight: 300;\n}\n\n.conclude .text-c .price-c {\n    position: absolute;\n    right: 0;\n    height: 55px;\n    top: 0;\n    align-items: center;\n    display: flex;\n    padding: 0 30px;\n    background: rgba(0, 0, 0, 0.2);\n}\n\n.conclude svg {\n    stroke-width: 3px;\n    width: 30px;\n    height: 30px;\n    margin-right: 10px;\n    background: #FFF;\n    color: var(--green);\n    border-radius: 100%;\n    padding: 5px;\n}\n\n.comeback {\n    height: 40px;\n    background-color: var(--white);\n    display: flex;\n    align-items: center;\n    padding: 0 8px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n    font-weight: 600;\n    line-height: 2px;\n    cursor: pointer;\n}\n\n.comeback svg {\n    height: 20px;\n}\n",""])},CLmd:function(e,n,t){var a=t("/PpZ");"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,r);a.locals&&(e.exports=a.locals)},G5e0:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("17x9"),c=t.n(i);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=Object(a.forwardRef)((function(e,n){var t=e.color,a=void 0===t?"currentColor":t,i=e.size,c=void 0===i?24:i,s=l(e,["color","size"]);return r.a.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),r.a.createElement("polyline",{points:"12 19 5 12 12 5"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="ArrowLeft",n.a=s},ILEt:function(e,n,t){var a=t("6Zz6");"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,r);a.locals&&(e.exports=a.locals)},JoNN:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("17x9"),c=t.n(i);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=Object(a.forwardRef)((function(e,n){var t=e.color,a=void 0===t?"currentColor":t,i=e.size,c=void 0===i?24:i,s=l(e,["color","size"]);return r.a.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("polyline",{points:"20 6 9 17 4 12"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="Check",n.a=s},"Rzx/":function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("17x9"),c=t.n(i);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=Object(a.forwardRef)((function(e,n){var t=e.color,a=void 0===t?"currentColor":t,i=e.size,c=void 0===i?24:i,s=l(e,["color","size"]);return r.a.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="Plus",n.a=s},i7bi:function(e,n,t){var a=t("16NB");"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(a,r);a.locals&&(e.exports=a.locals)},vBki:function(e,n,t){"use strict";t.r(n);var a=t("o0o1"),r=t.n(a),i=t("q1tI"),c=t.n(i),o=t("G5e0"),l=t("JoNN"),s=t("raOy"),d=t("pJZ/"),m=t("/MKj"),u=t("Ty5D"),p=t("55Ip"),f=t("spY8"),h=(t("CLmd"),t("xI/X")),v=t("Rzx/"),x=function(e){var n=e.data,t=e.dataIndex,a=e.handleAdditionalCheck,r=e.handleAdditionalMoreOrLess;return c.a.createElement("div",{className:"group-".concat(n.id),id:"optional"},c.a.createElement("div",{className:"additional-infos-c"},c.a.createElement("div",{className:"title-o"},n.name),c.a.createElement("div",{className:"desc-o"},n.description)),"multiple"===n.type?null==n?void 0:n.additional.map((function(e,n){return"inactive"!==(null==e?void 0:e.status)?c.a.createElement("div",{key:n,className:"input-group"},c.a.createElement("div",{className:"checkbox-o"},c.a.createElement("input",{name:"delivery",type:"checkbox",checked:e.checked,onChange:function(e){a(n,e.target.checked)},id:"".concat(t,"-").concat(n)}),c.a.createElement("label",{htmlFor:"".concat(t,"-").concat(n)},c.a.createElement("div",{className:"text-c"},c.a.createElement("div",{className:"title-c"},e.name),c.a.createElement("div",{className:"desc-c"},null==e?void 0:e.description),c.a.createElement("div",{className:"price-c"},null!=e&&e.price?"+ R$ ".concat(e.price):"")),c.a.createElement("div",{className:"checked"},c.a.createElement(l.a,null))))):null})):null==n?void 0:n.additional.map((function(e,n){return"inactive"!==(null==e?void 0:e.status)?c.a.createElement("div",{key:n,id:"add-".concat(null==e?void 0:e.add),className:"more-less-additional"},c.a.createElement("div",{className:"infos-c"},c.a.createElement("div",{className:"title"},null==e?void 0:e.name),c.a.createElement("div",{className:"desc"},null==e?void 0:e.description),c.a.createElement("div",{className:"price"},null!=e&&e.price?"+ R$ ".concat(e.price):"")),c.a.createElement("div",{className:"btns"},c.a.createElement("div",{className:"less",onClick:function(){r(n,t,"less")}},c.a.createElement(h.a,{size:18})),c.a.createElement("div",{className:"count"},null==e?void 0:e.add),c.a.createElement("div",{className:"more",onClick:function(){r(n,t,"more")}},c.a.createElement(v.a,{size:18})))):null})))};function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var a,r,i=[],c=!0,o=!1;try{for(t=t.call(e);!(c=(a=t.next()).done)&&(i.push(a.value),!n||i.length!==n);c=!0);}catch(e){o=!0,r=e}finally{try{c||null==t.return||t.return()}finally{if(o)throw r}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var y=function(e){var n=e.data,t=e.dataIndex,a=e.updateMinimum,r=g(Object(i.useState)(n),2),o=r[0],l=r[1],d=g(Object(i.useState)([]),2),m=d[0],u=d[1],p=g(Object(i.useState)(0),2),f=p[0],h=p[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(x,{data:n,dataIndex:t,handleAdditionalCheck:function(e,n){var r=o;if(m.length>=o.max&&!0===n)return s.notify.show("Você só pode selecionar no máximo ".concat(o.max," ").concat(1==o.max?"opção":"opções"),"warning",5e3);if(m.includes(e)){var i=m,c=i.indexOf(e);e>-1&&i.splice(c,1),u(i),h(f-1),r.additional[e].checked=!1,a("remove",t,i.length,r)}else{var d=m;d.push(e),u(d),h(f+1),r.additional[e].checked=!0,a("add",t,d.length,r)}l(r)},handleAdditionalMoreOrLess:function(e,t,r){var i=o,c=document.querySelector(".group-".concat(n.id));if(f>=o.max&&"more"===r)return s.notify.show("Você só pode selecionar no máximo ".concat(o.max," ").concat(1==o.max?"opção":"opções"),"warning",5e3);"more"===r?(i.additional[e].add++,h(f+1),a("add",t,i.additional[e].add,i),f>=o.max-1&&c.classList.add("inactive")):i.additional[e].add>0&&(i.additional[e].add--,h(f-1),a("remove",t,i.additional[e].add,i),i.additional[e].add<o.max&&c.classList.remove("inactive")),l(i)}}))},E=(t("i7bi"),function(e){return e.status?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"comeback"},c.a.createElement(o.a,null)," Voltar"),c.a.createElement("header",{id:"additional-h",className:"shine",style:{backgroundImage:"url()"}}),c.a.createElement("div",{className:"based-text"},c.a.createElement("div",{className:"title-a shine"},"Pizza de Calabresa"),c.a.createElement("div",{className:"desc-a shine",style:{marginTop:"5px",width:"80%"}},"Alho refogado no azeite, tomate, oregano e cebola.")),c.a.createElement("main",{className:"shimmer"},c.a.createElement("form",null,c.a.createElement("div",{id:"optional"},c.a.createElement("div",{className:"title-o shine",style:{width:"80%"}},"Adicionais"),c.a.createElement("div",{className:"desc-o shine",style:{marginTop:"5px",width:"50%"}},"Selecione uma opção abaixo:"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"checkbox-o"},c.a.createElement("input",{name:"delivery",type:"checkbox",id:"01"}),c.a.createElement("label",{htmlFor:"01"},c.a.createElement("div",{className:"checked"},c.a.createElement(l.a,null)),c.a.createElement("div",{className:"text-c",style:{width:"60%",marginRight:"10%"}},c.a.createElement("div",{className:"title-c shine"},"Shimmer Title"),c.a.createElement("div",{className:"desc-c shine",style:{width:"70%"}},"Desc")),c.a.createElement("div",{className:"price-c shine",style:{width:"10%"}},"+ 99,00"))),c.a.createElement("div",{className:"checkbox-o"},c.a.createElement("input",{name:"delivery",type:"checkbox",id:"01"}),c.a.createElement("label",{htmlFor:"01"},c.a.createElement("div",{className:"checked"},c.a.createElement(l.a,null)),c.a.createElement("div",{className:"text-c",style:{width:"60%",marginRight:"10%"}},c.a.createElement("div",{className:"title-c shine"},"Shimmer Title"),c.a.createElement("div",{className:"desc-c shine",style:{width:"70%"}},"Desc")),c.a.createElement("div",{className:"price-c shine",style:{width:"10%"}},"+ 99,00"))),c.a.createElement("div",{className:"checkbox-o"},c.a.createElement("input",{name:"delivery",type:"checkbox",id:"01"}),c.a.createElement("label",{htmlFor:"01"},c.a.createElement("div",{className:"checked"},c.a.createElement(l.a,null)),c.a.createElement("div",{className:"text-c",style:{width:"60%",marginRight:"10%"}},c.a.createElement("div",{className:"title-c shine"},"Shimmer Title"),c.a.createElement("div",{className:"desc-c shine",style:{width:"70%"}},"Desc")),c.a.createElement("div",{className:"price-c shine",style:{width:"10%"}},"+ 99,00"))),c.a.createElement("div",{className:"checkbox-o"},c.a.createElement("input",{name:"delivery",type:"checkbox",id:"01"}),c.a.createElement("label",{htmlFor:"01"},c.a.createElement("div",{className:"checked"},c.a.createElement(l.a,null)),c.a.createElement("div",{className:"text-c",style:{width:"60%",marginRight:"10%"}},c.a.createElement("div",{className:"title-c shine"},"Shimmer Title"),c.a.createElement("div",{className:"desc-c shine",style:{width:"70%"}},"Desc")),c.a.createElement("div",{className:"price-c shine",style:{width:"10%"}},"+ 99,00"))))),c.a.createElement("div",{id:"optional"},c.a.createElement("div",{className:"title-o shine",style:{width:"80%"}},"Adicionais"),c.a.createElement("div",{className:"desc-o shine",style:{marginTop:"5px",width:"50%"}},"Selecione uma opção abaixo:"),c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"checkbox-o"},c.a.createElement("input",{name:"delivery",type:"checkbox",id:"01"}),c.a.createElement("label",{htmlFor:"01"},c.a.createElement("div",{className:"checked"},c.a.createElement(l.a,null)),c.a.createElement("div",{className:"text-c",style:{width:"60%",marginRight:"10%"}},c.a.createElement("div",{className:"title-c shine"},"Shimmer Title"),c.a.createElement("div",{className:"desc-c shine",style:{width:"70%"}},"Desc")),c.a.createElement("div",{className:"price-c shine",style:{width:"10%"}},"+ 99,00"))),c.a.createElement("div",{className:"checkbox-o"},c.a.createElement("input",{name:"delivery",type:"checkbox",id:"01"}),c.a.createElement("label",{htmlFor:"01"},c.a.createElement("div",{className:"checked"},c.a.createElement(l.a,null)),c.a.createElement("div",{className:"text-c",style:{width:"60%",marginRight:"10%"}},c.a.createElement("div",{className:"title-c shine"},"Shimmer Title"),c.a.createElement("div",{className:"desc-c shine",style:{width:"70%"}},"Desc")),c.a.createElement("div",{className:"price-c shine",style:{width:"10%"}},"+ 99,00"))),c.a.createElement("div",{className:"checkbox-o"},c.a.createElement("input",{name:"delivery",type:"checkbox",id:"01"}),c.a.createElement("label",{htmlFor:"01"},c.a.createElement("div",{className:"checked"},c.a.createElement(l.a,null)),c.a.createElement("div",{className:"text-c",style:{width:"60%",marginRight:"10%"}},c.a.createElement("div",{className:"title-c shine"},"Shimmer Title"),c.a.createElement("div",{className:"desc-c shine",style:{width:"70%"}},"Desc")),c.a.createElement("div",{className:"price-c shine",style:{width:"10%"}},"+ 99,00"))))),c.a.createElement("div",{className:"title-o"},"observação"),c.a.createElement("div",{className:"desc-o"},"É opcional, faça se quiser"),c.a.createElement("div",{className:"input-group"},c.a.createElement("textarea",null))))):null});t("ILEt");function w(e,n,t,a,r,i,c){try{var o=e[i](c),l=o.value}catch(e){return void t(e)}o.done?n(l):Promise.resolve(l).then(a,r)}function k(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var i=e.apply(n,t);function c(e){w(i,a,r,c,o,"next",e)}function o(e){w(i,a,r,c,o,"throw",e)}c(void 0)}))}}function N(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var a,r,i=[],c=!0,o=!1;try{for(t=t.call(e);!(c=(a=t.next()).done)&&(i.push(a.value),!n||i.length!==n);c=!0);}catch(e){o=!0,r=e}finally{try{c||null==t.return||t.return()}finally{if(o)throw r}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}n.default=function(e){var n,t=e.match.params,a=Object(m.b)(),h=Object(u.f)(),v=N(Object(i.useState)([]),2),x=v[0],g=v[1],b=N(Object(i.useState)(!0),2),w=b[0],O=b[1],j=N(Object(i.useState)(""),2),S=j[0],z=j[1],I=N(Object(i.useState)(0),2),F=I[0],T=I[1],A=N(Object(i.useState)([]),2),P=A[0],C=A[1],R=N(Object(i.useState)([]),2),L=R[0],_=R[1];Object(i.useEffect)((function(){function e(){return(e=k(r.a.mark((function e(n){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/product",{id:n});case 2:t=e.sent,g(t.data[0]),T(t.data[0].price),a=[],t.data[0].additional.map((function(e,n){a.push({id:n,minimum:e.min,selected:0,completed:0===e.min})})),C(a),O(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(n){e.apply(this,arguments)}(t.id)}),[]);var q=function(){var e=k(r.a.mark((function e(n,t,a,i){var c,o,l,s,d,m,u,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=P,s=0,d=x.additional[t],"add"==n?(d.additional.forEach((function(e){e.add?s=e.add+s:e.checked&&s++})),l[t].selected=s,l[t].completed=!(s<d.min)):l[t].selected>=l[t].minimum&&(l[t].selected=a<0?0:a,l[t].selected<l[t].minimum&&(l[t].completed=!1)),C(l),(m=L)[t]=i,u=x.price,p=[],e.next=11,null===(c=x.additional)||void 0===c?void 0:c.map((function(e,n){p.push({})}));case 11:return e.next=13,null==m?void 0:m.map(function(){var e=k(r.a.mark((function e(n,t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p[t]={name:n.name,hight_price:n.hight_price,selecteds:[]},e.next=3,n.additional.map(function(){var e=k(r.a.mark((function e(n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!0===(null==n?void 0:n.checked)||(null==n?void 0:n.add)>0)){e.next=3;break}return e.next=3,p[t].selecteds.push({name:n.name,price:Number(n.price.replace(",",".")),qty:null!==(a=null==n?void 0:n.add)&&void 0!==a?a:1});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}());case 13:return p=p.filter((function(e){return 0!==Object.keys(e).length})),e.next=16,null===(o=p)||void 0===o?void 0:o.map((function(e){if("no"==e.hight_price)e.selecteds.map((function(e){u+=parseFloat(e.price)*parseFloat(e.qty)}));else{var n=[];e.selecteds.map((function(e){n.push(e.price)})),n.sort((function(e,n){return n-e})),u+=parseFloat(n[0])}}));case 16:T(u),_(m);case 18:case"end":return e.stop()}}),e)})));return function(n,t,a,r){return e.apply(this,arguments)}}(),B=function(){var e=k(r.a.mark((function e(){var n,t,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<P.length)){e.next=8;break}if(P[n].completed){e.next=5;break}return e.abrupt("return",s.notify.show("Para adicionar este item, você precisa selecionar ".concat(x.additional[n].min," ").concat(1==x.additional[n].min?"opção":"opções"," em ").concat(x.additional[n].name),"warning",7e3));case 5:n++,e.next=1;break;case 8:return t=[],e.next=11,x.additional.map((function(e,n){t.push({})}));case 11:return e.next=13,L.map(function(){var e=k(r.a.mark((function e(n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t[a]={name:n.name,hight_price:n.hight_price,selecteds:[]},e.next=3,n.additional.map(function(){var e=k(r.a.mark((function e(n){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!0===(null==n?void 0:n.checked)||(null==n?void 0:n.add)>0)){e.next=3;break}return e.next=3,t[a].selecteds.push({name:n.name,price:Number(n.price.replace(",",".")),qty:null!==(i=null==n?void 0:n.add)&&void 0!==i?i:1});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}());case 13:return t=t.filter((function(e){return 0!==Object.keys(e).length})),i={product_id:x.id,product_name:x.name,product_image:x.image,product_price:x.price,product_buttons:x.delivery_options,product_quantity:1,client_optional:S,client_additional:t},e.next=17,a({type:"ADD_CART_ITEM",item:i});case 17:s.notify.show("Produto adicionado ao carrinho!","success",2e3),h.push("/");case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(E,{status:w}),c.a.createElement(p.b,{to:"/"},c.a.createElement("div",{className:"comeback"},c.a.createElement(o.a,null)," Voltar")),c.a.createElement("header",{id:"additional-h",style:{backgroundImage:"url(".concat(x.image,")"),margin:0}}),c.a.createElement("div",{className:"based-text"},c.a.createElement("div",{className:"title-a"},x.name),c.a.createElement("div",{className:"desc-a"},x.description)),c.a.createElement("main",{className:"shimmer"},c.a.createElement("form",null,null==x||null===(n=x.additional)||void 0===n?void 0:n.map((function(e,n){return c.a.createElement(y,{key:e.id,data:e,dataIndex:n,updateMinimum:q})})),c.a.createElement("div",{className:"title-o"},"observação"),c.a.createElement("div",{className:"desc-o"},"É opcional, faça se quiser"),c.a.createElement("div",{className:"input-group"},c.a.createElement("textarea",{value:S,onChange:function(e){return z(e.target.value)}})))),c.a.createElement("div",{className:"conclude",onClick:function(){return B()},style:"iOS"==function(){var e=Object(i.useContext)(d.a);e.uaResults;return e.parser.getOS().name}()?{paddingBottom:30,height:80}:null},c.a.createElement(l.a,null),c.a.createElement("div",{className:"text-c"},"Adicionar",c.a.createElement("div",{className:"desc-c"},"Será adicionado o valor ao carrinho"),c.a.createElement("div",{className:"price-c"},"R$ ",parseFloat(F)>0?parseFloat(F).toFixed(2):parseFloat(0).toFixed(2)))))}},"xI/X":function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),i=t("17x9"),c=t.n(i);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=Object(a.forwardRef)((function(e,n){var t=e.color,a=void 0===t?"currentColor":t,i=e.size,c=void 0===i?24:i,s=l(e,["color","size"]);return r.a.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="Minus",n.a=s}}]);