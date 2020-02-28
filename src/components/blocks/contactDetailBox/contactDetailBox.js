import React from 'react';

const contactDetailBox = (props) => {
	return (
		<div className="detail-box">
			{console.log(props)}
			<h4>{props.data.title}</h4>
			<a href={props.data.contentBox[0].url}>{props.data.contentBox[0].title}</a>
		</div>
	)
}


export default contactDetailBox


