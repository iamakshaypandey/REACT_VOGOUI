import React, { Component } from 'react'
import activa from '../staticimag/activa-scooter.png'
import Evscooter from '../staticimag/ev-scooter.png'
import zestscooter from '../staticimag/zest-scooter.png'

class redeyscooter extends Component {
  render() {
    return (
      <>
      <div className='container mt-5'>
                <h5 className=''>OUR FLEET</h5>
                <h2 className=''>Our Scooters Are Ready To GO</h2>
        <div className="card-deck">
        <div className="card">
        <img src={activa} alt="imges" />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
            <img src={Evscooter} alt="imges" />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
            <img src={zestscooter} alt="imges" />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
      </div>
      </>
    )
  }
}

export default redeyscooter