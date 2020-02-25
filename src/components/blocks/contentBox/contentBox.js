import React from 'react';

const contectBox = (props) => (
	<div className="text-box" dangerouslySetInnerHTML={{
		__html: props.data.content.childMarkdownRemark.html

	}} >

	</div>
)



export default contectBox

