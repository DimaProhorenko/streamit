import { Container } from './';
import PropTypes from 'prop-types';

function Header({ children, position = 'absolute' }) {
	return (
		<header className={`${position} top-0 left-0 w-full z-50 py-4`}>
			{children}
		</header>
	);
}

Header.propTypes = {
	children: PropTypes.any.isRequired,
	position: PropTypes.oneOf([
		'absolute',
		'static',
		'relative',
		'fixed',
		'sticky',
	]),
};

Header.Content = function HeaderContent({ children }) {
	return (
		<Container className="flex items-center justify-between">
			{children}
		</Container>
	);
};

Header.Content.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Header;
