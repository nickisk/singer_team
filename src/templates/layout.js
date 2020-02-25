import React from 'react';
import { graphql } from 'gatsby';
class Layout extends React.Component {


	render() {
		console.log(this.props.data)

		return <div>
			{this.props.children}
		</div>

	}

}
export default Layout
