import React from 'react';
import Renderer from '../../renderer';

const accordionSection = (props) => {
	return (
		<div className={props.sectionDetail.class ? "accordion-block " + props.sectionDetail.class : "accordion-block"}>
			{console.log(props)}
			<div className="container">
				<h4 className="line-heading">{props.sectionDetail.subHeading}</h4>
				<div class="accordion-section">
					{props.sectionDetail.contentBoxes.map((box, key) => (
						<div key={key} className="accordion-box">
							<div className="accordion-head">
								<div className="heading-box">
									<h3>{box.title}</h3>
								</div>
								{box.accordionHead ? <Renderer views={box.accordionHead} /> : null}
							</div>
							<div className="accordion-body">
								<div className="flex align-center">
									<Renderer views={box.accordionBody} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>

	)
}

export default accordionSection;
