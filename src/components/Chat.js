import React, { useState, useEffect, useContext } from 'react';
import Chatbot from 'react-chatbot-kit';
import '../App.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './pages/config';

function Chat() {
	useEffect(() => {
		const msg = new window.SpeechSynthesisUtterance('This is Chat bot wheree you can chat with the doctor');
		window.speechSynthesis.speak(msg);
	}, []);

	return (
		<div style={{backgroundColor:"#A7C7E7"}}>

			<h1 style={{ textAlign: 'center', paddingTop: '30px' }}>CHATBOT</h1>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '86vh' }}>
				<Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
			</div>
		</div>
	);
}
export default Chat;
