// const algosdk = require("algosdk");
// const algob = require("@algo-builder/algob")

async function run(runtimeEnv, deployer) {
	console.log(">>> account list");
	deployer.accountsByName.forEach((a, k) => console.log("* ", k, a.addr))

}

module.exports = { default: run };
