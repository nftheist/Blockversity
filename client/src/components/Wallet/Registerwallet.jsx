import { useState } from 'react';
import client from '../../niftoryclient';

const RegisterWalletComponent = () => {
    const [walletAddress, setWalletAddress] = useState('');

    const registerWallet = async () => {
        try {
            const wallet = await client.registerWallet()
            console.log(wallet);
            // Here you can handle the Wallet object returned by the promise
        } catch (error) {
            console.error(error);
            // Here you can handle errors
        }
    };

    return (
        <div>
            <input 
                value={walletAddress} 
                onChange={(e) => setWalletAddress(e.target.value)} 
                placeholder="Enter Wallet Address" 
            />
            <button onClick={registerWallet}>Register Wallet</button>
        </div>
    );
};

export default RegisterWalletComponent;
