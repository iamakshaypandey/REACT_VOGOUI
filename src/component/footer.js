import React, { Component } from 'react'
import brand from '../staticimag/newfoterlogo.png'
import appstroe from '../staticimag/app-store.png'
import googleimg from '../staticimag/googleplay.png'
import FB from '../staticimag/icon-img/FB.png'
import Tweet from '../staticimag/icon-img/tweeter.png'
import insta from '../staticimag/icon-img/tweeter.png'
import linkdin from '../staticimag/icon-img/linkdin.png'
 
class footer extends Component {
  render() {
    return (
      <>
        <div className='container-fluid background  '>
          
        <div style={{width:'100%',height:'auto'}} className='background'>
             <div style={{width:'90%'}} className='p-5 m-auto'>
                <div className='d-flex justify-content-between flex-wrap'>
                     <div className='m-2 pr-5'>
                        <div className='d-flex'>
                            <img style={{width:'8rem'}} src={brand} alt="" />
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
                        <li className='text-white text-left line-H'>About Us
                        </li>
                        <li className='text-white text-left line-H'
                        >Careers
                        </li>
                        <li className='text-white text-left line-H'
                        >Help
                        </li>
                        <li className='text-white text-left line-H'
                        >Contact Us
                        </li >
                        <li className='text-white text-left line-H'
                        >Fee Policy
                        </li>
                        <li className='text-white text-left line-H'
                        >Privacy Policy
                        </li>
                        <li className='text-white text-left line-H'
                        >Member's Agreement
                        </li>
                        <li className='text-white text-left line-H'
                        >Terms and Conditions
                        </li>
                        </ul>
                     </div>
                    <div className=''>
                        <h5 className='text-white text-left mb-4'>Download the app</h5>
                        <a className="justify-content-end  " href="#">
                        <img src={appstroe} alt="googleplay" className='w mt-4' />
                        <img src={googleimg} alt="appstore" className='w ml-4 mt-4' />
                        </a>
                    </div>
                </div>
             </div>
         </div>
            
            <div  style={{width:'80%'}}  className='border-top p-4  m-auto'>
                <div className='  d-flex justify-content-between'>
                    <p className='text-white font-weight-light'>Copyright 2022 © Vogo Automotive Pvt. Ltd. All Rights Reservered</p>
                    <div className=''>
                        <img className='m-1' style={{width:'10%'}} src={FB} alt="" />
                        <img className='m-1' style={{width:'10%'}} src={Tweet} alt="" />
                        <img className='m-1' style={{width:'10%'}} src={insta} alt="" />
                        <img className='m-1' style={{width:'10%'}} src={linkdin} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default footer