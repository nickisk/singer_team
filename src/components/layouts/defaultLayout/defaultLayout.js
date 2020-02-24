import React from 'react';
import './defaultLayout.scss';
import Holder from '../../../hoc/holder';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import { graphql } from 'gatsby'
class DefaultLayout extends React.Component {
	
	
	render() {
		console.log(this.props.data)

		return <div>
			{this.props.children}
		</div>

	}

}
export default DefaultLayout
export const pageQuery = graphql`
query Layout3Query{
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
