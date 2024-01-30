import React from "react"
import styles from "./BookList.module.css"
import useFetch from "../../hooks/useFetch"
import BookCard from "../book_card/BookCard"

const BookList = () => {
	const url = `${process.env.REACT_APP_SERVER_URL}/api/books`
	const { data: books, loading, error } = useFetch(url)

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div>
			<h3>Book List</h3>
			<ul className={styles.booklist}>
				{books.map((book) => (
					<li key={book.id}>
						<BookCard book={book} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default BookList
