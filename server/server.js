import express from "express"
import cors from "cors"
import bookRoutes from "./routes/bookRoutes.js"
import genreRoutes from "./routes/genreRoutes.js"

const PORT = process.env.PORT || 3000
const app = express()

// middleware; for parsing application/json
app.use(express.json())

// serve static files in the public directory
// allows files in public directory to be accessible via HTTP/url
// to be able to access images from server to the client for rendering
app.use(express.static("public"))

// middleware; allows client to make http requests
app.use(cors())

// book & genre routes
app.use("/api", bookRoutes)
app.use("/api", genreRoutes)

// api req for backend home
app.get("/", (req, res) => {
	res.send("hello from the backend server! :)")
})

// run server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}! :)`)
})
