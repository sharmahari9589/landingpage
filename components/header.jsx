import React from 'react';
import { Link } from 'react-router-dom';
import style from "../styles/header.module.css";
import { FaSignInAlt } from "react-icons/fa";
const Header = () => {
  const handleOnScroll = (targetId) => {
    if (targetId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  
    if (targetId === "services") {
      window.scrollTo({
        top: 850,
        behavior: "smooth"
      });
    }
  
    if (targetId === "about") {
      window.scrollTo({
        top: 1600,
        behavior: "smooth"
      });
    }
  
  
    
    
    if (targetId === "price") {
      window.scrollTo({
        top: 3200,
        behavior: "smooth"
      });
    }
  
    if (targetId === "news") {
      window.scrollTo({
        top: 4500,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <nav>
        <div className={style.mainDiv}>
       <div className={style.logoDiv}>
       <Link to="/">
        <img src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/logo.png' />
      </Link>
       </div>
      <div className={style.navDiv}>
      <Link id='home' onClick={() => handleOnScroll("home")} >Home</Link>
          <Link id='services'  onClick={() => handleOnScroll("services")}  >Services</Link>
          <Link id='about' onClick={() => handleOnScroll("about")}  >About</Link>
          <Link id='pricing'  onClick={() => handleOnScroll("price")}  >Pricing</Link>
          <Link id='news'  onClick={() => handleOnScroll("news")}   >Newsletter</Link>
      <button><FaSignInAlt /> Sign In Now</button>
      </div>
      </div>

    </nav>
  );
};

export default Header;
