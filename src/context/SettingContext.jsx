/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react'

export const SettingProvider = createContext()

const SettingContextProvider = (props) => {
   const [settingTime, setSettingTime] = useState({
      pomodoro: 0.2,
      shortBreak: 0.3,
      longBreak: 1,
   })
   const [background, setBackground] = useState('rgb(217, 85, 80)')
   const [isActive, setIsActive] = useState('pomodoro')
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
         }}
      >
         {props.children}
      </SettingProvider.Provider>
   )
}

export default SettingContextProvider
