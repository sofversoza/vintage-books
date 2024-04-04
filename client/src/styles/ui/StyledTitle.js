import styled from "styled-components"

export const PageTitle = styled.h1`
	font-family: ${({ theme }) => theme.fonts.sans};
	font-size: ${({ theme }) => theme.fontSizes.subheader};
	font-weight: ${({ theme }) => theme.fontWeights.normal};
	text-align: center;
`
