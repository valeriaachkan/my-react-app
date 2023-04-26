import React from 'react';
import propTypes from 'prop-types';
import s from './FeedbackApp.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<ul className={s.list}>
			{options.map((option) => (
				<li key={option} className={s.item}>
					<button
						type="button"
						className={s.button}
						onClick={() => {
							onLeaveFeedback(option);
						}}
					>
						{option}
					</button>
				</li>
			))}
		</ul>
	);
};

FeedbackOptions.propTypes = {
	options: propTypes.arrayOf(propTypes.string),
	onLeaveFeedback: propTypes.func,
};
export default FeedbackOptions;
