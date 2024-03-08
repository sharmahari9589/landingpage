import React, { useEffect, useState } from 'react'
import style from "../styles/home.module.css"
import Header from '../components/header'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { BsApple } from "react-icons/bs";
import StickyHeader from '../components/stickyHeader';
const Home = () => {



  return (
    <>
    

    <div className={style.mainDiv}>
      <div className={style.firstDiv}>
       <div className={style.contentDiv}>
       <h1 className={style.heading}>Get The Latest App From App Stores</h1>
     <p className={style.para}>Chain App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout provided by TemplateMo, a great website to download free CSS templates.</p>
     <br/>
        <div className={style.buttonHolder}>
        <button>Free Quote <BsApple /></button>
        <button>Free Quote <FaGooglePlay /></button>
        </div>
       </div>
      </div>
      <div className={style.secondDiv}>
      </div>
    </div>
  
    </>
  )
}

export default Home
