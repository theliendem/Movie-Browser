import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className="bg-gray-800 p-4 shadow-lg">
				<div className="container mx-auto flex justify-center">
					<ul className="flex space-x-6">
						<li>
							<Link
								href="/"
								className="text-lg text-white hover:text-blue-400 transition duration-300"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/movies"
								className="text-lg text-white hover:text-blue-400 transition duration-300"
							>
								Movies
							</Link>
						</li>
						<li>
							<Link
								href="/tvshows"
								className="text-lg text-white hover:text-blue-400 transition duration-300"
							>
								TV Shows
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
