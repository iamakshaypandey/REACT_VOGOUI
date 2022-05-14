import React, { Component } from 'react'
import './mystyle.css'
import world from '../staticimag/world.png'
import dowonlodapp from '../staticimag/dowload-appMobile.png'
import appstroe from '../staticimag/app-store.png'
import googleimg from '../staticimag/googleplay.png'


class locatVogo extends Component {
  render() {
    return (
      <>
      <section className='container-fluid  mt position-relative'>
          <div className='background d-flex'>
              <img src={world} className='w-50' alt="worldimg" />
              <div className=''>
                <h6 className='text-warning text-left'>DOWNLOAD APP</h6>
                <h2 className='text-white text-left'>Locate The Nearest Vogo Zone Through our App</h2>
                <ul>
                  <li className='text-white text-left' >choose the city</li>
                  <li className='text-white text-left'>choose the duration</li>
                  <li className='text-white text-left'>choose the package</li>
                  <li className='text-white text-left'>select the pickup date and time & get going! </li>
                </ul>
                <div className='d-flex'>
                  <img style={{width:'30%',height:'30%',}} className='m-2' src={googleimg} alt="googleimg" />
                  <img style={{width:'30%',height:'30%',}} className='m-2' src={appstroe} alt="appstore" />
                </div>
              </div>
          </div>
          <div className='position-absolute-2 d-flex ml-4'>
              <img src={dowonlodapp} className="img-w ml-4  " alt="" />
          </div>
      </section>
      </>
    )
  }
}

export default locatVogo