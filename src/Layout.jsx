import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function Layout({ sidebar, children }) {
  return (
    <>
      <Navbar />
      <Sidebar sidebar={sidebar} />
      <div className="main-content">
        {children}
      </div>
    </>
  );
}

export default Layout;
