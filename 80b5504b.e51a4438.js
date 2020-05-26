(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{210:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(2),o=t(9),r=(t(0),t(283)),i={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},l={id:"version-3.x/api/configuration",title:"Configuration",description:"Configurations are meant to be inside package.json under yoshi section or by passing flags to common tasks, for example:",source:"@site/versioned_docs/version-3.x/api/configuration.md",permalink:"/yoshi/docs/3.x/api/configuration",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-3.x/api/configuration.md",version:"3.x",lastUpdatedBy:"wix-renovate",lastUpdatedAt:1589824965,sidebar_label:"Configuration",sidebar:"version-3.x-docs",previous:{title:"Project Types",permalink:"/yoshi/docs/3.x/getting-started/project-types"},next:{title:"CLI Options",permalink:"/yoshi/docs/3.x/api/cli"}},s=[{value:"extends",id:"extends",children:[]},{value:"separateCss",id:"separatecss",children:[]},{value:"splitChunks",id:"splitchunks",children:[]},{value:"cssModules",id:"cssmodules",children:[]},{value:"tpaStyle",id:"tpastyle",children:[]},{value:"enhancedTpaStyle",id:"enhancedtpastyle",children:[]},{value:"clientProjectName",id:"clientprojectname",children:[]},{value:"keepFunctionNames",id:"keepfunctionnames",children:[]},{value:"entry",id:"entry",children:[]},{value:"servers.cdn",id:"serverscdn",children:[]},{value:"externals",id:"externals",children:[]},{value:"specs",id:"specs",children:[]},{value:"runIndividualTranspiler",id:"runindividualtranspiler",children:[]},{value:"transpileTests",id:"transpiletests",children:[]},{value:"externalUnprocessedModules",id:"externalunprocessedmodules",children:[]},{value:"exports",id:"exports",children:[{value:"hmr",id:"hmr",children:[]},{value:"liveReload",id:"livereload",children:[]}]},{value:"performance",id:"performance",children:[]},{value:"resolveAlias",id:"resolvealias",children:[]},{value:"hooks",id:"hooks",children:[]},{value:"umdNamedDefine",id:"umdnameddefine",children:[]},{value:"universalProject",id:"universalproject",children:[]}],c={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Configurations are meant to be inside ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," under ",Object(r.b)("inlineCode",{parentName:"p"},"yoshi")," section or by passing flags to common tasks, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "my-project",\n  "version": "0.0.1",\n  "yoshi": {\n    "entry": {\n      "app": "./app2.js"\n    }\n  }\n}\n')),Object(r.b)("p",null,"Alternatively, you can create a file named ",Object(r.b)("inlineCode",{parentName:"p"},"yoshi.config.js")," in your project's root directory, and export an object with the configuration you need. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n  entry: {\n    app: "./app2.js"\n  }\n};\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Yoshi will prefer configuration from ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," over ",Object(r.b)("inlineCode",{parentName:"p"},"yoshi.config.js")," file.")),Object(r.b)("h2",{id:"extends"},"extends"),Object(r.b)("p",null,"A path to a package that sets up defaults for ",Object(r.b)("inlineCode",{parentName:"p"},"yoshi"),"'s config. The project's config can override those defaults."),Object(r.b)("p",null,"The purpose of this option is to allow reusing configurations that are the same across multiple (similar) projects."),Object(r.b)("p",null,"Here's an example of how a simple ",Object(r.b)("inlineCode",{parentName:"p"},"extends")," file looks like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n  defaultConfig: {\n    exports: "[name]",\n    externals: {\n      lodash: "lodash"\n    }\n  }\n};\n')),Object(r.b)("h2",{id:"separatecss"},"separateCss"),Object(r.b)("p",null,"By default, your ",Object(r.b)("inlineCode",{parentName:"p"},"require"),"d css will bundled to a separate ",Object(r.b)("inlineCode",{parentName:"p"},"app.css")," bundle. You can leave your css in main js bundle by adding the following to your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "separateCss": false\n}\n')),Object(r.b)("h2",{id:"splitchunks"},"splitChunks"),Object(r.b)("p",null,"Configure webpack's ",Object(r.b)("inlineCode",{parentName:"p"},"optimization.splitChunks")," option. It's an opt-in feature that creates a separate file (known as a chunk), consisting of common modules shared between multiple entry points."),Object(r.b)("p",null,"Supports both ",Object(r.b)("inlineCode",{parentName:"p"},"false")," value ",Object(r.b)("em",{parentName:"p"},"(default)"),", ",Object(r.b)("inlineCode",{parentName:"p"},"true")," and a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693#configuration"}),"configuration object"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "splitChunks": true\n  }\n')),Object(r.b)("h2",{id:"cssmodules"},"cssModules"),Object(r.b)("p",null,"We use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules"}),"css modules")," as default. You can disable this option any time by adding the following to wix section inside your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "cssModules": false\n}\n')),Object(r.b)("p",null,"You also use the ",Object(r.b)("inlineCode",{parentName:"p"},"prod")," keyword to only separate css on CI and production, this is useful for speeding up HMR on local dev environments."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "separateCss": "prod"\n}\n')),Object(r.b)("p",null,"Disabling cssModules on a specific css file is possible by adding ",Object(r.b)("inlineCode",{parentName:"p"},".global")," before file extension.\nFor example:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"./Counter.global.scss")," //no css modules for this file"),Object(r.b)("p",null,"Using css modules inside your component is easy:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import s from "./Counter.scss"; // import css/scss\n\n<p className={s.mainColor}>{counterValue}</p>;\n')),Object(r.b)("p",null,"Using css when css modules are turned off:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import "./Counter.scss"; // import css/scss\n\n<p className="mainColor">{counterValue}</p>;\n')),Object(r.b)("h2",{id:"tpastyle"},"tpaStyle"),Object(r.b)("p",null,"Set to true to build with TPA style."),Object(r.b)("h2",{id:"enhancedtpastyle"},"enhancedTpaStyle"),Object(r.b)("p",null,"Set to true to build with enhanced TPA style."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"https://img.shields.io/badge/status-experimental-ff69b4.svg",alt:"status experimental"})))),Object(r.b)("h2",{id:"clientprojectname"},"clientProjectName"),Object(r.b)("p",null,"The name of the client project."),Object(r.b)("h2",{id:"keepfunctionnames"},"keepFunctionNames"),Object(r.b)("p",null,"Set to true to keep function names when uglifying"),Object(r.b)("h2",{id:"entry"},"entry"),Object(r.b)("p",null,"Explanation is in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/yoshi/docs/3.x/api/cli#build"}),"cli/build")," section."),Object(r.b)("h2",{id:"serverscdn"},"servers.cdn"),Object(r.b)("p",null,"Explanation is in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/yoshi/docs/3.x/api/cli#start"}),"cli/start")," section."),Object(r.b)("h2",{id:"externals"},"externals"),Object(r.b)("p",null,"Prevent bundling of certain imported packages and instead retrieve these external dependencies at runtime (as a script tags)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "yoshi": {\n    "externals": {\n      "react": "React"\n    }\n  }\n}\n')),Object(r.b)("h2",{id:"specs"},"specs"),Object(r.b)("p",null,"Specs globs are configurable. ",Object(r.b)("inlineCode",{parentName:"p"},"browser")," is for karma, ",Object(r.b)("inlineCode",{parentName:"p"},"node")," is for mocha and jasmine."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "yoshi": {\n    "specs": {\n      "browser": "dist/custom/globs/**/*.spec.js",\n      "node": "dist/custom/globs/**/*.spec.js"\n    }\n  }\n}\n')),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "yoshi": {\n    "specs": {\n      "browser": "dist/src/client/**/*.spec.js",\n      "node": "dist/src/server/**/*.spec.js"\n    }\n  }\n}\n')),Object(r.b)("h2",{id:"runindividualtranspiler"},"runIndividualTranspiler"),Object(r.b)("p",null,"In case you don't want to transpile your server (node) code, and you still need ",Object(r.b)("inlineCode",{parentName:"p"},".babelrc"),"/",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig"),", you can add ",Object(r.b)("inlineCode",{parentName:"p"},"runIndividualTranspiler")," flag to skip server transpiling."),Object(r.b)("h2",{id:"transpiletests"},"transpileTests"),Object(r.b)("p",null,"An option to not transpile tests with Babel (via ",Object(r.b)("inlineCode",{parentName:"p"},"babel-register"),"). Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("h2",{id:"externalunprocessedmodules"},"externalUnprocessedModules"),Object(r.b)("p",null,"You can explicitly ask build process to transpile some node modules in case those modules do not contain transpiled code.\nNote that this is not a recommended workflow. It can be very error prone:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"It might be for example that your app babel config and the node module babel config will be conflicting."),Object(r.b)("li",{parentName:"ol"},"Any babel plugin that is used by your dependencies will need to be installed by your app as well."),Object(r.b)("li",{parentName:"ol"},"You'll need to also add nested dependencies that need transpiling into array, which can be confusing.")),Object(r.b)("p",null,"Anyway, if you don't have a better alternative you can pass array with module names in this property."),Object(r.b)("h2",{id:"exports"},"exports"),Object(r.b)("p",null,"If set, export the bundle as library. ",Object(r.b)("inlineCode",{parentName:"p"},"yoshi.exports")," is the name."),Object(r.b)("p",null,"Use this if you are writing a library and want to publish it as single file. Library will be exported with ",Object(r.b)("inlineCode",{parentName:"p"},"UMD")," format."),Object(r.b)("h3",{id:"hmr"},"hmr"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Boolean")," | ",Object(r.b)("inlineCode",{parentName:"p"},'"auto"')),Object(r.b)("p",null,"Set to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," in order to disable hot module replacement. (defaults to true)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'"auto"')," is an experimental feature which provides zero configuration HMR for react. It will include ",Object(r.b)("inlineCode",{parentName:"p"},"react-hot-loader")," to the top of the entry file and will wrap React's root component in special Higher Order Component which enables hot module reload for react. Also it will call ",Object(r.b)("inlineCode",{parentName:"p"},"module.hot.accept")," on the project's entry file."),Object(r.b)("h3",{id:"livereload"},"liveReload"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Boolean")),Object(r.b)("p",null,"If true, instructs the browser to physically refresh the entire page if / when webpack indicates that a hot patch cannot be applied and a full refresh is needed."),Object(r.b)("h2",{id:"performance"},"performance"),Object(r.b)("p",null,"Allows to use the Webpack Performance Budget feature.\nThe configuration object is the same as in webpack.\nFor more info, you can read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/performance/"}),"webpack docs"),"."),Object(r.b)("h2",{id:"resolvealias"},"resolveAlias"),Object(r.b)("p",null,"Allows you to use the Webpack Resolve Alias feature.\nThe configuration object is the same as in Webpack, note that the paths are relative to Webpack's context.\nFor more info, you can read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/resolve/#resolve-alias"}),"webpack docs"),"."),Object(r.b)("h2",{id:"hooks"},"hooks"),Object(r.b)("p",null,"Run a shell script at a specific time in yoshi's execution."),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "yoshi": {\n    "hooks": {\n      "prelint": "echo running-before-lint"\n    }\n  }\n}\n')),Object(r.b)("p",null,"Next time you'll run ",Object(r.b)("inlineCode",{parentName:"p"},"yoshi lint"),", this command will execute and only then the linter will run."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"supported hooks:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"prelint")," - Runs before the linter")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Missing a hook?")," Feel free to open issues/PRs for more hooks if needed."),Object(r.b)("h2",{id:"umdnameddefine"},"umdNamedDefine"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Boolean")),Object(r.b)("p",null,"If option is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," AMD modules of the UMD build will have names. Otherwise an anonymous define is used(the same as in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/output/#output-umdnameddefine"}),"webpack"),").\nBy default it is ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("h2",{id:"universalproject"},"universalProject"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Boolean")),Object(r.b)("p",null,"Indicates whether the current project is a universal project."))}p.isMDXComponent=!0},283:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return t?o.a.createElement(m,l(l({ref:n},c),{},{components:t})):o.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);