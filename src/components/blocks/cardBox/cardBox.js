import React from 'react';
import arrowIcon from '../../../assets/images/arrow-icon.svg';

const cardBox = (props) => {
	return (
		<div class="box">
			{console.log(props)}
			<figure>
				<img src={props.data.cardImage.fluid.src} />
			</figure>
			<div class="text-box">
				<h3>{props.data.title}</h3>
				<div
					dangerouslySetInnerHTML={{
						__html: props.data.cardDetail.childMarkdownRemark.html

					}} />

				<a href={props.data.cardLink} class="box-btn"><img src={arrowIcon} /></a>
			</div>
		</div>
	)
}


export default cardBox


