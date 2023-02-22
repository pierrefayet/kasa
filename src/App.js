import Homepage from './pages/homepage/Homepage';
import Error from './pages/error/Error';
import About from './pages/about/About';
import Accomodation from "./pages/accomodation/Accomodation";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
		exact: true
	},
	{
		path: "accomodation/Accomodation/:id",
		element: <Accomodation />
	},
	{
		path: "about/About",
		element: <About />
	},
	{
		path: "*",
		element: <Error />
	},
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

