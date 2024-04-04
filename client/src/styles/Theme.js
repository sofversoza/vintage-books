// theme object is passed into the ThemeProvider
// basically equivalent to css custom properties in :root
export const theme = {
	fonts: {
		primary: "freight-big-pro, serif", // 400, 500
		info: "pragmatica-extended, sans-serif", // 400, 500, 700
		logo: "neue-haas-grotesk-display, sans-serif", // 500, 600
		sans: "work-sans, sans-serif", // 300, 400
	},
	fontWeights: {
		light: 300,
		normal: 400, // change to regular if 300 stays
		semibold: 500,
		bold: 600,
		black: 700,
	},
	fontSizes: {
		xxsm: "0.625rem", // 10px
		xsm: "0.75rem", // 12px
		info: "0.875rem", // 14px
		body: "1rem", // 16px
		title: "1.25rem", // 20px
		subheader: "1.5rem", // 24px
		header: "2.25rem", // 36px
	},
	fontStyles: {
		italic: "italic",
	},
	colors: {
		primary: "#0E1846",
		secondary: "#460E18",
		accent: "#0D2708",
		white: "#DFDFDF",
		black: "#1F1F1F",
		grayPalette: {
			100: "#ADAEAF",
			200: "#747475",
			400: "#5D5E60",
			600: "#3B3D40",
			800: "#2F3236",
			900: "#24272b",
		},
		primaryTones: {
			100: "#393F5C",
			300: "#2A3254",
			600: "#1C254D",
		},
		secondaryTones: {
			100: "#5C393F",
			300: "#542A32",
			600: "#4D1C25",
		},
		accentTones: {
			100: "#384835",
			300: "#2A3D26",
			600: "#1B3217",
		},
	},
	heights: {
		header: "20vh",
	},
}
