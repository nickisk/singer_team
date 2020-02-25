import React from 'react';
import ImageTextBlock from '../imageTextBlock/imageTextBlock';
import Renderer from '../../renderer';

const bannerSection = (props) => {
	return (
		<div className={props.sectionDetail.class ? "banner-section " + props.sectionDetail.class : 'banner-section'}>
			{console.log(props)}
			<div className="flex align-center">
				<Renderer views={props.sectionDetail.contentBoxes} />
				{console.log(props.sectionDetail.contentBoxes)}
			</div>
		</div>
	)
}


export default bannerSection


