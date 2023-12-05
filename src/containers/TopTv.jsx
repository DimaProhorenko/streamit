import useMovies from '../hooks/useMovies';
import { Carousel, Link, Section } from '../components';
import { MovieCard } from '../feature';
import { TV_TOP_RATED } from '../constants/api';
import { numOfSlides } from '../constants/carousel';

function TopTv() {
	const [tv, setTv] = useMovies(TV_TOP_RATED);
	console.log(tv);
	return (
		<Section>
			<Section.Header>
				<Section.Title>Top Rated Tv series</Section.Title>
				<Link>View all</Link>
			</Section.Header>
			{tv?.length > 0 && (
				<Carousel>
					{tv.slice(0, numOfSlides).map((item) => (
						<Carousel.Slide key={item.id}>
							<MovieCard
								cover={item.poster_path}
								title={item.original_name}
								release={item.first_air_date}
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
export default TopTv;
