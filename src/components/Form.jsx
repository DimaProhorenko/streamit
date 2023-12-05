import PropTypes from 'prop-types';
import { Formik, Form as FormikForm, useField } from 'formik';

function Form({ children, ...props }) {
	return (
		<Formik {...props}>
			<FormikForm>{children}</FormikForm>
		</Formik>
	);
}

Form.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Form;

Form.Field = function FormField({ label, ...props }) {
	const [field, meta] = useField(props);

	return (
		<div className="relative">
			<input
				{...field}
				{...props}
				placeholder={label}
				className="block placeholder:text-transparent w-full bg-gray-500 rounded-md px-4 pt-6 pb-2 outline-none peer leading-3"
			/>
			<label
				htmlFor={props.id || props.name}
				className="block absolute top-1 left-2 scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:translate-y-0 transition-transform"
			>
				{label}
			</label>
		</div>
	);
};

Form.Field.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.any,
	name: PropTypes.string,
};
