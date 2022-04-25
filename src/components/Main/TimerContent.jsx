/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-alert */
import React, { useContext, useId } from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { SettingProvider } from '../../context/SettingContext'
import useSound from 'use-sound'
import audioStart from '../../assets/audio/startAudio.mp3'
import { options } from '../../utils/constants/general'

const TimerContent = ({
   switchContent,
   setTicking,
   minutes,
   seconds,
   ticking,
   platform,
}) => {
   const { setBackground } = useContext(SettingProvider)
   const [play] = useSound(audioStart)
   console.log(platform)
   const id = useId()
   const startTimer = () => {
      setTicking((prevState) => !prevState)
      play()
   }
   return (
      <>
         <WrapperBtns>
            {options.map((option, index) => {
               return (
                  <ButtonStyled
                     key={`${id + index}}`}
                     onClick={() => {
                        switchContent(index)
                        setBackground(option.background)
                     }}
                     isActive={index === platform}
                  >
                     {option.title}
                  </ButtonStyled>
               )
            })}
         </WrapperBtns>
         <TimeTitle>
            {minutes}:
            {`${seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`}`}
         </TimeTitle>
         <TimeToggle>
            <Button onClick={startTimer} className="time_start">
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
`

const ButtonStyled = styled.button`
   font-size: 16px;
   border: none;
   cursor: pointer;
   background: ${({ isActive }) => (isActive ? '#00000028' : 'none')};
   box-sizing: border-box;
   color: white;
   padding: 7px 6px;
   margin: 5px;
   border-radius: 4px;
   &:hover {
      background: rgba(153, 153, 153, 0.324);
      opacity: 0.9;
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
