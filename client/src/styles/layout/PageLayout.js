import styled from "styled-components"

export const PageWrapper = styled.div`
	// border: 1px solid blue;
	max-width: 1440px;
	padding: 50px 0;
	margin: 0 auto;
	min-height: calc(100vh - (${({ theme }) => theme.heights.header}));
`
export const PageFlexWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid red;
`

export const PageDivider = styled.hr`
	width: 100%;
	border-width: 0.5px;
	border-color: ${({ theme }) => theme.colors.grayPalette[100]};
	border-style: solid;
`
