import React, { Component } from 'react'
import './mystyle.css'
import Insideheroimgpart from './insideheroimgpart-2'


class insideheroimg extends Component {
  render() {
    return (
     <>
     <div className='position-relative'>
         <div className='position-absolute d-flex'>
             <div className='ml-5'>
                <h2 className='font-color text-left'>Your Freedom To Go!</h2>
                <p className='text-left p-heading-img mt-2'>Is just a Vogo ride away.<br/>
                Take control of your journey today</p>
                <div className='d-flex mt-2'>
                <button type="button" className="btn btn-warning heading-img-button pt-3 pb-3 pl-4 pr-4">Get Started</button>
                </div>
             </div>
             <Insideheroimgpart/>
         </div>
    </div>
     </>
    )
  }
}

export default insideheroimg