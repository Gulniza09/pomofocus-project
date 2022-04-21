import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MainContent from '../components/Main/MainContent'
import MainInfo from '../components/Main/MainInfo'
import styled from 'styled-components'

const MainPage = () => {
   return (
      <>
         <Background>
            <Content>
               <Header />
               <MainContent />
            </Content>
         </Background>
         <TextInfo>
            <MainInfo />
            <Footer />
         </TextInfo>
      </>
   )
}
const Background = styled.div`
   width: 100%;
   background-color: rgb(217, 85, 80);
   min-height: 680px;
`
const Content = styled.div`
   width: 480px;
   margin: 0 auto;
`
const TextInfo = styled.div`
   width: 620px;
   margin: 0 auto;
`
export default MainPage
