const express = require('express')
const cors = require('cors')

const app = express()

const userRoutes = require('./routes/userRoutes')

// Confing JSON Response
app.use(express.json())

//Solve CORS
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

// Public Folder for Image
app.use(express.static('public'))

// Routes
app.use('/users', userRoutes)

app.listen(5000)