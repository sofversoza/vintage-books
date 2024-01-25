import React, { useState } from "react"
import axios from "axios"
import BookForm from "../components/BookForm"

const AddBook = () => {
	return (
		<div>
			<h2>Add Book</h2>
			<BookForm mode="create" />
		</div>
	)
}

export default AddBook
