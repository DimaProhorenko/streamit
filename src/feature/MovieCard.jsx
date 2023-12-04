import PropTypes from 'prop-types';
import { IMG_PATH_SIZE_500 } from '../constants/api';

function MovieCard({ cover, title, release }) {
	return (
		<div className="relative group overflow-hidden">
			<img
				src={`${IMG_PATH_SIZE_500}${cover}`}
				className="lg:group-hover:scale-110 lg:transition-transform"
			/>
			<div className="absolute w-full bottom-0 bg-black bg-opacity-80 p-2 lg:translate-y-full lg:group-hover:translate-y-0 lg:transition-transform">
				<h4 className="mb-1">{title}</h4>
				<p className="text-xs text-gray-400">{release}</p>
			</div>
		</div>
	);
}

MovieCard.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	release: PropTypes.string,
};

export default MovieCard;
