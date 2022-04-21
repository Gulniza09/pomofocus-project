import React from 'react'
import classes from './TimerContent.module.css'
import { useState, useEffect } from 'react'
import Button from '../../UI/Button'

const TimerContent = () => {
	const options = ['Pomodoro', 'Short Break', 'Long Break']
	const [minutes, setMinutes] = useState(25)
	const [seconds, setSeconds] = useState(0)
	const [toggle, setToggle] = useState(true)

	let timer
	useEffect(() => {
		if (toggle) {
			return
		}
		timer = setInterval(() => {
			setSeconds(seconds - 1)
			if (seconds === 0) {
				setMinutes(minutes - 1)
				setSeconds(59)
			}
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	})

	return (
		<div>
			<div>
				<div className={classes.block_btn}>
					{options.map((option, index) => {
						return <Button>{option}</Button>
					})}
				</div>
				<span className={classes.time}>
					{minutes}:{seconds}
				</span>
				<div className={classes.time_toggle}>
					<Button
						onClick={() => setToggle((prevState) => !prevState)}
						className={classes.time_start}
					>
						{toggle ? 'START' : 'STOP'}
					</Button>
					{toggle ? (
						''
					) : (
						<Button
							onClick={() =>
								alert(
									'Are you sure you want to finish the round early? (The remaining time will not be counted in the report.)',
								)
							}
							className={classes.time_next_toggle}
						>
							<img
								src='https://pomofocus.io/icons/next-white3.png'
								alt=''
							/>
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}

export default TimerContent
