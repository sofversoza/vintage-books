import styled from "styled-components"

// const getBgColor = (bgColor) => {
// 	switch (bgColor) {
// 		case "light":
// 			return "lightgray"
// 		case "dark":
// 			return "darkgray"
// 		case "primary":
// 			return "#007bff" // Example primary color
// 		default:
// 			return "transparent"
// 	}
// }
// const getFontColor = (fontColor) => {
// 	switch (fontColor) {
// 		case "dark":
// 			return "black"
// 		case "light":
// 			return "white"
// 		case "secondary":
// 			return "#6c757d" // Example secondary color
// 		default:
// 			return "inherit"
// 	}
// }
// const getFlexDirection = (flexDirection) => {
// 	switch (flexDirection) {
// 		case "row":
// 			return "row"
// 		case "column":
// 			return "column"
// 		default:
// 			return "row" // Default flex-direction
// 	}
// }

export const FooterStyled = styled.footer`
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.primary};
`
export const FooterContents = styled.div`
	// border: 2px solid red;
	height: 60%; /* bottom img is taking 40% */
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	overflow: auto;
`
// main left and right sections
export const FlexContainer = styled.div`
	// border: 2px solid orange;
	width: 100%;
	height: 100%;
	display: flex;
	flex: 1; /* equal space for left & right sections */
	flex-direction: column;
`
// smaller sections within left & right sections
export const FlexSections = styled.div`
	// border: 1px solid white;
	display: flex;
	flex: 1; /* equal division of space */
	justify-content: center;
	align-items: center;
`
// children of flex sections
export const FlexChildren = styled.div`
	border: 1px solid white;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	${({ $whitebg, theme }) =>
		$whitebg &&
		`
			color: ${theme.colors.black};
			background-color: ${theme.colors.white};
		`}
`
export const FooterLogo = styled.img`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 80px;
	height: auto;
	margin: 15px;
	padding: 4px;
	border-radius: 1px;
	background-color: white;
	z-index: 100;
`
export const FooterImage = styled.img`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 40%; /* footer content is taking 60% */
	object-fit: cover; /* img covers the area while leeping its aspect ratio */
`
