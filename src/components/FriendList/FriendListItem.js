import s from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline, id }) {
	return (
		<li className={s.item} key={id}>
			<span className={isOnline ? s.online : s.offline}></span>
			<img className="avatar" src={avatar} alt="User avatar" width="48" />
			<p className={s.name}>{name}</p>
		</li>
	);
}
