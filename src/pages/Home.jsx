import { BackImage, Title } from '../components';

import coverImg from '../assets/backdrop.jpg';

function Home() {
	return (
		<BackImage cover={coverImg} className="min-h-screen">
			<Title>Unlimited movies, TV shows, and more</Title>
		</BackImage>
	);
}
export default Home;
