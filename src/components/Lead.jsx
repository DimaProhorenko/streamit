import PropTypes from 'prop-types';

function Lead({ children }) {
	return (
		<p className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-4 lg:mb-6">
			{children}
		</p>
	);
}

Lead.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Lead;
