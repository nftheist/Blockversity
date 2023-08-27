// AppLayout.tsx
import React from 'react';
import { AppHeader } from './GoogleAuth';
import styles from "../styles/Applayout.module.css"
type Props = {
  children: React.ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="app-layout">
      <AppHeader />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
