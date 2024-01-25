import React from "react"
import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const BookList = () => {
	const { data, loading, error } = useFetch("http://localhost:8800/books")

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div>
			<h1>Book List</h1>
			<ul>
				{data.map((d) => (
					<li key={d.id}>
						<Link to={`/books/${d.id}`}>{d.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default BookList
