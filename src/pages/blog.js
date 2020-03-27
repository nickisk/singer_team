import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet';
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout';
import arrowIcon from '../assets/images/arrow-icon.svg';

class Blog extends Component {
	render() {
		console.log(this.props.data)
		const blogs = this.props.data.allContentfulNavigation.edges[0].node.page.blocks
		console.log(blogs)
		return (
			<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>
				<div className="blog-page">
					<div className="container">
						<div className="flex space-between">
							{blogs.map((blog, key) => (

								<div key={key} className="blog-box">
									<Link to={blog.url}>
										<div>
											<figure>
												<img src={blog.image.fluid.src}></img>
											</figure>
											<div className="text-box">
												<h2>{blog.title}</h2>
												<div className="arrow-btn">
													<img src={arrowIcon} />
												</div>
												<div className="content" dangerouslySetInnerHTML={{
													__html: blog.description.childMarkdownRemark.html

												}}>

												</div>
											</div>
										</div>
									</Link>
								</div>


							))}

						</div>
					</div>

				</div>
			</DefaultLayout>

		)
	}
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
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
      
      allContentfulNavigation(filter: {url: {eq: "/blog"}}) {
        edges {
			node {
			  url
			  page {
				blocks {
					... on ContentfulBlogDetail {
						id
						image {
						  fluid {
							src
						  }
						}
						authorName
						title
						url
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
