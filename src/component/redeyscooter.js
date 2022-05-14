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
        <div class="card-deck">
        <div class="card">
        <img src={activa} alt="" />
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="card">
            <img src={Evscooter} alt="" />
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="card">
            <img src={zestscooter} alt="" />
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
      </div>
      </>
    )
  }
}

export default redeyscooter