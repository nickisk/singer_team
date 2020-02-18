import React from 'react';
import TextBlock from '../textBlock/textBlock';
import ImageHolder from '../imageHolder/imageHolder';

const imageTextBlock = ({ innerContent }) => {
	console.log(innerContent)
	let componentDetail;
	if (innerContent[0].__typename == 'ContentfulTextBlock') {
		componentDetail =
			<div className="flex align-center space-between">
				<TextBlock content={innerContent[0].content.childMarkdownRemark.html} blockLink={innerContent[0].link} />
				<ImageHolder imageUrl={innerContent[1].image.fluid.src} imageSize={innerContent[1].layoutType} />
			</div>

	}
	else {
		componentDetail = <div className="flex align-center">
			<ImageHolder imageUrl={innerContent[0].image.fluid.src} imageSize={innerContent[0].layoutType} />
			<TextBlock content={innerContent[1].content.childMarkdownRemark.html} blockLink={innerContent[1].link} />

		</div>
	}

	return componentDetail
}

export default imageTextBlock;

