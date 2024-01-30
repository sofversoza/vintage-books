import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import BookCard from "../components/book_card/BookCard"

const Book = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const url = `${process.env.REACT_APP_SERVER_URL}/api/books/${id}`
	const { data: book, loading, error } = useFetch(url)

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
