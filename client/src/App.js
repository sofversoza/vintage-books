import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import useAdjustHeaderHeight from "./hooks/useAdjustHeaderHeight.js"

import Header from "./components/header/Header.jsx"
import Home from "./pages/Home.js"
import Footer from "./components/footer/Footer.jsx"
import Journal from "./pages/journal/Journal.js"
import Bookstore from "./pages/bookstore/Bookstore.js"
import Store from "./pages/Store"
import NotFound from "./pages/NotFound.js"

// About subpages
import History from "./pages/about/History.js"
import Services from "./pages/about/Services.js"
import Authors from "./pages/about/Authors.js"
import Events from "./pages/about/Events.js"
import Careers from "./pages/about/Careers.js"
import Contact from "./pages/about/Contact.js"

// Journal subroutes
import Columns from "./pages/journal/Columns.js"
import Articles from "./pages/journal/Articles.js"

// Bookstore subroutes
import Bookclub from "./pages/bookstore/Bookclub.js"
import BookInventory from "./pages/bookstore/BookInventory.js"

import Books from "./pages/Books.js"
import BookDetails from "./pages/BookDetails.js"
import AddBook from "./pages/AddBook.js"
import EditBook from "./pages/EditBook"

const App = () => {
	useAdjustHeaderHeight() // on load and resize

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/journal" element={<Journal />}>
					<Route path="columns" element={<Columns />} />
					<Route path="articles" element={<Articles />} />
				</Route>
				<Route path="/bookstore" element={<Bookstore />}>
					<Route path="bookclub" element={<Bookclub />} />
					<Route path="book-inventory" element={<BookInventory />} />
				</Route>
				<Route path="/about/history" element={<History />} />
				<Route path="/about/services" element={<Services />} />
				<Route path="/about/authors" element={<Authors />} />
				<Route path="/about/events" element={<Events />} />
				<Route path="/about/careers" element={<Careers />} />
				<Route path="/about/contact" element={<Contact />} />

				<Route path="/books" element={<Books />} />
				<Route path="/books/:id" element={<BookDetails />} />
				<Route path="/store" element={<Store />} />
				<Route path="/add-book" element={<AddBook />} />
				<Route path="/edit-book/:id" element={<EditBook />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
