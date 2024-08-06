"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[38125],{3905:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>h});var n=s(67294);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,o=function(e,t){if(null==e)return{};var s,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var s=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(s),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return s?n.createElement(h,r(r({ref:t},u),{},{components:s})):n.createElement(h,r({ref:t},u))}));function h(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=s.length,r=new Array(a);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var d=2;d<a;d++)r[d]=s[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,s)}m.displayName="MDXCreateElement"},8391:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=s(87462),o=(s(67294),s(3905));const a={sidebar_position:1},r="Guide to On-Chain Multisig transactions",i={unversionedId:"user/run-node/onchain-multisig",id:"version-0.50/user/run-node/onchain-multisig",title:"Guide to On-Chain Multisig transactions",description:"Overview",source:"@site/versioned_docs/version-0.50/user/run-node/08-onchain-multisig.md",sourceDirName:"user/run-node",slug:"/user/run-node/onchain-multisig",permalink:"/v0.50/user/run-node/onchain-multisig",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"userSidebar",previous:{title:"Guide to Multisig transactions",permalink:"/v0.50/user/run-node/multisig-guide"},next:{title:"Rosetta",permalink:"/v0.50/user/run-node/rosetta"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Threshold and quorums",id:"threshold-and-quorums",level:3},{value:"Revote",id:"revote",level:3},{value:"Early execution",id:"early-execution",level:3},{value:"Voting period",id:"voting-period",level:3},{value:"Setup",id:"setup",level:2},{value:"Proposals",id:"proposals",level:2},{value:"Create proposal",id:"create-proposal",level:4},{value:"Vote on the proposal",id:"vote-on-the-proposal",level:3},{value:"Execute the proposal",id:"execute-the-proposal",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...s}=e;return(0,o.kt)(c,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"guide-to-on-chain-multisig-transactions"},"Guide to On-Chain Multisig transactions"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Multisignature ",(0,o.kt)("strong",{parentName:"p"},"on-chain")," accounts are an improvement over the previous implementation as these introduce a new set of\nfeatures."),(0,o.kt)("h3",{id:"threshold-and-quorums"},"Threshold and quorums"),(0,o.kt)("p",null,"The previous implementation only allowed for m-of-n multisig accounts, where m is the number of signatures required to\nauthorize a transaction and n is the total number of signers. The new implementation allows for more flexibility by\nintroducing threshold and quorum values. The quorum is the minimum voting power to make a proposal valid, while the\nthreshol is the minimum of voting power of YES votes to pass a proposal."),(0,o.kt)("h3",{id:"revote"},"Revote"),(0,o.kt)("p",null,"Multisigs can allow members to change their votes after the initial vote. This is useful when a member changes their mind\nor when new information becomes available."),(0,o.kt)("h3",{id:"early-execution"},"Early execution"),(0,o.kt)("p",null,"Multisigs can be configured to allow for early execution of proposals. This is useful when a proposal is time-sensitive or\nwhen the proposer wants to execute the proposal as soon as it reaches the threshold. It can also be used to mimic the\nbehavior of the previous multisig implementation."),(0,o.kt)("h3",{id:"voting-period"},"Voting period"),(0,o.kt)("p",null,"Multisigs can be configured to have a voting period. This is the time window during which members can vote on a proposal.\nIf the proposal does not reach the threshold within the voting period, it is considered failed."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"We'll create a multisig with 3 members with a 2/3 passing threshold."),(0,o.kt)("p",null,"First create the 3 members, Alice, Bob and Carol:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash!"},"simd keys add alice --keyring-backend test --home ./.testnets/node0/simd/\nsimd keys add bob --keyring-backend test --home ./.testnets/node0/simd/\nsimd keys add carol --keyring-backend test --home ./.testnets/node0/simd/\n")),(0,o.kt)("p",null,"And we initialize them with some tokens (sent from one of our nodes):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash!"},"simd tx bank send $(simd keys show node0 --address  --keyring-backend=test --home ./.testnets/node0/simd/) $(simd keys show alice --address  --keyring-backend=test --home ./.testnets/node0/simd/) 100stake --fees 5stake --chain-id $CHAINID --keyring-backend test --home ./.testnets/node0/simd/\nsimd tx bank send $(simd keys show node0 --address  --keyring-backend=test --home ./.testnets/node0/simd/) $(simd keys show bob --address  --keyring-backend=test --home ./.testnets/node0/simd/) 100stake --fees 5stake --chain-id $CHAINID --keyring-backend test --home ./.testnets/node0/simd/\nsimd tx bank send $(simd keys show node0 --address  --keyring-backend=test --home ./.testnets/node0/simd/) $(simd keys show carol --address  --keyring-backend=test --home ./.testnets/node0/simd/) 100stake --fees 5stake --chain-id $CHAINID --keyring-backend test --home ./.testnets/node0/simd/\n")),(0,o.kt)("p",null,"Now we craft our initialization message, in it we'll include the members' addresses, their weights and the configuration of our multisig."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "members": [\n    {\n      "address": "cosmos1pr26h2vq9adq3acvh37pz6wtk65u3y8798scq0",\n      "weight": 1000\n    },\n    {\n      "address": "cosmos1j4p2xlg393rg4mma0058alzgvkrjdddd2f5fll",\n      "weight": 1000\n    },\n    {\n      "address": "cosmos1vaqh39cdex9sgr46ef0tdln5cn0hdyd3s0lx4l",\n      "weight": 1000\n    }\n  ],\n  "config": {\n    "threshold": 2000,\n    "quorum": 2000,\n    "voting_period": 86400,\n    "revote": false,\n    "early_execution": true\n  }\n}\n')),(0,o.kt)("p",null,"In the configuration we set the threshold and quorum to the same, 2/3 of the members must vote yes to pass the proposal. Other configurations can set the quorum and threshold to different values to mimic how organizations work."),(0,o.kt)("p",null,"We've also set ",(0,o.kt)("inlineCode",{parentName:"p"},"early_execution")," to true, to allow executing as soon as the proposal passes."),(0,o.kt)("p",null,"Voting period is in seconds, so we've set that to 24h. And finally ",(0,o.kt)("inlineCode",{parentName:"p"},"revote")," was set to false, because we don't want to allow members to change their vote mid-way through."),(0,o.kt)("p",null,"To initialize the multisig, we have to run the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts init")," passing the account type and the json we created."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash!"},"initcontents=$(cat init.json)\nsimd tx accounts init multisig $initcontents  --fees 5stake --chain-id $CHAINID --keyring-backend test --home ./.testnets/node0/simd/ --from alice\n")),(0,o.kt)("p",null,"If everything goes well, we'll get back a tx hash, and we'll check the tx result to get our newly created multisig's address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash!"},'simd q tx 472B5B4E181D2F399C0ACE4DEEB26FE4351D13E593ED8E793B005C48BFD32621 --output json | jq -r \'.events[] | select(.type == "account_creation") | .attributes[] | select(.key == "address") | .value\'\n')),(0,o.kt)("p",null,"In this case, the address is ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmos1uds6tz96dxfllz7tz3s3tm8tlg6x95g0mc2987sx6psjz98qlpss89sheu"),". We can now send tokens to it, just like to a normal account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash!"},"simd tx bank send $(simd keys show node0 --address  --keyring-backend=test --home ./.testnets/node0/simd/) cosmos1uds6tz96dxfllz7tz3s3tm8tlg6x95g0mc2987sx6psjz98qlpss89sheu 10000stake --fees 5stake --chain-id $CHAINID --keyring-backend test --home ./.testnets/node0/simd/\n")),(0,o.kt)("h2",{id:"proposals"},"Proposals"),(0,o.kt)("h4",{id:"create-proposal"},"Create proposal"),(0,o.kt)("p",null,"In this multisig, every action is a proposal. We'll do a simple proposal to send tokens from the multisig to Alice."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "proposal": {\n    "title": "Send 1000 tokens to Alice",\n    "summary": "Alice is a great multisig member so let\'s pay her.",\n    "messages": [\n      {\n        "@type": "/cosmos.bank.v1beta1.MsgSend",\n        "from_address": "cosmos1uds6tz96dxfllz7tz3s3tm8tlg6x95g0mc2987sx6psjz98qlpss89sheu",\n        "to_address": "cosmos1pr26h2vq9adq3acvh37pz6wtk65u3y8798scq0",\n        "amount": [\n          {\n            "denom": "stake",\n            "amount": "1000"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The content of messages was created using a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"tx send")," command and passing the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--generate-only")," so we could copy the message.")),(0,o.kt)("p",null,"Now we send the tx that will create the proposal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash!"},"propcontents=$(cat createprop.json)\nsimd tx accounts execute cosmos1uds6tz96dxfllz7tz3s3tm8tlg6x95g0mc2987sx6psjz98qlpss89sheu cosmos.accounts.defaults.multisig.v1.MsgCreateProposal $propcontents --fees 5stake --chain-id $CHAINID --keyring-backend test --home ./.testnets/node0/simd/ --from alice\n")),(0,o.kt)("p",null,"This will again return a tx hash that we can use to find out the newly created proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash!"},'simd q tx 5CA4420B67FB040B3DF2484CB875E030123662F43AE9958A9F8028C1281C8654 --output json | jq -r \'.events[] | select(.type == "proposal_created") | .attributes[] | select(.key == "proposal_id") | .value\'\n')),(0,o.kt)("p",null,"In this case, because this is the first proposal, we'll get that the proposal ID is 0. We can use this to query it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash!"},"simd q accounts query cosmos1uds6tz96dxfllz7tz3s3tm8tlg6x95g0mc2987sx6psjz98qlpss89sheu cosmos.accounts.defaults.multisig.v1.QueryProposal '{\"proposal_id\":1}' \n")),(0,o.kt)("p",null,"We get back all the details from the proposal, including the end of the voting period and the current status of the proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"response:\n  '@type': /cosmos.accounts.defaults.multisig.v1.QueryProposalResponse\n  proposal:\n    messages:\n    - '@type': /cosmos.bank.v1beta1.MsgSend\n      amount:\n      - amount: \"1000\"\n        denom: stake\n      from_address: cosmos1uds6tz96dxfllz7tz3s3tm8tlg6x95g0mc2987sx6psjz98qlpss89sheu\n      to_address: cosmos1pr26h2vq9adq3acvh37pz6wtk65u3y8798scq0\n    status: PROPOSAL_STATUS_VOTING_PERIOD\n    summary: Alice is a great multisig member so let's pay her.\n    title: Send 1000 tokens to Alice\n    voting_period_end: \"1717064354\"\n")),(0,o.kt)("h3",{id:"vote-on-the-proposal"},"Vote on the proposal"),(0,o.kt)("p",null,"Just like before, we'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"tx accounts execute"),", but this time to vote. As we have a 2/3 passing threshold, we have to vote with at least 2 members."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash!"},'simd tx accounts execute cosmos1uds6tz96dxfllz7tz3s3tm8tlg6x95g0mc2987sx6psjz98qlpss89sheu cosmos.accounts.defaults.multisig.v1.MsgVote \'{"proposal_id":0, "vote":"VOTE_OPTION_YES"}\' --fees 5stake --chain-id $CHAINID --keyring-backend test --home ./.testnets/node0/simd/ --from alice --yes\nsimd tx accounts execute cosmos1uds6tz96dxfllz7tz3s3tm8tlg6x95g0mc2987sx6psjz98qlpss89sheu cosmos.accounts.defaults.multisig.v1.MsgVote \'{"proposal_id":0, "vote":"VOTE_OPTION_YES"}\' --fees 5stake --chain-id $CHAINID --keyring-backend test --home ./.testnets/node0/simd/ --from bob --yes\n')),(0,o.kt)("h3",{id:"execute-the-proposal"},"Execute the proposal"),(0,o.kt)("p",null,"Once we got enough votes, we can execute the proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash!"},"simd tx accounts execute cosmos1uds6tz96dxfllz7tz3s3tm8tlg6x95g0mc2987sx6psjz98qlpss89sheu cosmos.accounts.defaults.multisig.v1.MsgExecuteProposal '{\"proposal_id\":0}' --fees 5stake --chain-id $CHAINID --keyring-backend test --home ./.testnets/node0/simd/ --from bob --yes\n")),(0,o.kt)("p",null,"Querying the tx hash will get us information about the success or failure of the proposal execution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'- attributes:\n  - index: true\n    key: proposal_id\n    value: "0"\n  - index: true\n    key: yes_votes\n    value: "2000"\n  - index: true\n    key: no_votes\n    value: "0"\n  - index: true\n    key: abstain_votes\n    value: "0"\n  - index: true\n    key: status\n    value: PROPOSAL_STATUS_PASSED\n  - index: true\n    key: reject_err\n    value: <nil>\n  - index: true\n    key: exec_err\n    value: <nil>\n  - index: true\n    key: msg_index\n    value: "0"\n  type: proposal_tally\n')),(0,o.kt)("p",null,"Now checking the multisig and Alice's balance, we'll see that the send was performed correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash!"},'simd q bank balances cosmos1uds6tz96dxfllz7tz3s3tm8tlg6x95g0mc2987sx6psjz98qlpss89sheu\n                                         \nbalances:\n- amount: "9000"\n  denom: stake\npagination:\n  total: "1"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash!"},'simd q bank balances $(./build/simd keys show alice --address)                                              \n\nbalances:\n- amount: "1080"\n  denom: stake\npagination:\n  total: "1"\n')))}p.isMDXComponent=!0}}]);