import React from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

const FeedbackApp = ({
	options,
	onLeaveFeedback,
	good,
	neutral,
	bad,
	total,
	positivePercentage,
}) => {
	return (
		<>
			<Section title={'Please leave feedback'}>
				<FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
			</Section>
			<Section title={'Statistics'}>
				{total > 0 ? (
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={total}
						positivePercentage={positivePercentage}
					/>
				) : (
					<Notification message={'There is no feedback'} />
				)}
			</Section>
		</>
	);
};

export default FeedbackApp;
