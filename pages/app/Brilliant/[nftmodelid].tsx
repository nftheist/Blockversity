import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import { ComponentWithAuth } from "../../../components/ComponentWithAuth";
import axios from "axios";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useNftModelQuery, useWalletQuery, WalletState } from "@niftory/sdk";
import Navbar from "../../../components/navbar/Navbar";
import Random from "../../../components/GetNFTModels/Random";
import { WalletSetup } from "../../../components/WalletSetup/WalletSetup";
import WalletPage from "../../../components/wallet";
const Brilliant_page: ComponentWithAuth = () => {
  const router = useRouter();
  const { session, signIn, isLoading: sessionLoading } = useAuthContext();
  const nftmodelid = router.query["nftmodelid"] as string;

  const [{ data: nftModelData }] = useNftModelQuery({
    variables: {
      id: nftmodelid,
    },
  });

  const [{ data: walletData, fetching }] = useWalletQuery();

  const wallet = walletData?.wallet;
  const nftModel = nftModelData?.nftModel;

  const [isTransferring, setIsTransferring] = useState(false);
  const [transferError, setTransferError] = useState<string>(null);

  const initiateTransfer = useCallback(async () => {
    setIsTransferring(true);
    setTransferError(null);
    
    // const transactionId = await initiateFlowPayment(390.625, "0x5e126fbbd18295b9");
    // const status = await checkTransactionStatus(transactionId);

    // if (status.errorMessage) {
    //   setTransferError("Payment failed");
    //   setIsTransferring(false);
    //   return;
    // }

    axios
      .post(`/api/nft/${nftmodelid}/transfer`)
      .then(({ data }) => {
        router.push(`/app/YourCollection/${data.id}`);
      })
      .catch((error) => {
        console.error(error);
        setTransferError(error?.response?.data || error);
      })
      .finally(() => setIsTransferring(false));
  }, [nftmodelid, router]);

  const buttonAction = session
    ? wallet?.state === WalletState?.Ready
      ? initiateTransfer
      : () => router.push("/app/wallet")
    : signIn;

  const buttonText = session
    ? wallet?.state === WalletState?.Ready
      ? "BUY NOW"
      : "Set up wallet to claim"
    : "Sign in to claim";

  return (
    <div className="brilliant_page">
      <Navbar />
      <div className="wall"></div>
      <div className="brilliant_main">
        <WalletPage />
      </div>
      <div className="brilliant_title">THE BRILLIANT OWLS COLLECTION</div>
      <div className="about_brilliant">
        <div className="by_blockVersity">by blockVersity</div>
        <div className="by_blockVersity_text">
          THE BRILLIANT COLLECTION IS OUR TOP TIERS ONLY 50 ITEMS
          <br />
          AVAILABLE TO GIVE UNLOCK A LIFETIME MEMBERSHIP.
          <br />
          Items of this collection are the original designs and will never be duplicated
        </div>
      </div>
      <div className="brilliant_card_description_box">
        {nftModel ? (
          <>
            <img src={nftModel?.content?.poster?.url} alt={nftModel?.title} className="brilliant_card_description_image" />
            <div className="brilliant_card_description">
              <div className="brilliant_card_description_name">{nftModel.title}</div>
              <div className="brilliant_card_description_time">
                Lifetime Membership
                <br />
                Sales ends Month, day, year at time
              </div>
              <div className="brilliant_card_description_price">$175</div>
              <button className="brilliant_card_description_buy" onClick={buttonAction}>
                {buttonText}
              </button>
            </div>
            {transferError && (
              <h4>
                Something went wrong during transfer. The server responded with:
                <h5 style={{ color: "red" }}>{transferError.toString()}</h5>
              </h4>
            )}
          </>
        ) : (
          "Loading..."
        )}
      </div>
      <div className="About_Knowledge_Society">
        {/* ... (rest of your code) */}
      </div>
      <div className="more_collection">
        <div className="more_collection_title">More from this collection</div>
        <div>
          <Random setId="78149802-4581-4cff-b611-541123bba3ed" basePath="/app/Brilliant" />
        </div>
      </div>
    </div>
  );
};

export default Brilliant_page;
