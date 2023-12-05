import PropTypes from 'prop-types';

function Flex({ children, className = '' }) {
	return (
		<div
			className={`w-full flex flex-col items-center gap-6 lg:flex-row lg:justify-center ${className}`}
		>
			{children}
		</div>
	);
}

Flex.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
};

Flex.Item = function FlexItem({ children, className = '' }) {
	return <div className={`lg:basis-1/2 ${className}`}>{children}</div>;
};

Flex.Item.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
};
export default Flex;
