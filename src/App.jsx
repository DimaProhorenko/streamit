import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DISCOVER, HOME, SIGN_IN } from './constants/routes';
import { Discover, Home, NotFound, Signin } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME} element={<Home />} />
				<Route path={DISCOVER} element={<Discover />} />
				<Route path={SIGN_IN} element={<Signin />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
