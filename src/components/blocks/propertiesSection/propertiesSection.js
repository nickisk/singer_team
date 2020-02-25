import React from 'react';
import Renderer from '../../renderer';

const propertiesSection = (props) => {
	return (
		<div className="properties-section">
			{console.log(props.sectionDetail)}
			<div class="section-wrapper">
				<div class="heading-box">
					<h4 class="line-heading">{props.sectionDetail.subHeading}</h4>
					<h2>{props.sectionDetail.title}</h2>
				</div>
				<div class="listing-section">
					<Renderer views={props.sectionDetail.propertiesBoxes} />
				</div>
			</div>
		</div>
	)
}


export default propertiesSection


