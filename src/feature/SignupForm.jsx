import { useNavigate } from 'react-router-dom';
import { object } from 'yup';
import { Form } from '../components';
import {
	emailValidation,
	passwordValidation,
} from '../constants/inputValidation';
import { SIGN_UP_PLAN } from '../constants/routes';

function SignupForm() {
	const navigate = useNavigate();
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
				navigate(`../${SIGN_UP_PLAN}`);
			}}
		>
			<Form.Field label="Email" name="email" id="email" />
			<Form.Field label="Password" name="password" id="password" />
			<Form.Submit display="block">Next</Form.Submit>
		</Form>
	);
}
export default SignupForm;
