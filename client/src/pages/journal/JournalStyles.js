import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { PageTitle } from "../../styles/ui/StyledTitle"
import { Ul, StyledNavLink } from "../../styles/elements/Lists"

export const PageTitleExtended = styled(PageTitle)`
	width: 50%;
	border: 1px solid yellow;
`
// Navigation
export const Nav = styled.nav`
	border: 1px solid red;
	width: 50%;
	padding: 20px 0;
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
