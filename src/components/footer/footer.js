import React from 'react';

export default ({ footerData }) => (
	<footer>
		<div className="container">
			<div className="flex">
				<div className="colmn-box">
					<a href={footerData.footerLogo.url} className="footer-brand">{footerData.footerLogo.title}</a>
				</div>
				<div className="colmn-box info">
					<ul>
						{footerData.footerNavigation.map((item, key) => <li key={key}><a href={item.url}>{item.title}</a></li>)}
					</ul>
				</div>
			</div>
			<div className="flex">
				<div className="colmn-box legal-box">
					<p>{footerData.copyright}</p>
				</div>
				<div className="colmn-box">
					<ul className="privacy-nav">
						{footerData.seconderyNavigation.map((item, key) => <li key={key}><a href={item.url}>{item.title}</a></li>)}
					</ul>
				</div>
			</div>
		</div>
	</footer>

)

