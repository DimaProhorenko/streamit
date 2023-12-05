import PropTypes from 'prop-types';

function Card({ children }) {
	return (
		<div className="p-4 rounded-md bg-black bg-opacity-40">{children}</div>
	);
}

Card.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Card;
