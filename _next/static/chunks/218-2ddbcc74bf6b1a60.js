(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[218],{5674:function(e,t,o){"use strict";var r=o(2322),a=o(9097),i=o.n(a),n=o(1323);t.Z=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(i(),{href:"/tokens",children:(0,r.jsx)(n.BasicButton,{label:"Colors",type:"secondary"})}),(0,r.jsx)(i(),{href:"/tokens/fonts",children:(0,r.jsx)(n.BasicButton,{label:"Fonts",type:"secondary"})}),(0,r.jsx)(i(),{href:"/tokens/spacers",children:(0,r.jsx)(n.BasicButton,{label:"Spacers",type:"secondary"})})]})}},1059:function(e,t,o){"use strict";var r=o(2322),a=o(3980),i=o.n(a),n=o(5854),l=o.n(n),c=function(e){var t=e.title,o=e.subtitle,a=e.children;return(0,r.jsx)("div",{className:l().Page,children:(0,r.jsxs)("div",{className:l().PageContent,children:[(0,r.jsx)("h1",{className:l().PageHeading,children:t}),(0,r.jsx)("p",{className:l().PageSubcopy,children:o}),a&&(0,r.jsx)("div",{children:a})]})})};c.propTypes={title:i().string.isRequired,subtitle:i().string.isRequired,children:i().node},t.Z=c},1323:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{BasicButton:function(){return p},DialogBox:function(){return d},Drawer:function(){return j},IconButton:function(){return m},buttonVariants:function(){return f}});var r=o(3903).Z,a=o(199).Z,i=o(9178).default,n=a(o(2784)),l=r(o(3980));var c,s={exports:{}};c=s,function(){var e={}.hasOwnProperty;function t(){for(var o=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var n="undefined"===typeof a?"undefined":i(a);if("string"===n||"number"===n)o.push(a);else if(Array.isArray(a)){if(a.length){var l=t.apply(null,a);l&&o.push(l)}}else if("object"===n){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){o.push(a.toString());continue}for(var c in a)e.call(a,c)&&a[c]&&o.push(c)}}}return o.join(" ")}c.exports?(t.default=t,c.exports=t):window.classNames=t}();var u=s.exports,f=["default","secondary","ghost"];function p(e){var t,o,r,a=e.label,i=e.htmlForm,l=e.htmlType,c=void 0===l?"button":l,s=e.type,f=void 0===s?"default":s,p=e.onClick,m=e.trailingIcon,d=e.leadingIcon,g=u("BasicButton",(t={},o="BasicButton--".concat(f),r=!0,o in t?Object.defineProperty(t,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[o]=r,t));return n.default.createElement("button",{className:g,type:c,form:i,onClick:p},d?n.default.createElement("span",{className:"BasicButton__leadingIcon"},d):null,a,m?n.default.createElement("span",{className:"BasicButton__trailingIcon"},m):null)}function m(e){var t=e.faClass,o=e.onClick,r=e.isActive,a=u("fa",t),i=u("IconButton",{"is-active":r});return n.default.createElement("button",{className:i,onClick:o},n.default.createElement("i",{className:a}))}function d(e){var t=e.title,o=e.subtitle,r=e.children,a=e.visible,i=void 0!==a&&a,l=e.onCancel,c=e.onClose,s=(0,n.useRef)(null);return(0,n.useEffect)((function(){i&&s.current.showModal()}),[i]),n.default.createElement("dialog",{className:"ModalDialog",ref:s,onCancel:l,onClose:c},n.default.createElement(g,{title:t,subtitle:o,handleClose:function(){return s.current.close()}}),n.default.createElement("section",{className:"ModalDialog__body"},r),n.default.createElement(y,null,n.default.createElement(p,{type:"ghost",label:"Cancel",onClick:function(){return s.current.close()},htmlId:"dialogBoxCancel"}),n.default.createElement(p,{label:"Submit",htmlType:"submit",htmlForm:"aform"})))}function g(e){var t=e.title,o=e.subtitle,r=e.handleClose;return n.default.createElement("header",{className:"ModalDialog__header"},n.default.createElement("div",null,n.default.createElement("h1",{className:"ModalDialog__title"},t),n.default.createElement("p",{className:"ModalDialog__subtitle"},o)),n.default.createElement(m,{faClass:"fa-times",onClick:r}))}function y(e){return n.default.createElement("footer",{className:"ModalDialog__footer"},e.children)}p.propTypes={label:l.default.string.isRequired,htmlForm:l.default.string,htmlType:l.default.oneOf(["button","submit","reset"]),htmlId:l.default.string.isRequired,type:l.default.oneOf(f),onClick:l.default.func,trailingIcon:l.default.element,leadingIcon:l.default.element},m.propTypes={faClass:l.default.string.isRequired,onClick:l.default.func,isActive:l.default.bool},d.propTypes={title:l.default.string.isRequired,subtitle:l.default.string.isRequired,children:l.default.element,visible:l.default.bool,onCancel:l.default.func,onClose:l.default.func,customHeader:l.default.element,customFooter:l.default.element},g.propTypes={title:l.default.string.isRequired,subtitle:l.default.string.isRequired,handleClose:l.default.func.isRequired},y.propTypes={children:l.default.element};var h=function(e){var t=e.label,o=void 0===t?"Back":t,r=e.onClick,a=void 0===r?function(){}:r,i=u("Drawer__back");return n.default.createElement("div",{className:i},n.default.createElement(p,{label:o,type:"ghost",onClick:a,leadingIcon:n.default.createElement("i",{className:"fa fa-chevron-left"})}))};h.propTypes={label:l.default.string,onClick:l.default.func};var b=function(e){var t=e.children,o=u("Drawer__actions");return n.default.createElement("div",{className:o},t)};b.propTypes={children:l.default.node};var v=function(e){var t=e.children,o=u("Drawer__title");return n.default.createElement("h4",{className:o},t)};v.propTypes={children:l.default.node};var S=function(e){var t=e.children,o=u("Drawer__header");return n.default.createElement("div",{className:o},t)};S.propTypes={children:l.default.node};var k=function(e){var t=e.children,o=u("Drawer__body");return n.default.createElement("div",{className:o},t)};k.propTypes={children:l.default.node};var P=function(e){var t=e.children,o=u("Drawer__footer");return n.default.createElement("div",{className:o},t)};function j(e){var t=e.position,o=e.children,r=e.open,a=void 0!==r&&r,i=u("Drawer","Drawer--".concat(t));return a?n.default.createElement("div",{role:"dialog","aria-modal":"true",className:i},o):null}P.propTypes={children:l.default.node},j.Header=S,j.Body=k,j.Footer=P,j.Title=v,j.Actions=b,j.Back=h,j.propTypes={position:l.default.oneOf(["left","right","top","bottom"]).isRequired,open:l.default.bool,children:l.default.node}},7401:function(e){e.exports={DesignToken__Table:"DesignTokens_DesignToken__Table__WZJhN",DesignToken__CellDescription:"DesignTokens_DesignToken__CellDescription__uEOwQ"}},5854:function(e){e.exports={Page:"PageContent_Page__KQX_Q",PageContent:"PageContent_PageContent__Hwrl_",PageHeading:"PageContent_PageHeading__H2sy3",PageSubcopy:"PageContent_PageSubcopy__Ux2Ic"}},480:function(e){"use strict";e.exports=JSON.parse('{"$_":{"black":{"400":{"description":"Used for text and such.","type":"color","value":"#282929","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"Used for text and such.","type":"color","value":"#282929ff"},"name":"ColorBlack400","attributes":{"category":"color","type":"black","item":"400"},"path":["color","black","400"]},"700":{"description":"Never use this. Only used on bars to hit AA contrast combination with Secondary label color. ","type":"color","value":"#000000","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"Never use this. Only used on bars to hit AA contrast combination with Secondary label color. ","type":"color","value":"#000000ff"},"name":"ColorBlack700","attributes":{"category":"color","type":"black","item":"700"},"path":["color","black","700"]}},"white":{"400":{"description":"","type":"color","value":"#ffffff","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#ffffffff"},"name":"ColorWhite400","attributes":{"category":"color","type":"white","item":"400"},"path":["color","white","400"]},"transparent":{"description":"","type":"color","value":"#ffffff","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#ffffff33"},"name":"ColorWhiteTransparent","attributes":{"category":"color","type":"white","item":"transparent"},"path":["color","white","transparent"]}},"gray":{"200":{"description":"Disabled state text","type":"color","value":"#919497","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"Disabled state text","type":"color","value":"#919497ff"},"name":"ColorGray200","attributes":{"category":"color","type":"gray","item":"200"},"path":["color","gray","200"]},"400":{"description":"Sub-copy (toolbar)","type":"color","value":"#6a6e72","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"Sub-copy (toolbar)","type":"color","value":"#6a6e72ff"},"name":"ColorGray400","attributes":{"category":"color","type":"gray","item":"400"},"path":["color","gray","400"]}},"light-gray":{"100":{"description":"Backgrounds","type":"color","value":"#f0f3f5","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"Backgrounds","type":"color","value":"#f0f3f5ff"},"name":"ColorLightGray100","attributes":{"category":"color","type":"light-gray","item":"100"},"path":["color","light-gray","100"]},"200":{"description":"","type":"color","value":"#e8ecee","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#e8eceeff"},"name":"ColorLightGray200","attributes":{"category":"color","type":"light-gray","item":"200"},"path":["color","light-gray","200"]},"300":{"description":"","type":"color","value":"#dde1e4","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#dde1e4ff"},"name":"ColorLightGray300","attributes":{"category":"color","type":"light-gray","item":"300"},"path":["color","light-gray","300"]},"400":{"description":"Border color","type":"color","value":"#d1d5d9","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"Border color","type":"color","value":"#d1d5d9ff"},"name":"ColorLightGray400","attributes":{"category":"color","type":"light-gray","item":"400"},"path":["color","light-gray","400"]}},"blue":{"100":{"description":"","type":"color","value":"#ecf6fe","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#ecf6feff"},"name":"ColorBlue100","attributes":{"category":"color","type":"blue","item":"100"},"path":["color","blue","100"]},"200":{"description":"","type":"color","value":"#c0e2fc","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#c0e2fcff"},"name":"ColorBlue200","attributes":{"category":"color","type":"blue","item":"200"},"path":["color","blue","200"]},"300":{"description":"","type":"color","value":"#4faae8","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#4faae8ff"},"name":"ColorBlue300","attributes":{"category":"color","type":"blue","item":"300"},"path":["color","blue","300"]},"400":{"description":"$blue","type":"color","value":"#0a6cb9","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"$blue","type":"color","value":"#0a6cb9ff"},"name":"ColorBlue400","attributes":{"category":"color","type":"blue","item":"400"},"path":["color","blue","400"]},"500":{"description":"","type":"color","value":"#0757aa","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#0757aaff"},"name":"ColorBlue500","attributes":{"category":"color","type":"blue","item":"500"},"path":["color","blue","500"]},"700":{"description":"","type":"color","value":"#064474","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#064474ff"},"name":"ColorBlue700","attributes":{"category":"color","type":"blue","item":"700"},"path":["color","blue","700"]}},"orange":{"100":{"description":"","type":"color","value":"#fef3ec","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#fef3ecff"},"name":"ColorOrange100","attributes":{"category":"color","type":"orange","item":"100"},"path":["color","orange","100"]},"200":{"description":"","type":"color","value":"#faceb3","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#faceb3ff"},"name":"ColorOrange200","attributes":{"category":"color","type":"orange","item":"200"},"path":["color","orange","200"]},"300":{"description":"","type":"color","value":"#f5a370","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#f5a370ff"},"name":"ColorOrange300","attributes":{"category":"color","type":"orange","item":"300"},"path":["color","orange","300"]},"400":{"description":"","type":"color","value":"#f0782d","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#f0782dff"},"name":"ColorOrange400","attributes":{"category":"color","type":"orange","item":"400"},"path":["color","orange","400"]},"500":{"description":"","type":"color","value":"#b05821","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#b05821ff"},"name":"ColorOrange500","attributes":{"category":"color","type":"orange","item":"500"},"path":["color","orange","500"]},"700":{"description":"","type":"color","value":"#723108","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#723108ff"},"name":"ColorOrange700","attributes":{"category":"color","type":"orange","item":"700"},"path":["color","orange","700"]}},"red":{"100":{"description":"","type":"color","value":"#fcefed","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#fcefedff"},"name":"ColorRed100","attributes":{"category":"color","type":"red","item":"100"},"path":["color","red","100"]},"200":{"description":"","type":"color","value":"#f4bdb8","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#f4bdb8ff"},"name":"ColorRed200","attributes":{"category":"color","type":"red","item":"200"},"path":["color","red","200"]},"300":{"description":"","type":"color","value":"#e1756c","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#e1756cff"},"name":"ColorRed300","attributes":{"category":"color","type":"red","item":"300"},"path":["color","red","300"]},"400":{"description":"","type":"color","value":"#cd2d1f","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#cd2d1fff"},"name":"ColorRed400","attributes":{"category":"color","type":"red","item":"400"},"path":["color","red","400"]},"500":{"description":"","type":"color","value":"#ac261a","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#ac261aff"},"name":"ColorRed500","attributes":{"category":"color","type":"red","item":"500"},"path":["color","red","500"]},"600":{"description":"","type":"color","value":"#8b1f15","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#8b1f15ff"},"name":"ColorRed600","attributes":{"category":"color","type":"red","item":"600"},"path":["color","red","600"]},"700":{"description":"","type":"color","value":"#6a1810","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#6a1810ff"},"name":"ColorRed700","attributes":{"category":"color","type":"red","item":"700"},"path":["color","red","700"]}},"yellow":{"100":{"description":"","type":"color","value":"#fff9eb","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#fff9ebff"},"name":"ColorYellow100","attributes":{"category":"color","type":"yellow","item":"100"},"path":["color","yellow","100"]},"200":{"description":"","type":"color","value":"#ffe6ad","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#ffe6adff"},"name":"ColorYellow200","attributes":{"category":"color","type":"yellow","item":"200"},"path":["color","yellow","200"]},"300":{"description":"","type":"color","value":"#ffd575","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#ffd575ff"},"name":"ColorYellow300","attributes":{"category":"color","type":"yellow","item":"300"},"path":["color","yellow","300"]},"400":{"description":"","type":"color","value":"#ffc33d","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#ffc33dff"},"name":"ColorYellow400","attributes":{"category":"color","type":"yellow","item":"400"},"path":["color","yellow","400"]},"500":{"description":"","type":"color","value":"#d39e29","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#d39e29ff"},"name":"ColorYellow500","attributes":{"category":"color","type":"yellow","item":"500"},"path":["color","yellow","500"]},"600":{"description":"","type":"color","value":"#a67a14","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#a67a14ff"},"name":"ColorYellow600","attributes":{"category":"color","type":"yellow","item":"600"},"path":["color","yellow","600"]},"700":{"description":"","type":"color","value":"#7a5500","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#7a5500ff"},"name":"ColorYellow700","attributes":{"category":"color","type":"yellow","item":"700"},"path":["color","yellow","700"]}},"green":{"100":{"description":"","type":"color","value":"#f4faef","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#f4faefff"},"name":"ColorGreen100","attributes":{"category":"color","type":"green","item":"100"},"path":["color","green","100"]},"200":{"description":"","type":"color","value":"#d4ecc0","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#d4ecc0ff"},"name":"ColorGreen200","attributes":{"category":"color","type":"green","item":"200"},"path":["color","green","200"]},"300":{"description":"","type":"color","value":"#9dca79","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#9dca79ff"},"name":"ColorGreen300","attributes":{"category":"color","type":"green","item":"300"},"path":["color","green","300"]},"400":{"description":"","type":"color","value":"#65a831","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#65a831ff"},"name":"ColorGreen400","attributes":{"category":"color","type":"green","item":"400"},"path":["color","green","400"]},"500":{"description":"","type":"color","value":"#457e19","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#457e19ff"},"name":"ColorGreen500","attributes":{"category":"color","type":"green","item":"500"},"path":["color","green","500"]},"700":{"description":"","type":"color","value":"#395f1c","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#395f1cff"},"name":"ColorGreen700","attributes":{"category":"color","type":"green","item":"700"},"path":["color","green","700"]}},"purple":{"100":{"description":"","type":"color","value":"#f3effb","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#f3effbff"},"name":"ColorPurple100","attributes":{"category":"color","type":"purple","item":"100"},"path":["color","purple","100"]},"200":{"description":"","type":"color","value":"#cdbeef","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#cdbeefff"},"name":"ColorPurple200","attributes":{"category":"color","type":"purple","item":"200"},"path":["color","purple","200"]},"300":{"description":"","type":"color","value":"#9376d2","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#9376d2ff"},"name":"ColorPurple300","attributes":{"category":"color","type":"purple","item":"300"},"path":["color","purple","300"]},"400":{"description":"","type":"color","value":"#582db4","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#582db4ff"},"name":"ColorPurple400","attributes":{"category":"color","type":"purple","item":"400"},"path":["color","purple","400"]},"700":{"description":"","type":"color","value":"#301862","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#301862ff"},"name":"ColorPurple700","attributes":{"category":"color","type":"purple","item":"700"},"path":["color","purple","700"]}},"transparent":{"overlay":{"description":"","type":"color","value":"#282929","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#282929b3"},"name":"ColorTransparentOverlay","attributes":{"category":"color","type":"transparent","item":"overlay"},"path":["color","transparent","overlay"]},"shadow":{"description":"","type":"color","value":"#282929","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#28292933"},"name":"ColorTransparentShadow","attributes":{"category":"color","type":"transparent","item":"shadow"},"path":["color","transparent","shadow"]},"empty":{"description":"","type":"color","value":"#ffffff","filePath":"tokens/color/base.json","isSource":true,"original":{"description":"","type":"color","value":"#ffffff00"},"name":"ColorTransparentEmpty","attributes":{"category":"color","type":"transparent","item":"empty"},"path":["color","transparent","empty"]}}},"dp":{"L":{"heading-48":{"value":"3rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"3rem","comment":""},"name":"SizeFontHeading48","attributes":{"category":"size","type":"font","item":"heading-48"},"path":["size","font","heading-48"]},"heading-40":{"value":"2.5rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"2.5rem","comment":""},"name":"SizeFontHeading40","attributes":{"category":"size","type":"font","item":"heading-40"},"path":["size","font","heading-40"]},"heading-32":{"value":"2rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"2rem","comment":""},"name":"SizeFontHeading32","attributes":{"category":"size","type":"font","item":"heading-32"},"path":["size","font","heading-32"]},"heading-28":{"value":"1.75rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.75rem","comment":""},"name":"SizeFontHeading28","attributes":{"category":"size","type":"font","item":"heading-28"},"path":["size","font","heading-28"]},"heading-24":{"value":"1.5rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.5rem","comment":""},"name":"SizeFontHeading24","attributes":{"category":"size","type":"font","item":"heading-24"},"path":["size","font","heading-24"]},"heading-20":{"value":"1.5rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.5rem","comment":""},"name":"SizeFontHeading20","attributes":{"category":"size","type":"font","item":"heading-20"},"path":["size","font","heading-20"]},"heading-18":{"value":"1.125rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.125rem","comment":""},"name":"SizeFontHeading18","attributes":{"category":"size","type":"font","item":"heading-18"},"path":["size","font","heading-18"]},"heading-16":{"value":"1rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1rem","comment":""},"name":"SizeFontHeading16","attributes":{"category":"size","type":"font","item":"heading-16"},"path":["size","font","heading-16"]},"body-24":{"value":"1.5rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.5rem","comment":""},"name":"SizeFontBody24","attributes":{"category":"size","type":"font","item":"body-24"},"path":["size","font","body-24"]},"body-20":{"value":"1.25rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.25rem","comment":""},"name":"SizeFontBody20","attributes":{"category":"size","type":"font","item":"body-20"},"path":["size","font","body-20"]},"body-18":{"value":"1.125rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.125rem","comment":""},"name":"SizeFontBody18","attributes":{"category":"size","type":"font","item":"body-18"},"path":["size","font","body-18"]},"body-16":{"value":"1rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1rem","comment":""},"name":"SizeFontBody16","attributes":{"category":"size","type":"font","item":"body-16"},"path":["size","font","body-16"]},"body-14":{"value":"0.875rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"0.875rem","comment":""},"name":"SizeFontBody14","attributes":{"category":"size","type":"font","item":"body-14"},"path":["size","font","body-14"]},"body-12":{"value":"0.75rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"0.75rem","comment":""},"name":"SizeFontBody12","attributes":{"category":"size","type":"font","item":"body-12"},"path":["size","font","body-12"]},"long-form-24":{"value":"1.5rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.5rem","comment":""},"name":"SizeFontLongForm24","attributes":{"category":"size","type":"font","item":"long-form-24"},"path":["size","font","long-form-24"]},"long-form-20":{"value":"1.25rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.25rem","comment":""},"name":"SizeFontLongForm20","attributes":{"category":"size","type":"font","item":"long-form-20"},"path":["size","font","long-form-20"]},"long-form-18":{"value":"1.125rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.125rem","comment":""},"name":"SizeFontLongForm18","attributes":{"category":"size","type":"font","item":"long-form-18"},"path":["size","font","long-form-18"]}}},"ph":{"L":{"heading-48":{"value":"3.75rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"3.75rem","comment":""},"name":"LineHeightFontHeading48","attributes":{"category":"line-height","type":"font","item":"heading-48"},"path":["line-height","font","heading-48"]},"heading-40":{"value":"3.12rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"3.12rem","comment":""},"name":"LineHeightFontHeading40","attributes":{"category":"line-height","type":"font","item":"heading-40"},"path":["line-height","font","heading-40"]},"heading-32":{"value":"2.5rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"2.5rem","comment":""},"name":"LineHeightFontHeading32","attributes":{"category":"line-height","type":"font","item":"heading-32"},"path":["line-height","font","heading-32"]},"heading-28":{"value":"2.625rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"2.625rem","comment":""},"name":"LineHeightFontHeading28","attributes":{"category":"line-height","type":"font","item":"heading-28"},"path":["line-height","font","heading-28"]},"heading-24":{"value":"2.25rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"2.25rem","comment":""},"name":"LineHeightFontHeading24","attributes":{"category":"line-height","type":"font","item":"heading-24"},"path":["line-height","font","heading-24"]},"heading-20":{"value":"2rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"2rem","comment":""},"name":"LineHeightFontHeading20","attributes":{"category":"line-height","type":"font","item":"heading-20"},"path":["line-height","font","heading-20"]},"heading-18":{"value":"1.625rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.625rem","comment":""},"name":"LineHeightFontHeading18","attributes":{"category":"line-height","type":"font","item":"heading-18"},"path":["line-height","font","heading-18"]},"heading-16":{"value":"1.5rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.5rem","comment":""},"name":"LineHeightFontHeading16","attributes":{"category":"line-height","type":"font","item":"heading-16"},"path":["line-height","font","heading-16"]},"body-24":{"value":"2.25rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"2.25rem","comment":""},"name":"LineHeightFontBody24","attributes":{"category":"line-height","type":"font","item":"body-24"},"path":["line-height","font","body-24"]},"body-20":{"value":"1.875rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.875rem","comment":""},"name":"LineHeightFontBody20","attributes":{"category":"line-height","type":"font","item":"body-20"},"path":["line-height","font","body-20"]},"body-18":{"value":"1.625rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.625rem","comment":""},"name":"LineHeightFontBody18","attributes":{"category":"line-height","type":"font","item":"body-18"},"path":["line-height","font","body-18"]},"body-16":{"value":"1.5rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.5rem","comment":""},"name":"LineHeightFontBody16","attributes":{"category":"line-height","type":"font","item":"body-16"},"path":["line-height","font","body-16"]},"body-14":{"value":"1.25rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.25rem","comment":""},"name":"LineHeightFontBody14","attributes":{"category":"line-height","type":"font","item":"body-14"},"path":["line-height","font","body-14"]},"body-12":{"value":"1rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1rem","comment":""},"name":"LineHeightFontBody12","attributes":{"category":"line-height","type":"font","item":"body-12"},"path":["line-height","font","body-12"]},"long-form-24":{"value":"2.25rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"2.25rem","comment":""},"name":"LineHeightFontLongForm24","attributes":{"category":"line-height","type":"font","item":"long-form-24"},"path":["line-height","font","long-form-24"]},"long-form-20":{"value":"1.875rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.875rem","comment":""},"name":"LineHeightFontLongForm20","attributes":{"category":"line-height","type":"font","item":"long-form-20"},"path":["line-height","font","long-form-20"]},"long-form-18":{"value":"1.625rem","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"1.625rem","comment":""},"name":"LineHeightFontLongForm18","attributes":{"category":"line-height","type":"font","item":"long-form-18"},"path":["line-height","font","long-form-18"]}}},"Su":{"L":{"400":{"value":"400","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"400","comment":""},"name":"FontWeightFont400","attributes":{"category":"font-weight","type":"font","item":"400"},"path":["font-weight","font","400"]},"500":{"value":"500","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"500","comment":""},"name":"FontWeightFont500","attributes":{"category":"font-weight","type":"font","item":"500"},"path":["font-weight","font","500"]},"700":{"value":"700","comment":"","filePath":"tokens/size/font.json","isSource":true,"original":{"value":"700","comment":""},"name":"FontWeightFont700","attributes":{"category":"font-weight","type":"font","item":"700"},"path":["font-weight","font","700"]}}},"ih":{"micro":{"value":"4px","filePath":"tokens/size/spacers.json","isSource":true,"original":{"value":"4px"},"name":"SpacersMicro","attributes":{"category":"spacers","type":"micro"},"path":["spacers","micro"]},"mini":{"value":"8px","filePath":"tokens/size/spacers.json","isSource":true,"original":{"value":"8px"},"name":"SpacersMini","attributes":{"category":"spacers","type":"mini"},"path":["spacers","mini"]},"small":{"value":"16px","filePath":"tokens/size/spacers.json","isSource":true,"original":{"value":"16px"},"name":"SpacersSmall","attributes":{"category":"spacers","type":"small"},"path":["spacers","small"]},"medium":{"value":"24px","filePath":"tokens/size/spacers.json","isSource":true,"original":{"value":"24px"},"name":"SpacersMedium","attributes":{"category":"spacers","type":"medium"},"path":["spacers","medium"]},"large":{"value":"32px","filePath":"tokens/size/spacers.json","isSource":true,"original":{"value":"32px"},"name":"SpacersLarge","attributes":{"category":"spacers","type":"large"},"path":["spacers","large"]}}}')}}]);