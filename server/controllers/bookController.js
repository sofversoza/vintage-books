import db from "../dbConfig.js"

// join books, books_genres, & genres tables to also show the book's genre(s)
const bookAndGenres =
	"SELECT books.*, GROUP_CONCAT(genres.name SEPARATOR ', ') AS genres" +
	" FROM books" +
	" LEFT JOIN books_genres ON books.id = books_genres.book_id" +
	" LEFT JOIN genres ON books_genres.genre_id = genres.id"

export const getAllBooks = (req, res) => {
	const query = `${bookAndGenres} GROUP BY books.id`

	db.query(query, (err, data) => {
		if (err) return res.json(err)
		return res.json(data)
	})
}

export const getABook = (req, res) => {
	const bookID = req.params.id
	const query = `${bookAndGenres} WHERE books.id = ? GROUP BY books.id`

	db.query(query, [bookID], (err, data) => {
		if (err) {
			res.status(500).send("Server error")
		} else if (data.length === 0) {
			res.status(404).send("Book not found")
		} else {
			res.json(data[0])
		}
	})
}

// this receives the form data and the file path of the uploaded img
export const addBook = (req, res) => {
	const {
		title,
		author,
		publisher,
		publication_year,
		condition,
		description,
		price,
		genres, // array of genre IDs
	} = req.body // extract book details & genres from the request body

	// insert book details
	const cover = req.file ? req.file.path : "" // assuming the file field is named cover
	const q =
		"INSERT INTO books (`title`, `author`, `publisher`, `publication_year`, `condition`, `description`, `cover`, `price`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"

	db.query(
		q,
		[
			title,
			author,
			publisher,
			publication_year,
			condition,
			description,
			cover,
			price,
		],
		(err, data) => {
			if (err) return res.json(err)

			const bookID = data.insertId // retrieve bookID after inserting book

			// insert genres
			const genre_q = "INSERT INTO books_genres (book_id, genre_id) VALUES ?"
			const genre_v = genres.map((genreID) => [bookID, genreID])

			db.query(genre_q, [genre_v], (genreErr, genreData) => {
				if (genreErr) return res.json(err)

				return res.status(201).send({
					message: "Book & Genres added successfully!",
					bookID: bookID,
					genreInsertionRes: genreData,
				})
			})
		}
	)
}

export const editBook = (req, res) => {
	const bookID = req.params.id
	const {
		title,
		author,
		publisher,
		publication_year,
		condition,
		description,
		price,
		genres, // include genres from the request body
	} = req.body
	const cover = req.file ? req.file.path : null

	// condition is a reserved keyword in mysql so it needs to be enclosed in backticks
	let q =
		"UPDATE books SET title = ?, author = ?, publisher = ?, publication_year = ?, `condition` = ?, description = ?, price = ?" +
		(cover ? ", cover = ?" : "") +
		" WHERE id = ?"

	let values = cover
		? [
				title,
				author,
				publisher,
				publication_year,
				condition,
				description,
				price,
				cover,
				bookID,
		  ]
		: [
				title,
				author,
				publisher,
				publication_year,
				condition,
				description,
				price,
				bookID,
		  ]

	// update book details
	db.query(q, values, (err, data) => {
		if (err) return res.json(err)

		// then update genres
		// first, remove existing genres
		const delete_genres_q = "DELETE FROM books_genres WHERE book_id = ?"
		db.query(delete_genres_q, [bookID], (deleteErr, deleteData) => {
			if (deleteErr) return res.json(deleteErr)

			// then, insert new genre associations
			const insert_genres_q =
				"INSERT INTO books_genres (book_id, genre_id) VALUES ?"
			const genreValues = genres.map((genreID) => [bookID, genreID])
			db.query(insert_genres_q, [genreValues], (insertErr, insertData) => {
				if (insertErr) return res.json(insertErr)
				return res.status(201).send({
					message: "Book and genres updated successfully!",
					bookID: bookID,
					genreInsertionRes: insertData,
				})
			})
		})
	})
}

export const deleteBook = (req, res) => {
	const bookID = req.params.id
	const q = "DELETE FROM books WHERE id = ?"

	db.query(q, [bookID, bookID], (err, data) => {
		if (err) return res.status(500).send("Server error")
		return res.status(200).send({ message: "Book deleted successfully" })
	})
}
