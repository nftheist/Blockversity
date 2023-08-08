import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useRegisterWalletMutation } from '@niftory/sdk/react';

const RegisterWallet = ({ address }) => {
  // Destructure the mutation function and states from the hook
  const [registerWallet, { data, fetching, error }] = useRegisterWalletMutation();

  const [walletRegistered, setWalletRegistered] = useState(false);

  useEffect(() => {
    const register = async () => {
      // Call the mutation function with the address
      const response = await registerWallet({ address });

      // Check for errors
      if (response.error) {
        console.error("Error registering wallet:", response.error);
      } else {
        console.log("Wallet registered:", response.data);
        setWalletRegistered(true);
      }
    };
   
    // Call the register function
    register();
  }, [address, registerWallet]);

  console.log({data});
  if (fetching) return <p>Registering wallet...</p>;
  if (error) return <p>Error registering wallet.</p>;
  if (walletRegistered) return <p>Wallet registered successfully!</p>;

  return null;
};

RegisterWallet.propTypes = {
    address: PropTypes.string.isRequired,
};

export default RegisterWallet;
