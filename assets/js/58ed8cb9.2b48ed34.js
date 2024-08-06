"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[95530],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return a?n.createElement(m,r(r({ref:t},h),{},{components:a})):n.createElement(m,r({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_position:1},r="Blockchain Architecture",s={unversionedId:"learn/intro/sdk-app-architecture",id:"learn/intro/sdk-app-architecture",title:"Blockchain Architecture",description:"Introduction",source:"@site/docs/learn/intro/02-sdk-app-architecture.md",sourceDirName:"learn/intro",slug:"/learn/intro/sdk-app-architecture",permalink:"/main/learn/intro/sdk-app-architecture",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Application-Specific Blockchains",permalink:"/main/learn/intro/why-app-specific"},next:{title:"Main Components of the Cosmos SDK",permalink:"/main/learn/intro/sdk-design"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Layered Architecture",id:"layered-architecture",level:2},{value:"Execution Layer",id:"execution-layer",level:2},{value:"State machine",id:"state-machine",level:3},{value:"Settlement Layer",id:"settlement-layer",level:2},{value:"Consensus Layer",id:"consensus-layer",level:2},{value:"CometBFT",id:"cometbft",level:3},{value:"ABCI",id:"abci",level:2},{value:"Data Availability Layer",id:"data-availability-layer",level:2},{value:"Interoperability Layer",id:"interoperability-layer",level:2}],h={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"blockchain-architecture"},"Blockchain Architecture"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Blockchain architecture is a complex topic that involves many different components. In this section, we will cover the main layers of a blockchain application built with the Cosmos SDK. "),(0,i.kt)("p",null,"At its core, a blockchain is a replicated deterministic state machine. This document explores the various layers of blockchain architecture, focusing on the execution, settlement, consensus, data availability, and interoperability layers."),(0,i.kt)("mermaid",{value:"graph TD\n    A[Modular SDK Blockchain Architecture]\n    A --\x3e B[Execution Layer]\n    A --\x3e C[Settlement Layer]\n    A --\x3e D[Consensus Layer]\n    D --\x3e E[Data Availability Layer]\n    A --\x3e F[Interoperability Layer]"}),(0,i.kt)("h2",{id:"layered-architecture"},"Layered Architecture"),(0,i.kt)("p",null,"Understanding blockchain architecture through the lens of different layers helps in comprehending its complex functionalities. We will give a high-level overview of the execution layer, settlement layer, consensus layer, data availability layer, and interoperability layer."),(0,i.kt)("h2",{id:"execution-layer"},"Execution Layer"),(0,i.kt)("p",null,"The Execution Layer is where the blockchain processes and executes transactions. The state machine within the blockchain handles the execution of transaction logic. This is done by the blockchain itself, ensuring that every transaction follows the predefined rules and state transitions. When a transaction is submitted, the execution layer processes it, updates the state, and ensures that the output is deterministic and consistent across all nodes. In the context of the Cosmos SDK, this typically involves predefined modules and transaction types rather than general-purpose smart contracts, which are used in chains with CosmWasm."),(0,i.kt)("h3",{id:"state-machine"},"State machine"),(0,i.kt)("p",null,"At its core, a blockchain is a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/State_machine_replication"},"replicated deterministic state machine"),"."),(0,i.kt)("p",null,"A state machine is a computer science concept whereby a machine can have multiple states, but only one at any given time. There is a ",(0,i.kt)("inlineCode",{parentName:"p"},"state"),", which describes the current state of the system, and ",(0,i.kt)("inlineCode",{parentName:"p"},"transactions"),", that trigger state transitions."),(0,i.kt)("p",null,"Given a state S and a transaction T, the state machine will return a new state S'."),(0,i.kt)("mermaid",{value:'flowchart LR\n    A[S]\n    B[S\']\n    A --\x3e|"apply(T)"| B'}),(0,i.kt)("p",null,"In practice, the transactions are bundled in blocks to make the process more efficient. Given a state S and a block of transactions B, the state machine will return a new state S'."),(0,i.kt)("mermaid",{value:'flowchart LR\n    A[S]\n    B[S\']\n    A --\x3e|"For each T in B: apply(T)"| B'}),(0,i.kt)("p",null,"In a blockchain context, the state machine is deterministic. This means that if a node is started at a given state and replays the same sequence of transactions, it will always end up with the same final state."),(0,i.kt)("p",null,"The Cosmos SDK gives developers maximum flexibility to define the state of their application, transaction types and state transition functions. The process of building state machines with the Cosmos SDK will be described more in-depth in the following sections. But first, let us see how the state machine is replicated using various consensus engines, such as CometBFT."),(0,i.kt)("h2",{id:"settlement-layer"},"Settlement Layer"),(0,i.kt)("p",null,"The Settlement Layer is responsible for finalising and recording transactions on the blockchain. This layer ensures that all transactions are accurately settled and immutable, providing a verifiable record of all activities on the blockchain. It is critical for maintaining the integrity and trustworthiness of the blockchain."),(0,i.kt)("p",null,"The settlement layer can be performed on the chain itself or it can be externalised, allowing for the possibility of plugging in a different settlement layer as needed. For example if we were to use Rollkit and celestia for our Data Availability and Consensus, we could separate our settlement layer by introducing fraud or validity proofs. From there the settlement layer can create trust-minimised light clients, further enhancing security and efficiency. This process ensures that all transactions are accurately finalized and immutable, providing a verifiable record of all activities."),(0,i.kt)("h2",{id:"consensus-layer"},"Consensus Layer"),(0,i.kt)("p",null,"The Consensus Layer ensures that all nodes in the network agree on the order and validity of transactions. This layer uses consensus algorithms like Byzantine Fault Tolerance (BFT) or Proof of Stake (PoS) to achieve agreement, even in the presence of malicious nodes. Consensus is crucial for maintaining the security and reliability of the blockchain."),(0,i.kt)("p",null,"What has been a default consensus engine in the Cosmos SDK has been CometBFT. In the most recent releases we have been moving away from this and allowing users to plug and play their own consensus engines. This is a big step forward for the Cosmos SDK as it allows for more flexibility and customisation. Other consensus engine options for example can be Rollkit with Celestias Data Availability Layer."),(0,i.kt)("p",null,"Here is an example of how the consensus layer works with CometBFT in the context of the Cosmos SDK:"),(0,i.kt)("h3",{id:"cometbft"},"CometBFT"),(0,i.kt)("p",null,"Thanks to the Cosmos SDK, developers just have to define the state machine, and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v1.0/explanation/introduction/"},(0,i.kt)("em",{parentName:"a"},"CometBFT"))," will handle replication over the network for them."),(0,i.kt)("mermaid",{value:"flowchart TD\n    subgraph Blockchain_Node[Blockchain Node]\n        subgraph SM[State-machine]\n            direction TB\n            SM1[Cosmos SDK]\n        end\n        subgraph CometBFT[CometBFT]\n            direction TB\n            Consensus\n            Networking\n        end\n    end\n\n    SM <--\x3e CometBFT\n\n\n    Blockchain_Node --\x3e|Includes| SM\n    Blockchain_Node --\x3e|Includes| CometBFT"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v1.0/explanation/introduction/"},"CometBFT")," is an application-agnostic engine that is responsible for handling the ",(0,i.kt)("em",{parentName:"p"},"networking")," and ",(0,i.kt)("em",{parentName:"p"},"consensus")," layers of a blockchain. In practice, this means that CometBFT is responsible for propagating and ordering transaction bytes. CometBFT relies on an eponymous Byzantine-Fault-Tolerant (BFT) algorithm to reach consensus on the order of transactions."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v1.0/explanation/introduction/#consensus-overview"},"consensus algorithm adopted by CometBFT")," works with a set of special nodes called ",(0,i.kt)("em",{parentName:"p"},"Validators"),". Validators are responsible for adding blocks of transactions to the blockchain. At any given block, there is a validator set V. A validator in V is chosen by the algorithm to be the proposer of the next block. This block is considered valid if more than two thirds of V signed a ",(0,i.kt)("inlineCode",{parentName:"p"},"prevote")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"precommit")," on it, and if all the transactions that it contains are valid. The validator set can be changed by rules written in the state-machine."),(0,i.kt)("h2",{id:"abci"},"ABCI"),(0,i.kt)("p",null,"CometBFT passes transactions to the application through an interface called the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v1.0/spec/abci/"},"ABCI"),", which the application must implement."),(0,i.kt)("mermaid",{value:"graph TD\n    A[Application]\n    B[CometBFT]\n    A <--\x3e|ABCI| B\n"}),(0,i.kt)("p",null,"Note that ",(0,i.kt)("strong",{parentName:"p"},"CometBFT only handles transaction bytes"),". It has no knowledge of what these bytes mean. All CometBFT does is order these transaction bytes deterministically. CometBFT passes the bytes to the application via the ABCI, and expects a return code to inform it if the messages contained in the transactions were successfully processed or not."),(0,i.kt)("p",null,"Here are the most important messages of the ABCI:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CheckTx"),": When a transaction is received by CometBFT, it is passed to the application to check if a few basic requirements are met. ",(0,i.kt)("inlineCode",{parentName:"li"},"CheckTx")," is used to protect the mempool of full-nodes against spam transactions. . A special handler called the ",(0,i.kt)("a",{parentName:"li",href:"/main/learn/beginner/gas-fees#antehandler"},(0,i.kt)("inlineCode",{parentName:"a"},"AnteHandler"))," is used to execute a series of validation steps such as checking for sufficient fees and validating the signatures. If the checks are valid, the transaction is added to the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.cometbft.com/v1.0/explanation/core/mempool"},"mempool")," and relayed to peer nodes. Note that transactions are not processed (i.e. no modification of the state occurs) with ",(0,i.kt)("inlineCode",{parentName:"li"},"CheckTx")," since they have not been included in a block yet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DeliverTx"),": When a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.cometbft.com/v1.0/spec/core/data_structures#block"},"valid block")," is received by CometBFT, each transaction in the block is passed to the application via ",(0,i.kt)("inlineCode",{parentName:"li"},"DeliverTx")," in order to be processed. It is during this stage that the state transitions occur. The ",(0,i.kt)("inlineCode",{parentName:"li"},"AnteHandler")," executes again, along with the actual ",(0,i.kt)("a",{parentName:"li",href:"/main/build/building-modules/msg-services"},(0,i.kt)("inlineCode",{parentName:"a"},"Msg")," service")," RPC for each message in the transaction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BeginBlock"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"EndBlock"),": These messages are executed at the beginning and the end of each block, whether the block contains transactions or not. It is useful to trigger automatic execution of logic. Proceed with caution though, as computationally expensive loops could slow down your blockchain, or even freeze it if the loop is infinite.")),(0,i.kt)("p",null,"Find a more detailed view of the ABCI methods from the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v1.0/spec/abci/"},"CometBFT docs"),"."),(0,i.kt)("p",null,"Any application built on CometBFT needs to implement the ABCI interface in order to communicate with the underlying local CometBFT engine. Fortunately, you do not have to implement the ABCI interface. The Cosmos SDK provides a boilerplate implementation of it in the form of ",(0,i.kt)("a",{parentName:"p",href:"/main/learn/intro/sdk-design#baseapp"},"baseapp"),"."),(0,i.kt)("h2",{id:"data-availability-layer"},"Data Availability Layer"),(0,i.kt)("p",null,"The Data Availability (DA) Layer is a critical component of within the umbrella of the consensus layer that ensures all necessary data for transactions is available to all network participants. This layer is essential for preventing data withholding attacks, where some nodes might attempt to disrupt the network by not sharing critical transaction data."),(0,i.kt)("p",null,"If we use the example of Rollkit, a user initiates a transaction, which is then propagated through the rollup network by a light node. The transaction is validated by full nodes and aggregated into a block by the sequencer. This block is posted to a data availability layer like Celestia, ensuring the data is accessible and correctly ordered. The rollup light node verifies data availability from the DA layer. Full nodes then validate the block and generate necessary proofs, such as fraud proofs for optimistic rollups or zk-SNARKs/zk-STARKs for zk-rollups. These proofs are shared across the network and verified by other nodes, ensuring the rollup's integrity. Once all validations are complete, the rollup's state is updated, finalising the transaction"),(0,i.kt)("h2",{id:"interoperability-layer"},"Interoperability Layer"),(0,i.kt)("p",null,"The Interoperability Layer enables communication and interaction between different blockchains. This layer facilitates cross-chain transactions and data sharing, allowing various blockchain networks to interoperate seamlessly. Interoperability is key for building a connected ecosystem of blockchains, enhancing their functionality and reach."),(0,i.kt)("p",null,"In this case we have separated the layers even further to really illustrate the components that make-up the blockchain architecture and it is important to note that the Cosmos SDK is designed to be interoperable with other blockchains. This is achieved through the use of the Inter-Blockchain Communication (IBC) protocol, which allows different blockchains to communicate and transfer assets between each other."))}p.isMDXComponent=!0}}]);