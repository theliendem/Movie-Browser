import React from "react";

const Navbar = () => {
	return (
		<>
			<nav className="bg-gray-800 p-4 shadow-lg">
				<div className="container mx-auto flex justify-center">
					<ul className="flex space-x-6">
						<li>
							<a
								href="/"
								className="text-lg text-white hover:text-blue-400 transition duration-300"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="/movies"
								className="text-lg text-white hover:text-blue-400 transition duration-300"
							>
								Movies
							</a>
						</li>
						<li>
							<a
								href="/tvshows"
								className="text-lg text-white hover:text-blue-400 transition duration-300"
							>
								TV Shows
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
