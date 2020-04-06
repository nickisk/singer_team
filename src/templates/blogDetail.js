import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout'


class blogDetailTemplate extends React.Component {
	componentDidMount() {

	}
	render() {
		console.log(this.props.data)

		const blogData = this.props.data.allContentfulBlogDetail.edges[0].node
		return (
			<div>

				<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>
					<Helmet title={blogData.title} />
					<div className="blog-detail-section">
						<div className="container">
							<h3>July 22 - Written By {blogData.authorName}</h3>
							<h1>{blogData.title}</h1>
							<figure>
								<img src={blogData.image.fluid.src} />
							</figure>
							<div className="content" dangerouslySetInnerHTML={{
								__html: blogData.description.childMarkdownRemark.html

							}}></div>
						</div>
					</div>
				</DefaultLayout>
			</div>
		)
	}
}

export default blogDetailTemplate
export const pageQuery = graphql`
query BlogDetailQuery($slug: String!){
    site {
      siteMetadata {
        title
      }
	}
	allContentfulLayout {
		edges {
		  node {
			footer {
				showFooter
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
	  allContentfulBlogDetail(filter: {url: {eq: $slug}}){
		edges{
			node {
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

`
