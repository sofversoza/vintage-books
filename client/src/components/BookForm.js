import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const BookForm = ({ mode, bookData }) => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")

	// init form state based on mode
	const [formData, setFormData] = useState({
		title: mode === "edit" ? bookData.title : "",
		desc: mode === "edit" ? bookData.desc : "",
		price: mode === "edit" ? bookData.price : "",
		cover: null, // for new cover uploads
	})

	const navigate = useNavigate()

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleFileChange = (e) => {
		setFormData({ ...formData, cover: e.target.files[0] })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const data = new FormData() // creates new empty FormData object
		data.append("title", formData.title) // append key/value pair
		data.append("desc", formData.desc)
		data.append("price", Number(formData.price) || 0)
		data.append("cover", formData.cover)

		try {
			if (mode === "edit") {
				await axios.put(`http://localhost:8800/books/${bookData.id}`, data)
				navigate(`/books/${bookData.id}`)
			} else {
				const res = await axios.post("http://localhost:8800/books", data, {
					headers: { "Content-Type": "multipart/form-data" },
				})
				navigate(`/books/${res.data.bookID}`) // bookID created in bookController
			}
		} catch (err) {
			setError("An error occured while adding the book")
			console.log(err)
		} finally {
			setLoading(false)
		}
	}

	const onDelete = async (bookID) => {
		try {
			await axios.delete(`http://localhost:8800/books/${bookID}`)
			navigate("/")
		} catch (err) {
			setError("An error occured while deleting the book")
			console.log(err)
		}
	}

	return (
		<div>
			<h4>Book Form Component</h4>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="title"
					placeholder="title"
					value={formData.title}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="desc"
					placeholder="description"
					value={formData.desc}
					onChange={handleInputChange}
				/>
				<input
					type="number"
					name="price"
					placeholder="price"
					value={formData.price}
					onChange={handleInputChange}
				/>
				<input type="file" name="cover" onChange={handleFileChange} />
				{mode === "edit" && bookData.cover && (
					<div>
						<img
							src={bookData.cover}
							alt={bookData.title}
							style={{ width: "60px", height: "120px" }}
						/>
					</div>
				)}

				{loading && <div>Loading...</div>}
				{error && <div>{error.message}</div>}

				<button type="submit" disabled={loading}>
					Add Book
				</button>

				{mode === "edit" && (
					<button type="button" onClick={() => onDelete(bookData.id)}>
						Delete Book
					</button>
				)}
			</form>
		</div>
	)
}

export default BookForm
