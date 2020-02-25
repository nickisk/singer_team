import React from 'react';
import './header.scss';

export default ({ headerData }) => (
	<header>
		<div className="container">
			<a className="navbar-brand" href={headerData.logo.url}>{headerData.logo.title}</a>
			<div className="nav-group">
				<ul>
					{headerData.leftNavigation.map((nav, key) => <li key={key}><a href={nav.url}>{nav.title}</a></li>)}
				</ul>
				<ul>
					{headerData.rightNavigation.map((nav, key) => <li key={key}><a href={nav.url}>{nav.title}</a></li>)}
				</ul>
			</div>
		</div>
	</header>

)

