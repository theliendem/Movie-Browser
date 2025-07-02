import React from "react";

const Footer = () => {
	const isHomePage = window.location.pathname === "/";

	return (
		<>
			<footer
				className={`bg-gray-800 text-white py-10 ${
					isHomePage ? "mt-[-100px]" : ""
				}`}
			>
				<div className="container mx-auto px-4">
					<p className="text-center">
						&copy; {new Date().getFullYear()}{" "}
						<a
							href="https://neildembla.com/"
							className="underline hover:text-gray-400"
						>
							Neil Dembla
						</a>
						. All rights reserved.
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
