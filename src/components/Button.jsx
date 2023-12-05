import PropTypes from 'prop-types';

function Button({ children, to, className, onClick }) {
	const btnClasses = `inline-block relative overflow-hidden px-8 py-2 bg-primary text-white cursor-pointer rounded-md before:absolute before:inset-0 before:bg-red-700 hover:before:scale-x-0 before:transition-transform uppercase ${
		className || ''
	}`;
	const spanClasses = 'relative z-[1]';

	const handleClick = () => {
		if (typeof onClick === 'function') {
			onClick();
		}
	};

	return to ? (
		<a href={to} className={btnClasses} onClick={handleClick}>
			<span className={spanClasses}>{children}</span>
		</a>
	) : (
		<button className={btnClasses} onClick={handleClick}>
			<span className={spanClasses}>{children}</span>
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.any.isRequired,
	to: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
