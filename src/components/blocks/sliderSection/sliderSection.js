import React, { Component } from 'react';
import Renderer from '../../renderer';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


class sliderSection extends Component {

	settings = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	componentDidMount() {
		let divElement = document.querySelector(".homes-slider .colmn-text").offsetHeight - 20;
		document.querySelector('.homes-slider .slick-dots').style.bottom = divElement + 'px';
		console.log(divElement)
	}
	render() {
		return (
			<div className="homes-slider">
				<Slider {...this.settings}>
					{this.props.data.slides.map((slide, key) => <div key={key}><div className="flex"><Renderer views={slide.slideContent} /></div></div>)}
				</Slider>
			</div>
		)
	}
}

export default sliderSection;
