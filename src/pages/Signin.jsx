import { BackImage, Section, Card, Title, Form } from '../components';
import coverImg from '../assets/backdrop.jpg';

function Signin() {
	return (
		<BackImage cover={coverImg} className="min-h-screen">
			<Section>
				<Section.Center>
					<Card className="text-left w-full max-w-md">
						<Title size="lg">Sign In</Title>
						<Form>
							<Form.Field label="Email" type="email" />
						</Form>
					</Card>
				</Section.Center>
			</Section>
		</BackImage>
	);
}
export default Signin;
