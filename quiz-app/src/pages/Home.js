import React, { useState, useEffect } from 'react'
import './Home.css'
import { StyledFirebaseAuth } from 'react-firebaseui'
import firebase from '../firebase/firebase'
import Loading_Screen from './Loading'

function Home(){
	return (
		<div id='Home'>
					<div id='logo'>
						<div id='logo-name'>
							<b>Quiz</b>dom
						</div>
						<div id='description'>
							Now create and join quiz at a single platform.You can create
							trivia quizzes, personality test, polls and survays. Share out
							your quiz with your students with a unique code.
						</div>
					</div>

					<div id='login-card'>
						<label className='login-label'>
							<b>Q</b>
						</label>
						<StyledFirebaseAuth
							borderRadius='40px'
							// uiConfig={uiConfig}
							// firebaseAuth={firebase.auth()}
						/>
					</div>
				</div>
			)
        }
export default Home