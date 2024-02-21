import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (url, queryOptions = {}) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		// Serialize queryOptions to string
		const queryString = Object.entries(queryOptions)
			.map(
				([key, value]) =>
					`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
			)
			.join("&")

		const fetchUrl = queryString ? `${url}?${queryString}` : url

		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await axios.get(fetchUrl)
				setData(response.data)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [url, JSON.stringify(queryOptions)]) // Use JSON.stringify for a stable dependency check

	return { data, loading, error }
}

export default useFetch
