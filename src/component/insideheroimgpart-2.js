import React, { Component } from 'react'
import Mobile from '../staticimag/home_mobile.png'

class insideheroimgpart extends Component {
  render() {
    return (
      <>
        <div className='d-inline-flex'>
            <div className='justify-content-end'>
                <img className='w-50' src={Mobile} alt="mobole-img" />
            </div>
        </div>
      </>
    )
  }
}

export default insideheroimgpart