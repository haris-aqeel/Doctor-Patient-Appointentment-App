import React from 'react';
import Navbar from './Navbar';
import HeaderBottom from './HeaderBottom';
import FeatureItem from './FeatureItem';

const Header = (props) => {
	return (
		<section className="main-home">
			<div className="container">
				<header>
					<Navbar />
					<HeaderBottom {...props} />
				</header>
				<section className="header-bottom-content-aria"></section>
			</div>
			{window.location.pathname === '/' && (
				<div className="container" style={{ marginTop: '90px' }}>
					<div className="row pr-4 mr-4" style={{ paddingTop: '160px' }}>
						<FeatureItem
							icon="query_builder"
							title="Opening Hours"
							extraClass="home-primary"
							subTitle="Lorem ipsum dolor sit amet consectetur adipisicing."
						/>
						<FeatureItem
							extraClass="home-location"
							icon="location_on"
							title="Visit Our Location"
							subTitle="Lorem ipsum dolor sit amet consectetur adipisicing."
						/>
						<FeatureItem
							extraClass="home-primary"
							icon="add_ic_call"
							title="Contact Us Now"
							subTitle="Lorem ipsum dolor sit amet consectetur adipisicing."
						/>
					</div>
				</div>
			)}
		</section>
	);
};

export default Header;
