import PropTypes from 'prop-types';

function Card({ children, className = '', spacing = 'p-8 md:p-10 lg:p-14' }) {
	return (
		<div
			className={`${spacing} rounded-md bg-black bg-opacity-40 ${className}`}
		>
			{children}
		</div>
	);
}

Card.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
	spacing: PropTypes.string,
};

export default Card;
