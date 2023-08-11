import { useEffect } from "react";
import { useFlowUser, useRegisterWalletMutation } from "@niftory/sdk/react";
import * as fcl from "@onflow/fcl";
import LoginButton from "./Buttons";
import "./Buttons.css";
import "./Config";

export default function Authenticate() {
  const flowUser = useFlowUser();
  const [{ error }, registerWallet] = useRegisterWalletMutation();

  useEffect(() => {
    if (flowUser?.loggedIn && flowUser?.addr) {
      // console.log("Calling registerWallet mutation");
      console.log("User is logged in:", flowUser?.loggedIn);
      console.log("User address:", flowUser?.addr);
      registerWallet({ address: flowUser.addr })
        .then(() => {
          console.log("Mutation successful");
          console.log("User registered successfully");
        })
        .catch((error) => {
          console.error("Error registering user:", error);
        });
    }
  }, [flowUser?.loggedIn, flowUser?.addr, registerWallet]);

  const handleLogin = () => {
    fcl.logIn();
  };

  const handleLogout = () => {
    fcl.unauthenticate();
  };

  useEffect(() => {
    if (error) {
      console.error("Error:", error.message);
    }
  }, [error]);

  return (
    <div className="Authenticate Container">
      {flowUser?.loggedIn ? (
        <div className="UserContainer">
          <div className="UserAddress">{flowUser?.addr}</div>
          {/* Display any registration-related UI if needed */}
          <LoginButton onClick={handleLogout}>Logout</LoginButton>
        </div>
      ) : (
        <LoginButton onClick={handleLogin}>Login</LoginButton>
      )}
    </div>
  );
}
