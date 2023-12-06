import { Card, Section, Title } from '../components';

function WhyJoin() {
	return (
		<Section>
			<Section.Header>
				<Title>Reasons to Join</Title>
			</Section.Header>
			<div className="flex items-stretch justify-center flex-wrap gap-2 md:gap-3 lg:gap-5">
				<div className="flex-1 md:flex-1/2 lg:flex-1/4 min-w-[250px]">
					<Card
						className="bg-gradient-to-r from-violet-800 to-fuchsia-800 h-full"
						spacing="p-2 lg:p-4"
					>
						<Title size="md">Enjoy on your TV</Title>
						<p>
							Watch on Smart TVs, Playstation, Xbox, Chromecast,
							Apple TV, Blu-ray players, and more.
						</p>
					</Card>
				</div>
				<div className="flex-1 md:flex-1/2 lg:flex-1/4 min-w-[250px]">
					<Card
						className="bg-gradient-to-r from-violet-800 to-fuchsia-800 h-full"
						spacing="p-2 lg:p-4"
					>
						<Title size="md">
							Download your shows to watch offline
						</Title>
						<p>
							Save your favorites easily and always have something
							to watch.
						</p>
					</Card>
				</div>
				<div className="flex-1 md:flex-1/2 lg:flex-1/4 min-w-[250px]">
					<Card
						className="bg-gradient-to-r from-violet-800 to-fuchsia-800 h-full"
						spacing="p-2 lg:p-4"
					>
						<Title size="md">Watch everywhere</Title>
						<p>
							Stream unlimited movies and TV shows on your phone,
							tablet, laptop, and TV.
						</p>
					</Card>
				</div>
				<div className="flex-1 md:flex-1/2 lg:flex-1/4 min-w-[250px]">
					<Card
						className="bg-gradient-to-r from-violet-800 to-fuchsia-800 h-full"
						spacing="p-2 lg:p-4"
					>
						<Title size="md">Create profiles for kids</Title>
						<p>
							Send kids on adventures with their favorite
							characters in a space made just for them — free with
							your membership.
						</p>
					</Card>
				</div>
			</div>
		</Section>
	);
}
export default WhyJoin;
