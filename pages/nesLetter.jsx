import React from 'react'
import StickyHeader from '../components/stickyHeader'
import style from '../styles/newsLetter.module.css'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
    <>
  <StickyHeader/>
  <div className={style.maindiv}>
    <div className={style.firstDiv}>
  <div className={style.topContent}>
<h1 style={{margin:0}}>Join Our Mailing List To Receive The News & Latest Trends</h1>
<input type='email'  placeholder='Email Address...'/>
<button className={style.btn}>Subscribe Now <FaChevronRight /></button>
  </div>
  </div>
  </div>
  <div className={style.secondDiv}>
<div className={style.linkDiv}>
<h2>Contact Us</h2>
<p>Rio de Janeiro - RJ, 22795-008, Brazil</p>
<p>010-020-0340</p>
<p>info@company.co</p>
</div>
<div className={style.linkDiv}>
  <h2>About Us</h2>
  <div className={style.aboutDiv}>
  <div>   <Link>Home</Link>
    <Link>Services</Link>
    <Link>About</Link>
    <Link>Testimonials</Link>
    <Link>Pricing</Link></div>
      <div>
      <Link>About</Link>
<Link>Testimonials</Link>
<Link>Pricing</Link>
      </div>
  </div>
 

</div>
<div className={style.linkDiv}>
  <h2>About Us</h2>
  <div className={style.aboutDiv}>
  <div>   <Link>Free Apps</Link>
    <Link>App Engine</Link>
    <Link>Programming</Link>
    <Link>Development</Link>
    <Link>App news</Link></div>
      <div>
      <Link>App dev Team</Link>
<Link>Digital Web</Link>
<Link>NormalApps</Link>
      </div>
  </div>
 

</div>
<div className={style.linkDiv}>
<h2>About Our company</h2>
<Link>
<img src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/white-logo.png'/>
</Link>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

</div>
  </div>
  <div className={style.lastDiv}>
<p>Copyright © 2022 Chain App Dev Company. All Rights Reserved.</p>
<p>Design: TemplateMo</p>
  </div>
  </>
  )
}

export default Newsletter
