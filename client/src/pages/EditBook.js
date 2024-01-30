import React, { useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import BookForm from "../components/book_form/BookForm"

const EditBook = () => {
	const { id } = useParams()
	const url = `${process.env.REACT_APP_SERVER_URL}/api/books/${id}`
	const { data, loading, error } = useFetch(url)

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div>
			<h1>Edit Book</h1>
			<BookForm bookData={data} isEditMode={true} />
		</div>
	)
}

export default EditBook
