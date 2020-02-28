import React from 'react';
import Renderer from '../../renderer';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const sliderSection = (props) => {
	var settings = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
		<div className="homes-slider">
			<Slider {...settings}>
				{props.data.slides.map((slide, key) => <div key={key}><div className="flex"><Renderer views={slide.slideContent} /></div></div>)}
			</Slider>
		</div>
	)
}

export default sliderSection;
