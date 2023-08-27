import { useNftQuery } from "@niftory/sdk" // Make sure to provide the correct import path
import { useRouter } from "next/router"
import { ComponentWithAuth } from "../../../components/ComponentWithAuth"

const NftPage: ComponentWithAuth = () => {
  const router = useRouter()
  const nftId = router.query["nftId"]?.toString()

  const [{ data }] = useNftQuery({ variables: { id: nftId } })

  const nft = data?.nft
  const model = nft?.model

  return (
    <div> {/* Wrapping JSX element */}
      {model && (
        <div> {/* Wrapping JSX element */}
          <img
            alt={nft?.model?.title}
            src={nft?.model?.content?.poster?.url}
            style={{ width: "20vh" }}
          />
          <h1>{model.title}</h1>
          <p>{model.description}</p>
          <p>
            {nft?.blockchainId == null
              ? "Blockchain State: Not yet minted."
              : `Blockchain State: ID=${nft?.blockchainId}, Serial=${nft?.serialNumber}`
            }
          </p>
        </div>
      )}
    </div>
  )
}

NftPage.requireAuth = true
export default NftPage
