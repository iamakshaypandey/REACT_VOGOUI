import React, { Component } from 'react'
import whyVogo from '../staticimag/why_vogo-2-midil.png'

class midilimg extends Component {
  render() {
    return (
        <>
        <div className='mt-5 container  '>
            <div className='row'>
                <div className='background w-100 col-6'>
                    <div className='font-color'>
                        <h1 className='w-75 text-left m-5 mb-0'>Unlock Hassle-free Commute</h1>
                        <p className='Font-W text-left ml-5'>We are on a mission to equip every commuter with
                         <br/>the freedom to GO anywhere, anytime </p>
                    </div>
                    <div className='d-flex'>
                         <ul className='justify-content-center'>
                             <li className='text-warning m-4 nav-link text-left line-H'>5 Cities</li>
                             <li className='text-warning m-4 nav-link text-left line-H'>3.5 Million + Riders</li>
                             <li className='text-warning m-4 nav-link text-left line-H'>12 Million Rides Completed</li>
                             <li className='text-warning m-4 nav-link text-left line-H'>80 Million + KM Covered</li>
                         </ul>
                    </div>
                </div>
                <div className='col-6'>
                <img src={whyVogo} className="w-100" alt="whyvogo-img" />
                </div>
            </div>

        </div>
        </>
    )
  }
}

export default midilimg