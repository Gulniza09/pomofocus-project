import React from 'react'
import styled from 'styled-components'
const Modal = (props) => {
   return <ModalActive>{props.children}</ModalActive>
}
const ModalActive = styled.div`
   height: 100%;
   width: 100%;
   background-color: rgba(0, 0, 0, 0.4);
   position: fixed;
   top: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
`
export default Modal
