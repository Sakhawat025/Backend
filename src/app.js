import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

// Enable CORS with environment origins and credentials support
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// Parse incoming JSON requests (max 17kb limit
app.use(express.json({limit: "17kb"}))
// Parse URL-encoded data from forms (max 17kb limit)
app.use(express.urlencoded({extended: true, limit: "17kb"}))
// Serve static assets from the "public" folder
app.use(express.static("public"))
// Parse cookies attached to client requests
app.use(cookieParser())

export {app}