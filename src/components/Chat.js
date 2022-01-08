import React from 'react';
import Chatbot from 'react-chatbot-kit'
 import "../App.css";

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './pages/config';

function Chat() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
      </header>
    </div>
  );
}
  export default Chat;