import multer from "multer"
import path from "path"

// defines a storage engine for multer to store uploaded files on disk
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/uploads")
	},
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + "-" + Date.now() + path.extname(file.originalname)
		)
	},
})

export const upload = multer({ storage: storage })
