import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({
	children,
	to,
	className,
	onClick,
	display = 'inline-block',
	...restProps
}) {
	const btnClasses = `${
		display === 'block' ? 'block w-full py-3' : display
	} relative overflow-hidden px-8 py-2 bg-primary text-white cursor-pointer rounded-md before:absolute before:inset-0 before:bg-red-700 enabled:hover:before:scale-x-0 before:transition-transform uppercase disabled:opacity-50 disabled:cursor-not-allowed ${
		className || ''
	}`;
	const spanClasses = 'relative z-[1]';

	const handleClick = () => {
		if (typeof onClick === 'function') {
			onClick();
		}
	};

	return to ? (
		<Link
			to={to}
			className={btnClasses}
			onClick={handleClick}
			{...restProps}
		>
			<span className={spanClasses}>{children}</span>
		</Link>
	) : (
		<button className={btnClasses} onClick={handleClick} {...restProps}>
			<span className={spanClasses}>{children}</span>
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.any.isRequired,
	to: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	display: PropTypes.oneOf(['block', 'inline']),
};

export default Button;
