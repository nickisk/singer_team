import React, { Component } from 'react';
import Renderer from '../../renderer';

class accordionSection extends Component {
	state = {
		showItems: 0,
	}


	showHendler = (key) => {
		if (key == this.state.showItems) {
			this.setState({
				showItems: null
			})
		}
		else {
			this.setState({
				showItems: key
			})
		}

	}
	render() {
		return (
			<div className={this.props.sectionDetail.class ? "accordion-block " + this.props.sectionDetail.class : "accordion-block"}>
				{console.log(this.props)}
				<div className="container">
					<h4 className="line-heading">{this.props.sectionDetail.subHeading}</h4>
					<div class="accordion-section">
						{this.props.sectionDetail.contentBoxes.map((box, key) => (
							<div key={key} className="accordion-box">
								<div onClick={() => this.showHendler(key)} className={this.state.showItems == key ? "accordion-head active" : "accordion-head"}>
									<div className="heading-box">
										<h3>{box.title}</h3>
									</div>
									{box.accordionHead ? <Renderer views={box.accordionHead} /> : null}
								</div>
								<div className={this.state.showItems == key ? "accordion-body active" : "accordion-body"}>
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
}

export default accordionSection;
