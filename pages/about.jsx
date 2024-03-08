import React, { useEffect, useState } from 'react'
import style from "../styles/about.module.css"
import StickyHeader from '../components/stickyHeader'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import "../App.css"

const About = () => {
  const [active,setActive] = useState('David Martino');



const handleChange = (e)=>{
 setActive(e)
 let d = document.getElementById('review');
let p = document.getElementById('user');
 d.classList.add('reviewDiv2')
p.classList.add("reviewDiv2")
 setTimeout(()=>{
  d.classList.remove('reviewDiv2')
p.classList.remove("reviewDiv2")

},500)
}

  return (
    <>
<div className={style.parentDiv}>
      <div className={style.contentDiv}>
        <h1 style={{margin:0}}>About What We Do & Who We Are</h1>
        <img src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/heading-line-dec.png'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
       <div className={style.container}>
       <div><Link>Maintance Problems</Link><p>Lorem Ipsum Text</p> </div>
        <div><Link>24/7 Support & Help</Link><p>Lorem Ipsum Text</p> </div>
        </div>
        <div className={style.container}>
        <div><Link>Fixing Issues About</Link><p>Lorem Ipsum Text</p> </div>
        <div><Link>Co. Development</Link><p>Lorem Ipsum Text</p> </div>
       </div>
        <p style={{marginTop:-10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor idunte ut labore et dolore adipiscing magna.</p>
        <button>Start 14-Day free Trail</button>
        <p style={{margin:5}}>*No Credit Card Required</p>
      </div>
      <div className={style.imgDiv}>
        <img src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/about-right-dec.png' style={{width:550}}/>
      </div>
    </div>

    <div className={style.aboutDiv}>
    <div className={style.aboutContentdiv}>
    <h1>Check What <p style={{display:"inline",color:"#4b8ef1"}}>The Clients Say</p> About Our App Dev</h1>
    </div>
    <div className={style.hr}>
  
    </div>
    <br/>
   <article>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna. 
   </article>
   </div>
<div className={style.ratingDiv}>
  <div  className={style.starDiv}>

{active=='David Martino'?  <div onClick={()=>setActive('David Martino')}>
      <div>
      <h2 style={{color:'#4b8ef1'}}>David Martino Co</h2>
      <p>30 November 2021</p>
      </div>
      <p>Financial Apps</p>
      <article style={{color:'#4b8ef1'}} className={style.svg}>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        4.8
      </article>
    </div>:  <div onClick={()=>handleChange('David Martino')}>
      <div>
      <h2>David Martino Co</h2>
      <p>30 November 2021</p>
      </div>
      <p>Financial Apps</p>
      <article className={style.svg}>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        4.8
      </article>
    </div>}

  
    {active=='Jake Harris Nyo'? <div onClick={()=>setActive('Jake Harris Nyo')}>
      <div>
      <h2  style={{color:'#4b8ef1'}}>Jake Harris Nyo</h2>
      <p>29 November 2021</p>
      </div>
      <p>Digital Business</p>
      <article  style={{color:'#4b8ef1'}} className={style.svg}>
      <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        4.5
      </article>
    </div>: <div onClick={()=>handleChange('Jake Harris Nyo')}>
      <div>
      <h2 >Jake Harris Nyo</h2>
      <p>29 November 2021</p>
      </div>
      <p>Digital Business</p>
      <article className={style.svg}>
      <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        4.5
      </article>
    </div>}
   
    {active=='May Catherina'?<div onClick={()=>setActive('May Catherina')}>
      <div>
      <h2 style={{color:'#4b8ef1'}}>May Catherina</h2>
      <p>27 November 2021</p>
      </div>
      <p>Business & Economics</p>
      <article style={{color:'#4b8ef1'}} className={style.svg}>
      <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        4.7
      </article>
    </div>:<div onClick={()=>{handleChange('May Catherina')}}>
      <div>
      <h2>May Catherina</h2>
      <p>27 November 2021</p>
      </div>
      <p>Business & Economics</p>
      <article className={style.svg}>
      <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        4.7
      </article>
    </div>}
    
    {active=='Random User'? <div onClick={()=>setActive('Random User')}>
      <div>
      <h2 style={{color:'#4b8ef1'}}>Random User</h2>
      <p>24 November 2021</p>
      </div>
      <p>New App Ecosystem</p>
      <article style={{color:'#4b8ef1'}} className={style.svg}>
      <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        3.9
      </article>
    </div>: <div onClick={()=>handleChange('Random User')}>
      <div>
      <h2>Random User</h2>
      <p>24 November 2021</p>
      </div>
      <p>New App Ecosystem</p>
      <article className={style.svg}>
      <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        3.9
      </article>
    </div>}
   

{active=='Mark Amber Do'?<div onClick={()=>setActive('Mark Amber Do')}>
      <div>
      <h2 style={{color:'#4b8ef1'}}>Mark Amber Do</h2>
      <p>21 November 2021</p>
      </div>
      <p>Web Development</p>
      <article style={{color:'#4b8ef1'}} className={style.svg}>
      <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        4.3
      </article>
    </div>:<div onClick={()=>handleChange('Mark Amber Do')}>
      <div>
      <h2>Mark Amber Do</h2>
      <p>21 November 2021</p>
      </div>
      <p>Web Development</p>
      <article className={style.svg}>
      <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        4.3
      </article>
    </div>}

    
  </div>
  <div id='review' className={style.reviewDiv}>
    <img src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/quote.png'/>
    {active=='David Martino' ? 
  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur adipiscing elit massive big blasta.”</p> :
active=='Jake Harris Nyo' ?
  <p>“CTO, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur adipiscing elit massive big blasta.”</p> :
active=='May Catherina' ?
  <p>“May, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur adipiscing elit massive big blasta.”</p> :
active=='Random User' ?
  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur adipiscing elit massive big blasta.”</p> :
active=='Mark Amber Do' ?
  <p>“Mark, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur adipiscing elit massive big blasta.”</p> :
  ""}
 
  </div>
</div>
<div id='user' className={style.userInfo}>
    <img src={'https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/client-image.jpg'} />
    <div>
    {active == 'David Martino' ?
    <>
    <h2>David Martino</h2><p>CEO of David Company</p> 
    </>:
    active == 'Jake Harris Nyo' ?
    <>
    <h2>Jake H. Nyo</h2><p>CTO of Digital Company</p> 
    </> :
    active == 'May Catherina' ?
    <>
    <h2>May C.</h2><p>Founder of Catherina Co.</p> 
    </> :
    active == 'Random User' ?
    <>
    <h2>Random Staff</h2><p>Manager, Digital Company</p> 
    </> :
    active == 'Mark Amber Do' ?
    <>
    <h2>Mark Am</h2><p>CTO, Amber Do Company</p> 
    </>:
    ""}

    </div>
  </div>
    </>
  )
}

export default About
