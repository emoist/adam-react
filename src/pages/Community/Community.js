import React, { Component } from 'react';
import './Community.css';

class Community extends Component {
   render() {
      return (
         <div>
         	<div className="box bg-white p-5">
         		<div className="container-fluid">
         			<div className="row products">
         				<div className="col-lg-4 col-md-6 product">
         					<a className="d-block h-100 text-center">
	            				<img src="/images/Community/icon-doctor.png" />
	            				<h3 className="text-blue text-uppercase mt-2">DOCTOR APPOINTMENTS</h3>
		            		</a>
         				</div>
         				<div className="col-lg-4 col-md-6 product">
         					<a className="d-block h-100 text-center">
	            				<img src="/images/Community/icon-social.png" />
	            				<h3 className="text-blue text-uppercase mt-2">Social events</h3>
		            		</a>
         				</div>
         				<div className="col-lg-4 col-md-6 product">
         					<a className="d-block h-100 text-center">
	            				<img src="/images/Community/icon-weather.png" />
	            				<h3 className="text-blue text-uppercase mt-2">weather</h3>
		            		</a>
         				</div>
         				<div className="col-lg-4 col-md-6 product">
	         				<a className="d-block h-100 text-center">
	            				<img src="/images/Community/icon-news.png" />
	            				<h3 className="text-blue text-uppercase mt-2">news</h3>
		            		</a>
         				</div>
         				<div className="col-lg-4 col-md-6 product">
	         				<a className="d-block h-100 text-center">
	            				<img src="/images/Community/icon-transportation.png" />
	            				<h3 className="text-blue text-uppercase mt-2">transportation</h3>
		            		</a>
         				</div>
         			</div>
         		</div>
         	</div>
         </div>
      );
   }
}
export default Community;
