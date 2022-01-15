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
						url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/',
						id: 1,
					},
					{
						text: 'Medicine for flu and cough',
						url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
						id: 2,
					},
					{
						text: 'Medicine for headche',
						url: 'https://frontendmasters.com',
						id: 3,
					},
				],
			},
		},
	],
};

export default config;
