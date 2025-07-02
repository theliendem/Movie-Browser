import React from "react";
import { Link } from "react-router-dom";

const TVShowCard = ({ id, poster_path, title, desc }) => {
	return (
		<>
			<li className="border border-gray-700 rounded-lg p-4 shadow-lg bg-gray-800 hover:bg-gray-700 transition duration-300">
				<Link to={`/tvshows/${id}`} key={id}>
					<img
						src={`https://image.tmdb.org/t/p/w500${poster_path}`}
						alt={title}
						className="w-full h-auto rounded-md mb-2"
					/>
					<h1 className="text-lg font-bold mb-1 text-white">{title}</h1>
					<p className="text-sm text-gray-400 line-clamp-3">{desc}</p>
				</Link>
			</li>
		</>
	);
};

export default TVShowCard;
