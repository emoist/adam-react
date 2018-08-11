import React, { Component } from 'react';
import './MeAndHome.css';

class MeAndHome extends Component {
   render() {
      return (
         <div>
            <div className="box bg-white p-5">
         		<div className="container-fluid">
         			<div className="row products">
         				<div className="col-lg-4 col-md-6 product">
         					<a className="d-block h-100 text-center">
	            				<img src="/images/Me Home/icon-food.png" />
	            				<h3 className="text-blue text-uppercase mt-2">food</h3>
		            		</a>
         				</div>
         				<div className="col-lg-4 col-md-6 product">
         					<a className="d-block h-100 text-center">
	            				<img src="/images/Me Home/icon-medications.png" />
	            				<h3 className="text-blue text-uppercase mt-2">medications</h3>
		            		</a>
         				</div>
         				<div className="col-lg-4 col-md-6 product">
         					<a className="d-block h-100 text-center">
	            				<img src="/images/Me Home/icon-games.png" />
	            				<h3 className="text-blue text-uppercase mt-2">games</h3>
		            		</a>
         				</div>
         				<div className="col-lg-4 col-md-6 product">
	         				<a className="d-block h-100 text-center">
	            				<img src="/images/Me Home/icon-exercise.png" />
	            				<h3 className="text-blue text-uppercase mt-2">exercise</h3>
		            		</a>
         				</div>
         				<div className="col-lg-4 col-md-6 product">
	         				<a className="d-block h-100 text-center">
	            				<img src="/images/Me Home/icon-personal-care.png" />
	            				<h3 className="text-blue text-uppercase mt-2">personal care</h3>
		            		</a>
         				</div>
         				<div className="col-lg-4 col-md-6 product">
	         				<a className="d-block h-100 text-center">
	            				<img src="/images/Me Home/icon-home-tasks.png" />
	            				<h3 className="text-blue text-uppercase mt-2">home tasks</h3>
		            		</a>
         				</div>
         			</div>
         			<div className="row mt-3">
         				<div className="col-12">
         					<a className="d-block h-100 text-center">
	            				<img src="/images/Me Home/icon-shopping.png" />
	            				<h3 className="text-blue text-uppercase mt-2">shopping</h3>
		            		</a>
         				</div>
         			</div>
         		</div>
         	</div>
         </div>
      );
   }
}
export default MeAndHome;
