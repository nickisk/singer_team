import React from 'react';

const sectionImage = (props) => (
	<div className="colmn-img">
		{console.log(props)}
		{props.data.images.map(image => <figure><img src={image.fluid.src} /></figure>)}

	</div>
)

export default sectionImage

