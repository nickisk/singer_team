import React from 'react';

const imageHolder = (props) => (
	<figure className={props.data.layoutType == 'Full' ? 'full' : null}>
		{console.log(props)}
		<img src={props.data.image.fluid.src} alt="hero image" />
	</figure>
)

export default imageHolder

