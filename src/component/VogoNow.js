import React, { Component, useState } from 'react'
import scooter from '../staticimag/scoter.png'
import scooter2 from '../staticimag/vogo_now.png'
import './mystyle.css'

const VogoNow = (props)  => {


    const [selctedtab, SetSelectedTab] = useState(1);

    console.log(selctedtab, "selctedtabselctedtab");

    return <>
        <div className='container'>
            <div className='mt vogo-background'>
                <ul className="nav nav-tabs mb-3" id="myTab0" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                        className="nav-link  vogo-background"
                        id="home-tab0"
                        data-mdb-toggle="tab"
                        data-mdb-target="#home0"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                        onClick={() => SetSelectedTab(1)}
                        >
                        Vogo Now
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                        className="nav-link "
                        id="profile-tab0"
                        data-mdb-toggle="tab"
                        data-mdb-target="#profile0"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                        onClick={() => SetSelectedTab(2)}
                        >
                        Vogo Keep
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent0">
                {selctedtab == 1 &&   <div className="tab-pane fade show active"
                        id="home0"
                        role="tabpanel"
                        aria-labelledby="home-tab0"
                    >
                        <div className='d-flex ml-4'>   
                        <div className='justify-content-start align-iten-start'>
                            <h3 className='text-left'>Hourly Model</h3>
                            <p className='text-left'>
                            Pay as you GO. Ideal for short trips: work/college commute and errand   runs.
                            </p>
                            <div className='d-flex'>
                            <button type="button" class="btn btn-warning heading-img-button">Downlod Our App</button>
                            </div>
                        </div>
                            <img src={scooter} className="w-25 ml-auto" alt="scooter-img" />
                        </div>
                    </div>} 
                </div>
                <div className="tab-content" id="myTabContent0">
                {selctedtab == 2 &&   <div className="tab-pane fade show active"
                        id="home0"
                        role="tabpanel"
                        aria-labelledby="home-tab0"
                    >
                        <div className='d-flex ml-4'>   
                        <div className='justify-content-start align-iten-start'>
                            <h3 className='text-left'>Subscription Model</h3>
                            <p className='text-left'>
                            
        Book for any period between 3 hours to 360 days. A hassle-free  personal ride for all your needs

                            </p>
                            <div className='d-flex'>
                            <button type="button" class="btn btn-warning heading-img-button">Book Now</button>
                            </div>
                        </div>
                            <img src={scooter2} className="w-25 ml-auto" alt="scooter-img" />
                        </div>
                    </div>} 
                </div>
            </div>
        </div>
    </>
}

export default VogoNow