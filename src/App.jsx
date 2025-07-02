// This file is like the file explorer, that controls where each route (subpage) goes to

import "./index.css";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import Movies from "./pages/Movies.jsx";
import Movie from "./pages/Movie.jsx";
import TVShows from "./pages/TVShows.jsx";
import TVShow from "./pages/TVShow.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<HomePage />} />
			<Route path="movies" element={<Movies />} />
			<Route path="movies/:movieId" element={<Movie />} />
			<Route path="tvshows" element={<TVShows />} />
			<Route path="tvshows/:tvshowId" element={<TVShow />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
