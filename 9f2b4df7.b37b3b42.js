(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{223:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(9),o=(n(0),n(278)),a={id:"testing",title:"Testing",sidebar_label:"Testing"},s={id:"editor-flow/testing",title:"Testing",description:"Yoshi flow editor supports unit and e2e testing configuration for Out of iFrame projects. Moreover, you can always add [sled](https://wix-private.github.io/sled/) tests to your app to verify the widget is rendering correctly in production environment.",source:"@site/docs/editor-flow/testing.md",permalink:"/yoshi/docs/next/editor-flow/testing",editUrl:"https://github.com/wix/yoshi/edit/master/website/docs/editor-flow/testing.md",version:"next",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1589448482,sidebar_label:"Testing",sidebar:"editor-flow",previous:{title:"Local Development",permalink:"/yoshi/docs/next/editor-flow/local-development"},next:{title:"Platform Apps Support",permalink:"/yoshi/docs/next/editor-flow/platform-apps-support"}},p=[{value:"unit (jest)",id:"unit-jest",children:[]},{value:"e2e (sled)",id:"e2e-sled",children:[]}],c={rightToc:p};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Yoshi flow editor supports unit and e2e testing configuration for Out of iFrame projects. Moreover, you can always add ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://wix-private.github.io/sled/"}),"sled")," tests to your app to verify the widget is rendering correctly in production environment."),Object(o.b)("p",null,"By running ",Object(o.b)("inlineCode",{parentName:"p"},"npm run test")," we'll run both unit (jest) and e2e (sled) tests."),Object(o.b)("h3",{id:"unit-jest"},"unit (jest)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"File pattern used for unit tests is ",Object(o.b)("strong",{parentName:"em"},"`src/"),"/"),".spec.ts`***"),Object(o.b)("p",null,"Each unit test are being executed in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jsdom/jsdom"}),"JSDOM")," environment.\nOOI template generated with ",Object(o.b)("inlineCode",{parentName:"p"},"create-yoshi-app")," already have unit tests for ",Object(o.b)("inlineCode",{parentName:"p"},"Widget"),", ",Object(o.b)("inlineCode",{parentName:"p"},"controller")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Settings")," parts."),Object(o.b)("p",null,"It's based on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://wix.github.io/yoshi/docs/jest-yoshi-preset"}),Object(o.b)("inlineCode",{parentName:"a"},"jest-yoshi-preset")),", so it provides the same testing configuration as other yoshi apps."),Object(o.b)("h3",{id:"e2e-sled"},"e2e (sled)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"File pattern used to get sled tests is ",Object(o.b)("strong",{parentName:"em"},"`sled/"),"/"),".e2e.spec.ts`***"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"end-to-end")," tests are handled by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://wix-private.github.io/sled/"}),"sled")," and located under ",Object(o.b)("inlineCode",{parentName:"p"},"sled")," directory."),Object(o.b)("p",null,"After project generated with create-yoshi-app, ",Object(o.b)("inlineCode",{parentName:"p"},"sled")," directory will be inited with simple tests for each component. It's a basic snapshot and a browser interaction tests.\n",Object(o.b)("inlineCode",{parentName:"p"},"sled")," will use ",Object(o.b)("inlineCode",{parentName:"p"},"viewerUrl")," in ",Object(o.b)("inlineCode",{parentName:"p"},"dist/sites.ts")," as a default page to process e2e tests. Initially it's a basic introductory website, but after ",Object(o.b)("inlineCode",{parentName:"p"},"viewerUrl")," will be updated to real website with your app installed, sled will be started against it."),Object(o.b)("p",null,"To add more sled tests to your projects, please check ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://wix-private.github.io/sled/docs/quick-start"}),"the official guide"),"."))}l.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),l=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=l(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(a,".").concat(u)]||d[u]||b[u]||o;return n?i.a.createElement(f,s({ref:t},c,{components:n})):i.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);