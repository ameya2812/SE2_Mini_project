const express = require('express')
const ObjectId = require('mongodb').ObjectId
const Router = express.Router()
const DB = require('./DB')

// Create User in DB
Router.post('/create', (req, res) => {
	const { uid, name, email } = req.body
	if (!uid) return res.status(500).json({ error: 'Incomplete Parameters' })

	DB.createUser(uid, name, email, res)
})

module.exports = Router
