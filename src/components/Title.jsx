import PropTypes from 'prop-types';

function Title({ children }) {
	return (
		<h1 className="font-bold text-3xl md:text-4xl lg:text-6xl">
			{children}
		</h1>
	);
}

Title.propTypes = {
	children: PropTypes.any.isRequired,
};
export default Title;
