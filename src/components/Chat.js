import React, { useState, useEffect, useContext } from 'react';
import Chatbot from 'react-chatbot-kit'
 import "../App.css";

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './pages/config';

function Chat() {

  useEffect(() => {
    const msg = new window.SpeechSynthesisUtterance('This is Chat bot wheree you can chat with the doctor');
    window.speechSynthesis.speak(msg);  
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
      </header>
    </div>
  );
}
  export default Chat;