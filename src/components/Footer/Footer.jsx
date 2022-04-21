import React from 'react'
import classes from './Footer.module.css'
const Footer = () => {
	return (
		<div className={classes.footer}>
			
			<div className={classes.footer_link}>
				<a href='/home'>HOME</a>
				<a href=''>PRIVACY</a>
				<a href=''>CONTACT</a>
				<a href=''>SIMPLE PAGE</a>
			</div>
			<div className={classes.footer_image_link}>
				<img src='https://pomofocus.io/icons/facebook.png' alt='' />
				<img src='https://pomofocus.io/icons/twitter.png' alt='' />

				<img
					src='	https://pomofocus.io/icons/stripe-climate-badge.png'
					alt=''
				/>
			</div>
			<p>Made with 3 by Yuya Uzu</p>
			<h6>©Pomofocus 2022. All Rights Reserved.</h6>
		</div>
	)
}

export default Footer
