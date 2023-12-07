import { Title } from '../components';
import { SignupForm } from '../feature';

function SignupRegForm() {
	return (
		<>
			<Title>Step 1 of 3</Title>
			<Title size="xl">
				Create email and password to start your membership
			</Title>
			<p>Just a few more steps and your are done!</p>
			<p className="mb-4">We hate paperwork, too.</p>
			<SignupForm />
		</>
	);
}
export default SignupRegForm;
