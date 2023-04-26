import React from 'react';
import propTypes from 'prop-types';
import s from './FeedbackApp.module.css';

const Section = ({ title, children }) => {
	return (
		<section className={s.section}>
			<h2 className={s.title}>{title}</h2>
			{children}
		</section>
	);
};

Section.propTypes = {
	title: propTypes.string,
};

export default Section;
