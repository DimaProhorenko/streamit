import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

function Link({ to, children, className = '', ...restProps }) {
	return (
		<RouterLink
			to={to}
			{...restProps}
			className={`text-primary font-medium capitalize hover:underline ${className}`}
		>
			{children}
		</RouterLink>
	);
}

Link.propTypes = {
	children: PropTypes.any.isRequired,
	to: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default Link;
