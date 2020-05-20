(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{195:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),i=(r(0),r(284)),o={id:"templates",title:"Templates",sidebar_label:"Templates"},c={id:"version-4.x/templates",title:"Templates",description:"The following Templates can be generated using `create-yoshi-app`:",source:"@site/versioned_docs/version-4.x/templates.md",permalink:"/yoshi/docs/templates",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/templates.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589717529,sidebar_label:"Templates",sidebar:"version-4.x/docs",previous:{title:"Create Yoshi App",permalink:"/yoshi/docs/create-yoshi-app"},next:{title:"Testing",permalink:"/yoshi/docs/testing"}},l=[{value:"Client",id:"client",children:[]},{value:"Fullstack",id:"fullstack",children:[]},{value:"Node Library",id:"node-library",children:[]},{value:"Server",id:"server",children:[]},{value:"Business Manager Module",id:"business-manager-module",children:[]},{value:"Out Of Iframe",id:"out-of-iframe",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The following Templates can be generated using ",Object(i.b)("inlineCode",{parentName:"p"},"create-yoshi-app"),":"),Object(i.b)("h2",{id:"client"},"Client"),Object(i.b)("p",null,"Only Client project built with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React"),". The result is a bundle that will be uploaded to the cdn."),Object(i.b)("h2",{id:"fullstack"},"Fullstack"),Object(i.b)("p",null,"A ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node.js")," Server + Client project. The result is similar to the client, with a server that serves an html file which uses the created bundle."),Object(i.b)("h2",{id:"node-library"},"Node Library"),Object(i.b)("p",null,"A ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.npmjs.com/getting-started/creating-node-modules"}),"Node.js")," module that should be used by other Node.js applications as a 3rd party dependency."),Object(i.b)("h2",{id:"server"},"Server"),Object(i.b)("p",null,"Only Server project"),Object(i.b)("h2",{id:"business-manager-module"},"Business Manager Module"),Object(i.b)("p",null,"A client project that integrate with business manager APIs."),Object(i.b)("h2",{id:"out-of-iframe"},"Out Of Iframe"),Object(i.b)("p",null,"An application that has it's view components written in React and run in the viewer.\nThe application business logic runs inside the platform worker.\nFor more information head to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://bo.wix.com/wix-docs/client/client-frameworks#viewer-platform-(ooi)"}),"official docs"),"."),Object(i.b)("hr",null),Object(i.b)("p",null,"For more information, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/tree/master/packages/create-yoshi-app/templates"}),"the templates on yoshi's Github repo")))}p.isMDXComponent=!0},284:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(m,c({ref:t},s,{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);