import React, {useRef} from 'react';
import { Outlet, Link } from "react-router-dom";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = ({children}) => {
  const homeRef = useRef(null);
  return (
    <div className="bg-bg">
        <NavBar homeRef={homeRef}/>
        <div className="py-48 sm:py-0 md:py-0 lg:py-0">
          {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout;