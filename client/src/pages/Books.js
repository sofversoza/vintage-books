import React from "react"
import { NavLink, useSearchParams } from "react-router-dom"
import BookList from "../components/book_list/BookList"
import useFetch from "../hooks/useFetch"
import { formatLabel } from "../utils/utils"

const Books = () => {
	// const [searchParams, setSearchParams] = useSearchParams()
	// const selectedGenre = searchParams.get("genre")

	// const queryOptions = selectedGenre ? `?genre=${selectedGenre}` : ""

	// const genresUrl = `${process.env.REACT_APP_SERVER_URL}/api/genres`
	// const {
	// 	data: genres,
	// 	loading: genresLoading,
	// 	error: genresError,
	// } = useFetch(genresUrl)

	// const booksUrl = `${process.env.REACT_APP_SERVER_URL}/api/books`
	// const {
	// 	data: books,
	// 	loading: booksLoading,
	// 	error: booksError,
	// } = useFetch(`${booksUrl}${queryOptions}`)

	// if (genresLoading) return <div>Loading genres...</div>
	// if (genresError) return <div>Error loading genres: {genresError.message}</div>

	// const handleGenreClick = (genreName) => {
	// 	setSearchParams(genreName ? { genre: genreName } : {})
	// }

	// const sidebarContent = (
	// 	<ul>
	// 		<li>
	// 			<a
	// 				href="/"
	// 				// call w/o a genre name which clears the genre query param, removing the filter
	// 				onClick={(e) => {
	// 					e.preventDefault()
	// 					handleGenreClick()
	// 				}}
	// 				className={!selectedGenre ? "active" : ""}
	// 			>
	// 				All
	// 			</a>
	// 		</li>
	// 		{genres.map((genre) => {
	// 			const isActive = selectedGenre === genre.name
	// 			return (
	// 				<li key={genre.id}>
	// 					<a
	// 						href={`?genre=${genre.name}`}
	// 						onClick={(e) => {
	// 							e.preventDefault()
	// 							handleGenreClick(genre.name)
	// 						}}
	// 						className={isActive ? "active" : ""}
	// 					>
	// 						{formatLabel(genre.name)} <span>({genre.bookCount})</span>
	// 					</a>
	// 				</li>
	// 			)
	// 		})}
	// 	</ul>
	// )

	return (
		<div className="books">
			{/* <Layout
				title="Book Inventory"
				subtitle="Sort Books by Genres"
				sidebar={sidebarContent}
			>
				{booksLoading ? (
					<div>Loading books...</div>
				) : booksError ? (
					<div>Error loading books: {booksError.message}</div>
				) : (
					<BookList books={books} />
				)}
			</Layout> */}
			Books
		</div>
	)
}

export default Books
