import useMovies from '../hooks/useMovies';
import { Carousel, Link, Section } from '../components';
import { TOP_RATED_MOVIES } from '../constants/api';
import { numOfSlides } from '../constants/carousel';
import MovieCard from '../feature/MovieCard';

function TopRated() {
	const [topMovies, setTopMovies] = useMovies(TOP_RATED_MOVIES);
	return (
		<Section>
			<Section.Header>
				<Section.Title>Top Rated Movies</Section.Title>
				<Link href="#">View More</Link>
			</Section.Header>
			{topMovies && (
				<Carousel>
					{topMovies.slice(0, numOfSlides).map((movie) => (
						<Carousel.Slide key={movie.id}>
							<MovieCard
								cover={movie.poster_path}
								title={movie.title}
								release={movie.release_date}
							/>
						</Carousel.Slide>
					))}
					<Carousel.Prev />
					<Carousel.Next />
				</Carousel>
			)}
		</Section>
	);
}
export default TopRated;
