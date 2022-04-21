/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import styled from 'styled-components'

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
      <>
         <H3>Time (minutes)</H3>
         <AddTime>
            <AddTimeInput>
               <label>Pomodoro</label>
               <br />
               <input
                  type="number"
                  name="pomodoro"
                  value={settingTime.pomodoro}
                  onChange={inputChangeHandler}
               />
            </AddTimeInput>
            <AddTimeInput>
               <label htmlFor="">Short Break</label>
               <input
                  type="number"
                  name="shortBreak"
                  value={settingTime.shortBreak}
                  onChange={inputChangeHandler}
               />
            </AddTimeInput>
            <AddTimeInput>
               <label htmlFor="">Long Break</label>
               <input
                  type="number"
                  name="longBreak"
                  value={settingTime.longBreak}
                  onChange={inputChangeHandler}
               />
            </AddTimeInput>
         </AddTime>
      </>
   )
}
const H3 = styled.h3`
   display: flex;
`
const AddTime = styled.div`
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid rgba(182, 165, 166, 0.2);
   padding: 20px 0px;
   label {
      font-size: 14px;
      color: rgb(85, 85, 85);
      font-weight: bold;
      margin-bottom: 4px;
   }
   input {
      border-radius: 4px;
      background-color: rgb(239, 239, 239);
      font-size: 16px;
      padding: 10px;
      box-shadow: none;
      border: none;
      color: rgb(85, 85, 85);
      width: 100%;
      box-sizing: border-box;
   }
`

const AddTimeInput = styled.div`
   width: 98px;
`

export default InputSetting
