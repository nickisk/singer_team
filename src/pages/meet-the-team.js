import React, { Component } from 'react'
import { graphql } from 'gatsby';
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout';
import '../assets/scss/style.scss';
import BannerImage from '../assets/images/meet-banner.jpg';
import SectionImage from '../assets/images/team-img-1.jpg';
import SectionImage1 from '../assets/images/team-img-2.jpg';
import FounderImage from '../assets/images/founder-image.jpg';

class AboutUs extends Component {
	render() {
		return (
			<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>
				<div className="banner-section meet-banner-section">
					<div className="text-bar">
						<h2>Who We Are</h2>
					</div>
					<div className="flex align-center">
						<figure>
							<img src={BannerImage} alt="hero image" />
						</figure>
					</div>
				</div>
				<div className="team-section">
					<div className="container sm">
						<div className="about-team-box">
							<div className="colmn-text">
								<h4 className="line-heading">Our Team</h4>
								<h2>About The Singer Team</h2>
								<p>The Singer Team is a group of professionals— not simply an individual agent. That means
									that we have the resources to be with you throughout the entire process, with no
									exceptions. We are accustomed to providing real estate services to a sophisticated,
								demanding clientele who appreciate the utmost level of quality.</p>
							</div>
							<div className="colmn-img">
								<figure>
									<img src={SectionImage} />
								</figure>
								<figure>
									<img src={SectionImage1} />
								</figure>
							</div>
						</div>
						<div className="pillars-box">
							<h4 className="line-heading">Brand Pillars</h4>
							<div className="flex space-between">
								<div className="colmn-box">
									<h3>Service</h3>
									<p>We give you an an unprecedented, tailored level of care so you can focus on building
										your new life, rather than being distracted by it. We’re on call 24-7, and deliver
										with consistency. Like any outstanding hotel or hospitality concept, we carefully
									consider and anticipate all of your needs, before you even ask.</p>
								</div>
								<div className="colmn-box">
									<h3>Style</h3>
									<p>We give you an an unprecedented, tailored level of care so you can focus on building
										your new life, rather than being distracted by it. We’re on call 24-7, and deliver
										with consistency. Like any outstanding hotel or hospitality concept, we carefully
									consider and anticipate all of your needs, before you even ask.</p>
								</div>
								<div className="colmn-box">
									<h3>Luxury</h3>
									<p>Our clients demand the highest level of service. Buying a new home should not be a
										painstaking odyssey, but an exciting and dynamic journey. We transform ordinary real
										estate transactions into memorable experiences with utmost care, sophistication, and
									discretion.</p>
								</div>
								<div className="colmn-box">
									<h3>Responsibility</h3>
									<p>The purchase or sale of a home can have significant financial implications. A
										person’s home can be one of their most significant assets. For both buyers and
										sellers, we maintain the utmost fiduciary responsibility, whether it’s understanding
										the details of a client’s financial profile in preparation for a board package, or
									ensuring that a purchase or sale is truly a wise investment.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="founder-section">
					<div className="section-heading">
						<h2>Meet The Team</h2>
					</div>
					<div className="container">
						<div className="flex">
							<div className="colmn-img">
								<img src={FounderImage} alt="founder image" />
							</div>
							<div className="colmn-text">
								<h4 className="line-heading">Our Founder</h4>
								<h2>Leslie J.W. Singer</h2>
								<p>An award-winning broker, Leslie has consistently been one of Brown Harris Steven’s top
									performers, leading a team that has repeatedly been number one in sales for the firm.
									She has also earned a reputation as one of the most approachable and loyal
									representatives in the industry. She has been featured in a long list of prominent
									publications, including The New York Times, The Wall Street Journal, Architectural
								Digest, New York Observer... <a href="#" className="btn-link">Read More</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="agents-section">
					<div className="container">
						<h4 className="line-heading">Our Agents</h4>
						<div className="accordion-section">
							<div className="accordion-box">
								<div className="accordion-head">
									<h3>Jane Doe</h3>
									<span>Open</span>
								</div>
								{/* <div className="accordion-body">
									<div className="flex align-center">
										<div className="colmn-img">
											<img src={FounderImage} />
										</div>
										<div className="colmn-text">
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
												nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit, sed diam nonummy nibh euismod tincidunt</p>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
												nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit, sed diam nonummy nibh euismod tincidunt</p>
										</div>
									</div>
								</div> */}
							</div>
							<div className="accordion-box">
								<div className="accordion-head">
									<h3>John Smith</h3>
									<span>Close</span>
								</div>
								<div className="accordion-body">
									<div className="flex align-center">
										<div className="colmn-img">
											<img src={FounderImage} />
										</div>
										<div className="colmn-text">
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
												nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit, sed diam nonummy nibh euismod tincidunt</p>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
												nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit, sed diam nonummy nibh euismod tincidunt</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DefaultLayout>
		)
	}
}

export default AboutUs

export const pageQuery = graphql`
  query TeemQuery {
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
