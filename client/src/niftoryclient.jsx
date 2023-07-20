import { NiftoryClient } from "@niftory/sdk"

const client = new NiftoryClient({
  environmentName:"testnet",
  appId: import.meta.env.CLIENT_ID,
  apiKey: import.meta.env.API_KEY,
  clientSecret: import.meta.env.CLIENT_SECRET,
});

export default client;
