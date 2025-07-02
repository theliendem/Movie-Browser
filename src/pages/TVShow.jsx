import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TVShow = () => {
	const { tvshowId } = useParams();
	const [info, setInfo] = useState(null);

	const fetchTvshowData = async () => {
		let url = `https://api.themoviedb.org/3/tv/${tvshowId}?language=en-US`;

		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${import.meta.env.VITE_BEARER}`,
			},
		};

		try {
			const res = await fetch(url, options);
			const json = await res.json();
			setInfo(json);

			// let formattedDate = ;
		} catch (err) {
			console.error("Error fetching show data:", err);
		}
	};

	useEffect(() => {
		fetchTvshowData();
	});

	const formatRuntime = (minutes) => {
		if (minutes === 0 || minutes === undefined || minutes === null)
			return "N/A";
		const hours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;
		return `${hours}h ${remainingMinutes}m`;
	};

	return (
		<div className="bg-gray-900 text-white">
			{info ? (
				<>
					<div
						className="relative h-96 bg-cover bg-center flex items-end p-8"
						style={{
							backgroundImage: `url(https://image.tmdb.org/t/p/original/${info.backdrop_path})`,
						}}
					>
						<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
						<div className="relative z-10">
							<h1 className="text-5xl font-bold mb-2">{info.title}</h1>
							{info.tagline && (
								<p className="text-xl italic text-gray-300">{info.tagline}</p>
							)}
						</div>
					</div>

					{/* Main Content */}
					<div className="container mx-auto p-8 flex flex-col md:flex-row gap-8">
						{info.poster_path && (
							<img
								src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
								alt={info.title}
								className="w-full md:w-1/3 lg:w-1/4 h-auto rounded-lg shadow-lg object-cover"
							/>
						)}
						<div className="flex-1">
							<h2 className="text-3xl font-bold mb-4">Overview</h2>
							<p className="text-gray-300 mb-6">{info.overview}</p>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
								<div>
									<h3 className="font-bold">Release Date:</h3>
									<p>
										{new Date(info.release_date).toLocaleString("en-US", {
											day: "numeric",
											month: "long",
											year: "numeric",
										})}
									</p>
								</div>
								<div>
									<h3 className="font-bold">Runtime:</h3>
									<p>{formatRuntime(info.runtime)}</p>
								</div>
								<div>
									<h3 className="font-bold">Rating:</h3>
									<p>
										{info.vote_average ? info.vote_average.toFixed(1) : "N/A"} /
										10
									</p>
								</div>
								<div>
									<h3 className="font-bold">Genres:</h3>
									<p>
										{info.genres && info.genres.length > 0
											? info.genres.map((genre) => genre.name).join(", ")
											: "N/A"}
									</p>
								</div>
							</div>

							{info.production_companies &&
								info.production_companies.length > 0 && (
									<div>
										<h3 className="font-bold mb-2">Production Companies:</h3>
										<div className="flex flex-wrap gap-4">
											{info.production_companies.map((company) => (
												<div
													key={company.id}
													className="flex items-center space-x-2 bg-gray-800 p-2 rounded-lg"
												>
													{company.logo_path && (
														<img
															src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`}
															alt={company.name}
															className="h-8 object-contain filter invert brightness-0"
														/>
													)}
													<span className="text-sm">{company.name}</span>
												</div>
											))}
										</div>
									</div>
								)}
						</div>
					</div>
				</>
			) : (
				<div className="flex justify-center items-center h-screen">
					<p className="text-white text-xl">Loading movie data...</p>
				</div>
			)}
		</div>
	);
};

export default TVShow;
