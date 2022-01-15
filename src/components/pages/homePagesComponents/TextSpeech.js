import { useSpeechSynthesis } from 'react-speech-kit';
import React, { useState, useEffect, useContext } from 'react';
const Speech = () => {
	// const [value, setValue] = React.useState("This is the appoinment page");
	// const [speak, setSpeak] = React.useState();

	// const { speak } = useSpeechSynthesis();

	useEffect(() => {
		const msg = new window.SpeechSynthesisUtterance('This is appoinment page');
		window.speechSynthesis.speak(msg);
	}, []);

	return (
		<div className="speech">
			{/* <div className="group">
		<h2>Text To Speech Converter Using React Js</h2>
	</div>
	<div className="group">
		<textarea
		rows="2"
		value={value}
		onChange={(e) => setValue(e.target.value)}
		></textarea>
	</div>
	<div className="group">
		<button onClick={() => speak({ text: value })}>
		Speech
		</button>
	</div> */}
			{/* <button onClick={speak({ text: "This is the appoinment page" })}>
		</button> */}
		</div>
	);
};
export default Speech;
