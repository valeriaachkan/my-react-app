import s from './Statistics.module.css';

export default function Item({ label, percentage }) {
	return (
		<>
			<span className={s.label}>{label}</span>
			<span className={s.value}>{percentage}%</span>
		</>
	);
}
