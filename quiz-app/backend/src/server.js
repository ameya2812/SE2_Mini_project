'use strict'
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '/public/')))

app.use(express.json())

app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/index.html'))
})
// Listening to APIs
app.listen(process.env.PORT || 8000, () =>
	console.log('Listening on Port 8000')
)
