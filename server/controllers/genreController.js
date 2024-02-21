import db from "../dbConfig.js"

export const getAllGenres = (req, res) => {
	// count the number of books in each genre
	const q = `
		SELECT genres.id, genres.name, COUNT(books_genres.book_id) AS bookCount
		FROM genres
		LEFT JOIN books_genres ON genres.id = books_genres.genre_id
		GROUP BY genres.id
	`

	db.query(q, (err, data) => {
		if (err) return res.json(err)
		return res.json(
			data.map((genre) => ({
				...genre,
				bookCount: parseInt(genre.bookCount), // ensure bookCount is an integer
			}))
		)
	})
}

export const addGenre = (req, res) => {
	const { name } = req.body
	const q = "INSERT INTO genres (name) VALUES (?)"

	db.query(q, [name], (err, data) => {
		if (err) return res.json(err)
		return res
			.status(res.statusCode)
			.send({ message: "Genre added successfully", genreID: data.insertId })
	})
}
