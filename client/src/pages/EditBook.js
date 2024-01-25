import React, { useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import BookForm from "../components/BookForm"

const EditBook = () => {
	const { id } = useParams()
	const { data, loading, error } = useFetch(`http://localhost:8800/books/${id}`)

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div>
			<h1>Edit Book</h1>
			<BookForm mode="edit" bookData={data} />
		</div>
	)
}

export default EditBook
