import { WalletSetup } from "./WalletSetup/WalletSeup"
import { ComponentWithAuth } from "./ComponentWithAuth"
import { AppHeader } from "./GoogleAuth"

const WalletPage: ComponentWithAuth = () => {
//   <AppHeader>
   return (
    <>
     {/* <AppHeader /> */}
     <WalletSetup />
    </>

   )
//   </AppHeader>
   }

WalletPage.requireAuth = true
export default WalletPage
