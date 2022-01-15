import Header from './homePagesComponents/Header';
import AvailableAppointments from './homePagesComponents/AvailableAppointments';
import TextSpeech from './homePagesComponents/TextSpeech';
import React, { useState, useEffect, useContext } from 'react';
// import Speech from 'react-speech';

const AppointmentPage = () => {
	useEffect(() => {
		const msg = new window.SpeechSynthesisUtterance('This is appoinment page');
		window.speechSynthesis.speak(msg);
	}, []);

	return (
		<div id="main-home-page">
			<Header />
			<AvailableAppointments />
		</div>
	);
};

export default AppointmentPage;
