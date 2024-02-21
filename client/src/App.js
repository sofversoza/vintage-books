import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header.jsx"
import Home from "./pages/Home.js"
import Books from "./pages/Books.js"
import About from "./pages/About.js"
import Journal from "./pages/Journal"
import BookClub from "./pages/BookClub.js"
import Store from "./pages/Store"
import BookDetails from "./pages/BookDetails.js"
import AddBook from "./pages/AddBook.js"
import EditBook from "./pages/EditBook"
import Contact from "./pages/Contact.js"
import NotFound from "./pages/NotFound.js"

import useAdjustHeaderHeight from "./hooks/useAdjustHeaderHeight.js"

const App = () => {
	useAdjustHeaderHeight() // on load and resize

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/books" element={<Books />} />
				<Route path="/books/:id" element={<BookDetails />} />
				<Route path="/journal" element={<Journal />} />
				<Route path="/store" element={<Store />} />
				<Route path="/book-club" element={<BookClub />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/add-book" element={<AddBook />} />
				<Route path="/edit-book/:id" element={<EditBook />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default App
