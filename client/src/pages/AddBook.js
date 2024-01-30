import React, { useState } from "react"
import axios from "axios"
import BookForm from "../components/book_form/BookForm"

const AddBook = () => {
	return (
		<div>
			<h2>Add Book</h2>
			<BookForm />
		</div>
	)
}

export default AddBook
