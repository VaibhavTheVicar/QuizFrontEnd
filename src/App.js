import React, { useState } from 'react';
export default function App() {
	const questions = [
		{
			questionText: 'What is the time complexity for quick sort',
			negation: true,
			answerOptions: [
				{ answerText: 'nlogn', verdict: true },
				{ answerText: 'logn', verdict: false },
				{ answerText: 'n^2', verdict: false },
				{ answerText: 'nlog*n', verdict: false },
			],
		},
		{
			questionText: 'Which engine does node.js rip off?',
			negation: true,
			answerOptions: [
				{ answerText: 'Safari 3', verdict: false },
				{ answerText: 'Chrome V8', verdict: true },
				{ answerText: 'FireFox v3', verdict: false },
			],
		},
		{
			questionText: 'The language used to vreate iOS apps mainly is?',
			negation: true,
			answerOptions: [
				{ answerText: 'Swift', verdict: true },
				{ answerText: 'Java', verdict: false },
				{ answerText: 'JavaScript', verdict: false },
				{ answerText: 'Visual Basic', verdict: false },
			],
		},
		{
			questionText: 'Who made the linux OS?',
			negation: true,
			answerOptions: [
				{ answerText: 'Linus Trivaldus', verdict: false },
				{ answerText: 'Steve Jobs', verdict: false },
				{ answerText: 'Henry Cohern', verdict: false },
			],
		},
	];
	const [displayedQuestion, changeDisplayedQuestion] = useState(0);
	const [testOver, setTestOver] = useState(false);
	const[score, changeScore] = useState(0);
	
	const handleScreenState = (verdict,negation) => {
		if(verdict){
			changeScore(score+1);
		}
		else{
			if(negation){
				changeScore(score-1);
			}
		}

		if(currentQuestion+1<questions.length){
			changeDisplayedQuestion(currentQuestion+1)
		}
		else{
			setTestOver(true)
		}
	}
	
	return (
		<h1>Hello World!</h1>
	);
}
