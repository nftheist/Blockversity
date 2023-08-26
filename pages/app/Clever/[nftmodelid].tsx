import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import { ComponentWithAuth } from "../../../components/ComponentWithAuth"
import axios from "axios"
import { useAuthContext } from "../../../hooks/useAuthContext"
import { useNftModelQuery, useWalletQuery, WalletState } from "@niftory/sdk"
import Image from "next/image";
// import Navbar from "../../../components/navbar/Navbar";
import Random from "../../../components/GetNFTModels/Random";
import styles from '../../../styles/brilliant.module.css';
import { AppHeader } from "../../../components/GoogleAuth";
import WalletPage from "../../../components/wallet";
import Smart_page from "../Smart/[nftmodelid]";

const Clever_page:ComponentWithAuth = () => {
  const router = useRouter();
  const {session,signIn,isLoading:sessionLoading} = useAuthContext();
  const nftmodelid = router.query["nftmodelid"] as string;
  console.log(nftmodelid);

  
  const [{ data: nftModelData }] = useNftModelQuery({
    variables: {
      id: nftmodelid,
    },
  })

  const [{ data: walletData, fetching }] = useWalletQuery()

  const wallet = walletData?.wallet
  const nftModel = nftModelData?.nftModel
  console.log(nftModelData);

  const [isTransferring, setIsTransferring] = useState(false)
  const [transferError, setTransferError] = useState<string>(null)

  const initiateTransfer = useCallback(() => {
    setIsTransferring(true);
    setTransferError(null);
    axios
      .post(`/api/nft/${nftmodelid}/transfer`)
      .then(({ data }) => {
        router.push(`/app/collection/${data.id}`);
      })
      .catch((error) => {
        console.error(error);
        setTransferError(error?.response?.data || error);
      })
      .finally(() => setIsTransferring(false));
  }, [nftmodelid, router]);

  const buttonAction = session
  ? wallet?.state === WalletState.Ready
    ? initiateTransfer
    : () => router.push("/app/wallet")
  : signIn

const buttonText = session
  ? wallet?.state === WalletState.Ready
    ? "Claim"
    : "Set up wallet to claim"
  : "Sign in to claim"
  

  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <div className="authentication">
            <AppHeader  />
            <WalletPage />
        </div>
      {nftModel? (
        <>
          <Image
            src={nftModel.content.poster.url}
            alt={nftModel.title}
            width={300}
            height={300}
            className={styles.image}
          />
          <div className={styles.title}>{nftModel.title}</div>
          <div className={styles.description}>{nftModel.description}</div>

          <button
            onClick={buttonAction}
          >
            {buttonText}
          </button>
          {transferError && (
            <h4>
              Something went wrong during transfer. The server responded with:
              <h5 color="red">{transferError.toString()}</h5>
            </h4>
          )}

        </>
      ) : (
        "Loading..."
      )}
      <Random setId="8e697312-0e56-404b-b9ce-d867af2389be" basePath="/app/Clever" />
    </div>
  );
};

export default Smart_page;