import PropTypes from 'prop-types';

function Card({ children, className = '' }) {
	return (
		<div
			className={`p-8 md:p-10 lg:p-14 rounded-md bg-black bg-opacity-40 ${className}`}
		>
			{children}
		</div>
	);
}

Card.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
	spacing: PropTypes.number,
};

export default Card;
