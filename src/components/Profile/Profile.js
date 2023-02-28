import propTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
	return (
		<div className={s.profile} key={tag}>
			<div className={s.description}>
				<div className={s.avatar}>
					<img src={avatar} alt="User avatar" />
				</div>
				<p className={s.name}>{username}</p>
				<p className={s.caption}>@{tag}</p>
				<p className={s.caption}>{location}</p>
			</div>

			<ul className={s.list}>
				<li className={s.item}>
					<span className={s.caption}>Followers</span>
					<span className={s.quantity}>{stats.followers}</span>
				</li>
				<li className={s.item}>
					<span className={s.caption}>Views</span>
					<span className={s.quantity}>{stats.views}</span>
				</li>
				<li className={s.item}>
					<span className={s.caption}>Likes</span>
					<span className={s.quantity}>{stats.likes}</span>
				</li>
			</ul>
		</div>
	);
}

Profile.propTypes = {
	username: propTypes.string,
	tag: propTypes.string,
	location: propTypes.string,
	avatar: propTypes.string,
	stats: propTypes.objectOf(propTypes.number),
};
