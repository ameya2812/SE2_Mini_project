import { Switch, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import firebase from './firebase/firebase'
import './App.css';
import Home  from './pages/Home';
import Appbar from './components/Appbar';
import OneTimeDashBoard from './pages/OneTimeDashboard'
import CreateQuiz from './pages/CreateQuiz'
import JoinQuiz from './pages/JoinQuiz'
import UserDashboard from './pages/UserDashboard'
import CreatedSuccesfully from './pages/CreatedSuccesfully'
import NotFoundPage from './pages/NotFoundPage'
import AttemptQuiz from './pages/AttemptQuiz'

const App = () => {
	const [user, setUser] = useState({})
	useEffect(() => {
		const createUserInDB = async () => {
			if (user.uid)
				if (
					firebase.auth().currentUser.metadata.lastSignInTime ===
					firebase.auth().currentUser.metadata.creationTime
				) {
					try {
						await fetch('/API/users/create', {
							method: 'POST',
							body: JSON.stringify({
								uid: user.uid,
								name: user.name,
								email: user.email,
							}),
							headers: {
								'Content-Type': 'application/json',
							},
						})
						console.log('posted')
					} catch (error) {
						console.log('User Creation Error: ', error)
					}
				}
		}
		createUserInDB()
	}, [user])

	return (
		<div className='App'>
			{!firebase.auth().currentUser ? (
				<Home setUser={setUser} />
			) : (
				<>
					<div>
						<Appbar user={user} setUser={setUser} />
					</div>
					<Switch>
						<Route exact path='/'>
							<OneTimeDashBoard user={user} />
						</Route>
						<Route path='/dashboard'>
							<UserDashboard user={user} />
						</Route>
						<Route path='/create-quiz'>
							<CreateQuiz user={user} />
						</Route>
						<Route
							path='/created-succesfully/:quizCode'
							component={CreatedSuccesfully}
						/>
						<Route path='/join-quiz'>
							<JoinQuiz user={user} />
						</Route>
						<Route path='/attempt-quiz/:quizCode' component={AttemptQuiz} />
						<Route component={NotFoundPage} />
					</Switch>
				</>
			)}
		</div>
	)
}

export default App

