import { useState } from 'react';
import FeedbackApp from './components/FeedbackApp';

function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const options = { good, neutral, bad };

	const handleFeedback = (option) => {
		switch (option) {
			case 'good':
				setGood((s) => s + 1);
				break;

			case 'neutral':
				setNeutral((s) => s + 1);
				break;
			case 'bad':
				setBad((s) => s + 1);
				break;

			default:
				return;
		}
	};

	const countTotalFedback = () => {
		const values = Object.values(options);
		const total = values.reduce((acc, el) => acc + el, 0);
		return total;
	};

	const countPositivePercentage = () => {
		const totalFeedback = countTotalFedback();
		const positivePercentage = (good / totalFeedback) * 100;
		return Math.round(positivePercentage) || 0;
	};

	const feedbackOptions = Object.keys(options);

	return (
		<FeedbackApp
			options={feedbackOptions}
			onLeaveFeedback={handleFeedback}
			good={good}
			neutral={neutral}
			bad={bad}
			total={countTotalFedback()}
			positivePercentage={countPositivePercentage()}
		/>
	);
}

export default App;
