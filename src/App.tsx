import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import MainLayout from './MainLayout';
import './styles/globals.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="item/:id" element={<ItemPage />} />
      </Route>
    </Routes>
  );
};

export default App;
