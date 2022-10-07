const express = require('express')
const app = express()

const dotenv = require('dotenv')
const mongoose = require('mongoose')

// Import routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

dotenv.config()

// Connect to Db
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('Connected to db!')
)

// Middleware
app.use(express.json())

// Route middleware
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Server running port: ' + PORT))