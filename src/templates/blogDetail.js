import React from 'react'
import { graphql } from 'gatsby'
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout'
import BannerSection from '../components/blocks/bannerSection/bannerSection';
import TeamSection from '../components/blocks/teamSection/teamSection';
import PillarSection from '../components/blocks/pillarSection/pillarSection';
import FounderSection from '../components/blocks/founderSection/founderSection';
import AccordionSection from '../components/blocks/accordionSection/accordionSection';
import PropertiesSection from '../components/blocks/propertiesSection/propertiesSection';
import ContactSection from '../components/blocks/contactSection/contactSection';
import BlogDetail from '../components/blocks/blogDetail/blogDetail'


class blogDetailTemplate extends React.Component {
	componentDidMount() {

	}
	render() {
		console.log(this.props.data)
		// const sectionDetails = this.props.data.allContentfulNavigation.edges[0].node.page.blocks;
		// const blocks = sectionDetails.map(detail => {
		// 	switch (detail.internal.type) {
		// 		case "ContentfulBannerBlock":
		// 			return <BannerSection sectionDetail={detail} />
		// 		case "ContentfulTeamBlock":
		// 			return <TeamSection sectionDetail={detail} />
		// 		case "ContentfulPillarBlock":
		// 			return <PillarSection sectionDetail={detail} />
		// 		case "ContentfulFounderBlock":
		// 			return <FounderSection sectionDetail={detail} />
		// 		case "ContentfulAccordionBlock":
		// 			return <AccordionSection sectionDetail={detail} />
		// 		case "ContentfulPropertiesBlock":
		// 			return <PropertiesSection sectionDetail={detail} />
		// 		case "ContentfulContactSection":
		// 			return <ContactSection sectionDetail={detail} />
		// 		case "ContentfulBlogDetail":
		// 			return <BlogDetail sectionDetail={detail} />;
		// 		default:
		// 			return detail;
		// 	}
		// })

		return (
			<div>

				<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>

				</DefaultLayout>
			</div>
		)
	}
}

export default blogDetailTemplate
export const pageQuery = graphql`
query BlogDetailQuery($slugs: String!){
    site {
      siteMetadata {
        title
      }
	}
	allContentfulLayout {
		edges {
		  node {
			footer {
			  footerNavigation {
				title
				url
			  }
			  footerLogo {
				title
				url
			  }
			  seconderyNavigation {
				title
				url
			  }
			  copyright
			}
			header {
			  leftNavigation {
				title
				url
			  }
			  logo {
				title
				url
			  }
			  rightNavigation {
				title
				url
			  }
			}
		  }
		}
      }
  }

`
