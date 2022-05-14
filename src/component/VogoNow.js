import React, { Component } from 'react'
import scooter from '../staticimag/scoter.png'
import scooter2 from '../staticimag/vogo_now.png'
import './mystyle.css'

class vogoNow extends Component {
  render() {
    return (
    <>
    <div className='m-0 vogo-background'>
        <ul className="nav nav-tabs mb-3" id="myTab0" role="tablist">
            <li className="nav-item" role="presentation">
                <button
                className="nav-link active vogo-background"
                id="home-tab0"
                data-mdb-toggle="tab"
                data-mdb-target="#home0"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                >
                Vogo Now
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button
                className="nav-link"
                id="profile-tab0"
                data-mdb-toggle="tab"
                data-mdb-target="#profile0"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                >
                Vogo Keep
                </button>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent0">
            <div className="tab-pane fade show active"
                id="home0"
                role="tabpanel"
                aria-labelledby="home-tab0"
            >
                <div className='d-flex ml-4'>   
                <div className='justify-content-start align-iten-start'>
                    <h3 className='text-left'>Hourly Model</h3>
                    <p className='text-left'>
                    Pay as you GO. Ideal for short trips: work/college commute and errand runs.
                    </p>
                    <div className='d-flex'>
                    <button type="button" class="btn btn-warning heading-img-button">Downlod Our App</button>
                    </div>
                </div>
                    <img src={scooter} className="w-25 ml-auto" alt="scooter-img" />
                </div>
            </div>
            <div className="tab-pane fade" id="profile0" role="tabpanel" aria-labelledby="profile-tab0">
                Tab 2 content
                <div className='d-flex ml-4'>   
                <div className='justify-content-start align-iten-start'>
                    <h3 className='text-left'>Hourly Model</h3>
                    <p className='text-left'>
                    Pay as you GO. Ideal for short trips: work/college commute and errand runs.
                    </p>
                    <div className='d-flex'>
                    <button type="button" class="btn btn-warning heading-img-button">Book Now</button>
                    </div>
                </div>
                    <img src={scooter2} className="w-25 ml-auto" alt="scooter-img" />
                </div>
            </div>
        </div>
    </div>
    </>
    )
  }
}

export default vogoNow