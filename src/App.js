import Profile from './components/Profile/Profile';
import user from './user.json';
import Statistics from './components/Statistics/Statistics';
import data from './data.json';
import Container from './components/Container/Container';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';

export default function App() {
	return (
		<>
			<Profile
				username={user.username}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<Statistics items={data} />
			<FriendList friends={friends} />
		</>
	);
}
