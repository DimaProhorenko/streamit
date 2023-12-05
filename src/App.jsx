import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DISCOVER, HOME } from './constants/routes';
import { Discover, Home } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME} element={<Home />} />
				<Route path={DISCOVER} element={<Discover />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
