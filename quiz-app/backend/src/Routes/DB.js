const MongoClient = require('mongodb')
//const ObjectId = require('mongodb').ObjectId
const API_KEY = require('../db-config').database
let db
const DBStart = async () => {
	console.log('DB server connecting...')
	const client = await MongoClient.connect(API_KEY, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	console.log('DB Connected Successfully.')
	db = client.db('quizapp')
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

const createUser = async (uid, name, email, res) => {
	await withDB(async (db) => {
		const user = await db.collection('users').findOne({ uid: uid })
		if (!user) {
			const result = await db.collection('users').insertOne({
				uid,
				name,
				email,
				createdQuiz: [],
				attemptedQuiz: []
			})
			res.status(200).json({ message: 'User Created successfully.' })
		} else {
			res.status(200).json({ message: 'User Record Exist' })
		}
	})
}

module.exports.createUser = createUser
