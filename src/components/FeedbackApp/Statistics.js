import React from 'react';
import propTypes from 'prop-types';
import s from './FeedbackApp.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
		<ul className={(s.list, s.stats)}>
			<li className={s.item}>
				<p>Good:</p>
				<span className={s.value}>{good}</span>
			</li>
			<li className={s.item}>
				<p>Neutral:</p>
				<span className={s.value}>{neutral}</span>
			</li>
			<li className={s.item}>
				<p>Bad:</p>
				<span className={s.value}>{bad}</span>
			</li>
			<li className={s.item}>
				<p>Total:</p>
				<span className={s.value}>{total}</span>
			</li>
			<li className={s.item}>
				<p>Positive percentage:</p>
				<span className={s.value}>{positivePercentage}%</span>
			</li>
		</ul>
	);
};

Statistics.propTypes = {
	good: propTypes.number,
	neutral: propTypes.number,
	bad: propTypes.number,
	total: propTypes.number,
	positivePercentage: propTypes.number,
};
export default Statistics;
