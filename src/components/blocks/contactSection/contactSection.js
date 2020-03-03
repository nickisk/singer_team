import React from 'react';
import Renderer from '../../renderer';

const contactSection = (props) => {
	return (
		<div className="contact-page">
			{console.log(props)}
			<h2>{props.sectionDetail.title}</h2>
			<div className="section-wrapper">
				<div className="section-heading">
					<h1>{props.sectionDetail.subTitle}</h1>
				</div>
				<div className="map-box">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48334.68086147486!2d-74.00504480165094!3d40.78582665680744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259afcda5009d%3A0x842a3dae11cd7e43!2sNew%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sin!4v1582917767592!5m2!1sen!2sin" allowfullscreen=""></iframe>
				</div>
				<Renderer views={props.sectionDetail.detailBoxes} />


			</div>
		</div>
	)
}

export default contactSection;
