import { ConfigureWallet } from "./ConfigureWallet";
import { RegisterWallet } from "./RegisterWallet";
import { VerifyWallet } from "./VerifyWallet";
import { useRouter } from "next/router";
import { WalletSetupBox } from "./WalletSetupBox";
import { useContractQuery, useWalletQuery, WalletState } from "@niftory/sdk";

export type WalletSetupStepProps = {
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: Error | null) => void;
};

export type WalletSetupProps = WalletSetupStepProps & {
  wallet: any; // Replace with your Wallet type
  flowUser: any; // Replace with your FlowUser type
  error: Error;
};

export  function WalletSetup() {
  const router = useRouter();

  const [{ data: contractData, fetching: isLoadingContract }] = useContractQuery();
  const [{ data, fetching, error }] = useWalletQuery();

  if (isLoadingContract || !contractData) {
    console.log("Loading...");
    return null;
  }

  const wallet = data?.wallet;

  if (!error && !fetching) {
    // User doesn't have a wallet yet
    if (!wallet?.address) {
      return <RegisterWallet />;
    }

    switch (wallet.state) {
      case WalletState.Unverified:
        // User has a wallet but it's not verified yet
        return <VerifyWallet />;

      case WalletState.Verified:
        // The user has verified their wallet, but hasn't configured it yet
        return <ConfigureWallet />;
    }
  }

  return (
    <WalletSetupBox
      text={`You're all set up! Your wallet address is ${wallet?.address}`}
      error={error as Error}
      isLoading={fetching}
    />
  );
}
