import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import LearningOptions from '../LearningOptions/LearningOptions';
import LinkList from '../LinkList/LinkList';

const config = {
	initialMessages: [
		createChatBotMessage("Hi patient , I'm here to help. What kind of disease are you facing?", {
			widget: 'learningOptions',
		}),
	],
	widgets: [
		{
			widgetName: 'learningOptions',
			widgetFunc: (props) => <LearningOptions {...props} />,
		},
		{
			widgetName: 'javascriptLinks',
			widgetFunc: (props) => <LinkList {...props} />,
			props: {
				options: [
					{
						text: 'Medicine for fever',
						url: 'https://www.mayoclinic.org/diseases-conditions/fever/diagnosis-treatment/drc-20352764#:~:text=In%20the%20case%20of%20a,as%20recommended%20by%20your%20doctor.',
						id: 1,
					},
					{
						text: 'Medicine for flu and cough',
						url: 'https://www.mayoclinic.org/diseases-conditions/fever/diagnosis-treatment/drc-20352764#:~:text=In%20the%20case%20of%20a,as%20recommended%20by%20your%20doctor.',
						id: 2,
					},
					{
						text: 'Medicine for headache',
						url: 'https://www.mayoclinic.org/diseases-conditions/fever/diagnosis-treatment/drc-20352764#:~:text=In%20the%20case%20of%20a,as%20recommended%20by%20your%20doctor.',
						id: 3,
					},
				],
			},
		},
	],
};

export default config;
