import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
	const routes = {
		Books: "/books",
		"Book Club": "/book-club",
		Journal: "/journal",
		Store: "/store",
		"About Us": "/about",
		// Contact: "/contact",
	}

	return (
		<header>
			<div className="logo">
				<h1>
					<NavLink to="/">Dusty Depot</NavLink>
				</h1>
				<div className="subheading">
					<span>Vintage Bookstore</span>
					<span>Literary Collective</span>
				</div>
			</div>
			<nav>
				<ul>
					{/* Object.entries() transforms routes obj into arrays of [key, val] pairs making it iterable with map */}
					{Object.entries(routes).map(([link_name, path]) => (
						<li key={link_name}>
							<NavLink
								to={path}
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								{link_name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
