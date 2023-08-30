import "./App.css"
import "../styles/Home.css"
import "../styles/Buttons.css"
import "../styles/Brilliant.css";
import "../styles/Clever.css";
import "../styles/Smart.css";
import "../styles/Brilliant_page.css"
import "../styles/Smart_page.css"
import "../styles/Clever_page.css"
import "../styles/Applayout.css"
import React from "react";
import { SessionProvider } from "next-auth/react"
import { AppProps as NextAppProps } from "next/app"
import { AuthProvider } from "../components/AuthProvider"
import { ComponentWithAuth } from "../components/ComponentWithAuth"
import { NiftoryClientProvider } from "../components/NiftoryClientProvider"
import "../components/navbar/navbar.css";
import {config} from "@onflow/fcl"
type AppProps<P = {}> = NextAppProps<P> & {
  Component:ComponentWithAuth;
}
config({
"accessNode.api": "http://localhost:3000",
"discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
"discovery.wallet.method": "HTTP/POST",
"flow.network":"testnet"
})
const App = ({Component,pageProps:{session,auth, ...pageProps}}:AppProps): JSX.Element => (
  <SessionProvider session={session} refetchInterval={60 * 60 }>
      <AuthProvider requireAuth = {Component.requireAuth}>
        <NiftoryClientProvider>
            <Component {...pageProps} />
        </NiftoryClientProvider>
      </AuthProvider>
  </SessionProvider>


)
export default App
