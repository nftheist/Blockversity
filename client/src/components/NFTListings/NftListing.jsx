import { useEffect, useState } from 'react';
import client from '../../niftoryclient';

function NftListingComponent() {
  const [nftModels, setNftModels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNftModels = async () => {
      try {
        const options = {
          appId: 'cliakqhgm0000jw0wq1ycowp7', // replace with your actual app ID
          filter: {
            setIds: ['07ce9e2d-c821-4462-872d-c09b6cc66d06'], // replace with your actual set IDs
            // Any other filter parameters go here
          },
        };
        const response = await client.getNftModels(options);
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

export default NftListingComponent;
