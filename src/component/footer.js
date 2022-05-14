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
          
  
        <div style={{width:'80%',height:'400px'}} className='position-relative p-4  m-auto'>  
            <div className='d-flex align-item-center justify-content-between  pt-5'>
                <div className=''>
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
                <div className='pl-5'>
                <ul class="footer-menu-list line-H">
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
                <div className=''>
                    <h5 className='text-white'>Download the app</h5>
                    <img className='mt-5 w-50'  src={appstroe} alt="" />
                </div>
                <div className='mt-5'>
                    <img className='mt-4 w-100' src={googleimg} alt="" />
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