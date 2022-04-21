import React from 'react'
import Button from '../../UI/Button'
import classes from './Header.module.css'
import Modal from '../../UI/Modal'
import { useState } from 'react'
import AddReportTime from './AddReportTime'
import TimerSetting from './TimerSetting/TimerSetting'
const Header = () => {
	const [reportShow, setReportShow] = useState(false)
	const [settingTimerShow, setSettingTimerShow] = useState(false)

	return (
		<div className={classes.header}>
			<a href='' className={classes.logo}>
				<img src='https://pomofocus.io/icons/icon-white.png' alt='' />
				Pomofocus
			</a>
			<div className={classes.btn}>
				<Button onClick={() => setReportShow(true)}>
					<img
						src='https://pomofocus.io/icons/graph-white.png
'
						alt=''
					/>
					Report
				</Button>
				<Button onClick={() => setSettingTimerShow(true)}>
					<img
						src='https://pomofocus.io/icons/config-white.png
'
						alt=''
					/>
					Setting
				</Button>
				<Button>
					<img
						src='	https://pomofocus.io/icons/user-white.png
'
						alt=''
					/>
					Login
				</Button>
			</div>
			{reportShow ? (
				<Modal>
					<AddReportTime
						reportShow={reportShow}
						setReportShow={setReportShow}
					/>
				</Modal>
			) : (
				''
			)}
			{settingTimerShow ? (
				<Modal>
					<TimerSetting
						settingTimerShow={settingTimerShow}
						setSettingTimerShow={setSettingTimerShow}
					/>
				</Modal>
			) : (
				''
			)}
		</div>
	)
}

export default Header
