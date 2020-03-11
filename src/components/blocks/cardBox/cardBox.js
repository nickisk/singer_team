import React from 'react';
import arrowIcon from '../../../assets/images/arrow-icon.svg';

const cardBox = (props) => {
	return (
		<a href={props.data.cardLink} class="box">
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

				<span class="box-btn"><img src={arrowIcon} /></span>
			</div>
		</a>
	)
}


export default cardBox


