import React from 'react';
import style from "../styles/pricing.module.css";
import StickyHeader from '../components/stickyHeader';

const Pricing = () => {
  return (
    <>
      <StickyHeader />

      <div className={style.imgDiv}>
        <div className={style.contentdiv}>
          <h1>We Have The Best Pre-Order <span style={{ color: "#4b8ef1" }}>Prices</span> You Can Get</h1>
        </div>
        <div className={style.hr}></div>
        <br />
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </article>
      </div>
      <div className={style.pricing}>
        <div className={style.smallDiv}>
          <h1>$12</h1>
          <h2>Standard Plan App</h2>
          <img style={{ marginTop: 20 }} src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/pricing-table-01.png' alt="Standard Plan"/>
          <article>
            <p>Lorem Ipsum Dolores</p>
            <p>20 TB of Storage</p>
            <p style={{ color: "#afafaf", textDecoration: "line-through" }}>Life-time Support</p>
            <p style={{ color: "#afafaf", textDecoration: "line-through" }}>Premium Add-Ons</p>
            <p style={{ color: "#afafaf", textDecoration: "line-through" }}>Fastest Network</p>
            <p style={{ color: "#afafaf", textDecoration: "line-through" }}>Purchase This Plan Now</p>
          </article>
          <button className={style.btn}>Purchase This Plan Now</button>
          <img className={style.img1} src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/regular-table-bottom.png' alt="Regular Table Bottom"/>
        </div>
        <div className={style.bigDiv}>
          <h1>$25</h1>
          <h2>Business Plan App</h2>
          <img style={{ marginTop: 40 }} src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/pricing-table-01.png' alt="Business Plan"/>
          <article>
            <p>Lorem Ipsum Dolores</p>
            <p>50 TB of Storage</p>
            <p>Life-time Support</p>
            <p>Premium Add-Ons</p>
            <p style={{ color: "#afafaf", textDecoration: "line-through" }}>Fastest Network</p>
            <p style={{ color: "#afafaf", textDecoration: "line-through" }}>Purchase This Plan Now</p>
          </article>
          <button className={style.btn}>Purchase This Plan Now</button>
          <img className={style.img1} src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/pro-table-bottom.png' alt="Pro Table Bottom"/>
        </div>
        <div className={style.smallDiv}>
          <h1>$66</h1>
          <h2>Premium Plan App</h2>
          <img style={{ marginTop: 20 }} src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/pricing-table-01.png' alt="Premium Plan"/>
          <article>
            <p>Lorem Ipsum Dolores</p>
            <p>150 TB of Storage</p>
            <p>Life-time Support</p>
            <p>Premium Add-Ons</p>
            <p>Fastest Network</p>
            <p>Purchase This Plan Now</p>
          </article>
          <button className={style.btn}>Purchase This Plan Now</button>
          <img className={style.img1} src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/regular-table-bottom.png' alt="Regular Table Bottom"/>
        </div>
      </div>
    </>
  );
};

export default Pricing;
