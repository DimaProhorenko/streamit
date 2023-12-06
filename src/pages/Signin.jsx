import { object } from 'yup';

import { BackImage, Section, Card, Title, Form, Link } from '../components';
import { HeaderLogo } from '../feature';
import { SIGN_UP } from '../constants/routes';
import {
	emailValidation,
	passwordValidation,
} from '../constants/inputValidation';

import coverImg from '../assets/backdrop.jpg';

function Signin() {
	return (
		<>
			<HeaderLogo />
			<BackImage cover={coverImg} className="min-h-screen">
				<Section>
					<Section.Center>
						<Card className="text-left w-full max-w-md">
							<Title size="xl" className="font-medium">
								Sign In
							</Title>
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
								<Form.Field
									label="Email"
									type="email"
									name="email"
									id="email"
								/>
								<Form.Field
									label="Password"
									type="password"
									name="password"
									id="password"
								/>
								<Form.Submit display="block">
									Sign in
								</Form.Submit>
							</Form>
							<p className="mt-6 md:mt-8 lg:mt-9">
								New to Streamit?{' '}
								<Link to={SIGN_UP} className="text-white">
									Sign up now
								</Link>
							</p>
						</Card>
					</Section.Center>
				</Section>
			</BackImage>
		</>
	);
}
export default Signin;
