import React, { Component } from 'react'
import './mystyle.css'
import whatsvogo1 from '../staticimag/whatsvogo1.png'
import whatsvogo2 from '../staticimag/whatsvogo2.png'
import whatsvogo3 from '../staticimag/whatsvogo3.png'


class whatsnewVoGo extends Component {
  render() {
    return (
        <>
         <div className='mt container'>
             <div className='d-flex justify-content-between mb-3'>
                 <div className="d-flex flex-column ml-4">
                     <h6 className='text-danger'>WHAT'S  NEW  IN  VOGO </h6>
                     <h4 className='text-left' > Keep Up with Us</h4>
                 </div>
                 <div className='mr-2'>
                 <a  className="btn btn-warning font-weight-bold pl-4 pr-4 pt-3 pb-3 m-4">View All</a>
                 </div>
             </div>
             {/* **** */}
             <div className='card-deck'>         
                <div className="card" >
                    <img className="card-img-top img-w-h" src={whatsvogo1} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title text-left">[TechSparks 2021] With new-age customers,India’s D2C sector is...</h5>
                        <p className="card-text text-left">Your Story</p>
                        <p  className="text-warning text-left font-weight-bold">Read More</p>
                    </div>
                </div>     
                <div className="card" >
                    <img className="card-img-top img-w-h" src={whatsvogo2} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title text-left">Riding the technology: The future of urban mobility is now</h5>
                        <p className="card-text text-left">Your Story</p>
                        <p  className="text-warning text-left font-weight-bold">Read More</p>
                    </div>
                </div>
                <div className="card" >
                    <img className="card-img-top img-w-h" src={whatsvogo3} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title text-left">The future of EV recharge: Abhimanyu Goyal</h5>
                        <p className="card-text text-left">MSN</p>
                        <p  className="text-warning text-left font-weight-bold">Read More</p>
                    </div>
                </div>
             </div>
         </div>
        </>
    )
  }
}

export default whatsnewVoGo