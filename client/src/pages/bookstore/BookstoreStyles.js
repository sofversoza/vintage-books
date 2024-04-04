import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Ul, StyledNavLink } from "../../styles/elements/Lists"

// Navigation
export const Nav = styled.nav`
	width: 100%;
	padding: 20px 0;
	min-height: 2vh;
	color: ${({ theme }) => theme.colors.black};
	background-color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.sans};
	font-weight: ${({ theme }) => theme.fontWeights.semibold};
	font-size: ${({ theme }) => theme.fontSizes.info};
`
export const NavLinkExtended = styled(StyledNavLink)`
	&:hover,
	&.active {
		color: ${({ theme }) => theme.colors.primary};
		background-color: inherit;
		text-decoration: underline;
	}
`
export const UlExtended = styled(Ul)`
	justify-content: center;
	gap: 30px;
`
