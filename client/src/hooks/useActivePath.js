import { useLocation } from "react-router-dom"

// checks if the current pathname starts with the specified path: basePath/anotherPath
const useIsActivePath = (basePath) => {
	const location = useLocation()
	return location.pathname.startsWith(basePath)
}

export default useIsActivePath
