import { Button, Title } from '../components';
import { SIGN_UP_REG_FORM } from '../constants/routes';

function SignupRegistration() {
	return (
		<div className="text-center">
			<Title className="text-gray-300 font-normal">Step 1 of 3</Title>
			<Title size="xl" className="font-medium">
				Finish setting up your account
			</Title>
			<p className="mb-3">
				Streamit is personalized for you. Create your account to start
				watching Streamit
			</p>
			<Button display="block" to={`../${SIGN_UP_REG_FORM}`}>
				Next
			</Button>
		</div>
	);
}
export default SignupRegistration;
