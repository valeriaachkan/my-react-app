import Item from './Item';
import s from './Statistics.module.css';

export default function Statistics({ items }) {
	return (
		<section className={s.statistics}>
			<h2 className={s.title}>Upload stats</h2>
			<ul className={s.list}>
				{items.map((item) => (
					<li key={item.id} className={s.item}>
						<Item label={item.label} percentage={item.percentage} />
					</li>
				))}
			</ul>
		</section>
	);
}
