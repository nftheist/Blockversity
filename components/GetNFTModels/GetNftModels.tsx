import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useNftModelsQuery } from "@niftory/sdk";
import Image from "next/image";

interface NftItem {
  id: string;
  title: string;
  content: {
    poster?: {
      url: string;
    };
  };
  name?: string;
}

interface NftModelComponentProps {
  setId: string;
  basePath: string;
}

const NftModelComponent: React.FC<NftModelComponentProps> = ({ setId, basePath }) => {
  const [nft, setNft] = useState<NftItem[]>([]);
  const [cursor, setCursor] = useState<string>("");
  const [ranOnce, setRanOnce] = useState<boolean>(false);

  const [data] = useNftModelsQuery({
    variables: {
      filter: {
        setIds: [setId]
      },
    
      cursor: cursor 
    }
  });
    
  useEffect(() => {   
    if (data?.data?.nftModels && !ranOnce) {
      const fetchedNftItems = (data.data.nftModels.items as NftItem []).map((item: NftItem) => ({
        ...item,
        name: item.title
      }));
      setNft((prevNft) => [...prevNft, ...fetchedNftItems]);
      setRanOnce(true);
    }
  }, [data]);

  useEffect(() => {
    if (data?.data?.nftModels) {
      const fetchedNftItems = (data.data.nftModels.items as NftItem[]).map((item: NftItem) => ({
        ...item,
        name: item.title
      }));
    
      setNft((prevNft) => {
        const nfts = [...prevNft, ...fetchedNftItems];
        const final = nfts.filter(
          (obj, index) => index === nfts.findIndex(o => obj.id === o.id)
        );
        return final;
      });
    }
  }, [cursor]);

  const loadMoreData = async () => {
    if (data?.data?.nftModels?.cursor) {
      const nextCursor = data.data.nftModels.cursor;
      setCursor(nextCursor);
    }
  };

  return (
    <div className="clever_card_space">
      {nft.map(item => (
        <div key={item.id} className="clever_card">
          <a className="no-underline" href={`${basePath}/${item.id}`}>
          <img src={item.content.poster.url} className="clever_card_photo" alt={item.name}></img>
          <div className="clever_card_text">{item.name}</div>
          <button className="clever_card_buy">BUY NOW</button>
          </a>
        </div>
      ))}
      {data?.data?.nftModels.items.length >49 && (
        <button className="" onClick={loadMoreData}>Load More</button>
      )}
    </div>
  );
}

NftModelComponent.propTypes = {
  setId: PropTypes.string.isRequired,
  basePath: PropTypes.string.isRequired
};

export default NftModelComponent;
