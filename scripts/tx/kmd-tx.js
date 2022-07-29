const algosdk = require("algosdk");
// const algob = require("@algo-builder/algob")

async function run(runtimeEnv, deployer) {
	let master = deployer.accountsByName.get("master");
	let admin = deployer.accountsByName.get("admin");

	let params = await algodClient.getTransactionParams().do();
	const novau = deployer.asa.get("novau");


	// sending ALGO
	// let tx = algosdk.makePaymentTxnWithSuggestedParamsFromObject({ from: master.addr, to: admin.addr, amount: 2_000000, suggestedParams: params });

	// sending ASA
	let tx = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
		from: master.addr, to: admin.addr, amount: 2_000000, assetIndex: novau.assetIndex,
		suggestedParams: params,
	});


	let signedTx = tx.signTxn(master.sk);

	deployer.sendAndWait(signedTx);
	// or:
	// let  { txId } = await algodClient.sendRawTransaction(signedTx).do();
	// await algosdk.waitForConfirmation(algodClient, txid, 3);

	// We can also serialize and deserialize transactions to send it from other device
}

module.exports = { default: run };
