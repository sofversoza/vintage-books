import React from "react"
import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	const setNavLinkClass = ({ isActive }) => {
		return isActive
			? `${styles.navbar__link} ${styles.navbar__link_active}`
			: styles.navbar__link
	}

	return (
		<nav className={styles.navbar}>
			<span className={styles.navbar__logo}>Logo</span>
			<div className={styles.navbar__links}>
				<NavLink to="/" className={setNavLinkClass}>
					Home
				</NavLink>
				<NavLink to="/add-book" className={setNavLinkClass}>
					Add Book
				</NavLink>
				<NavLink to="/edit-book" className={setNavLinkClass}>
					Edit Book
				</NavLink>
			</div>
		</nav>
	)
}

export default Navbar
