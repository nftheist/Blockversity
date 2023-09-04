import { useCallback } from "react";
import * as fcl from "@onflow/fcl";
import { WalletSetupBox } from "./WalletSetupBox";
import { useFlowUser, useVerifyWalletMutation, useWalletQuery } from "@niftory/sdk";

export function VerifyWallet() {
  const flowUser = useFlowUser();
  const [{ data }] = useWalletQuery();
  const [{ fetching: isLoading, error }, verifyWallet] = useVerifyWalletMutation();

  const wallet = data?.wallet;

  const onClick = useCallback(async () => {
    let signature;

    // Use FCL to sign the verification message
    signature = await fcl.currentUser().signUserMessage(wallet.verificationCode);

    if (!signature) {
      return;
    }

    // Send the signature to the API
    verifyWallet({
      address: wallet.address,
      signedVerificationCode: signature,
    });
  }, [verifyWallet, wallet.address, wallet.verificationCode]);

  return (
    <WalletSetupBox
      text={
        "Step 2 is proving that the wallet is yours. Click the button below to send a secure message signed by your wallet."
      }
      buttonText="Verify wallet"
      onClick={onClick}
      isLoading={isLoading}
      error={error as Error}
    />
  );
}
