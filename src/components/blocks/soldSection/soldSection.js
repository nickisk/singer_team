import React from 'react';
import Renderer from '../../renderer';

const soldSection = (props) => {
	console.log(props);
	let getTextBlock = props.sectionDetail.blockItems.find(textBox => {
		if (textBox.__typename == "ContentfulTextBlock") {
			return textBox;
		}
	})
	let getProperties = props.sectionDetail.blockItems.filter(property => {
		if (property.__typename == "ContentfulContentBox") {
			return property;
		}
	})
	return (
		<div className="sold-section">
			<div className="container">
				<div className="textbox">
					<h2>{getTextBlock.title}</h2>
					<div dangerouslySetInnerHTML={{
						__html: getTextBlock.content.childMarkdownRemark.html
					}}></div>

				</div>
				<ul>
					{getProperties.map((property, key) => <li key={key} dangerouslySetInnerHTML={{ __html: property.content.childMarkdownRemark.html }}></li>)}

				</ul>
			</div>
		</div>
	)
}


export default soldSection

