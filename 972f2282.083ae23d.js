(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(283)),i={id:"export-es-modules",title:"Export ES Modules",sidebar_label:"Export ES Modules"},l={id:"version-4.x/legacy-guides/export-es-modules",title:"Export ES Modules",description:"How to export ES modules along with commonjs?",source:"@site/versioned_docs/version-4.x/legacy-guides/export-es-modules.md",permalink:"/yoshi/docs/legacy-guides/export-es-modules",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/legacy-guides/export-es-modules.md",version:"4.x",lastUpdatedBy:"wix-renovate",lastUpdatedAt:1589824965,sidebar_label:"Export ES Modules"},c=[{value:"How to export ES modules along with commonjs?",id:"how-to-export-es-modules-along-with-commonjs",children:[{value:"TL;DR",id:"tldr",children:[]},{value:"Why",id:"why",children:[]},{value:"How",id:"how",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"how-to-export-es-modules-along-with-commonjs"},"How to export ES modules along with commonjs?"),Object(a.b)("h3",{id:"tldr"},"TL;DR"),Object(a.b)("p",null,"Add ",Object(a.b)("inlineCode",{parentName:"p"},"module: 'path/to/entry.js'")," in your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),". For typescript project, make sure you have ",Object(a.b)("inlineCode",{parentName:"p"},'{"module": "es6"}')," in ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),Object(a.b)("h3",{id:"why"},"Why"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"bundlers (rollup/webpack) could use ES modules (import/export) to perform tree-shaking.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"When you import a library, you'll end up having all of it in your bundle, even though you use only a small part. The commonly known ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/guides/tree-shaking/"}),Object(a.b)("inlineCode",{parentName:"a"},"tree-shaking"))," is a feature that makes sure unused modules will not be included in your bundle.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Yoshi (webpack under the hood)",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://webpack.js.org/guides/author-libraries/#final-steps"}),"will use ",Object(a.b)("inlineCode",{parentName:"a"},"module")," field instead of ",Object(a.b)("inlineCode",{parentName:"a"},"main")),".\nYoshi will also use this field to infer whether to create ",Object(a.b)("inlineCode",{parentName:"li"},"/es")," directory with no modules transformed.")),Object(a.b)("h3",{id:"how"},"How"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Specify path to your entry file with ",Object(a.b)("inlineCode",{parentName:"li"},"module: 'dist/es/src/entry.js'"),". Please note that Yoshi will create ",Object(a.b)("inlineCode",{parentName:"li"},"es")," directory with untranspiled modules near your usual transformation output (",Object(a.b)("inlineCode",{parentName:"li"},"dist/src")," and ",Object(a.b)("inlineCode",{parentName:"li"},"dist/es/src"),").")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"package.json")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"module": "dist/es/src/entry.js"\n},\n"yoshi": {\n  "entry": "./entry.js"\n}\n')),Object(a.b)("p",null,"This will create 2 output targets:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"dist\n\u2514\u2500\u2500 src/entry.js\n\u2514\u2500\u2500 es\n     \u2514\u2500\u2500 src/entry.js\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NOTE:")," In ",Object(a.b)("inlineCode",{parentName:"p"},"pacakge.json"),", you can ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/webpack/webpack/tree/master/examples/side-effects"}),"configure ",Object(a.b)("inlineCode",{parentName:"a"},'"sideEffects": false'))," and allow webpack to perform tree-shaking on your library when imported to other projects, eg:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { Button } from "wix-style-react";\n')))}p.isMDXComponent=!0},283:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);