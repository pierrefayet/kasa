import Homepage from './pages/homepage/Homepage';
import Error from './pages/error/Error';
import About from './pages/about/About';
import Accomodation from "./pages/accomodation/Accomodation";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />
	},
	{
		path: "/accomodation/:id",
		element: <Accomodation />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "*",
		element: <Error />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;