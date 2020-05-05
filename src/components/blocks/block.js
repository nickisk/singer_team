import React from 'react';
import SoldSection from './soldSection/soldSection';
import PressSection from './pressSection/pressSection';
import HomesSection from './homeSection/homesSection';
import ResourcesSection from './resourcesSection/resourcesSection'



const block = (props) => {
	console.log(props)
	let blockContent = "";
	switch (props.sectionDetail.class) {
		case 'sold-section':
			blockContent = <SoldSection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'press-section':
			blockContent = <PressSection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'homes-section':
			blockContent = <HomesSection sectionDetail={props.sectionDetail} />
			return blockContent;
		case 'resources-section':
			blockContent = <ResourcesSection sectionDetail={props.sectionDetail} />
			return blockContent;
	}

	return blockContent
}


export default block
