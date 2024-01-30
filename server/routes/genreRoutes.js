import express from "express"
import { getAllGenres, addGenre } from "../controllers/genreController.js"

const router = express.Router()

router.get("/genres", getAllGenres)
router.get("/genres", addGenre)

export default router
