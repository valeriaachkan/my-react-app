import propTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline, id }) {
	return (
		<>
			<span className={isOnline ? s.online : s.offline}></span>
			<img className="avatar" src={avatar} alt="User avatar" width="48" />
			<p className={s.name}>{name}</p>
		</>
	);
}

FriendListItem.propTypes = {
	avatar: propTypes.string,
	name: propTypes.string,
	isOnline: propTypes.bool,
	id: propTypes.number,
};
