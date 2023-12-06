import PropTypes from 'prop-types';

function Container({ className = '', children, ...restProps }) {
	return (
		<div className={`container py-1 ${className}`} {...restProps}>
			{children}
		</div>
	);
}

Container.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
};

export default Container;
