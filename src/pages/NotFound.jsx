import { BackImage, Section, Title, Lead, Button } from '../components';
import { HOME } from '../constants/routes';
import coverImage from '../assets/not-found-bg.webp';
function NotFound() {
	return (
		<BackImage cover={coverImage} className="min-h-screen">
			<Section>
				<Section.Center>
					<Title size="2xl">Lost your way?</Title>
					<Lead>
						Sorry, we can&apos;t find that page. You&apos;ll find
						loads to explore on the homepage
					</Lead>
					<Button to={HOME}>Streamit Home</Button>
				</Section.Center>
			</Section>
		</BackImage>
	);
}
export default NotFound;
