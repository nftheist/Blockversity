import "./App.css"
import "../styles/Home.css"
import "../styles/Buttons.css"
import "../styles/Brilliant.css";
import "../styles/Clever.css";
import "../styles/Smart.css";
import "../styles/Brilliant_page.css"
import "../styles/Smart_page.css"
import "../styles/Clever_page.css"
import React from "react";
import { SessionProvider } from "next-auth/react"
import { AppProps as NextAppProps } from "next/app"
import { AuthProvider } from "../components/AuthProvider"
import { ComponentWithAuth } from "../components/ComponentWithAuth"
import { NiftoryClientProvider } from "../components/NiftoryClientProvider"
import { Session } from "inspector";
import "../components/navbar/navbar.css";

type AppProps<P = {}> = NextAppProps<P> & {
  Component:ComponentWithAuth;
}

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
