import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout';
import ImageTextBlock from '../components/blocks/imageTextBlock/imageTextBlock';
import BannerSection from '../components/blocks/bannerSection/bannerSection';
import '../assets/scss/style.scss';

class RootIndex extends Component {
	render() {
		console.log(this.props.data)
		const sectionDetail = this.props.data.allContentfulNavigation.edges[0].node.page.blocks[0]
		return (
			<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>
				<div className="contentful-block">
					<BannerSection sectionDetail={sectionDetail} />
				</div>
			</DefaultLayout>

		)
	}
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
      
      allContentfulNavigation(filter: {url: {eq: "/"}}) {
        edges {
			node {
			  url
			  page {
				blocks {
				  ... on ContentfulBannerBlock {
					id
					title
					internal {
					  type
					}
					contentBoxes {
					  ... on ContentfulBannerTitle {
						id
						title
					  }
					  ... on ContentfulImageHolder {
						id
						image {
						  fluid {
							src
						  }
						}
					  }
					  ... on ContentfulTextBlock {
						id
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
			  }
			}
		  }
      }

  }
`
