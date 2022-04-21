import React from 'react'
import styled from 'styled-components'
const AddReportTime = ({ setReportShow }) => {
   return (
      <div onClick={() => setReportShow(false)}>
         <SecondModalStyle onClick={(e) => e.stopPropagation()}>
            <ReportLogo>
               <img
                  src="	https://pomofocus.io/icons/remove-black-sm.png"
                  alt=""
               />
            </ReportLogo>
            <div>
               <button>Summary</button>
               <button>Detail</button>
               <button>Ranking</button>
            </div>
         </SecondModalStyle>
      </div>
   )
}
const SecondModalStyle = styled.div`
   padding: 20px;
   border-radius: 12px;
   background-color: #e3cfcf;
   max-width: 600px;
   width: 620px;
   margin: auto;
   height: 602px;
   display: flex;
   justify-content: center;
   align-items: center;
`
const ReportLogo = styled.div`
   img {
      position: absolute;
      top: 20px;
      right: 24px;
      cursor: pointer;
      width: 17px;
      opacity: 0.3;
      z-index: 2147483647;
   }
`
export default AddReportTime
