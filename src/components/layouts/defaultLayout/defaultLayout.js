import React from 'react';
import './defaultLayout.scss';
import Holder from '../../../hoc/holder';
import Header from '../../header/header';
import Footer from '../../footer/footer';


export default (props) => (
	<Holder>
		<Header headerData={props.headerData} />
		{props.children}
		<Footer footerData={props.footerData} />
	</Holder>
)


