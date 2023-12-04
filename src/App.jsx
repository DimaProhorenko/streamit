import { Hero, TopRated, Upcoming } from './containers';

function App() {
	console.log(import.meta.env.VITE_API_KEY);
	return (
		<>
			<Hero />
			<Upcoming />
			<TopRated />
		</>
	);
}
export default App;
