import { NiftoryClient } from "@niftory/sdk"

const client = new NiftoryClient({
  environmentName:"testnet",
  appId: import.meta.env.CLIENT_ID,
  apiKey: "kEoFQcmRUbz5gXJsiNoq2ToxAYFIOQ6ghDJoZWqGmP8=",
  clientSecret: import.meta.env.CLIENT_SECRET,
});

export default client;
