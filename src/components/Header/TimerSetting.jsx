/* eslint-disable react/jsx-no-undef */
import InputSetting from './InputSetting'

import styled from 'styled-components'

const TimerSetting = ({ setSettingTimerShow }) => {
   return (
      <TimerSettingContent>
         <SettingHeader>
            <h1>Timer Setting</h1>
            <button onClick={() => setSettingTimerShow(false)}>
               <img
                  src="https://pomofocus.io/icons/remove-black-sm.png"
                  alt=""
               />
            </button>
         </SettingHeader>

         <InputSetting />
         <AutoQuetions>
            <h3>Auto start Breaks?</h3>
            <CheckBoxSwitch>
               <input type="checkbox" />
               <span className="slider"></span>
            </CheckBoxSwitch>
         </AutoQuetions>
         <AutoQuetions>
            <h3>Auto start Pomodoros?</h3>
            <CheckBoxSwitch>
               <input type="checkbox" />
               <span className="slider"></span>
            </CheckBoxSwitch>
         </AutoQuetions>
         <TimeInterval>
            <h3>Long Break interval</h3>
            <input type="number" />
         </TimeInterval>
         <ButtonOk>OK</ButtonOk>
      </TimerSettingContent>
   )
}

const TimerSettingContent = styled.div`
   padding: 20px;
   border-radius: 12px;
   background-color: #e3cfcf;
   max-width: 600px;
   width: 400px;
   margin: auto;
   height: 500px;
`
const SettingHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 30px;
   color: #999;
   border-bottom: 1px solid rgba(182, 165, 166, 0.2);
   padding: 20px 0px;
   button {
      background: none;
      border: none;
   }
   img {
      color: rgb(129, 124, 124);
      width: 17px;
      height: 17px;
   }
`
const AutoQuetions = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
   margin-top: 10px;
   color: rgb(85, 85, 85);
   border-bottom: 1px solid rgba(182, 165, 166, 0.2);
   padding: 20px 0px;
`
const CheckBoxSwitch = styled.label`
   font-size: 17px;
   position: relative;
   display: inline-block;
   width: 3.5em;
   height: 2em;
   input {
      opacity: 0;
      width: 0;
      height: 0;
   }
   .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: 0.4s;
      border-radius: 30px;
   }

   .slider:before {
      position: absolute;
      content: '';
      height: 1.4em;
      width: 1.4em;
      border-radius: 20px;
      left: 0.3em;
      bottom: 0.3em;
      background-color: white;
      transition: 0.4s;
   }

   input:checked + .slider {
      background-color: rgb(0, 221, 80);
   }

   input:focus + .slider {
      box-shadow: 0 0 1px rgb(0, 221, 80);
   }

   input:checked + .slider:before {
      transform: translateX(1.5em);
   }
`

const TimeInterval = styled.div`
   display: flex;
   color: rgb(85, 85, 85);
   justify-content: space-between;
   border-bottom: 1px solid rgba(182, 165, 166, 0.2);
   padding: 20px 0px;
   input {
      width: 98px;
      border-radius: 4px;
      background-color: rgb(239, 239, 239);
      font-size: 16px;
      padding: 10px;
      box-shadow: none;
      border: none;
      color: #555555;
      box-sizing: border-box;
   }
`
const ButtonOk = styled.button`
   color: white;
   opacity: 0.9;
   font-size: 14px;
   padding: 8px 12px;
   min-width: 70px;
   cursor: pointer;
   background-color: rgb(34, 34, 34);
   border: 2px solid rgb(34, 34, 34);
   border-radius: 8px;
   text-align: center;
   display: flex;
   margin: 15px 0 0 290px;
`
export default TimerSetting
