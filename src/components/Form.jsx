import React from 'react';
import PropTypes from 'prop-types';
import { Formik, useField } from 'formik';
import Button from './Button';

function Form({ children, ...props }) {
	return (
		<Formik {...props}>
			{/* <FormikForm>{children}</FormikForm> */}
			{({ isValid, dirty }) =>
				React.Children.map(children, (child) => {
					if (React.isValidElement(child)) {
						return React.cloneElement(child, { isValid, dirty });
					}
					return child;
				})
			}
		</Formik>
	);
}

Form.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Form;

Form.Field = function FormField(props) {
	const { label, isValid, dirty, ...restProps } = props;
	const [field, meta] = useField(restProps);

	return (
		<div className="relative mb-4 lg:mb-6">
			<input
				{...field}
				{...restProps}
				placeholder={label}
				className="block placeholder:text-transparent w-full bg-gray-500 rounded-md px-4 pt-6 pb-2 outline-none peer leading-3"
			/>
			<label
				htmlFor={props.id || props.name}
				className="block absolute top-1 left-2 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:translate-y-0 transition-transform"
			>
				{label}
			</label>
			{meta.touched && meta.error && (
				<Form.Error className="mt-2">{meta.error}</Form.Error>
			)}
		</div>
	);
};

Form.Field.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.any,
	name: PropTypes.string,
	isValid: PropTypes.bool,
	dirty: PropTypes.bool,
};

Form.Error = function FormError({ children, className = '' }) {
	return (
		<span className={`block text-red-500 text-sm ${className}`}>
			{children}
		</span>
	);
};

Form.Error.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
};

Form.Submit = function FormSubmit({
	children,
	isValid,
	dirty,
	className,
	...restProps
}) {
	return (
		<Button
			className={className}
			{...restProps}
			type="submit"
			disabled={!(isValid && dirty)}
		>
			{children}
		</Button>
	);
};

Form.Submit.propTypes = {
	children: PropTypes.any.isRequired,
	isValid: PropTypes.bool,
	dirty: PropTypes.bool,
	className: PropTypes.string,
};
