<<<<<<< HEAD
import LoginButton from "../Buttons";
import * as fcl from "@blocto/fcl";
import "./Config";
import { useState } from "react";
import "../../pages/home/home.css"

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
            <LoginButton onClick={logoutHandler}>Logout</LoginButton>
          </div>
        ) : (
          <LoginButton onClick={loginHandler}>Login</LoginButton>
        )}
      </div>
    )
}
=======
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import * as fcl from "@blocto/fcl";

const Card = styled.div`
  margin: 10px 5px;
  padding: 10px;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
`;

const SignInOutButton = ({ user: { loggedIn } }) => {
  const signInOrOut = async (event) => {
    event.preventDefault();

    if (loggedIn) {
      fcl.unauthenticate();
    } else {
      fcl.authenticate();
    }
  };

  return (
    <button onClick={signInOrOut}>
      {loggedIn ? 'Sign Out' : 'Sign In/Up'}
    </button>
  );
};

SignInOutButton.propTypes = {
  user: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired
  }).isRequired
};

const CurrentUser = () => {
  const [user, setUser] = useState({});

  useEffect(() =>
    fcl
      .currentUser()
      .subscribe(user => setUser({ ...user }))
    , []);
  return (
    <Card>
      <SignInOutButton user={user} />
    </Card>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired
  }).isRequired
};

export default CurrentUser;
>>>>>>> 661d41d47a559d2d9d55c980d8179cda2ee3ce7d
