import { object } from 'yup';
import { Form } from '../components';
import {
	emailValidation,
	passwordValidation,
} from '../constants/inputValidation';

function SignupForm() {
	return (
		<Form
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={object({
				...emailValidation,
				...passwordValidation,
			})}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			<Form.Field label="Email" name="email" id="email" />
			<Form.Field label="Password" name="password" id="password" />
			<Form.Submit display="block">Next</Form.Submit>
		</Form>
	);
}
export default SignupForm;
