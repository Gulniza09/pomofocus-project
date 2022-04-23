/* eslint-disable import/no-duplicates */
/* eslint-disable no-alert */
import React, { useContext, useId } from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { SettingProvider } from '../../context/SettingContext'

const TimerContent = ({
   switchContent,
   setTicking,
   minutes,
   seconds,
   ticking,
}) => {
   const { setBackground } = useContext(SettingProvider)
   const options = [
      {
         title: 'Pomodoro',
         background: 'rgb(217, 85, 80)',
      },
      {
         title: 'Short Break',
         background: 'rgb(76, 145, 149)',
      },
      {
         title: 'Long Break',
         background: 'rgb(69, 124, 163)',
      },
   ]
   const id = useId()
   return (
      <>
         <WrapperBtns>
            {options.map((option, index) => {
               return (
                  <Button
                     key={`${id + index}}`}
                     onClick={() => {
                        switchContent(index)
                        setBackground(option.background)
                     }}
                  >
                     {option.title}
                  </Button>
               )
            })}
         </WrapperBtns>
         <TimeTitle>
            {minutes}:
            {`${seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`}`}
         </TimeTitle>
         <TimeToggle>
            <Button
               onClick={() => setTicking((prevState) => !prevState)}
               className="time_start"
            >
               {ticking ? 'START' : 'STOP'}
            </Button>
            {ticking ? (
               ''
            ) : (
               <Button
                  onClick={() =>
                     alert(
                        'Are you sure you want to finish the round early? (The remaining time will not be counted in the report.)'
                     )
                  }
                  className="time_next_toggle"
               >
                  <img
                     src="https://pomofocus.io/icons/next-white3.png"
                     alt=""
                  />
               </Button>
            )}
         </TimeToggle>
      </>
   )
}

const WrapperBtns = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   Button {
      font-size: 16px;
      border: none;
      cursor: pointer;
      background: none;
      box-sizing: border-box;
      color: white;
      padding: 7px 6px;
      margin: 5px;
      border-radius: 4px;
      &:hover {
         background: rgba(153, 153, 153, 0.324);
         opacity: 0.9;
      }
   }
`
const TimeTitle = styled.span`
   font-size: 120px;
   color: white;
   margin-top: 15px;
`
const TimeToggle = styled.div`
   display: flex;
   align-items: center;
   margin-left: 140px;
   width: 150px;
   .time_start {
      width: 200px;
      height: 55px;
      color: red;
      cursor: pointer;
      border-radius: 4px;
      margin-top: 20px;
      box-shadow: rgb(235 235 235) 0px 6px 0px;
      border: none;
      font-size: 22px;
   }
   .time_start:hover {
      opacity: 0.9;
   }
   .time_next_toggle {
      opacity: 0.9;
      cursor: pointer;
      background: none;
      border: none;
      padding: 25px 0 0 15px;
      img {
         width: 22px;
      }
   }
`
export default TimerContent
