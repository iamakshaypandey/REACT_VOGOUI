import React, { Component } from 'react'
import videoimg from '../staticimag/videoimg.png'
// import purches from '../staticimag/icon-img/purches.png'
import './mystyle.css'

class About extends Component {
  render() {
    return (
    <>
        <div className=' m-0'>
            <div className='d-flex '>
                <div className='d-flex flex-wrap'>
                        <img src={videoimg} className="w-50" alt="imges" />
                        <div className='text-img'>
                        </div>
                    <div className='ml-5'>
                        <h5 className='text-left text-secondary'>ABOUT US</h5>
                        <div className='mt-4'>
                            <h1 className='text-left'>VOGO: Vehicle On The Go</h1>
                            <p className='text-left mt-4 font-weight-light Font-W '>It’s high time you stopped being just ‘one in a pillion’. Own your 
                                journeys with <br/>
                                our seamless and affordable scooter rental plans.
                                Next time you decide to step out, know that there’s a friend who
                                is willing to go the extra mile for you</p>
                        </div>
                        <div className='d-flex'>
                            <div className='justify-content-between'>
                                <div className='mt-5 Font-W text-left'>
                                    <b>Deprecated</b>:  _register_controls is <strong>deprecated</strong> since version 3.1.0! Use Elementor\Controls_Stack::register_controls()
                                    instead. in <b>/home3/vogotech/public_html/wp-includes/functions.php</b>
                                    on line <b>4777</b><br/>
                                </div>
                            </div>
                                {/* <div className='d-flex flex-coloum'>
                                    <div className="justify-content-between m-4">
                                        <img src={purches} className="icon-img rounded-circle bg-dark" alt="icon-img" />
                                    </div>
                                    <h5 className='text-left m-4'>Affordable
                                    <p className='Font-W text-left'>Pocket-friendly rental plans that will take you a long way, literally</p>
                                    </h5>
                                </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
  }
}

export default About