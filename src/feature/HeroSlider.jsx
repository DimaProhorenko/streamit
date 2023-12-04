import { Button, Carousel } from '../components';
import { IMG_PATH, NOW_PLAYING_MOVIES } from '../constants/api';
import useMovies from '../hooks/useMovies';

function HeroSlider() {
	const [nowWatching, setNowWatching] = useMovies(NOW_PLAYING_MOVIES);
	console.log(nowWatching.slice(0, 5));
	return (
		nowWatching && (
			<Carousel settings={{ slidesPerView: 1, breakpoints: {} }}>
				{nowWatching.slice(0, 5).map((movie) => (
					<Carousel.Slide key={movie.id}>
						<div className="container min-h-screen relative flex items-center text-center lg:text-left">
							<div className="absolute inset-0 before:block before:absolute before:inset-0 before:bg-black before:bg-opacity-40">
								<img
									className="w-full h-full object-cover"
									src={`${IMG_PATH}/original/${movie.backdrop_path}`}
								/>
							</div>
							<div className="relative z-10 max-w-lg">
								<h2 className="text-2xl font-bold md:text-3xl lg:text-6xl leading-relaxed mb-2	lg:mb-4">
									{movie.title}
								</h2>
								<p className="lg:text-md">{movie.overview}</p>
								<p className="text-sm my-2 md:my-4 lg:my-6">
									<span className="text-primary">
										Genres:
									</span>{' '}
									Action
								</p>
								<p className="text-sm my-2 md:my-4 lg:my-6">
									<span className="text-primary">
										Release Date:
									</span>{' '}
									{movie.release_date}
								</p>
								<Button className="mx-auto lg:mx-0">
									Play Now
								</Button>
							</div>
						</div>
					</Carousel.Slide>
				))}
				<Carousel.Prev />
				<Carousel.Next />
			</Carousel>
		)
	);
}
export default HeroSlider;
