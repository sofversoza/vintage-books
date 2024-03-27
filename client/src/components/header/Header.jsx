import React, { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import dustylogo from "../../assets/dustylogo.png"
import dustytitle from "../../assets/dustytitle.png"
import "./Header.css"
import useIsActivePath from "../../hooks/useActivePath"

export default function Header() {
	return (
		<header>
			<div className="flex-contents">
				{/* <div className="logo">
					<NavLink to="/">
						<img src={dustylogo} alt="Logo" />
					</NavLink>
				</div> */}

				<div className="title">
					<Link to="/">
						<img src={dustytitle} alt="Logo" />
					</Link>
				</div>

				<div className="header-links"></div>
			</div>

			<MainNavigation />
		</header>
	)
}

function MainNavigation() {
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
		<nav className="header-nav">
			<ul>
				<li>
					<NavLink
						to="/bookstore"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						The Bookstore
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/journal"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						The Journal
					</NavLink>
				</li>
				<li
					className="dropdown-cont"
					onMouseEnter={() => setIsDropdownOpen(true)}
					onMouseLeave={() => setIsDropdownOpen(false)}
				>
					<NavLink to="/about/history" className={aboutClassname}>
						About
					</NavLink>
					{isDropdownOpen && (
						<ul className="about-dropdown">
							{/* transforms routes obj into arrays of [key, val] : iterable with map */}
							{Object.entries(aboutRoutes).map(([routeName, path]) => (
								<li key={routeName}>
									<NavLink
										to={path}
										className={({ isActive }) => (isActive ? "active" : "")}
									>
										{routeName}
									</NavLink>
								</li>
							))}
						</ul>
					)}
				</li>
			</ul>
		</nav>
	)
}
