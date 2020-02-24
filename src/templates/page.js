import React from 'react'
import { graphql } from 'gatsby'
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout'
import Layout from './layout'
// import Helmet from 'react-helmet'
// import get from 'lodash/get'
// import Img from 'gatsby-image'
// import Layout from '../components/layout'

// import heroStyles from '../components/hero.module.css'

class PageTemplate extends React.Component {
  render() {
      console.log(this.props.data)
    // const post = get(this.props, 'data.contentfulBlogPost')
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
        <Layout>
<h1>Terms and Condition</h1>
        </Layout>
      
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
            page {
              blocks {
                contentType {
                  ... on ContentfulBannerTitle {
                    id
                    title
                    internal {
                      type
                    }
                  }
                  ... on ContentfulImageHolder {
                    id
                    title
                    internal {
                      type
                    }
                  }
                  ... on ContentfulTextBlock {
                    id
                    title
                    content {
                      childMarkdownRemark {
                        html
                      }
                    }
                    internal {
                      type
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

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       publishDate(formatString: "MMMM Do, YYYY")
//       heroImage {
//         fluid(maxWidth: 1180, background: "rgb:000000") {
//           ...GatsbyContentfulFluid_tracedSVG
//         }
//       }
//       body {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `
