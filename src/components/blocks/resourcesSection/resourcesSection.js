import React from 'react';
import Renderer from '../../renderer';

const homesSection = (props) => {
	console.log(props)
	return (
		<div className="resources-section">
			<div className="container">
				<div className="flex space-between">
					{/* <Renderer views={props.sectionDetail.blockItems} /> */}
					{props.sectionDetail.blockItems.map((block, key) => (
						<div key={key} className="colmn-box">
							<h2>{block.title}</h2>
							<div dangerouslySetInnerHTML={{
								__html: block.content.childMarkdownRemark.html
							}}></div>
							{block.link ? <a href={block.link.url} className="btn-arrow">{block.link.title}</a> : null}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}


export default homesSection

