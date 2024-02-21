import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import BookForm from "../components/book_form/BookForm"

const AddBook = () => {
	const navigate = useNavigate()

	const { data: genres } = useFetch(
		`${process.env.REACT_APP_SERVER_URL}/api/genres`
	)

	const handleSubmit = async (formData) => {
		const url = `${process.env.REACT_APP_SERVER_URL}/api/books`
		const data = new FormData() // creates empty form data obj

		// append book details except genres to form data obj
		Object.keys(formData).forEach((key) => {
			if (key !== "genres") {
				data.append(key, formData[key]) // key: value pair
			}
		})

		// then append genres to form data obj
		formData.genres.forEach((genreID) => {
			data.append("genres[]", genreID)
		})

		// finally send POST req using axios
		try {
			const res = await axios.post(url, data, {
				headers: { "Content-Type": "multipart/form-data" },
			})
			console.log(res.data) // response data created in the server
			navigate(`/books/${res.data.bookID}`) // bookID created in the server
		} catch (err) {
			console.log(err) // handle error
		}
	}

	return (
		<div>
			<h2>Add Book</h2>
			<BookForm mode="add" onSubmit={handleSubmit} genresData={genres || []} />
		</div>
	)
}

export default AddBook
