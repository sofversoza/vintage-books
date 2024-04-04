import styles from "./BookCard.module.css"
import { Link } from "react-router-dom"

const BookCard = ({ book }) => {
	const serverBaseURL = process.env.REACT_APP_SERVER_URL
	const coverImageURL = `${serverBaseURL}/${book.cover.replace("public/", "")}`
	// removed public from the stored path since its the root for static files in the server

	return (
		<div className={styles.card}>
			<Link to={`/books/${book.id}`}>
				<img
					src={coverImageURL}
					alt={book.title}
					className={styles.card__cover}
				/>
			</Link>
			<span className={styles.card__title}>{book.title}</span>
			<span className={styles.card__author}>{book.author}</span>
			<span className={styles.card__price}>${book.price}.00</span>
		</div>
	)
}

export default BookCard
