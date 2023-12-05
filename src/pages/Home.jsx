import { BackImage } from '../components';

import coverImg from '../assets/backdrop.jpg';

function Home() {
	return (
		<BackImage cover={coverImg} className="min-h-screen">
			<h1>WELCOME</h1>
		</BackImage>
	);
}
export default Home;
