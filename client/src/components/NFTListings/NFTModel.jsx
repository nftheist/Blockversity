import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { useNftModelsQuery } from "@niftory/sdk/react";
import "../../pages/clever/clever.css";

function NftModelComponent({setId}) {
  const [nft, setNft] = useState([]);
  const [cursor, setCursor] = useState(undefined);

  const [data] = useNftModelsQuery({
    variables: {
      filter: {
        setIds: setId
      },
      cursor: cursor // Add the cursor variable here
    }
  });
    
  useEffect(() => {
    if (data?.data?.nftModels) {
       console.log(data.data.nftModels.items);
      const fetchedNftItems = data.data.nftModels.items.map(item => ({
        ...item,
        name: item.title
      }));
      setNft((prevNft) => [...prevNft, ...fetchedNftItems]);
    }
  }, [data]);


  const loadMoreData = () => {
    if (data?.data?.nftModels?.pageInfo?.hasNextPage) {
      const nextCursor = data.data.nftModels.pageInfo.endCursor;
      setCursor(nextCursor);
    }
  };

  return (
    <div className="clever_card_space">
    {nft.map(item => (
      <div key={item.id} className="clever_card">
        <img src={item.content.poster.url} className="clever_card_photo"></img>
        <div className="clever_card_text">{item.name}</div>
        <button className="clever_card_buy">BUY NOW</button>
      </div>
    ))}
    {data?.data?.nftModels?.pageInfo?.hasNextPage && (
      <button onClick={loadMoreData}>Load More</button>
    )}
  </div>
  );
}

NftModelComponent.propTypes = {
  setId: PropTypes.string.isRequired,
};

export default NftModelComponent;
