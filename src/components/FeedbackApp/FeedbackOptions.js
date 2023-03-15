import React from 'react';
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

export default FeedbackOptions;
