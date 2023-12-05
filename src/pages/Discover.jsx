import { Hero, TopRated, TopTv, Upcoming } from '../containers';

function Home() {
	return (
		<>
			<Hero />
			<Upcoming />
			<TopRated />
			<TopTv />
		</>
	);
}
export default Home;
