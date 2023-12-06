import { Header, Logo, Button } from '../components';
import { SIGN_IN } from '../constants/routes';

function HomeHeader() {
	return (
		<Header>
			<Header.Content>
				<Logo />
				<Button to={SIGN_IN}>Sign in</Button>
			</Header.Content>
		</Header>
	);
}
export default HomeHeader;
