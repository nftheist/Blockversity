import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as fcl from "@blocto/fcl"
// import * as serviceWorker from './serviceWorker'


fcl.config({
  "accessNode.api": "https://rest-testnet.onflow.org", // connect to Flow testnet
  "discovery.wallet": `https://wallet-v2-dev.blocto.app/${"0x53f61216803102df"}/flow/authn` // use Blocto testnet wallet
});

ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
    <App />

  </React.StrictMode>,
)

// serviceWorker.unregister()
