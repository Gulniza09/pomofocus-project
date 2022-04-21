import React from 'react'
import styled from 'styled-components'

const Logo = () => {
	return (
		<LogoImg href='/'>
			<img src='https://pomofocus.io/icons/icon-white.png' alt='' />
			Pomofocus
		</LogoImg>
	)
}
const LogoImg = styled.div`
	display: inline-block;
	color: white;
	margin: 0px;
	padding: 10px 0px;
	font-size: 20px;
	text-decoration: none;
	img {
		width: 20px;
		margin-right: 4px;
	}
`
export default Logo
