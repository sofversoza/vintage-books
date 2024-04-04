import React, { useState } from "react"
import useIsActivePath from "../../hooks/useActivePath"
import { Ul } from "../../styles/elements/Lists"
import {
	NavLinkExtended,
	Nav,
	Li,
	Dropdown,
	DropdownItem,
} from "./HeaderStyles"

export default function HeaderNavigation() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const isAboutActive = useIsActivePath("/about")
	const aboutClassname = isAboutActive || isDropdownOpen ? "active" : ""

	const aboutRoutes = {
		History: "/about/history",
		Services: "/about/services",
		Authors: "/about/authors",
		Events: "/about/events",
		Careers: "/about/careers",
		Contact: "/about/contact",
	}

	return (
		<Nav>
			<Ul>
				<Li>
					<NavLinkExtended
						to="/bookstore"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						The Bookstore
					</NavLinkExtended>
				</Li>
				<Li>
					<NavLinkExtended
						to="/journal"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						The Journal
					</NavLinkExtended>
				</Li>
				<Li
					onMouseEnter={() => setIsDropdownOpen(true)}
					onMouseLeave={() => setIsDropdownOpen(false)}
				>
					<NavLinkExtended
						to="/about/history"
						className={aboutClassname}
						dropdownparent="true"
					>
						About
					</NavLinkExtended>
					{isDropdownOpen && (
						<Ul>
							<Dropdown>
								{Object.entries(aboutRoutes).map(([routeName, path]) => (
									<DropdownItem key={routeName}>
										<NavLinkExtended
											to={path}
											className={({ isActive }) => (isActive ? "active" : "")}
											dropdownlink="true" // prop for indication as a dropdown item/link
										>
											{routeName}
										</NavLinkExtended>
									</DropdownItem>
								))}
							</Dropdown>
						</Ul>
					)}
				</Li>
			</Ul>
		</Nav>
	)
}
