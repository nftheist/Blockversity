import { useNftQuery } from "@niftory/sdk"
import { useRouter } from "next/router"
import Image from "next/image"

import { ComponentWithAuth } from "../../../components/ComponentWithAuth"

const NftPage: ComponentWithAuth = () => {
  const router = useRouter()
  const nftId = router.query["nftId"]?.toString()

  const [{ data }] = useNftQuery({ variables: { id: nftId } })

  console.log(data);
  const nft = data?.nft
  const model = nft?.model

  return (
    <div>
      {model && (
        <>
          <Image
            alt={nft.model?.title}
            src={nft.model?.content?.poster?.url}
          ></Image>
          <h3>{model.title}</h3>
          <h5>{model.description}</h5>
          <h5>
            {nft.blockchainId == null
              ? "Blockchain State: Not yet minted."
              : `Blockchain State: ID=${nft.blockchainId}, Serial=${nft.serialNumber}`}

          </h5>
        </>
      )}
    </div>
  )
}

NftPage.requireAuth = true
export default NftPage
