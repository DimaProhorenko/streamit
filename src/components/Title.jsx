import PropTypes from 'prop-types';

function Title({ children, size = 'md', className = '' }) {
	const sizes = {
		sm: <h5 className={`font-bold  ${className}`}>{children}</h5>,
		md: (
			<h4 className={`font-bold text-lg lg:text-xl ${className}`}>
				{children}
			</h4>
		),
		lg: (
			<h3
				className={`font-bold text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-4 ${className}`}
			>
				{children}
			</h3>
		),
		xl: (
			<h2
				className={`font-bold text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 lg:mb-5 ${className}`}
			>
				{children}
			</h2>
		),
		'2xl': (
			<h1
				className={`font-bold text-3xl md:text-4xl lg:text-6xl md:mb-4 lg:mb-10 ${className}`}
			>
				{children}
			</h1>
		),
	};
	return sizes[size];
}

Title.propTypes = {
	children: PropTypes.any.isRequired,
	size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
	className: PropTypes.string,
};
export default Title;
