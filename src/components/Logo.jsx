import { Link } from 'react-router-dom';
import { HOME } from '../constants/routes';
import logoImg from '../assets/logo.webp';

function Logo() {
	return (
		<Link to={HOME} className="block max-w-[120px] md:max-w-[150px]">
			<img src={logoImg} alt="StreamIt homepage" />
		</Link>
	);
}
export default Logo;
