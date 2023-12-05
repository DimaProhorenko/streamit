import { BackImage, Section, Card } from '../components';
import coverImg from '../assets/backdrop.jpg';

function Signin() {
	return (
		<BackImage cover={coverImg} className="min-h-screen">
			<Section>
				<Section.Center>
					<Card>Hello</Card>
				</Section.Center>
			</Section>
		</BackImage>
	);
}
export default Signin;
