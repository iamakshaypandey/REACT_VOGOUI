import React, { Component } from 'react'


class Ourgallary extends Component {
  render() {
    return (
      <div className='mt-5'>
          <div>
            <h6>OUR GALLERY</h6>
            <h2>Moments Captured By <br/>Our Star Riders</h2>
        </div>
        <div class="container">
       <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">	
			<div class="col">
				<div class="card card-block card-1"></div>
			</div>
			<div class="col">
				<div class="card card-block card-2"></div>
			</div>
			<div class="col">
				<div class="card card-block card-3"></div>
			</div>
			<div class="col">
				<div class="card card-block card-4"></div>
			</div>
			<div class="col">
				<div class="card card-block card-5"></div>
			</div>
			<div class="col">
				<div class="card card-block card-6"></div>
			</div>
        </div>
</div>
      </div>
    )
  }
}

export default Ourgallary