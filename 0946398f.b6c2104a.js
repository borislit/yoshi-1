(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(9),o=(r(0),r(278)),c={id:"create-app",title:"Create App",sidebar_label:"Create App"},p={id:"version-3.x/getting-started/create-app",title:"Create App",description:"```sh",source:"@site/versioned_docs/version-3.x/getting-started/create-app.md",permalink:"/yoshi/docs/3.x/getting-started/create-app",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-3.x/getting-started/create-app.md",version:"3.x",lastUpdatedBy:"Ronen Amiel",lastUpdatedAt:1589463549,sidebar_label:"Create App",sidebar:"version-3.x-docs",next:{title:"Usage",permalink:"/yoshi/docs/3.x/getting-started/usage"}},i=[],s={rightToc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx create-yoshi-app my-app\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Answer a few questions"),Object(o.b)("li",{parentName:"ul"},"Choose ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/yoshi/docs/3.x/getting-started/project-types"}),"Project Type")),Object(o.b)("li",{parentName:"ul"},"Choose ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://babeljs.io/"}),"Babel"),"/",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.typescriptlang.org/"}),"TypeScript"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"cd my-app\nnpm start\n")),Object(o.b)("p",null,"Then open ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000/"}),"http://localhost:3000/")," to see your app."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"https://yoshi-assets.surge.sh/create-yoshi-app.gif",alt:"create-yoshi-app"})))}l.isMDXComponent=!0},278:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,f=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(f,p({ref:t},s,{components:r})):a.a.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);