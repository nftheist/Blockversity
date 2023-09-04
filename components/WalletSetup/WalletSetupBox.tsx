import React, { useMemo } from 'react';
import styles from '../../styles/WallletSetupBox.module.css';

type WalletSetupBoxProps = {
  text?: string;
  buttonText?: string;
  isLoading?: boolean;
  error?: Error | null;
  onClick?: () => void;
};

export const WalletSetupBox = ({
  text,
  buttonText,
  isLoading,
  error,
  onClick,
}: WalletSetupBoxProps) => {
  useMemo(() => error && console.error(error), [error]);

  if (isLoading) {
    return <div className={styles.spinner}>Loading...</div>;
  }

  if (error) {
    return <div className={styles['error-box']}>Something went wrong. Please try again later!</div>;
  }

  return (
    <>
      <div className={styles.box}>{text}</div>
      <button className={styles.button} onClick={onClick}>
        {buttonText}
      </button>
    </>
  );
};
