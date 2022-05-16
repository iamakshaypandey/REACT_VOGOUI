import React, { Component } from 'react'
import appstroe from '../staticimag/app-store.png'
import googleimg from '../staticimag/googleplay.png'


class headerimag extends Component {
  render() {
    return (
      <>
      <div className='navbar-nav mt-lg-0 d-flex'>
            <div className="justify-content-end  " >
              <img src={googleimg} alt="googleplay" className='w ml-4' />
              <img src={appstroe} alt="appstore" className='w ml-4' />
            </div>
      </div>
      </>
    )
  }
}

export default headerimag