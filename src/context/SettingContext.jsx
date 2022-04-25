/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react'
export const SettingProvider = createContext()
const SettingContextProvider = (props) => {
   const [settingTime, setSettingTime] = useState({
      pomodoro: 0.1,
      shortBreak: 0.3,
      longBreak: 1,
      longBreakInterval: 1,
   })
   const [platform, setPlatform] = useState(0)
   const [background, setBackground] = useState('rgb(217, 85, 80)')
   const [isActive, setIsActive] = useState('pomodoro')
   const [autoStartBreaks, setAutoStartBreaks] = useState(false)
   const [autoStartPomo, setAutoStartPomo] = useState(false)
   const [pomodoroCount, setPomodoroCount] = useState(1)
   const [ticking, setTicking] = useState(true)
   return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <SettingProvider.Provider
         value={{
            setSettingTime,
            settingTime,
            isActive,
            setIsActive,
            background,
            setBackground,
            autoStartBreaks,
            setAutoStartBreaks,
            autoStartPomo,
            setAutoStartPomo,
            platform,
            setPlatform,
            pomodoroCount,
            setPomodoroCount,
            ticking,
            setTicking,
         }}
      >
         {props.children}
      </SettingProvider.Provider>
   )
}
export default SettingContextProvider
