import React from 'react';

const textBlock = (props) => (
	<div className="colmn-text">
		<div
			dangerouslySetInnerHTML={{
				__html: props.content

			}} />
		<a href={props.blockLink.url} className="btn-arrow">{props.blockLink.title}</a>
	</div>
)

export default textBlock

