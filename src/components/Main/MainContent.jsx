import { useState } from 'react'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import classes from './MainContent.module.css'
import MainInfo from './MainInfo'
import TimerContent from './TimerContent'

const MainContent = () => {
	const [pomodoro, SetPomodoro] = useState(25)
	const [shortBreak, setShortBreak] = useState(5)
	const [longBreak, SetLongBreak] = useState(10)

	return (
		<div className={classes.time_content}>
			<TimerContent />
			<div className={classes.time_focus}>
				<p>#1</p>
				<p>Time to focus!</p>
			</div>
			<div className={classes.task_name}>
				<h3>Tasks</h3>
				<img
					src='	https://pomofocus.io/icons/threedots-white.png'
					alt=''
				/>
			</div>

			<Input
				className={classes.add_tasks_input}
				placeholder='+  Add Task'
			/>
		</div>
	)
}

export default MainContent
