import React from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from '../Header /SocialIcons/icon_facebook.svg'
import LinkedinIcon from '../Header /SocialIcons/icon_linkedin.svg'
import {
	FacebookShareButton,
	LinkedinShareButton,
} from 'react-share';

import './Share.scss';

const Share = ({ socialConfig  }) => (
	<div className="post-social">
		<FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook" >
			<span className="icon">
				<FacebookIcon  />
			</span>
			<span className="text">Facebook</span>
		</FacebookShareButton>
		<LinkedinShareButton url={socialConfig.config.url} className="button is-outlined is-rounded linkedin" title={socialConfig.config.title} >
			<span className="icon">
				<LinkedinIcon />
			</span>
			<span className="text">LinkedIn</span>
		</LinkedinShareButton>
	</div>
);

Share.propTypes = {
	socialConfig: PropTypes.shape({
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
};


export default Share;