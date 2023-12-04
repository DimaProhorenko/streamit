import useMovies from '../hooks/useMovies';
import { Link, Section, Carousel } from '../components';
import MovieCard from '../feature/MovieCard';
import { COMMING_SOON_FULL } from '../constants/api';

function Upcoming() {
	const [movies, setMovies] = useMovies(COMMING_SOON_FULL);
	console.log(movies);
	return (
		<Section>
			<Section.Header>
				<Section.Title>Upcoming Movies</Section.Title>
				<Link href="/">View all</Link>
			</Section.Header>
			{movies && (
				<Carousel>
					{movies?.map((movie) => (
						<Carousel.Slide key={movie.id}>
							<MovieCard
								cover={movie?.poster_path}
								title={movie.title}
								release={movie.release_date}
							/>
						</Carousel.Slide>
					))}
				</Carousel>
			)}
		</Section>
	);
}

export default Upcoming;
