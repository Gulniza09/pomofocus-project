import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MainContent from '../components/Main/MainContent'
import classes from './MainPage.module.css'
import MainInfo from '../components/Main/MainInfo'

const MainPage = () => {
	return (
		<>
			<div className={classes.background}>
				<div className={classes.time_content_body}>
					<Header />
					<MainContent />
				</div>
			</div>
			<div className={classes.text_info}>
				<MainInfo />
				<Footer />
			</div>
		</>
	)
}

export default MainPage
