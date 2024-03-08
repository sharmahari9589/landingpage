import React from 'react'
import StickyHeader from '../components/stickyHeader'
import style from "../styles/sevices.module.css"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Services = () => {
  return (
  <>
  <div className={style.imgDiv}>
    <div className={style.contentdiv}>
    <h1>Amazing <p style={{display:"inline",color:"#4b8ef1"}}>Services & Features</p> For You</h1>
    </div>
    <div className={style.hr}>
  
    </div>
    <br/>
   <article>
   If you need the greatest collection of HTML templates for your business, please visit <p style={{display:"inline",color:"#0d6efd"}}>TooCSS</p> Blog. If you need to have a contact form PHP script, go to <p style={{display:"inline",color:"#0d6efd"}}>our contact page</p> for more information.
   </article>
   </div>
  
   <div className={style.mainDiv}>
<div style={{height:"220px"}}>
<img  src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/service-icon-01.png'/>
<h1>App Maintenance</h1>
<p>You are not allowed to redistribute this template ZIP file on any other website.</p>
<Link>Read More  &nbsp; <FaArrowRight/></Link>
</div>
<div>
<img src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/service-icon-02.png'/>
<h1>Rocket Speed of App</h1>
<p>You are allowed to use the Chain App Dev HTML template. Feel free to modify or edit this layout.</p>
<Link>Read More  &nbsp;<FaArrowRight/> </Link>
</div>
<div>
<img src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/service-icon-03.png'/>
<h1>Multi Workflow Idea</h1>
<p>If this template is beneficial for your work, please support us <p style={{display:"inline",color:"#0d6efd"}}>a little via PayPal</p>. Thank you.</p>
<Link>Read More &nbsp; <FaArrowRight  /> </Link>
</div>
<div >
<img src='https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/service-icon-04.png'/>
<h1>24/7 Help & Support</h1>
<p>Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.</p>
<Link>Read More  &nbsp; <FaArrowRight/></Link>
</div>
   </div>
   <div className={style.sideImg}>
    <img src={'https://templatemo.com/templates/templatemo_570_chain_app_dev/assets/images/services-left-dec.png'}/>
   </div>
  </>
  )
}

export default Services
