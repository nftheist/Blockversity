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