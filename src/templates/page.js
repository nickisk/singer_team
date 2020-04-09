import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout'
import BannerSection from '../components/blocks/bannerSection/bannerSection';
import TeamSection from '../components/blocks/teamSection/teamSection';
import PillarSection from '../components/blocks/pillarSection/pillarSection';
import FounderSection from '../components/blocks/founderSection/founderSection';
import AccordionSection from '../components/blocks/accordionSection/accordionSection';
import PropertiesSection from '../components/blocks/propertiesSection/propertiesSection';
import ContactSection from '../components/blocks/contactSection/contactSection';
import BlogDetail from '../components/blocks/blogDetail/blogDetail'


class PageTemplate extends React.Component {
	componentDidMount() {

	}
	render() {
		console.log(this.props.data)
		const sectionDetails = this.props.data.allContentfulNavigation.edges[0].node.page.blocks;
		const blocks = sectionDetails.map(detail => {
			switch (detail.internal.type) {
				case "ContentfulBannerBlock":
					return <BannerSection sectionDetail={detail} />
				case "ContentfulTeamBlock":
					return <TeamSection sectionDetail={detail} />
				case "ContentfulPillarBlock":
					return <PillarSection sectionDetail={detail} />
				case "ContentfulFounderBlock":
					return <FounderSection sectionDetail={detail} />
				case "ContentfulAccordionBlock":
					return <AccordionSection sectionDetail={detail} />
				case "ContentfulPropertiesBlock":
					return <PropertiesSection sectionDetail={detail} />
				case "ContentfulContactSection":
					return <ContactSection sectionDetail={detail} />
				case "ContentfulBlogDetail":
					return <BlogDetail sectionDetail={detail} />;
				default:
					return detail;
			}
		})

		return (
			<div>

				<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} showFooter={this.props.data.allContentfulNavigation.edges[0].node.page.showFooter} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>
					<Helmet title={`The Singer Team || ${this.props.data.allContentfulNavigation.edges[0].node.page.title}`} />
					{blocks}
				</DefaultLayout>
			</div>
		)
	}
}

export default PageTemplate
export const pageQuery = graphql`
query PageQuery($slug: String!){
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
      
      allContentfulNavigation(filter: {url: {eq: $slug}}) {
        edges {
			node {
			  url
			  page {
				showFooter
				title
				blocks {
					... on ContentfulContactSection {
						id
						subTitle
						title
						location {
							lat
							lon
						}
						detailBoxes {
						  title
						  internal {
							type
						  }
						  contentBox {
							url
							title
						  }
						}
						internal {
						  type
						}
					}
				 	 ... on ContentfulBannerBlock {
						id
						title
						class
						internal {
						type
						}
						contentBoxes {
							... on ContentfulSliderSection{
								id
								internal {
									type
								}
								slides{
									internal {
										type
									}
									slideContent {
										... on ContentfulImageHolder {
											internal {
												type
											}
											id
											layoutType
											image {
												fluid {
													src
												}
											}
										}
										... on ContentfulTextBlock {
											internal {
												type
											}
											id
											subHeading
											content {
												childMarkdownRemark {
												html
												}
											}
											link {
											url
											title
											}
										}
									}
								}
							}
						... on ContentfulSectionImage {
							id
							images {
							  fluid {
								src
							  }
							}
							internal {
							  type
							}
						  }
					  ... on ContentfulBannerTitle {
						internal {
							type
						  }
						id
						title
					  }
					  ... on ContentfulImageHolder {
						internal {
							type
						  }
						id
						layoutType
						image {
						  fluid {
							src
						  }
						}
					  }
					  ... on ContentfulTextBlock {
						internal {
							type
						  }
						id
						subHeading
						content {
							childMarkdownRemark {
							  html
							}
						  }
						link {
						  url
						  title
						}
					  }
					}
				  }
				  ... on ContentfulTeamBlock {
					id
					title
					internal {
					  type
					}
					sectionGroup {
					  ... on ContentfulSectionImage {
						internal {
							type
						  }
						id
						images {
						  fluid {
							src
						  }
						}
					  }
					  ... on ContentfulTextBlock {
						internal {
							type
						  }
						id
						
						title
						content {
						  childMarkdownRemark {
							html
						  }
						}
						link {
						  url
						  title
						}
					  }
					  ... on ContentfulSectionTitle {
						internal {
							type
						  }
						id
						title
					  }
					}
				  }
				  ... on ContentfulPillarBlock {
					id
					title
					internal {
					  type
					}
					contentBoxes {
					  ... on ContentfulSectionTitle {
						internal {
							type
						  }
						id
						title
					  }
					  ... on ContentfulTextBlock {
						internal {
							type
						  }
						id
						title
						content {
						  childMarkdownRemark {
							html
						  }
						}
						link {
						  url
						  title
						}
					  }
					}
				  }
				  ... on ContentfulFounderBlock {
					id
					title
					internal {
					  type
					}
					contentType {
					  ... on ContentfulBannerTitle {
						internal {
							type
						  }
						id
						title
					  }
					  ... on ContentfulSectionImage {
						internal {
							type
						  }
						id
						images {
						  fluid {
							src
						  }
						}
					  }
					  ... on ContentfulTextBlock {
						internal {
							type
						  }
						id
						title
						link {
						  title
						  url
						}
						subHeading
						content {
						  childMarkdownRemark {
							html
						  }
						}
					  }
					}
				  }
				  ... on ContentfulAccordionBlock {
					id
					title
					class
					subHeading
					internal {
					  type
					}
					contentBoxes {
					  title
					  internal {
						type
					  }
					  accordionHead {
						content {
						  childMarkdownRemark {
							html
						  }
						}
						internal {
						  type
						}
					  }
					  accordionBody {
						... on ContentfulSectionImage {
							internal {
								type
							  }
						  id
						  images {
							fluid {
							  src
							}
						  }
						}
						... on ContentfulContentBox {
							id
							content {
							  childMarkdownRemark {
								html
							  }
							}
							internal {
							  type
							}
						  }
						... on ContentfulTextBlock {
							internal {
								type
							  }
						  id
						  title
						  link {
							title
							url
						  }
						  content {
							childMarkdownRemark {
							  html
							}
						  }
						}
					  }
					}
				  }
				  ... on ContentfulPropertiesBlock {
					internal {
						type
					  }
					id
					title
					subHeading
					propertiesBoxes {
						internal {
							type
						  }
					  title
					  cardLink
					  cardDetail {
						childMarkdownRemark {
						  html
						}
					  }
					  cardImage {
						fluid {
						  src
						}
					  }
					}
				  }
				  ... on ContentfulBlogDetail {
					id
					image {
					  fluid {
						src
					  }
					}
					authorName
					title
					date(formatString: "")
					internal {
					  type
					}
					description {
					  childMarkdownRemark {
						html
					  }
					}
				  }
				}
			  }
			}
		  }
      }
    
  }

`
