import React, { useState, useEffect } from "react";
import TVShowCard from "../components/TVShowCard";

const TVShows = () => {
	const [tvshows, setTvshows] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	const fetchTvshows = (query) => {
		let url = "";
		if (query == "")
			url = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
		else
			url = `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`;

		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${import.meta.env.VITE_BEARER}`,
			},
		};

		fetch(url, options)
			.then((res) => res.json())
			.then((json) => setTvshows(json.results))
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		fetchTvshows("");
	}, []);

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
		fetchTvshows(e.target.value);
	};

	return (
		<div className="text-white min-h-screen p-4">
			<div className="container mx-auto py-4">
				<input
					type="text"
					placeholder="Search for a TV show"
					value={searchQuery}
					onChange={handleSearchChange}
					className="w-full p-3 mb-6 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{tvshows.map((movie) => (
						<TVShowCard
							id={movie.id}
							poster_path={movie.poster_path}
							title={movie.title}
							desc={movie.overview}
						></TVShowCard>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TVShows;
