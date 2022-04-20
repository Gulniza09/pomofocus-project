import React, { useState } from 'react'
import classes from './InputSetting.module.css'

const InputSetting = () => {
	const [settingTime, setSettingTime] = useState({
		pomodoro: 0.2,
		shortBreak: 0.3,
		longBreak: 1,
		active: 'pomodoro',
	})

	const inputChangeHandler = (e) => {
		const { name, value } = e.target
		setSettingTime((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}
	

	return (
		<div>
			<div className={classes.add_time_minutes}>
				<h3>Time (minutes)</h3>
				<div className={classes.add_time_detail}>
					<div className={classes.add_time_input}>
						<label htmlFor=''>Pomodoro</label>
						<br />
						<input
							type='number'
							name='pomodoro'
							value={settingTime.pomodoro}
							onChange={inputChangeHandler}
						/>
					</div>
					<div className={classes.add_time_input}>
						<label htmlFor=''>Short Break</label>
						<input
							type='number'
							name='shortBreak'
							value={settingTime.shortBreak}
							onChange={inputChangeHandler}
						/>
					</div>
					<div className={classes.add_time_input}>
						<label htmlFor=''>Long Break</label>
						<input
							type='number'
							name='longBreak'
							value={settingTime.longBreak}
							onChange={inputChangeHandler}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InputSetting
