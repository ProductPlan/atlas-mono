(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[874],{8435:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,f,u,c;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(f=s;0!==f--;)if(!i(e[f],a[f]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(c=e.entries();!(f=c.next()).done;)if(!a.has(f.value[0]))return!1;for(c=e.entries();!(f=c.next()).done;)if(!i(f.value[1],a.get(f.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(c=e.entries();!(f=c.next()).done;)if(!a.has(f.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(f=s;0!==f--;)if(e[f]!==a[f])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(f=s;0!==f--;)if(!Object.prototype.hasOwnProperty.call(a,u[f]))return!1;if(t&&e instanceof Element)return!1;for(f=s;0!==f--;)if(("_owner"!==u[f]&&"__v"!==u[f]&&"__o"!==u[f]||!e.$$typeof)&&!i(e[u[f]],a[u[f]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4874:function(e,t,n){"use strict";n.r(t),n.d(t,{Manager:function(){return a},Popper:function(){return Le},Reference:function(){return Ce},usePopper:function(){return Me}});var r=n(2784),o=r.createContext(),i=r.createContext();function a(e){var t=e.children,n=r.useState(null),a=n[0],s=n[1],f=r.useRef(!1);r.useEffect((function(){return function(){f.current=!0}}),[]);var u=r.useCallback((function(e){f.current||s(e)}),[]);return r.createElement(o.Provider,{value:a},r.createElement(i.Provider,{value:u},t))}var s=function(e){return Array.isArray(e)?e[0]:e},f=function(e){if("function"===typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}},u=function(e,t){if("function"===typeof e)return f(e,t);null!=e&&(e.current=t)},c=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},p="undefined"!==typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect,l=n(8316);function d(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function m(e){return e instanceof d(e).Element||e instanceof Element}function h(e){return e instanceof d(e).HTMLElement||e instanceof HTMLElement}function v(e){return"undefined"!==typeof ShadowRoot&&(e instanceof d(e).ShadowRoot||e instanceof ShadowRoot)}var y=Math.max,g=Math.min,b=Math.round;function w(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function x(){return!/^((?!chrome|android).)*safari/i.test(w())}function O(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&h(e)&&(o=e.offsetWidth>0&&b(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&b(r.height)/e.offsetHeight||1);var a=(m(e)?d(e):window).visualViewport,s=!x()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,u=(r.top+(s&&a?a.offsetTop:0))/i,c=r.width/o,p=r.height/i;return{width:c,height:p,top:u,right:f+c,bottom:u+p,left:f,x:f,y:u}}function E(e){var t=d(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function j(e){return e?(e.nodeName||"").toLowerCase():null}function A(e){return((m(e)?e.ownerDocument:e.document)||window.document).documentElement}function D(e){return O(A(e)).left+E(e).scrollLeft}function k(e){return d(e).getComputedStyle(e)}function P(e){var t=k(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function M(e,t,n){void 0===n&&(n=!1);var r=h(t),o=h(t)&&function(e){var t=e.getBoundingClientRect(),n=b(t.width)/e.offsetWidth||1,r=b(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=A(t),a=O(e,o,n),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(r||!r&&!n)&&(("body"!==j(t)||P(i))&&(s=function(e){return e!==d(e)&&h(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:E(e);var t}(t)),h(t)?((f=O(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):i&&(f.x=D(i))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function S(e){var t=O(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function R(e){return"html"===j(e)?e:e.assignedSlot||e.parentNode||(v(e)?e.host:null)||A(e)}function B(e){return["html","body","#document"].indexOf(j(e))>=0?e.ownerDocument.body:h(e)&&P(e)?e:B(R(e))}function L(e,t){var n;void 0===t&&(t=[]);var r=B(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=d(r),a=o?[i].concat(i.visualViewport||[],P(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(L(R(a)))}function W(e){return["table","td","th"].indexOf(j(e))>=0}function H(e){return h(e)&&"fixed"!==k(e).position?e.offsetParent:null}function C(e){for(var t=d(e),n=H(e);n&&W(n)&&"static"===k(n).position;)n=H(n);return n&&("html"===j(n)||"body"===j(n)&&"static"===k(n).position)?t:n||function(e){var t=/firefox/i.test(w());if(/Trident/i.test(w())&&h(e)&&"fixed"===k(e).position)return null;var n=R(e);for(v(n)&&(n=n.host);h(n)&&["html","body"].indexOf(j(n))<0;){var r=k(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var T="top",U="bottom",V="right",_="left",q="auto",F=[T,U,V,_],N="start",z="end",I="viewport",X="popper",Y=F.reduce((function(e,t){return e.concat([t+"-"+N,t+"-"+z])}),[]),$=[].concat(F,[q]).reduce((function(e,t){return e.concat([t,t+"-"+N,t+"-"+z])}),[]),G=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function J(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function K(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Q={placement:"bottom",modifiers:[],strategy:"absolute"};function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function ee(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?Q:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},Q,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;u(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:m(e)?L(e):e.contextElement?L(e.contextElement):[],popper:L(t)};var c=function(e){var t=J(e);return G.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=c.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:f,options:r}),u=function(){};a.push(s||u)}})),f.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(Z(t,n)){o.rects={reference:M(t,C(n),"fixed"===o.options.strategy),popper:S(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,u=i.options,c=void 0===u?{}:u,p=i.name;"function"===typeof a&&(o=a({state:o,options:c,name:p,instance:f})||o)}else o.reset=!1,r=-1}}},update:K((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function(){u(),s=!0}};if(!Z(e,t))return f;function u(){a.forEach((function(e){return e()})),a=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var te={passive:!0};function ne(e){return e.split("-")[0]}function re(e){return e.split("-")[1]}function oe(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ie(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?ne(o):null,a=o?re(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case T:t={x:s,y:n.y-r.height};break;case U:t={x:s,y:n.y+n.height};break;case V:t={x:n.x+n.width,y:f};break;case _:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var u=i?oe(i):null;if(null!=u){var c="y"===u?"height":"width";switch(a){case N:t[u]=t[u]-(n[c]/2-r[c]/2);break;case z:t[u]=t[u]+(n[c]/2-r[c]/2)}}return t}var ae={top:"auto",right:"auto",bottom:"auto",left:"auto"};function se(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,f=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,p=e.isFixed,l=a.x,m=void 0===l?0:l,h=a.y,v=void 0===h?0:h,y="function"===typeof c?c({x:m,y:v}):{x:m,y:v};m=y.x,v=y.y;var g=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),x=_,O=T,E=window;if(u){var j=C(n),D="clientHeight",P="clientWidth";if(j===d(n)&&"static"!==k(j=A(n)).position&&"absolute"===s&&(D="scrollHeight",P="scrollWidth"),o===T||(o===_||o===V)&&i===z)O=U,v-=(p&&j===E&&E.visualViewport?E.visualViewport.height:j[D])-r.height,v*=f?1:-1;if(o===_||(o===T||o===U)&&i===z)x=V,m-=(p&&j===E&&E.visualViewport?E.visualViewport.width:j[P])-r.width,m*=f?1:-1}var M,S=Object.assign({position:s},u&&ae),R=!0===c?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:b(t*r)/r||0,y:b(n*r)/r||0}}({x:m,y:v}):{x:m,y:v};return m=R.x,v=R.y,f?Object.assign({},S,((M={})[O]=w?"0":"",M[x]=g?"0":"",M.transform=(E.devicePixelRatio||1)<=1?"translate("+m+"px, "+v+"px)":"translate3d("+m+"px, "+v+"px, 0)",M)):Object.assign({},S,((t={})[O]=w?v+"px":"",t[x]=g?m+"px":"",t.transform="",t))}var fe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=$.reduce((function(e,n){return e[n]=function(e,t,n){var r=ne(e),o=[_,T].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[_,V].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},ue={left:"right",right:"left",bottom:"top",top:"bottom"};function ce(e){return e.replace(/left|right|bottom|top/g,(function(e){return ue[e]}))}var pe={start:"end",end:"start"};function le(e){return e.replace(/start|end/g,(function(e){return pe[e]}))}function de(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&v(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function me(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function he(e,t,n){return t===I?me(function(e,t){var n=d(e),r=A(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var u=x();(u||!u&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+D(e),y:f}}(e,n)):m(t)?function(e,t){var n=O(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):me(function(e){var t,n=A(e),r=E(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=y(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=y(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+D(e),f=-r.scrollTop;return"rtl"===k(o||n).direction&&(s+=y(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(A(e)))}function ve(e,t,n,r){var o="clippingParents"===t?function(e){var t=L(R(e)),n=["absolute","fixed"].indexOf(k(e).position)>=0&&h(e)?C(e):e;return m(n)?t.filter((function(e){return m(e)&&de(e,n)&&"body"!==j(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=he(e,n,r);return t.top=y(o.top,t.top),t.right=g(o.right,t.right),t.bottom=g(o.bottom,t.bottom),t.left=y(o.left,t.left),t}),he(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ye(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ge(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function be(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,f=void 0===s?"clippingParents":s,u=n.rootBoundary,c=void 0===u?I:u,p=n.elementContext,l=void 0===p?X:p,d=n.altBoundary,h=void 0!==d&&d,v=n.padding,y=void 0===v?0:v,g=ye("number"!==typeof y?y:ge(y,F)),b=l===X?"reference":X,w=e.rects.popper,x=e.elements[h?b:l],E=ve(m(x)?x:x.contextElement||A(e.elements.popper),f,c,a),j=O(e.elements.reference),D=ie({reference:j,element:w,strategy:"absolute",placement:o}),k=me(Object.assign({},w,D)),P=l===X?k:j,M={top:E.top-P.top+g.top,bottom:P.bottom-E.bottom+g.bottom,left:E.left-P.left+g.left,right:P.right-E.right+g.right},S=e.modifiersData.offset;if(l===X&&S){var R=S[o];Object.keys(M).forEach((function(e){var t=[V,U].indexOf(e)>=0?1:-1,n=[T,U].indexOf(e)>=0?"y":"x";M[e]+=R[n]*t}))}return M}function we(e,t,n){return y(e,g(t,n))}var xe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,u=n.rootBoundary,c=n.altBoundary,p=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,h=void 0===m?0:m,v=be(t,{boundary:f,rootBoundary:u,padding:p,altBoundary:c}),b=ne(t.placement),w=re(t.placement),x=!w,O=oe(b),E="x"===O?"y":"x",j=t.modifiersData.popperOffsets,A=t.rects.reference,D=t.rects.popper,k="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,P="number"===typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(j){if(i){var B,L="y"===O?T:_,W="y"===O?U:V,H="y"===O?"height":"width",q=j[O],F=q+v[L],z=q-v[W],I=d?-D[H]/2:0,X=w===N?A[H]:D[H],Y=w===N?-D[H]:-A[H],$=t.elements.arrow,G=d&&$?S($):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=J[L],Q=J[W],Z=we(0,A[H],G[H]),ee=x?A[H]/2-I-Z-K-P.mainAxis:X-Z-K-P.mainAxis,te=x?-A[H]/2+I+Z+Q+P.mainAxis:Y+Z+Q+P.mainAxis,ie=t.elements.arrow&&C(t.elements.arrow),ae=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(B=null==M?void 0:M[O])?B:0,fe=q+te-se,ue=we(d?g(F,q+ee-se-ae):F,q,d?y(z,fe):z);j[O]=ue,R[O]=ue-q}if(s){var ce,pe="x"===O?T:_,le="x"===O?U:V,de=j[E],me="y"===E?"height":"width",he=de+v[pe],ve=de-v[le],ye=-1!==[T,_].indexOf(b),ge=null!=(ce=null==M?void 0:M[E])?ce:0,xe=ye?he:de-A[me]-D[me]-ge+P.altAxis,Oe=ye?de+A[me]+D[me]-ge-P.altAxis:ve,Ee=d&&ye?function(e,t,n){var r=we(e,t,n);return r>n?n:r}(xe,de,Oe):we(d?xe:he,de,d?Oe:ve);j[E]=Ee,R[E]=Ee-de}t.modifiersData[r]=R}},requiresIfExists:["offset"]};var Oe={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=ne(n.placement),f=oe(s),u=[_,V].indexOf(s)>=0?"height":"width";if(i&&a){var c=function(e,t){return ye("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ge(e,F))}(o.padding,n),p=S(i),l="y"===f?T:_,d="y"===f?U:V,m=n.rects.reference[u]+n.rects.reference[f]-a[f]-n.rects.popper[u],h=a[f]-n.rects.reference[f],v=C(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,g=m/2-h/2,b=c[l],w=y-p[u]-c[d],x=y/2-p[u]/2+g,O=we(b,x,w),E=f;n.modifiersData[r]=((t={})[E]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&de(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ee(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function je(e){return[T,V,U,_].some((function(t){return e[t]>=0}))}var Ae=ee({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=d(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,te)})),s&&f.addEventListener("resize",n.update,te),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,te)})),s&&f.removeEventListener("resize",n.update,te)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ie({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,u={placement:ne(t.placement),variation:re(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,se(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,se(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];h(o)&&j(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});h(r)&&j(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},fe,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,u=n.padding,c=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=ne(v),g=f||(y===v||!m?[ce(v)]:function(e){if(ne(e)===q)return[];var t=ce(e);return[le(e),t,le(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(ne(n)===q?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,u=void 0===f?$:f,c=re(r),p=c?s?Y:Y.filter((function(e){return re(e)===c})):F,l=p.filter((function(e){return u.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,n){return t[n]=be(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[ne(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:c,rootBoundary:p,padding:u,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,j=b[0],A=0;A<b.length;A++){var D=b[A],k=ne(D),P=re(D)===N,M=[T,U].indexOf(k)>=0,S=M?"width":"height",R=be(t,{placement:D,boundary:c,rootBoundary:p,altBoundary:l,padding:u}),B=M?P?V:_:P?U:T;w[S]>x[S]&&(B=ce(B));var L=ce(B),W=[];if(i&&W.push(R[k]<=0),s&&W.push(R[B]<=0,R[L]<=0),W.every((function(e){return e}))){j=D,E=!1;break}O.set(D,W)}if(E)for(var H=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},C=m?3:1;C>0;C--){if("break"===H(C))break}t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},xe,Oe,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=be(t,{elementContext:"reference"}),s=be(t,{altBoundary:!0}),f=Ee(a,r),u=Ee(s,o,i),c=je(f),p=je(u);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":p})}}]}),De=n(8435),ke=n.n(De),Pe=[],Me=function(e,t,n){void 0===n&&(n={});var o=r.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Pe},a=r.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],f=a[1],u=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);l.flushSync((function(){f({styles:c(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:c(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),d=r.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return ke()(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),m=r.useRef();return p((function(){m.current&&m.current.setOptions(d)}),[d]),p((function(){if(null!=e&&null!=t){var r=(n.createPopper||Ae)(e,t,d);return m.current=r,function(){r.destroy(),m.current=null}}}),[e,t,n.createPopper]),{state:m.current?m.current.state:null,styles:s.styles,attributes:s.attributes,update:m.current?m.current.update:null,forceUpdate:m.current?m.current.forceUpdate:null}},Se=function(){},Re=function(){return Promise.resolve(null)},Be=[];function Le(e){var t=e.placement,n=void 0===t?"bottom":t,i=e.strategy,a=void 0===i?"absolute":i,f=e.modifiers,c=void 0===f?Be:f,p=e.referenceElement,l=e.onFirstUpdate,d=e.innerRef,m=e.children,h=r.useContext(o),v=r.useState(null),y=v[0],g=v[1],b=r.useState(null),w=b[0],x=b[1];r.useEffect((function(){u(d,y)}),[d,y]);var O=r.useMemo((function(){return{placement:n,strategy:a,onFirstUpdate:l,modifiers:[].concat(c,[{name:"arrow",enabled:null!=w,options:{element:w}}])}}),[n,a,l,c,w]),E=Me(p||h,y,O),j=E.state,A=E.styles,D=E.forceUpdate,k=E.update,P=r.useMemo((function(){return{ref:g,style:A.popper,placement:j?j.placement:n,hasPopperEscaped:j&&j.modifiersData.hide?j.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:j&&j.modifiersData.hide?j.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:A.arrow,ref:x},forceUpdate:D||Se,update:k||Re}}),[g,x,n,j,A,k,D]);return s(m)(P)}var We=n(5982),He=n.n(We);function Ce(e){var t=e.children,n=e.innerRef,o=r.useContext(i),a=r.useCallback((function(e){u(n,e),f(o,e)}),[n,o]);return r.useEffect((function(){return function(){return u(n,null)}}),[]),r.useEffect((function(){He()(Boolean(o),"`Reference` should not be used outside of a `Manager` component.")}),[o]),s(t)({ref:a})}},5982:function(e){"use strict";var t=function(){};e.exports=t}}]);