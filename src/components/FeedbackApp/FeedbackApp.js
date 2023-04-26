import React from 'react';
import propTypes from 'prop-types';
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

FeedbackApp.propTypes = {
	options: propTypes.arrayOf(propTypes.string),
	onLeaveFeedback: propTypes.func,
	good: propTypes.number,
	neutral: propTypes.number,
	bad: propTypes.number,
	total: propTypes.number,
	positivePercentage: propTypes.number,
};

export default FeedbackApp;
