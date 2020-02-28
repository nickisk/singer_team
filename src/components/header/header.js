import React, { Component } from 'react';
import './header.scss';
import { Link } from 'gatsby'

class Header extends Component {
	state = {
		showNav: false
	}
	navHendler = () => {
		this.setState((prevstate) => ({
			showNav: !prevstate.showNav
		}))
	}
	render() {
		return (
			<header>
				<div className="container">
					<Link className="navbar-brand" to={this.props.headerData.logo.url}>{this.props.headerData.logo.title}</Link>
					<button onClick={this.navHendler} type="button" className="menu-toggle">
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</button>
					<div className={this.state.showNav ? 'nav-group active' : 'nav-group'}>
						<ul>
							{this.props.headerData.leftNavigation.map((nav, key) => <li key={key}><Link to={nav.url}>{nav.title}</Link></li>)}
						</ul>
						<ul>
							{this.props.headerData.rightNavigation.map((nav, key) => <li key={key}><Link to={nav.url}>{nav.title}</Link></li>)}
						</ul>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;

