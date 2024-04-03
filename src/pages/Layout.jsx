import React from 'react';
import { Outlet, Link } from "react-router-dom";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = ({children}) => {
  return (
    <div className="bg-bg">
        <NavBar/>
        <div className="py-48 sm:py-0 md:py-0 lg:py-0">
          {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout;