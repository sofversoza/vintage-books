import React from "react"
import "./layout.css"

const Layout = ({ sidebar, title, subtitle, children }) => {
	return (
		<div className="layout">
			<div className="sidebar">
				<div className="heading">
					<h1>{title}</h1>
					<p>{subtitle}</p>
				</div>
				<div className="content">{sidebar}</div>
			</div>
			<div className="main-content">{children}</div>
		</div>
	)
}

export default Layout
