(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{1059:function(e,t,n){"use strict";var r=n(2322),o=n(3980),l=n.n(o),i=n(5854),a=n.n(i),u=function(e){var t=e.title,n=e.subtitle,o=e.children;return(0,r.jsx)("div",{className:a().Page,children:(0,r.jsxs)("div",{className:a().PageContent,children:[(0,r.jsx)("h1",{className:a().PageHeading,children:t}),(0,r.jsx)("p",{className:a().PageSubcopy,children:n}),o&&(0,r.jsx)("div",{children:o})]})})};u.propTypes={title:l().string.isRequired,subtitle:l().string.isRequired,children:l().node},t.Z=u},1653:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6385).default,o=n(616).Z,l=n(416).Z,i=n(3583).Z,a=n(237).Z,u=n(717).default,c=n(9788).Z,s=n(9178).default,f=n(7858).Z,d=n(8427).Z;("undefined"===typeof globalThis?"undefined":s(globalThis))<"u"?globalThis:window;var _,p,h,v,b,y,m,g={exports:{}},C={},k=[],w=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function E(e,t){for(var n in t)e[n]=t[n];return e}function P(e){var t=e.parentNode;t&&t.removeChild(e)}function O(e,t,n){var r,o,l,i={};for(l in t)"key"==l?r=t[l]:"ref"==l?o=t[l]:i[l]=t[l];if(arguments.length>2&&(i.children=arguments.length>3?_.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===i[l]&&(i[l]=e.defaultProps[l]);return T(e,i,r,o,null)}function T(e,t,n,r,o){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++h:o};return null==o&&null!=p.vnode&&p.vnode(l),l}function x(e){return e.children}function A(e,t){this.props=e,this.context=t}function S(e,t){if(null==t)return e.__?S(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?S(e):null}function j(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return j(e)}}function M(e){(!e.__d&&(e.__d=!0)&&b.push(e)&&!N.__r++||y!==p.debounceRendering)&&((y=p.debounceRendering)||setTimeout)(N)}function N(){for(var e;N.__r=b.length;)e=b.sort((function(e,t){return e.__v.__b-t.__v.__b})),b=[],e.some((function(e){var t,n,r,o,l,i;e.__d&&(l=(o=(t=e).__v).__e,(i=t.__P)&&(n=[],(r=E({},o)).__v=o.__v+1,F(i,o,r,t.__n,void 0!==i.ownerSVGElement,null!=o.__h?[l]:null,n,null==l?S(o):l,o.__h),z(n,o),o.__e!=l&&j(o)))}))}function D(e,t,n,r,o,l,i,a,u,c){var f,d,_,p,h,v,b,y=r&&r.__k||k,m=y.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(p=n.__k[f]=null==(p=t[f])||"boolean"==typeof p?null:"string"==typeof p||"number"==typeof p||"bigint"==("undefined"===typeof p?"undefined":s(p))?T(null,p,null,null,p):Array.isArray(p)?T(x,{children:p},null,null,null):p.__b>0?T(p.type,p.props,p.key,p.ref?p.ref:null,p.__v):p)){if(p.__=n,p.__b=n.__b+1,null===(_=y[f])||_&&p.key==_.key&&p.type===_.type)y[f]=void 0;else for(d=0;d<m;d++){if((_=y[d])&&p.key==_.key&&p.type===_.type){y[d]=void 0;break}_=null}F(e,p,_=_||C,o,l,i,a,u,c),h=p.__e,(d=p.ref)&&_.ref!=d&&(b||(b=[]),_.ref&&b.push(_.ref,null,p),b.push(d,p.__c||h,p)),null!=h?(null==v&&(v=h),"function"==typeof p.type&&p.__k===_.__k?p.__d=u=R(p,u,e):u=I(e,p,_,y,h,u),"function"==typeof n.type&&(n.__d=u)):u&&_.__e==u&&u.parentNode!=e&&(u=S(_))}for(n.__e=v,f=m;f--;)null!=y[f]&&q(y[f],y[f]);if(b)for(f=0;f<b.length;f++)W(b[f],b[++f],b[++f])}function R(e,t,n){for(var r,o=e.__k,l=0;o&&l<o.length;l++)(r=o[l])&&(r.__=e,t="function"==typeof r.type?R(r,t,n):I(n,r,r,o,r.__e,t));return t}function I(e,t,n,r,o,l){var i,a,u;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(null==n||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),i=null;else{for(a=l,u=0;(a=a.nextSibling)&&u<r.length;u+=1)if(a==o)break e;e.insertBefore(o,l),i=l}return void 0!==i?i:o.nextSibling}function L(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||w.test(t)?n:n+"px"}function H(e,t,n,r,o){var l;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||L(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||L(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=n,n?r||e.addEventListener(t,l?U:B,l):e.removeEventListener(t,l?U:B,l);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(i){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function B(e){this.l[e.type+!1](p.event?p.event(e):e)}function U(e){this.l[e.type+!0](p.event?p.event(e):e)}function F(e,t,n,r,o,l,i,a,u){var c,s,f,d,h,v,b,y,m,g,k,w,O,T,j,M=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(u=n.__h,a=t.__e=n.__e,t.__h=null,l=[a]),(c=p.__b)&&c(t);try{e:if("function"==typeof M){if(y=t.props,m=(c=M.contextType)&&r[c.__c],g=c?m?m.props.value:c.__:r,n.__c?b=(s=t.__c=n.__c).__=s.__E:("prototype"in M&&M.prototype.render?t.__c=s=new M(y,g):(t.__c=s=new A(y,g),s.constructor=M,s.render=Z),m&&m.sub(s),s.props=y,s.state||(s.state={}),s.context=g,s.__n=r,f=s.__d=!0,s.__h=[],s._sb=[]),null==s.__s&&(s.__s=s.state),null!=M.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=E({},s.__s)),E(s.__s,M.getDerivedStateFromProps(y,s.__s))),d=s.props,h=s.state,f)null==M.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==M.getDerivedStateFromProps&&y!==d&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(y,g),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(y,s.__s,g)||t.__v===n.__v){for(s.props=y,s.state=s.__s,t.__v!==n.__v&&(s.__d=!1),s.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),k=0;k<s._sb.length;k++)s.__h.push(s._sb[k]);s._sb=[],s.__h.length&&i.push(s);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(y,s.__s,g),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(d,h,v)}))}if(s.context=g,s.props=y,s.__v=t,s.__P=e,w=p.__r,O=0,"prototype"in M&&M.prototype.render){for(s.state=s.__s,s.__d=!1,w&&w(t),c=s.render(s.props,s.state,s.context),T=0;T<s._sb.length;T++)s.__h.push(s._sb[T]);s._sb=[]}else do{s.__d=!1,w&&w(t),c=s.render(s.props,s.state,s.context),s.state=s.__s}while(s.__d&&++O<25);s.state=s.__s,null!=s.getChildContext&&(r=E(E({},r),s.getChildContext())),f||null==s.getSnapshotBeforeUpdate||(v=s.getSnapshotBeforeUpdate(d,h)),j=null!=c&&c.type===x&&null==c.key?c.props.children:c,D(e,Array.isArray(j)?j:[j],t,n,r,o,l,i,a,u),s.base=t.__e,t.__h=null,s.__h.length&&i.push(s),b&&(s.__E=s.__=null),s.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,r,o,l,i,a){var u,c,s,f=n.props,d=t.props,p=t.type,h=0;if("svg"===p&&(o=!0),null!=l)for(;h<l.length;h++)if((u=l[h])&&"setAttribute"in u==!!p&&(p?u.localName===p:3===u.nodeType)){e=u,l[h]=null;break}if(null==e){if(null===p)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,d.is&&d),l=null,a=!1}if(null===p)f===d||a&&e.data===d||(e.data=d);else{if(l=l&&_.call(e.childNodes),c=(f=n.props||C).dangerouslySetInnerHTML,s=d.dangerouslySetInnerHTML,!a){if(null!=l)for(f={},h=0;h<e.attributes.length;h++)f[e.attributes[h].name]=e.attributes[h].value;(s||c)&&(s&&(c&&s.__html==c.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(function(e,t,n,r,o){var l;for(l in n)"children"===l||"key"===l||l in t||H(e,l,null,n[l],r);for(l in t)o&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||H(e,l,t[l],n[l],r)}(e,d,f,o,a),s)t.__k=[];else if(h=t.props.children,D(e,Array.isArray(h)?h:[h],t,n,r,o&&"foreignObject"!==p,l,i,l?l[0]:n.__k&&S(n,0),a),null!=l)for(h=l.length;h--;)null!=l[h]&&P(l[h]);a||("value"in d&&void 0!==(h=d.value)&&(h!==e.value||"progress"===p&&!h||"option"===p&&h!==f.value)&&H(e,"value",h,f.value,!1),"checked"in d&&void 0!==(h=d.checked)&&h!==e.checked&&H(e,"checked",h,f.checked,!1))}return e}(n.__e,t,n,r,o,l,i,u);(c=p.diffed)&&c(t)}catch(N){t.__v=null,(u||null!=l)&&(t.__e=a,t.__h=!!u,l[l.indexOf(a)]=null),p.__e(N,t,n)}}function z(e,t){p.__c&&p.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(n){p.__e(n,t.__v)}}))}function W(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(r){p.__e(r,n)}}function q(e,t,n){var r,o;if(p.unmount&&p.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||W(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(l){p.__e(l,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&q(r[o],t,n||"function"!=typeof e.type);n||null==e.__e||P(e.__e),e.__=e.__e=e.__d=void 0}function Z(e,t,n){return this.constructor(e,n)}function J(e,t,n){var r,o,l;p.__&&p.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,l=[],F(t,e=(!r&&n||t).__k=O(x,null,[e]),o||C,C,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?_.call(t.childNodes):null,l,!r&&n?n:o?o.__e:t.firstChild,r),z(l,e)}_=k.slice,p={__e:function(e,t,n,r){for(var o,l,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((l=o.constructor)&&null!=l.getDerivedStateFromError&&(o.setState(l.getDerivedStateFromError(e)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(a){e=a}throw e}},h=0,v=function(e){return null!=e&&void 0===e.constructor},A.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=E({},this.state),"function"==typeof e&&(e=e(E({},n),this.props)),e&&E(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),M(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),M(this))},A.prototype.render=x,b=[],N.__r=0,m=0;var K=Object.freeze(Object.defineProperty({__proto__:null,Component:A,Fragment:x,cloneElement:function(e,t,n){var r,o,l,i=E({},e.props);for(l in t)"key"==l?r=t[l]:"ref"==l?o=t[l]:i[l]=t[l];return arguments.length>2&&(i.children=arguments.length>3?_.call(arguments,2):n),T(e.type,i,r||e.key,o||e.ref,null)},createContext:function(e,t){var n={__c:t="__cC"+m++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(M)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n},createElement:O,createRef:function(){return{current:null}},h:O,hydrate:function e(t,n){J(t,n,e)},get isValidElement(){return v},get options(){return p},render:J,toChildArray:function e(t,n){return n=n||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){e(t,n)})):n.push(t)),n}},Symbol.toStringTag,{value:"Module"})),V=function(e){var t=e.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}(K);g.exports=function(){var e={470:function(e,t,n){var r,o,l=function(e){var t=this.tagName,n=this.__options.formatProps,o={};try{o=JSON.parse(e)}catch(l){console.error(r.Json,": <".concat(t.toLowerCase(),">"))}return n&&(o=n(o)),o},i=function(e){var t,n="<!DOCTYPE html>\n<html><body>".concat(e,"</body></html>");try{t=(new DOMParser).parseFromString(n,"text/html")}catch(r){}if(t)return t.body},a=function(e){var t={};if(null==e||!e.length)return t;for(var n=e.length-1;n>=0;n--){var r=e[n];t[r.name]=r.value}return t},u=function(e,t){var n=a(e),r={},o=!0,l=!1,i=void 0;try{for(var u,s=Object.keys(n)[Symbol.iterator]();!(o=(u=s.next()).done);o=!0){var f=u.value;-1!==(null==t?void 0:t.indexOf(f))&&(r[c(f)]=n[f])}}catch(d){l=!0,i=d}finally{try{o||null==s.return||s.return()}finally{if(l)throw i}}return r},c=function(e){var t=e.trim().replace(/[\s_]/g,"-");return t.charAt(0).toLowerCase()+t.slice(1).replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))},s=function(e,t){return e.then((function(e){return function(e,t){var n,r;return"function"==typeof e?e:("object"==typeof e&&(n=e[(r=t,(r=r.toLowerCase()).replace(/(^\w|-\w)/g,(function(e){return e.replace(/-/,"").toUpperCase()})))]||void 0),n)}(e,t)}))},f=function(e){var t=e.toLowerCase();return t.indexOf("-")<0&&(t="component-"+t),t},d=function(){var e=this.__options.attributes,t=void 0===e?[]:e;return this.hasAttributes()?u(this.attributes,t):{}};n.r(t),n.d(t,{ErrorTypes:function(){return r},getAsyncComponent:function(){return s},getAttributeObject:function(){return a},getAttributeProps:function(){return u},getDocument:function(){return i},getElementAttributes:function(){return d},getElementTag:function(){return f},getPropKey:function(){return c},isPromise:function(){return _},parseJson:function(){return l},selfClosingTags:function(){return p}}),(o=r||(r={})).Promise="Error: Promises cannot be used for SSR",o.Missing="Error: Cannot find component in provided function",o.Json="Error: Invalid JSON string passed to component";var _=function(e){return e&&"function"==typeof e.then},p=["area","base","br","col","hr","img","input","link","meta","source","embed","param","track","wbr"]},710:function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.parseHtml=void 0;var o=n(108),l=n(470);function i(e){var t,n=this;if(3===e.nodeType)return(null===(t=e.textContent)||void 0===t?void 0:t.trim())||"";if(1!==e.nodeType)return null;var a,u=String(e.nodeName).toLowerCase(),c=Array.from(e.childNodes),s=function(){return c.map((function(e){return i.call(n,e)}))},f=(0,l.getAttributeObject)(e.attributes),d=f.slot,_=r(f,["slot"]);return"script"===u?null:"body"===u?(0,o.h)(o.Fragment,{},s()):l.selfClosingTags.includes(u)?(0,o.h)(u,_):d?(this.__slots[(0,l.getPropKey)(d)]=(a=s()).every((function(e){return"string"==typeof e}))?a.join(" "):(0,o.h)(o.Fragment,{},a),null):(0,o.h)(u,_,s())}t.parseHtml=function(){var e=(0,l.getDocument)(this.innerHTML);if(e){var t=i.call(this,e);return function(){return t}}}},108:function(e){e.exports=V}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r].call(l.exports,l,l.exports,n),l.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){("undefined"===typeof Symbol?"undefined":s(Symbol))<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){var e=function(){var e=this,t=v.getElementAttributes.call(this),n=this.getAttribute("props"),r=this.querySelector('[type="application/json"]'),o=v.parseJson.call(this,n||(null==r?void 0:r.innerHTML)||"{}");null==r||r.remove();var l=this.__children;this.__mounted||this.hasAttribute("server")||(l=(0,h.h)(b.parseHtml.call(this),{})),this.__properties=Object.assign(Object.assign(Object.assign({},this.__slots),o),t),this.__children=l||[],this.removeAttribute("server"),this.innerHTML="";var i=this.__component(),a=function(t){return _.call(e,t)};(0,v.isPromise)(i)?(0,v.getAsyncComponent)(i,this.tagName).then(a):a(i)},t=function(e,t,n){if(this.__mounted){n=null==n?void 0:n;var r=this.__properties;"props"===e?r=Object.assign(Object.assign({},r),v.parseJson.call(this,n)):r[(0,v.getPropKey)(e)]=n,this.__properties=r,(0,h.render)((0,h.h)(this.__instance,Object.assign(Object.assign({},r),{parent:this,children:this.__children})),this)}},a=function(){(0,h.render)(null,this)},_=function(e){var t=this.tagName,n=this.__options.wrapComponent;if(e){n&&(e=n(e)),this.__instance=e,this.__mounted=!0;var r=Object.assign(Object.assign({},this.__properties),{parent:this,children:this.__children});(0,h.render)((0,h.h)(e,r),this)}else console.error(v.ErrorTypes.Missing,": <".concat(t.toLowerCase(),">"))},p=r;Object.defineProperty(p,"__esModule",{value:!0}),p.define=void 0;var h=n(108),v=n(470),b=n(710);p.define=function(n,r){var _=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},p=_.wrapComponent,b=!1,y=(0,v.getElementTag)(n);if(b){var m=r();if((0,v.isPromise)(m))throw new Error("".concat(v.ErrorTypes.Promise," : <").concat(n,">"));var g=m;return p&&(g=p(m)),function(e){return(0,h.h)(y,{server:!0},[(0,h.h)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)}}),(0,h.h)(g,e)])}}customElements.define(y,function(n){var r,_=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=_.attributes,h=void 0===p?[]:p;if(("undefined"===typeof Reflect?"undefined":s(Reflect))<"u"&&Reflect.construct){var v=function(){var e=Reflect.construct(HTMLElement,[],v);return e.__mounted=!1,e.__component=n,e.__properties={},e.__slots={},e.__children=void 0,e.__options=_,e};return v.observedAttributes=["props"].concat(c(h)),v.prototype=Object.create(HTMLElement.prototype),v.prototype.constructor=v,v.prototype.connectedCallback=e,v.prototype.attributeChangedCallback=t,v.prototype.disconnectedCallback=a,v}return r=function(r){i(f,r);var s=d(f);function f(){var e;return o(this,f),(e=s.call.apply(s,[this].concat(Array.prototype.slice.call(arguments)))).__mounted=!1,e.__component=n,e.__properties={},e.__slots={},e.__children=void 0,e.__options=_,u(e)}return l(f,[{key:"connectedCallback",value:function(){e.call(this)}},{key:"attributeChangedCallback",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o;(o=t).call.apply(o,[this].concat(c(n)))}},{key:"disconnectedCallback",value:function(){a.call(this)}}]),f}(f(HTMLElement)),r.observedAttributes=["props"].concat(c(h)),r}(r,_))}}(),r}();var $,G=customElements,Q=HTMLElement,X=Q.prototype,Y=X.hasAttribute,ee=X.setAttribute,te=X.removeAttribute,ne=X.getAttribute,re=Reflect.apply,oe=Reflect.setPrototypeOf,le=Reflect.construct,ie=Object.defineProperties,ae=CustomElementRegistry.prototype,ue=ae.get,ce=ae.define,se=ae.whenDefined,fe=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected").get;function de(e,t){return new Set(c(e.observedAttributes).filter((function(e){return!t.observedAttributes.has(e)})))}function _e(e,t,n){var r=n.observedAttributes,o=n.attributeChangedCallback;if(0!==r.size&&o){var l=de(t,n);0!==l.size&&ie(e,{setAttribute:{value:function(e,t){if(l.has(e)){var n=ne.call(this,e);ee.call(this,e,t),o.call(this,e,n,function(e){try{return String(e)}catch(t){}return""}(t))}else ee.call(this,e,t)},writable:!0,enumerable:!0,configurable:!0},removeAttribute:{value:function(e){if(l.has(e)){var t=ne.call(this,e);te.call(this,e),o.call(this,e,t,null)}else te.call(this,e)},writable:!0,enumerable:!0,configurable:!0}})}}function pe(e,t){var n;return n=function(n){i(c,n);var a=d(c);function c(n,l){var i;return o(this,c),i=a.call(this),n?u(i,(Ee(r(i),e,n,l),r(i))):((n=me.get(t))?Ee(r(i),e,n):(ve.set(r(i),e),oe(r(i),Oe.prototype)),u(i))}return l(c,[{key:"connectedCallback",value:function(){var e,n=he.get(this);if(n)null==(e=n.connectedCallback)||e.call(this);else{var r=we.get(t);r||we.set(t,r=new Set),r.add(this)}}},{key:"disconnectedCallback",value:function(){var e,n=he.get(this);if(n)null==(e=n.disconnectedCallback)||e.call(this);else{var r=we.get(t);r&&r.delete(this)}}},{key:"adoptedCallback",value:function(){var e,t=he.get(this);null==(e=null==t?void 0:t.adoptedCallback)||e.call(this)}},{key:"formAssociatedCallback",value:function(){var e,t=he.get(this);null==(e=null==t?void 0:t.formAssociatedCallback)||e.apply(this,arguments)}},{key:"formDisabledCallback",value:function(){var e,t=he.get(this);null==(e=null==t?void 0:t.formDisabledCallback)||e.apply(this,arguments)}},{key:"formResetCallback",value:function(){var e,t=he.get(this);null==(e=null==t?void 0:t.formResetCallback)||e.apply(this,arguments)}},{key:"formStateRestoreCallback",value:function(){var e,t=he.get(this);null==(e=null==t?void 0:t.formStateRestoreCallback)||e.apply(this,arguments)}},{key:"attributeChangedCallback",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o,l=he.get(this);(e===l||(null==l?void 0:l.observedAttributes.has(n[0])))&&(null==(o=l.attributeChangedCallback)||o.apply(this,n))}}]),c}(Q),n.observedAttributes=e.observedAttributes,n}var he=new WeakMap,ve=new WeakMap,be=new WeakMap,ye=new Map,me=new Map,ge=new Map,Ce=new Map,ke=new Map,we=new Map;function Ee(e,t,n,r){var o;oe(e,n.LatestCtor.prototype),he.set(e,n),n!==t&&_e(e,t,n),$=e,le(n.LatestCtor,r||[]);var l=n.observedAttributes,i=n.attributeChangedCallback;if(l.size>0&&i){var a=de(t,n);a.size>0&&a.forEach((function(t){if(Y.call(e,t)){var n=ne.call(e,t);i.call(e,t,null,n)}}))}re(fe,e,[])&&(null==(o=n.disconnectedCallback)||o.call(e))}function Pe(e){if(!e||!e.prototype||"object"!=typeof e.prototype)throw new TypeError("The referenced constructor is not a constructor.");var t=be.get(e);return t||(t=function(e){var t=e.prototype,n=t.connectedCallback,r=t.disconnectedCallback,o=t.adoptedCallback,l=t.attributeChangedCallback;return{LatestCtor:e,connectedCallback:n,disconnectedCallback:r,adoptedCallback:o,formAssociatedCallback:t.formAssociatedCallback,formDisabledCallback:t.formDisabledCallback,formResetCallback:t.formResetCallback,formStateRestoreCallback:t.formStateRestoreCallback,attributeChangedCallback:l,observedAttributes:new Set(e.observedAttributes||[])}}(e),be.set(e,t)),t}var Oe=function e(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!(a(this,e)?this.constructor:void 0))throw new TypeError("Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");if((a(this,e)?this.constructor:void 0)===Oe)throw new TypeError("Illegal constructor");var o=$;if(o)return $=void 0,o;var l=this,i=l.constructor,u=ge.get(i);if(!u||!u.PivotCtor)throw new TypeError("Illegal constructor");return new u.PivotCtor(u,n)};Oe.prototype=Q.prototype,Object.assign(CustomElementRegistry.prototype,{get:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r;if(this!==G)throw new TypeError("Illegal invocation");var o=t[0];return re(ue,this,t)&&(null==(r=me.get(o))?void 0:r.LatestCtor)},define:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r;if(this!==G)throw new TypeError("Illegal invocation");var o=t[0],l=t[1],i=t[2];if(i&&i.extends)throw new DOMException("NotSupportedError: ");var a=re(ue,this,[o]);if(a&&a!==(null==(r=me.get(o))?void 0:r.PivotCtor))throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': the name \"".concat(o,'" has already been used with this registry'));var u=Pe(l);if(ge.get(l))throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': this constructor has already been used with this registry");me.set(o,u),ge.set(l,u),(a=ye.get(o))||(a=pe(u,o),ye.set(o,a),re(ce,this,[o,a])),u.PivotCtor=a;var c=we.get(o);c&&(we.delete(o),c.forEach((function(e){var t=ve.get(e);t&&(ve.delete(e),Ee(e,t,u))})));var s=ke.get(o);s&&s(l)},whenDefined:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(this!==G)throw new TypeError("Illegal invocation");var r=t[0];return re(se,this,t).then((function(){var e=Ce.get(r);if(!e){var t,n=me.get(r);if(n)return Promise.resolve(n.LatestCtor);e=new Promise((function(e){t=e})),Ce.set(r,e),ke.set(r,t)}return e}))},constructor:Oe}),window.HTMLElement=Oe;var Te=0;function xe(e,t,n,r,o){var l,i,a={};for(i in t)"ref"==i?l=t[i]:a[i]=t[i];var u={type:e,props:a,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Te,__source:o,__self:r};if("function"==typeof e&&(l=e.defaultProps))for(i in l)void 0===a[i]&&(a[i]=l[i]);return p.vnode&&p.vnode(u),u}var Ae=function(e){var t=e.align,n=void 0===t?"center":t,r=e.disabled,o=void 0===r?void 0:r,l=e.htmlId,i=void 0===l?void 0:l,a=e.label,u=void 0===a?"":a,c=e.leadingIcon,s=void 0===c?null:c,f=e.size,d=void 0===f?"default":f,_=e.theme,p=void 0===_?"default":_,h=e.trailingIcon,v=void 0===h?null:h,b=e.type,y=void 0===b?"button":b;return xe(x,{children:xe("button",{className:"BasicButton BasicButton--".concat(p," BasicButton--size-").concat(d," BasicButton--align-").concat(n),type:y,htmlId:i,disabled:o,size:d,children:[s&&xe("span",{className:"leadingIcon",children:s}),u,v&&xe("span",{className:"trailingIcon",children:v})]})})};g.exports.define("atlas-basic-button",(function(){return Ae}),{attributes:["align","disabled","htmlId","label","size","theme","type"]})},1395:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{BasicButton:function(){return c},DialogBox:function(){return p},Drawer:function(){return w},IconButton:function(){return _},buttonVariants:function(){return u}});var r=n(3903).Z,o=n(199).Z,l=n(9178).default,i=o(n(2784)),a=r(n(3980)),u=["default","secondary","tertiary","ghost","destructive"];function c(e){var t=e.label,r=e.htmlId,l=e.onClick,a=e.align,u=void 0===a?"center":a,c=e.disabled,s=void 0===c?void 0:c,f=e.htmlType,d=void 0===f?"button":f,_=e.leadingIcon,p=void 0===_?null:_,h=e.size,v=void 0===h?"default":h,b=e.trailingIcon,y=void 0===b?null:b,m=e.type,g=void 0===m?"default":m;return null!==globalThis&&void 0!==globalThis&&globalThis.customElements&&Promise.resolve().then((function(){return o(n(1653))})),i.default.createElement("atlas-basic-button",{key:"".concat(t,"-").concat(r,"-").concat(l,"-").concat(u,"-").concat(s,"-").concat(d,"-").concat(p,"-").concat(v,"-").concat(y,"-").concat(g),align:u,disabled:s,htmlId:r,label:t,size:v,theme:g,type:d,onClick:l},p&&i.default.createElement("span",{slot:"leadingIcon"},p),y&&i.default.createElement("span",{slot:"trailingIcon"},y))}c.propTypes={align:a.default.oneOf(["left","center","right"]),disabled:a.default.bool,label:a.default.string.isRequired,htmlType:a.default.oneOf(["button","submit","reset"]),htmlId:a.default.string,type:a.default.oneOf(u),onClick:a.default.func,size:a.default.oneOf(["default","small","mini","full-width"]),trailingIcon:a.default.element,leadingIcon:a.default.element};var s,f={exports:{}};s=f,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i="undefined"===typeof o?"undefined":l(o);if("string"===i||"number"===i)n.push(o);else if(Array.isArray(o)){if(o.length){var a=t.apply(null,o);a&&n.push(a)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var u in o)e.call(o,u)&&o[u]&&n.push(u)}}}return n.join(" ")}s.exports?(t.default=t,s.exports=t):window.classNames=t}();var d=f.exports;function _(e){var t=e.faClass,n=e.onClick,r=e.isActive,o=d("fa",t),l=d("IconButton",{"is-active":r});return i.default.createElement("button",{className:l,onClick:n},i.default.createElement("i",{className:o}))}function p(e){var t=e.title,n=e.subtitle,r=e.children,o=e.visible,l=void 0!==o&&o,a=e.onCancel,u=e.onClose,s=(0,i.useRef)(null);return(0,i.useEffect)((function(){l&&s.current.showModal()}),[l]),i.default.createElement("dialog",{className:"ModalDialog",ref:s,onCancel:a,onClose:u},i.default.createElement(h,{title:t,subtitle:n,handleClose:function(){return s.current.close()}}),i.default.createElement("section",{className:"ModalDialog__body"},r),i.default.createElement(v,null,i.default.createElement(c,{type:"ghost",label:"Cancel",onClick:function(){return s.current.close()},htmlId:"dialogBoxCancel"}),i.default.createElement(c,{label:"Submit",htmlType:"submit",htmlForm:"aform"})))}function h(e){var t=e.title,n=e.subtitle,r=e.handleClose;return i.default.createElement("header",{className:"ModalDialog__header"},i.default.createElement("div",null,i.default.createElement("h1",{className:"ModalDialog__title"},t),i.default.createElement("p",{className:"ModalDialog__subtitle"},n)),i.default.createElement(_,{faClass:"fa-times",onClick:r}))}function v(e){return i.default.createElement("footer",{className:"ModalDialog__footer"},e.children)}_.propTypes={faClass:a.default.string.isRequired,onClick:a.default.func,isActive:a.default.bool},p.propTypes={title:a.default.string.isRequired,subtitle:a.default.string.isRequired,children:a.default.element,visible:a.default.bool,onCancel:a.default.func,onClose:a.default.func,customHeader:a.default.element,customFooter:a.default.element},h.propTypes={title:a.default.string.isRequired,subtitle:a.default.string.isRequired,handleClose:a.default.func.isRequired},v.propTypes={children:a.default.element};var b=function(e){var t=e.label,n=void 0===t?"Back":t,r=e.onClick,o=void 0===r?function(){}:r,l=d("Drawer__back");return i.default.createElement("div",{className:l},i.default.createElement(c,{label:n,type:"ghost",onClick:o,leadingIcon:i.default.createElement("i",{className:"fa fa-chevron-left"})}))};b.propTypes={label:a.default.string,onClick:a.default.func};var y=function(e){var t=e.children,n=d("Drawer__actions");return i.default.createElement("div",{className:n},t)};y.propTypes={children:a.default.node};var m=function(e){var t=e.children,n=d("Drawer__title");return i.default.createElement("h4",{className:n},t)};m.propTypes={children:a.default.node};var g=function(e){var t=e.children,n=d("Drawer__header");return i.default.createElement("div",{className:n},t)};g.propTypes={children:a.default.node};var C=function(e){var t=e.children,n=d("Drawer__body");return i.default.createElement("div",{className:n},t)};C.propTypes={children:a.default.node};var k=function(e){var t=e.children,n=d("Drawer__footer");return i.default.createElement("div",{className:n},t)};function w(e){var t=e.position,n=e.children,r=e.open,o=void 0!==r&&r,l=d("Drawer","Drawer--".concat(t));return o?i.default.createElement("div",{role:"dialog","aria-modal":"true",className:l},n):null}k.propTypes={children:a.default.node},w.Header=g,w.Body=C,w.Footer=k,w.Title=m,w.Actions=y,w.Back=b,w.propTypes={position:a.default.oneOf(["left","right","top","bottom"]).isRequired,open:a.default.bool,children:a.default.node}},5854:function(e){e.exports={Page:"PageContent_Page__KQX_Q",PageContent:"PageContent_PageContent__Hwrl_",PageHeading:"PageContent_PageHeading__H2sy3",PageSubcopy:"PageContent_PageSubcopy__Ux2Ic"}}}]);