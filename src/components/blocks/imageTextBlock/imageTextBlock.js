import React from 'react';
import TextBlock from '../textBlock/textBlock';
import ImageHolder from '../imageHolder/imageHolder';

const imageTextBlock = ({ innerContent }) => {
	console.log(innerContent)
	const getTextGroup = innerContent.find(getContent => {
		if (getContent.__typename == 'ContentfulTextBlock') {
			return getContent
		}
	})
	const getImageHolder = innerContent.find(getContent => {
		if (getContent.__typename == 'ContentfulImageHolder') {
			return getContent
		}
	})
	let componentDetail;
	if (innerContent[0].__typename == 'ContentfulTextBlock') {
		componentDetail =
			<div className="flex align-center space-between">
				{getTextGroup ? <TextBlock content={getTextGroup.content.childMarkdownRemark.html} blockLink={innerContent[0].link} /> : null}
				<ImageHolder imageUrl={getImageHolder.image.fluid.src} imageSize={innerContent[1].layoutType} />
			</div>

	}
	else {
		componentDetail = <div className="flex align-center">
			<ImageHolder imageUrl={getImageHolder.image.fluid.src} imageSize={innerContent[0].layoutType} />
			{getTextGroup ? <TextBlock content={getTextGroup.content.childMarkdownRemark.html} blockLink={innerContent[1].link} /> : null}

		</div>
	}

	return componentDetail
}

export default imageTextBlock;

