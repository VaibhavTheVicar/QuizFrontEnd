import React, { useState } from 'react';
export default function App() {
	const questions = [
		{
			questionText: 'What is the time complexity for quick sort',
			answerOptions: [
				{ answerText: 'nlogn', isCorrect: true },
				{ answerText: 'logn', isCorrect: false },
				{ answerText: 'n^2', isCorrect: false },
				{ answerText: 'nlog*n', isCorrect: false },
			],
		},
		{
			questionText: 'Which engine does node.js rip off?',
			answerOptions: [
				{ answerText: 'Safari 3', isCorrect: false },
				{ answerText: 'Chrome V8', isCorrect: true },
				{ answerText: 'FireFox v3', isCorrect: false },
			],
		},
		{
			questionText: 'The language used to vreate iOS apps mainly is?',
			answerOptions: [
				{ answerText: 'Swift', isCorrect: true },
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'JavaScript', isCorrect: false },
				{ answerText: 'Visual Basic', isCorrect: false },
			],
		},
		{
			questionText: 'Who made the linux OS?',
			answerOptions: [
				{ answerText: 'Linus Trivaldus', isCorrect: false },
				{ answerText: 'Steve Jobs', isCorrect: false },
				{ answerText: 'Henry Cohern', isCorrect: false },
			],
		},
	];
	const [displayedQuestion, changeDisplayedQuestion] = useState(0);
	const [testOver, isTestOver] = useState(false);
	const[gotRight,increaseGotRight] = useState(0);
	return (
		<h1>Hello World!</h1>
	);
}
