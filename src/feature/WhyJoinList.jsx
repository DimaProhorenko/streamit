import { Card, Title } from '../components';
import data from '../fixtures/whyJoin.json';

function WhyJoinList() {
	return (
		<div className="flex items-stretch justify-center flex-wrap gap-2 md:gap-3 lg:gap-5">
			{data.map((item) => (
				<div
					key={item.id}
					className="flex-1 md:flex-1/2 lg:flex-1/4 min-w-[250px]"
				>
					<Card
						className="bg-gradient-to-r from-violet-800 to-fuchsia-800 h-full"
						spacing="p-2 lg:p-4"
					>
						<Title size="md">{item.title}</Title>
						<p>{item.text}</p>
					</Card>
				</div>
			))}
		</div>
	);
}
export default WhyJoinList;
