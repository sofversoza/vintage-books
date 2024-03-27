import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import "../../styles/journal.css"

export default function Journal() {
	return (
		<div className="journal">
			<JournalNavigation />
			<h1>Journal Page</h1>
			<Outlet />
		</div>
	)
}

function JournalNavigation() {
	return (
		<nav className="journal-nav">
			<ul>
				<li>
					<NavLink
						to="columns"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Columns
					</NavLink>
				</li>
				<li>
					<NavLink
						to="articles"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Articles
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
