import React, { Component } from 'react'
import appstroe from '../staticimag/app-store.png'
import googleimg from '../staticimag/googleplay.png'


class headerimag extends Component {
  render() {
    return (
      <>
      <div className='navbar-nav mt-lg-0 d-flex'>
            <a className="justify-content-end  " href="#">
              <img src={googleimg} alt="googleplay" className='w ml-4' />
              <img src={appstroe} alt="appstore" className='w ml-4' />
            </a>
      </div>
      </>
    )
  }
}

export default headerimag