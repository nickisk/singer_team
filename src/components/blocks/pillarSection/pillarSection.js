import React from 'react';
import Renderer from '../../renderer';

const pillarSection = (props) => {
	return (
		<div className="pillars-box">
			{console.log(props)}
			<div className="container">
				<div className="flex space-between">
					<Renderer views={props.sectionDetail.contentBoxes} />
				</div>
			</div>
		</div>
	)
}


export default pillarSection

