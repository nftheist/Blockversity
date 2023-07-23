import { useState } from 'react';
import Modal from 'react-modal';
import Blocto from '@blocto/sdk';

const blocktoinstance = new Blocto({
  network: 'testnet', // or 'testnet'
});

function WalletButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [wallet, setWallet] = useState(null);

  async function connectWallet() {
    try {
      const wallet = await blocktoinstance.connect();
      setWallet(wallet); // save the connected wallet
      setIsOpen(false); // close the modal
      console.log('Wallet connected');
    } catch (error) {
      console.error('Failed to connect wallet', error);
    }
  }

  async function createWallet() {
    try {
      const wallet = await blocktoinstance.create();
      setWallet(wallet); // save the connected wallet
      setIsOpen(false); // close the modal
      console.log('Wallet created');
    } catch (error) {
      console.error('Failed to create wallet', error);
    }
  }

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        {wallet ? 'Wallet Connected' : 'Connect Wallet'}
      </button>

      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <h2>Select an option</h2>
        <button onClick={connectWallet}>Connect a wallet</button>
        <button onClick={createWallet}>Create a new wallet</button>
      </Modal>
    </div>
  );
}

export default WalletButtons;
