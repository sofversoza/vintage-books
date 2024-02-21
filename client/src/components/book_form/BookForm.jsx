import React, { useState, useEffect } from "react"
import "./BookForm.css"
import Select from "react-select"
import makeAnimated from "react-select/animated"
import { formatLabel } from "../../utils/utils"
import placeholder from "../../assets/placeholder.png"

const BookForm = ({ mode, onSubmit, onDelete, bookData, genresData }) => {
	const initialState = {
		title: "",
		author: "",
		publisher: "",
		publication_year: "",
		condition: "",
		description: "",
		price: "",
		cover: null,
		genres: [],
	}
	const [formData, setFormData] = useState(initialState)
	const [selectedFile, setSelectedFile] = useState(null)
	const animatedComponents = makeAnimated()

	const serverBaseURL = process.env.REACT_APP_SERVER_URL
	const coverImageURL = `${serverBaseURL}/${bookData?.cover.replace(
		"public/",
		""
	)}`

	// transform genresData to match react-select's options format
	// { value: "genreID", label: "genreName" } pairs
	const genreOptions = genresData.map((genre) => ({
		value: genre.id,
		label: genre.name,
	}))

	// filtering genreOptions against formData.genres for prepopulating genres on edit mode
	// or mark each selected genre(s) as selected in react-select
	const selectedGenres = genreOptions.filter((option) =>
		formData.genres.includes(option.value)
	)

	// for loading bookData on edit mode
	useEffect(() => {
		if (mode === "edit" && bookData) {
			const preselectedGenres = genresData
				.filter((genre) => bookData.genres.includes(genre.name))
				.map((genre) => ({ value: genre.id, label: genre.name }))

			setFormData({
				...bookData,
				genres: preselectedGenres.map((genre) => genre.value),
			})
		}
	}, [mode, bookData, genresData])

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleGenreChange = (selectedOptions) => {
		const selectedGenres = selectedOptions.map((option) => option.value)
		setFormData((prevFormData) => ({
			...prevFormData,
			genres: selectedGenres,
		}))
	}

	const handleFileChange = (e) => {
		setSelectedFile(URL.createObjectURL(e.target.files[0])) // to show img preview
		setFormData({ ...formData, cover: e.target.files[0] })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(formData)
	}

	const handleDelete = () => {
		onDelete(bookData.id)
	}

	return (
		<div className="bookform-cont">
			<form onSubmit={handleSubmit}>
				<div
					className="cover-preview"
					onClick={() => document.getElementById("fileInput").click()}
				>
					{selectedFile ? (
						<img src={selectedFile} alt="Cover Preview" />
					) : (
						<div>
							{bookData?.cover ? (
								<img src={coverImageURL} alt="Cover Preview" />
							) : (
								<img src={placeholder} alt="Cover Placeholder" />
							)}
						</div>
					)}
					{mode === "add" ? (
						<span>Click placeholder image to choose file</span>
					) : (
						<span>Click on the image to change it</span>
					)}
					<input
						type="file"
						id="fileInput"
						name="cover"
						onChange={handleFileChange}
						style={{ display: "none" }}
					/>
				</div>

				<div className="inputs">
					{/* iterate over initialState keys to create inputs */}
					<div className="flex">
						{Object.keys(initialState).map((key) => {
							if (key === "title" || key === "author") {
								return (
									<label key={key} htmlFor={key}>
										<span>{formatLabel(key)}</span>
										<input
											id={key}
											name={key}
											value={formData[key]}
											onChange={handleChange}
										/>
									</label>
								)
							}
							return null
						})}
					</div>

					<div className="flex">
						{Object.keys(initialState).map((key) => {
							if (key === "publisher" || key === "publication_year") {
								return (
									<label key={key} htmlFor={key}>
										<span>{formatLabel(key)}</span>
										<input
											id={key}
											name={key}
											value={formData[key]}
											onChange={handleChange}
										/>
									</label>
								)
							}
							return null
						})}
					</div>

					<div className="flex">
						{Object.keys(initialState).map((key) => {
							if (key === "condition" || key === "price") {
								return (
									<label key={key} htmlFor={key}>
										<span>{formatLabel(key)}</span>
										<input
											id={key}
											name={key}
											value={formData[key]}
											onChange={handleChange}
										/>
									</label>
								)
							}
							return null
						})}
					</div>

					{Object.keys(initialState).map((key) => {
						if (key === "description") {
							return (
								<label key={key} htmlFor={key}>
									<span>{formatLabel(key)}</span>
									<textarea
										id={key}
										name={key}
										value={formData[key]}
										onChange={handleChange}
									></textarea>
								</label>
							)
						}
						return null
					})}

					{/* genres selection using react-select */}
					<label htmlFor="genre">
						<span style={{ display: "block", marginBottom: "5px" }}>Genre</span>
						<Select
							id="genre"
							components={animatedComponents}
							isMulti
							options={genreOptions} // use mapped genresData
							value={selectedGenres}
							onChange={handleGenreChange}
							closeMenuOnSelect={false}
						/>
					</label>

					<div className="buttons">
						{mode === "add" && <button type="submit">Add Book</button>}
						{mode === "edit" && (
							<>
								<button type="submit">Update Book</button>
								<button type="button" onClick={handleDelete}>
									Delete Book
								</button>
							</>
						)}
					</div>
				</div>
			</form>
		</div>
	)
}

export default BookForm
