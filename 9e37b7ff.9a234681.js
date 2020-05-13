(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return c}));var i=n(2),a=(n(0),n(229));const b={id:"cli",title:"CLI Options",sidebar_label:"CLI Options"},o={id:"version-3.x/api/cli",title:"CLI Options",description:"# Top level flags",source:"@site/versioned_docs/version-3.x/api/cli.md",permalink:"/yoshi/docs/3.x/api/cli",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-3.x/api/cli.md",version:"3.x",lastUpdatedBy:"Ran Yitzhaki",lastUpdatedAt:1589209600,sidebar_label:"CLI Options",sidebar:"version-3.x-docs",previous:{title:"Configuration",permalink:"/yoshi/docs/3.x/api/configuration"},next:{title:"AB Translate",permalink:"/yoshi/docs/3.x/guides/ab-translate"}},r=[{value:"<code>--help</code> ( <code>-h</code> )",id:"--help---h-",children:[]},{value:"<code>--verbose</code>",id:"--verbose",children:[]},{value:"start",id:"start",children:[{value:"options",id:"options",children:[]}]},{value:"build",id:"build",children:[{value:"options",id:"options-1",children:[]}]},{value:"test",id:"test",children:[{value:"options",id:"options-2",children:[]}]},{value:"lint",id:"lint",children:[{value:"options",id:"options-3",children:[]}]},{value:"<code>release</code>",id:"release",children:[{value:"options",id:"options-4",children:[]}]}],l={rightToc:r};function c({components:e,...t}){return Object(a.b)("wrapper",Object(i.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"top-level-flags"},"Top level flags"),Object(a.b)("h3",{id:"--help---h-"},Object(a.b)("inlineCode",{parentName:"h3"},"--help")," ( ",Object(a.b)("inlineCode",{parentName:"h3"},"-h")," )"),Object(a.b)("p",null,"Output usage information"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"./dist/index.js")),Object(a.b)("h3",{id:"--verbose"},Object(a.b)("inlineCode",{parentName:"h3"},"--verbose")),Object(a.b)("p",null,"Yoshi will print verbose logs and error messages."),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"true")," in CI"),Object(a.b)("h1",{id:"commands"},"Commands"),Object(a.b)("p",null,"The following sections describe the available tasks in ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi"),". You can always use the ",Object(a.b)("inlineCode",{parentName:"p"},"--help")," flag for every task to see its usage."),Object(a.b)("h2",{id:"start"},"start"),Object(a.b)("p",null,"This will run the specified (server) ",Object(a.b)("inlineCode",{parentName:"p"},"entryPoint")," file and mount a CDN server."),Object(a.b)("h3",{id:"options"},"options"),Object(a.b)("h4",{id:"--entry-point---e-"},Object(a.b)("inlineCode",{parentName:"h4"},"--entry-point")," ( ",Object(a.b)("inlineCode",{parentName:"h4"},"-e")," )"),Object(a.b)("p",null,"Entry point for the app."),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"./dist/index.js")),Object(a.b)("h4",{id:"--manual-restart"},Object(a.b)("inlineCode",{parentName:"h4"},"--manual-restart")),Object(a.b)("p",null,"Get SIGHUP on change and manage application reboot manually"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"false")),Object(a.b)("h4",{id:"--no-test"},Object(a.b)("inlineCode",{parentName:"h4"},"--no-test")),Object(a.b)("p",null,"Do not spawn ",Object(a.b)("inlineCode",{parentName:"p"},"npm test")," after start"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"false")),Object(a.b)("h4",{id:"--no-server"},Object(a.b)("inlineCode",{parentName:"h4"},"--no-server")),Object(a.b)("p",null,"Do not spawn the app server"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"false")),Object(a.b)("h4",{id:"--ssl"},Object(a.b)("inlineCode",{parentName:"h4"},"--ssl")),Object(a.b)("p",null,"Serve the app bundle on https"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"false")),Object(a.b)("h4",{id:"--debug"},Object(a.b)("inlineCode",{parentName:"h4"},"--debug")),Object(a.b)("p",null,"Allow server debugging, debugger will be available at 127.0.0.1:","[port]"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"0")),Object(a.b)("h4",{id:"--debug-brk"},Object(a.b)("inlineCode",{parentName:"h4"},"--debug-brk")),Object(a.b)("p",null,"Allow server debugging, debugger will be available at 127.0.0.1:","[port]",", process won't start until debugger will be attached"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"0")),Object(a.b)("h4",{id:"--production"},Object(a.b)("inlineCode",{parentName:"h4"},"--production")),Object(a.b)("p",null,"Start using unminified production build (the tests would not run in this mode)"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"0")),Object(a.b)("p",null,"The following are the default values for the CDN server's port, mount directory and whether to serve statics over https or regular http. You can change them in your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "servers": {\n    "cdn": {\n      "port": 3200,\n      "dir": "dist/statics",\n      "ssl": false\n    }\n  }\n}\n')),Object(a.b)("h2",{id:"build"},"build"),Object(a.b)("h3",{id:"options-1"},"options"),Object(a.b)("h4",{id:"--analyze"},Object(a.b)("inlineCode",{parentName:"h4"},"--analyze")),Object(a.b)("p",null,"run webpack-bundle-analyzer plugin."),Object(a.b)("h4",{id:"--stats"},Object(a.b)("inlineCode",{parentName:"h4"},"--stats")),Object(a.b)("p",null,"output webpack stats file to ",Object(a.b)("inlineCode",{parentName:"p"},"dist/webpack-stats.json")," (see also ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/yoshi/docs/3.x/guides/bundle-analyze"}),"bundle analysis"),")|"),Object(a.b)("h4",{id:"--source-map"},Object(a.b)("inlineCode",{parentName:"h4"},"--source-map")),Object(a.b)("p",null,"Explicitly emit bundle source maps."),Object(a.b)("p",null,"This task will perform the following:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Compile using ",Object(a.b)("inlineCode",{parentName:"li"},"TypeScript")," (",Object(a.b)("inlineCode",{parentName:"li"},"*.ts"),") or ",Object(a.b)("inlineCode",{parentName:"li"},"babel")," (",Object(a.b)("inlineCode",{parentName:"li"},"*.js"),") files into ",Object(a.b)("inlineCode",{parentName:"li"},"dist/"),". In case you do not want to transpile server (node), you can remove ",Object(a.b)("inlineCode",{parentName:"li"},".babelrc"),"/",Object(a.b)("inlineCode",{parentName:"li"},"tsconfig"),"/package json's ",Object(a.b)("inlineCode",{parentName:"li"},"babel")," key. If you still need those (for transpiling client code), please use ",Object(a.b)("inlineCode",{parentName:"li"},"yoshi.runIndividualTranspiler"),"."),Object(a.b)("li",{parentName:"ol"},"Copy assets to ",Object(a.b)("inlineCode",{parentName:"li"},"dist")," folder (ejs/html/images...).")),Object(a.b)("p",null,"You can specify multiple entry points in your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," file. This gives the ability build multiple bundles at once. More info about Webpack entries can be found ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"http://webpack.github.io/docs/configuration.html#entry"}),"here"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'"yoshi": {\n  "entry": {\n    "a": "./a",\n    "b": "./b",\n    "c": ["./c", "./d"]\n  }\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," if you have multiple entries you should consider using the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693"}),Object(a.b)("inlineCode",{parentName:"a"},"optimization.splitChunks"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note2:")," the decision whether to use ",Object(a.b)("inlineCode",{parentName:"p"},"TypeScript")," or ",Object(a.b)("inlineCode",{parentName:"p"},"babel")," is done by searching ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," inside the root directory."),Object(a.b)("h2",{id:"test"},"test"),Object(a.b)("h3",{id:"options-2"},"options"),Object(a.b)("h4",{id:"--mocha"},Object(a.b)("inlineCode",{parentName:"h4"},"--mocha")),Object(a.b)("p",null,"Run unit tests with Mocha - this is the default"),Object(a.b)("h4",{id:"--jasmine"},Object(a.b)("inlineCode",{parentName:"h4"},"--jasmine")),Object(a.b)("p",null,"Run unit tests with Jasmine"),Object(a.b)("h4",{id:"--karma"},Object(a.b)("inlineCode",{parentName:"h4"},"--karma")),Object(a.b)("p",null,"Run tests with Karma (browser)"),Object(a.b)("h4",{id:"--jest"},Object(a.b)("inlineCode",{parentName:"h4"},"--jest")),Object(a.b)("p",null,"Run tests with Jest"),Object(a.b)("h4",{id:"--protractor"},Object(a.b)("inlineCode",{parentName:"h4"},"--protractor")),Object(a.b)("p",null,"Run e2e tests with Protractor (e2e)"),Object(a.b)("h4",{id:"--watch"},Object(a.b)("inlineCode",{parentName:"h4"},"--watch")),Object(a.b)("p",null,"Run tests on watch mode (works for mocha, jasmine, jest & karma)"),Object(a.b)("h4",{id:"--debug-1"},Object(a.b)("inlineCode",{parentName:"h4"},"--debug")),Object(a.b)("p",null,"Allow test debugging (works for mocha, jest & protractor)"),Object(a.b)("h4",{id:"--debug-brk-1"},Object(a.b)("inlineCode",{parentName:"h4"},"--debug-brk")),Object(a.b)("p",null,"Allow test debugging (works for mocha, jest & protractor), process won't start until debugger will be attached"),Object(a.b)("h4",{id:"--coverage"},Object(a.b)("inlineCode",{parentName:"h4"},"--coverage")),Object(a.b)("p",null,"Collect and output code coverage"),Object(a.b)("p",null,"By default, this task executes both unit test (using ",Object(a.b)("inlineCode",{parentName:"p"},"mocha")," as default) and e2e test using ",Object(a.b)("inlineCode",{parentName:"p"},"protractor"),".\nDefault unit test glob is ",Object(a.b)("inlineCode",{parentName:"p"},"{test,app,src}/**/*.spec.+(js|ts)"),". You can change this by adding the following to your package.json:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'yoshi: {\n  specs: {\n    node: "my-crazy-tests-glob-here";\n  }\n}\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Note that when specifying multiple flags, only the first one will be considered, so you can't compose test runners (for now).")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Mocha tests setup:"),Object(a.b)("p",{parentName:"li"},"You can add a ",Object(a.b)("inlineCode",{parentName:"p"},"test/mocha-setup.js")," file, with mocha tests specific setup. Mocha will ",Object(a.b)("inlineCode",{parentName:"p"},"require")," this file, if exists.\nExample for such ",Object(a.b)("inlineCode",{parentName:"p"},"test/mocha-setup.js"),":"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'import "babel-polyfill";\nimport "isomorphic-fetch";\nimport sinonChai from "sinon-chai";\nimport chaiAsPromised from "chai-as-promised";\nimport chai from "chai";\n\nchai.use(sinonChai);\nchai.use(chaiAsPromised);\n'))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Karma tests setup:"),Object(a.b)("p",{parentName:"li"},"When running tests using Karma, make sure you have the right configurations in your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," as described in ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#wixspecs"}),Object(a.b)("inlineCode",{parentName:"a"},"yoshi.specs"))," section. In addition, if you have a ",Object(a.b)("inlineCode",{parentName:"p"},"karma.conf.js")," file, the configurations will be merged with our ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"yoshi/config/karma.conf.js"}),"built-in configurations"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Jasmine tests setup:"),Object(a.b)("p",{parentName:"li"},"Specifying a custom glob for test files is possible by configuring ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," as described in ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#wixspecs"}),Object(a.b)("inlineCode",{parentName:"a"},"yoshi.specs")),". The default glob matches ",Object(a.b)("inlineCode",{parentName:"p"},".spec.")," files in all folders."),Object(a.b)("br",null),"If you wish to load helpers, import them all in a file placed at `'test/setup.js'`."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Jest test setup:"),Object(a.b)("p",{parentName:"li"},"You may specify a jest config object in your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),", for example:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'  "jest": {\n    "testRegex": "/src/.*\\\\.spec\\\\.(ts|tsx)$"\n  }\n')),Object(a.b)("p",{parentName:"li"},"Every other argument you'll pass to ",Object(a.b)("inlineCode",{parentName:"p"},"yoshi test --jest")," will be forwarded to jest, For example:"),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"yoshi test --jest --forceExit foo.spec.js")),Object(a.b)("p",{parentName:"li"},"Will run jest on ",Object(a.b)("inlineCode",{parentName:"p"},"foo.spec.js")," file and will apply ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/cli#forceexit"}),Object(a.b)("inlineCode",{parentName:"a"},"forceExit")),"."),Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Note:")," ",Object(a.b)("inlineCode",{parentName:"p"},"--debug & --debug-brk")," won't be transfer to jest, but instead will be ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/troubleshooting#tests-are-failing-and-you-don-t-know-why"}),"used in yoshi for test debugging")))),Object(a.b)("h2",{id:"lint"},"lint"),Object(a.b)("h3",{id:"options-3"},"options"),Object(a.b)("h4",{id:"--fix"},Object(a.b)("inlineCode",{parentName:"h4"},"--fix")),Object(a.b)("p",null,"Automatically fix lint problems"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"false")),Object(a.b)("h4",{id:"--format"},Object(a.b)("inlineCode",{parentName:"h4"},"--format")),Object(a.b)("p",null,"Use a specific formatter for eslint/tslint"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"stylish")),Object(a.b)("h4",{id:"files"},Object(a.b)("inlineCode",{parentName:"h4"},"[files...]")),Object(a.b)("p",null,"Optional list of files (space delimited) to run lint on"),Object(a.b)("p",null,"Default: empty"),Object(a.b)("p",null,"Executes ",Object(a.b)("inlineCode",{parentName:"p"},"TSLint")," or ",Object(a.b)("inlineCode",{parentName:"p"},"ESLint")," (depending on the type of the project) over all matched files. An '.eslintrc' / ",Object(a.b)("inlineCode",{parentName:"p"},"tslint.json")," file with proper configurations is required."),Object(a.b)("h2",{id:"release"},Object(a.b)("inlineCode",{parentName:"h2"},"release")),Object(a.b)("h3",{id:"options-4"},"options"),Object(a.b)("h4",{id:"--minor"},Object(a.b)("inlineCode",{parentName:"h4"},"--minor")),Object(a.b)("p",null,"bump a minor version instead of a patch"),Object(a.b)("p",null,"Default: ",Object(a.b)("inlineCode",{parentName:"p"},"false")),Object(a.b)("p",null,"Bump the patch version in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," using ",Object(a.b)("inlineCode",{parentName:"p"},"wnpm-release"),"."))}c.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var i=n(0),a=n.n(i);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},b=Object.keys(e);for(i=0;i<b.length;i++)n=b[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(i=0;i<b.length;i++)n=b[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,b=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=i,j=s["".concat(o,".").concat(u)]||s[u]||d[u]||b;return n?a.a.createElement(j,r({ref:t},c,{components:n})):a.a.createElement(j,r({ref:t},c))}));function j(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var b=n.length,o=new Array(b);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<b;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);