import React, { Component } from 'react';
import Brand from "../staticimag/brand.png"
import Headerimag from './headerimag';
class header extends Component {
  render() {
    return (
    <>
    <nav className="navbar fixed-top row navbar-expand-lg navbar-light bg-light">
        <a className="pl-4 ml-4 navbar-brand" href="/"><img src={Brand} alt="Brand" className='w-50' /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className='d-flex '>
                <ul className="navbar-nav justify-content-end col-auto p-2  ml-5 mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" >About Us <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Careers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Help</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Contact Us</a>
                    </li>
                </ul>
                <Headerimag/>
            </div>
        </div>
    </nav>
    </>
    )
  }
}

export default header