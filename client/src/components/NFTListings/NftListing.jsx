import { useEffect, useState } from 'react';
import client from '../../niftoryclient';

function NftModelComponent() {
  const [nftModels, setNftModels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNftModels = async () => {
      try {
        const response = await client.getNftModels();
        setNftModels(response.items);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    };

    fetchNftModels();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {nftModels.map((nftModel) => {
        console.log(nftModel.content.poster.url);
        return <img key={nftModel.id} src={nftModel.content.poster.url} alt={nftModel.title} />;
      })}
    </div>
  );
}

export default NftModelComponent;
