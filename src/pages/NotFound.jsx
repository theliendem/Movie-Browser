import React from 'react'

const NotFound = () => {
  return (
		<div className="min-h-[93.6vh] bg-gray-900 flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-9xl font-bold text-gray-700">404</h1>
				<h2 className="text-3xl font-semibold text-white mt-4">
					Page Not Found
				</h2>
				<p className="text-gray-400 mt-2 mb-6">
					The page you're looking for doesn't exist.
				</p>
				<a
					href="/"
					className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
				>
					Go Home
				</a>
			</div>
		</div>
	);
}

export default NotFound