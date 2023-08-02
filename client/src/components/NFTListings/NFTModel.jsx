import { useEffect, useState } from 'react';
import client from '../../niftoryclient';

function NftModelComponent() {
  const [nftModel, setNftModel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNftModel = async () => {
      try {
        const id = 'a67a1378-eb86-455a-82b4-cc445f4011d1'; // replace with your actual model ID
        const response = await client.getNftModel(id);
        setNftModel(response);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    };

    fetchNftModel();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!nftModel) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={nftModel.content.poster.url} alt={nftModel.title} />
    </div>
  );
}

export default NftModelComponent;
