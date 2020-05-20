(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{221:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(9),a=(t(0),t(281)),i={id:"node-api",title:"Node API",sidebar_label:"Node API"},c={id:"node-api",title:"Node API",description:"## Yoshi Serve",source:"@site/docs/node-api.md",permalink:"/yoshi/docs/next/node-api",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/node-api.md",version:"next",lastUpdatedBy:"Artem",lastUpdatedAt:1589705295,sidebar_label:"Node API",sidebar:"docs",previous:{title:"Yoshi Config",permalink:"/yoshi/docs/next/yoshi-config"},next:{title:"Disable CSS Modules",permalink:"/yoshi/docs/next/styles-and-assets/disable-css-modules"}},s=[{value:"Yoshi Serve",id:"yoshi-serve",children:[{value:"Monorepo",id:"monorepo",children:[]}]}],l={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"yoshi-serve"},"Yoshi Serve"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"yoshi-common")," exposes ",Object(a.b)("inlineCode",{parentName:"p"},"serve")," functionality through Node API."),Object(a.b)("p",null,"Serve runs your ",Object(a.b)("inlineCode",{parentName:"p"},"index-dev"),"/",Object(a.b)("inlineCode",{parentName:"p"},"dev/server")," file and serves your ",Object(a.b)("inlineCode",{parentName:"p"},"dist/statics")," directory as a local CDN."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: You need to build the statics before running serve. You can do that with ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi build"),".")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"serve")," method returns a Promise."),Object(a.b)("p",null,"Example of usage:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'const serve = require("yoshi-common/serve");\n\nserve()\n  .then(() => {\n    console.log("Server and CDN started successfully");\n  })\n  .catch(errorReason => {\n    console.log(errorReason);\n  });\n')),Object(a.b)("h3",{id:"monorepo"},"Monorepo"),Object(a.b)("p",null,"In case you are using ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi-flow-monorepo")," and want to serve all the apps in the monorepo, you can do so using the following api:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'const serve = require("yoshi-flow-monorepo/serve");\n\nserve()\n  .then(() => {\n    console.log("All Servers and CDNs started successfully");\n  })\n  .catch(errorReason => {\n    console.log(errorReason);\n  });\n')))}p.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return t?o.a.createElement(m,c({ref:n},l,{components:t})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);