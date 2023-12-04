import useMovies from './hooks/useMovies';
import { TopRated, Upcoming } from './containers';
import { COMMING_SOON_FULL } from './constants/api';

function App() {
	return (
		<>
			<Upcoming />
			<TopRated />
		</>
	);
}
export default App;
