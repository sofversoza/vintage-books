import express from "express"
import { upload } from "../multerConfig.js"
import {
	getAllBooks,
	getABook,
	addBook,
	editBook,
	deleteBook,
} from "../controllers/bookController.js"

const router = express.Router() // create a router

router.get("/books", getAllBooks) // api/books
router.get("/books/:id", getABook) // api/books/id
router.post("/books", upload.single("cover"), addBook) //api/books
router.put("/books/:id", upload.single("cover"), editBook) // api/books/id
router.delete("/books/:id", deleteBook) // api/books/id

export default router
