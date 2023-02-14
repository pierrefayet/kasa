import Homepage from './pages/Homepage/Homepage';
import Error from './pages/error/Error';
import About from './pages/about/About';
import Accomodation from "./pages/accomodation/Accomodation";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/p-7/",
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