// for ul and li elements & react router components

import styled from "styled-components"
import { NavLink, Link } from "react-router-dom"

// vertically aligns & fill parent's height
export const Ul = styled.ul`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	// border: 1px solid orange;
`
// inherit - values will be set on the parent element
export const StyledNavLink = styled(NavLink)`
	display: block;
	color: inherit;
	font-family: inherit;
	font-weight: inherit;
	font-size: inherit;

	&:hover,
	&.active {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
	}
`
