import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (url) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		axios
			.get(url)
			.then((res) => setData(res.data))
			.catch((err) => setError(err))
			.finally(() => setLoading(false)) // runs regardless
	}, [url])

	return { data, loading, error }
}

export default useFetch
