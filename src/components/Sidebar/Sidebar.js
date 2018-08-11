import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
	renderPageLink(page) {
		return (
			<li className="">
				<Link to={page.url}>
					<div className="align-self-center">
						<img src={page.image} className="normal-img" />
						<img src={page.image_hover} className="hover-img" />
						{page.name}
					</div>
				</Link>
			</li>
		);
	}

    render() {
   	  const pages = [{
   	  	name: 'Today',
   	  	url: '/',
   	  	image: '/images/Dashboard/Side Tabs/icon-today-green.png',
   	  	image_hover: '/images/Dashboard/Side Tabs/icon-today-white.png'
   	  }, {
   	  	name: 'Me & Home',
   	  	url: '/me-and-home',
   	  	image: '/images/Dashboard/Side Tabs/icon-mehome-green.png',
   	  	image_hover: '/images/Dashboard/Side Tabs/icon-mehome-white.png'
   	  }, {
		name: 'Friends & Family',
   	  	url: '/friends-and-family',
   	  	image: '/images/Dashboard/Side Tabs/icon-friends-family-green.png',
   	  	image_hover: '/images/Dashboard/Side Tabs/icon-friends-family-white.png'
   	  }, {
		name: 'Community',
   	  	url: '/community',
   	  	image: '/images/Dashboard/Side Tabs/icon-community-green.png',
   	  	image_hover: '/images/Dashboard/Side Tabs/icon-community-white.png'
   	  }];
      return (
         <div className="sidebar">
			<ul className="list-unstyled page-links">
				{ pages.map((page, i) => this.renderPageLink(page)) }
			</ul>
         </div>
      );
    }
}
export default Sidebar;
