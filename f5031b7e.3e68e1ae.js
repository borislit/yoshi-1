(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{229:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(2),o=n(6),a=(n(0),n(240)),i={id:"app-flow",title:"App Flow",sidebar_label:"App Flow"},l={id:"version-4.x/app-flow",title:"App Flow",description:"We want to deliver awesome developer experience, one that's specific to the type of application that you build.",source:"@site/versioned_docs/version-4.x/app-flow.md",permalink:"/yoshi/docs/app-flow",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/app-flow.md",version:"4.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1589529706,sidebar_label:"App Flow"},s=[{value:"CLI",id:"cli",children:[{value:"<code>yoshi start</code>",id:"yoshi-start",children:[]},{value:"<code>yoshi build</code>",id:"yoshi-build",children:[]},{value:"<code>yoshi test</code>",id:"yoshi-test",children:[]},{value:"<code>yoshi lint</code>",id:"yoshi-lint",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Migration from legacy flow",id:"migration-from-legacy-flow",children:[]}]}],p={rightToc:s};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We want to deliver awesome developer experience, one that's specific to the type of application that you build."),Object(a.b)("p",null,"App flow is an improved developer experience that is specific to apps. Internally, instead of running many different tools (babel/typescript, sass/less) on various glob patterns, it creates a dedicated Webpack bundle, specifically for the server."),Object(a.b)("p",null,"This has a few advantages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Clean output, clear errors:")," If your build fails or your server throws you should know about it immediately and clearly. Forget of long stack traces or errors that show multiple times; See your server's output in your terminal."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Faster build times:")," Now that Yoshi knows it targets apps, it can only run relevant build operations which can result in a significant speed boost."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Faster server reload:")," When you're working in watch mode and you change a file, Yoshi knows whether to reload your server, client or both. With the addition of ",Object(a.b)("strong",{parentName:"li"},"server-side HMR"),", Yoshi will be able to reload your ",Object(a.b)("inlineCode",{parentName:"li"},"wix-bootstrap-ng")," server almost instantly.")),Object(a.b)("p",null,"In the future, we plan on providing many features specifically for apps. We want to encourage applications to use the new flow."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/11733036/79953456-8a5b2500-8484-11ea-9b2a-956fb0547fe0.png",alt:"A terminal showing the new app flow"}))),Object(a.b)("p",null,"The purpose of this document is to explain how to opt-into this new feature. See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix/yoshi/pull/586"}),"https://github.com/wix/yoshi/pull/586")," for more information on the changes it introduces."),Object(a.b)("h2",{id:"cli"},"CLI"),Object(a.b)("p",null,"These are the scripts that are available to you in a project that uses app flow:"),Object(a.b)("h3",{id:"yoshi-start"},Object(a.b)("inlineCode",{parentName:"h3"},"yoshi start")),Object(a.b)("p",null,"Starts the application in development mode. Runs your application server and ",Object(a.b)("inlineCode",{parentName:"p"},"webpack-dev-server")," on port 3200. Watches for changes and reloads your app automatically. Compilation errors will show both, in the terminal and in the browser."),Object(a.b)("p",null,"Possible flags:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--server"),": ",Object(a.b)("img",{src:"https://img.shields.io/badge/deprecated-yellow"})," By default, starts your application server by running ",Object(a.b)("inlineCode",{parentName:"li"},"index-dev.js|ts"),". Pass a different value to start up a different script."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--url"),": By default, opens your browser with ",Object(a.b)("inlineCode",{parentName:"li"},"http://localhost:3000"),". Use this to pass a different URL."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--production"),": Start using un-minified production build."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--debug"),": Pass this flag to run your application server with a debugger.")),Object(a.b)("h3",{id:"yoshi-build"},Object(a.b)("inlineCode",{parentName:"h3"},"yoshi build")),Object(a.b)("p",null,"Builds your app for production into the ",Object(a.b)("inlineCode",{parentName:"p"},"/dist")," directory. Normally, this command will only run in CI. Client-side assets will be minified."),Object(a.b)("p",null,"Possible flags:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--analyze"),": Analyze production bundle. This is helpful to understand what is included in the bundle."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--stats"),": Generate Webpack stats into ",Object(a.b)("inlineCode",{parentName:"li"},"dist/webpack-stats.json"),".")),Object(a.b)("h3",{id:"yoshi-test"},Object(a.b)("inlineCode",{parentName:"h3"},"yoshi test")),Object(a.b)("p",null,"Same as the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/yoshi/docs/legacy-flow#test"}),"legacy test command")),Object(a.b)("h3",{id:"yoshi-lint"},Object(a.b)("inlineCode",{parentName:"h3"},"yoshi lint")),Object(a.b)("p",null,"Same as the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/yoshi/docs/legacy-flow#lint"}),"legacy lint command")),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"The app flow is using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/yoshi/docs/yoshi-config"}),"yoshi-config")),Object(a.b)("h3",{id:"migration-from-legacy-flow"},"Migration from legacy flow"),Object(a.b)("h4",{id:"fullstack-apps-bootstrap"},"Fullstack apps (bootstrap)"),Object(a.b)("p",null,"Start by opting into app flow by changing your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi.config.js")," to include:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'{\n  "yoshi": {\n+    "projectType": "app"\n  }\n}\n')),Object(a.b)("p",null,"Since we now have one bundle for the server, we'll direct Bootstrap's express app to ",Object(a.b)("inlineCode",{parentName:"p"},"dist/server.js")," file. Edit ",Object(a.b)("inlineCode",{parentName:"p"},"index.js")," with:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),"const bootstrap = require('@wix/wix-bootstrap-ng');\n\nconst app = bootstrap()\n  .use(require('@wix/wix-bootstrap-greynode'))\n  .use(require('@wix/wix-bootstrap-hadron'))\n  .use(require('@wix/wix-bootstrap-renderer'));\n\n-if (process.env.NODE_ENV === 'test') {\n-  app.express('./src/server');\n-} else {\n-  app.express('./dist/src/server');\n-}\n+app.express('./dist/server');\n\napp.start();\n")),Object(a.b)("p",null,"We use Webpack to bundle our server code and it can't handle mixing ",Object(a.b)("inlineCode",{parentName:"p"},"module.exports")," and ECMAScript imports in the same file. To solve it, change your ",Object(a.b)("inlineCode",{parentName:"p"},"server.js")," file to use EcmaScript modules for both, importing and exporting:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),"import wixExpressCsrf from '@wix/wix-express-csrf';\nimport wixExpressRequireHttps from '@wix/wix-express-require-https';\n\n-module.exports = (app, context) => {\n+export default (app, context) => {\n  const config = context.config.load('{%projectName%}');\n\n  app.use(wixExpressCsrf());\n  app.use(wixExpressRequireHttps);\n  app.use(context.renderer.middleware());\n\n  app.get('/', (req, res) => {\n    const renderModel = getRenderModel(req);\n\n    res.renderView('./index.ejs', renderModel);\n  });\n\n  function getRenderModel(req) {\n    const { language, basename, debug } = req.aspects['web-context'];\n\n    return {\n      language,\n      basename,\n      debug: debug || process.env.NODE_ENV === 'development',\n      title: 'Wix Full Stack Project Boilerplate',\n      staticsDomain: config.clientTopology.staticsDomain,\n    };\n  }\n\n  return app;\n};\n")),Object(a.b)("p",null,"We use ",Object(a.b)("inlineCode",{parentName:"p"},"source-map-support")," internally so stack traces show locations in your source files. To work in production (with New Relic monitoring), please install ",Object(a.b)("inlineCode",{parentName:"p"},"source-map-support")," under ",Object(a.b)("inlineCode",{parentName:"p"},"dependencies"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm i --save source-map-support\n")),Object(a.b)("p",null,"If you're interested, opt-into hot module replacement for your server by installing:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm i --save bootstrap-hot-loader\n")),Object(a.b)("p",null,"Then edit ",Object(a.b)("inlineCode",{parentName:"p"},"server.js")," with:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),"import wixExpressCsrf from '@wix/wix-express-csrf';\nimport wixExpressRequireHttps from '@wix/wix-express-require-https';\n+import { hot } from 'bootstrap-hot-loader';\n\n-export default (app, context) => {\n+export default hot(module, (app, context) => {\n  const config = context.config.load('{%projectName%}');\n\n  app.use(wixExpressCsrf());\n  app.use(wixExpressRequireHttps);\n  app.use(context.renderer.middleware());\n\n  app.get('/', (req, res) => {\n    const renderModel = getRenderModel(req);\n\n    res.renderView('./index.ejs', renderModel);\n  });\n\n  function getRenderModel(req) {\n    const { language, basename, debug } = req.aspects['web-context'];\n\n    return {\n      language,\n      basename,\n      debug: debug || process.env.NODE_ENV === 'development',\n      title: 'Wix Full Stack Project Boilerplate',\n      staticsDomain: config.clientTopology.staticsDomain,\n    };\n  }\n\n  return app;\n-};\n+});\n")),Object(a.b)("h4",{id:"client-apps"},"Client apps"),Object(a.b)("p",null,"Start by opting into app flow by changing your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi.config.js")," to include:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'{\n  "yoshi": {\n+    "projectType": "app"\n  }\n}\n')),Object(a.b)("p",null,"In app flow, Yoshi looks for the entry file of your server at ",Object(a.b)("inlineCode",{parentName:"p"},"/dev/server.(js|ts)"),". Move your current local dev server to that location. For example, if your local dev server is in ",Object(a.b)("inlineCode",{parentName:"p"},"index.js"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"mkdir dev\nmv index.js dev/server.js\n")),Object(a.b)("p",null,"With that, Yoshi will now bundle it into ",Object(a.b)("inlineCode",{parentName:"p"},"/dist/server.js"),"."))}c.isMDXComponent=!0},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(m,l({ref:t},p,{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);