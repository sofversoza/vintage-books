import React from "react"
import dustyimg from "../../assets/images/dustyd2.jpg"
import dustyimg2 from "../../assets/images/dd.jpg"
import dustylogo from "../../assets/dustylogo.png"
import {
	FooterStyled,
	FooterImage,
	FooterLogo,
	FooterContents,
	FlexContainer,
	FlexSections,
	FlexChildren,
} from "./FooterStyles"

export default function Footer() {
	return (
		<FooterStyled>
			<FooterContents>
				<FlexContainer $left>
					<FlexSections>
						<FlexChildren $whitebg>top left 1</FlexChildren>
						<FlexChildren>top left 2</FlexChildren>
					</FlexSections>

					<FlexSections>
						<FlexChildren>bottom left 1</FlexChildren>
						<FlexChildren>bottom left 2</FlexChildren>
					</FlexSections>
				</FlexContainer>

				<FlexContainer $right>
					<FlexSections>
						<FlexChildren>top right 1</FlexChildren>
						<FlexChildren>top right 2</FlexChildren>
					</FlexSections>

					<FlexSections>
						<FlexChildren>bottom right 1</FlexChildren>
						<FlexChildren $whitebg>bottom right 2</FlexChildren>
					</FlexSections>
				</FlexContainer>
			</FooterContents>

			<FooterImage src={dustyimg2} alt="Dusty Depot Bookstore"></FooterImage>
		</FooterStyled>
	)
}
