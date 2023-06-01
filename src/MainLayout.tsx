import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function MaynLayout() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default MaynLayout;