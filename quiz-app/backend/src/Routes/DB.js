const MongoClient = require('mongodb')
const ObjectId = require('mongodb').ObjectId
const API_KEY = require('../db-config').database
let db
const DBStart = async () => {
	console.log('DB server connecting...')
	const client = await MongoClient.connect(API_KEY, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	console.log('DB Connected Successfully.')
	db = client.db('quizdom-project')
}
DBStart()
const withDB = async (operations, res) => {
	try {
		await operations(db)
		// client.close()
	} catch (error) {
		console.log('Error connecting to DB : ', error)
		res.status(500).json({ message: 'Error Connecting to db ', error })
	}
}