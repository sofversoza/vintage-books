/* encapsulates functionality of adjusting the header/nav's custom height property (min-height: 20vh) so that every main page can calculate 100vh - header's height */

import { useEffect } from "react"

const useAdjustHeaderHeight = () => {
	useEffect(() => {
		const adjustHeaderHeight = () => {
			const header = document.querySelector("header")
			const headerHeight = header.offsetHeight // get actual height in px
			document.documentElement.style.setProperty(
				"--header-height",
				`${headerHeight}px`
			)
		}

		adjustHeaderHeight() // adjust once
		window.addEventListener("resize", adjustHeaderHeight) // and on every resize

		// cleanup
		return () => window.removeEventListener("resize", adjustHeaderHeight)
	}, [])
}

export default useAdjustHeaderHeight
