import Homepage from './pages/homepage/Homepage';
import Error from './pages/error/Error';
import About from './pages/about/About';
import Accomodation from "./pages/accomodation/Accomodation";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { rootPath, accomodationPath, aboutPath } from "./routes";
const router = createBrowserRouter([
	{
		path: rootPath,
		element: <Homepage />,
		exact: true
	},
	{
		path: accomodationPath,
		element: <Accomodation />
	},
	{
		path: aboutPath,
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

