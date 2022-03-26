import React from 'react'
import './Appbar.css'
import { Link } from 'react-router-dom'
import { Icon } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

function Appbar(){
	return (
		<div className='appbar'>
			<div className='slider'>
				<Link to='/' className='home'>
					<b>Quiz</b>app
				</Link>
			</div>
			<div className='appbar-user'>
				<Icon>
					<AccountCircle />
				</Icon>
				<p>username</p>
			</div>
		</div>
	)
}

export default Appbar
