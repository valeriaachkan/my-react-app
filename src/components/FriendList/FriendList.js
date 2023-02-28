import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
	return (
		<ul className={s.list}>
			{friends.map((friend) => (
				<FriendListItem
					avatar={friend.avatar}
					name={friend.name}
					isOnline={friend.isOnline}
					id={friend.id}
				/>
			))}
		</ul>
	);
}
