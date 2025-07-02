// This is the actual home page

import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="text-white min-h-[93.6vh] flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-5xl font-bold mb-4">Welcome to the Movie Browser</h1>
				<p className="text-xl text-gray-400">
					Bored of binge-watching the same old movies/shows? <br />
					Try something new!
				</p>
				<div className="mt-10">
					<div className="flex justify-center gap-4">
						<Link
							to="/movies"
							className="border-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 border-2"
						>
							Movies
						</Link>
						<Link
							to="/tvshows"
							className="border-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 border-2"
						>
							TV Shows
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
