import React from "react"
import { Link } from "react-router-dom"
import { HeaderContainer, FlexContents, TitleImage } from "./HeaderStyles"
import dustylogo from "../../assets/dustylogo.png"
import dustytitle from "../../assets/dustytitle.png"
import HeaderNavigation from "./HeaderNavigation"

export default function Header() {
	return (
		<HeaderContainer>
			<FlexContents>
				<div>
					<Link to="/">
						{/* <TitleImage src={dustytitle} alt="Logo" /> */}
						Dusty Depot
					</Link>
				</div>
			</FlexContents>

			<HeaderNavigation />
		</HeaderContainer>
	)
}
