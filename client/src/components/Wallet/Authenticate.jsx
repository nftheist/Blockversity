import LoginButton from "./Buttons";
import * as fcl from "@blocto/fcl";
import "./Config";
import { useState } from "react";
import "./Buttons.css"
import RegisterWallet from "./Registerwallet";

export default function Authenticate () {
    const [currentUser, setUser] = useState({ loggedIn: false, addr: undefined });

    const loginHandler = () => {
      fcl.currentUser().subscribe(setUser); // fires everytime account connection status updates
      fcl.authenticate(); // authenticate
    };
  
    const logoutHandler = () => {
      fcl.unauthenticate(); // unauthenticate and clear account info in FCL
      setUser({ addr: undefined, loggedIn: false });
    };
    
    return(
        <div className="Authenticate Container">
        {currentUser?.addr ? (
          <div className="UserContainer">
            <div className="UserAddress">
              {currentUser.addr}
            </div>
            <RegisterWallet address={currentUser.addr} />
            <LoginButton onClick={logoutHandler}>Logout</LoginButton>
          </div>
        ) : (
          <LoginButton onClick={loginHandler}>Login</LoginButton>
        )}
      </div>
    )
}