import React, { useContext } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MainContent from '../components/Main/MainContent'
import MainInfo from '../components/Main/MainInfo'
import styled from 'styled-components'
import { SettingProvider } from '../context/SettingContext'

const MainPage = () => {
   const { background } = useContext(SettingProvider)
   return (
      <>
         <Background background={background}>
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
   transition: background 0.7s;
   width: 100%;
   background-color: ${({ background }) => background || 'red'};
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
