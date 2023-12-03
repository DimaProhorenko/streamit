import { Container } from './';
import PropTypes from 'prop-types';

function Section({ useContainer = true, children, ...restProps }) {
	return (
		<section>
			{useContainer ? (
				<Container {...restProps}>{children}</Container>
			) : (
				children
			)}
		</section>
	);
}

Section.propTypes = {
	useContainer: PropTypes.bool,
	children: PropTypes.any,
};

Section.Title = function SectionTitle({
	className = '',
	children,
	...restProps
}) {
	return (
		<h2 className={`${className}`} {...restProps}>
			{children}
		</h2>
	);
};

Section.Title.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
};

Section.Header = function SectionHeader({
	className = '',
	children,
	...restProps
}) {
	return (
		<div className={`${className}`} {...restProps}>
			{children}
		</div>
	);
};

Section.Header.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
};

export default Section;
