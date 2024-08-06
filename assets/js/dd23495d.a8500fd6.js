"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[10506],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(o),u=a,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return o?n.createElement(h,r(r({ref:t},m),{},{components:o})):n.createElement(h,r({ref:t},m))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},69048:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=o(87462),a=(o(67294),o(3905));const i={sidebar_position:1},r="Application Mempool",l={unversionedId:"build/building-apps/app-mempool",id:"build/building-apps/app-mempool",title:"Application Mempool",description:"This sections describes how the app-side mempool can be used and replaced.",source:"@site/docs/build/building-apps/02-app-mempool.md",sourceDirName:"build/building-apps",slug:"/build/building-apps/app-mempool",permalink:"/main/build/building-apps/app-mempool",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Overview of app_di.go",permalink:"/main/build/building-apps/app-go-v2"},next:{title:"Application Upgrade",permalink:"/main/build/building-apps/app-upgrade"}},p={},s=[{value:"Mempool",id:"mempool",level:2},{value:"No-op Mempool",id:"no-op-mempool",level:3},{value:"Sender Nonce Mempool",id:"sender-nonce-mempool",level:3},{value:"MaxTxs",id:"maxtxs",level:4},{value:"Seed",id:"seed",level:4},{value:"Priority Nonce Mempool",id:"priority-nonce-mempool",level:3},{value:"MaxTxs",id:"maxtxs-1",level:4},{value:"Callback",id:"callback",level:4}],m={toc:s},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"application-mempool"},"Application Mempool"),(0,a.kt)("admonition",{title:"Synopsis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This sections describes how the app-side mempool can be used and replaced. ")),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.47")," the application has its own mempool to allow much more granular\nblock building than previous versions. This change was enabled by\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v0.37/spec/abci/"},"ABCI 1.0"),".\nNotably it introduces the ",(0,a.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," steps of ABCI++. For more information please see ",(0,a.kt)("a",{parentName:"p",href:"/main/build/abci/introduction"},"here")),(0,a.kt)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/main/learn/advanced/baseapp"},"BaseApp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/main/build/abci/introduction"},"Abci")))),(0,a.kt)("h2",{id:"mempool"},"Mempool"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Before we delve into ",(0,a.kt)("inlineCode",{parentName:"li"},"PrepareProposal")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ProcessProposal"),", let's first walk through the mempool concepts.")),(0,a.kt)("p",null,"There are countless designs that an application developer can write for a mempool, the SDK opted to provide only simple mempool implementations.\nNamely, the SDK provides the following mempools:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#no-op-mempool"},"No-op Mempool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#sender-nonce-mempool"},"Sender Nonce Mempool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#priority-nonce-mempool"},"Priority Nonce Mempool"))),(0,a.kt)("p",null,"The default SDK is a ",(0,a.kt)("a",{parentName:"p",href:"#no-op-mempool"},"No-op Mempool"),", but it can be replaced by the application developer in ",(0,a.kt)("a",{parentName:"p",href:"/main/build/building-apps/app-go-v2"},(0,a.kt)("inlineCode",{parentName:"a"},"app.go")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"nonceMempool := mempool.NewSenderNonceMempool()\nmempoolOpt   := baseapp.SetMempool(nonceMempool)\nbaseAppOptions = append(baseAppOptions, mempoolOpt)\n")),(0,a.kt)("h3",{id:"no-op-mempool"},"No-op Mempool"),(0,a.kt)("p",null,"A no-op mempool is a mempool where transactions are completely discarded and ignored when BaseApp interacts with the mempool.\nWhen this mempool is used, it is assumed that an application will rely on CometBFT's transaction ordering defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal"),",\nwhich is FIFO-ordered by default."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: If a NoOp mempool is used, PrepareProposal and ProcessProposal both should be aware of this as\nPrepareProposal could include transactions that could fail verification in ProcessProposal.")),(0,a.kt)("h3",{id:"sender-nonce-mempool"},"Sender Nonce Mempool"),(0,a.kt)("p",null,"The nonce mempool is a mempool that keeps transactions from an sorted by nonce in order to avoid the issues with nonces.\nIt works by storing the transaction in a list sorted by the transaction nonce. When the proposer asks for transactions to be included in a block it randomly selects a sender and gets the first transaction in the list. It repeats this until the mempool is empty or the block is full. "),(0,a.kt)("p",null,"It is configurable with the following parameters:"),(0,a.kt)("h4",{id:"maxtxs"},"MaxTxs"),(0,a.kt)("p",null,"It is an integer value that sets the mempool in one of three modes, ",(0,a.kt)("em",{parentName:"p"},"bounded"),", ",(0,a.kt)("em",{parentName:"p"},"unbounded"),", or ",(0,a.kt)("em",{parentName:"p"},"disabled"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"negative"),": Disabled, mempool does not insert new transaction and return early."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"zero"),": Unbounded mempool has no transaction limit and will never fail with ",(0,a.kt)("inlineCode",{parentName:"li"},"ErrMempoolTxMaxCapacity"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"positive"),": Bounded, it fails with ",(0,a.kt)("inlineCode",{parentName:"li"},"ErrMempoolTxMaxCapacity")," when ",(0,a.kt)("inlineCode",{parentName:"li"},"maxTx")," value is the same as ",(0,a.kt)("inlineCode",{parentName:"li"},"CountTx()"))),(0,a.kt)("h4",{id:"seed"},"Seed"),(0,a.kt)("p",null,"Set the seed for the random number generator used to select transactions from the mempool."),(0,a.kt)("h3",{id:"priority-nonce-mempool"},"Priority Nonce Mempool"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/types/mempool/priority_nonce_spec.md"},"priority nonce mempool")," is a mempool implementation that stores txs in a partially ordered set by 2 dimensions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"priority"),(0,a.kt)("li",{parentName:"ul"},"sender-nonce (sequence number)")),(0,a.kt)("p",null,"Internally it uses one priority ordered ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/huandu/skiplist"},"skip list")," and one skip list per sender ordered by sender-nonce (sequence number). When there are multiple txs from the same sender, they are not always comparable by priority to other sender txs and must be partially ordered by both sender-nonce and priority."),(0,a.kt)("p",null,"It is configurable with the following parameters:"),(0,a.kt)("h4",{id:"maxtxs-1"},"MaxTxs"),(0,a.kt)("p",null,"It is an integer value that sets the mempool in one of three modes, ",(0,a.kt)("em",{parentName:"p"},"bounded"),", ",(0,a.kt)("em",{parentName:"p"},"unbounded"),", or ",(0,a.kt)("em",{parentName:"p"},"disabled"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"negative"),": Disabled, mempool does not insert new transaction and return early."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"zero"),": Unbounded mempool has no transaction limit and will never fail with ",(0,a.kt)("inlineCode",{parentName:"li"},"ErrMempoolTxMaxCapacity"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"positive"),": Bounded, it fails with ",(0,a.kt)("inlineCode",{parentName:"li"},"ErrMempoolTxMaxCapacity")," when ",(0,a.kt)("inlineCode",{parentName:"li"},"maxTx")," value is the same as ",(0,a.kt)("inlineCode",{parentName:"li"},"CountTx()"))),(0,a.kt)("h4",{id:"callback"},"Callback"),(0,a.kt)("p",null,"The priority nonce mempool provides mempool options allowing the application sets callback(s)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OnRead"),": Set a callback to be called when a transaction is read from the mempool."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TxReplacement"),": Sets a callback to be called when duplicated transaction nonce detected during mempool insert. Application can define a transaction replacement rule based on tx priority or certain transaction fields.")),(0,a.kt)("p",null,"More information on the SDK mempool implementation can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/cosmos/cosmos-sdk/types/mempool"},"godocs"),"."))}c.isMDXComponent=!0}}]);