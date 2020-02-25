import React from 'react';
import Renderer from '../../renderer';

const founderSection = (props) => {
	return (
		<div className="founder-section">
			<div className="container">
				<div className="flex">
					<Renderer views={props.sectionDetail.contentType} />
				</div>
			</div>
		</div>
	)
}


export default founderSection


