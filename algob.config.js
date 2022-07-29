// NOTE: below we provide some example accounts.
// DON'T this account in any working environment because everyone can check it and use
// the private keys (this accounts are visible to everyone).

// NOTE: to be able to execute transactions, you need to use an active account with
// a sufficient ALGO balance.

/**
	 Check our /docs/algob-config.md documentation (https://github.com/scale-it/algo-builder/blob/master/docs/guide/algob-config.md) for more configuration options and ways how to
	load a private keys:
	+ using mnemonic
	+ using binary secret key
	+ using KMD daemon
	+ loading from a file
	+ loading from an environment variable
	+ ...
*/

// ## ACCOUNTS USING mnemonic ##
const { mkAccounts, algodCredentialsFromEnv, KMDCredentialsFromEnv } = require("@algo-builder/algob");

let accounts = mkAccounts([
	{
		// This account is created using `make setup-master-account` command from our
		// `/infrastructure` directory. It already has many ALGOs
		name: "sample",
		addr: "WWYNX3TKQYVEREVSW6QQP3SXSFOCE3SKUSEIVJ7YAGUPEACNI5UGI4DZCE",
		mnemonic:
			"enforce drive foster uniform cradle tired win arrow wasp melt cattle chronic sport dinosaur announce shell correct shed amused dismiss mother jazz task above hospital",
	},
]);

/// ## Enabling KMD access
/// Please check https://github.com/scale-it/algo-builder/blob/master/docs/guide/algob-config.md#credentials for more details and more methods.

process.env.KMD_DATA = '/home/andrew/novau/node_data/PrimaryNode/kmd-v0.5'
let kmdCred = KMDCredentialsFromEnv();
// kmdCred.host = "http://" + kmdCred.host

// TODO: set
process.env.KMD_WALLET_PWD


let kmdCfg = { wallets: [{ name: "TODO: wallet-name", password: process.env.KMD_WALLET_PWD, accounts: [{ name: "admin", address: "5ACGPWDDQ3ZRYPZLPPI4WL7WOB3P6QHHS55P6ZHVUGMRE23X7PC5BXSS4I" }] }], ...kmdCred };

let localhost = {
	host: "http://localhost",
	port: 4001,
	// Below is a token created through our script in `/infrastructure`
	// If you use other setup, update it accordignly (eg content of algorand-node-data/algod.token)
	token: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
	accounts: accounts,
	kmdCfg,
};

let purestake_mainnet = {
	host: "https://mainnet-algorand.api.purestake.io/ps2",
	port: "",
	token: {
		"X-API-Key": "TODO: api key",
	},
	accounts: accounts,
	kmdCfg,
};

let purestake_testnet = {
	host: "https://testnet-algorand.api.purestake.io/ps2",
	...purestake_mainnet,
};


module.exports = {
	networks: {
		default: localhost,
		mainnet: purestake_mainnet,
		testnet: purestake_testnet,
	},
};
