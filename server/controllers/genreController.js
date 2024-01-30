import db from "../dbConfig.js"

export const getAllGenres = (req, res) => {
	const q = "SELECT * FROM genres"

	db.query(q, (err, data) => {
		if (err) return res.json(err)
		return res.json(data)
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
