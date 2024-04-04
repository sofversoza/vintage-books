import styled from "styled-components"
import { StyledNavLink } from "../../styles/elements/Lists"

export const HeaderContainer = styled.header`
	margin: 0 auto;
	// max-width: 1200px;
	height: ${({ theme }) => theme.heights.header};
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`
export const FlexContents = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const TitleImage = styled.img`
	padding: 10px 10px 0 10px;
	width: 500px;
`
// Navigation
export const Nav = styled.nav`
	width: 100%;
	font-family: ${({ theme }) => theme.fonts.info};
	font-size: ${({ theme }) => theme.fontSizes.xsm};
	font-weight: ${({ theme }) => theme.fontWeights.semibold};
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
`
export const NavLinkExtended = styled(StyledNavLink)`
	text-transform: uppercase;
	padding: 7px 0;

	// extended w props to change dropdown link's color
	/* color: ${({ theme, dropdownlink }) =>
		dropdownlink ? theme.colors.white : theme.colors.black};
	*/

	&:hover,
	&.active {
		background-color: ${({ theme }) => theme.colors.white};
		color: ${({ theme }) => theme.colors.black};
	}
`
export const Li = styled.li`
	flex: 1;
	position: relative; /* About li is a dropdown menu */
	// height: inherit;

	&:hover div {
		display: block;
	}
`
export const Dropdown = styled.div`
	display: none;
	width: 100%;
	height: fit-content;
	position: absolute;
	top: 100%;
	left: 0;
	background-color: ${({ theme }) => theme.colors.primary};
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
`
export const DropdownItem = styled(Li)`
	display: block;
`
