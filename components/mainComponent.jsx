import React, { useEffect, useState } from 'react'
import Home from '../pages/home'
import Services from '../pages/sevices'
import About from '../pages/about'
import Pricing from '../pages/pricing'
import Newsletter from '../pages/nesLetter'
import StickyHeader from './stickyHeader'
import Header from './header'

const MainComponent = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    {isSticky?<StickyHeader/>:<Header />}
    <Home/>
    <Services/>
    <About/>
    <Pricing/>
    <Newsletter/>
    </>
  )
}

export default MainComponent
