import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import VisibilityIcon from '@material-ui/icons/Visibility';
import EmailIcon from '@material-ui/icons/Email';
import './Auth.css';

const Dashboard = () => {
	const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [status, setStatus] = useState(true);

	useEffect(() => {
		const msg = new window.SpeechSynthesisUtterance('This is the login page');
		window.speechSynthesis.speak(msg);
	}, []);

	const notify = (message) => toast(message);

	if (!browserSupportsSpeechRecognition) {
		setStatus(false);
	}

	const emailListener = () => {
		console.log(transcript);
		resetTranscript();
		SpeechRecognition.startListening();
		setEmail(transcript);
	};

	const passwordListener = () => {
		resetTranscript();
		SpeechRecognition.startListening();
		setPassword(transcript);
	};

	const loginListener = () => {
		resetTranscript();
		SpeechRecognition.startListening();
		if (transcript && transcript.toString().toLowerCase().includes('login')) {
			loginHandler();
		}
	};

	const loginHandler = (e) => {
		if (e) {
			e.preventDefault();
		}
		if (email === '') {
			notify('Username/Email is required!');
			localStorage.setItem('status_login', 'false');
		} else if (password === '') {
			notify('Password is required!');
			localStorage.setItem('status_login', 'false');
		} else {
			localStorage.setItem('status_login', 'true');
			history.push('/');
		}
	};

	return (
		<div className="containers">
			<div className="forms-container">
				<div className="signin-signup">
					<form action="#" className="sign-in-form" onSubmit={loginHandler}>
						<h2 className="title">Sign in</h2>
						<div className="input-field">
							<i className="fas fa-user" />
							<input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
							<span>
								{status && (
									<IconButton onClick={emailListener}>{listening ? <MicIcon /> : <MicOffIcon />}</IconButton>
								)}
							</span>
						</div>
						<div className="input-field">
							<i className="fas fa-lock" />
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<span>
								{status && (
									<IconButton onClick={passwordListener}>{listening ? <MicIcon /> : <MicOffIcon />}</IconButton>
								)}
							</span>
						</div>

						<input type="submit" defaultValue="Login" className="btns solid" />
						{status && (
							<>
								<IconButton onClick={loginListener}>{listening ? <MicIcon /> : <MicOffIcon />}</IconButton>
							</>
						)}
						<p className="social-text">Or Sign in with social platforms</p>
						<div className="social-media">
							<a href="#" className="social-icon">
								<i className="fab fa-facebook-f" />
							</a>
							<a href="#" className="social-icon">
								<i className="fab fa-twitter" />
							</a>
							<a href="#" className="social-icon">
								<i className="fab fa-google" />
							</a>
							<a href="#" className="social-icon">
								<i className="fab fa-linkedin-in" />
							</a>
						</div>
					</form>
					<form action="#" className="sign-up-form">
						<h2 className="title">Sign up</h2>
						<div className="input-field">
							<i className="fas fa-user" />
							<input type="text" placeholder="Username" />
						</div>
						<div className="input-field">
							<i className="fas fa-envelope" />
							<input type="email" placeholder="Email" />
						</div>
						<div className="input-field">
							<i className="fas fa-lock" />
							<input type="password" placeholder="Password" />
						</div>
						<input type="submit" className="btns" defaultValue="Sign up" />
						<p className="social-text">Or Sign up with social platforms</p>
						<div className="social-media">
							<a href="#" className="social-icon">
								<i className="fab fa-facebook-f" />
							</a>
							<a href="#" className="social-icon">
								<i className="fab fa-twitter" />
							</a>
							<a href="#" className="social-icon">
								<i className="fab fa-google" />
							</a>
							<a href="#" className="social-icon">
								<i className="fab fa-linkedin-in" />
							</a>
						</div>
					</form>
				</div>
			</div>
			<div className="panels-container">
				<div className="panel left-panel">
					<div className="content">
						<h3>New here ?</h3>
						<p>Proceed to Our Registration Page where you can register easily!</p>
						<button className="btns transparent" id="sign-up-btn" onClick={() => history.push('/signup')}>
							Sign up
						</button>
					</div>
					<img src="img/log.svg" className="image" alt="" />
				</div>
				<div className="panel right-panel">
					<div className="content">
						<h3>One of us ?</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
						<button className="btns transparent" id="sign-in-btn">
							Sign in
						</button>
					</div>
					<img src="img/register.svg" className="image" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
