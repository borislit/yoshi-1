(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{228:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(9),a=(n(0),n(278)),i={id:"enzyme-support",title:"Testing With Enzyme",sidebar_label:"Testing With Enzyme"},s={id:"version-4.x/legacy-guides/enzyme-support",title:"Testing With Enzyme",description:"## Why do I need this?",source:"@site/versioned_docs/version-4.x/legacy-guides/enzyme-support.md",permalink:"/yoshi/docs/legacy-guides/enzyme-support",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/legacy-guides/enzyme-support.md",version:"4.x",lastUpdatedBy:"Ronen Amiel",lastUpdatedAt:1589463549,sidebar_label:"Testing With Enzyme"},l=[{value:"Why do I need this?",id:"why-do-i-need-this",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Cleanup",id:"cleanup",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"why-do-i-need-this"},"Why do I need this?"),Object(a.b)("p",null,"As you might be aware, our stack runs unit tests using mocha directly on Node.js. Those tests do not run in the browser, which makes the setup much simpler (no bundling, no karma) and most importantly it makes it much faster. The down side of this of course is that any browser API is not available in Node.js environment. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/airbnb/enzyme"}),"Enzyme"),", which is a very commonly used testing utility for React, is using ",Object(a.b)("inlineCode",{parentName:"p"},"document"),", ",Object(a.b)("inlineCode",{parentName:"p"},"window")," and DOM API, which is obviously a problem if we run tests in Node.js and not in the browser, but luckily we can use a library called ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tmpvar/jsdom"}),"jsdom"),", which implements the whole DOM API in Node.js."),Object(a.b)("p",null,"This guide explains how to add jsdom to an existing project in order to enable testing using mocha and enzyme on Node.js without a browser. Projects generated by the wix-js-stack generator already includes jsdom, so this guide should be used by people who are adding jsdom to an old project that was generated before jsdom support was baked in and obviously also for people who would like to understand how this works."),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("p",null,"If you try to use enzyme in a tests without setting up jsdom properly you will probably see this error:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering.\n")),Object(a.b)("p",null,"Since enzyme does not only need DOM API jsdom provides (it actually needs also the ",Object(a.b)("inlineCode",{parentName:"p"},"document")," and ",Object(a.b)("inlineCode",{parentName:"p"},"window")," global variables) we use a library called ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/rstacruz/jsdom-global"}),"jsdom-global")," which uses jsdom in order to setup the global variables as enzyme requires. So actually in order to setup jsdom for enzyme all you have to do is install ",Object(a.b)("inlineCode",{parentName:"p"},"jsdom-global")," as dev dependency:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ npm install --save-dev jsdom-global\n")),Object(a.b)("p",null,"And then import it in your test file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import "jsdom-global/register";\n')),Object(a.b)("p",null,"Notice that you must do the ",Object(a.b)("strong",{parentName:"p"},"import BEFORE you import enzyme"),", otherwise you will still see the error above."),Object(a.b)("h2",{id:"cleanup"},"Cleanup"),Object(a.b)("p",null,"As hopefully you already noticed yourself, ",Object(a.b)("inlineCode",{parentName:"p"},"jsdom-global")," is manipulating the global namespace, which might cause many kinds of problems of state leaking between tests and it has to be cleaned up after every test. In addition, it creates ",Object(a.b)("inlineCode",{parentName:"p"},"window")," and ",Object(a.b)("inlineCode",{parentName:"p"},"document")," global variables, which might be confusing for some third party tools since those variables generally indicate that you are running in a browser."),Object(a.b)("p",null,"In order to make sure that the ",Object(a.b)("inlineCode",{parentName:"p"},"window")," and ",Object(a.b)("inlineCode",{parentName:"p"},"document")," global variables only exist in tests that use enzyme and in order to make sure we do not leak state between tests it is very important that you group enzyme tests into separate ",Object(a.b)("inlineCode",{parentName:"p"},"describe")," clauses and in those ",Object(a.b)("inlineCode",{parentName:"p"},"describe")," clauses add the following code:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'let cleanup;\nbeforeEach(() => (cleanup = require("jsdom-global")()));\nafterEach(() => cleanup());\n')))}d.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return n?o.a.createElement(m,s({ref:t},c,{components:n})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);