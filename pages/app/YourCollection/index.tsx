import React from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useNftsQuery } from '@niftory/sdk';
import styles from '../../../styles/CollectionPage.module.css'; // Import the CSS

const CollectionPage = () => {
  const router = useRouter();
  const { session } = useAuthContext();
  //@ts-ignore
  const _userId: string = session?.userId as string;
  const [{ data }] = useNftsQuery({ variables: { userId: _userId } });
  const nfts = data?.nfts?.items;

  return (
    <div className={styles.container}>
      <div className={styles['nft-box']}>
        {nfts?.map((nft) => (
          nft && (
            <div 
              key={nft.id} 
              className={styles['nft-item']}
              onClick={() => router.push(`/app/collection/${nft.id}`)}
            >
              <img src={nft.model?.content.poster.url}></img>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
