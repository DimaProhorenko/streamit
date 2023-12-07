import { Button, Title } from '../components';
import data from '../fixtures/signupPlan.json';

function SignupPlan() {
	return (
		<div className="text-center max-w-fit mx-auto">
			<Title>Step 2 of 3</Title>
			<Title size="xl">Choose your plan.</Title>
			<ul className="text-left mb-4">
				{data.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
			<Button display="block">Next</Button>
		</div>
	);
}
export default SignupPlan;
