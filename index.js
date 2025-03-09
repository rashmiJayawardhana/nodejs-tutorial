import os from "os";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the base name (file name with extension) of the current file
console.log(path.basename(__filename)); // Example output: "script.js"

// Get the file extension of the current file
console.log(path.extname(__filename)); // Example output: ".js"
console.log(path.parse(__filename));

// Get the operating system platform (e.g., "win32", "linux", "darwin")
console.log(os.platform()); // Example output: "win32" (Windows) or "linux" (Linux)

// Get the OS version
console.log(os.version()); // Example output: "Windows 10 Pro" or "Ubuntu 20.04"

// Get the directory name of the current file
console.log(__dirname); // Example output: "C:\Users\YourName\Projects" (Windows) or "/home/user/projects" (Linux/Mac)

// Get the full path of the current file
console.log(__filename); // Example output: "C:\Users\YourName\Projects\script.js" (Windows)
