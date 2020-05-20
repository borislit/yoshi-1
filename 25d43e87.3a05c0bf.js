(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(9),r=(n(0),n(284)),i={title:"Yoshi 2.0",author:"Ran Yitzhaki",authorURL:"http://github.com/ranyitz"},l={permalink:"/yoshi/blog/2018/03/15/yoshi-2",source:"@site/blog/2018-03-15-yoshi-2.md",description:":tada: We are very excited to bring you our next version - `Yoshi 2`.",date:"2018-03-15T00:00:00.000Z",tags:[],title:"Yoshi 2.0",readingTime:2.79,truncated:!1,prevItem:{title:"Yoshi 3.0",permalink:"/yoshi/blog/2018/06/03/yoshi-3"},nextItem:{title:"Yoshi Is Not Dead",permalink:"/yoshi/blog/2018/03/14/yoshi-is-not-dead"}},c=[{value:"Webpack@4",id:"webpack4",children:[]},{value:"ESLint@4",id:"eslint4",children:[]},{value:"Upgrade today!",id:"upgrade-today",children:[{value:"FAQ",id:"faq",children:[]}]},{value:"I have two eslint rules that are clashing!",id:"i-have-two-eslint-rules-that-are-clashing",children:[]},{value:"I have a storybook configuration, which runs using webpack 3.",id:"i-have-a-storybook-configuration-which-runs-using-webpack-3",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\ud83c\udf89 We are very excited to bring you our next version - ",Object(r.b)("inlineCode",{parentName:"p"},"Yoshi 2"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"There are going to be two big changes:")),Object(r.b)("h2",{id:"webpack4"},"Webpack@4"),Object(r.b)("p",null,"I can explain what's good in webpack 4, but ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/webpack/webpack-4-released-today-6cdb994702d4"}),"Sean T. Larkin does it better"),", also, have a look at the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/webpack/webpack/releases/tag/v4.0.0"}),"release notes"),"."),Object(r.b)("p",null,"Because Yoshi is using webpack under the hood, we encapsulate the API changes for you, and you will enjoy the faster build time and more from the webpack team. For most of the use cases, no change required."),Object(r.b)("h2",{id:"eslint4"},"ESLint@4"),Object(r.b)("p",null,"We are a bit behind on the ",Object(r.b)("inlineCode",{parentName:"p"},"eslint")," version, the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/eslint/eslint/releases/tag/v4.0.0"}),"4th release")," was on ",Object(r.b)("inlineCode",{parentName:"p"},"Jun 12, 2017")," which is almost a year ago. This is the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://eslint.org/docs/user-guide/migrating-to-4.0.0"}),"migration guide"),", it has some bug fixes and it will enable us to improve our linting in the future."),Object(r.b)("p",null,"This is a ",Object(r.b)("strong",{parentName:"p"},"Breaking Change"),", mostly because of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://eslint.org/docs/user-guide/migrating-to-4.0.0#-the-indent-rule-is-more-strict"}),"indent rule")," but there could be some other ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://eslint.org/docs/user-guide/migrating-to-4.0.0#breaking-changes-for-users"}),"breaking changes")," in your projects. Usually running ",Object(r.b)("inlineCode",{parentName:"p"},"npx haste lint --fix")," would run ",Object(r.b)("inlineCode",{parentName:"p"},"eslint --fix")," under the hood and will fix all the autofixable errors."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"upgrade-today"},"Upgrade today!"),Object(r.b)("p",null,"If you are using ",Object(r.b)("inlineCode",{parentName:"p"},"haste-preset-yoshi")," remove it from the dependencies field, and install the next version of Yoshi instead (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix-private/fed-handbook/wiki/Yoshi-is-not-dead"}),"why we are going back to Yoshi?"),"). Also, replace all the usages of ",Object(r.b)("inlineCode",{parentName:"p"},"haste")," to ",Object(r.b)("inlineCode",{parentName:"p"},"yoshi"),". This is an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix-private/guineapig2/pull/487"}),"example of a successful migration")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install our next version"),Object(r.b)("li",{parentName:"ol"},"Remove ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules")),Object(r.b)("li",{parentName:"ol"},"Remove any lock file if exists"),Object(r.b)("li",{parentName:"ol"},"Reinstall dependencies")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm i --save-dev yoshi@2\nrm -rf node_modules package-lock.js\nnpm i\n")),Object(r.b)("p",null,"\u270b Get it before everyone else!"),Object(r.b)("p",null,"\ud83d\udc42 Feel free to ask us questions in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://wix.slack.com/messages/fed-infra"}),"#fed-infra"),"."),Object(r.b)("p",null,"\ud83d\ude3c Let us know how was the migration, how faster your build became?"),Object(r.b)("p",null,"\ud83d\udcd1 For the full feature list, head to our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix-private/wix-haste/blob/2.0.0/CHANGELOG.md"}),"changelog.md")),Object(r.b)("p",null,"\u2764\ufe0f Big thanks to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/yavorsky"}),"Artem Yavorsky")," for doing most of the work on this version!"),Object(r.b)("hr",null),Object(r.b)("h1",{id:"migration-guide"},"Migration guide"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install ",Object(r.b)("inlineCode",{parentName:"li"},"yoshi 2")," (and verify change in ",Object(r.b)("inlineCode",{parentName:"li"},"package.json"),"):")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm i -D yoshi@2\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Remove and reinstall your ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules")," (do not use an old lockfile)."),Object(r.b)("li",{parentName:"ol"},"Yoshi 2 does not support ",Object(r.b)("inlineCode",{parentName:"li"},"haste")," bin anymore, replace all your ",Object(r.b)("inlineCode",{parentName:"li"},"haste [cmd]")," in npm scripts to ",Object(r.b)("inlineCode",{parentName:"li"},"yoshi [cmd]"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),"-haste start\n+yoshi start\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Remove the following as it's not needed:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"haste": {\n    "preset": "yoshi"\n}\n')),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Fix all the lint errors (use the autofixer for all fixable errors):")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run lint -- --fix\n")),Object(r.b)("h3",{id:"faq"},"FAQ"),Object(r.b)("h2",{id:"i-have-two-eslint-rules-that-are-clashing"},"I have two eslint rules that are clashing!"),Object(r.b)("p",null,"This is probably because of the new indent rule which is clashing with the ",Object(r.b)("inlineCode",{parentName:"p"},"jsx-closing-bracket-location")," from ",Object(r.b)("inlineCode",{parentName:"p"},"eslint-plugin-react")," which is used under the hood when extending ",Object(r.b)("inlineCode",{parentName:"p"},"eslint-config-wix/react"),". To solve it add the following to your ",Object(r.b)("inlineCode",{parentName:"p"},".eslintrc")," or ",Object(r.b)("inlineCode",{parentName:"p"},"eslintConfig")," field in ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"react/jsx-closing-bracket-location": ["error", {\n      "nonEmpty": "tag-aligned",\n      "selfClosing": false\n    }]\n')),Object(r.b)("h2",{id:"i-have-a-storybook-configuration-which-runs-using-webpack-3"},"I have a storybook configuration, which runs using webpack 3."),Object(r.b)("p",null,"Webpack is one of those packages you want to have only once. (just one version in your node_modules), which means you should update the storybook version to a webpack4 compatible one, any ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/storybooks/storybook/releases/tag/v4.0.0-alpha.3"}),"v4.0.0")," would do."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Update the storybook version in ",Object(r.b)("inlineCode",{parentName:"li"},"package.json")," before installing dependencies."),Object(r.b)("li",{parentName:"ol"},"If you have a custom storybook configuration (probably in ",Object(r.b)("inlineCode",{parentName:"li"},".storybook")," directory), please modify it to use get the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://storybook.js.org/configurations/custom-webpack-config/#full-control-mode--default"}),"default configuration")," as an argument as in the following example:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const yoshiWebpackConfig = require('yoshi/config/webpack.config.storybook');\n\nmodule.exports = (config, env, defaultConfig) => {\n  return yoshiWebpackConfig(defaultConfig);\n};\n\n")))}s.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,d=p["".concat(i,".").concat(h)]||p[h]||u[h]||r;return n?o.a.createElement(d,l({ref:t},b,{components:n})):o.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);