import React from 'react';
import Renderer from '../../renderer';

const contactSection = (props) => {
	return (
		<div className="contact-page">
			<h2>Contact Us</h2>
			<div className="section-wrapper">
				<div className="section-heading">
					<h1>New York</h1>
				</div>
				<div className="detail-box">
					<h4>Visit Us</h4>
					<a href="#">123 New York Street New York, NY 10001</a>
				</div>
				<div className="map-box">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.003261455323!2d-73.9982453!3d40.7179447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25989d6e03a8b%3A0x2bb7eec8fc6d5f07!2s123%20Mulberry%20St%2C%20New%20York%2C%20NY%2010013%2C%20USA!5e0!3m2!1sen!2sin!4v1582304805276!5m2!1sen!2sin" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
				</div>
				<div className="detail-box">
					<h4>Ring Us</h4>
					<a href="#">123.123.1234</a>
				</div>
				<div className="detail-box">
					<h4>Say Hello</h4>
					<a href="#">hello@singerteam.com</a>
				</div>
			</div>
		</div>
	)
}

export default contactSection;
