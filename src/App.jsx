import useMovies from './hooks/useMovies';
import { Upcoming } from './containers';
import { COMMING_SOON_FULL } from './constants/api';

function App() {
	const [movies, setMovies] = useMovies(COMMING_SOON_FULL);
	console.log(movies);
	return <Upcoming />;
}
export default App;
