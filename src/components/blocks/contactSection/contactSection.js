import React from 'react';
import Renderer from '../../renderer';
import GoogleApiWrapper from '../map/map';

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
					<GoogleApiWrapper latitude={props.sectionDetail.location.lat} longitude={props.sectionDetail.location.lon} />
				</div>
				<Renderer views={props.sectionDetail.detailBoxes} />


			</div>
		</div>
	)
}

export default contactSection;
