import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";
import React from "react";
import WalletPage from "./wallet";

export function AppHeader() {
    const { session, signOut, signIn } = useAuthContext();
    const router = useRouter();
    return (
        <div className="header-container">
            {session ? (
                <>
                    <span>User: {session?.user?.email} </span>
                    <div>
                        <button className="button_authenticate" onClick={() => WalletPage}>
                            Wallet
                        </button>
                        <button className="button_authenticate" onClick={signOut}>
                            Sign Out
                        </button>
                    </div>
                </>
            ) : (
                <button className="button_authenticate" onClick={signIn}>
                    Sign In
                </button>
            )}
        </div>
    );
}
