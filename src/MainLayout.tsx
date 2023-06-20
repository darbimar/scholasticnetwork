import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import './styles/globals.scss';

const MaynLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default MaynLayout;
