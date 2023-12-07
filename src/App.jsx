import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
	DISCOVER,
	HOME,
	SIGN_IN,
	SIGN_UP,
	SIGN_UP_PLAN,
	SIGN_UP_REGISTRATION,
	SIGN_UP_REG_FORM,
} from './constants/routes';
import {
	Discover,
	Home,
	NotFound,
	Signin,
	Signup,
	SignupPlan,
	SignupRegForm,
	SignupRegistration,
} from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME} element={<Home />} />
				<Route path={DISCOVER} element={<Discover />} />
				<Route path={SIGN_IN} element={<Signin />} />
				<Route path={`${SIGN_UP}/*`} element={<Signup />}>
					<Route
						path={SIGN_UP_REGISTRATION}
						element={<SignupRegistration />}
					/>
					<Route
						path={SIGN_UP_REG_FORM}
						element={<SignupRegForm />}
					/>
					<Route path={SIGN_UP_PLAN} element={<SignupPlan />} />
					<Route
						index
						element={<Navigate replace to={SIGN_UP_REGISTRATION} />}
					/>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
