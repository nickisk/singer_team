import React from 'react';
import Renderer from '../../renderer';

const teamSection = (props) => {
	return (
		<div className="team-section">
			<div className="container sm">
				<div className="about-team-box">
					<Renderer views={props.sectionDetail.sectionGroup} />
				</div>

			</div>
		</div>
	)
}


export default teamSection

