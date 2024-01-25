import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import BookCard from "../components/BookCard"

const Book = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const {
		data: book,
		loading,
		error,
	} = useFetch(`http://localhost:8800/books/${id}`)

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div>
			<h2>Book Details</h2>
			<BookCard book={book} />
			<button onClick={() => navigate(`/edit-book/${id}`)}>Edit Book</button>
		</div>
	)
}

export default Book
