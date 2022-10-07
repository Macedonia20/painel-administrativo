(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[870],{5684:function(e,r,t){"use strict";t.d(r,{qE:function(){return _}});var n=t(1604),a=t(9703),o=t(7294),l=t(4697);function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}function u(e){var r=e.loading,t=e.src,n=e.srcSet,a=e.onLoad,i=e.onError,c=e.crossOrigin,u=e.sizes,s=e.ignoreFallback,f=(0,o.useState)("pending"),d=f[0],m=f[1];(0,o.useEffect)((function(){m(t?"loading":"pending")}),[t]);var p=(0,o.useRef)(),v=(0,o.useCallback)((function(){if(t){g();var e=new Image;e.src=t,c&&(e.crossOrigin=c),n&&(e.srcset=n),u&&(e.sizes=u),r&&(e.loading=r),e.onload=function(e){g(),m("loaded"),null==a||a(e)},e.onerror=function(e){g(),m("failed"),null==i||i(e)},p.current=e}}),[t,c,n,u,a,i,r]),g=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,l.a)((function(){if(!s)return"loading"===d&&v(),function(){g()}}),[d,v,s]),s?"loaded":d}var s=["htmlWidth","htmlHeight","alt"],f=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=o.forwardRef((function(e,r){var t=e.htmlWidth,n=e.htmlHeight,a=e.alt,l=c(e,s);return o.createElement("img",i({width:t,height:n,ref:r,alt:a},l))})),m=(0,n.Gp)((function(e,r){var t=e.fallbackSrc,l=e.fallback,s=e.src,m=e.srcSet,p=e.align,v=e.fit,g=e.loading,h=e.ignoreFallback,b=e.crossOrigin,y=c(e,f),E=null!=g||h||void 0===t&&void 0===l,C=u(i({},e,{ignoreFallback:E})),k=i({ref:r,objectFit:v,objectPosition:p},E?y:(0,a.CE)(y,["onError","onLoad"]));return"loaded"!==C?l||o.createElement(n.m$.img,i({as:d,className:"chakra-image__placeholder",src:t},k)):o.createElement(n.m$.img,i({as:d,src:s,srcSet:m,crossOrigin:b,loading:g,className:"chakra-image"},k))}));a.Ts&&(m.displayName="Image");var p=t(6450);function v(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}function g(){return g=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},g.apply(this,arguments)}var h=["name","getInitials"],b=["src","srcSet","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],y=(0,n.Gp)((function(e,r){var t=g({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},(0,n.yK)().badge);return o.createElement(n.m$.div,g({ref:r},e,{className:(0,a.cx)("chakra-avatar__badge",e.className),__css:t}))}));function E(e){var r=e.split(" "),t=r[0],n=r[1];return t&&n?""+t.charAt(0)+n.charAt(0):t.charAt(0)}a.Ts&&(y.displayName="AvatarBadge");var C=function(e){var r=e.name,t=e.getInitials,a=v(e,h),l=(0,n.yK)();return o.createElement(n.m$.div,g({role:"img","aria-label":r},a,{__css:l.label}),r?null==t?void 0:t(r):null)},k=function(e){return o.createElement(n.m$.svg,g({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),o.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),o.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},w={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},_=(0,n.Gp)((function(e,r){var t=(0,n.jC)("Avatar",e),l=(0,n.Lr)(e),i=l.src,c=l.srcSet,u=l.name,s=l.showBorder,f=l.borderRadius,d=void 0===f?"full":f,m=l.onError,p=l.getInitials,h=void 0===p?E:p,y=l.icon,C=void 0===y?o.createElement(k,null):y,_=l.iconLabel,j=void 0===_?" avatar":_,x=l.loading,I=l.children,S=l.borderColor,N=l.ignoreFallback,L=v(l,b),A=g({borderRadius:d,borderWidth:s?"2px":void 0},w,t.container);return S&&(A.borderColor=S),o.createElement(n.m$.span,g({ref:r},L,{className:(0,a.cx)("chakra-avatar",e.className),__css:A}),o.createElement(n.Fo,{value:t},o.createElement(O,{src:i,srcSet:c,loading:x,onError:m,getInitials:h,name:u,borderRadius:d,icon:C,iconLabel:j,ignoreFallback:N}),I))}));a.Ts&&(_.displayName="Avatar");var O=function(e){var r=e.src,t=e.srcSet,a=e.onError,l=e.getInitials,i=e.name,c=e.borderRadius,s=e.loading,f=e.iconLabel,d=e.icon,m=void 0===d?o.createElement(k,null):d,p=u({src:r,onError:a,ignoreFallback:e.ignoreFallback});return!r||!("loaded"===p)?i?o.createElement(C,{className:"chakra-avatar__initials",getInitials:l,name:i}):o.cloneElement(m,{role:"img","aria-label":f}):o.createElement(n.m$.img,{src:r,srcSet:t,alt:i,className:"chakra-avatar__img",loading:s,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:c}})};a.Ts&&(O.displayName="AvatarImage");var j=["children","borderColor","max","spacing","borderRadius"],x=(0,n.Gp)((function(e,r){var t=(0,n.jC)("Avatar",e),l=(0,n.Lr)(e),i=l.children,c=l.borderColor,u=l.max,s=l.spacing,f=void 0===s?"-0.75rem":s,d=l.borderRadius,m=void 0===d?"full":d,h=v(l,j),b=(0,p.WR)(i),y=u?b.slice(0,u):b,E=null!=u&&b.length-u,C=y.reverse().map((function(r,t){var n,l={marginEnd:0===t?0:f,size:e.size,borderColor:null!=(n=r.props.borderColor)?n:c,showBorder:!0};return o.cloneElement(r,(0,a.YU)(l))})),k=g({borderRadius:m,marginStart:f},w,t.excessLabel);return o.createElement(n.m$.div,g({ref:r,role:"group",__css:{display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse"}},h,{className:(0,a.cx)("chakra-avatar__group",e.className)}),E>0&&o.createElement(n.m$.span,{className:"chakra-avatar__excess",__css:k},"+"+E),C)}));a.Ts&&(x.displayName="AvatarGroup")},1551:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(c){i=!0,a=c}finally{try{l||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o,l=(o=t(7294))&&o.__esModule?o:{default:o},i=t(1003),c=t(880),u=t(9246);var s={};function f(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=c.useRouter(),o=l.default.useMemo((function(){var r=a(i.resolveHref(n,e.href,!0),2),t=r[0],o=r[1];return{href:t,as:e.as?i.resolveHref(n,e.as):o||t}}),[n,e.href,e.as]),d=o.href,m=o.as,p=l.default.useRef(d),v=l.default.useRef(m),g=e.children,h=e.replace,b=e.shallow,y=e.scroll,E=e.locale;"string"===typeof g&&(g=l.default.createElement("a",null,g));var C=(r=l.default.Children.only(g))&&"object"===typeof r&&r.ref,k=a(u.useIntersection({rootMargin:"200px"}),3),w=k[0],_=k[1],O=k[2],j=l.default.useCallback((function(e){v.current===m&&p.current===d||(O(),v.current=m,p.current=d),w(e),C&&("function"===typeof C?C(e):"object"===typeof C&&(C.current=e))}),[m,C,d,O,w]);l.default.useEffect((function(){var e=_&&t&&i.isLocalURL(d),r="undefined"!==typeof E?E:n&&n.locale,a=s[d+"%"+m+(r?"%"+r:"")];e&&!a&&f(n,d,m,{locale:r})}),[m,d,_,E,t,n]);var x={ref:j,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,o,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),r[a?"replace":"push"](t,n,{shallow:o,locale:c,scroll:l}))}(e,n,d,m,h,b,y,E)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,m,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var I="undefined"!==typeof E?E:n&&n.locale,S=n&&n.isLocaleDomain&&i.getDomainLocale(m,I,n&&n.locales,n&&n.domainLocales);x.href=S||i.addBasePath(i.addLocale(m,I,n&&n.defaultLocale))}return l.default.cloneElement(r,x)};r.default=d,("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},9246:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(c){i=!0,a=c}finally{try{l||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!i,s=o.useRef(),f=a(o.useState(!1),2),d=f[0],m=f[1],p=a(o.useState(r?r.current:null),2),v=p[0],g=p[1],h=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=c.get(n):(r=c.get(t),u.push(t));if(r)return r;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(t,r={id:t,observer:o,elements:a}),r}(t),a=n.id,o=n.observer,l=n.elements;return l.set(e,r),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),c.delete(a);var r=u.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));r>-1&&u.splice(r,1)}}}(e,(function(e){return e&&m(e)}),{root:v,rootMargin:t}))}),[n,v,t,d]),b=o.useCallback((function(){m(!1)}),[]);return o.useEffect((function(){if(!i&&!d){var e=l.requestIdleCallback((function(){return m(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){r&&g(r.current)}),[r]),[h,d,b]};var o=t(7294),l=t(4686),i="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},1664:function(e,r,t){e.exports=t(1551)},1163:function(e,r,t){e.exports=t(880)},5177:function(e,r,t){"use strict";t.d(r,{w_:function(){return u}});var n=t(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),l=function(){return l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},l.apply(this,arguments)},i=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t};function c(e){return e&&e.map((function(e,r){return n.createElement(e.tag,l({key:r},e.attr),c(e.child))}))}function u(e){return function(r){return n.createElement(s,l({attr:l({},e.attr)},r),c(e.child))}}function s(e){var r=function(r){var t,a=e.attr,o=e.size,c=e.title,u=i(e,["attr","size","title"]),s=o||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,u,{className:t,style:l(l({color:e.color||r.color},r.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return r(e)})):r(a)}}}]);