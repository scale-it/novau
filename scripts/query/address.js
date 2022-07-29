const { printAssets } = require("@algo-builder/algob");
const { multisigAddress } = require("algosdk");

const { msigAdmin } = require("../data/address");

async function run(runtimeEnv, deployer) {
	let msigAddr = multisigAddress(msigAdmin);
	console.log("msig address:", msigAddr);
	console.log(runtimeEnv.network);

	// balances
	await printAssets(deployer, deployer.accountsByName.get("robert").addr);
	await printAssets(deployer, deployer.accountsByName.get("master").addr);
}

module.exports = { default: run };
