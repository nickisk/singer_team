import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout';
import ImageTextBlock from '../components/blocks/imageTextBlock/imageTextBlock';
import '../assets/scss/style.scss';

class RootIndex extends Component {
	render() {
		console.log(this.props.data.allContentfulPage.edges);
		const sectionDetail = this.props.data.allContentfulPage.edges[1].node.blocks[0];
		return (
			<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>
				<div className="banner-section">
					<div className="text-bar">
						<h2>{sectionDetail.contentType[2].title}</h2>
					</div>
					<ImageTextBlock innerContent={sectionDetail.contentType} />
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

	  allContentfulPage {
		edges {
		  node {
			title
			blocks {
			  title
			  contentType {
				... on ContentfulImageHolder {
				  id
				  image {
					fluid {
					  src
					}
				  }
				  layoutType
				}
				... on ContentfulTextBlock {
				  content {
					childMarkdownRemark {
					  html
					}
				  }
				  link {
					title
					url
				  }
				  title
				}
				... on ContentfulBannerTitle {
					id
					title
				  }
			  }
			}
		  }
		}
	  }
  }
`
