import { useRouter } from "next/router"
import { useAuthContext } from "../../../hooks/useAuthContext"
import { useNftsQuery } from "@niftory/sdk"

import { ComponentWithAuth } from "../../../components/ComponentWithAuth"

const CollectionPage: ComponentWithAuth = () => {
  const router = useRouter()
  const { session } = useAuthContext()
//@ts-ignore
  const _userId: string = session?.userId as string
  const [{ data }] = useNftsQuery({ variables: { userId: _userId } })
  const nfts = data?.nfts?.items

  return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
        {nfts?.map(
          (nft) =>
            nft && (
              <div key={nft.id} style={{ border: "1px solid #ccc", padding: "16px", textAlign: "center" }}>
                <a onClick={() => router.push(`/app/YourCollection/${nft.id}`)} style={{ cursor: "pointer", textDecoration: "underline" }}>
                  {nft.model?.title}
                </a>
              </div>
            )
        )}
      </div>
  )
}

CollectionPage.requireAuth = true
export default CollectionPage
