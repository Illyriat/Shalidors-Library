import { Outlet } from 'react-router-dom';
import Header from './Header';
import React from 'react';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;