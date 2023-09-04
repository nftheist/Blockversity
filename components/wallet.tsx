import { WalletSetup } from "./WalletSetup/WalletSetup";
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
