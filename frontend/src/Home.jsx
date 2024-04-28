import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Why from './components/Why';
import Main from './components/Main';

import { Outlet } from "react-router";
import Analytics from './components/Analytics';
import Footer from './components/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
      {/* <Main sections={data}/> */}
    </div>
  );
}

export default HomePage;
