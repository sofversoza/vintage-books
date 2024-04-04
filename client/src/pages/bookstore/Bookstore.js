import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import { Nav, NavLinkExtended, UlExtended } from "./BookstoreStyles"

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
		<Nav>
			<UlExtended>
				<li>
					<NavLinkExtended
						to="Bookclub"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Bookclub
					</NavLinkExtended>
				</li>
				<li>
					<NavLinkExtended
						to="book-inventory"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Book Inventory
					</NavLinkExtended>
				</li>
			</UlExtended>
		</Nav>
	)
}
