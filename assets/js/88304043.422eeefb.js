"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[51787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={},r="Vote Extensions",s={unversionedId:"build/abci/vote-extensions",id:"version-0.50/build/abci/vote-extensions",title:"Vote Extensions",description:"This section describes how the application can define and use vote extensions",source:"@site/versioned_docs/version-0.50/build/abci/03-vote-extensions.md",sourceDirName:"build/abci",slug:"/build/abci/vote-extensions",permalink:"/v0.50/build/abci/vote-extensions",draft:!1,tags:[],version:"0.50",sidebarPosition:3,frontMatter:{},sidebar:"buildSidebar",previous:{title:"Process Proposal",permalink:"/v0.50/build/abci/process-proposal"},next:{title:"x/upgrade",permalink:"/v0.50/build/modules/"}},l={},p=[{value:"Extend Vote",id:"extend-vote",level:2},{value:"Verify Vote Extension",id:"verify-vote-extension",level:2},{value:"Vote Extension Propagation",id:"vote-extension-propagation",level:2},{value:"Recovery of injected Vote Extensions",id:"recovery-of-injected-vote-extensions",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vote-extensions"},"Vote Extensions"),(0,i.kt)("admonition",{title:"Synopsis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This section describes how the application can define and use vote extensions\ndefined in ABCI++.")),(0,i.kt)("h2",{id:"extend-vote"},"Extend Vote"),(0,i.kt)("p",null,"ABCI++ allows an application to extend a pre-commit vote with arbitrary data. This\nprocess does NOT have to be deterministic, and the data returned can be unique to the\nvalidator process. The Cosmos SDK defines ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.1/types/abci.go#L26-L27"},(0,i.kt)("inlineCode",{parentName:"a"},"baseapp.ExtendVoteHandler")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type ExtendVoteHandler func(Context, *abci.RequestExtendVote) (*abci.ResponseExtendVote, error)\n")),(0,i.kt)("p",null,"An application can set this handler in ",(0,i.kt)("inlineCode",{parentName:"p"},"app.go")," via the ",(0,i.kt)("inlineCode",{parentName:"p"},"baseapp.SetExtendVoteHandler"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp")," option function. The ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.ExtendVoteHandler"),", if defined, is called during\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtendVote")," ABCI method. Note, if an application decides to implement\n",(0,i.kt)("inlineCode",{parentName:"p"},"baseapp.ExtendVoteHandler"),", it MUST return a non-nil ",(0,i.kt)("inlineCode",{parentName:"p"},"VoteExtension"),". However, the vote\nextension can be empty. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft/blob/v0.38.0-rc1/spec/abci/abci++_methods.md#extendvote"},"here"),"\nfor more details."),(0,i.kt)("p",null,"There are many decentralized censorship-resistant use cases for vote extensions.\nFor example, a validator may want to submit prices for a price oracle or encryption\nshares for an encrypted transaction mempool. Note, an application should be careful\nto consider the size of the vote extensions as they could increase latency in block\nproduction. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft/blob/v0.38.0-rc1/docs/qa/CometBFT-QA-38.md#vote-extensions-testbed"},"here"),"\nfor more details."),(0,i.kt)("p",null,"Click ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/user/tutorials/vote-extensions"},"here")," if you would like a walkthrough of how to implement vote extensions."),(0,i.kt)("h2",{id:"verify-vote-extension"},"Verify Vote Extension"),(0,i.kt)("p",null,"Similar to extending a vote, an application can also verify vote extensions from\nother validators when validating their pre-commits. For a given vote extension,\nthis process MUST be deterministic. The Cosmos SDK defines ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.1/types/abci.go#L29-L31"},(0,i.kt)("inlineCode",{parentName:"a"},"sdk.VerifyVoteExtensionHandler")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type VerifyVoteExtensionHandler func(Context, *abci.RequestVerifyVoteExtension) (*abci.ResponseVerifyVoteExtension, error)\n")),(0,i.kt)("p",null,"An application can set this handler in ",(0,i.kt)("inlineCode",{parentName:"p"},"app.go")," via the ",(0,i.kt)("inlineCode",{parentName:"p"},"baseapp.SetVerifyVoteExtensionHandler"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp")," option function. The ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.VerifyVoteExtensionHandler"),", if defined, is called\nduring the ",(0,i.kt)("inlineCode",{parentName:"p"},"VerifyVoteExtension")," ABCI method. If an application defines a vote\nextension handler, it should also define a verification handler. Note, not all\nvalidators will share the same view of what vote extensions they verify depending\non how votes are propagated. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft/blob/v0.38.0-rc1/spec/abci/abci++_methods.md#verifyvoteextension"},"here"),"\nfor more details."),(0,i.kt)("p",null,"Additionally, please keep in mind that performance can be degraded if vote extensions are too big (",(0,i.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v0.38/qa/cometbft-qa-38#vote-extensions-testbed"},"https://docs.cometbft.com/v0.38/qa/cometbft-qa-38#vote-extensions-testbed"),"), so we highly recommend a size validation in ",(0,i.kt)("inlineCode",{parentName:"p"},"VerifyVoteExtensions"),"."),(0,i.kt)("h2",{id:"vote-extension-propagation"},"Vote Extension Propagation"),(0,i.kt)("p",null,"The agreed upon vote extensions at height ",(0,i.kt)("inlineCode",{parentName:"p"},"H")," are provided to the proposing validator\nat height ",(0,i.kt)("inlineCode",{parentName:"p"},"H+1")," during ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareProposal"),". As a result, the vote extensions are\nnot natively provided or exposed to the remaining validators during ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessProposal"),".\nAs a result, if an application requires that the agreed upon vote extensions from\nheight ",(0,i.kt)("inlineCode",{parentName:"p"},"H")," are available to all validators at ",(0,i.kt)("inlineCode",{parentName:"p"},"H+1"),', the application must propagate\nthese vote extensions manually in the block proposal itself. This can be done by\n"injecting" them into the block proposal, since the ',(0,i.kt)("inlineCode",{parentName:"p"},"Txs")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareProposal"),"\nis just a slice of byte slices."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," will ignore any byte slice that doesn't implement an ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.Tx"),", so\nany injected vote extensions will safely be ignored in ",(0,i.kt)("inlineCode",{parentName:"p"},"FinalizeBlock"),". For more\ndetails on propagation, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-064-abci-2.0.md#vote-extension-propagation--verification"},"ABCI++ 2.0 ADR"),"."),(0,i.kt)("h3",{id:"recovery-of-injected-vote-extensions"},"Recovery of injected Vote Extensions"),(0,i.kt)("p",null,"As stated before, vote extensions can be injected into a block proposal (along with\nother transactions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Txs")," field). The Cosmos SDK provides a pre-FinalizeBlock\nhook to allow applications to recover vote extensions, perform any necessary\ncomputation on them, and then store the results in the cached store. These results\nwill be available to the application during the subsequent ",(0,i.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," call."),(0,i.kt)("p",null,"An example of how a pre-FinalizeBlock hook could look like is shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"app.SetPreBlocker(func(ctx sdk.Context, req *abci.RequestFinalizeBlock) error {\n    allVEs := []VE{} // store all parsed vote extensions here\n    for _, tx := range req.Txs {\n        // define a custom function that tries to parse the tx as a vote extension\n        ve, ok := parseVoteExtension(tx)\n        if !ok {\n            continue\n        }\n\n        allVEs = append(allVEs, ve)\n    }\n\n    // perform any necessary computation on the vote extensions and store the result\n    // in the cached store\n    result := compute(allVEs)\n    err := storeVEResult(ctx, result)\n    if err != nil {\n        return err\n    }\n\n    return nil\n})\n\n")),(0,i.kt)("p",null,"Then, in an app's module, the application can retrieve the result of the computation\nof vote extensions from the cached store:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (k Keeper) BeginBlocker(ctx context.Context) error {\n    // retrieve the result of the computation of vote extensions from the cached store\n    result, err := k.GetVEResult(ctx)\n    if err != nil {\n        return err\n    }\n\n    // use the result of the computation of vote extensions\n    k.setSomething(result)\n\n    return nil\n}\n")))}m.isMDXComponent=!0}}]);