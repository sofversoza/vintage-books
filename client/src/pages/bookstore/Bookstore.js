import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import "../../styles/bookstore.css"

export default function Bookstore() {
	return (
		<div className="bookstore">
			<BookstoreNavigation />
			<h1>Bookstore</h1>
			<Outlet />
		</div>
	)
}

function BookstoreNavigation() {
	return (
		<nav className="bookstore-nav">
			<ul>
				<li>
					<NavLink
						to="Bookclub"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Bookclub
					</NavLink>
				</li>
				<li>
					<NavLink
						to="book-inventory"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Book Inventory
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
