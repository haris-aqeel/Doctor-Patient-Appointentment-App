import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useHistory } from 'react-router-dom'
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import MicOffIcon from '@material-ui/icons/MicOff';
const Dictaphone = () => {
  const history = useHistory();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {

    if (transcript && transcript.toString().toLowerCase().includes('appointment')) {
      localStorage.getItem("status_login") === 'true' ? history.push('/create-appointment') : history.push('/login')
    }
  }, [transcript])



  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <small>{listening ? <MicIcon /> : <MicOffIcon />}{listening ? 'Listening...' : 'Please Click on Start to open mike'}</small>
      <br />
      <Button variant="contained" color="primary" style={{ marginRight: '5px' }} onClick={SpeechRecognition.startListening}>Start</Button>
      <Button variant="contained" color="secondary" style={{ marginRight: '5px' }} onClick={SpeechRecognition.stopListening} >Stop</Button>
      <Button variant="contained" color="primary" style={{ marginRight: '5px' }} onClick={resetTranscript} >Reset</Button>
    </div>
  );
};
export default Dictaphone;