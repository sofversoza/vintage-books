import { unlink } from "fs" // fs: file system module
import { dirname, join } from "path"
import { fileURLToPath } from "url"

// have to define __dirname in ES Module
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const deleteFile = (filePath) => {
	// construct the path to the file
	// __dirname: global var containing the directory path of the current module
	// .. navigates up one directory level from __dirname
	// filePath is then appended to locate the file correctly within the whole project
	const full_path = join(__dirname, "..", filePath)

	// fs.unlink: method to delete the file at provided path
	unlink(full_path, (err) => {
		if (err) {
			console.error(`Failed to delete file: ${full_path}`, err)
		} else {
			console.log(`File deleted: ${full_path}`)
		}
	})
}
