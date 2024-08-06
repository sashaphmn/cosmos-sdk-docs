"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[22661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,b=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(b,r(r({ref:t},u),{},{components:n})):i.createElement(b,r({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={},r="ADR {ADR-NUMBER}:",s={unversionedId:"build/architecture/adr-template",id:"version-0.47/build/architecture/adr-template",title:"ADR {ADR-NUMBER}:",description:"Changelog",source:"@site/versioned_docs/version-0.47/build/architecture/adr-template.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-template",permalink:"/v0.47/build/architecture/adr-template",draft:!1,tags:[],version:"0.47",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR-065: Store V2",permalink:"/v0.47/build/architecture/adr-065-store-v2"},next:{title:"Requests for Comments",permalink:"/v0.47/build/rfc/"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"Test Cases optional",id:"test-cases-optional",level:2},{value:"References",id:"references",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-adr-number-title"},"ADR {ADR-NUMBER}: {TITLE}"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"{date}: {changelog}")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"{DRAFT | PROPOSED} Not Implemented"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please have a look at the ",(0,a.kt)("a",{parentName:"p",href:"/v0.47/build/architecture/PROCESS#adr-status"},"PROCESS")," page.\nUse DRAFT if the ADR is in a draft stage (draft PR) or PROPOSED if it's in review.")),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\"If you can't explain it simply, you don't understand it well enough.\" Provide\na simplified and layman-accessible explanation of the ADR.\nA short (~200 word) description of the issue being addressed.")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This section describes the forces at play, including technological, political,\nsocial, and project local. These forces are probably in tension, and should be\ncalled out as such. The language in this section is value-neutral. It is simply\ndescribing facts. It should clearly explain the problem and motivation that the\nproposal aims to resolve.\n{context body}")),(0,a.kt)("h2",{id:"alternatives"},"Alternatives"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This section describes alternative designs to the chosen design. This section\nis important and if an adr does not have any alternatives then it should be\nconsidered that the ADR was not thought through. ")),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'This section describes our response to these forces. It is stated in full\nsentences, with active voice. "We will ..."\n{decision body}')),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'This section describes the resulting context, after applying the decision. All\nconsequences should be listed here, not just the "positive" ones. A particular\ndecision may have positive, negative, and neutral consequences, but all of them\naffect the team and project in the future.')),(0,a.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"All ADRs that introduce backwards incompatibilities must include a section\ndescribing these incompatibilities and their severity. The ADR must explain\nhow the author proposes to deal with these incompatibilities. ADR submissions\nwithout a sufficient backwards compatibility treatise may be rejected outright.")),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"{positive consequences}")),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"{negative consequences}")),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"{neutral consequences}")),(0,a.kt)("h2",{id:"further-discussions"},"Further Discussions"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"While an ADR is in the DRAFT or PROPOSED stage, this section should contain a\nsummary of issues to be solved in future iterations (usually referencing comments\nfrom a pull-request discussion)."),(0,a.kt)("p",{parentName:"blockquote"},"Later, this section can optionally list ideas or improvements the author or\nreviewers found during the analysis of this ADR.")),(0,a.kt)("h2",{id:"test-cases-optional"},"Test Cases ","[optional]"),(0,a.kt)("p",null,"Test cases for an implementation are mandatory for ADRs that are affecting consensus\nchanges. Other ADRs can choose to include links to test cases if applicable."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"{reference link}")))}p.isMDXComponent=!0}}]);