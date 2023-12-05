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
		<div>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input {...field} {...props} />
		</div>
	);
};

Form.Field.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.any,
	name: PropTypes.string,
};
