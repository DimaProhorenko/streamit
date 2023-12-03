import PropTypes from 'prop-types';

function Link({ href, children, ...restProps }) {
	return (
		<a
			href={href}
			{...restProps}
			className="text-primary font-medium capitalize"
		>
			{children}
		</a>
	);
}

Link.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
};

export default Link;
