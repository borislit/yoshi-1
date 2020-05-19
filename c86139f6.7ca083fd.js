(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{242:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(9),a=(t(0),t(278)),i={id:"split-chunks",title:"Split Chunks",sidebar_label:"Split Chunks"},c={id:"version-4.x/legacy-guides/split-chunks",title:"Split Chunks",description:"## How do I separately bundle common logic for multiple entries?",source:"@site/versioned_docs/version-4.x/legacy-guides/split-chunks.md",permalink:"/yoshi/docs/legacy-guides/split-chunks",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/legacy-guides/split-chunks.md",version:"4.x",lastUpdatedBy:"Ronen Amiel",lastUpdatedAt:1589463549,sidebar_label:"Split Chunks"},l=[{value:"How do I separately bundle common logic for multiple entries?",id:"how-do-i-separately-bundle-common-logic-for-multiple-entries",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"how-do-i-separately-bundle-common-logic-for-multiple-entries"},"How do I separately bundle common logic for multiple entries?"),Object(a.b)("p",null,"If you are using multiple entries you might consider using the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693"}),Object(a.b)("inlineCode",{parentName:"a"},"yoshi.splitChunks")),", it will create a separate file (chunk) consisting of common modules shared between multiple entry points. This results in page speed optimizations as the browser can quickly serve the shared code from cache, rather than being forced to load a larger bundle whenever a new page is visited."),Object(a.b)("p",null,"If you want to add it, go to your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," and add the ",Object(a.b)("inlineCode",{parentName:"p"},"commonChunks")," option, the value can be a ",Object(a.b)("em",{parentName:"p"},"boolean")," or an ",Object(a.b)("em",{parentName:"p"},"object"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "entry": {\n    "a": "./a",\n    "b": "./b",\n  },\n  "splitChunks": true\n}\n')),Object(a.b)("p",null,"Insert ",Object(a.b)("inlineCode",{parentName:"p"},"true")," for the default configuration and an object for custom configuration, it is the same config you would normally insert to the plugin -> ",Object(a.b)("inlineCode",{parentName:"p"},"optimization.splitChunks: <config>")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// default configuration\n{\n  "chunks": "all",\n  "name": "commons",\n  "minChunks": 2\n};\n')),Object(a.b)("p",null,"Once the plugin is active it will generate the following files if needed:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"commons.chunk.js")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"commons.chunk.min.js")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"commons.chunk.js.map")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"commons.css")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"commons.min.css")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"commons.css.map"))),Object(a.b)("p",null,"Don't forget to add them into your html file before the entry point."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<script\n  src="commons.chunk<% if (!debug) { %>.min<% } %>.js"\n  charset="utf-8"\n><\/script>\n<script\n  src="entry.bundle<% if (!debug) { %>.min<% } %>.js"\n  charset="utf-8"\n><\/script>\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<link\n  rel="stylesheet"\n  type="text/css"\n  href="commons<% if (!debug) { %>.min<% } %>.css"\n/>\n<link\n  rel="stylesheet"\n  type="text/css"\n  href="app<% if (!debug) { %>.min<% } %>.css"\n/>\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," since ",Object(a.b)("inlineCode",{parentName:"p"},"1.1.0")," version (webpack 4 support), if you're customizing ",Object(a.b)("inlineCode",{parentName:"p"},"splitChunks")," with ",Object(a.b)("em",{parentName:"p"},"configuration object"),", you should pass ",Object(a.b)("inlineCode",{parentName:"p"},'splitChunks.chunks: "all" | "async" | "initial"')," option.\nPlease look into ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693#configuration"}),"RIP CommonsChunkPlugin")," to receive all advantage of webpack 4 ",Object(a.b)("inlineCode",{parentName:"p"},"splitChunks")," optimizations."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note 2:")," consider chunk filename update after ",Object(a.b)("inlineCode",{parentName:"p"},"1.1.0"),": ",Object(a.b)("inlineCode",{parentName:"p"},"chunk")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"bundle"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),"- commons.bundle.js\n+ commons.chunk.js\n")))}p.isMDXComponent=!0},278:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return t?o.a.createElement(d,c({ref:n},s,{components:t})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);