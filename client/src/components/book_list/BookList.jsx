import React from "react"
import { Link } from "react-router-dom"
import "./bookList.css"

export default function BookList({ books }) {
	return (
		<ul className="booklist">
			{books.map((book) => (
				<li key={book.id} className="book">
					<BookCover book={book} />
					<span className="title">{book.title}</span>
				</li>
			))}
		</ul>
	)
}

function BookCover({ book }) {
	const serverBaseURL = process.env.REACT_APP_SERVER_URL
	const coverImageURL = `${serverBaseURL}/${book.cover.replace("public/", "")}`
	// removed public from the stored path since its the root for static files in the server

	return (
		<Link to={`/books/${book.id}`}>
			<img
				src={coverImageURL}
				alt={`${book.title}'s cover image`}
				className="coverIMG"
			/>
		</Link>
	)
}
