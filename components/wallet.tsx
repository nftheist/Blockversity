import { WalletSetup } from "./WalletSetup/WalletSeup"
import { ComponentWithAuth } from "./ComponentWithAuth"
import AppLayout from "../components/Applayout";

const WalletPage: ComponentWithAuth = () => {
   return (
    <AppLayout>
     <WalletSetup />
    </AppLayout>

   )
   }

WalletPage.requireAuth = true
export default WalletPage
