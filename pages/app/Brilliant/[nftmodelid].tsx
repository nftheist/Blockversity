import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import { ComponentWithAuth } from "../../../components/ComponentWithAuth"
import axios from "axios"
import { useAuthContext } from "../../../hooks/useAuthContext"
import { useNftModelQuery, useWalletQuery, WalletState } from "@niftory/sdk"
import Image from "next/image";
import Navbar from "../../../components/navbar/Navbar";
import Random from "../../../components/GetNFTModels/Random";
import styles from '../../../styles/brilliant.module.css';
import WalletPage from "../../../components/wallet";

const Brilliant_page:ComponentWithAuth = () => {
  const router = useRouter();
  const {session,signIn,isLoading:sessionLoading} = useAuthContext();
  const nftmodelid = router.query["nftmodelid"] as string;
  // console.log(nftmodelid);

  
  const [{ data: nftModelData }] = useNftModelQuery({
    variables: {
      id: nftmodelid,
    },
  })
  // console.log(nftModelData);
  const [{ data: walletData, fetching }] = useWalletQuery()

  console.log(session?.user);
  const wallet = walletData?.wallet
  const nftModel = nftModelData?.nftModel
  console.log(wallet);
  const [isTransferring, setIsTransferring] = useState(false)
  const [transferError, setTransferError] = useState<string>(null)
  // const wallet = walletData?.wallet
  // const nftModel = nftModelData?.nftModel

  const initiateTransfer = useCallback(() => {
    setIsTransferring(true);
    setTransferError(null);
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
  : signIn

const buttonText = session
  ? wallet?.state === WalletState?.Ready
    ? "Claim"
    : "Set up wallet to claim"
  : "Sign in to claim"
  

  return (
    <div className={styles.container}>
      <Navbar />
      <div className="authentication">
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
      <Random setId="78149802-4581-4cff-b611-541123bba3ed" basePath="/app/Brilliant" />
    </div>
  );
};
export default Brilliant_page;