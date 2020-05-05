import React from 'react';
import Renderer from '../../renderer';

const soldSection = (props) => {
	console.log(props);
	let getTextBlock = props.sectionDetail.blockItems.find(textBox => {
		if (textBox.__typename == "ContentfulTextBlock") {
			return textBox;
		}
	})
	let getImages = props.sectionDetail.blockItems.filter(image => {
		if (image.__typename == "ContentfulImageHolder") {
			return image;
		}
	})
	return (
		<div className="press-section">
			<div className="container">
				<div className="textbox">
					<h2>{getTextBlock.title}</h2>
					<div dangerouslySetInnerHTML={{
						__html: getTextBlock.content.childMarkdownRemark.html
					}}></div>

				</div>
				<ul>
					{getImages.map((image, key) => <li key={key}><img src={image.image.file.url} /></li>)}

				</ul>

			</div>
		</div>
	)
}


export default soldSection

