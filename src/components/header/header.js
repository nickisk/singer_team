import React from 'react';
import './header.scss';
import { Link } from 'gatsby'

export default ({ headerData }) => (
	<header>
		<div className="container">
			<Link className="navbar-brand" to={headerData.logo.url}>{headerData.logo.title}</Link>
			<div className="nav-group">
				<ul>
					{headerData.leftNavigation.map((nav, key) => <li key={key}><Link to={nav.url}>{nav.title}</Link></li>)}
				</ul>
				<ul>
					{headerData.rightNavigation.map((nav, key) => <li key={key}><Link to={nav.url}>{nav.title}</Link></li>)}
				</ul>
			</div>
		</div>
	</header>

)

