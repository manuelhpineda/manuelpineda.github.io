"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[230],{6556:function(e,r,t){t.r(r),t.d(r,{default:function(){return me}});var o=t(7294),a=t(1074),i=a.default.header.withConfig({displayName:"Styles__StyledHeader",componentId:"sc-8pb603-0"})(["width:100%;height:80px;display:flex;align-items:center;justify-content:center;"]),n=a.default.nav.withConfig({displayName:"Styles__Nav",componentId:"sc-8pb603-1"})(["width:min(100% - 20px,1200px);display:flex;justify-content:space-between;"]),d=a.default.div.withConfig({displayName:"Styles__LogoWrap",componentId:"sc-8pb603-2"})([""]),p=a.default.a.withConfig({displayName:"Styles__Logo",componentId:"sc-8pb603-3"})([""]),l=a.default.ul.withConfig({displayName:"Styles__NavList",componentId:"sc-8pb603-4"})(["display:flex;flex-direction:row;width:min(100% - 10px,400px);justify-content:space-between;"]),s=a.default.li.withConfig({displayName:"Styles__NavLinks",componentId:"sc-8pb603-5"})(["padding:2px;"]),c=a.default.a.withConfig({displayName:"Styles__NavLink",componentId:"sc-8pb603-6"})(["padding:3px;"]),g=function(){return o.createElement(i,null,o.createElement(n,null,o.createElement(d,null,o.createElement(p,{href:"/"},"Manuel Pineda")),o.createElement(l,null,o.createElement(s,null,o.createElement(c,null,"About")),o.createElement(s,null,o.createElement(c,null,"Work")),o.createElement(s,null,o.createElement(c,null,"Contact Me")))))},f=function(e){var r=e.children;return o.createElement(o.Fragment,null,o.createElement(g,null),o.createElement("main",null,r))};function m(e,r){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}var u=a.default.div.withConfig({displayName:"Styles__StyledContainer",componentId:"sc-p5qjw7-0"})(["width:min(100% - 20px,",");margin-inline:auto;"],(function(e){var r=e.max;return r?r+"px":"1200px"})),b=["children","max"],h=function(e){var r=e.children,t=e.max,a=m(e,b);return o.createElement(u,Object.assign({},a,{max:t}),r)},y=t(6494),S=t.n(y),v=function(e,r){var t=S()({},e,r);for(var o in e){var a;e[o]&&"object"==typeof r[o]&&S()(t,((a={})[o]=S()(e[o],r[o]),a))}return t},R={breakpoints:[40,52,64].map((function(e){return e+"em"}))},w=function(e){return"@media screen and (min-width: "+e+")"},x=function(e,r){return C(r,e,e)},C=function(e,r,t,o,a){for(r=r&&r.split?r.split("."):[r],o=0;o<r.length;o++)e=e?e[r[o]]:a;return e===a?t:e},k=function e(r){var t={},o=function(e){var o,a,i={},n=!1,d=e.theme&&e.theme.disableStyledSystemCache;for(var p in e)if(r[p]){var l=r[p],s=e[p],c=C(e.theme,l.scale,l.defaults);if("object"!=typeof s)S()(i,l(s,c,e));else{if(t.breakpoints=!d&&t.breakpoints||C(e.theme,"breakpoints",R.breakpoints),Array.isArray(s)){t.media=!d&&t.media||[null].concat(t.breakpoints.map(w)),i=v(i,T(t.media,l,c,s,e));continue}null!==s&&(i=v(i,W(t.breakpoints,l,c,s,e)),n=!0)}}return n&&(o=i,a={},Object.keys(o).sort((function(e,r){return e.localeCompare(r,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(e){a[e]=o[e]})),i=a),i};o.config=r,o.propNames=Object.keys(r),o.cache=t;var a=Object.keys(r).filter((function(e){return"config"!==e}));return a.length>1&&a.forEach((function(t){var a;o[t]=e(((a={})[t]=r[t],a))})),o},T=function(e,r,t,o,a){var i={};return o.slice(0,e.length).forEach((function(o,n){var d,p=e[n],l=r(o,t,a);p?S()(i,((d={})[p]=S()({},i[p],l),d)):S()(i,l)})),i},W=function(e,r,t,o,a){var i={};for(var n in o){var d=e[n],p=r(o[n],t,a);if(d){var l,s=w(d);S()(i,((l={})[s]=S()({},i[s],p),l))}else S()(i,p)}return i},L=function(e){var r=e.properties,t=e.property,o=e.scale,a=e.transform,i=void 0===a?x:a,n=e.defaultScale;r=r||[t];var d=function(e,t,o){var a={},n=i(e,t,o);if(null!==n)return r.forEach((function(e){a[e]=n})),a};return d.scale=o,d.defaults=n,d},B=function(e){void 0===e&&(e={});var r={};return Object.keys(e).forEach((function(t){var o=e[t];r[t]=!0!==o?"function"!=typeof o?L(o):o:L({property:t,scale:t})})),k(r)},z=B({width:{property:"width",scale:"sizes",transform:function(e,r){return C(r,e,!function(e){return"number"==typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),E={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};E.bg=E.backgroundColor;var I=B(E),j=I,_=B({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),A=B({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),N={space:[0,4,8,16,32,64,128,256,512]},H=B({gridGap:{property:"gridGap",scale:"space",defaultScale:N.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:N.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:N.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),G={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};G.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},G.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},G.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},G.borderBottomColor={property:"borderBottomColor",scale:"colors"},G.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},G.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},G.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},G.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},G.borderLeftColor={property:"borderLeftColor",scale:"colors"},G.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},G.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},G.borderRightColor={property:"borderRightColor",scale:"colors"},G.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var X=B(G),Y={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};Y.bgImage=Y.backgroundImage,Y.bgSize=Y.backgroundSize,Y.bgPosition=Y.backgroundPosition,Y.bgRepeat=Y.backgroundRepeat;var O=B(Y),F=O,P={space:[0,4,8,16,32,64,128,256,512]},M=B({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:P.space},right:{property:"right",scale:"space",defaultScale:P.space},bottom:{property:"bottom",scale:"space",defaultScale:P.space},left:{property:"left",scale:"space",defaultScale:P.space}}),D={space:[0,4,8,16,32,64,128,256,512]},q=function(e){return"number"==typeof e&&!isNaN(e)},Z=function(e,r){if(!q(e))return C(r,e,e);var t=e<0,o=Math.abs(e),a=C(r,o,o);return q(a)?a*(t?-1:1):t?"-"+a:a},J={};J.margin={margin:{property:"margin",scale:"space",transform:Z,defaultScale:D.space},marginTop:{property:"marginTop",scale:"space",transform:Z,defaultScale:D.space},marginRight:{property:"marginRight",scale:"space",transform:Z,defaultScale:D.space},marginBottom:{property:"marginBottom",scale:"space",transform:Z,defaultScale:D.space},marginLeft:{property:"marginLeft",scale:"space",transform:Z,defaultScale:D.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:Z,defaultScale:D.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:Z,defaultScale:D.space}},J.margin.m=J.margin.margin,J.margin.mt=J.margin.marginTop,J.margin.mr=J.margin.marginRight,J.margin.mb=J.margin.marginBottom,J.margin.ml=J.margin.marginLeft,J.margin.mx=J.margin.marginX,J.margin.my=J.margin.marginY,J.padding={padding:{property:"padding",scale:"space",defaultScale:D.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:D.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:D.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:D.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:D.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:D.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:D.space}},J.padding.p=J.padding.padding,J.padding.pt=J.padding.paddingTop,J.padding.pr=J.padding.paddingRight,J.padding.pb=J.padding.paddingBottom,J.padding.pl=J.padding.paddingLeft,J.padding.px=J.padding.paddingX,J.padding.py=J.padding.paddingY;var K=function(){for(var e={},r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];t.forEach((function(r){r&&r.config&&S()(e,r.config)}));var a=k(e);return a}(B(J.margin),B(J.padding));B({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function Q(){return Q=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Q.apply(this,arguments)}var U=function(e,r,t,o,a){for(r=r&&r.split?r.split("."):[r],o=0;o<r.length;o++)e=e?e[r[o]]:a;return e===a?t:e},V=[40,52,64].map((function(e){return e+"em"})),$={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},ee={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},re={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},te={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},oe=function(e,r){if("number"!=typeof r||r>=0)return U(e,r,r);var t=Math.abs(r),o=U(e,t,t);return"string"==typeof o?"-"+o:-1*o},ae=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,r){var t;return Q({},e,((t={})[r]=oe,t))}),{}),ie=function e(r){return function(t){void 0===t&&(t={});var o=Q({},$,{},t.theme||t),a={},i=function(e){return function(r){var t={},o=U(r,"breakpoints",V),a=[null].concat(o.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var i in e){var n="function"==typeof e[i]?e[i](r):e[i];if(null!=n)if(Array.isArray(n))for(var d=0;d<n.slice(0,a.length).length;d++){var p=a[d];p?(t[p]=t[p]||{},null!=n[d]&&(t[p][i]=n[d])):t[i]=n[d]}else t[i]=n}return t}}("function"==typeof r?r(o):r)(o);for(var n in i){var d=i[n],p="function"==typeof d?d(o):d;if("variant"!==n)if(p&&"object"==typeof p)a[n]=e(p)(o);else{var l=U(ee,n,n),s=U(te,l),c=U(o,s,U(o,l,{})),g=U(ae,l,U)(c,p,p);if(re[l])for(var f=re[l],m=0;m<f.length;m++)a[f[m]]=g;else a[l]=g}else a=Q({},a,{},e(U(o,p))(o))}return a}},ne=function(e){var r,t,o=e.scale,a=e.prop,i=void 0===a?"variant":a,n=e.variants,d=void 0===n?{}:n,p=e.key;t=Object.keys(d).length?function(e,r,t){return ie(C(r,e,null))(t.theme)}:function(e,r){return C(r,e,null)},t.scale=o||p,t.defaults=d;var l=((r={})[i]=t,r);return k(l)},de=(ne({key:"buttons"}),ne({key:"textStyles",prop:"textStyle"}),ne({key:"colorStyles",prop:"colors"}),z.width,z.height,z.minWidth,z.minHeight,z.maxWidth,z.maxHeight,z.size,z.verticalAlign,z.display,z.overflow,z.overflowX,z.overflowY,j.opacity,_.fontSize,_.fontFamily,_.fontWeight,_.lineHeight,_.textAlign,_.fontStyle,_.letterSpacing,A.alignItems,A.alignContent,A.justifyItems,A.justifyContent,A.flexWrap,A.flexDirection,A.flex,A.flexGrow,A.flexShrink,A.flexBasis,A.justifySelf,A.alignSelf,A.order,H.gridGap,H.gridColumnGap,H.gridRowGap,H.gridColumn,H.gridRow,H.gridAutoFlow,H.gridAutoColumns,H.gridAutoRows,H.gridTemplateColumns,H.gridTemplateRows,H.gridTemplateAreas,H.gridArea,X.borderWidth,X.borderStyle,X.borderColor,X.borderTop,X.borderRight,X.borderBottom,X.borderLeft,X.borderRadius,F.backgroundImage,F.backgroundSize,F.backgroundPosition,F.backgroundRepeat,M.zIndex,M.top,M.right,M.bottom,M.left,a.default.h2.withConfig({displayName:"Styles__StyledHeading",componentId:"sc-1d2dhv5-0"})([""," "," ",""],K,I,O)),pe=["as","children"],le=function(e){var r=e.as,t=e.children,a=m(e,pe);return o.createElement(de,Object.assign({as:r},a),t)},se=t(3969),ce=a.default.div.withConfig({displayName:"Styles__HeroWrap",componentId:"sc-1xok0il-0"})(["display:flex;align-items:center;justify-content:center;height:500px;"]),ge=a.default.span.withConfig({displayName:"Styles__Span",componentId:"sc-1xok0il-1"})(["color:",";"],se.Z.colors.primary),fe=function(){return o.createElement(o.Fragment,null,o.createElement(ce,null,o.createElement(h,{max:996},o.createElement(le,{as:"h1"},"Hey, I’m Manuel! ",o.createElement("br",null)," ",o.createElement(ge,null," A developer with a growing passion for design")))))},me=function(){return o.createElement(f,null,o.createElement(fe,null))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-ecc794308fd0bfdbd63b.js.map