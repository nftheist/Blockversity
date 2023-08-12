// import { useCallback } from "react"
// import * as fcl from "@onflow/fcl"
// import { Blockchain, useFlowUser, useVerifyWalletMutation, useWalletQuery } from "@niftory/sdk/react"

// export function VerifyWallet( blockchain ) {
//   useFlowUser()

//   const [{ data }] = useWalletQuery()
//   const { ethereum, account } = useMetaMask()
//   const [{ fetching: isLoading, error }, verifyWallet] = useVerifyWalletMutation()

//   const wallet = data?.wallet

//   // On click, prompt the user to sign the verification message
//   const onClick = useCallback(async () => {
//     let signature

//     switch (blockchain) {
//       case Blockchain.Flow:
//         // Use FCL to sign the verification message
//         signature = await fcl.currentUser.signUserMessage(wallet.verificationCode)
//         break
//       case Blockchain.Polygon: {
//         // User ethers signer to sign the verification message
//         const provider = new ethers.providers.Web3Provider(ethereum)
//         const signer = provider.getSigner()
//         signature = await signer.signMessage(wallet.verificationCode)
//         break
//       }
//     }

//     if (!signature) {
//       return
//     }

//     // Send the signature to the API
//     verifyWallet({
//       address: wallet.address,
//       signedVerificationCode: signature,
//     })
//   }, [blockchain, verifyWallet, wallet.address, wallet.verificationCode, ethereum])

//   return (
//     <>

//     </>
//   )
// }
