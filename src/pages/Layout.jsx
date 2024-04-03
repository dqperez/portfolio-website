import React from 'react'
import { Outlet, Link } from "react-router-dom";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = ({children}) => {
  return (
    <div className="bg-bg">
        <NavBar/>
        {children}
        <Footer />
    </div>
  )
}

export default Layout;