import React from 'react'
import classes from './TimerSetting.module.css'
import Button from '../../../UI/Button'
import InputSetting from './InputSetting'

const TimerSetting = ({ setSettingTimerShow }) => {
	return (
		<div >
			<div className={classes.timer_setting_content}>
				<div className={classes.setting_header}>
					<h1>Timer Setting</h1>
					<button onClick={() => setSettingTimerShow(false)}>
						<img
							src='https://pomofocus.io/icons/remove-black-sm.png'
							alt=''
						/>
					</button>
				</div>

				<InputSetting />
				<div className={classes.auto_quetions}>
					<h3>Auto start Breaks?</h3>
					<label className={classes.switch}>
						<input className={classes.input} type='checkbox' />
						<span className={classes.slider}></span>
					</label>
				</div>
				<div className={classes.auto_quetions}>
					<h3>Auto start Pomodoros?</h3>
					<label className={classes.switch}>
						<input className={classes.input} type='checkbox' />
						<span className={classes.slider}></span>
					</label>
				</div>
				<div className={classes.time_interval}>
					<h3>Long Break interval</h3>
					<input type='number' />
				</div>

				<Button className={classes.Button}>OK</Button>
			</div>
		</div>
	)
}

export default TimerSetting
