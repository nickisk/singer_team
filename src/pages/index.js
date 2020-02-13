import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout';
import '../assets/scss/style.scss';

class RootIndex extends Component {
	render() {
		console.log(this.props.data.allContentfulPage.edges[0].node.blocks[0]);
		const sectionDetail = this.props.data.allContentfulPage.edges[0].node.blocks[0];
		return (
			<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>
				<div className="banner-section">
					<div className="text-bar">
						<h2>{sectionDetail.blockHeading}</h2>
					</div>
					<div className="flex align-center space-between">
						<div className="colmn-text">
							<div
								dangerouslySetInnerHTML={{
									__html: sectionDetail.contentType[0].content.childMarkdownRemark.html

								}} />
							<a href={sectionDetail.contentType[0].link.url} className="btn-arrow">{sectionDetail.contentType[0].link.title}</a>
						</div>
						<figure>
							<img src={sectionDetail.contentType[1].image.fluid.src} alt="hero image" />
						</figure>
					</div>
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
			  blockHeading
			  title
			  contentType {
				... on ContentfulImageHolder {
				  id
				  image {
					fluid {
					  src
					}
				  }
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
				}
			  }
			}
		  }
		}
	  }
  }
`
