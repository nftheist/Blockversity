import { useEffect } from "react";
import * as fcl from "@onflow/fcl";
import { WalletSetupBox } from "./WalletSetupBox";
import { useFlowUser, useRegisterWalletMutation } from "@niftory/sdk";

export function RegisterWallet() {
  const flowUser = useFlowUser();
  const [{ error, fetching: isLoading }, registerWallet] = useRegisterWalletMutation();

  useEffect(() => {
    if (!flowUser?.addr) {
      return;
    }
    registerWallet({ address: flowUser.addr });
  }, [flowUser?.addr, flowUser?.loggedIn, registerWallet]);

  const handleRegister = () => {
    fcl.logIn();
  };

  return (
    <WalletSetupBox
      text={
        "First, we need to create or connect to a wallet. Hit the button below and follow the prompts."
      }
      buttonText="Link or create your wallet"
      onClick={handleRegister}
      isLoading={isLoading}
      error={error as Error}
    />
  );
}
