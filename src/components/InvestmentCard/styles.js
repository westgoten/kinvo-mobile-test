import styled from 'styled-components/native'
import Card from '../Card'

export const Container = styled(Card)`
	margin-bottom: 20px;
	margin-top: ${(props) => (props.isFirstChild ? '20px' : '0px')};
	padding: 18px;
	background-color: ${(props) =>
		props.isActive ? props.theme.primaryColor : '#F7F8F8'};
`

export const Title = styled.Text`
	color: ${(props) => props.theme.primaryTextColor};
	font-weight: bold;
	font-size: 16px;
	font-family: ${(props) => props.theme.primaryFontFamily};
	opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`

export const Subtitle = styled.Text`
	color: ${(props) => props.theme.primaryTextColor};
	font-weight: ${(props) => props.theme.semiBoldFontWeight};
	font-size: 12px;
	font-family: ${(props) => props.theme.primaryFontFamily};
	opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`

export const CardTopRightContainer = styled.View`
	position: absolute;
	top: ${(props) => (props.top ? props.top : '14px')};
	end: ${(props) => (props.end ? props.end : '14px')};
`

export const HorizontalDivider = styled.View`
	height: 1px;
	background-color: ${(props) => props.theme.cardBorderColor};
	margin-top: 15px;
	opacity: 0.7;
`