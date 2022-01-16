import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EmailIcon from '@material-ui/icons/Email';
import './Auth.css';

const Dashboard = () => {
	const history = useHistory();
	const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confpassword, setConfPassword] = useState('');
	const [status, setStatus] = useState(true);

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

	const confirmpasswordListener = () => {
		resetTranscript();
		SpeechRecognition.startListening();
		setConfPassword(transcript);
	};

	const loginListener = () => {
		resetTranscript();
		SpeechRecognition.startListening();
		if (transcript && transcript.toString().toLowerCase().includes('register')) {
			signupHandler();
		}
	};

	useEffect(() => {
		const msg = new window.SpeechSynthesisUtterance('This is the registration page');
		window.speechSynthesis.speak(msg);
	}, []);

	const notify = (message) => toast(message);

	const signupHandler = (e) => {
		e && e.preventDefault();
		if (email === '') {
			notify('Username/Email field is required!');
			localStorage.setItem('status_login', 'false');
		} else if (password === '') {
			notify('Password field is required!');
			localStorage.setItem('status_login', 'false');
		} else if (confpassword === '') {
			notify('Confirm Password field is required!');
			localStorage.setItem('status_login', 'false');
		} else {
			localStorage.setItem('status_login', 'true');
			history.push('/login');
		}
	};

	return (
		<div className="containers">
			<div className="screen">
				<div className="screen__content">
					<form className="login" onSubmit={signupHandler}>
						<div className="login__field">
						<EmailIcon className='login__icon' style={{paddingRight:"5px",paddingLeft:"3px"}}/>
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
						<VisibilityIcon className='login__icon' style={{paddingRight:"5px",paddingLeft:"3px"}}/>
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
						<div className="login__field">
						<VisibilityIcon className='login__icon' style={{paddingRight:"5px",paddingLeft:"3px"}}/>
							<input
								type="password"
								className="login__input"
								placeholder="Confirm Password"
								value={confpassword}
								onChange={(e) => setConfPassword(e.target.value)}
							/>
							{status && (
								<IconButton onClick={confirmpasswordListener}>
									{listening ? <MicIcon /> : <MicOffIcon />}
								</IconButton>
							)}
						</div>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<button className="button login__submit">
								<span className="button__text">Sign Up</span>
								
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
