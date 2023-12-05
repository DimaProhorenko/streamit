import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

function Link({ to, children, ...restProps }) {
	return (
		<RouterLink
			to={to}
			{...restProps}
			className="text-primary font-medium capitalize hover:underline"
		>
			{children}
		</RouterLink>
	);
}

Link.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	to: PropTypes.string.isRequired,
};

export default Link;
