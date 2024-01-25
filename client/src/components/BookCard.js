const BookCard = ({ book }) => {
	const serverBaseURL = "http://localhost:8800"
	const coverImageURL = `${serverBaseURL}/${book.cover.replace("public/", "")}`
	// removed public from the stored path since its the root for static files in the server

	return (
		<div>
			<img
				src={coverImageURL}
				alt={book.title}
				style={{ width: "150px", height: "220px" }}
			/>
			<h4>Title: {book.title}</h4>
			<p>Desc: {book.desc}</p>
			<span>Price: ${book.price}.00</span>
		</div>
	)
}

export default BookCard
