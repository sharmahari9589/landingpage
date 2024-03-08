import React, { useEffect, useState } from 'react';
import style from "../styles/stickyHeader.module.css"
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
const StickyHeader = () => {
      let location = useLocation()
   
  const [activeLink, setActiveLink] = useState("");
 useEffect(()=>{
  setActiveLink(location.pathname)
 })


 useEffect(() => {
  const handleScroll = () => {
    const homeLink = document.getElementById("home");
    const servicesLink = document.getElementById("services");
    const aboutLink = document.getElementById("about");
    const pricielink = document.getElementById("pricing");
    const news = document.getElementById("news");
    const yOffset = window.pageYOffset;

    if (yOffset > 300 && yOffset <= 800) {
      homeLink.classList.add("activeLink");
      servicesLink.classList.remove("activeLink");
      aboutLink.classList.remove("activeLink");
      pricielink.classList.remove("activeLink");
      news.classList.remove('activeLink');

    } else if (yOffset > 800 && yOffset <= 1200) {
      servicesLink.classList.add("activeLink");
      homeLink.classList.remove("activeLink");
      aboutLink.classList.remove("activeLink");
      pricielink.classList.remove("activeLink");
      news.classList.remove('activeLink');

    } else if (yOffset > 1500 && yOffset <= 2300) {
      aboutLink.classList.add("activeLink");
      homeLink.classList.remove("activeLink");
      servicesLink.classList.remove("activeLink");
      pricielink.classList.remove("activeLink");
      news.classList.remove('activeLink');

    } else if (yOffset > 3200 && yOffset <= 4400) {
      pricielink.classList.add('activeLink');
      homeLink.classList.remove('activeLink');
      servicesLink.classList.remove('activeLink');
      aboutLink.classList.remove('activeLink');
      news.classList.remove('activeLink');

    }
    
    else if (yOffset > 4400) {
      news.classList.add('activeLink');
      homeLink.classList.remove('activeLink');
      servicesLink.classList.remove('activeLink');
      aboutLink.classList.remove('activeLink');
      pricielink.classList.remove('activeLink');

    }
    else {
      // Handle the default case when scroll position doesn't match any condition
      homeLink.classList.remove('activeLink');
      servicesLink.classList.remove('activeLink');
      aboutLink.classList.remove('activeLink');
      pricielink.classList.remove('activeLink');
    }
  };

  // Add event listener to window scroll
  window.addEventListener("scroll", handleScroll);

  // Clean up by removing the event listener when the component unmounts
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


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
    <header> 
      <div className={style.mainDiv}>
        <div className={style.logoDiv}>
          <Link to="/">
            <img src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/logo.png' alt="Logo" />
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

    </header>
  );
};

export default StickyHeader;
