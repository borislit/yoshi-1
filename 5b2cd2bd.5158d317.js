(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),o=(n(0),n(278)),i={id:"bundle-analyze",title:"Analyze Your Bundle",sidebar_label:"Analyze Your Bundle"},l={id:"version-4.x/legacy-guides/bundle-analyze",title:"Analyze Your Bundle",description:"Running `yoshi` with the `--stats` flag:",source:"@site/versioned_docs/version-4.x/legacy-guides/bundle-analyze.md",permalink:"/yoshi/docs/legacy-guides/bundle-analyze",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/legacy-guides/bundle-analyze.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589385122,sidebar_label:"Analyze Your Bundle"},b=[],c={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Running ",Object(o.b)("inlineCode",{parentName:"p"},"yoshi")," with the ",Object(o.b)("inlineCode",{parentName:"p"},"--stats")," flag:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yoshi build --stats\n")),Object(o.b)("p",null,"Will generate a webpack profiling file in ",Object(o.b)("inlineCode",{parentName:"p"},"target/webpack-stats.json")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"You can do one of the following:")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"use the built in webpack-bundle-analyzer by adding the ",Object(o.b)("inlineCode",{parentName:"li"},"analyze")," option to the build command:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yoshi build --analyze\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"upload the ",Object(o.b)("inlineCode",{parentName:"li"},"webpack-stats.json")," file to a website:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://chrisbateman.github.io/webpack-visualizer/"}),"https://chrisbateman.github.io/webpack-visualizer/")),Object(o.b)("li",{parentName:"ul"},"Drag ",Object(o.b)("inlineCode",{parentName:"li"},"target/webpack-stats.json")," from your project and drop in browser page for analysis.")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"use the CLI with the ",Object(o.b)("inlineCode",{parentName:"p"},"webpack-stats.json"),": try ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/robertknight/webpack-bundle-size-analyzer"}),"https://github.com/robertknight/webpack-bundle-size-analyzer"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use the webpack bundle analyzer page:"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://webpack.github.io/analyse/"}),"https://webpack.github.io/analyse/")),Object(o.b)("li",{parentName:"ul"},"Upload ",Object(o.b)("inlineCode",{parentName:"li"},"target/webpack-stats.json")," from your project")))}p.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||o;return n?r.a.createElement(m,l({ref:t},c,{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);