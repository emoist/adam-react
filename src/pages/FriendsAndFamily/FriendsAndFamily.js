import React, { Component } from 'react';
import './FriendsAndFamily.css';

class FriendsAndFamily extends Component {
   render() {
      return (
         <div>
         	<div className="box bg-white p-5">
         		<div className="container-fluid">
         			<div className="row products">
         				<div className="col-lg-4 col-md-6 product">
         					<a className="d-block h-100 text-center">
	            				<img src="/images/Friends Family/icon-email.png" />
	            				<h3 className="text-blue text-uppercase mt-2">email</h3>
		            		</a>
         				</div>
         				<div className="col-lg-4 col-md-6 product">
         					<a className="d-block h-100 text-center">
	            				<img src="/images/Friends Family/icon-call.png" />
	            				<h3 className="text-blue text-uppercase mt-2">call</h3>
		            		</a>
         				</div>
         				<div className="col-lg-4 col-md-6 product">
         					<a className="d-block h-100 text-center">
	            				<img src="/images/Friends Family/icon-videocall.png" />
	            				<h3 className="text-blue text-uppercase mt-2">video call</h3>
		            		</a>
         				</div>
         				<div className="col-lg-4 col-md-6 product">
	         				<a className="d-block h-100 text-center">
	            				<img src="/images/Friends Family/icon-text.png" />
	            				<h3 className="text-blue text-uppercase mt-2">text</h3>
		            		</a>
         				</div>
         				<div className="col-lg-4 col-md-6 product">
	         				<a className="d-block h-100 text-center">
	            				<img src="/images/Friends Family/icon-social.png" />
	            				<h3 className="text-blue text-uppercase mt-2">social/facebook</h3>
		            		</a>
         				</div>
         			</div>
         		</div>
         	</div>
         </div>
      );
   }
}
export default FriendsAndFamily;
