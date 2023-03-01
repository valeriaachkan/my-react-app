import propTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
	return (
		<table className={s.transactionHistory}>
			<thead>
				<tr className={s.row}>
					<th className={(s.text, s.title)}>Type</th>
					<th className={(s.text, s.title)}>Amount</th>
					<th className={(s.text, s.title)}>Currency</th>
				</tr>
			</thead>

			<tbody>
				{transactions.map(({ id, type, amount, currency }) => (
					<tr key={id} className={s.row}>
						<td className={s.text}>{type}</td>
						<td className={s.text}>{amount}</td>
						<td className={s.text}>{currency}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

TransactionHistory.propTypes = {
	id: propTypes.string,
	type: propTypes.string,
	amount: propTypes.string,
	currency: propTypes.string,
};
