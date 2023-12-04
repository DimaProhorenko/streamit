import { Container } from './';
import PropTypes from 'prop-types';

function Section({ useContainer = true, children, ...restProps }) {
	return (
		<section className="py-4">
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
		<h2 className={`text-xl ${className}`} {...restProps}>
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
		<div
			className={`${className} flex items-center justify-between mb-4`}
			{...restProps}
		>
			{children}
		</div>
	);
};

Section.Header.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
};

export default Section;
