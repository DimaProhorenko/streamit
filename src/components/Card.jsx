import PropTypes from 'prop-types';

function Card({ children, className = '' }) {
	return (
		<div className={`p-4 rounded-md bg-black bg-opacity-40 ${className}`}>
			{children}
		</div>
	);
}

Card.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
};

export default Card;
