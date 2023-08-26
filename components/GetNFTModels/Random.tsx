import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useNftModelsQuery } from "@niftory/sdk";
import { useRouter } from "next/router";
// import Image from "next/image";
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

const Random: React.FC<NftModelComponentProps> = ({ setId, basePath }) => {
  const [nft, setNft] = useState<NftItem[]>([]);
  const [cursor, setCursor] = useState<string>("");
  const [ranOnce, setRanOnce] = useState<boolean>(false);
    const router = useRouter();
  const [data] = useNftModelsQuery({
    variables: {
      filter: {
        setIds: [setId]
      },
      cursor: cursor,
      maxResults : 4 
      
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
    <div className="more_collection_set">
      {nft.map(item => (
        <div key={item.id} className="more_collection_card">
          <a className="no-underline" href={`${basePath}/${item.id}`}>
          <img src={item.content.poster?.url} className="more_collection_image"  alt={item.name}></img>
          <div className="more_collection_name">{item.name}</div>
          </a>
        </div>
     ))}
     
     {data?.data?.nftModels.items.length >3 && (
        <div className="view_more">
            <button className="view_more_button" onClick={() => {router.push(`${basePath}`)}}>View More</button>
        </div>
      )}
      
    </div>
  );
}

Random.propTypes = {
  setId: PropTypes.string.isRequired,
  basePath: PropTypes.string.isRequired
};

export default Random;
