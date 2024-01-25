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

router.get("/books", getAllBooks)
router.get("/:id", getABook)
router.post("/", upload.single("cover"), addBook)
router.put("/:id", upload.single("cover"), editBook)
router.delete("/:id", deleteBook)

export default router
