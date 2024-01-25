import db from "../dbConfig.js"

export const getAllBooks = (req, res) => {
	const q = "SELECT * FROM books"

	db.query(q, (err, data) => {
		if (err) return res.json(err)
		return res.json(data)
	})
}

export const getABook = (req, res) => {
	const bookID = req.params.id
	const q = "SELECT * FROM books WHERE id = ?"

	db.query(q, [bookID], (err, data) => {
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
	const { title, desc, price } = req.body
	const cover = req.file ? req.file.path : "" // assuming the file field is named cover
	const q =
		"INSERT INTO books (`title`, `desc`, `cover`, `price`) VALUES (?, ?, ?, ?)"

	db.query(q, [title, desc, cover, price], (err, data) => {
		if (err) return res.json(err)
		return res
			.status(201)
			.send({ message: "Book added successfully!", bookID: data.insertId })
	})
}

export const editBook = (req, res) => {
	const bookID = req.params.id
	const { title, desc, price } = req.body
	const cover = req.file ? req.file.path : null

	let q =
		"UPDATE books SET title = ?, desc = ?, price = ?" +
		(cover ? ", cover = ?" : "") +
		" WHERE id = ?"

	let values = cover
		? [title, desc, price, cover, bookID]
		: [title, desc, price, bookID]

	db.query(q, values, (err, data) => {
		if (err) return res.json(err)
		return res.status(201).send({ message: "Book updated successfully!" })
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
