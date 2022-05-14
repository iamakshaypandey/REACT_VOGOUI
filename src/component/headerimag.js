import React, { Component } from 'react'
import appstroe from '../staticimag/app-store.png'
import googleimg from '../staticimag/googleplay.png'


class headerimag extends Component {
  render() {
    return (
      <>
      {/* <div className='d-flex flex-row'>
    </div> */}
      <div className='navbar-nav mt-lg-0 d-flex'>
          {/* <li className='align-itme-start'> */}
            <a className="justify-content-end  " href="#"><img src={googleimg} alt="googleplay" className='w ml-4' />
          {/* </li> */}
          {/* <li className='align-itme-center'> */}
            <img src={appstroe} alt="appstore" className='w ml-4' /></a>
          {/* </li> */}
      </div>
      </>
    )
  }
}

export default headerimag