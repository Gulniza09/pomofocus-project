/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import Logo from '../UI/Logo'
import Button from '../UI/Button'
import styled from 'styled-components'
import Modal from '../UI/Modal'
import TimerSetting from './TimerSetting'
import AddReportTime from './AddReportTime'

const Header = () => {
   const [reportShow, setReportShow] = useState(false)
   const [settingTimerShow, setSettingTimerShow] = useState(false)
   return (
      <Headers>
         <Logo />
         <HeaderBtn>
            <Button onClick={() => setReportShow(true)}>
               <img src="https://pomofocus.io/icons/graph-white.png" alt="" />
               Report
            </Button>
            <Button onClick={() => setSettingTimerShow(true)}>
               <img src="https://pomofocus.io/icons/config-white.png" alt="" />
               Setting
            </Button>
            <Button>
               <img src="	https://pomofocus.io/icons/user-white.png" alt="" />
               Login
            </Button>
         </HeaderBtn>
         {reportShow ? (
            <Modal>
               <AddReportTime
                  reportShow={reportShow}
                  setReportShow={setReportShow}
               />
            </Modal>
         ) : (
            ''
         )}
         {settingTimerShow ? (
            <Modal>
               <TimerSetting
                  settingTimerShow={settingTimerShow}
                  setSettingTimerShow={setSettingTimerShow}
               />
            </Modal>
         ) : (
            ''
         )}
      </Headers>
   )
}

const Headers = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   height: 60px;
   align-items: center;
`

const HeaderBtn = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   border-radius: 7px;
   margin-left: 10px;
   Button {
      background: none rgba(255, 255, 255, 0.2);
      border: none;
      margin-left: 10px;
      box-sizing: border-box;
      width: 77px;
      height: 32px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
   }
   Button:hover {
      background: rgba(255, 255, 255, 0.372);
      opacity: 0.9;
   }
   Button img {
      width: 16px;
   }
`

export default Header
