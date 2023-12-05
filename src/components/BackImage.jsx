import PropTypes from 'prop-types';

function BackImage({ cover, className = '', children }) {
	console.log(cover);
	return (
		<div
			style={{ backgroundImage: `url('${cover}')` }}
			className={`bg-cover bg-no-repeat bg-center relative before:absolute before:inset-0 before:bg-back-gradient ${className}`}
		>
			<div className="relative z-10">{children}</div>
		</div>
	);
}

BackImage.propTypes = {
	cover: PropTypes.any.isRequired,
	className: PropTypes.string,
	children: PropTypes.any,
};
export default BackImage;
