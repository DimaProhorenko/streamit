import useMovies from './hooks/useMovies';
import { COMMING_SOON_FULL } from './constants/api';

function App() {
	const [movies, setMovies] = useMovies(COMMING_SOON_FULL);
	console.log(movies);
	return <div>App</div>;
}
export default App;
