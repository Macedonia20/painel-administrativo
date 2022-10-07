"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[249],{9762:function(e,r,a){a.d(r,{Kn:function(){return b},NI:function(){return h},Yp:function(){return N},lX:function(){return T}});var n=a(7375),t=a(1604),i=a(9703),l=a(6450),s=a(7294),o=a(894);function c(){return c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function d(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}var u=["id","isRequired","isInvalid","isDisabled","isReadOnly"],m=["getRootProps","htmlProps"],p=(0,l.kr)({strict:!1,name:"FormControlContext"}),f=p[0],v=p[1];var h=(0,t.Gp)((function(e,r){var a=(0,t.jC)("Form",e),o=function(e){var r=e.id,a=e.isRequired,t=e.isInvalid,o=e.isDisabled,m=e.isReadOnly,p=d(e,u),f=(0,n.Me)(),v=r||"field-"+f,h=v+"-label",g=v+"-feedback",y=v+"-helptext",x=s.useState(!1),N=x[0],b=x[1],_=s.useState(!1),E=_[0],k=_[1],T=(0,n.kt)(),I=T[0],w=T[1],C=s.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),c({id:y},e,{ref:(0,l.lq)(r,(function(e){e&&k(!0)}))})}),[y]),G=s.useCallback((function(e,r){var a,n;return void 0===e&&(e={}),void 0===r&&(r=null),c({},e,{ref:r,"data-focus":(0,i.PB)(I),"data-disabled":(0,i.PB)(o),"data-invalid":(0,i.PB)(t),"data-readonly":(0,i.PB)(m),id:null!=(a=e.id)?a:h,htmlFor:null!=(n=e.htmlFor)?n:v})}),[v,o,I,t,m,h]),R=s.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),c({id:g},e,{ref:(0,l.lq)(r,(function(e){e&&b(!0)})),"aria-live":"polite"})}),[g]),S=s.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),c({},e,p,{ref:r,role:"group"})}),[p]),L=s.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),c({},e,{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!t,isReadOnly:!!m,isDisabled:!!o,isFocused:!!I,onFocus:w.on,onBlur:w.off,hasFeedbackText:N,setHasFeedbackText:b,hasHelpText:E,setHasHelpText:k,id:v,labelId:h,feedbackId:g,helpTextId:y,htmlProps:p,getHelpTextProps:C,getErrorMessageProps:R,getRootProps:S,getLabelProps:G,getRequiredIndicatorProps:L}}((0,t.Lr)(e)),p=o.getRootProps;o.htmlProps;var v=d(o,m),h=(0,i.cx)("chakra-form-control",e.className);return s.createElement(f,{value:v},s.createElement(t.Fo,{value:a},s.createElement(t.m$.div,c({},p({},r),{className:h,__css:a.container}))))}));i.Ts&&(h.displayName="FormControl");var g=(0,t.Gp)((function(e,r){var a=v(),n=(0,t.yK)(),l=(0,i.cx)("chakra-form__helper-text",e.className);return s.createElement(t.m$.div,c({},null==a?void 0:a.getHelpTextProps(e,r),{__css:n.helperText,className:l}))}));i.Ts&&(g.displayName="FormHelperText");var y=["isDisabled","isInvalid","isReadOnly","isRequired"],x=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function N(e){var r=b(e),a=r.isDisabled,n=r.isInvalid,t=r.isReadOnly,l=r.isRequired;return c({},d(r,y),{disabled:a,readOnly:t,required:l,"aria-invalid":(0,i.Qm)(n),"aria-required":(0,i.Qm)(l),"aria-readonly":(0,i.Qm)(t)})}function b(e){var r,a,n,t=v(),l=e.id,s=e.disabled,o=e.readOnly,u=e.required,m=e.isRequired,p=e.isInvalid,f=e.isReadOnly,h=e.isDisabled,g=e.onFocus,y=e.onBlur,N=d(e,x),b=e["aria-describedby"]?[e["aria-describedby"]]:[];return null!=t&&t.hasFeedbackText&&null!=t&&t.isInvalid&&b.push(t.feedbackId),null!=t&&t.hasHelpText&&b.push(t.helpTextId),c({},N,{"aria-describedby":b.join(" ")||void 0,id:null!=l?l:null==t?void 0:t.id,isDisabled:null!=(r=null!=s?s:h)?r:null==t?void 0:t.isDisabled,isReadOnly:null!=(a=null!=o?o:f)?a:null==t?void 0:t.isReadOnly,isRequired:null!=(n=null!=u?u:m)?n:null==t?void 0:t.isRequired,isInvalid:null!=p?p:null==t?void 0:t.isInvalid,onFocus:(0,i.v0)(null==t?void 0:t.onFocus,g),onBlur:(0,i.v0)(null==t?void 0:t.onBlur,y)})}var _=(0,t.Gp)((function(e,r){var a=(0,t.jC)("FormError",e),n=(0,t.Lr)(e),l=v();return null!=l&&l.isInvalid?s.createElement(t.Fo,{value:a},s.createElement(t.m$.div,c({},null==l?void 0:l.getErrorMessageProps(n,r),{className:(0,i.cx)("chakra-form__error-message",e.className),__css:c({display:"flex",alignItems:"center"},a.text)}))):null}));i.Ts&&(_.displayName="FormErrorMessage");var E=(0,t.Gp)((function(e,r){var a=(0,t.yK)(),n=v();if(null==n||!n.isInvalid)return null;var l=(0,i.cx)("chakra-form__error-icon",e.className);return s.createElement(o.ZP,c({ref:r,"aria-hidden":!0},e,{__css:a.icon,className:l}),s.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));i.Ts&&(E.displayName="FormErrorIcon");var k=["className","children","requiredIndicator","optionalIndicator"],T=(0,t.Gp)((function(e,r){var a,n=(0,t.mq)("FormLabel",e),l=(0,t.Lr)(e);l.className;var o=l.children,u=l.requiredIndicator,m=void 0===u?s.createElement(I,null):u,p=l.optionalIndicator,f=void 0===p?null:p,h=d(l,k),g=v(),y=null!=(a=null==g?void 0:g.getLabelProps(h,r))?a:c({ref:r},h);return s.createElement(t.m$.label,c({},y,{className:(0,i.cx)("chakra-form__label",l.className),__css:c({display:"block",textAlign:"start"},n)}),o,null!=g&&g.isRequired?m:f)}));i.Ts&&(T.displayName="FormLabel");var I=(0,t.Gp)((function(e,r){var a=v(),n=(0,t.yK)();if(null==a||!a.isRequired)return null;var l=(0,i.cx)("chakra-form__required-indicator",e.className);return s.createElement(t.m$.span,c({},null==a?void 0:a.getRequiredIndicatorProps(e,r),{__css:n.requiredIndicator,className:l}))}));i.Ts&&(I.displayName="RequiredIndicator")},894:function(e,r,a){a.d(r,{JO:function(){return c},ZP:function(){return d}});var n=a(1604),t=a(9703),i=a(7294);function l(){return l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}var s=["as","viewBox","color","focusable","children","className","__css"],o={path:i.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},i.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),i.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),i.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},c=(0,n.Gp)((function(e,r){var a=e.as,c=e.viewBox,d=e.color,u=void 0===d?"currentColor":d,m=e.focusable,p=void 0!==m&&m,f=e.children,v=e.className,h=e.__css,g=function(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,s),y={ref:r,focusable:p,className:(0,t.cx)("chakra-icon",v),__css:l({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:u},h)},x=null!=c?c:o.viewBox;if(a&&"string"!==typeof a)return i.createElement(n.m$.svg,l({as:a},y,g));var N=null!=f?f:o.path;return i.createElement(n.m$.svg,l({verticalAlign:"middle",viewBox:x},y,g),N)}));t.Ts&&(c.displayName="Icon");var d=c},4612:function(e,r,a){a.d(r,{II:function(){return u}});var n=a(9762),t=a(1604),i=a(9703),l=a(7294),s=a(6450);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function c(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}var d=["htmlSize"],u=(0,t.Gp)((function(e,r){var a=e.htmlSize,s=c(e,d),u=(0,t.jC)("Input",s),m=(0,t.Lr)(s),p=(0,n.Yp)(m),f=(0,i.cx)("chakra-input",e.className);return l.createElement(t.m$.input,o({size:a},p,{__css:u.field,ref:r,className:f}))}));i.Ts&&(u.displayName="Input"),u.id="Input";var m=["placement"],p={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},f=(0,t.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),v=(0,t.Gp)((function(e,r){var a,n=e.placement,i=void 0===n?"left":n,s=c(e,m),d=null!=(a=p[i])?a:{},u=(0,t.yK)();return l.createElement(f,o({ref:r},s,{__css:o({},u.addon,d)}))}));i.Ts&&(v.displayName="InputAddon");var h=(0,t.Gp)((function(e,r){return l.createElement(v,o({ref:r,placement:"left"},e,{className:(0,i.cx)("chakra-input__left-addon",e.className)}))}));i.Ts&&(h.displayName="InputLeftAddon"),h.id="InputLeftAddon";var g=(0,t.Gp)((function(e,r){return l.createElement(v,o({ref:r,placement:"right"},e,{className:(0,i.cx)("chakra-input__right-addon",e.className)}))}));i.Ts&&(g.displayName="InputRightAddon"),g.id="InputRightAddon";var y=["children","className"],x=(0,t.Gp)((function(e,r){var a=(0,t.jC)("Input",e),n=(0,t.Lr)(e),d=n.children,u=n.className,m=c(n,y),p=(0,i.cx)("chakra-input__group",u),f={},v=(0,s.WR)(d),h=a.field;v.forEach((function(e){if(a){var r,n;if(h&&"InputLeftElement"===e.type.id)f.paddingStart=null!=(r=h.height)?r:h.h;if(h&&"InputRightElement"===e.type.id)f.paddingEnd=null!=(n=h.height)?n:h.h;"InputRightAddon"===e.type.id&&(f.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(f.borderStartRadius=0)}}));var g=v.map((function(r){var a,n,t=(0,i.YU)({size:(null==(a=r.props)?void 0:a.size)||e.size,variant:(null==(n=r.props)?void 0:n.variant)||e.variant});return"Input"!==r.type.id?l.cloneElement(r,t):l.cloneElement(r,Object.assign(t,f,r.props))}));return l.createElement(t.m$.div,o({className:p,ref:r,__css:{width:"100%",display:"flex",position:"relative"}},m),l.createElement(t.Fo,{value:a},g))}));i.Ts&&(x.displayName="InputGroup");var N=["placement"],b=["className"],_=["className"],E=(0,t.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),k=(0,t.Gp)((function(e,r){var a,n,i,s=e.placement,d=void 0===s?"left":s,u=c(e,N),m=(0,t.yK)(),p=m.field,f=o(((i={})["left"===d?"insetStart":"insetEnd"]="0",i.width=null!=(a=null==p?void 0:p.height)?a:null==p?void 0:p.h,i.height=null!=(n=null==p?void 0:p.height)?n:null==p?void 0:p.h,i.fontSize=null==p?void 0:p.fontSize,i),m.element);return l.createElement(E,o({ref:r,__css:f},u))}));k.id="InputElement",i.Ts&&(k.displayName="InputElement");var T=(0,t.Gp)((function(e,r){var a=e.className,n=c(e,b),t=(0,i.cx)("chakra-input__left-element",a);return l.createElement(k,o({ref:r,placement:"left",className:t},n))}));T.id="InputLeftElement",i.Ts&&(T.displayName="InputLeftElement");var I=(0,t.Gp)((function(e,r){var a=e.className,n=c(e,_),t=(0,i.cx)("chakra-input__right-element",a);return l.createElement(k,o({ref:r,placement:"right",className:t},n))}));I.id="InputRightElement",i.Ts&&(I.displayName="InputRightElement")},8527:function(e,r,a){a.d(r,{Kq:function(){return re},MI:function(){return U},Ug:function(){return ae},X6:function(){return O},gC:function(){return ne},iz:function(){return w},kC:function(){return G},rU:function(){return F},xu:function(){return g},xv:function(){return ie}});var n=a(1604),t=a(4244),i=a(9703),l=a(7294),s=a(894),o=a(6450);function c(){return c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function d(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}var u=["ratio","children","className"],m=(0,n.Gp)((function(e,r){var a=e.ratio,t=void 0===a?4/3:a,s=e.children,o=e.className,m=d(e,u),p=l.Children.only(s),f=(0,i.cx)("chakra-aspect-ratio",o);return l.createElement(n.m$.div,c({ref:r,position:"relative",className:f,_before:{height:0,content:'""',display:"block",paddingBottom:(0,i.XQ)(t,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},m),p)}));i.Ts&&(m.displayName="AspectRatio");var p=["className"],f=(0,n.Gp)((function(e,r){var a=(0,n.mq)("Badge",e),t=(0,n.Lr)(e);t.className;var s=d(t,p);return l.createElement(n.m$.span,c({ref:r,className:(0,i.cx)("chakra-badge",e.className)},s,{__css:c({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},a)}))}));i.Ts&&(f.displayName="Badge");var v=["size","centerContent"],h=["size"],g=(0,n.m$)("div");i.Ts&&(g.displayName="Box");var y=(0,n.Gp)((function(e,r){var a=e.size,n=e.centerContent,t=void 0===n||n,i=d(e,v),s=t?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return l.createElement(g,c({ref:r,boxSize:a,__css:c({},s,{flexShrink:0,flexGrow:0})},i))}));i.Ts&&(y.displayName="Square");var x=(0,n.Gp)((function(e,r){var a=e.size,n=d(e,h);return l.createElement(y,c({size:a,ref:r,borderRadius:"9999px"},n))}));i.Ts&&(x.displayName="Circle");var N=(0,n.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.Ts&&(N.displayName="Center");var b=["className"],_=(0,n.Gp)((function(e,r){var a=(0,n.mq)("Code",e),t=(0,n.Lr)(e);t.className;var s=d(t,b);return l.createElement(n.m$.code,c({ref:r,className:(0,i.cx)("chakra-code",e.className)},s,{__css:c({display:"inline-block"},a)}))}));i.Ts&&(_.displayName="Code");var E=["className","centerContent"],k=(0,n.Gp)((function(e,r){var a=(0,n.Lr)(e),t=a.className,s=a.centerContent,o=d(a,E),u=(0,n.mq)("Container",e);return l.createElement(n.m$.div,c({ref:r,className:(0,i.cx)("chakra-container",t)},o,{__css:c({},u,s&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));i.Ts&&(k.displayName="Container");var T=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],I=["className","orientation","__css"],w=(0,n.Gp)((function(e,r){var a=(0,n.mq)("Divider",e),t=a.borderLeftWidth,s=a.borderBottomWidth,o=a.borderTopWidth,u=a.borderRightWidth,m=a.borderWidth,p=a.borderStyle,f=a.borderColor,v=d(a,T),h=(0,n.Lr)(e),g=h.className,y=h.orientation,x=void 0===y?"horizontal":y,N=h.__css,b=d(h,I),_={vertical:{borderLeftWidth:t||u||m||"1px",height:"100%"},horizontal:{borderBottomWidth:s||o||m||"1px",width:"100%"}};return l.createElement(n.m$.hr,c({ref:r,"aria-orientation":x},b,{__css:c({},v,{border:"0",borderColor:f,borderStyle:p},_[x],N),className:(0,i.cx)("chakra-divider",g)}))}));i.Ts&&(w.displayName="Divider");var C=["direction","align","justify","wrap","basis","grow","shrink"],G=(0,n.Gp)((function(e,r){var a=e.direction,t=e.align,i=e.justify,s=e.wrap,o=e.basis,u=e.grow,m=e.shrink,p=d(e,C),f={display:"flex",flexDirection:a,alignItems:t,justifyContent:i,flexWrap:s,flexBasis:o,flexGrow:u,flexShrink:m};return l.createElement(n.m$.div,c({ref:r,__css:f},p))}));i.Ts&&(G.displayName="Flex");var R=["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],S=(0,n.Gp)((function(e,r){var a=e.area,t=e.templateAreas,i=e.gap,s=e.rowGap,o=e.columnGap,u=e.column,m=e.row,p=e.autoFlow,f=e.autoRows,v=e.templateRows,h=e.autoColumns,g=e.templateColumns,y=d(e,R),x={display:"grid",gridArea:a,gridTemplateAreas:t,gridGap:i,gridRowGap:s,gridColumnGap:o,gridAutoColumns:h,gridColumn:u,gridRow:m,gridAutoFlow:p,gridAutoRows:f,gridTemplateRows:v,gridTemplateColumns:g};return l.createElement(n.m$.div,c({ref:r,__css:x},y))}));i.Ts&&(S.displayName="Grid");var L=["className"],O=(0,n.Gp)((function(e,r){var a=(0,n.mq)("Heading",e),t=(0,n.Lr)(e);t.className;var s=d(t,L);return l.createElement(n.m$.h2,c({ref:r,className:(0,i.cx)("chakra-heading",e.className)},s,{__css:a}))}));i.Ts&&(O.displayName="Heading");var W=["className"],j=(0,n.Gp)((function(e,r){var a=(0,n.mq)("Kbd",e),t=(0,n.Lr)(e),s=t.className,o=d(t,W);return l.createElement(n.m$.kbd,c({ref:r,className:(0,i.cx)("chakra-kbd",s)},o,{__css:c({fontFamily:"mono"},a)}))}));i.Ts&&(j.displayName="Kbd");var q=["className","isExternal"],F=(0,n.Gp)((function(e,r){var a=(0,n.mq)("Link",e),t=(0,n.Lr)(e),s=t.className,o=t.isExternal,u=d(t,q);return l.createElement(n.m$.a,c({target:o?"_blank":void 0,rel:o?"noopener":void 0,ref:r,className:(0,i.cx)("chakra-link",s)},u,{__css:a}))}));i.Ts&&(F.displayName="Link");var $=["children","styleType","stylePosition","spacing"],B=["as"],P=["as"],A=(0,o.kr)({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in a `<*List />` "}),z=A[0],D=A[1],M=(0,n.Gp)((function(e,r){var a,t=(0,n.jC)("List",e),i=(0,n.Lr)(e),s=i.children,u=i.styleType,m=void 0===u?"none":u,p=i.stylePosition,f=i.spacing,v=d(i,$),h=(0,o.WR)(s),g=f?((a={})["& > *:not(style) ~ *:not(style)"]={mt:f},a):{};return l.createElement(z,{value:t},l.createElement(n.m$.ul,c({ref:r,listStyleType:m,listStylePosition:p,role:"list",__css:c({},t.container,g)},v),h))}));i.Ts&&(M.displayName="List");var X=(0,n.Gp)((function(e,r){e.as;var a=d(e,B);return l.createElement(M,c({ref:r,as:"ol",styleType:"decimal",marginStart:"1em"},a))}));i.Ts&&(X.displayName="OrderedList");var H=(0,n.Gp)((function(e,r){e.as;var a=d(e,P);return l.createElement(M,c({ref:r,as:"ul",styleType:"initial",marginStart:"1em"},a))}));i.Ts&&(H.displayName="UnorderedList");var Q=(0,n.Gp)((function(e,r){var a=D();return l.createElement(n.m$.li,c({ref:r},e,{__css:a.item}))}));i.Ts&&(Q.displayName="ListItem");var Y=(0,n.Gp)((function(e,r){var a=D();return l.createElement(s.JO,c({ref:r,role:"presentation"},e,{__css:a.icon}))}));i.Ts&&(Y.displayName="ListIcon");var K=["columns","spacingX","spacingY","spacing","minChildWidth"],U=(0,n.Gp)((function(e,r){var a,n,t=e.columns,s=e.spacingX,o=e.spacingY,u=e.spacing,m=e.minChildWidth,p=d(e,K),f=m?(n=m,(0,i.XQ)(n,(function(e){return(0,i.Ft)(e)?null:"repeat(auto-fit, minmax("+(r=e,((0,i.hj)(r)?r+"px":r)+", 1fr))");var r}))):(a=t,(0,i.XQ)(a,(function(e){return(0,i.Ft)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return l.createElement(S,c({ref:r,gap:u,columnGap:s,rowGap:o,templateColumns:f},p))}));i.Ts&&(U.displayName="SimpleGrid");var Z=(0,n.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});i.Ts&&(Z.displayName="Spacer");var J="& > *:not(style) ~ *:not(style)";var V=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],ee=function(e){return l.createElement(n.m$.div,c({className:"chakra-stack__item"},e,{__css:c({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},re=(0,n.Gp)((function(e,r){var a,t=e.isInline,s=e.direction,u=e.align,m=e.justify,p=e.spacing,f=void 0===p?"0.5rem":p,v=e.wrap,h=e.children,g=e.divider,y=e.className,x=e.shouldWrapChildren,N=d(e,V),b=t?"row":null!=s?s:"column",_=l.useMemo((function(){return function(e){var r,a=e.spacing,n=e.direction,t={column:{marginTop:a,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:a},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:a,marginStart:0},"row-reverse":{marginTop:0,marginEnd:a,marginBottom:0,marginStart:0}};return(r={flexDirection:n})[J]=(0,i.XQ)(n,(function(e){return t[e]})),r}({direction:b,spacing:f})}),[b,f]),E=l.useMemo((function(){return function(e){var r=e.spacing,a=e.direction,n={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,i.XQ)(a,(function(e){return n[e]}))}}({spacing:f,direction:b})}),[f,b]),k=!!g,T=!x&&!k,I=(0,o.WR)(h),w=T?I:I.map((function(e,r){var a="undefined"!==typeof e.key?e.key:r,n=r+1===I.length,t=x?l.createElement(ee,{key:a},e):e;if(!k)return t;var i=n?null:l.cloneElement(g,{__css:E});return l.createElement(l.Fragment,{key:a},t,i)})),C=(0,i.cx)("chakra-stack",y);return l.createElement(n.m$.div,c({ref:r,display:"flex",alignItems:u,justifyContent:m,flexDirection:_.flexDirection,flexWrap:v,className:C,__css:k?{}:(a={},a[J]=_[J],a)},N),w)}));i.Ts&&(re.displayName="Stack");var ae=(0,n.Gp)((function(e,r){return l.createElement(re,c({align:"center"},e,{direction:"row",ref:r}))}));i.Ts&&(ae.displayName="HStack");var ne=(0,n.Gp)((function(e,r){return l.createElement(re,c({align:"center"},e,{direction:"column",ref:r}))}));i.Ts&&(ne.displayName="VStack");var te=["className","align","decoration","casing"],ie=(0,n.Gp)((function(e,r){var a=(0,n.mq)("Text",e),t=(0,n.Lr)(e);t.className,t.align,t.decoration,t.casing;var s=d(t,te),o=(0,i.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return l.createElement(n.m$.p,c({ref:r,className:(0,i.cx)("chakra-text",e.className)},o,s,{__css:a}))}));i.Ts&&(ie.displayName="Text");var le=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],se=["className"],oe=(0,n.Gp)((function(e,r){var a=e.spacing,s=void 0===a?"0.5rem":a,o=e.spacingX,u=e.spacingY,m=e.children,p=e.justify,f=e.direction,v=e.align,h=e.className,g=e.shouldWrapChildren,y=d(e,le),x=l.useMemo((function(){var e={spacingX:o,spacingY:u},r=e.spacingX,a=void 0===r?s:r,n=e.spacingY,l=void 0===n?s:n;return{"--chakra-wrap-x-spacing":function(e){return(0,i.XQ)(a,(function(r){return(0,t.fr)("space",r)(e)}))},"--chakra-wrap-y-spacing":function(e){return(0,i.XQ)(l,(function(r){return(0,t.fr)("space",r)(e)}))},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:p,alignItems:v,flexDirection:f,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[s,o,u,p,v,f]),N=g?l.Children.map(m,(function(e,r){return l.createElement(ce,{key:r},e)})):m;return l.createElement(n.m$.div,c({ref:r,className:(0,i.cx)("chakra-wrap",h)},y),l.createElement(n.m$.ul,{className:"chakra-wrap__list",__css:x},N))}));i.Ts&&(oe.displayName="Wrap");var ce=(0,n.Gp)((function(e,r){var a=e.className,t=d(e,se);return l.createElement(n.m$.li,c({ref:r,__css:{display:"flex",alignItems:"flex-start"},className:(0,i.cx)("chakra-wrap__listitem",a)},t))}));i.Ts&&(ce.displayName="WrapItem")}}]);