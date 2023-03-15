import React, { Component } from 'react';
import FeedbackApp from './components/FeedbackApp';

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	handleFeedback = (option) => {
		this.setState((prevState) => {
			return { [option]: prevState[option] + 1 };
		});
	};

	countTotalFedback = () => {
		const values = Object.values(this.state);
		const total = values.reduce((acc, el) => acc + el, 0);
		return total;
	};

	countPositivePercentage = () => {
		const totalFeedback = this.countTotalFedback();
		const positivePercentage = (this.state.good / totalFeedback) * 100;
		return Math.round(positivePercentage) || 0;
	};

	render() {
		const { good, neutral, bad } = this.state;
		const { handleFeedback } = this;
		const feedbackOptions = Object.keys(this.state);
		const totalFeedback = this.countTotalFedback();
		const positivePercentage = this.countPositivePercentage();

		return (
			<FeedbackApp
				options={feedbackOptions}
				onLeaveFeedback={handleFeedback}
				good={good}
				neutral={neutral}
				bad={bad}
				total={totalFeedback}
				positivePercentage={positivePercentage}
			/>
		);
	}
}

export default App;
