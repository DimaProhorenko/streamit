import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Logo, Section } from '../components';
import { SIGN_IN } from '../constants/routes';

function Signup() {
	return (
		<>
			<Header position="static">
				<Header.Content>
					<Logo />
					<Link to={SIGN_IN} className="text-white">
						Sign in
					</Link>
				</Header.Content>
			</Header>
			<Section useContainer={false}>
				<Container className="px-2 max-w-[450px]">
					<Outlet />
				</Container>
			</Section>
		</>
	);
}
export default Signup;
