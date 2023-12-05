import { BackImage, Section, Title, Link, Lead } from '../components';
import { SIGN_IN, SIGN_UP } from '../constants/routes';
import coverImg from '../assets/backdrop.jpg';

function Home() {
	return (
		<BackImage cover={coverImg} className="min-h-screen">
			<Section>
				<Section.Center>
					<div className="max-w-[600px]">
						<Title size="2xl">
							Unlimited movies, TV shows, and more
						</Title>
						<Lead>Starts at EUR 4.99. Cancel anytime.</Lead>
						<p>
							Ready to watch?{' '}
							<Link to={SIGN_UP}>Create your account</Link> or{' '}
							<Link to={SIGN_IN}>Sign in</Link>
						</p>
					</div>
				</Section.Center>
			</Section>
		</BackImage>
	);
}
export default Home;
