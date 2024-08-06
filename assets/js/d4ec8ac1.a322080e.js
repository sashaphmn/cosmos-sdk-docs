"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[32022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=o,h=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:1},r="Command-Line Interface",s={unversionedId:"learn/advanced/cli",id:"version-0.47/learn/advanced/cli",title:"Command-Line Interface",description:"This document describes how command-line interface (CLI) works on a high-level, for an application. A separate document for implementing a CLI for a Cosmos SDK module can be found here.",source:"@site/versioned_docs/version-0.47/learn/advanced/07-cli.md",sourceDirName:"learn/advanced",slug:"/learn/advanced/cli",permalink:"/v0.47/learn/advanced/cli",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Encoding",permalink:"/v0.47/learn/advanced/encoding"},next:{title:"Events",permalink:"/v0.47/learn/advanced/events"}},l={},m=[{value:"Command-Line Interface",id:"command-line-interface-1",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Building the CLI",id:"building-the-cli",level:3},{value:"Adding Commands to the CLI",id:"adding-commands-to-the-cli",level:2},{value:"Root Command",id:"root-command",level:3},{value:"Transaction Commands",id:"transaction-commands",level:3},{value:"Query Commands",id:"query-commands",level:3},{value:"Flags",id:"flags",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Configurations",id:"configurations",level:2}],d={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command-line-interface"},"Command-Line Interface"),(0,o.kt)("admonition",{title:"Synopsis",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This document describes how command-line interface (CLI) works on a high-level, for an ",(0,o.kt)("a",{parentName:"p",href:"/v0.47/learn/beginner/overview-app"},(0,o.kt)("strong",{parentName:"a"},"application")),". A separate document for implementing a CLI for a Cosmos SDK ",(0,o.kt)("a",{parentName:"p",href:"/v0.47/build/building-modules/intro"},(0,o.kt)("strong",{parentName:"a"},"module"))," can be found ",(0,o.kt)("a",{parentName:"p",href:"/v0.47/build/building-modules/module-interfaces#cli"},"here"),".")),(0,o.kt)("h2",{id:"command-line-interface-1"},"Command-Line Interface"),(0,o.kt)("h3",{id:"example-command"},"Example Command"),(0,o.kt)("p",null,"There is no set way to create a CLI, but Cosmos SDK modules typically use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spf13/cobra"},"Cobra Library"),". Building a CLI with Cobra entails defining commands, arguments, and flags. ",(0,o.kt)("a",{parentName:"p",href:"#root-command"},(0,o.kt)("strong",{parentName:"a"},"Commands"))," understand the actions users wish to take, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," for creating a transaction and ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," for querying the application. Each command can also have nested subcommands, necessary for naming the specific transaction type. Users also supply ",(0,o.kt)("strong",{parentName:"p"},"Arguments"),", such as account numbers to send coins to, and ",(0,o.kt)("a",{parentName:"p",href:"#flags"},(0,o.kt)("strong",{parentName:"a"},"Flags"))," to modify various aspects of the commands, such as gas prices or which node to broadcast to."),(0,o.kt)("p",null,"Here is an example of a command a user might enter to interact with the simapp CLI ",(0,o.kt)("inlineCode",{parentName:"p"},"simd")," in order to send some tokens:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx bank send $MY_VALIDATOR_ADDRESS $RECIPIENT 1000stake --gas auto --gas-prices <gasPrices>\n")),(0,o.kt)("p",null,"The first four strings specify the command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The root command for the entire application ",(0,o.kt)("inlineCode",{parentName:"li"},"simd"),"."),(0,o.kt)("li",{parentName:"ul"},"The subcommand ",(0,o.kt)("inlineCode",{parentName:"li"},"tx"),", which contains all commands that let users create transactions."),(0,o.kt)("li",{parentName:"ul"},"The subcommand ",(0,o.kt)("inlineCode",{parentName:"li"},"bank")," to indicate which module to route the command to (",(0,o.kt)("a",{parentName:"li",href:"/v0.47/build/modules/bank/"},(0,o.kt)("inlineCode",{parentName:"a"},"x/bank"))," module in this case)."),(0,o.kt)("li",{parentName:"ul"},"The type of transaction ",(0,o.kt)("inlineCode",{parentName:"li"},"send"),".")),(0,o.kt)("p",null,"The next two strings are arguments: the ",(0,o.kt)("inlineCode",{parentName:"p"},"from_address")," the user wishes to send from, the ",(0,o.kt)("inlineCode",{parentName:"p"},"to_address")," of the recipient, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," they want to send. Finally, the last few strings of the command are optional flags to indicate how much the user is willing to pay in fees (calculated using the amount of gas used to execute the transaction and the gas prices provided by the user)."),(0,o.kt)("p",null,"The CLI interacts with a ",(0,o.kt)("a",{parentName:"p",href:"/v0.47/learn/advanced/node"},"node")," to handle this command. The interface itself is defined in a ",(0,o.kt)("inlineCode",{parentName:"p"},"main.go")," file."),(0,o.kt)("h3",{id:"building-the-cli"},"Building the CLI"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"main.go")," file needs to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function that creates a root command, to which all the application commands will be added as subcommands. The root command additionally handles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"setting configurations")," by reading in configuration files (e.g. the Cosmos SDK config file)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"adding any flags")," to it, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"--chain-id"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"instantiating the ",(0,o.kt)("inlineCode",{parentName:"strong"},"codec"))," by calling the application's ",(0,o.kt)("inlineCode",{parentName:"li"},"MakeCodec()")," function (called ",(0,o.kt)("inlineCode",{parentName:"li"},"MakeTestEncodingConfig")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"simapp"),"). The ",(0,o.kt)("a",{parentName:"li",href:"/v0.47/learn/advanced/encoding"},(0,o.kt)("inlineCode",{parentName:"a"},"codec"))," is used to encode and decode data structures for the application - stores can only persist ",(0,o.kt)("inlineCode",{parentName:"li"},"[]byte"),"s so the developer must define a serialization format for their data structures or use the default, Protobuf."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"adding subcommand")," for all the possible user interactions, including ",(0,o.kt)("a",{parentName:"li",href:"#transaction-commands"},"transaction commands")," and ",(0,o.kt)("a",{parentName:"li",href:"#query-commands"},"query commands"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function finally creates an executor and ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/spf13/cobra#Command.Execute"},"execute")," the root command. See an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function from the ",(0,o.kt)("inlineCode",{parentName:"p"},"simapp")," application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/simd/main.go#L12-L24\n")),(0,o.kt)("p",null,"The rest of the document will detail what needs to be implemented for each step and include smaller portions of code from the ",(0,o.kt)("inlineCode",{parentName:"p"},"simapp")," CLI files."),(0,o.kt)("h2",{id:"adding-commands-to-the-cli"},"Adding Commands to the CLI"),(0,o.kt)("p",null,"Every application CLI first constructs a root command, then adds functionality by aggregating subcommands (often with further nested subcommands) using ",(0,o.kt)("inlineCode",{parentName:"p"},"rootCmd.AddCommand()"),". The bulk of an application's unique capabilities lies in its transaction and query commands, called ",(0,o.kt)("inlineCode",{parentName:"p"},"TxCmd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryCmd")," respectively."),(0,o.kt)("h3",{id:"root-command"},"Root Command"),(0,o.kt)("p",null,"The root command (called ",(0,o.kt)("inlineCode",{parentName:"p"},"rootCmd"),') is what the user first types into the command line to indicate which application they wish to interact with. The string used to invoke the command (the "Use" field) is typically the name of the application suffixed with ',(0,o.kt)("inlineCode",{parentName:"p"},"-d"),", e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"simd")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"gaiad"),". The root command typically includes the following commands to support basic functionality in the application."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Status")," command from the Cosmos SDK rpc client tools, which prints information about the status of the connected ",(0,o.kt)("a",{parentName:"li",href:"/v0.47/learn/advanced/node"},(0,o.kt)("inlineCode",{parentName:"a"},"Node")),". The Status of a node includes ",(0,o.kt)("inlineCode",{parentName:"li"},"NodeInfo"),",",(0,o.kt)("inlineCode",{parentName:"li"},"SyncInfo")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ValidatorInfo"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Keys")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/client/keys"},"commands")," from the Cosmos SDK client tools, which includes a collection of subcommands for using the key functions in the Cosmos SDK crypto tools, including adding a new key and saving it to the keyring, listing all public keys stored in the keyring, and deleting a key. For example, users can type ",(0,o.kt)("inlineCode",{parentName:"li"},"simd keys add <name>")," to add a new key and save an encrypted copy to the keyring, using the flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--recover")," to recover a private key from a seed phrase or the flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--multisig")," to group multiple keys together to create a multisig key. For full details on the ",(0,o.kt)("inlineCode",{parentName:"li"},"add")," key command, see the code ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/client/keys/add.go"},"here"),". For more details about usage of ",(0,o.kt)("inlineCode",{parentName:"li"},"--keyring-backend")," for storage of key credentials look at the ",(0,o.kt)("a",{parentName:"li",href:"/v0.47/user/run-node/keyring"},"keyring docs"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Server")," commands from the Cosmos SDK server package. These commands are responsible for providing the mechanisms necessary to start an ABCI CometBFT application and provides the CLI framework (based on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/spf13/cobra"},"cobra"),") necessary to fully bootstrap an application. The package exposes two core functions: ",(0,o.kt)("inlineCode",{parentName:"li"},"StartCmd")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ExportCmd")," which creates commands to start the application and export state respectively.\nLearn more ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/server"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#transaction-commands"},(0,o.kt)("strong",{parentName:"a"},"Transaction"))," commands."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#query-commands"},(0,o.kt)("strong",{parentName:"a"},"Query"))," commands.")),(0,o.kt)("p",null,"Next is an example ",(0,o.kt)("inlineCode",{parentName:"p"},"rootCmd")," function from the ",(0,o.kt)("inlineCode",{parentName:"p"},"simapp")," application. It instantiates the root command, adds a ",(0,o.kt)("a",{parentName:"p",href:"#flags"},(0,o.kt)("em",{parentName:"a"},"persistent")," flag")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PreRun")," function to be run before every execution, and adds all of the necessary subcommands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/simd/cmd/root.go#L38-L92\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rootCmd")," has a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"initAppConfig()")," which is useful for setting the application's custom configs.\nBy default app uses CometBFT app config template from Cosmos SDK, which can be over-written via ",(0,o.kt)("inlineCode",{parentName:"p"},"initAppConfig()"),".\nHere's an example code to override default ",(0,o.kt)("inlineCode",{parentName:"p"},"app.toml")," template."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/simd/cmd/root.go#L106-L161\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"initAppConfig()")," also allows overriding the default Cosmos SDK's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/server/config/config.go#L235"},"server config"),". One example is the ",(0,o.kt)("inlineCode",{parentName:"p"},"min-gas-prices")," config, which defines the minimum gas prices a validator is willing to accept for processing a transaction. By default, the Cosmos SDK sets this parameter to ",(0,o.kt)("inlineCode",{parentName:"p"},'""')," (empty string), which forces all validators to tweak their own ",(0,o.kt)("inlineCode",{parentName:"p"},"app.toml")," and set a non-empty value, or else the node will halt on startup. This might not be the best UX for validators, so the chain developer can set a default ",(0,o.kt)("inlineCode",{parentName:"p"},"app.toml")," value for validators inside this ",(0,o.kt)("inlineCode",{parentName:"p"},"initAppConfig()")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/simd/cmd/root.go#L126-L142\n")),(0,o.kt)("p",null,"The root-level ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"keys")," subcommands are common across most applications and do not interact with application state. The bulk of an application's functionality - what users can actually ",(0,o.kt)("em",{parentName:"p"},"do")," with it - is enabled by its ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," commands."),(0,o.kt)("h3",{id:"transaction-commands"},"Transaction Commands"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/v0.47/learn/advanced/transactions"},"Transactions")," are objects wrapping ",(0,o.kt)("a",{parentName:"p",href:"/v0.47/build/building-modules/messages-and-queries#messages"},(0,o.kt)("inlineCode",{parentName:"a"},"Msg"),"s")," that trigger state changes. To enable the creation of transactions using the CLI interface, a function ",(0,o.kt)("inlineCode",{parentName:"p"},"txCommand")," is generally added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"rootCmd"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/simd/cmd/root.go#L177-L184\n")),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"txCommand")," function adds all the transaction available to end-users for the application. This typically includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sign command")," from the ",(0,o.kt)("a",{parentName:"li",href:"/v0.47/build/modules/auth/"},(0,o.kt)("inlineCode",{parentName:"a"},"auth"))," module that signs messages in a transaction. To enable multisig, add the ",(0,o.kt)("inlineCode",{parentName:"li"},"auth")," module's ",(0,o.kt)("inlineCode",{parentName:"li"},"MultiSign")," command. Since every transaction requires some sort of signature in order to be valid, the signing command is necessary for every application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Broadcast command")," from the Cosmos SDK client tools, to broadcast transactions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"All ",(0,o.kt)("a",{parentName:"strong",href:"/v0.47/build/building-modules/module-interfaces#transaction-commands"},"module transaction commands"))," the application is dependent on, retrieved by using the ",(0,o.kt)("a",{parentName:"li",href:"/v0.47/build/building-modules/module-manager#basic-manager"},"basic module manager's")," ",(0,o.kt)("inlineCode",{parentName:"li"},"AddTxCommands()")," function.")),(0,o.kt)("p",null,"Here is an example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"txCommand")," aggregating these subcommands from the ",(0,o.kt)("inlineCode",{parentName:"p"},"simapp")," application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/simd/cmd/root.go#L227-L251\n")),(0,o.kt)("h3",{id:"query-commands"},"Query Commands"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/v0.47/build/building-modules/messages-and-queries#queries"},(0,o.kt)("strong",{parentName:"a"},"Queries"))," are objects that allow users to retrieve information about the application's state. To enable the creation of queries using the CLI interface, a function ",(0,o.kt)("inlineCode",{parentName:"p"},"queryCommand")," is generally added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"rootCmd"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/simd/cmd/root.go#L177-L184\n")),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"queryCommand")," function adds all the queries available to end-users for the application. This typically includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"QueryTx")," and/or other transaction query commands] from the ",(0,o.kt)("inlineCode",{parentName:"li"},"auth")," module which allow the user to search for a transaction by inputting its hash, a list of tags, or a block height. These queries allow users to see if transactions have been included in a block."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Account command")," from the ",(0,o.kt)("inlineCode",{parentName:"li"},"auth")," module, which displays the state (e.g. account balance) of an account given an address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Validator command")," from the Cosmos SDK rpc client tools, which displays the validator set of a given height."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Block command")," from the Cosmos SDK RPC client tools, which displays the block data for a given height."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"All ",(0,o.kt)("a",{parentName:"strong",href:"/v0.47/build/building-modules/module-interfaces#query-commands"},"module query commands"))," the application is dependent on, retrieved by using the ",(0,o.kt)("a",{parentName:"li",href:"/v0.47/build/building-modules/module-manager#basic-manager"},"basic module manager's")," ",(0,o.kt)("inlineCode",{parentName:"li"},"AddQueryCommands()")," function.")),(0,o.kt)("p",null,"Here is an example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"queryCommand")," aggregating subcommands from the ",(0,o.kt)("inlineCode",{parentName:"p"},"simapp")," application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/simd/cmd/root.go#L204-L225\n")),(0,o.kt)("h2",{id:"flags"},"Flags"),(0,o.kt)("p",null,"Flags are used to modify commands; developers can include them in a ",(0,o.kt)("inlineCode",{parentName:"p"},"flags.go")," file with their CLI. Users can explicitly include them in commands or pre-configure them by inside their ",(0,o.kt)("a",{parentName:"p",href:"/v0.47/user/run-node/interact-node#configuring-the-node-using-apptoml"},(0,o.kt)("inlineCode",{parentName:"a"},"app.toml")),". Commonly pre-configured flags include the ",(0,o.kt)("inlineCode",{parentName:"p"},"--node")," to connect to and ",(0,o.kt)("inlineCode",{parentName:"p"},"--chain-id")," of the blockchain the user wishes to interact with."),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"persistent")," flag (as opposed to a ",(0,o.kt)("em",{parentName:"p"},"local")," flag) added to a command transcends all of its children: subcommands will inherit the configured values for these flags. Additionally, all flags have default values when they are added to commands; some toggle an option off but others are empty values that the user needs to override to create valid commands. A flag can be explicitly marked as ",(0,o.kt)("em",{parentName:"p"},"required")," so that an error is automatically thrown if the user does not provide a value, but it is also acceptable to handle unexpected missing flags differently."),(0,o.kt)("p",null,"Flags are added to commands directly (generally in the ",(0,o.kt)("a",{parentName:"p",href:"/v0.47/build/building-modules/module-interfaces#flags"},"module's CLI file")," where module commands are defined) and no flag except for the ",(0,o.kt)("inlineCode",{parentName:"p"},"rootCmd")," persistent flags has to be added at application level. It is common to add a ",(0,o.kt)("em",{parentName:"p"},"persistent")," flag for ",(0,o.kt)("inlineCode",{parentName:"p"},"--chain-id"),", the unique identifier of the blockchain the application pertains to, to the root command. Adding this flag can be done in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function. Adding this flag makes sense as the chain ID should not be changing across commands in this application CLI."),(0,o.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"Each flag is bound to it's respecteve named environment variable. Then name of the environment variable consist of two parts - capital case ",(0,o.kt)("inlineCode",{parentName:"p"},"basename")," followed by flag name of the flag. ",(0,o.kt)("inlineCode",{parentName:"p"},"-")," must be substituted with ",(0,o.kt)("inlineCode",{parentName:"p"},"_"),". For example flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--home")," for application with basename ",(0,o.kt)("inlineCode",{parentName:"p"},"GAIA")," is bound to ",(0,o.kt)("inlineCode",{parentName:"p"},"GAIA_HOME"),". It allows reducing the amount of flags typed for routine operations. For example instead of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'gaia --home=./ --node=<node address> --chain-id="testchain-1" --keyring-backend=test tx ... --from=<key name>\n')),(0,o.kt)("p",null,"this will be more convenient:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# define env variables in .env, .envrc etc\nGAIA_HOME=<path to home>\nGAIA_NODE=<node address>\nGAIA_CHAIN_ID="testchain-1"\nGAIA_KEYRING_BACKEND="test"\n\n# and later just use\ngaia tx ... --from=<key name>\n')),(0,o.kt)("h2",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"It is vital that the root command of an application uses ",(0,o.kt)("inlineCode",{parentName:"p"},"PersistentPreRun()")," cobra command property for executing the command, so all child commands have access to the server and client contexts. These contexts are set as their default values initially and maybe modified, scoped to the command, in their respective ",(0,o.kt)("inlineCode",{parentName:"p"},"PersistentPreRun()")," functions. Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"client.Context"),' is typically pre-populated with "default" values that may be useful for all commands to inherit and override if necessary.'),(0,o.kt)("p",null,"Here is an example of an ",(0,o.kt)("inlineCode",{parentName:"p"},"PersistentPreRun()")," function from ",(0,o.kt)("inlineCode",{parentName:"p"},"simapp"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/simd/cmd/root.go#L63-L86\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SetCmdClientContextHandler")," call reads persistent flags via ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadPersistentCommandFlags")," which creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"client.Context")," and sets that on the root command's ",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"InterceptConfigsPreRunHandler")," call creates a viper literal, default ",(0,o.kt)("inlineCode",{parentName:"p"},"server.Context"),", and a logger and sets that on the root command's ",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"server.Context")," will be modified and saved to disk. The internal ",(0,o.kt)("inlineCode",{parentName:"p"},"interceptConfigs")," call reads or creates a CometBFT configuration based on the home path provided. In addition, ",(0,o.kt)("inlineCode",{parentName:"p"},"interceptConfigs")," also reads and loads the application configuration, ",(0,o.kt)("inlineCode",{parentName:"p"},"app.toml"),", and binds that to the ",(0,o.kt)("inlineCode",{parentName:"p"},"server.Context")," viper literal. This is vital so the application can get access to not only the CLI flags, but also to the application configuration values provided by this file."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When willing to configure which logger is used, do not to use ",(0,o.kt)("inlineCode",{parentName:"p"},"InterceptConfigsPreRunHandler"),", which sets the default SDK logger, but instead use ",(0,o.kt)("inlineCode",{parentName:"p"},"InterceptConfigsAndCreateContext")," and set the server context and the logger manually:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'-return server.InterceptConfigsPreRunHandler(cmd, customAppTemplate, customAppConfig, customCMTConfig)\n\n+serverCtx, err := server.InterceptConfigsAndCreateContext(cmd, customAppTemplate, customAppConfig, customCMTConfig)\n+if err != nil {\n+   return err\n+}\n\n+// overwrite default server logger\n+logger, err := server.CreateSDKLogger(serverCtx, cmd.OutOrStdout())\n+if err != nil {\n+   return err\n+}\n+serverCtx.Logger = logger.With(log.ModuleKey, "server")\n\n+// set server context\n+return server.SetCmdServerContext(cmd, serverCtx)\n'))))}c.isMDXComponent=!0}}]);