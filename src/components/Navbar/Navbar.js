import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-transparent p-4">
					<a className="navbar-brand m-0" href="#"><img src="/images/Dashboard/icon-cloud.png" width="80" /></a>
					<ul className="navbar-info mr-auto list-inline py-3 mb-0">
						<li className="nav-item list-inline-item active">
							<span>75&deg;F</span>
						</li>
						<li className="nav-item list-inline-item">
							<span>THURSDAY APRIL 25, 2018</span>
						</li>
						<li className="nav-item list-inline-item">
							<span>10:32 AM</span>
						</li>
					</ul>
					<ul className="navbar-nav">
						<li className="nav-item list-inline-item">
							<a className="nav-link font-weight-bold text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Alice&nbsp;
							<img src="/images/avatar.jpg" width="50" className="rounded-circle border" />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
export default Navbar;