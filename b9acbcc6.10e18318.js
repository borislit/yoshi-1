(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(2),r=(n(0),n(229));const o={title:"Moving To Semantic Versioning",author:"Ran Yitzhaki & Ronen Amiel"},i={permalink:"/yoshi/blog/2018/03/14/semantic-versioning",source:"@site/blog/2018-03-14-semantic-versioning.md",description:"## TL;DR",date:"2018-03-14T00:00:00.000Z",tags:[],title:"Moving To Semantic Versioning",readingTime:1.925,truncated:!1,prevItem:{title:"Yoshi 2.0",permalink:"/yoshi/blog/2018/03/15/yoshi-2"},nextItem:{title:"Yoshi Is Not Dead",permalink:"/yoshi/blog/2018/03/14/yoshi-is-not-dead"}},l=[{value:"TL;DR",id:"tldr",children:[{value:"What were the problems?",id:"what-were-the-problems",children:[]},{value:"The solution",id:"the-solution",children:[]},{value:"what is <code>semver</code>",id:"what-is-semver",children:[]}]}],s={rightToc:l};function c({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tldr"},"TL;DR"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Do not use ",Object(r.b)("inlineCode",{parentName:"strong"},"latest")," when using ",Object(r.b)("inlineCode",{parentName:"strong"},"yoshi")," or any of our libraries. Instead, use a valid semantic version. This way, when we release breaking changes, your app will not get the latest version, thus won't break.")),Object(r.b)("p",null,"Until not long ago, we worked in a ",Object(r.b)("strong",{parentName:"p"},'"latest is the greatest"')," manner, which meant that we all need to put ",Object(r.b)("inlineCode",{parentName:"p"},"latest")," in our ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," regarding internal packages like ",Object(r.b)("inlineCode",{parentName:"p"},"yoshi")," or ",Object(r.b)("inlineCode",{parentName:"p"},"wix-style-react"),"."),Object(r.b)("h3",{id:"what-were-the-problems"},"What were the problems?"),Object(r.b)("p",null,"Whenever we had to release a breaking change, we made it available only with a feature toggle which required an action from you. Then we had to ask you to opt-into it, and eventually remove the old way and ask you to opt-out again. Also, it did not work for changes like bumping the version of a major dependency like ",Object(r.b)("inlineCode",{parentName:"p"},"eslint")," or ",Object(r.b)("inlineCode",{parentName:"p"},"jest"),". This made it really hard for us to move forward, and our tools and you suffered because of it."),Object(r.b)("h3",{id:"the-solution"},"The solution"),Object(r.b)("p",null,"With ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://semver.org/"}),"semver"),", whenever we need to release a breaking change we can release it as a new major version. You and all other users won't be affected, you'll have to go to our ",Object(r.b)("inlineCode",{parentName:"p"},"CHANGELOG.md"),", see what has changed, and adjust to the changes. This makes the process much simpler. We will do our best to make it as easy as we can."),Object(r.b)("h3",{id:"what-is-semver"},"what is ",Object(r.b)("inlineCode",{parentName:"h3"},"semver")),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"MAJOR version when you make incompatible API changes,"),Object(r.b)("li",{parentName:"ul"},"MINOR version when you add functionality in a backwards-compatible manner, and"),Object(r.b)("li",{parentName:"ul"},"PATCH version when you make backwards-compatible bug fixes."))),Object(r.b)("p",null,"If the owner of the package respects that, it means breaking changes will occur only on major versions and it's safe to list the package as ",Object(r.b)("inlineCode",{parentName:"p"},"^2.0.0")," for example instead of ",Object(r.b)("inlineCode",{parentName:"p"},"latest"),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"^")," is a sign ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.npmjs.com/getting-started/semantic-versioning#semver-for-consumers"}),"respected by the package manager")," and says that you want to get updates from ",Object(r.b)("inlineCode",{parentName:"p"},"patch")," and ",Object(r.b)("inlineCode",{parentName:"p"},"minor")," versions."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This also means that you'll need to update major version manually!")),Object(r.b)("p",null,"With every major version, we will provide a migration guide that will tell you which API broke, or what you should do in order to move to the next version."),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Wait! how do I make sure I don't stay behind?")),Object(r.b)("p",null,"Don't worry, we use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix/depkeeper"}),"depkeeper"),", that will notify you in case you did not update versions for too long."))}c.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,l({ref:t},c,{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);