import React from 'react'
import videoimg from '../staticimag/videoimg.png'
import purches from '../staticimag/icon-img/icons8-image-64.png'

const NewAbout = () => {
  return (
    <>
    <div className='container mt'>
        <div className='d-flex flex-wrap'>
          <div className='col-6 hidden'>
            <img className='w-100 h-100 ' src={videoimg} alt=" video" />
          </div>
          <div className=' col'>
            <span className=' text-left d-flex'>ABUOT US</span>
            <div className='mt-4'>
              <h1 className='text-left'>VOGO: Vehicle On The Go</h1>
              <p className='text-left mt-4 font-weight-light Font-W '>It’s high time you stopped being just ‘one in a pillion’. Own your 
            journeys with <br/>  our seamless and affordable scooter rental plans.Next time you decide to step out, know that there’s a friend who
              is willing to go the extra mile for you</p>
            </div>
            <div className='mt-4'>
              <b>Deprecated</b>:  _register_controls is <strong>deprecated</strong> since version 3.1.0! Use Elementor\Controls_Stack::register_controls()
              instead. in <b>/home3/vogotech/public_html/wp-includes/functions.php</b>
              on line <b>4777</b>
            </div>
            <div className='d-flex mt-5 '>
              <div className='d-flex'>
              <div>

              <div style={{width:"50px" , height:"50px" ,background:"blue" }} className=' rounded-circle p-1'>
            <img className='h-100 w-100 rounded-circle' src={purches} alt="icon" />
              </div>

              </div>

              <p>Pocket-friendly rental plans that will take you a long way, literally</p>
              </div>
              <div className='d-flex'>
              <div>

              <div style={{width:"50px" , height:"50px" ,background:"blue" }} className=' rounded-circle p-1'>
            <img className='h-100 w-100 rounded-circle' src={purches} alt="icon" />
              </div>

              </div>

              <p>Pocket-friendly rental plans that will take you a long way, literally</p>
              </div>
            </div>
            <div className='d-flex mt-5 '>
              <div className='d-flex'>
              <div>

                <div style={{width:"50px" , height:"50px" ,background:"blue" }} className=' rounded-circle p-1'>
                  <img className='h-100 w-100 rounded-circle' src={purches} alt="icon" />
                </div>

              </div>

              <p>Pocket-friendly rental plans that will take you a long way, literally</p>
              </div>
              <div className='d-flex'>
              <div>
                <div style={{width:"50px" , height:"50px" ,background:"blue" }} className=' rounded-circle p-1'>
                  <img className='h-100 w-100 rounded-circle' src={purches} alt="icon" />
                </div>
              </div>
                <p>Pocket-friendly rental plans that will take you a long way, literally</p>
              </div>
            </div>
           
          </div>
        </div>
    </div>
    </>
  )
}

export default NewAbout