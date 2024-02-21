export const formatLabel = (key) => {
	return (
		key
			.split("_") // split the str at underscores
			// capitalize the first letter of each word
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ") // join the words back together with spaces
	)
}
