import db from "../dbConfig.js"
import { deleteFile } from "../utils/deleteFile.js"

// contains a query parameter allowing client to specify a genre for filtering by genres
export const getAllBooks = (req, res) => {
	const genreFilter = req.query.genre // capture the genre query parameter

	// adjust query based on whether a genre filter is provided
	const book_q = genreFilter
		? `SELECT books.* FROM books
		JOIN books_genres ON books.id = books_genres.book_id
		JOIN genres ON books_genres.genre_id = genres.id
		WHERE genres.name = ?`
		: "SELECT books.* FROM books"

	// execute query to get all books or books under the given genre
	db.query(book_q, genreFilter ? [genreFilter] : [], async (err, books) => {
		if (err) return res.json(err)

		// get genres for each book
		try {
			// an array to hold promises for each genre query
			const genrePromises = books.map((book) => {
				const genre_q =
					"SELECT genres.name FROM books_genres JOIN genres ON books_genres.genre_id = genres.id WHERE books_genres.book_id = ?"

				// wrap genre query in a promise
				return new Promise((resolve, reject) => {
					db.query(genre_q, [book.id], (genreErr, genresData) => {
						if (genreErr) {
							reject(genreErr) // reject promise if err
						} else {
							resolve(genresData.map((genre) => genre.name)) // resolve with genre names
						}
					})
				})
			})

			// wait for all genre queries for each book to complete
			const genresResults = await Promise.all(genrePromises)

			// attach genres to each book
			books.forEach((book, i) => {
				book.genres = genresResults[i] // add genres to the corresponding book
			})

			res.json(books) // finally send response of books with their genres
		} catch (genreErr) {
			res.status(500).json(genreErr)
		}
	})
}

export const getABook = (req, res) => {
	const bookID = req.params.id
	const book_q = "SELECT * FROM books WHERE id = ?"

	// get the book
	db.query(book_q, [bookID], async (err, books) => {
		if (err) {
			res.status(500).send("Server error")
		} else if (books.length === 0) {
			res.status(404).send("Book not found")
		} else {
			// get genres associated with the book
			try {
				const book = books[0] // get the book from the books res
				const genre_q =
					"SELECT genres.name FROM books_genres JOIN genres ON books_genres.genre_id = genres.id WHERE books_genres.book_id = ?"

				db.query(genre_q, [bookID], (genreErr, genresData) => {
					if (genreErr) return res.status(500).send("Error fetching genres")

					// map genresData to an arr of names & assign it to the book
					book.genres = genresData.map((genre) => genre.name)
					res.json(book) // finally send the response with the book with its genres
				})
			} catch (genreErr) {
				res.status(500).send("Error processing request")
			}
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
		// genres, // array of genre IDs
	} = req.body // extract book details & genres from the request body

	const genres = req.body.genres

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
	// const existing_cover = req.body.existing_cover
	const cover = req.file ? req.file.path : null

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

	// console.log("existing:", existing_cover)
	// console.log("cover", cover)

	// if a new cover img is uploaded delete the old one
	// if (cover && existing_cover) {
	// 	deleteFile(existing_cover)
	// }

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
			const genreValues = genres?.map((genreID) => [bookID, genreID])
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

/*
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
*/

export const deleteBook = (req, res) => {
	const bookID = req.params.id

	// delete book's cover img first
	db.query("SELECT cover FROM books WHERE id = ?", [bookID], (err, resData) => {
		if (err) return res.status(500).send("Error fetching book's cover")
		if (resData.length > 0) {
			const { cover } = resData[0]
			deleteFile(cover) // cover is the img path
		}
	})

	// then delete any of the book's genres associations (ensures the foreign key constraints dont prevent the deletion of the book)
	const delete_g = "DELETE FROM books_genres WHERE book_id = ?"
	db.query(delete_g, [bookID], (err, resData) => {
		if (err) return res.status(500).send("Error deleting book genres")

		// finally delete the book
		const delete_b = "DELETE FROM books WHERE id = ?"
		db.query(delete_b, [bookID], (err, resData) => {
			if (err) return res.status(500).send("Error deleting the book")
			res.send({ message: "Book and its genres deleted successfully" })
		})
	})
}
