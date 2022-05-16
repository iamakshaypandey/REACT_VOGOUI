import React, { Component } from 'react'
import './mystyle.css'
import brand from '../staticimag/newfoterlogo.png'
import appstroe from '../staticimag/app-store.png'
import googleimg from '../staticimag/googleplay.png'
import FB from '../staticimag/icon-img/FB.png'
import Tweet from '../staticimag/icon-img/tweeter.png'
import insta from '../staticimag/icon-img/tweeter.png'
import linkdin from '../staticimag/icon-img/linkdin.png'

class footer2 extends Component {
  render() {
    return (
     <>
     <div className=''>
         <div style={{width:'100%',height:'auto'}} className='background'>
             <div style={{width:'90%'}} className='p-5 m-auto'>
                <div className='d-flex justify-content-between flex-wrap'>
                     <div className='m-2 pr-5'>
                        <div className='d-flex'>
                            <img style={{width:'8rem'}} src={brand} alt="imges" />
                        </div>
                        <div className=''>
                        <p style={{fontSize:'0.7rem'}} className='text-white mt-4 text-left'>Is just a Vogo ride away. Take control of your journey today</p>
                        <p style={{fontSize:'0.7rem'}} className='text-white text-left'>#483, 17th Cross, 27th Main Rd,<br/>
                            Sector 2, HSR Layout, Bengaluru, <br/>
                            Karnataka 560102
                        </p> 
                        </div>
                    
                     </div>

                     <div className=''>
                        <ul className="footer-menu-list">
                        <li style={{color:"white"}}>About Us
                        </li>
                        <li style={{color:"white"}}
                        >Careers
                        </li>
                        <li style={{color:"white"}}
                        >Help
                        </li>
                        <li style={{color:"white"}}
                        >Contact Us
                        </li >
                        <li style={{color:"white"}}
                        >Fee Policy
                        </li>
                        <li style={{color:"white"}}
                        >Privacy Policy
                        </li>
                        <li style={{color:"white"}}
                        >Member's Agreement
                        </li>
                        <li style={{color:"white"}}
                        >Terms and Conditions
                        </li>
                        </ul>
                     </div>
                    <div className='m-3'>
                        <h5 className='text-white text-left mb-4'>Download the app</h5>
                        <a className="justify-content-end  " >
                        <img src={appstroe} alt="googleplay" className='w mt-4' />
                        <img src={googleimg} alt="appstore" className='w ml-4 mt-4' />
                        </a>
                    </div>
                </div>
             </div>
         </div>
         
     </div>
     </>
    )
  }
}

export default footer2