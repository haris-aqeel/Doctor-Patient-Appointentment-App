import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
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
			<div className="screen">
				<div className="screen__content">
					<form className="login" onSubmit={loginHandler}>
						<div className="login__field">
							<i className="login__icon fas fa-user" />
							<input
								type="text"
								className="login__input"
								placeholder="User name / Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							{status && (
								<IconButton onClick={emailListener}>{listening ? <MicIcon /> : <MicOffIcon />}</IconButton>
							)}
						</div>
						<div className="login__field">
							<i className="login__icon fas fa-lock" />
							<input
								type="password"
								className="login__input"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							{status && (
								<IconButton onClick={passwordListener}>{listening ? <MicIcon /> : <MicOffIcon />}</IconButton>
							)}
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<button className="button login__submit" type="submit">
								<span className="button__text">Log In Now</span>
								<i className="button__icon fas fa-chevron-right" />
							</button>
							{status && (
								<>
									<br />
									<br />
									<IconButton onClick={loginListener}>{listening ? <MicIcon /> : <MicOffIcon />}</IconButton>
								</>
							)}
						</div>
					</form>
				</div>
				<div className="screen__background">
					<span className="screen__background__shape screen__background__shape4" />
					<span className="screen__background__shape screen__background__shape3" />
					<span className="screen__background__shape screen__background__shape2" />
					<span className="screen__background__shape screen__background__shape1" />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
