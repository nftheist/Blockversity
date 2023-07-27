import * as fcl from "@blocto/fcl";

const YOUR_DAPP_ID = import.meta.env.YOUR_DAPP_ID;


fcl.config({
  "accessNode.api": "https://rest-testnet.onflow.org", // connect to Flow testnet
  "discovery.wallet": `https://wallet-v2-dev.blocto.app/${YOUR_DAPP_ID}/flow/authn` // use Blocto testnet wallet
});
