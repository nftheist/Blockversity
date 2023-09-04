import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"

export async function initiateFlowPayment(amount, recipientAddress) {
    console.log(fcl.config().get("discovery.wallet"));
    const transactionId = await fcl.send([
    fcl.transaction`
      import FungibleToken from 0x9a0766d93b6608b7
      import FlowToken from 0x7e60df042a9c0868

      transaction(amount: UFix64, recipient: Address) {
        let senderVault: @FungibleToken.Vault
        let receiverVault: @FungibleToken.Vault

        prepare(signer: AuthAccount) {
          self.senderVault = signer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)
            ?? panic("Could not borrow reference to the owner's Vault!")
        }

        execute {
          let recipient = getAccount(recipient)
          self.receiverVault = recipient.getCapability(/public/flowTokenReceiver)
            .borrow<&{FungibleToken.Receiver}>()
            ?? panic("Could not borrow receiver reference to the recipient's Vault")

          self.senderVault.transfer(&self.receiverVault, amount: amount)
        }
      }
    `,
    fcl.args([
      fcl.arg(amount.toString(), t.UFix64),
      fcl.arg(recipientAddress, t.Address),
    ]),
    fcl.proposer(fcl.authz),  // current user as proposer
    fcl.authorizations([fcl.authz]),  // current user as authorization
    fcl.payer(fcl.authz),  // current user as payer
    fcl.limit(35),
  ]).then(fcl.decode)

  return transactionId
}

export async function checkTransactionStatus(transactionId) {
    return await fcl.tx(transactionId).onceSealed()
  }
  