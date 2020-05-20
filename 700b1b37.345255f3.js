(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(9),a=(n(0),n(284)),i={id:"debugging",title:"Debugging",sidebar_label:"Debugging"},b={id:"version-4.x/legacy-guides/debugging",title:"Debugging",description:"This guide will help you get started with debugging. There are multiple things you can debug and you need a different configuration for each one:",source:"@site/versioned_docs/version-4.x/legacy-guides/debugging.md",permalink:"/yoshi/docs/legacy-guides/debugging",editUrl:"https://github.com/wix/yoshi/edit/master/website/versioned_docs/version-4.x/legacy-guides/debugging.md",version:"4.x",lastUpdatedBy:"Artem Yavorsky",lastUpdatedAt:1589717529,sidebar_label:"Debugging"},c=[{value:"Enable Inspector",id:"enable-inspector",children:[{value:"Break before the code starts",id:"break-before-the-code-starts",children:[]},{value:"Inspector Clients",id:"inspector-clients",children:[]}]},{value:"Debugging Puppeteer E2E tests",id:"debugging-puppeteer-e2e-tests",children:[{value:"Debugging in watch mode",id:"debugging-in-watch-mode",children:[]},{value:"Debugging by default configuration",id:"debugging-by-default-configuration",children:[]},{value:"Adding breakpoints in the browser",id:"adding-breakpoints-in-the-browser",children:[]}]}],d={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guide will help you get started with debugging. There are multiple things you can debug and you need a different configuration for each one:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Debug your client code")," - No configuration needed, just open devtools on your browser."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Debug your server code")," - ",Object(a.b)("inlineCode",{parentName:"li"},"yoshi start --debug")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Debug your tests")," - ",Object(a.b)("inlineCode",{parentName:"li"},"yoshi test --debug"))),Object(a.b)("p",null,"When debugging your server/tests you'll need to configure the debugger, depend on your preferred way to debug."),Object(a.b)("h2",{id:"enable-inspector"},"Enable Inspector"),Object(a.b)("p",null,"When started with the ",Object(a.b)("inlineCode",{parentName:"p"},"--debug")," option, Yoshi will allow to attach NodeJS debugger to the relevant child process with the default host and port.\nYou can configure the default port by: ",Object(a.b)("inlineCode",{parentName:"p"},"--debug=XXXX")),Object(a.b)("h3",{id:"break-before-the-code-starts"},"Break before the code starts"),Object(a.b)("p",null,"When started with the ",Object(a.b)("inlineCode",{parentName:"p"},"--debug-brk")," option, Yoshi will allow to attach NodeJS debugger and the relevant child process won't start until debugger will be attached.\nYou can configure the default port by: ",Object(a.b)("inlineCode",{parentName:"p"},"--debug-brk=XXXX"),"."),Object(a.b)("h3",{id:"inspector-clients"},Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://nodejs.org/en/docs/guides/debugging-getting-started/#inspector-clients"}),"Inspector Clients")),Object(a.b)("p",null,"Several commercial and open source tools can connect to Node's Inspector and there for can debug Yoshi tasks. Basic info on these follows:"),Object(a.b)("h4",{id:"chrome-devtools-55"},Object(a.b)("a",Object(r.a)({parentName:"h4"},{href:"https://github.com/ChromeDevTools/devtools-frontend"}),"Chrome DevTools")," ",Object(a.b)("a",Object(r.a)({parentName:"h4"},{href:"https://nodejs.org/en/docs/guides/debugging-getting-started/#chrome-devtools-55"}),"55+")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Option 1"),": Open ",Object(a.b)("inlineCode",{parentName:"li"},"chrome://inspect")," in a Chromium-based browser. Click the Configure button and ensure your target host and port are listed."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Option 2 - \u2705 Recommended"),": Install the Chrome Extension NIM (Node Inspector Manager):",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/nim-node-inspector-manage/gnhhdgbaldcilmgcpfddgdbkhjohddkj"}),"https://chrome.google.com/webstore/detail/nim-node-inspector-manage/gnhhdgbaldcilmgcpfddgdbkhjohddkj"))),Object(a.b)("h4",{id:"visual-studio-code-110"},Object(a.b)("a",Object(r.a)({parentName:"h4"},{href:"https://github.com/microsoft/vscode"}),"Visual Studio Code")," ",Object(a.b)("a",Object(r.a)({parentName:"h4"},{href:"https://nodejs.org/en/docs/guides/debugging-getting-started/#visual-studio-code-1-10"}),"1.10+")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In the Debug panel, click the settings icon to open ",Object(a.b)("inlineCode",{parentName:"li"},".vscode/launch.json"),'. Select "Node.js" for initial setup.'),Object(a.b)("li",{parentName:"ul"},"\ud83d\udccc You must tell vscode the target debugging port, otherwise vscode will try to debug Yoshi's main process in random generated port, so add ",Object(a.b)("inlineCode",{parentName:"li"},'"port" : 9229')," (or the port you choose)"),Object(a.b)("li",{parentName:"ul"},"Example launch.json -")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "Run Tests",\n  "type": "node",\n  "request": "launch",\n  "args": ["test", "--debug-brk"],\n  "port": 9229,\n  "program": "${workspaceFolder}/node_modules/.bin/yoshi"\n}\n')),Object(a.b)("h4",{id:"jetbrains-webstorm-20171-and-other-jetbrains-ides"},Object(a.b)("a",Object(r.a)({parentName:"h4"},{href:"https://www.jetbrains.com/webstorm/"}),"JetBrains WebStorm")," ",Object(a.b)("a",Object(r.a)({parentName:"h4"},{href:"https://nodejs.org/en/docs/guides/debugging-getting-started/#jetbrains-webstorm-2017-1-and-other-jetbrains-ides"}),"2017.1+ and other JetBrains IDEs")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a new Node.js debug configuration\n",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"https://user-images.githubusercontent.com/11733036/79953459-8c24e880-8484-11ea-88d3-0438509be11a.png",alt:'WebStorm > new "Run/Debug configuration" popup'}))),Object(a.b)("li",{parentName:"ul"},"In order to manually tell WebStorm the debugging port, create another configuration, use type 'Attach to Node.js/Chrome'\n",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"https://user-images.githubusercontent.com/11733036/79953463-8deeac00-8484-11ea-9f0c-d0ac06946bac.png",alt:"WebStorm > Attach to Node.js/Chrome"}))),Object(a.b)("li",{parentName:"ul"},"Press debug in order to start the remote debugger configuration then start (without debugging) the 'Node.js' configuration")),Object(a.b)("h2",{id:"debugging-puppeteer-e2e-tests"},"Debugging Puppeteer E2E tests"),Object(a.b)("h3",{id:"debugging-in-watch-mode"},"Debugging in watch mode"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"yoshi test --watch")," to run in watch mode"),Object(a.b)("li",{parentName:"ul"},"Press ",Object(a.b)("inlineCode",{parentName:"li"},"d")," in the watch menu to activate debug mode")),Object(a.b)("h3",{id:"debugging-by-default-configuration"},"Debugging by default configuration"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Set ",Object(a.b)("inlineCode",{parentName:"li"},"devtools: true")," in ",Object(a.b)("inlineCode",{parentName:"li"},"jest-yoshi.config"))),Object(a.b)("h3",{id:"adding-breakpoints-in-the-browser"},"Adding breakpoints in the browser"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In order to add a breakpoint to browser, add ",Object(a.b)("inlineCode",{parentName:"li"},"await debugBrowser();")," to your test.")))}l.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),l=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},s=function(e){var t=l(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=l(n),g=r,p=s["".concat(i,".").concat(g)]||s[g]||u[g]||a;return n?o.a.createElement(p,b({ref:t},d,{components:n})):o.a.createElement(p,b({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);