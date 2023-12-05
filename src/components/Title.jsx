import PropTypes from 'prop-types';

function Title({ children, size = 'md' }) {
	const sizes = {
		sm: <h4 className="font-bold ">{children}</h4>,
		md: <h3 className="font-bold text-lg lg:text-xl">{children}</h3>,
		xl: (
			<h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
				{children}
			</h2>
		),
		'2xl': (
			<h1 className="font-bold text-3xl md:text-4xl lg:text-6xl md:mb-4 lg:mb-10">
				{children}
			</h1>
		),
	};
	return sizes[size];
}

Title.propTypes = {
	children: PropTypes.any.isRequired,
	size: PropTypes.oneOf(['sm', 'md', 'xl', '2xl']),
};
export default Title;
