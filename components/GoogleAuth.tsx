import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";
import React from "react";
import WalletPage from "./wallet";
import styles from "../styles/WallletSetupBox.module.css"

export function AppHeader() {
    const { session, signOut, signIn } = useAuthContext();
    const router = useRouter();
    console.log(session?.user.email)
    return (
        <div className={styles.header_container}>
            {session ? (
                <>
                    <div>
                        <button className={styles.button_authenticate} onClick={()=> {router.push(`/app/YourCollection`)}}> Collection</button>
                        <button className={styles.button_authenticate} onClick={() => WalletPage}>
                            Wallet
                        </button>
                        <button className={styles.button_authenticate} onClick={signOut}>
                            Sign Out
                        </button>
                    </div>
                </>
            ) : (
                <button className={styles.button_authenticate} onClick={signIn}>
                    Sign In
                </button>
            )}
        </div>
    );
}