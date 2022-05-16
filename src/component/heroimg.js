import React, { Component } from 'react'
import './mystyle.css'
import Insideheroimg from './insideheroimg'
// import Insideheroimgpart from './insideheroimgpart-2'

class heroimg extends Component {
  render() {
    return (
    <>
    <div className=''>
      <div className='background-img'>
          <Insideheroimg/>
      </div>
    </div>
      </>
    )
  }
}

export default heroimg