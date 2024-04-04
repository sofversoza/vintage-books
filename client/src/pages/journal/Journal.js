import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import { PageTitle } from "../../styles/ui/StyledTitle"
import { FlexWrapper } from "../../styles/layout/Wrapper"
import { PageWrapper, PageFlexWrapper } from "../../styles/layout/PageLayout"
import {
	Nav,
	NavLinkExtended,
	UlExtended,
	PageTitleExtended,
} from "./JournalStyles"

export default function Journal() {
	return (
		<PageWrapper>
			<PageFlexWrapper>
				<PageTitleExtended>The Journal</PageTitleExtended>
				<JournalNavigation />
			</PageFlexWrapper>
			<Outlet />
		</PageWrapper>
	)
}

function JournalNavigation() {
	return (
		<Nav>
			<UlExtended>
				<li>
					<NavLinkExtended
						to="columns"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Columns
					</NavLinkExtended>
				</li>
				<li>
					<NavLinkExtended
						to="articles"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Articles
					</NavLinkExtended>
				</li>
			</UlExtended>
		</Nav>
	)
}
