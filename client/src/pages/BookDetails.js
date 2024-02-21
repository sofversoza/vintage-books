import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import "../styles/bookDetails.css"
import useFetch from "../hooks/useFetch"

export default function BookDetails() {
	const navigate = useNavigate()
	const { id } = useParams()
	const url = `${process.env.REACT_APP_SERVER_URL}/api/books/${id}`
	const { data: book, loading, error } = useFetch(url)

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div className="bookDetails main-page-h">
			<BookCover book={book} />

			<div className="details">
				<BookHeading book={book} />
				<BookDescription book={book} />
				<BookInformation book={book} />
			</div>

			{/* <button onClick={() => navigate(`/edit-book/${id}`)}>Edit Book</button> */}
		</div>
	)
}

function BookCover({ book }) {
	const serverBaseURL = process.env.REACT_APP_SERVER_URL
	const coverImageURL = `${serverBaseURL}/${book.cover.replace("public/", "")}`
	// removed public from the stored path since its the root for static files in the server

	return <img src={coverImageURL} alt={book.title} className="coverIMG" />
}

function BookHeading({ book }) {
	return (
		<div className="heading">
			<h1>{book.title}</h1>
			<span>{book.author}</span>
		</div>
	)
}

function BookDescription({ book }) {
	return (
		<div className="description">
			<h5>Description</h5>
			<p>{book.description}</p>
		</div>
	)
}

function BookInformation({ book }) {
	return (
		<div className="information">
			<h5>Details</h5>
			<div className="flex-group">
				<div className="group one">
					<span id="details-title">This Edition</span>
					<div className="col 1">
						<>
							<span>Publisher</span>
							<p>{book.publisher}</p>
						</>
						<>
							<span>Publication Year</span>
							<p>{book.publication_year}</p>
						</>
						<>
							<span>Format</span>
							<p>Hardcover</p>
						</>
					</div>

					<div className="col 2">
						<>
							<span>Language</span>
							<p>English</p>
						</>
						<>
							<span>Pages</span>
							<p>720</p>
						</>
						<>
							<span>ISBN</span>
							<p>9780385720250</p>
						</>
					</div>
				</div>

				<div className="group two">
					<span id="details-title">First Edition</span>
					<div className="col 1">
						<>
							<span>Publisher</span>
							<p>{book.publisher}</p>
						</>
						<>
							<span>Publication Year</span>
							<p>{book.publication_year}</p>
						</>
						<>
							<span>Original Language</span>
							<p>Russian</p>
						</>
					</div>
				</div>

				<div className="group three">
					<span id="details-title">Genres</span>
					<div className="col genres">
						{book.genres.map((genre) => (
							<p key={genre}>{genre}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
