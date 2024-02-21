import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import useFetch from "../hooks/useFetch"
import BookForm from "../components/book_form/BookForm"
import BookFormT from "../components/book_form/BookForm"

const EditBook = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const {
		data: book,
		loading: bookLoading,
		error: bookError,
	} = useFetch(`${process.env.REACT_APP_SERVER_URL}/api/books/${id}`)

	const {
		data: genres,
		loading: genresLoading,
		error: genresError,
	} = useFetch(`${process.env.REACT_APP_SERVER_URL}/api/genres`)

	const handleSubmit = async (formData) => {
		const url = `${process.env.REACT_APP_SERVER_URL}/api/books/${id}`
		const data = new FormData()

		// append book details except genres to form data obj
		Object.keys(formData).forEach((key) => {
			if (key !== "genres") {
				data.append(key, formData[key])
			}
		})

		// then append genres to form data obj
		formData.genres.forEach((genreID) => {
			data.append("genres[]", genreID)
		})

		try {
			const res = await axios.put(url, data, {
				headers: { "Content-Type": "multipart/form-data" },
			})
			console.log(res.data) // response data created in the server
			navigate(`/books/${res.data.bookID}`) // bookID created in the server
		} catch (err) {
			console.log(err)
		}
	}

	const handleDelete = async (bookID) => {
		try {
			await axios.delete(
				`${process.env.REACT_APP_SERVER_URL}/api/books/${bookID}`
			)
			navigate("/")
		} catch (err) {
			console.error("Failed to delete the book:", err)
		}
	}

	if (bookLoading || genresLoading) return <p>Loading...</p>
	if (bookError || genresError) return <p>Error loading data</p>

	return (
		<>
			<div className="title-page">
				<h1>Edit Book</h1>
				<hr />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<BookFormT
					mode="edit"
					onSubmit={handleSubmit}
					onDelete={handleDelete}
					bookData={book}
					genresData={genres}
				/>
			</div>
		</>
	)
}

export default EditBook
