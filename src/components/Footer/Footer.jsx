/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
const Footer = () => {
   return (
      <WrapperFooter>
         <FooterLink>
            <a href="/home">HOME</a>
            <a>PRIVACY</a>
            <a>CONTACT</a>
            <a>SIMPLE PAGE</a>
         </FooterLink>
         <FooterImgLink>
            <img src="https://pomofocus.io/icons/facebook.png" alt="" />
            <img src="https://pomofocus.io/icons/twitter.png" alt="" />
            <img
               src="	https://pomofocus.io/icons/stripe-climate-badge.png"
               alt=""
            />
         </FooterImgLink>
         <p>Made with 3 by Yuya Uzu</p>
         <h6>©Pomofocus 2022. All Rights Reserved.</h6>
      </WrapperFooter>
   )
}
const WrapperFooter = styled.div`
   margin: 0 auto;
   padding-top: 30px;
   border-top: 2px solid #efefef;
   height: 197px;
   max-width: 480px;

   p,
   h6 {
      text-align: center;
      padding: 7px;
      color: #999;
   }
`
const FooterLink = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   a {
      text-decoration: none;
      color: gray;
   }
`
const FooterImgLink = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 20px;
   margin: 19px;
   img {
      background-color: #999;
      width: 40px;
      height: 40px;
      border-radius: 100px;
      padding: 6px;
      margin: 0px 6px;
   }
`
export default Footer
