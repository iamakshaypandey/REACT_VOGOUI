import React, { Component } from 'react'
// import awordimg from '../staticimag/awards-background.png'
import aword1 from '../staticimag/aword1.png'
import aword2 from '../staticimag/aword2.png'


class awaord extends Component {
  render() {
    return (
      <>
      <div className='container-fluid mt-5'>
        <div className='position-relative aword-img'>
            <div className='d-flex align-content-center justify-content-center '>
                  <h5 className='text-warning mt-5'>NEWS AND  UPDATES</h5>
            </div>
            <h2 className='text-white'>Featured Awards & Industry Recognition</h2>
            <div style={{width:'80%',height:'80%',margin:"auto"}} className=''>
                <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">	
                <div  class="col ">
                    <div class="card card-block">
                        <div className=''>
                          <img style={{width:'40%',height:'80%',margin:"auto"}} src={aword1} className='rounded mt-4' alt="" />
                        </div>
                        <div className='mt-4'>
                            <h4>Young Entrepreneur Award</h4>
                            <p className='h-100 w-100 rounded-circle m-auto '>September, 2020</p>
                        </div>
                    </div>
                </div>
                <div  class="col ">
                    <div class="card card-block">
                        <div className=''>
                          <img style={{width:'40%',height:'80%',margin:"auto"}} src={aword1} className='rounded mt-4' alt="" />
                        </div>
                        <div className='mt-4'>
                            <h4>40 Under 40 Club of Achievers</h4>
                            <p className='h-100 w-100 rounded-circle m-auto '>January, 2021</p>
                        </div>
                    </div>
                </div>
                <div  class="col ">
                    <div class="card card-block">
                        <div className=''>
                          <img style={{width:'40%',height:'80%',margin:"auto"}} src={aword2} className='rounded mt-4' alt="" />
                        </div>
                        <div className='mt-5'>
                            <h4>Mobility Start-up of the Year</h4>
                            <p className='h-100 w-100 rounded-circle m-auto '>Auguest, 2021</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
      </>
    )
  }
}

export default awaord