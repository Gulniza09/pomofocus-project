/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
import { useCallback, useContext, useEffect, useState } from 'react'
import Input from '../UI/Input'
import TimerContent from './TimerContent'
import styled from 'styled-components'
import { SettingProvider } from '../../context/SettingContext'
import finishAudio from '../../assets/audio/finishAudio.mp3'
import useSound from 'use-sound'

const MainContent = () => {
   const { settingTime, setSettingTime } = useContext(SettingProvider)
   const [pomodoro, setPomodoro] = useState(Number(settingTime.pomodoro))
   const [shortBreak, setShortBreak] = useState(Number(settingTime.shortBreak))
   const [longBreak, setLongBreak] = useState(Number(settingTime.longBreak))
   const [content, setContent] = useState(0)
   const [minutes, setMinutes] = useState(0)
   const [seconds, setSeconds] = useState(0)
   const [ticking, setTicking] = useState(true)

   useEffect(() => {
      setPomodoro(settingTime.pomodoro)
      setLongBreak(settingTime.longBreak)
      setShortBreak(settingTime.shortBreak)
   }, [settingTime])

   const switchContent = (index) => {
      setContent(index)
   }
   const [finishPlay] = useSound(finishAudio)
   const getTickingTime = useCallback(() => {
      const timeStage = {
         0: pomodoro,
         1: shortBreak,
         2: longBreak,
      }
      const seconds = (timeStage[content] * 3600) / 60
      const time = `${Math.floor(seconds / 60)}:${
         seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`
      }`
      const [minute, second] = time.split(':')
      setMinutes(Number(minute))
      setSeconds(Number(second))
   }, [pomodoro, shortBreak, longBreak, content])

   useEffect(() => {
      getTickingTime()
   }, [getTickingTime])

   useEffect(() => {
      if (ticking) {
         return
      }
      if (!ticking) {
         const timer = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
               finishPlay()
               setContent(1)
               getTickingTime()
            } else if (seconds === 0) {
               setMinutes(minutes - 1)
               setSeconds(59)
            } else {
               setSeconds((second) => second - 1)
            }
         }, 1000)
         return () => clearInterval(timer)
      }
   }, [ticking, minutes, seconds])

   return (
      <TimeContent>
         <TimerContent
            content={content}
            switchContent={switchContent}
            getTickingTime={getTickingTime}
            minutes={minutes}
            seconds={seconds}
            ticking={ticking}
            setTicking={setTicking}
         />
         <TimeFocus>
            <p>#1</p>
            <p>Time to focus!</p>
         </TimeFocus>
         <TaskName>
            <h3>Tasks</h3>
            <img src="	https://pomofocus.io/icons/threedots-white.png" alt="" />
         </TaskName>

         <Input className="add_tasks_input" placeholder="+  Add Task" />
      </TimeContent>
   )
}
const TimeContent = styled.div`
   background-color: rgba(255, 255, 255, 0.1);
   padding: 20px 0px 30px;
   border-radius: 6px;
   margin-bottom: 20px;
   text-align: center;
   width: 480px;
   height: 320px;
   margin: 0 auto;
   margin-top: 50px;
   padding-bottom: 16px;
   cursor: pointer;
   .add_tasks_input {
      width: 100%;
      height: 60px;
      cursor: pointer;
      margin-top: 30px;
      text-align: center;
      color: antiquewhite;
      font-size: 22px;
      border: 2px dashed rgba(255, 255, 255, 0.4);
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.1);
      outline: none;
      padding: 5px;
   }
   .add_tasks_input::placeholder {
      color: #fff;
   }
`
const TimeFocus = styled.div`
   margin-top: 30px;
   p {
      color: white;
   }
`
const TaskName = styled.div`
   display: flex;
   justify-content: space-between;
   color: white;
   align-items: center;
   border-bottom: 2px solid white;
   img {
      height: 16px;
   }
`
export default MainContent
