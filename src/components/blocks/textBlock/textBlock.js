import React from 'react';

const textBlock = (props) => (
	<div className="colmn-text">
		<div className="inner-group">
			{props.data.subHeading ? <h4 className="line-heading">{props.data.subHeading}</h4> : null}
			<div
				dangerouslySetInnerHTML={{
					__html: props.data.content.childMarkdownRemark.html

				}} />
			{props.data.link ? <a href={props.data.link.url} className="btn-arrow">{props.data.link.title}</a> : null}
		</div>
	</div>
)



export default textBlock

