"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[68032],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},71820:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={sidebar_position:0},i="Learn",c={unversionedId:"learn/learn",id:"version-0.50/learn/learn",title:"Learn",description:"*   Introduction -  Dive into the fundamentals of Cosmos SDK with an insightful introduction,",source:"@site/versioned_docs/version-0.50/learn/learn.md",sourceDirName:"learn",slug:"/learn/",permalink:"/v0.50/learn/",draft:!1,tags:[],version:"0.50",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"learnSidebar",next:{title:"What is the Cosmos SDK",permalink:"/v0.50/learn/intro/overview"}},l={},s=[],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"learn"},"Learn"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v0.50/learn/intro/overview"},"Introduction")," -  Dive into the fundamentals of Cosmos SDK with an insightful introduction,\nlaying the groundwork for understanding blockchain development. In this section we provide a High-Level Overview of the SDK, then dive deeper into Core concepts such as Application-Specific Blockchains, Blockchain Architecture, and finally we begin to explore what are the main components of the SDK."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v0.50/learn/beginner/app-anatomy"},"Beginner"),' - Start your journey with beginner-friendly resources in the Cosmos SDK\'s "Learn"\nsection, providing a gentle entry point for newcomers to blockchain development. Here we focus on a little more detail, covering the Anatomy of a Cosmos SDK Application, Transaction Lifecycles, Accounts and lastly, Gas and Fees.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v0.50/learn/advanced/baseapp"},"Advanced")," - Level up your Cosmos SDK expertise with advanced topics, tailored for experienced\ndevelopers diving into intricate blockchain application development. We cover the Cosmos SDK on a lower level as we dive into the core of the SDK with BaseApp, Transactions, Context, Node Client (Daemon), Store, Encoding, gRPC, REST, and CometBFT Endpoints, CLI, Events, Telementry, Object-Capability Model, RunTx recovery middleware, Cosmos Blockchain Simulator, Protobuf Documentation, In-Place Store Migrations, Configuration and AutoCLI.")))}d.isMDXComponent=!0}}]);