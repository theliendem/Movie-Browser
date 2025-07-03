import React from "react";

const Footer = () => {
	const [isHomePage, setIsHomePage] = React.useState(window.location.pathname === "/");

	React.useEffect(() => {
		const handleLocationChange = () => {
			setIsHomePage(window.location.pathname === "/");
		};

		window.addEventListener("popstate", handleLocationChange);
		
		// Also listen for navigation changes (for React Router)
		const originalPushState = history.pushState;
		const originalReplaceState = history.replaceState;
		
		history.pushState = function(...args) {
			originalPushState.apply(history, args);
			handleLocationChange();
		};
		
		history.replaceState = function(...args) {
			originalReplaceState.apply(history, args);
			handleLocationChange();
		};

		return () => {
			window.removeEventListener("popstate", handleLocationChange);
			history.pushState = originalPushState;
			history.replaceState = originalReplaceState;
		};
	}, []);

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
