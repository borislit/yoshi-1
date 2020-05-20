(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),i=(n(0),n(284)),o={id:"bundle-analyze",title:"Analyze Your Bundle",sidebar_label:"Analyze Your Bundle"},l={id:"version-3.x/guides/bundle-analyze",title:"Analyze Your Bundle",description:"Running `yoshi` with the `--stats` flag:",source:"@site/versioned_docs/version-3.x/guides/bundle-analyze.md",permalink:"/yoshi/docs/3.x/guides/bundle-analyze",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-3.x/guides/bundle-analyze.md",version:"3.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589717529,sidebar_label:"Analyze Your Bundle",sidebar:"version-3.x-docs",previous:{title:"Assets",permalink:"/yoshi/docs/3.x/guides/assets"},next:{title:"Debugging",permalink:"/yoshi/docs/3.x/guides/debugging"}},b=[],c={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Running ",Object(i.b)("inlineCode",{parentName:"p"},"yoshi")," with the ",Object(i.b)("inlineCode",{parentName:"p"},"--stats")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yoshi build --stats\n")),Object(i.b)("p",null,"Will generate a webpack profiling file in ",Object(i.b)("inlineCode",{parentName:"p"},"target/webpack-stats.json")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"You can do one of the following:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"use the built in webpack-bundle-analyzer by adding the ",Object(i.b)("inlineCode",{parentName:"li"},"analyze")," option to the build command:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yoshi build --analyze\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"upload the ",Object(i.b)("inlineCode",{parentName:"li"},"webpack-stats.json")," file to a website:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://chrisbateman.github.io/webpack-visualizer/"}),"https://chrisbateman.github.io/webpack-visualizer/")),Object(i.b)("li",{parentName:"ul"},"Drag ",Object(i.b)("inlineCode",{parentName:"li"},"target/webpack-stats.json")," from your project and drop in browser page for analysis.")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"use the CLI with the ",Object(i.b)("inlineCode",{parentName:"p"},"webpack-stats.json"),": try ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/robertknight/webpack-bundle-size-analyzer"}),"https://github.com/robertknight/webpack-bundle-size-analyzer"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use the webpack bundle analyzer page:"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://webpack.github.io/analyse/"}),"https://webpack.github.io/analyse/")),Object(i.b)("li",{parentName:"ul"},"Upload ",Object(i.b)("inlineCode",{parentName:"li"},"target/webpack-stats.json")," from your project")))}p.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(m,l({ref:t},c,{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);