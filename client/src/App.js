import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.js"
import BookDetails from "./pages/BookDetails.js"
import AddBook from "./pages/AddBook.js"
import EditBook from "./pages/EditBook"
import NotFound from "./pages/NotFound.js"

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/add-book" element={<AddBook />} />
				<Route path="/books/:id" element={<BookDetails />} />
				<Route path="/edit-book/:id" element={<EditBook />} />
			</Routes>
		</Router>
	)
}

export default App
