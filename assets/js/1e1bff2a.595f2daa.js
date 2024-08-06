"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},s="Accounts",o={unversionedId:"learn/beginner/accounts",id:"learn/beginner/accounts",title:"Accounts",description:"This document describes the in-built account and public key system of the Cosmos SDK.",source:"@site/docs/learn/beginner/03-accounts.md",sourceDirName:"learn/beginner",slug:"/learn/beginner/accounts",permalink:"/main/learn/beginner/accounts",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Query Lifecycle",permalink:"/main/learn/beginner/query-lifecycle"},next:{title:"Gas and Fees",permalink:"/main/learn/beginner/gas-fees"}},p={},l=[{value:"Account Definition",id:"account-definition",level:2},{value:"Keys, accounts, addresses, and signatures",id:"keys-accounts-addresses-and-signatures",level:2},{value:"Addresses",id:"addresses",level:2},{value:"Public Keys",id:"public-keys",level:3},{value:"Keyring",id:"keyring",level:2},{value:"Create New Key Type",id:"create-new-key-type",level:3},{value:"Implementing secp256r1 algo",id:"implementing-secp256r1-algo",level:4}],c={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"accounts"},"Accounts"),(0,r.kt)("admonition",{title:"Synopsis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This document describes the in-built account and public key system of the Cosmos SDK.")),(0,r.kt)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/main/learn/beginner/app-anatomy"},"Anatomy of a Cosmos SDK Application")))),(0,r.kt)("h2",{id:"account-definition"},"Account Definition"),(0,r.kt)("p",null,"In the Cosmos SDK, an ",(0,r.kt)("em",{parentName:"p"},"account")," designates a pair of ",(0,r.kt)("em",{parentName:"p"},"public key")," ",(0,r.kt)("inlineCode",{parentName:"p"},"PubKey")," and ",(0,r.kt)("em",{parentName:"p"},"private key")," ",(0,r.kt)("inlineCode",{parentName:"p"},"PrivKey"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"PubKey")," can be derived to generate various ",(0,r.kt)("inlineCode",{parentName:"p"},"Addresses"),", which are used to identify users (among other parties) in the application. ",(0,r.kt)("inlineCode",{parentName:"p"},"Addresses")," are also associated with ",(0,r.kt)("a",{parentName:"p",href:"/main/build/building-modules/messages-and-queries#messages"},(0,r.kt)("inlineCode",{parentName:"a"},"message"),"s")," to identify the sender of the ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"PrivKey")," is used to generate ",(0,r.kt)("a",{parentName:"p",href:"#keys-accounts-addresses-and-signatures"},"digital signatures")," to prove that an ",(0,r.kt)("inlineCode",{parentName:"p"},"Address")," associated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"PrivKey")," approved of a given ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),"."),(0,r.kt)("p",null,"For HD key derivation the Cosmos SDK uses a standard called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"},"BIP32"),". The BIP32 allows users to create an HD wallet (as specified in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"},"BIP44"),") - a set of accounts derived from an initial secret seed. A seed is usually created from a 12- or 24-word mnemonic. A single seed can derive any number of ",(0,r.kt)("inlineCode",{parentName:"p"},"PrivKey"),"s using a one-way cryptographic function. Then, a ",(0,r.kt)("inlineCode",{parentName:"p"},"PubKey")," can be derived from the ",(0,r.kt)("inlineCode",{parentName:"p"},"PrivKey"),". Naturally, the mnemonic is the most sensitive information, as private keys can always be re-generated if the mnemonic is preserved."),(0,r.kt)("mermaid",{value:'graph BT\n    A0A[Address 0] --\x3e A0[Account 0]\n    A0PK[Public key 0] --\x3e A0A[Address 0]\n    A0SK[Private key 0] --\x3e A0PK[Public key 0]\n    A1A[Address 1] --\x3e A1[Account 1]\n    A1PK[Public key 1] --\x3e A1A[Address 1]\n    A1SK[Private key 1] --\x3e A1PK[Public key 1]\n    A2A[Address 2] --\x3e A2[Account 2]\n    A2PK[Public key 2] --\x3e A2A[Address 2]\n    A2SK[Private key 2] --\x3e A2PK[Public key 2]\n    MasterPK[Master PrivKey] --\x3e A0SK[Private key 0]\n    MasterPK[Master PrivKey] --\x3e A1SK[Private key 1]\n    MasterPK[Master PrivKey] --\x3e A2SK[Private key 2]\n    Mnemonic["Mnemonic (Seed)"] --\x3e MasterPK[Master PrivKey]'}),(0,r.kt)("p",null,"In the Cosmos SDK, keys are stored and managed by using an object called a ",(0,r.kt)("a",{parentName:"p",href:"#keyring"},(0,r.kt)("inlineCode",{parentName:"a"},"Keyring")),"."),(0,r.kt)("h2",{id:"keys-accounts-addresses-and-signatures"},"Keys, accounts, addresses, and signatures"),(0,r.kt)("p",null,"The principal way of authenticating a user is done using ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Digital_signature"},"digital signatures"),". Users sign transactions using their own private key. Signature verification is done with the associated public key. For on-chain signature verification purposes, we store the public key in an ",(0,r.kt)("inlineCode",{parentName:"p"},"Account")," object (alongside other data required for a proper transaction validation)."),(0,r.kt)("p",null,"In the node, all data is stored using Protocol Buffers serialization."),(0,r.kt)("p",null,"The Cosmos SDK supports the following digital key schemes for creating digital signatures:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secp256k1"),", as implemented in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/crypto/keys/secp256k1/secp256k1.go"},"Cosmos SDK's ",(0,r.kt)("inlineCode",{parentName:"a"},"crypto/keys/secp256k1")," package"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secp256r1"),", as implemented in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/crypto/keys/secp256r1/pubkey.go"},"Cosmos SDK's ",(0,r.kt)("inlineCode",{parentName:"a"},"crypto/keys/secp256r1")," package"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tm-ed25519"),", as implemented in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/crypto/keys/ed25519/ed25519.go"},"Cosmos SDK ",(0,r.kt)("inlineCode",{parentName:"a"},"crypto/keys/ed25519")," package"),". This scheme is supported only for the consensus validation.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Address length in bytes"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Public key length in bytes"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Used for transaction authentication"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Used for consensus (cometbft)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"secp256k1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"20"),(0,r.kt)("td",{parentName:"tr",align:"center"},"33"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"secp256r1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"32"),(0,r.kt)("td",{parentName:"tr",align:"center"},"33"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"tm-ed25519")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-- not used --"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32"),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes")))),(0,r.kt)("h2",{id:"addresses"},"Addresses"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Addresses")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PubKey"),"s are both public information that identifies actors in the application. ",(0,r.kt)("inlineCode",{parentName:"p"},"Account")," is used to store authentication information. The basic account implementation is provided by a ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseAccount")," object."),(0,r.kt)("p",null,"Each account is identified using ",(0,r.kt)("inlineCode",{parentName:"p"},"Address")," which is a sequence of bytes derived from a public key. In the Cosmos SDK, we define 3 types of addresses that specify a context where an account is used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AccAddress")," identifies users (the sender of a ",(0,r.kt)("inlineCode",{parentName:"li"},"message"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ValAddress")," identifies validator operators."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ConsAddress")," identifies validator nodes that are participating in consensus. Validator nodes are derived using the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ed25519"))," curve.")),(0,r.kt)("p",null,"These types implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Address")," interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/types/address.go#L126-L134\n")),(0,r.kt)("p",null,"Address construction algorithm is defined in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-028-public-key-addresses.md"},"ADR-28"),".\nHere is the standard way to obtain an account address from a ",(0,r.kt)("inlineCode",{parentName:"p"},"pub")," public key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"sdk.AccAddress(pub.Address().Bytes())\n")),(0,r.kt)("p",null,"Of note, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Marshal()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Bytes()")," method both return the same raw ",(0,r.kt)("inlineCode",{parentName:"p"},"[]byte")," form of the address. ",(0,r.kt)("inlineCode",{parentName:"p"},"Marshal()")," is required for Protobuf compatibility."),(0,r.kt)("p",null,"For user interaction, addresses are formatted using ",(0,r.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Bech32"},"Bech32")," and implemented by the ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," method. The Bech32 method is the only supported format to use when interacting with a blockchain. The Bech32 human-readable part (Bech32 prefix) is used to denote an address type. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/types/address.go#L299-L316\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Address Bech32 Prefix"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Accounts"),(0,r.kt)("td",{parentName:"tr",align:null},"cosmos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Validator Operator"),(0,r.kt)("td",{parentName:"tr",align:null},"cosmosvaloper")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Consensus Nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"cosmosvalcons")))),(0,r.kt)("h3",{id:"public-keys"},"Public Keys"),(0,r.kt)("p",null,"Public keys in Cosmos SDK are defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"cryptotypes.PubKey")," interface. Since public keys are saved in a store, ",(0,r.kt)("inlineCode",{parentName:"p"},"cryptotypes.PubKey")," extends the ",(0,r.kt)("inlineCode",{parentName:"p"},"proto.Message")," interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/crypto/types/types.go#L8-L17\n")),(0,r.kt)("p",null,"A compressed format is used for ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256r1")," serialization."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first byte is a ",(0,r.kt)("inlineCode",{parentName:"li"},"0x02")," byte if the ",(0,r.kt)("inlineCode",{parentName:"li"},"y"),"-coordinate is the lexicographically largest of the two associated with the ",(0,r.kt)("inlineCode",{parentName:"li"},"x"),"-coordinate."),(0,r.kt)("li",{parentName:"ul"},"Otherwise the first byte is a ",(0,r.kt)("inlineCode",{parentName:"li"},"0x03"),".")),(0,r.kt)("p",null,"This prefix is followed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"-coordinate."),(0,r.kt)("p",null,"Public Keys are not used to reference accounts (or users) and in general are not used when composing transaction messages (with few exceptions: ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgCreateValidator"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Validator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Multisig")," messages).\nFor user interactions, ",(0,r.kt)("inlineCode",{parentName:"p"},"PubKey")," is formatted using Protobufs JSON (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/codec/json.go#L14-L34"},"ProtoMarshalJSON")," function). Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/client/keys/output.go#L23-L39\n")),(0,r.kt)("h2",{id:"keyring"},"Keyring"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," is an object that stores and manages accounts. In the Cosmos SDK, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," implementation follows the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/crypto/keyring/keyring.go#L57-L105\n")),(0,r.kt)("p",null,"The default implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," comes from the third-party ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/99designs/keyring"},(0,r.kt)("inlineCode",{parentName:"a"},"99designs/keyring"))," library."),(0,r.kt)("p",null,"A few notes on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Sign(uid string, msg []byte) ([]byte, types.PubKey, error)")," strictly deals with the signature of the ",(0,r.kt)("inlineCode",{parentName:"li"},"msg")," bytes. You must prepare and encode the transaction into a canonical ",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte")," form. Because protobuf is not deterministic, it has been decided in ",(0,r.kt)("a",{parentName:"li",href:"../../architecture/adr-020-protobuf-transaction-encoding.md"},"ADR-020")," that the canonical ",(0,r.kt)("inlineCode",{parentName:"li"},"payload")," to sign is the ",(0,r.kt)("inlineCode",{parentName:"li"},"SignDoc")," struct, deterministically encoded using ",(0,r.kt)("a",{parentName:"li",href:"../../architecture/adr-027-deterministic-protobuf-serialization.md"},"ADR-027"),". Note that signature verification is not implemented in the Cosmos SDK by default, it is deferred to the ",(0,r.kt)("a",{parentName:"li",href:"/main/learn/advanced/baseapp#antehandler"},(0,r.kt)("inlineCode",{parentName:"a"},"anteHandler")),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/proto/cosmos/tx/v1beta1/tx.proto#L50-L66\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"NewAccount(uid, mnemonic, bip39Passphrase, hdPath string, algo SignatureAlgo) (*Record, error)")," creates a new account based on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"},(0,r.kt)("inlineCode",{parentName:"a"},"bip44 path"))," and persists it on disk. The ",(0,r.kt)("inlineCode",{parentName:"p"},"PrivKey")," is ",(0,r.kt)("strong",{parentName:"p"},"never stored unencrypted"),", instead it is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/crypto/armor.go"},"encrypted with a passphrase")," before being persisted. In the context of this method, the key type and sequence number refers to the segment of the BIP44 derivation path (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),", ...) that is used to derive a private and a public key from the mnemonic. Using the same mnemonic and derivation path, the same ",(0,r.kt)("inlineCode",{parentName:"p"},"PrivKey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PubKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Address")," is generated. The following keys are supported by the keyring:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ed25519"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ExportPrivKeyArmor(uid, encryptPassphrase string) (armor string, err error)")," exports a private key in ASCII-armored encrypted format using the given passphrase. You can then either import the private key again into the keyring using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ImportPrivKey(uid, armor, passphrase string)")," function or decrypt it into a raw private key using the ",(0,r.kt)("inlineCode",{parentName:"p"},"UnarmorDecryptPrivKey(armorStr string, passphrase string)")," function."))),(0,r.kt)("h3",{id:"create-new-key-type"},"Create New Key Type"),(0,r.kt)("p",null,"To create a new key type for using in keyring, ",(0,r.kt)("inlineCode",{parentName:"p"},"keyring.SignatureAlgo")," interface must be fulfilled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/crypto/keyring/signing_algorithms.go#L10-L15\n")),(0,r.kt)("p",null,"The interface consists in three methods where ",(0,r.kt)("inlineCode",{parentName:"p"},"Name()")," returns the name of the algorithm as a ",(0,r.kt)("inlineCode",{parentName:"p"},"hd.PubKeyType")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Derive()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Generate()")," must return the following functions respectively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/crypto/hd/algo.go#L28-L31\n")),(0,r.kt)("p",null,"Once the ",(0,r.kt)("inlineCode",{parentName:"p"},"keyring.SignatureAlgo")," has been implemented it must be added to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/crypto/keyring/keyring.go#L217"},"list of supported algos")," of the keyring."),(0,r.kt)("p",null,"For simplicity the implementation of a new key type should be done inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"crypto/hd")," package.\nThere is an example of a working ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1")," implementation in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/crypto/hd/algo.go#L38"},"algo.go"),"."),(0,r.kt)("h4",{id:"implementing-secp256r1-algo"},"Implementing secp256r1 algo"),(0,r.kt)("p",null,"Here is an example of how secp256r1 could be implemented."),(0,r.kt)("p",null,"First a new function to create a private key from a secret number is needed in the secp256r1 package. This function could look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// cosmos-sdk/crypto/keys/secp256r1/privkey.go\n\n// NewPrivKeyFromSecret creates a private key derived for the secret number\n// represented in big-endian. The `secret` must be a valid ECDSA field element.\nfunc NewPrivKeyFromSecret(secret []byte) (*PrivKey, error) {\n    var d = new(big.Int).SetBytes(secret)\n    if d.Cmp(secp256r1.Params().N) >= 1 {\n        return nil, errorsmod.Wrap(errors.ErrInvalidRequest, "secret not in the curve base field")\n    }\n    sk := new(ecdsa.PrivKey)\n    return &PrivKey{&ecdsaSK{*sk}}, nil\n}\n')),(0,r.kt)("p",null,"After that ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256r1Algo")," can be implemented."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// cosmos-sdk/crypto/hd/secp256r1Algo.go\n\npackage hd\n\nimport (\n    "github.com/cosmos/go-bip39"\n    \n    "github.com/cosmos/cosmos-sdk/crypto/keys/secp256r1"\n    "github.com/cosmos/cosmos-sdk/crypto/types"\n)\n\n// Secp256r1Type uses the secp256r1 ECDSA parameters.\nconst Secp256r1Type = PubKeyType("secp256r1")\n\nvar Secp256r1 = secp256r1Algo{}\n\ntype secp256r1Algo struct{}\n\nfunc (s secp256r1Algo) Name() PubKeyType {\n    return Secp256r1Type\n}\n\n// Derive derives and returns the secp256r1 private key for the given seed and HD path.\nfunc (s secp256r1Algo) Derive() DeriveFn {\n    return func(mnemonic string, bip39Passphrase, hdPath string) ([]byte, error) {\n        seed, err := bip39.NewSeedWithErrorChecking(mnemonic, bip39Passphrase)\n        if err != nil {\n            return nil, err\n        }\n\n        masterPriv, ch := ComputeMastersFromSeed(seed)\n        if len(hdPath) == 0 {\n            return masterPriv[:], nil\n        }\n        derivedKey, err := DerivePrivateKeyForPath(masterPriv, ch, hdPath)\n\n        return derivedKey, err\n    }\n}\n\n// Generate generates a secp256r1 private key from the given bytes.\nfunc (s secp256r1Algo) Generate() GenerateFn {\n    return func(bz []byte) types.PrivKey {\n        key, err := secp256r1.NewPrivKeyFromSecret(bz)\n        if err != nil {\n            panic(err)\n        }\n        return key\n    }\n}\n')),(0,r.kt)("p",null,"Finally, the algo must be added to the list of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/crypto/keyring/keyring.go#L217"},"supported algos")," by the keyring."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// cosmos-sdk/crypto/keyring/keyring.go\n\nfunc newKeystore(kr keyring.Keyring, cdc codec.Codec, backend string, opts ...Option) keystore {\n    // Default options for keybase, these can be overwritten using the\n    // Option function\n    options := Options{\n        SupportedAlgos:       SigningAlgoList{hd.Secp256k1, hd.Secp256r1}, // added here\n        SupportedAlgosLedger: SigningAlgoList{hd.Secp256k1},\n    }\n...\n")),(0,r.kt)("p",null,"Hereafter to create new keys using your algo, you must specify it with the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--algo")," :"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"simd keys add myKey --algo secp256r1")))}m.isMDXComponent=!0}}]);